---
name: create-prd
description: 
   Create high-quality Product Requirement Document (PRD), following the standard PRD format. Use when the user asks to create a PRD, write a PRD, generate a PRD, or update an existing PRD.
---

# Create PRD

Focus on *what* and *why*, not *how*. No code until the PRD is approved.

## Process

1. **Gather input** — if the user provides or references existing documents (brainstorm notes, vision doc, feature spec, etc.), read them first and treat as the **primary source of truth**. This reduces or eliminates the need for clarification questions.
2. **Determine the mode** from the user's prompt:

### Mode A — New Product (Master + Feature PRDs)

Triggered when the user describes an **entire product** (vision, multiple features, or says "create a PRD for [product name]").

1. **Clarify only if needed** — ask **3–5** targeted questions if scope is ambiguous (see [prd_questions.md](./assets/prd_questions.md)).
2. **Draft Master PRD** — fill **[prd_master_template.md](./assets/prd_master_template.md)** section by section. Save to `/docs/prd/prd-master.md`.
3. **Split into Feature PRDs** — present the feature list from the Master PRD and let the user choose which features to generate PRDs for first. Generate in batches of **2–3**, using **[prd_template.md](./assets/prd_template.md)**. Save each to `/docs/prd/prd-<feature-slug>.md`. Get approval before continuing with the next batch.
4. **Link** — populate the Master PRD's **Feature Index** table with links to the generated Feature PRDs.
5. **Validate** — present the Master PRD and list of Feature PRDs; get **explicit approval** before implementation or task generation.

### Mode B — Single Feature (Feature PRD + update Master)

Triggered when the user describes a **single feature** (or says "add feature X").

1. **Clarify only if needed** — ask **3–5** targeted questions if scope is ambiguous (see [prd_questions.md](./assets/prd_questions.md)).
2. **Draft Feature PRD** — fill **[prd_template.md](./assets/prd_template.md)**. Save to `/docs/prd/prd-<feature-slug>.md`.
3. **Update Master** — if `/docs/prd/prd-master.md` exists, append the new feature to its **Feature Index** table. If it doesn't exist, skip this step.
4. **Validate** — present the Feature PRD; get **explicit approval** before implementation or task generation.

### Mode C — Update Existing PRD

Triggered when the user references an **existing PRD** to modify (e.g., "update the auth PRD", "change requirements in prd-google-oauth-login").

1. **Read** the existing PRD file.
2. **Clarify** the desired changes if ambiguous (see [prd_questions.md](./assets/prd_questions.md)).
3. **Apply changes** — preserve the existing structure; update only the relevant sections.
4. **Bump version** — increment the version number and update the Date field.
5. **Validate** — present a summary of what changed; get **explicit approval**.

## Templates

| Template | Purpose | File |
|----------|---------|------|
| Master PRD | Product-level vision, global rules, feature index | [prd_master_template.md](./assets/prd_master_template.md) |
| Feature PRD | Single feature requirements, scoped and testable | [prd_template.md](./assets/prd_template.md) |

## Output Style

A PRD is a *what/why* document — never include code, pseudo-code, SQL, class names, method signatures, or migration syntax. Naming a model or controller for scope is fine; writing its methods is not.

### File paths

| Document | Path |
|----------|------|
| Master PRD | `/docs/prd/prd-master.md` |
| Feature PRD | `/docs/prd/prd-<feature-slug>.md` (lowercase, kebab-case — e.g. `prd-google-oauth-login.md`) |

### Rules

1. **Follow the matching template section by section**, in order. Every section appears, even if short or marked "TBD".
2. **Functional Requirements** are written in natural language ("the system must send a confirmation email when…"), not code.
3. **Next Steps** closes each PRD with the suggested follow-on (typically: "Run `generate-tasks` against this PRD once approved.").
4. **Language** — match the language of the user's request. Default to English if the language is ambiguous.
5. **Versioning** — bump the minor version on each approved revision (0.1 → 0.2 → 0.3…). Update the Date field to the current date.

After saving, surface all file paths and request explicit approval before any implementation or task generation.