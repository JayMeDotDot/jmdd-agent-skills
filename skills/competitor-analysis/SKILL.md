---
name: competitor-analysis
description:
  Structured competitive analysis with feature matrices, SWOT, positioning maps, and UX review. Covers research frameworks, pricing comparison, review mining, and visual deliverables. Use when the user ask for competitor analysis, competitive analysis, competitor teardown, market research, competitive intelligence, swot analysis, competitor comparison, market landscape, competitor review, competitive landscape, feature comparison, market positioning
---

# Competitor Analysis

## 7-Layer Analysis

| Layer | What to Analyze | Data Source |
|-------|----------------|-------------|
| 1. **Product** | Features, UX, quality | Screenshots, free trial |
| 2. **Pricing** | Plans, pricing model, hidden costs | Pricing page, sales call |
| 3. **Positioning** | Messaging, tagline, ICP | Website, ads |
| 4. **Traction** | Users, revenue, growth | Web search, press, funding |
| 5. **Reviews** | Strengths, weaknesses from users | G2, Capterra, App Store |
| 6. **Content** | Blog, social, SEO strategy | Website, social profiles |
| 7. **Team** | Size, key hires, background | LinkedIn, About page |

## Feature Matrix

### Structure

```markdown
| Feature | Your Product | Competitor A | Competitor B | Competitor C |
|---------|:---:|:---:|:---:|:---:|
| Real-time collaboration | ✅ | ✅ | ❌ | ✅ |
| API access | ✅ | Paid only | ✅ | ❌ |
| SSO/SAML | ✅ | Enterprise | ✅ | Enterprise |
| Custom reports | ✅ | Limited | ✅ | ❌ |
| Mobile app | ✅ | iOS only | ✅ | ✅ |
| Free tier | ✅ (unlimited) | ✅ (3 users) | ❌ | ✅ (1 project) |
| Integrations | 50+ | 100+ | 30+ | 20+ |
```

### Rules

- ✅ = Full support
- ⚠️ or "Partial" = Limited or conditional
- ❌ = Not available
- Note conditions: "Paid only", "Enterprise tier", "Beta"
- Lead with features where YOU win
- Be honest about competitor strengths — credibility matters

## Pricing Comparison

### Structure

```markdown
| | Your Product | Competitor A | Competitor B |
|---------|:---:|:---:|:---:|
| **Free tier** | Yes, 5 users | Yes, 3 users | No |
| **Starter** | $10/user/mo | $15/user/mo | $12/user/mo |
| **Pro** | $25/user/mo | $30/user/mo | $29/user/mo |
| **Enterprise** | Custom | Custom | $50/user/mo |
| **Billing** | Monthly/Annual | Annual only | Monthly/Annual |
| **Annual discount** | 20% | 15% | 25% |
| **Min seats** | 1 | 5 | 3 |
| **Hidden costs** | None | Setup fee $500 | API calls metered |
```

### What to Look For

- Minimum seat requirements
- Annual-only billing (reduces flexibility)
- Feature gating between tiers
- Overage charges
- Setup/onboarding fees
- Contract lock-in periods

## SWOT Analysis

Create a SWOT for each competitor:

```markdown
### Competitor A — SWOT

| Strengths | Weaknesses |
|-----------|------------|
| • Strong brand recognition | • Slow feature development |
| • Large integration ecosystem | • Complex onboarding (30+ min) |
| • Enterprise sales team | • No free tier |

| Opportunities | Threats |
|--------------|---------|
| • AI features not yet shipped | • New AI-native competitors |
| • Expanding into mid-market | • Customer complaints about pricing |
| • International markets untapped | • Key engineer departures (LinkedIn) |
```

## Review Mining

### Where to Find Reviews

| Platform | Best For | URL Pattern |
|----------|----------|-------------|
| G2 | B2B SaaS | g2.com/products/[product]/reviews |
| Capterra | Business software | capterra.com/software/[id]/reviews |
| App Store | iOS apps | apps.apple.com |
| Google Play | Android apps | play.google.com |
| Product Hunt | Launches | producthunt.com/posts/[product] |
| Reddit | Honest opinions | reddit.com/r/[relevant-sub] |

### What to Extract

| Category | Look For |
|----------|---------|
| **Most praised** | What features do happy users mention most? |
| **Most complained** | What do unhappy users say? (= your opportunity) |
| **Switching reasons** | Why do users leave? What triggers switching? |
| **Feature requests** | What's missing that users want? |
| **Comparison mentions** | When users compare, what do they say? |

## Workflow
1. read `docs/competitor-analysis/competitors.md`
2. according the rules and format listed, analysis the competitors
3. if `docs/competitor-analysis/competitor-analysis-result.md` already exists, update it, otherwise create it.

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Only looking at features | Misses positioning, pricing, traction | Use the 7-layer framework |
| Biased analysis | Loses credibility | Be honest about competitor strengths |
| Outdated data | Wrong conclusions | Date all research, refresh quarterly |
| Too many competitors | Analysis paralysis | Focus on top 3-5 direct competitors |
| No "so what" | Data without insight | End each section with implications for you |
| Feature-only comparison | Doesn't show positioning | Include pricing, reviews, positioning map |
