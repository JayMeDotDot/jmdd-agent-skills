---
name: github-issue-creator
description:
  Use this skill when asked to create a GitHub issue. It handles different issue types (bug, feature, etc.) using repository templates and ensures proper labeling.
---

# GitHub Issue Creator

This skill guides the creation of high-quality GitHub issues that adhere to the repository's standards and use the appropriate templates.

## Workflow

Follow these steps to create a GitHub issue:

1.  **Identify Issue Type**: Determine if the request is a bug report, feature request, or other category.

2.  **Locate Template**: Search for issue templates in `.github/ISSUE_TEMPLATE/`.
    - Look for `.md` templates that match the issue type (e.g., `bug_report.md`, `feature_request.md`).
    - If NO templates exist in the repository, use the fallback templates provided in this skill's `assets/` directory:
      - `assets/bug_report.md` — for bug reports
      - `assets/feature_request.md` — for feature requests

3.  **Read Template**: Read the content of the identified template file to understand the required fields.

4.  **Draft Content**: Draft the issue title and body.
    - Follow the template's structure exactly.
    - **Title**: Should be descriptive and follow project conventions (e.g., Conventional Commits prefix if the repo uses it).

5.  **Duplicate Check**: Before creating, search for potentially duplicate issues:
    ```bash
    gh issue list -S "<key terms from title>" --state all --limit 5
    ```
    If a likely duplicate is found, inform the user and ask whether to proceed.

6.  **Create Issue**: Use the `gh` CLI to create the issue.
    - **CRITICAL:** To avoid shell escaping and formatting issues with multi-line Markdown, ALWAYS write the body to a temporary file first.
    - **Label Awareness**: Only apply labels that exist in the target repository. If unsure whether a label exists, run `gh label list` to verify before using `--label`.

    ```bash
    # 1. Write the drafted body to a temporary file
    # 2. Create the issue using the --body-file flag
    gh issue create --title "Succinct title" --body-file <temp_file_path> [--label "<label>"]
    # 3. Remove the temporary file
    rm <temp_file_path>
    ```

7.  **Verify**: Confirm the issue was created successfully and provide the link to the user.

## Principles

- **Clarity**: Titles should be descriptive and follow project conventions.
- **Defensive Formatting**: Always use temporary files with `--body-file` to prevent newline and special character issues.
- **Label Awareness**: Only apply labels that exist in the target repository. Verify with `gh label list` when unsure.
- **Duplicate Prevention**: Always search before creating to avoid redundant issues.
- **Completeness**: Provide all requested information (e.g., version info, reproduction steps).
