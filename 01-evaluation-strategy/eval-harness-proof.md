# First LLM-as-a-Judge Eval, Module 1

> This file records the Module 1 first-eval setup and its current evidence. The dataset and notebook remain in the local coursework workspace until they are ready to become final-project material.

## Version A, Concise, system prompt used

~~~
You are an executive briefing assistant.
Summarize in exactly 3 bullet points under 60 words. No preamble, no extra text.
~~~

Manual output, generated with GPT-5.5 using the Light setting:

~~~
- Social engagement rose 25% month over month from the new content calendar and paid ad tests.
- Newsletter open rate fell from 42% to 35%; subject line testing starts next week.
- Product video campaign is delayed until November pending legal approval; tracking links are due Friday.
~~~

## Version B, Narrative, system prompt used

~~~
You are a PR communications assistant.
Write a 100-word narrative summary highlighting wins first, then risks and next steps.
Keep a positive tone. No bullets.
~~~

Manual output, generated with GPT-5.5 using the Light setting:

~~~
Q4 marketing is showing encouraging momentum, with social media engagement up 25% month over month, driven by the new content calendar and paid ad experiments. The team also has creative assets ready for the product video campaign, positioning us well once approval clears. The main watchouts are a newsletter open-rate dip from 42% to 35% and a product video delay into November while legal review is pending. Next week, the team will test new subject lines to improve email performance. By Friday, all campaign tracking links need to be added so results can be measured cleanly.
~~~

**Comparison outcome:** Neither version is the winner. Version A is more concise but lacks readability and context. Version B is more readable and contextual but adds unsupported content. Neither meets the defined quality bar.

## Eval setup, dataset name + judge model/family

- Dataset: Module1Output with the Version A and Version B outputs above.
- Generator: GPT-5.5, Light setting, run manually in ChatGPT.
- Judge: gpt-4o-mini, a separate OpenAI model family from the GPT-5.5 generator.
- Evaluator: Conciseness LLM-as-a-Judge. It returns 1 only when a candidate summary is concise and faithful to the source email; otherwise it returns 0 with a one-sentence reason.
- Observed judge results:
  - Version A: score 1. “The summary is concise and accurately reflects the key points from the source email.”
  - Version B: score 0. “The summary is verbose and contains unnecessary phrasing, while also omitting the specific action of ensuring campaign tracking links are added by Friday.”
- Human review: Version B explicitly says that campaign tracking links need to be added by Friday. The judge’s stated omission is therefore incorrect. The raw score and reason are retained as the observed output; that inaccurate claim is not used as a quality finding.

## Cold-start, the prompt you used to seed a starter dataset

~~~
Generate 20 example rows for evaluating email-summary quality.
Each row: an input email + a candidate summary + a first-pass label (“good” or “bad”) + a one-line reason.
Make roughly half concise/faithful (“good”) and half verbose or inaccurate (“bad”).
Return it as a markdown table.
~~~

The first-pass cold-start rows are in the local coursework file m1_starter_dataset.md. They are provisional and require human review before they become golden data.

## Your definition of good vs bad (golden-set criteria) — the graded part, write your own

A good CEO summary is contextual, factual, relevant, and readable. It retains every material fact and required action from the source email. The model must not decide for itself that an accurate detail is lower priority and can be omitted.

A bad summary omits a material fact or required action, makes an unsupported claim, or is not clear enough for an executive to use.

The cold-start labels are first-pass suggestions only. They require human review against these criteria before they become golden data.

## Screenshots, links or repo paths (optional if you followed the demo)

- Notebook: /Users/bobsteeger/Documents/-projects/Product_School/active-coursework/AI Evals/eval_lab.ipynb
- Starter rows: /Users/bobsteeger/Documents/-projects/Product_School/active-coursework/AI Evals/m1_starter_dataset.md
- Saved evaluation evidence: the compact two-row judge result is saved in eval_lab.ipynb; no separate screenshot was captured.
