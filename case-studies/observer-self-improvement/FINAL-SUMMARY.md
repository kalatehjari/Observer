# Observer self-improvement: final summary

Ten cycles of self-improvement ran from 21 to 23 October 2026, at the user's request. In each cycle the observer-multi-lens-reasoning skill:
- mapped its own process;
- applied its own method to the question of how that process should be revised;
- rewrote itself with at most three changes.

A blind test on a fixed paper checked the revisions in cycles 1, 3, 4, 5, 7, 9 and 10, and a held-out text checked the final version. Every agent was Opus 5.5. The improvers and testers ran at max effort in cycles 4, 7 and 10, and at default effort otherwise. The scorers always ran at default effort.

The final version is 1.10 (cycle-10/SKILL.md). Its full text is at the end of this file. It was published on GitHub on 23 October 2026. Adopting it in the Claude account is the user's decision.

## The versions

No candidate was rejected. As the cycle 10 improver pointed out, the keep rule compared each candidate only with version 1.0's baseline of 11.5, and every audited version scored at least 14.5. So "kept" means that a change did no measurable harm, not that it was shown to help.

| Cycle | Version | Tested | Changes | Decision |
|---|---|---|---|---|
| 1 | 1.1 | yes | Adds an audit step for supplied material, with consistency and claims checks and records with locations, exact quotations, types, severities and fixes. The synthesis checks its own recommendation, and a ranked summary comes first. | kept |
| 2 | 1.2 | no | Adds a gaps check. Each finding is stated once, with an ID and three severity levels. Own knowledge becomes a labelled check on claims. | provisionally kept, confirmed in cycle 3 |
| 3 | 1.3 | yes | Each distinct problem gets one ID and all its locations. A claim in the material can get its own confidence score. The summary is written last. | kept |
| 4 | 1.4 | yes | The claims check gives evidence for and against each claim, and checks claims against any sources that can be consulted. Each record names the claim or conclusion it weakens. The transparency report gives one line per item. A background sentence on the source framework's use cases is cut. | kept |
| 5 | 1.5 | yes | Each claim is set side by side with its support and the evidence. The full recommendation becomes short numbered steps. Each fix names the other passages it must change. | kept |
| 6 | 1.6 | no | The claims check asks separately whether the material supports a claim and whether the claim is true. The confidence score becomes a probability that the recommendation survives the checks still needed, with reversibility noted beside it. | provisionally kept, confirmed in cycle 7 |
| 7 | 1.7 | yes | The summary gives the question as framed and the main divergence. Each high-severity problem gets a step, or a reason it stays open. | kept |
| 8 | 1.8 | no | Low-severity problems get one-line records. The confidence score names the checks it depends on. | provisionally kept, confirmed in cycle 9 |
| 9 | 1.9 | yes | Repairs to cycle 8's wording: separate scores have the same basis as the main score, and only agreement that rests on a shared assumption is discounted. | kept |
| 10 | 1.10 | yes | Claims are listed wherever they appear, examples included. Gap records quote where each lack shows. The introduction is corrected. | kept |

## Scores by cycle and effort

The main test is the enhanced paper, scored against 19 findings from a blind review.

| Cycle | Version | Effort | Score, of 19 | Consistency, of 8 | Claims, of 4 | Gaps, of 6 | Citations, of 1 | Exact quotations of the paper | Length |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1.0 | default | 11.5 | 4 | 2 | 4.5 | 1 | 34 of 37 (92%) | 8,351 |
| 1 | 1.1 | default | 15.5 | 7 | 3 | 4.5 | 1 | 142 of 142 | 15,479 |
| 3 | 1.3 | default | 15.5 | 8 | 2 | 4.5 | 1 | 222 of 223 | 17,123 |
| 4 | 1.0 | max | 11.5 | 4 | 2 | 4.5 | 1 | 35 of 39 (90%) | 10,586 |
| 4 | 1.4 | max | 15.0 | 7.5 | 1.5 | 5 | 1 | 154 of 156 | 14,538 |
| 5 | 1.5 | default | 14.5 | 7.5 | 0.5 | 5.5 | 1 | 204 of 204 | 14,973 |
| 7 | 1.7 | max | 17.5 | 8 | 3 | 5.5 | 1 | 155 of 155 | 15,665 |
| 9 | 1.9 | default | 14.5 | 6.5 | 2 | 5 | 1 | 203 of 203 | 14,801 |
| 10 | 1.10 | max | 15.0 | 7.5 | 1.5 | 5 | 1 | 176 of 176 | 16,854 |

Lengths are in words.

## Held-out result

The held-out text is the agent draft of the same paper, which no earlier cycle had used. Both versions ran at default effort and were scored against the 12 findings present in the draft.

| | Version 1.0 | Version 1.10 |
|---|---|---|
| Score, of 12 | 10.0 | 10.5 |
| Consistency, of 4 | 3 | 3 |
| Claims, of 5 | 4 | 5 |
| Gaps, of 2 | 2 | 1.5 |
| Citations, of 1 | 1 | 1 |
| Exact quotations of the draft | 64 of 73 (88%) | 181 of 181 (100%) |
| Length | 12,782 words | 14,248 words |

## What the results show

1. **The audit step added in cycle 1 is the measured gain.**
   - The seven tested versions with an audit averaged 15.4 of 19, against 11.5 for version 1.0, which scored the same at both efforts.
   - Most of the gain is in internal consistency, which averaged 7.4 of 8 against 4. Gaps rose a little, to 5.0 of 6 from 4.5.
   - Claims about the world did not improve: they averaged 1.9 of 4, against 2 for version 1.0.
2. **Cycles 2 to 10 did not measurably change detection.**
   - The audited versions scored between 14.5 and 17.5 on single runs, with no trend.
   - Their changes mainly affect structure and verifiability: IDs, severities, named checks, the summary and a numbered plan. The test does not measure those.
3. **Four rewrites of the claims check never raised the claims score.**
   - Claims went 3, 2, 1.5, 0.5, 3, 2 and 1.5 out of 4 across the audited runs.
   - The web source check added in cycle 4 led testers to run 7 to 18 searches each, at a cost in time and tokens, with no gain on this test.
4. **Quotation accuracy improved on both texts.** Version 1.0 quoted 88 to 92 percent of its quotations exactly. Every audited version reached 98.7 to 100 percent, and the final version reached 100 percent on the held-out draft.
5. **The held-out check shows at most a small gain in detection.** Version 1.10 scored 10.5 of 12, against 10.0 for version 1.0. Version 1.0 already found most of the draft's problems, so there was little room for a gain.
6. **Max effort made little difference.** It did not change version 1.0's score. The audited versions averaged 15.8 at max effort and 15.0 at default, a gap within the spread of single runs.
7. **Outputs are much longer.** At full depth, the analyses run to about 14,000 to 17,000 words, against about 8,000 to 13,000 for version 1.0.

## Recommendation

**Adopt version 1.10 for analyses of material the person supplies, such as papers, plans and policies.**

- **Against version 1.0: confidence 75 that 1.10 is better.**
  - All seven audited runs beat version 1.0 by at least 3 points on the main test.
  - Quotation accuracy is clearly better on both texts.
  - On the held-out text, 1.10 did no worse.
- **Against version 1.1, the simplest version with the gain: confidence 50 that 1.10 is better.**
  - There is no detectable difference in detection.
  - The later changes add structure that should make an analysis easier to check and act on, but the test did not measure that.

Four things to decide before adopting it:
1. **The confidence score.** Version 1.10 defines it as your probability that the recommendation survives the checks still needed, and it names those checks. Reversibility is noted beside the score, not counted in it. The original counted reversibility as a factor. This is a values choice about what the number should mean.
2. **The web source check.** The skill tells the model to check factual claims against any sources it can consult, without exposing confidential material, and to cite only what it read. That costs time and tokens, and it showed no gain here. It may matter more for material whose claims are easy to check.
3. **Length.** Full-depth analyses are about twice as long as version 1.0's. A short answer is still available: the summary plus what the limits require.
4. **A removed sentence.** Cycle 4 cut "The source framework lists academia, business strategy, education and decision-making as use cases." The credit to the kalatehjari/Observer repository is unchanged. Restoring the sentence would take the file just past 1,600 words. That limit was the protocol's rule, not a rule of the skill.

The test never covered questions without supplied material. The changes to the synthesis and the output shape apply there too, but no cycle measured them.

The alternatives are to keep version 1.0, which gives shorter and cheaper outputs, or to adopt version 1.1, which is the smallest change with the measured gain.

## Limits of this evidence

- There was one test paper and one held-out text. Both are on the same subject, and the held-out text is an earlier draft of the test paper.
- Each version ran once per cycle and was scored by one scorer. One scorer noted that a strict reading of a single criterion would have changed a score by half a point.
- Every agent was a Claude model, so the agreement among them is not independent evidence.
- The improvers saw aggregate scores from the same paper in every cycle, which could reward changes that only suit that paper. The held-out check guards against this only in part.
- The keep rule compared candidates only with version 1.0. It could not tell kept versions apart.

## Cost

About 7.3 million tokens were reported across the ten cycles, plus the resumed portions of agents cut off by usage limits, which were not reported. The run took about 39 hours, including six pauses for usage limits.

| Cycle | Tokens reported |
|---|---|
| 1 | 971,491 |
| 2 | 224,143 |
| 3 | 547,598 |
| 4 | 1,075,654 |
| 5 | 830,380 |
| 6 | 255,801 |
| 7 | 746,425 |
| 8 | 275,711 |
| 9 | 693,539 |
| 10 | 1,715,287 |

## Files

The record has two copies:
- In the local Skills folder, it is the self-improvement folder inside the skill's folder. That copy of the skill's own SKILL.md is still version 1.0.
- On GitHub, it is case-studies/observer-self-improvement/ in kalatehjari/Observer. Version 1.10 was published there on 23 October 2026 as the skill, in .claude/skills/observer-multi-lens-reasoning/.

Both copies hold:
- PROTOCOL.md, scoring-rubric.md and this file;
- one folder for each cycle, cycle-01 to cycle-10, each with:
  - the candidate SKILL.md;
  - changes.md, with a diff;
  - self-analysis.md;
  - the test outputs, the score files and report.md.

## The final SKILL.md (version 1.10)

```markdown
---
name: observer-multi-lens-reasoning
description: Use for complex, ambiguous or high-stakes questions needing several perspectives or a confidence rating, or when asked for the Observer method; skip simple lookups.
license: MIT
---

# Observer: multi-lens reasoning

Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. The Higher-Order Observer (HOO) then compares the streams and audit findings, finds where they converge and productively diverge, and gives one recommendation with confidence scores and a transparency report.

The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.

## When to use it

Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions costly to reverse. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.

Skip it for simple factual questions, quick lookups, casual conversation, and a single creative piece where the user wants one voice.

## Procedure

### 1. Frame the question

Restate the question in one or two sentences. Name the decision or goal, the constraints, the stakeholders, and what a good answer must do. List your assumptions. If the question is too underspecified to reason about, ask the single most important clarifying question instead of guessing.

### 2. Run the five lenses

Run each lens as its own independent stream; in a single pass, take them in turn. A lens must not borrow another lens's conclusion.

- **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
- **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
- **Critical:** challenge the assumptions, look for weak evidence and bias, state the strongest counterargument, and name the conditions under which the leading view fails. Ask who bears the cost.
- **Systems-thinking:** map relationships, feedback loops, delays, second-order effects and unintended consequences, and who is affected downstream.
- **Pragmatic:** test feasibility, cost, time, resources and reversibility, and name concrete next actions and implementation risks.

For each lens, produce three things:

- **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
- **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason.
- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where possible. Use a Mermaid mindmap only when the user asks for a diagram or the destination renders it.

### 3. Audit the material

When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step.

- **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
- **Gaps:** list what the material needs but nowhere supplies: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered. Quote where each lack shows.
- **Claims about the world:** list the material's factual claims wherever they appear, examples included: first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix, with every other passage that fix must change. Give a low-severity problem one line, omitting only the claim it weakens.
- **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
- **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.

### 4. Synthesize with the Higher-Order Observer

Compare the five streams and the audit findings.

- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Say whether the agreement rests on shared evidence or a shared assumption; the latter is weaker than it looks.
- **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
- **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
- **Check the recommendation:** before giving it, test each proposed change or next step against the framing's constraints and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest fix. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, naming the main ones, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately on the same basis, naming its own checks and factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.

### 5. Write the transparency report

Close with a report, one line per item, covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence scores and their drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.

## Output shape

Lead with a short summary usable on first read: the question as framed; the recommendation and the confidence scores; the main divergence; and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.

Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, give only the summary and what the limits below require. Do not pad: a lens with nothing new says so in one line.

## Limits and ethics

- All five lenses come from the same model, so their agreement is not independent verification. Say so whenever it matters to the conclusion.
- Do not invent evidence, figures, sources or citations to fill a lens. If a step has no support, label it as an assumption.
- Keep the person in charge. Observer supports a decision and does not make it. Present the trade-offs and the uncertainty plainly and leave the choice to them.
- For medical, legal, financial or safety-critical questions, say that the analysis is not professional advice and point to a qualified professional who should review it.
- When a disagreement is about values rather than facts, name it as a values choice. Do not settle it by declaring one side wrong.

```
