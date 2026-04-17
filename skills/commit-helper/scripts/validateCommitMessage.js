/**
 * Validate commit message against Conventional Commits specification
 * Format: <type>[scope]: <description>
 * 
 * Returns true if valid, false otherwise
 */

const commitMessageRegex = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([\w\-]+\))?:\s+\S.*$/;

export function validateCommitMessage(message) {
  return commitMessageRegex.test(message.trim());
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node validateCommitMessage.js "<commit message>"');
    process.exit(1);
  }

  const commitMessage = args.join(' ');
  const isValid = validateCommitMessage(commitMessage);
  
  console.log(isValid);
  process.exit(isValid ? 0 : 1);
}
