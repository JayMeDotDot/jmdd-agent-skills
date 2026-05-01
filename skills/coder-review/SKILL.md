---
name: code-review
description: Use when reviewing PRs, diffs, or code changes. Covers correctness, performance, quality, compatibility, and issue tracking.
---

# Code Reviewer

A code review skill that analyzes pull requests and code changes for correctness, performance, quality, maintainability, and best practices.

## Before You Start

### 1. Get the Diff

```bash
# Find the base branch (check which remote branch this was branched from)
git log --oneline -10
git rev-parse --abbrev-ref HEAD

# Get changed files and diff (replace BASE_BRANCH with actual base branch)
git diff BASE_BRANCH...HEAD --name-only
git diff BASE_BRANCH...HEAD
```

If the base branch is unclear, ask the user.

### 2. Understand Project Context

- Read relevant documentation
- Check existing patterns in similar files
- Identify project-specific conventions (linting, naming, structure)

### 3. Check for Linked Issue

Look for issue references in branch name, commit messages, or PR description:

```bash
# Check branch name for issue number (e.g., feat/123-add-login, fix-#456)
git rev-parse --abbrev-ref HEAD

# Check recent commit messages for issue references
git log BASE_BRANCH...HEAD --oneline
```

## Checklist

### Correctness

- [ ] Logic is sound and matches the stated requirements or issue description
- [ ] Edge cases are handled (null/undefined, empty collections, boundary values, concurrent access)
- [ ] Error handling is appropriate — errors are caught, logged, or propagated correctly
- [ ] No obvious bugs, typos, or off-by-one errors

### Security

- [ ] No obvious security issues introduced by this change
- If the change touches auth, encryption, user input handling, or access control, run `security-auditor` for a deep review

### Performance

- [ ] No N+1 queries or unbounded loops over data from external sources
- [ ] No unnecessary heavy computation in hot paths
- [ ] Large data sets are paginated or streamed, not loaded entirely into memory

### Code Quality

- [ ] Follows DRY principle — no copy-pasted logic
- [ ] Follows KISS principle — no over-engineering for current requirements
- [ ] Appropriate abstractions — not too deep, not too shallow
- [ ] Clear naming conventions — variables, functions, and files convey intent
- [ ] Proper typing where the project uses a type system

### Compatibility

- [ ] Public API signatures are not broken without a migration path
- [ ] Database schema changes are backward-compatible or have a migration plan
- [ ] Config or environment variable changes are documented
- [ ] No removal of exported functions, types, or constants that other code may depend on

### Testing

- [ ] Tests cover new functionality
- [ ] Tests cover edge cases and failure paths
- [ ] Test assertions are meaningful — not just "no error thrown"
- [ ] No brittle tests (hardcoded dates, order-dependent, flaky)

### Documentation

- [ ] Complex or non-obvious logic is explained with comments
- [ ] Public APIs have documentation
- [ ] README updated if behavior, setup, or config changed

### Maintainability

- [ ] Code is readable without needing the author to explain it
- [ ] Consistent with existing project style
- [ ] Modular design — changes are localized, not scattered
- [ ] Separation of concerns — no mixing of unrelated responsibilities

## Issue Tracking

### If an Issue is Linked

Read the linked issue content. Then evaluate:

- [ ] **Scope match** — The changes address what the issue describes, no more and no less
- [ ] **Acceptance criteria** — All acceptance criteria or requirements from the issue are met
- [ ] **Completeness** — No TODO/FIXME left that the issue expected to be resolved
- [ ] **Edge cases from issue** — Any edge cases mentioned in the issue discussion are handled

Include an **Issue Completion** section in the report:

```markdown
## Issue Completion
- **Issue**: #123 — Issue title
- **Status**: Fully addressed / Partially addressed / Not addressed
- **Covered**: List what was completed
- **Missing**: List what was not completed (if any)
```

### If No Issue is Linked

Flag this in the report and recommend creating an issue:

```markdown
## Issue Tracking
> No linked issue found for this change.

Recommend creating an issue to:
- Document the problem or feature this change addresses
- Provide context for future maintainers
- Enable tracking and traceability

Suggested issue title: "..." (infer from the diff)
```

## Reporting

### Severity Guidance

- **Critical**: Breaks existing functionality, causes data loss, or blocks deployment
- **High**: Significant bug, logic error, or missing requirement that should be fixed before merge
- **Medium**: Code quality concern, minor bug, or improvement that can be a follow-up
- **Low**: Style nit, naming suggestion, or optional enhancement

### Output Format

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

## Issue Completion
(See Issue Tracking section above)

## Positive Highlights
What was done well in this PR.

## Suggestions
Optional improvements that don't require immediate action.

## Approval Status
- [ ] Approved
- [ ] Approved with suggestions
- [ ] Request changes
```