---
name: improve-seo
description:
  Analyze and improve SEO for websites, web pages, or content. Use when the user asks to audit SEO, optimize for search engines, check meta tags, improve page rankings, or apply SEO best practices to code.
---

# Improve SEO

Audit a website or page's SEO health and produce an actionable report at
`docs/seo/[slug].md`. Reading files, fetching URLs, and searching the web for
context are fine. Do not modify the user's code unless they explicitly ask for
code-level changes.

## Capability Boundaries

Understand what you can and cannot do before starting.

**Can do:**

- Fetch and analyze page HTML (meta tags, headings, links, structured data)
- Check for `robots.txt` and `sitemap.xml`
- Analyze content quality, keyword usage, and internal link structure
- Review code for SEO best practices (semantic HTML, accessibility attributes)
- Research competitor keywords and content via web search
- Suggest concrete improvements with specific wording

**Cannot do:**

- Access Google Analytics, Search Console, or any authenticated tool
- Measure real page load speed or Core Web Vitals
- Check actual search rankings or traffic data
- Verify backlink profiles or domain authority
- Test real mobile rendering across devices

When a finding requires data you cannot access, say so and suggest the user
check it themselves with a specific tool (e.g., "Run this URL through
PageSpeed Insights to get Core Web Vitals data").

## Scenario Routing

Determine the scenario from the user's request before starting work.

| Scenario | Trigger signals | Primary focus |
|----------|----------------|---------------|
| **URL Audit** | User provides a URL to analyze | Full audit checklist against live page |
| **Content Optimization** | User has an article or text to optimize | Keywords, headings, readability, meta suggestions |
| **Code-Level SEO** | User is building a site and wants SEO baked in | Semantic HTML, meta template, structured data, framework-specific guidance |
| **New Site Planning** | User is planning a site and wants SEO strategy | Keyword research, URL structure, sitemap planning, content strategy |

If the scenario is ambiguous, ask one clarifying question before proceeding.
Do not attempt all scenarios at once.

## Workflow

### 1. Clarify Intent

Before auditing, confirm:

- What is the user's goal? (Rank for specific keywords? General health check? Fix a known issue?)
- Which scenario applies?
- Are there specific pages or areas of concern?

If the user gives a URL with no further context, default to **URL Audit** and
proceed without asking.

### 2. Gather Data

For **URL Audit**:

1. Fetch the target URL's HTML source
2. Fetch `/robots.txt` (note if missing or blocking)
3. Fetch `/sitemap.xml` (note if missing)
4. Optionally search the web for the site's primary keywords to see competitor landscape

For **Content Optimization**:

1. Read the provided content
2. Search the web for the topic to understand keyword landscape and competing content

For **Code-Level SEO**:

1. Read the relevant source files
2. Identify the framework and rendering strategy (SSR, SSG, SPA)

For **New Site Planning**:

1. Understand the business, audience, and goals
2. Research keyword opportunities via web search

### 3. Audit (URL Audit Checklist)

Run through each category. Record pass/fail/warning for each item.

#### Meta Information

- [ ] `<title>` exists and is 50–60 characters
- [ ] `<title>` contains primary keyword
- [ ] `<meta name="description">` exists and is 150–160 characters
- [ ] `<meta name="viewport">` exists (mobile compatibility)
- [ ] `<link rel="canonical">` exists and points to the correct URL
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags present (`twitter:card`, `twitter:title`)
- [ ] `<html lang="...">` attribute set

#### Heading Structure

- [ ] Exactly one `<h1>` on the page
- [ ] `<h1>` contains primary keyword or close variant
- [ ] Heading hierarchy is correct (no skipping levels: h1 → h2 → h3)
- [ ] Subheadings are descriptive (not generic like "Section 1")

#### Content Quality

- [ ] Main content is substantial (> 300 words for articles)
- [ ] All `<img>` tags have meaningful `alt` attributes
- [ ] No `alt` attributes are empty strings or placeholder text
- [ ] Links use descriptive anchor text (not "click here" or "read more")
- [ ] No keyword stuffing (keyword density is natural)
- [ ] Content is original and provides clear value

#### Technical SEO

- [ ] `/robots.txt` exists and is not blocking important pages
- [ ] `/sitemap.xml` exists and lists key pages
- [ ] Structured data present (JSON-LD preferred over Microdata)
- [ ] Semantic HTML used (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] No duplicate IDs on the page
- [ ] `<a>` tags to external sites have appropriate `rel` attributes

#### URL & Link Structure

- [ ] URLs are readable and keyword-relevant (no ID-only or hash-based paths)
- [ ] Internal links connect related content
- [ ] No obviously broken links (href="#" or empty href on meaningful links)
- [ ] Navigation is crawlable (not purely JavaScript-driven without fallback)

#### Accessibility (SEO-relevant subset)

- [ ] Form inputs have associated `<label>` elements
- [ ] Color contrast is sufficient for text readability
- [ ] Interactive elements are keyboard-accessible
- [ ] ARIA attributes used correctly where needed

### 4. Analyze & Prioritize

After the audit:

1. Group findings by severity: **Critical** → **Warning** → **Info**
2. Prioritize by impact: issues affecting crawlability and indexing first, then content, then polish
3. For each issue, provide:
   - What is wrong (specific, with evidence from the page)
   - Why it matters
   - How to fix it (concrete suggestion, with example code or wording when possible)

### 5. Write Report

Save the report to `docs/seo/[slug].md`. Derive the slug from the domain name
or topic (e.g., `docs/seo/example-com.md`).

## Report Format

```markdown
# SEO Audit: [Domain or Page Title]

> Audited: [URL or description] | Date: [YYYY-MM-DD]

## Summary

[2–3 sentences: overall health, most critical issues, and biggest opportunities]

| Category | Status |
|----------|--------|
| Meta Information | ✅ / ⚠️ / ❌ |
| Heading Structure | ✅ / ⚠️ / ❌ |
| Content Quality | ✅ / ⚠️ / ❌ |
| Technical SEO | ✅ / ⚠️ / ❌ |
| URL & Links | ✅ / ⚠️ / ❌ |
| Accessibility | ✅ / ⚠️ / ❌ |

## Critical Issues

### [Issue title]

**Current:** [what exists now, with evidence]
**Problem:** [why this hurts SEO]
**Fix:** [specific recommendation, with example code/text if applicable]

## Warnings

[Same format as Critical Issues]

## Passed Checks

[Bullet list of things that are already good — acknowledge what works]

## Keyword Suggestions

[If applicable: primary keyword, secondary keywords, and where to use them]

## Action Plan

[Ordered list of recommended next steps, most impactful first]
```

Adapt sections to the scenario. A content optimization report may skip
Technical SEO. A code-level review may focus entirely on implementation
details with code snippets.

## Behavior

**Language**: Match the language of the user's request for both conversation
and the report document.

**Interaction style**:

- Be specific, not generic. "Your title is 78 characters; shorten to ~60"
  beats "optimize your title length."
- Cite evidence from the actual page. Quote the current `<title>`, show the
  heading hierarchy, reference specific images missing alt text.
- When suggesting keywords, base them on actual web search results, not
  guesses.
- If the user asks to fix issues directly in code, switch to implementation
  mode: make the changes, explain what you changed and why.

**Scope discipline**:

- Do not modify user code unless asked. The default output is a report.
- Do not invent traffic numbers, rankings, or performance metrics.
- Do not present guesses as facts. If you cannot verify something, say
  "unable to verify — suggest checking with [tool]."

**Report maintenance**:

- If a report for the same slug already exists, read it first and update
  rather than overwrite, so progress is tracked.
- After writing the report, surface the file path and suggest concrete next
  steps.
