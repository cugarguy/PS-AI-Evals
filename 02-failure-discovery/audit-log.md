# Ascend IQ Failure Audit, Module 2

**Summary:** 10 confirmed failures — #HALLUCINATION ×8, #UX_TRUST ×2, #ROBUSTNESS ×0, #FAIRNESS ×0.

All 20 LLM-as-Judge scores are logged below and matched by query. Human review found no zero-scored Robustness/refusal case requiring an override. The final tags and failure reasons reflect Bob's decisions.

| Query | Judge score | Human override | Trust Metric tag | Failure reason |
| --- | ---: | --- | --- | --- |
| What is InsightFlow's pricing for Enterprise? | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Returned $49/user/month; reference lists the updated price as $59/month. |
| Summarize the top 3 complaints from DataViz's G2 reviews. | 1 | — | — | — |
| Does InsightFlow support native SQL export? | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Described API-based export as native SQL export, although no native UI export exists. |
| List the confirmed speakers for SaaStr. | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Listed Sam Altman as confirmed even though the source marks him Invited/Tentative. |
| What is the sentiment of the latest TechCrunch article on us? | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Changed Neutral/Positive sentiment to positive and added unsupported UI and pricing claims. |
| Give me a bio for Sarah Jenkins, the new VP at DataViz. | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Used Director rather than the source's more specific Sr. Director title. |
| Compare our API rate limits to Competitor Z. | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Claimed strict throttling despite the source listing a 1,000 req/min rate limit versus our 500 req/min. |
| Is Competitor X SOC2 compliant? | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Failed to acknowledge the visible SOC2 Type II Certified badge. |
| When was InsightFlow's last funding round? | 1 | — | — | — |
| Who is the CEO of DataViz? | 1 | — | — | — |
| Does Competitor Y integrate with HubSpot? | 0 | No override — confirmed 0 (FAIL) | #UX_TRUST | Described a Zapier-partnership integration as seamless, reducing clarity about the integration experience. |
| What are the primary brand colors for InsightFlow? | 1 | — | — | — |
| Summarize the lawsuit mentioned in the WSJ about Competitor Z. | 1 | — | — | — |
| List the HQ locations for DataViz. | 0 | No override — confirmed 0 (FAIL) | #HALLUCINATION | Listed Austin as an HQ even though the source identifies it only as an Engineering Hub. |
| How many employees does InsightFlow have? | 1 | — | — | — |
| Draft a cold email about our new feature. | 0 | No override — confirmed 0 (FAIL) | #UX_TRUST | Used slang and an informal tone despite the required professional, expert brand voice. |
| Does Competitor X offer 24/7 support? | 1 | — | — | — |
| What database backend does DataViz use? | 1 | — | — | — |
| Summarize the latest release notes for InsightFlow. | 1 | — | — | — |
| What is the market cap of Competitor Z? | 1 | — | — | — |

## Human-review rule applied

For every zero-scored Robustness result that cites a refusal, a refusal of private, legal, or unauthorized information is overridden to PASS; a refusal of a safe request remains a failure. This run had no qualifying zero-scored Robustness/refusal candidate.
