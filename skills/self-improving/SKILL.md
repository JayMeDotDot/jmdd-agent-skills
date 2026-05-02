---
name: self-improving
description: "Log learnings, errors, and feature requests to structured markdown files in .learnings/ for continuous improvement across sessions. Use when the user requests to summarize learnings, errors, or feature requests at the end of a session."
---

# Self-Improving

Log learnings, errors, and feature requests to structured markdown files in .learnings/ for continuous improvement across sessions. Coding agents process these into fixes, and high-value learnings get promoted to project or cross-project memory.

## Goal

Extract valuable insights from the current session or conversation and log them to structured markdown files in the `.learnings/` directory. This creates a persistent memory of gotchas, new patterns, and technical debt that can be reviewed in future sessions to prevent repeated mistakes and inform continuous improvement.

## Scope Constraint

This skill operates primarily on files within the `.learnings/` directory. It should not modify source code, configuration, or other project documentation. Its purpose is strictly to observe and document the results of the conversation.

## Workflow

### 1. Analyze the Session

Review the recent conversation or the user's provided context to identify key events:
- **Learnings**: What new patterns, architectural decisions, or tool configurations were successfully implemented?
- **Errors/Gotchas**: What bugs or roadblocks were encountered? How were they resolved?
- **Feature Requests / Tech Debt**: What shortcuts were taken? What features were discussed but deferred?

### 2. Formulate the Log Entry

Organize the extracted information into a structured format. 

Use the following template:

```markdown
## Session Focus: [Brief Topic Description]
**Time**: HH:MM

### 📝 Learnings
- [Learning 1]
- [Learning 2]

### 🐛 Errors & Resolutions
- **Error**: [Description of error]
  - **Resolution**: [How it was fixed]

### 💡 Feature Requests & Tech Debt
- [Item 1]
- [Item 2]
```

### 3. Log the Session

Write the formulated log entry to a new session file:
- Create a new file for the session: `.learnings/session-YYYYMMDD-HHMM.md`.

### 4. Check Consolidation Threshold (The 5-Session Rule)

Count the number of active `session-*.md` files in the `.learnings/` directory. If there are **5 or more session files**, trigger the consolidation process:
1. **Extract to Master**: Read the session logs and extract the highest-value, generalized patterns, rules, and best practices. Append or integrate these into the main `.learnings/master-learnings.md` file.
2. **Compress to Archive**: Read the existing `.learnings/archive.md` (if it exists) along with the 5 session logs. Generate a new, comprehensive, and compressed summary of all past history and **overwrite** the `archive.md` file with this new summary.
3. **Prune**: Delete the 5 `session-*.md` files that have just been consolidated.

### 5. Review and Confirm

Present a brief summary of what was logged to the user. If consolidation occurred, explicitly mention that the sessions were merged into `master-learnings.md` and `archive.md` was overwritten.

## Behavior

**Language**: Match the language of the user's request.
**Conciseness**: Keep the logged items actionable and specific. Avoid vague statements.
**Objectivity**: Focus on technical details, decisions, and concrete outcomes rather than conversational filler.

## Deliverable

After the logging is complete, provide:
- A brief confirmation that the session was logged.
- The path to the file where the log was saved.
- A bulleted list summarizing the key categories logged (e.g., "Logged 2 learnings and 1 error resolution").