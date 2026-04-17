---
name: commit-helper
description: Helps you write Git commit messages following the Conventional Commits specification. Use this skill when the user asks to commit changes, write commit messages, format commits.
---

# Commit Message Helper

Staged Diff:
```diff
!{git diff --staged}
```

Repository Status:
```text
!{git status --short}
```

User Input Context:
```text
{{args}}
```

# Commit Message Generation Rules

## Workflow

1.  **Check Staged Changes**:
    - If `git diff --staged` is empty, list files from `git status --short`.
    - Advise the user to `git add` and stop.
2.  **Generate Message**:
    - Base the message ONLY on the staged diff.
    - Follow the Conventional Commits format: '/references/conventional-commits.md'.
3.  **Confirm and Commit**:
    - Present the proposed message.
    - Ask for confirmation before executing `git commit -m "<message>"`.