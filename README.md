# JMDD Agent Skills

This repository a collection of agent skills.

[AGENT.md](./AGENT.md) is the base agent configuration file (such as CLAUDE.md, GEMINI.md, etc.). 

## Agent Skills List
| Skill Name | Description |
| --- | --- |
| [brainstorm](./skills/brainstorm/SKILL.md) | A persistent, curious discussion partner when exploring options, thinking through decisions, or fleshing out ideas before implementation. Use when the user ask for help me think through, let's brainstorm, what are my options, trying to decide. Not for implementation or code review. |
| [coder-review](./skills/coder-review/SKILL.md) | Use when reviewing PRs, diffs, or code changes. Covers correctness, performance, quality, compatibility, and issue tracking. |
| [commit-work](./skills/commit-work/SKILL.md) | Create high-quality git commits, review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits). Use when the user asks to commit, craft a commit message, stage changes, or split work into multiple commits. |
| [competitor-analysis](./skills/competitor-analysis/SKILL.md) | Structured competitive analysis with feature matrices, SWOT, positioning maps, and UX review. Covers research frameworks, pricing comparison, review mining, and visual deliverables. Use when the user ask for competitor analysis, competitive analysis, competitor teardown, market research, competitive intelligence, swot analysis, competitor comparison, market landscape, competitor review, competitive landscape, feature comparison, market positioning |
| [prd-creator](./skills/prd-creator/SKILLS.md) | Create high-quality Product Requirement Document (PRD), following the standard PRD format. Use when the user asks to create, write, generate, or update a PRD. |
| [improve-seo](./skills/improve-seo/SKILL.md) | Help to improve SEO of a website. |
| [security-auditor](./skills/security-auditor/SKILL.md) | Security-focused auditor for finding vulnerabilities in code, configs, and dependencies. Routes to domain-specific checklists based on audit scope (frontend, backend, API, infrastructure, or full). |
