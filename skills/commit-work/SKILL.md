---
name: commit-work
description: 
   Create high-quality git commits, review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits). Use when the user asks to commit, commit changes, craft a commit message, stage changes, or split work into multiple commits.
---

# Commit Work

## Goal

Make commits that are easy to review and safe to ship:
- only intended changes are included
- commits are logically scoped (split when needed)
- commit messages describe what changed and why

## Scope Constraint

This skill operates git commands only. Do not modify source code,
configuration, or any project files. If you spot issues in the code
during review (bugs, dead code, style problems), mention them to the
user but do not fix them.

## Workflow

### 1. Inspect the Working Tree

```
git status
git diff          # unstaged changes
git diff --stat   # overview when changes are large
```

| Situation | Action |
|-----------|--------|
| Working tree is clean, nothing staged | Tell the user there is nothing to commit. Stop. |
| Changes are already staged (user did `git add`) | Skip to step 3 — review what is staged. |
| Unstaged changes exist | Continue to step 2. |
| Untracked files exist | Ask the user which ones to include. Do not auto-add all untracked files. |

### 2. Decide Commit Boundaries

Examine the changes and decide whether to split into multiple commits
or commit everything at once. Make this decision yourself based on
the nature of the changes.

**Split when changes are logically unrelated:**
- feature vs refactor
- backend vs frontend
- formatting vs logic
- tests vs production code
- dependency bumps vs behavior changes

**Single commit when:**
- all changes serve one purpose
- splitting would create commits that don't make sense alone

If changes are mixed within a single file, plan to use patch staging.

### 3. Stage and Review

Stage only what belongs in the next commit:

```
git add <path>           # whole file
git add -p               # patch staging for mixed files
git restore --staged <path>   # unstage a file
git restore --staged -p       # unstage specific hunks
```

Then review what will be committed:

```
git diff --cached
```

**Safety checks — block if any of these are found:**
- secrets, tokens, API keys, or credentials
- accidental debug logging (`console.log`, `print`, `debugger`)
- unrelated formatting churn

If you find any of these, stop and tell the user. Do not proceed to
commit.

### 4. Describe the Change

Before writing the message, describe the staged change in 1–2
sentences: "What changed?" + "Why?"

If you cannot describe it cleanly, the commit is probably too big or
mixed. Go back to step 2.

### 5. Write the Commit Message

Use Conventional Commits format (required for all projects):

```text
<type>(<scope>): <summary>

<What changed.>
<Why it changed.>
```

**Rules:**
- Keep the summary imperative and specific ("Add", "Fix", "Remove",
  "Refactor")
- Avoid implementation minutiae; focus on behavior and intent
- If breaking: use `!` in header and/or add `BREAKING CHANGE:` footer

**Common types:**

| Type | When to Use |
|------|------------|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs` | Documentation only |
| `style` | Formatting, whitespace, semicolons (no logic change) |
| `test` | Adding or updating tests |
| `chore` | Build, tooling, dependency updates |
| `perf` | Performance improvement |
| `ci` | CI/CD configuration |

### 6. Confirm with the User

**Present the commit message to the user and wait for approval before
executing `git commit`.** Do not auto-commit.

Show:
- the proposed commit message
- a brief summary of what is staged (`git diff --cached --stat`)

Wait for the user to approve, revise, or reject.

### 7. Commit

After the user approves:

```
git commit -m "<message>"
```

For multi-line messages, use `git commit` with the message passed via
`-m` flags or an editor.

### 8. Verify

Run the repo's fastest meaningful check after committing. Look for
the check command in these locations:

- `package.json` → `scripts.test`, `scripts.lint`
- `Makefile` → common targets like `test`, `lint`, `check`
- `pyproject.toml` / `setup.cfg` → test configuration
- `.github/workflows/` → CI steps

If no obvious check exists, skip this step rather than guessing.

### 9. Repeat

If there are remaining changes (from step 2 splitting), repeat from
step 3 for the next commit. Continue until all planned commits are
done.

## Handling Amend

If the user asks to amend the last commit:

1. Show the current HEAD commit message and diff
2. Stage any new changes if needed
3. Propose the updated message
4. Confirm with the user
5. Execute `git commit --amend`

## Behavior

**Language**: Match the language of the user's request.

**Never auto-commit**: Always present the message and wait for user
approval before running `git commit`.

**Block on safety issues**: If secrets, tokens, or credentials are
found in the diff, refuse to proceed and explain what was found.

**Be concise**: Keep summaries short. The user is looking at the same
diff — do not repeat every line of code back to them.

## Deliverable

After all commits are done, provide:
- the final commit message(s)
- a short summary per commit (what/why)
- any safety issues or concerns noticed during review