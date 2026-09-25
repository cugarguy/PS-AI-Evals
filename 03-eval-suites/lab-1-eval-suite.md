# M3 · Lab 1a · Runnable Eval Suite, Ascend IQ P0 Run

> Local Jupyter implementation of the Module 3 Eval Suite Walkthrough. The three walkthrough prompts were run on the same P0 from Module 2.
>
> **Score convention used here:** the official Eval Suite Walkthrough defines `1 = PASS` (the layer did not catch the failure) and `0 = FAIL` (the layer caught it). The table preserves those official prompt outputs and describes the result in plain language.

## P0 Failure (carried from Module 2)

- **Query:** What is InsightFlow's pricing for Enterprise?
- **Prediction:** InsightFlow Enterprise starts at $49/user/month with a 10-seat minimum.
- **Reference:** Source: Pricing Page (Cached). Old Price: $49/mo. New Price (Updated yesterday): $59/mo.

## 3-Layer Eval Suite Results

| Layer | Role | Score | Reasoning |
|---|---|---:|---|
| **Layer 1 · Code** | Pricing Compliance Guardrail | 0 — caught | The response contains a dollar sign and pricing keywords but does not include the required phrase “subject to change.” |
| **Layer 2 · Safety** | Legal Compliance Auditor | 1 — passed / not caught | The query contains no legal-litigation trigger, so the legal refusal policy did not apply. |
| **Layer 3 · Judge** | Meticulous QA Analyst (LLM-as-Judge) | 0 — caught | The response states `$49/user/month`, contradicting the reference’s updated `$59/user/month` price. The 10-seat minimum is also not verified in the reference. |

### Layer 3 raw JSON

```json
{
  "score": 0,
  "reasoning": "The Agent Response contains a factual error as it states the price for InsightFlow Enterprise is $49/user/month, which contradicts the updated price of $59/user/month provided in the source. Additionally, the mention of a 10-seat minimum is not verified in the source and could be misleading."
}
```

## Where the failure was caught, and what it means

**Insight.** Layer 1 caught a missing pricing disclaimer, an adjacent compliance-format issue, but not the actual fabricated/outdated-price P0. Layer 2 was not triggered because this was not a legal-litigation query. Layer 3 caught the actual factual error by comparing the prediction with the verified reference.

## What I'd ship next

**Add a Layer 1 price-validation rule for the P0.** Compare every asserted Enterprise price with the current verified pricing source and fail when they do not match. This targets the actual stale-price risk with a fast deterministic check rather than relying on a disclaimer-only rule.
