---
name: competitor-analysis
description:
  Structured competitive analysis with feature matrices, SWOT, positioning maps, and UX review. Covers research frameworks, pricing comparison, review mining, and visual deliverables. Use when the user ask for competitor analysis, competitive analysis, competitor teardown, market research, competitive intelligence, swot analysis, competitor comparison, market landscape, competitor review, competitive landscape, feature comparison, market positioning
---

# Competitor Analysis

Analyze competitor data the user has collected to produce a structured
comparison report with differentiation opportunities. The analysis adapts
its dimensions to the product domain.

## Scope Constraint

Write only to `docs/competitor-analysis/`. Reading other files, searching
the web, and running commands for context are fine. Do not change files
outside this directory unless the user explicitly asks.

## Workflow

### 1. Intake — Understand Context Before Analyzing

Before starting analysis, establish:

- **What is the user building?** Product type, target audience, stage
- **What is the analysis goal?** Find differentiation, validate an idea,
  prepare a pitch, inform a pivot, etc.
- **What data is available?** Check for
  `docs/competitor-analysis/competitors.md`

| Scenario | Behavior |
|----------|----------|
| `competitors.md` exists | Read it, confirm you understand the competitors listed, then proceed |
| `competitors.md` does not exist | Ask the user to describe their competitors or provide the data; create the file from what they give you |
| Data is sparse | Note which analysis dimensions you can cover and which you cannot; do not fabricate data |
| Returning to an existing analysis | Read the current result document first, then continue from there |

### 2. Determine Analysis Dimensions

The analysis framework adapts to the domain. Start from these common
dimensions and drop, add, or rename as the product demands:

| Dimension | What to Analyze | Typical Sources |
|-----------|----------------|-----------------|
| **Product / Features** | Core features, UX quality, platform coverage | User-provided data, public pages |
| **Pricing** | Plans, model, hidden costs, free tier | Pricing pages |
| **User Feedback** | Praise, complaints, switching reasons, requests | App stores, review sites, forums |
| **Positioning** | Messaging, target audience, brand voice | Websites, ads, landing pages |
| **Traction** | Downloads, ratings count, growth signals | Public metrics, press |

Not every dimension applies. A hardware product needs supply chain and
distribution. A local service needs geography and reputation. Choose
dimensions that serve the user's analysis goal.

### 3. Run the Analysis

For each dimension, produce:

1. **Comparison** — structured table or matrix
2. **So What** — what this comparison means for the user's product

Do not stop at data presentation. Every comparison section must end with
actionable implications.

### 4. Synthesize Differentiation Opportunities

After individual dimensions, produce a synthesis section:

- **Gaps everyone misses** — features or approaches no competitor covers
- **Common weaknesses** — complaints that appear across multiple
  competitors (= strongest opportunities)
- **Over-served areas** — where competitors are clustered and
  differentiation is hard
- **Recommended positioning** — where the user's product should
  differentiate based on the evidence

### 5. Output

Write to `docs/competitor-analysis/competitor-analysis-result.md`.
If the file already exists, update it.

## Analysis Formats

Use these formats as structural guidance. Adapt column names, row items,
and specifics to the actual domain and competitors.

### Feature Matrix

```markdown
| Feature | Competitor A | Competitor B | Competitor C |
|---------|:---:|:---:|:---:|
| [Feature 1] | ✅ | ❌ | ⚠️ Partial |
| [Feature 2] | ✅ | ✅ | ❌ |
```

Symbols:
- ✅ = Full support
- ⚠️ or "Partial" = Limited or conditional
- ❌ = Not available
- Note conditions when they matter: "Paid only", "Beta", "iOS only"

### Pricing Comparison

```markdown
| | Competitor A | Competitor B | Competitor C |
|---------|:---:|:---:|:---:|
| **Free tier** | Yes, 3 users | No | Yes, 1 project |
| **Base plan** | $10/user/mo | $12/user/mo | $15/mo flat |
| **Hidden costs** | Setup fee | API metered | None |
```

Look for: minimum seats, annual-only billing, feature gating between
tiers, overage charges, lock-in periods.

### User Feedback Summary

For each competitor, extract patterns from reviews and comments:

| Category | Findings |
|----------|---------|
| **Most praised** | What do happy users highlight? |
| **Most complained** | What do unhappy users say? (= your opportunity) |
| **Switching reasons** | Why do users leave? |
| **Feature requests** | What's missing that users want? |

When the user provides raw review data, distill it into patterns rather
than listing every individual comment. Quantify when possible ("7 of 12
negative reviews mention slow sync").

### SWOT (Per Competitor)

```markdown
### [Competitor Name] — SWOT

| Strengths | Weaknesses |
|-----------|------------|
| • [point] | • [point] |

| Opportunities | Threats |
|---------------|---------|
| • [point] | • [point] |
```

### Positioning Map

When there are enough competitors (3+), create a positioning map using
two axes that matter most for the domain. Represent it as a text diagram
or a Mermaid quadrant chart.

Example axes: Price vs Feature Depth, Simplicity vs Power, Consumer vs
Enterprise, Niche vs Broad.

## Result Document Shape

```markdown
# Competitive Analysis: [Product/Domain]

> One-line summary of the competitive landscape

**Analysis date**: [date]
**Analysis goal**: [what the user wants to learn]
**Competitors analyzed**: [list]

## Landscape Overview

[Brief narrative of the competitive landscape — who the players are,
how the market is shaped, where it's headed]

## Feature Comparison

[Matrix + implications]

## Pricing Comparison

[Table + implications]

## User Feedback Analysis

[Per-competitor summary + cross-competitor patterns]

## SWOT

[Per-competitor SWOT]

## Positioning Map

[Visual + interpretation]

## Differentiation Opportunities

[Synthesis: gaps, common weaknesses, over-served areas,
recommended positioning]

## Recommendations

[Concrete next steps for the user's product based on the analysis]
```

Use only the sections the data supports. Do not force sections with no
substance.

## Data Quality Rules

- **Do not fabricate data**. If a dimension lacks data, say so and skip
  it or mark it as needing more research.
- **Mark confidence levels** when information is inferred rather than
  directly stated. Use "[inferred]" or "[approximate]" inline.
- **Date the analysis**. Pricing and features change. The document
  should record when the data was gathered.
- **Cite sources** when the user provides them. If the user pastes raw
  review data, reference it.

## Behavior

**Language**: Match the language of the user's request for both the
conversation and the output document.

**Honesty**: Be honest about competitor strengths. A report that
downplays competitors loses credibility and misleads the user's
strategy.

**Focus**: Concentrate on direct competitors (typically 3–5). If the
user lists more, ask which ones matter most or group them into tiers.

**Actionability**: Every section should connect back to the user's
product decision. Pure description without "so what" is not enough.

**Scope**: If the user's data only covers some dimensions, analyze what
you have. Note what's missing and suggest where to find it, but do not
block on incomplete data.
