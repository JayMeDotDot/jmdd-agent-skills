---
name: code-review
description: Use when reviewing PRs, diffs, or code changes. Covers correctness, security, quality, and project-specific patterns.
---
# Code Reviewer
A comprehensive code review skill that analyzes pull requests and code changes for quality, security, maintainability, and best practices.

## Before You Start

1. **Get changed files**
   ```bash
   git diff main...HEAD --name-only
   git log main...HEAD --oneline
   ```

2. **Get the diff**
   ```bash
   git diff main...HEAD
   ```

3. **Understand project context**
   - Read relevant documentation
   - Check existing patterns in similar files
   - Identify project-specific conventions

## Checklist

### Correctness
- [ ] Logic is sound and matches the requirements
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] No obvious bugs or typos

### Security
- [ ] No sensitive data (API keys, tokens, credentials)
- [ ] No hardcoded secrets — use environment variables
- [ ] Input validation and sanitization
- [ ] SQL injection prevention
- [ ] XSS prevention (for frontend)
- [ ] Authentication/authorization checks
- [ ] Safe handling of user data

### Performance
- [ ] No N+1 queries
- [ ] Appropriate caching
- [ ] Efficient algorithms
- [ ] No unnecessary computations
- [ ] Memory efficiency

###  Code Quality
- [ ] Follows DRY principle
- [ ] Follows KISS principle
- [ ] Appropriate abstractions
- [ ] Clear naming conventions
- [ ] Proper typing (if TypeScript)

### Testing
- [ ] Tests cover new functionality
- [ ] Tests cover edge cases
- [ ] Test assertions are meaningful
- [ ] No brittle tests

### Documentation
- [ ] Complex logic is explained
- [ ] Public APIs have documentation
- [ ] JSDoc/TSDoc for functions
- [ ] README updated if needed

### Maintainability
- [ ] Code is readable
- [ ] Consistent style
- [ ] Modular design
- [ ] Separation of concerns

### Output Format
Use this structured format for review feedback:

```markdown
# Code Review

## Summary
Brief overview of the changes (2-3 sentences).

## Issues by Severity

### Critical
Must fix before merge.

- [ ] **Issue Title**: Description with file:line reference

### High
Should fix before merge unless there's a good reason.

- [ ] **Issue Title**: Description with file:line reference

### Medium
Consider fixing, can be done in follow-up.

- [ ] **Issue Title**: Description with file:line reference

### Low
Nice to have improvements.

- [ ] **Issue Title**: Description with file:line reference

## Positive Highlights
What was done well in this PR.

## Suggestions
Optional improvements that don't require immediate action.

## Approval Status
- [ ] Approved
- [ ] Approved with suggestions
- [ ] Request changes
```