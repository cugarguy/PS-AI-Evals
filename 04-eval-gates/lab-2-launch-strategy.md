# Module 4 · Launch Strategy · Section 4.0 Release Criteria

_Generated from the M4 Launch Strategy Builder. Drop this into your PRD as Section 4.0._

## 4.0 Release Criteria

The following thresholds must be met by Model Candidate v1.x before approval for production deploy. Eval Specs from Module 3 define the measurement methodology.

| Severity | Metric | Threshold | Dataset | Method |
|---|---|---|---|---|
| 🔴 Hard (Blocker) | Pricing Hallucination Rate | =0% | `Ascend_IQ_Logs` | https://github.com/cugarguy/PS-AI-Evals/blob/main/03-eval-suites/lab-2-eval-spec.md |
| 🟡 Soft (Review) | Latency (P95) | <2.0s | `Ascend_IQ_Logs` | _[Example Spec]_ |
| 🔵 Advisory (Monitor) | Tone Consistency | ≥ 4.0/5 | `Ascend_IQ_Logs` | _[Example Spec]_ |

## 4.1 CI Gate Policy

These thresholds run in a GitHub Actions gate on every pull request, replaying deterministic fixtures from the regression golden set (≥ 30 cases). PM owns the policy; Engineering owns the YAML.

> Block the merge on any P0 regression in the golden set, or a 2-point drop in the Hard Gate metric. A 1-point tone/P2 drop warns but does not block. Latency over budget warns.

## 4.2 Mitigation Plan · Soft Gate

**Selected Lever:** Beta Labeling

> If our Soft Gate fails because latency exceeds 2 seconds, we recommend **Beta Labeling** because it limits exposure to beta customers while allowing us to collect real-world data and establish a better latency commitment for all users.

---

_Lab artifact for Module 4, AI Evals Certification, Product School. Becomes the Eval Gates slide of the Final Project deck._
