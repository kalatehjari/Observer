# Cycle 9 changes

Candidate version 1.9 (cycle-09/SKILL.md) is built from version 1.8 (cycle-08/SKILL.md):

- Words by wc -w: 1,599 before and 1,596 after.
- The name, description and license lines are unchanged.
- "Limits and ethics" is identical to the earlier version.
- The file has no backtick characters.

The candidate makes three changes. None of them touches the consistency, gaps, claims, quotation or coverage rules, and nothing earlier is reverted. The process steps named below are those in self-analysis.md, Part 1.

## 1. A separate confidence score uses the main score's basis and names its own checks

- Step: 4e, the confidence scores.
- Old: "score it separately, with its own factors."
- New: "score it separately on the same basis, naming its own checks and factors."
- Evidence:
  - Since cycle 6 the main score has been a probability that the recommendation survives the checks still needed, and since cycle 8 it names those checks. The score for a claim or recommendation in the material had no stated basis.
  - The cycle 8 report lists "claims scored separately do not name their checks" as an open issue.
  - Tested runs reported that score in different ways: one gave "67 as a direction and 40 as written", and another a single 62.
- Expected effect: every score in the summary answers the same question and can be checked later, so the person can compare the material as written with the proposed plan. It has no effect on detection.
- Main risk: the defined basis may move the reported number, so it cannot be compared with earlier runs. A run that gives a single number may hide a strong direction behind weak wording.

## 2. The convergence sentence again says that only agreement on a shared assumption is weaker

- Step: 4a, the convergence zones.
- Old: "Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks."
- New: "Say whether the agreement rests on shared evidence or a shared assumption; the latter is weaker than it looks."
- Evidence: cycle 8 shortened this sentence. Its report says the new wording "can be read as saying that either kind of agreement is weaker", and that "The earlier wording said only agreement on a shared assumption is." Version 1.7 had the earlier meaning and scored 17.5, the best result so far.
- Expected effect: it removes a reading that could lead a run to discount agreement resting on evidence. It costs no words and has no effect on detection.
- Main risk: small. The ambiguity may never have misled a run, so the gain may be nil.

## 3. A low-severity record is one line that leaves out only the claim it weakens

- Step: 3d, the record.
- Old: "Give a low-severity problem one line: ID, locations, quotation, type, severity and fix."
- New: "Give a low-severity problem one line, omitting only the claim it weakens."
- Evidence:
  - The claims check asks each unverified claim to say "which way you lean and what source or data would settle them", but cycle 8's list of fields for the one-line record left that out. The cycle 8 report lists "a low-severity unverified claim may lose its note on which way the analysis leans" as open.
  - The list can also be read as dropping the other passages that a fix must change. The progress notes show what incomplete fixes cost: one revision fixed three defects and "introduced about ten new ones".
- Expected effect: low-severity lines keep the lean and the other passages the fix must change. The sentence is one word shorter, and most of cycle 8's saving on the audit's length remains.
- Main risk: low-severity lines grow slightly. The rule this change amends is itself untested, and this cycle's test checks it in its amended form.

## Trims that change no instruction

- "against the constraints from the framing" becomes "against the framing's constraints" (2 words saved).
- "prefer the smallest change that fixes the problem" becomes "prefer the smallest fix" (4 words saved).
- "and requests for a single creative piece" becomes "and a single creative piece" (2 words saved).

## For this cycle's report

Beside the scores by type, record three things:
- the audit's length and its number of records at each severity;
- whether separate scores state their basis and checks;
- whether low-severity lines keep leans and the other passages each fix must change.

## Diff against version 1.8 (diff -u)

~~~diff
--- cycle-08/SKILL.md	2026-10-23 01:55:12.096565280 +1300
+++ cycle-09/SKILL.md	2026-10-23 02:34:19.991997628 +1300
@@ -14,7 +14,7 @@
 
 Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions costly to reverse. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.
 
-Skip it for simple factual questions, quick lookups, casual conversation, and requests for a single creative piece where the user wants one voice.
+Skip it for simple factual questions, quick lookups, casual conversation, and a single creative piece where the user wants one voice.
 
 ## Procedure
 
@@ -45,7 +45,7 @@
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
 - **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
-- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change. Give a low-severity problem one line: ID, locations, quotation, type, severity and fix.
+- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change. Give a low-severity problem one line, omitting only the claim it weakens.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
@@ -53,11 +53,11 @@
 
 Compare the five streams and the audit findings.
 
-- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks.
+- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Say whether the agreement rests on shared evidence or a shared assumption; the latter is weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
-- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
-- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, naming the main ones, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
+- **Check the recommendation:** before giving it, test each proposed change or next step against the framing's constraints and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest fix. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
+- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, naming the main ones, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately on the same basis, naming its own checks and factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
 
 ### 5. Write the transparency report
 
~~~
