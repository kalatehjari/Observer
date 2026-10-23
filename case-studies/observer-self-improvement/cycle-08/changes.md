# Cycle 08 changes

Candidate version 1.8 (cycle-08/SKILL.md) has 1,599 words by wc -w, the same as version 1.7. It makes two changes and leaves the third slot empty. Three wording trims that change no instruction pay for them, as in cycles 4 to 7. Nothing earlier is reverted. The name, description and license lines are unchanged, and so is the whole of Limits and ethics. The reasoning behind each change is in cycle-08/self-analysis.md.

## Change 1: a one-line record for low-severity problems

- **Process step:** 4.4, Record (Procedure 3, Audit the material).
- **New text,** at the end of the Record bullet: Give a low-severity problem one line: ID, locations, quotation, type, severity and fix.
- **Evidence:**
  - The audit is the largest section, and its share has grown. It took 40, 53, 47, 60 and 61 percent of the analysis in the five tested versions that had an audit, and 9,503 words in the last test.
  - It is the only large section with no rule that limits its length.
  - The two such rules tried so far cut their sections by 62 percent (the transparency report, cycle 4) and 51 percent (the recommendation, cycle 5). Neither was followed by a fall in the total of more than half a point.
  - Cycle 1 named length the method's main cost, and cycle 3 deferred it as a medium gap. The cycle 7 improver's advice for this cycle points to the audit's length.
  - In the self-analysis, see E5 to E7, E14, P3 and CZ1.
- **Expected effect:**
  - The audit should get shorter, by roughly a tenth to a quarter. This figure is an assumption, because no report gives the share of low-severity problems.
  - Detection, quotation accuracy, the summary and the high-severity rule should not change.
  - Each low-severity line keeps what makes it checkable (quotation, locations and severity) and what makes it actionable (the fix).
- **Main risk:**
  - The earlier length rules worked on sections where nothing is detected. The audit is where detection happens.
  - A problem the skill rates low might get only partial credit, and the cheaper format could pull ratings down.
  - A low-severity unverified claim may lose its lean (N1 in the self-analysis).
  - Confidence: 55.
  - Revert the change if low-severity records turn out to be a small share of the audit, or if a fall in consistency or gaps traces to one-line records.

## Change 2: the confidence score names the main checks

- **Process step:** 5.5, Confidence scores (Procedure 4, Synthesize with the Higher-Order Observer).
- **New text:** naming the main ones, inserted after "the checks still needed".
- **Evidence:**
  - The score is defined as a probability of surviving the checks still needed, but nothing says which checks those are. So the person cannot test the number (P1, medium).
  - The cycle 6 improver gave a confidence of 70 that defining the score would make scores easier to check.
  - One test run gave the score for two different things: the recommendation as a direction, and the recommendation as written.
  - From my own knowledge: a probability can be checked only against a named event.
- **Expected effect:**
  - Each score comes with the checks that would confirm or overturn it.
  - The person deciding then knows what to commission, and can tell later whether the recommendation survived.
  - It cannot affect detection.
- **Main risk:**
  - The named checks may become boilerplate, adding words without making the score testable.
  - Confidence: 70.

## Trims that change no instruction

1. **Convergence zones (8 words fewer).** "Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks." now reads: Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks.
2. **Output shape (3 words fewer).** "a lens with nothing new to add should say so in one line" now reads: a lens with nothing new says so in one line.
3. **The audit's opening paragraph (6 words fewer).** "The lenses judge; the audit checks." is removed. The bullets below it define the audit.

## Checks

| Rule | Result |
|---|---|
| At most 1,600 words | 1,599 (wc -w) |
| Name and license lines unchanged | Yes, and the description is unchanged too |
| Limits and ethics intact | Identical to version 1.7 |
| At most three changes | Two |
| General wording only | Yes |
| No backticks | None |

## Notes for the cycle report

- **Correction to the cycle 7 report.** It gives 395,327 tokens and 100 tools as the cost of the source check. Those figures were the whole cycle 5 tester run (P2).
- **Cycle 1 tokens.** The report should say which cycle 1 tester used 178,375 tokens and which used 252,960 (P11).
- **For cycle 9:**
  - Leave the audit and the claims check alone.
  - Report the audit's word count and its number of records at each severity, beside the scores by type.
  - If possible, report in aggregate how many reference findings were recorded as one-line low-severity items, and how many of those were scored as partly detected.
- **Deferred:** P4 to P10, P12 and P13 from the self-analysis, and any narrowing of the source check.

## Diff against version 1.7

Made with diff -u cycle-07/SKILL.md cycle-08/SKILL.md.

~~~diff
--- cycle-07/SKILL.md	2026-10-23 00:00:50.742602601 +1300
+++ cycle-08/SKILL.md	2026-10-23 01:55:12.096565280 +1300
@@ -40,12 +40,12 @@
 
 ### 3. Audit the material
 
-When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step. The lenses judge; the audit checks.
+When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step.
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
 - **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
-- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change.
+- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change. Give a low-severity problem one line: ID, locations, quotation, type, severity and fix.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
@@ -53,11 +53,11 @@
 
 Compare the five streams and the audit findings.
 
-- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
+- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
 - **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
-- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
+- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, naming the main ones, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
 
 ### 5. Write the transparency report
 
@@ -67,7 +67,7 @@
 
 Lead with a short summary usable on first read: the question as framed; the recommendation and the confidence scores; the main divergence; and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
 
-Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, give only the summary and what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
+Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, give only the summary and what the limits below require. Do not pad: a lens with nothing new says so in one line.
 
 ## Limits and ethics
 
~~~
