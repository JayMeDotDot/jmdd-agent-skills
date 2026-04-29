# JMDD Agent Skills

This repository a collection of agent skills.

[AGENT.md](./AGENT.md) is the base agent configuration file (such as CLAUDE.md, GEMINI.md, etc.). 

## Agent Skills List
| Skill Name | Description |
| --- | --- |
| [brainstorm](./skills/brainstorm/SKILL.md) | A persistent, curious discussion partner when exploring options, thinking through decisions, or fleshing out ideas before implementation. Use when the user ask for help me think through, let's brainstorm, what are my options, trying to decide. Not for implementation or code review. |
| [Code-Consultant](./skills/Code-Consultant/Code-Consultant.md) | Provides markdown issue templates for feature requests, bug reports, and code refactoring. |
| [coder-review](./skills/coder-review/SKILL.md) | Use when reviewing PRs, diffs, or code changes. Covers correctness, security, quality, and project-specific patterns. |
| [commit-work](./skills/commit-work/SKILL.md) | Create high-quality git commits, review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits). Use when the user asks to commit, craft a commit message, stage changes, or split work into multiple commits. |
| [competitor-analysis](./skills/competitor-analysis/SKILL.md) | Structured competitive analysis with feature matrices, SWOT, positioning maps, and UX review. Covers research frameworks, pricing comparison, review mining, and visual deliverables. Use when the user ask for competitor analysis, competitive analysis, competitor teardown, market research, competitive intelligence, swot analysis, competitor comparison, market landscape, competitor review, competitive landscape, feature comparison, market positioning |
| [improve-seo](./skills/improve-seo/SKILL.md) | Help to improve SEO of a website. |
| [Product-Manager](./skills/Product-Manager/Product-Manager.md) | 适用场景：项目启动、功能梳理、迷茫时厘清思路、迭代需求。 |
| [security-auditor](./skills/security-auditor/SKILL.md) | Security-focused reviewer for finding vulnerabilities in code, configs, and dependencies. |
| [subtitle-translator](./skills/subtitle-translator/SKILL.md) | Translates subtitle files into a target language, generating both a target-only version and a bilingual version. |
| [Translation-Assitant (cn-en)](./skills/Translation-Assitant/Translation-Assitant(cn-en).md) | 适用场景：中译英，贴近母语人士表达方式。 |
| [Translation-Assitant (multi)](./skills/Translation-Assitant/Translation-Assitant(multi).md) | Translate the provided text into Simplified Chinese. |
| [UI-Designer](./skills/UI-Designer/UI-Designer.md) | 适用场景：确定了功能，需要设计界面、生成前端组件代码。 |


## ToDo
- [ ] rebuild code-consultant skill
- [ ] rebuild code-review skill
- [ ] rebuild improve-seo skill
- [ ] rebuild subtitle-translator skill
- [ ] rebuild Translation-Assitant (cn-en) skill
- [ ] rebuild Translation-Assitant (multi) skill
- [ ] rebuild UI-Designer skill
- [ ] build Obsidian brainstorm skill