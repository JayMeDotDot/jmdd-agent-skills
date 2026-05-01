---
name: pr-creator
description:
  Use this skill when asked to create a pull request (PR). It ensures all PRs follow the repository's established templates and standards.
---

# Pull Request Creator

This skill guides the creation of high-quality Pull Requests that adhere to the
repository's standards.

## Workflow

Follow these steps to create a Pull Request:

1.  **Detect Default Branch**: Determine the repository's default branch name.
    ```bash
    gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name'
    ```
    Use this value (e.g., `main`, `master`) wherever this workflow refers to "the default branch".

2.  **Branch Management**: **CRITICAL:** Ensure you are NOT working on the default branch.
    - Run `git branch --show-current`.
    - If the current branch is the default branch, you must create and switch to a new descriptive branch:
      ```bash
      git checkout -b <new-branch-name>
      ```

3.  **Check for Uncommitted Changes**: Run `git status` to check for unstaged or uncommitted changes.
    - If there are uncommitted changes, **stop and ask the user** whether to proceed with creating the PR anyway or to wait until they have committed their changes.
    - If the user chooses to wait, end the workflow here.
    - If the user confirms to proceed, continue to the next step (the existing committed changes will be used for the PR).

4.  **Verify**: Run the repo's lint or test command if one is easily identifiable (e.g., `npm test`, `make lint`).
    - If no obvious check command is found, skip this step.
    - If checks fail, address the issues, commit the fixes, then continue.

5.  **Locate Template**: Search for a pull request template in the repository.
    - Check `.github/pull_request_template.md`
    - Check `.github/PULL_REQUEST_TEMPLATE.md`
    - If multiple templates exist (e.g., in `.github/PULL_REQUEST_TEMPLATE/`), ask the user which one to use or select the most appropriate one based on the context.
    - If NO templates exist in the repository, use the fallback template provided in this skill's `assets/pull_request_template.md`.

6.  **Read Template**: Read the content of the identified template file.

7.  **Draft Description**: Create a PR description that strictly follows the template's structure.
    - **Headings**: Keep all headings from the template.
    - **Checklists**: Review each item. Mark with `[x]` if completed. If an item is not applicable, leave it unchecked `[ ]` for transparency.
    - **Content**: Fill in the sections with clear, concise summaries of the changes.
    - **Related Issues**: Link any issues fixed or related to this PR (e.g., "Fixes #123").

8.  **Push Branch**: Push the current branch to the remote repository.
    **CRITICAL SAFETY RAIL:** Double-check your branch name before pushing.
    NEVER push if the current branch is the default branch.
    ```bash
    # Verify current branch is NOT the default branch
    git branch --show-current
    # Push non-interactively
    git push -u origin HEAD
    ```

9.  **Create PR**: Use the `gh` CLI to create the PR. To avoid shell escaping issues with multi-line Markdown, write the description to a temporary file first.
    ```bash
    # 1. Write the drafted description to a temporary file
    # 2. Create the PR using the --body-file flag
    gh pr create --title "type(scope): succinct description" --body-file <temp_file_path> [--draft]
    # 3. Remove the temporary file
    rm <temp_file_path>
    ```
    - **Title**: Ensure the title follows the
      [Conventional Commits](https://www.conventionalcommits.org/) format if the
      repository uses it (e.g., `feat(ui): add new button`,
      `fix(core): resolve crash`).
    - **Draft**: If the user indicates the PR is a work-in-progress or explicitly asks for a draft, add the `--draft` flag.

## Principles

- **Safety First**: NEVER push to the default branch. This is your highest priority.
- **Respect User Control**: Do NOT auto-commit uncommitted changes. Ask the user first.
- **Compliance**: Never ignore the PR template. It exists for a reason.
- **Completeness**: Fill out all relevant sections.
- **Accuracy**: Don't check boxes for tasks you haven't done.
