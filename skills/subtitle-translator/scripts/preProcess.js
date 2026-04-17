/**
 * Subtitle Pre-processor for AI Translation
 * 
 * This script reads a subtitle file (SRT or VTT) and extracts the text segments
 * into a structured JSON format. This output is intended to be consumed by an
 * AI agent or LLM for context-aware translation.
 * 
 * Usage: node preProcess.js <path_to_subtitle_file>
 */

const fs = require('fs');
const path = require('path');

// --- Parsers ---

/**
 * Parses SRT (SubRip Subtitle) format.
 * Structure:
 * 1
 * 00:00:01,000 --> 00:00:04,000
 * Text line 1
 * Text line 2
 */
function parseSRT(content) {
    // Normalize line endings to \n
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // Split by double newlines (blank lines between blocks)
    const blocks = content.trim().split(/\n\n+/);

    return blocks.map(block => {
        const lines = block.split('\n');
        
        // A valid block usually needs at least index, time, and text
        if (lines.length < 2) return null;

        // Regex to identify timestamp line: 00:00:00,000 --> 00:00:00,000
        const timeLineIndex = lines.findIndex(line => line.includes('-->'));
        
        if (timeLineIndex === -1) return null;

        const index = lines.slice(0, timeLineIndex).join('').trim();
        const time = lines[timeLineIndex].trim();
        const text = lines.slice(timeLineIndex + 1).join('\n');

        return {
            id: index || null,
            time: time,
            original_text: text
        };
    }).filter(Boolean); // Filter out nulls
}

/**
 * Parses VTT (Web Video Text Tracks) format.
 * Structure:
 * WEBVTT
 * 
 * 1
 * 00:00:01.000 --> 00:00:04.000
 * Text line 1
 */
function parseVTT(content) {
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // Remove header
    const lines = content.split('\n');
    let startIndex = 0;
    
    // Skip WEBVTT header and any headers until the first blank line or timestamp
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('-->')) {
            // Backtrack one line if it looks like an ID
            if (i > 0 && lines[i-1].trim() !== '' && lines[i-1].trim() !== 'WEBVTT') {
                startIndex = i - 1;
            } else {
                startIndex = i;
            }
            break;
        }
    }
    
    const body = lines.slice(startIndex).join('\n');
    const blocks = body.trim().split(/\n\n+/);

    return blocks.map((block, i) => {
        const bLines = block.split('\n');
        if (bLines.length === 0) return null;

        const timeLineIndex = bLines.findIndex(line => line.includes('-->'));
        
        if (timeLineIndex === -1) return null;

        // VTT IDs are optional. If not present, we can generate a sequential one or leave null.
        const id = (timeLineIndex > 0) ? bLines[0].trim() : (i + 1).toString();
        const time = bLines[timeLineIndex].trim();
        const text = bLines.slice(timeLineIndex + 1).join('\n');

        return {
            id: id,
            time: time,
            original_text: text
        };
    }).filter(Boolean);
}

// --- Main Execution ---

const filePath = process.argv[2];

if (!filePath) {
    console.error("Error: No file path provided.");
    console.error("Usage: node preProcess.js <path_to_subtitle_file>");
    process.exit(1);
}

try {
    const absolutePath = path.resolve(filePath);
    
    if (!fs.existsSync(absolutePath)) {
        console.error(`Error: File not found at ${absolutePath}`);
        process.exit(1);
    }

    const content = fs.readFileSync(absolutePath, 'utf8');
    const ext = path.extname(absolutePath).toLowerCase();

    let parsedData = [];

    if (ext === '.vtt') {
        parsedData = parseVTT(content);
    } else {
        // Default to SRT parser for .srt and unknown types (often similar)
        parsedData = parseSRT(content);
    }

    // Output JSON to stdout. 
    // The AI Agent can capture this output to proceed with translation.
    console.log(JSON.stringify(parsedData, null, 2));

} catch (error) {
    console.error("Unexpected error:", error);
    process.exit(1);
}
