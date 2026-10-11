# Ship/Hold Memo · Ascend IQ

> **Decision:** 🛑 HOLD

**To:** CPO · cc Engineering Lead · Trust & Safety  
**From:** Bob Steeger · AI Evals Cohort · 2026-10-11

## The Answer

I recommend we HOLD Ascend IQ because the recorded P0 grounding gate is blocked and the evaluator is not calibrated well enough to support an enterprise launch.

## The Arguments

### 1. P0 grounding remains below the release bar.

PR #218 records faithfulness at 87 against a floor of 95, down 9 points from main against a maximum regression of 5. The M3 pricing case still quotes $49 where the verified reference says $59 and adds an unverified 10-seat minimum. Detecting this failure does not demonstrate that it has been fixed.

### 2. The quality evidence does not yet support a reliable go/no-go decision.

Judge calibration records Cohen’s κ of -0.29 against the required 0.60, with 6 disagreements across 12 labels. The trajectory tool records only 1/6 dimensions passed and a HOLD verdict after the agent omitted ingestion verification. These are completed lab results, with failed readiness checks.

### 3. Portfolio spending does not close the critical coverage gap.

M5 allocates $180,000 to three Level 3 selections under the $200,000 cap. The external report-summary coverage row still has no dedicated Bias/Fairness evaluator and only partial hallucination coverage. Dedicated drift monitoring is an accepted temporary gap; the date remains unspecified. Weekly bias audit is a fallback plan, not proof of measured fairness.

## Evidence · Trust Metrics

```
- Faithfulness: 87 (Floor: 95) FAIL; regression: -9 points (Max: 5) FAIL · Source: 04-eval-gates/lab-ci-gate-policy.md
- Judge calibration: κ = -0.29 (Gate: κ ≥ 0.60) FAIL · Source: 03-eval-suites/lab-judge-calibration.md
- Trajectory: 1/6 dimensions passed; tool verdict HOLD · Source: 03-eval-suites/lab-1b-trajectory.md
- Pricing case: $49 quoted vs $59 verified; Layer 3 score 0 = caught failure · Source: 03-eval-suites/lab-1-eval-suite.md; no post-fix aggregate rate recorded against the 0% pricing-hallucination gate
- Level 3 spend: $180,000 (Cap: $200,000; slots: 3/3) WITHIN BUDGET · Source: 05-scale/lab-2-budget-crisis.md
- Bias coverage: ❌; hallucination: ⚠️; latency/toxicity: ✅; drift: ❌ accepted temporarily · Source: 05-scale/lab-1-coverage-matrix.md; no numeric fairness or production-latency result recorded
```

## Business Risk

SHIP path: the M2 business-impact statement identifies $50K+ renewals exposed to fabricated-pricing disputes and legal liability. M1 identifies users making $1M+ strategic decisions. These are scenario stakes, not measured expected losses; account count and probability of loss are not recorded.
HOLD path: launch and revenue timing may slip. The repo provides no measured delay cost, churn probability, or competitive-window estimate, so no dollar loss is asserted. The M5 Level 3 plan leaves $20,000 below the cap, but uses all three slots; this is budget headroom, not an approved remediation allocation.

## Next Step · Decision Needed

Proposed decision deadline: 2026-10-16. Approve HOLD and assign the Group PM (Engineer backup from the M3 Eval Spec) to coordinate pricing validation, grounding repair, and a calibration rerun. Before reconsidering release, require pricing assertions to meet 100% accuracy, faithfulness ≥95 with no more than 5 points of regression in the PR replay, and κ ≥0.60. Rerun the trajectory with the missing ingestion check and comparison. Confirm the fairness mitigation and date the accepted drift gap. The deadline is a planning proposal; no external approval or owner acceptance is recorded.

## Reflection

_Defining “good enough” made the distinction between a completed evaluation and a passing release visible. A judge can catch the pricing P0 in one example and still fail calibration across 12 labels. A portfolio can stay within budget while retaining a critical fairness gap. The existing strategy prioritizes verified claims over speed; the final decision must apply that priority even when it delays release._
