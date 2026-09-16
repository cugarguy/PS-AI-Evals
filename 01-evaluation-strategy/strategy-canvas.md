# AI Evaluation Strategy Canvas

> Repo file `ai-evals/01-evaluation-strategy/strategy-canvas.md` (the repo is your submission).
> Becomes the Strategy Canvas slide of the final pitch deck you assemble in Module 6.

## 1. Product Strategy, The Context

**Target user:** VP-level Strategists and Product Leaders at Fortune 500 companies who pay a premium for verified market intelligence.

**Key use case:** Rapidly extracting specific, verified insights (e.g., comparing competitor pricing models or summarizing G2 reviews) without manual data digging.

**Value proposition:** Personalized, instant answers based on verified data, dramatically reducing the time spent finding and synthesizing information for high-stakes decisions and strategic roadmaps.

## 2. Measurements, The Execution

**User promise.** For VP-level strategists and product leaders at Fortune 500 companies, Ascend IQ promises verified, citation-backed answers from market intelligence in about five seconds—and no more than ten seconds when additional validation is needed—so that they can make confident roadmap and competitive decisions without digging through a dense platform.

**Top 3 trust metrics:**

1. **Hallucination Rate**, % of outputs that are confidently false or fabricated.
2. **Robustness**, Coherence on messy, adversarial, out-of-scope inputs.
3. **Latency**, Response speed (P95 / P99). Slow kills engagement.

**Why these three:** 

- Hallucination, the percentage of answers containing one or more material claims, sources, or citations that cannot be verified against the approved market-intelligence corpus.
- Robustness, the percentage of varied, messy, ambiguous, or partly out-of-scope questions that receive an accurate, grounded answer or a safe clarification.
- Latency, P95/P99 time from a user question to a completed answer.

## 3. Strategic Trade-Offs, The Cost

### Trade-off 1 · Hallucination Rate ↔ Robustness

We prioritize Hallucination Rate over Robustness because when a conflict is unavoidable, no unsupported claim is more important than handling every variation of phrasing.

### Trade-off 2 · Hallucination Rate ↔ Latency

We prioritize Hallucination Rate over Latency because Ascend IQ serves VPs making $1M+ strategic decisions; a single fabricated competitor stat ends a $50k contract, whereas a 3-second wait is the cost of doing business at Enterprise-grade integrity.

### Trade-off 3 · Robustness ↔ Latency

We prioritize Robustness over Latency because reliable handling of varied customer language is more important than being faster.

---
_Generated from the AI Evaluation Strategy Canvas, M1 lab tool, AI Evals Certification._
