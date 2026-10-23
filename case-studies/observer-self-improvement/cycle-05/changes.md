# Cycle 05 changes

- Current version: 1.4 (cycle-04/SKILL.md), at 1,593 words.
- Candidate: cycle-05/SKILL.md, at 1,598 words by wc -w.
- Three changes and one wording trim. Nothing reverted.
- Unchanged: the frontmatter, including the description, and the "Limits and ethics" section. There are no backtick characters.
- The full reasoning is in cycle-05/self-analysis.md. The finding IDs below (A1 and so on) refer to its audit.

## 1. The claims check sets each claim beside the evidence and states the difference

- **Process step:** 4c, "Claims about the world" (Procedure 3). Fixes A1.
- **What changes:** the four-part template for each claim becomes one comparison.
  - The old template asked for the material's support, whether the claim is stated more strongly than that support allows, what own knowledge says for and against it, and what would settle it.
  - The new comparison sets what the claim says, at its stated strength and scope, beside the material's support and what is known or found for and against it, and states any difference precisely.
  - What would settle a claim is now asked only of claims left unverified.
  - Kept: the order of the list, labelled own knowledge, sources consulted without exposing confidential material, citing only what was read, and calling a claim wrong only when confident.
- **Evidence:**
  - Claims about the world was the weakest type in the last two tests: 2 of 4 in cycle 3, then 1 detected and 1 partly in cycle 4.
  - Across the versions with an audit, it went 3, 2 and 1.5.
  - The changes in cycles 2 and 4 altered the tester's behaviour (own knowledge was labelled; the tester ran 13 searches and read 13 pages) but not the score. This points to turning checks into precise findings, rather than access to evidence, as the bottleneck. That is an inference from one run.
  - Consistency, which works by setting passages side by side and stating the mismatch, scores 7.5 to 8 of 8.
  - The best claims result, 3 of 4, came with cycle 1's focus on support and overstatement. This change restores that focus and extends it to outside evidence.
- **Expected effect:** claims findings that show exactly how a claim departs from its evidence. Readers can check them, and partial detections become full ones. The text asked for each claim is no longer than before.
  - Confidence 55 that the findings become more precise.
  - Confidence 25 that the claims score rises in this cycle's single run.
- **Main risk:**
  - more low-value findings of overstatement;
  - the mechanism is inferred from one run, and two earlier changes to the claims check showed no measured gain.

## 2. The full recommendation is written as numbered steps of one or two lines

- **Process step:** 7, composing the output ("Output shape"), for the recommendation produced at step 5c. Fixes A2.
- **Evidence:**
  - The full recommendation ran to 2,552 words in cycle 3 and 3,140 in cycle 4. That makes it the longest section after the audit.
  - A format rule of the same kind, one line per item, cut the transparency report from 1,467 to 551 words in cycle 4, with the total score within noise.
  - Length has been the method's main cost since cycle 1.
  - Findings are already stated once, in the audit, and cited by ID everywhere else.
- **Expected effect:** a plan the person deciding can read in a minute or two, with the detail one ID away. The total length should fall by roughly 1,500 to 2,000 words.
  - Confidence 65 that the section shrinks by at least a third.
  - Confidence 75 that detection falls by no more than half a point because of this change.
  - Confidence 50 that people deciding find it more useful.
- **Main risk:**
  - Drafted wording and reasons that a person revising the material wants may leave the plan.
  - A finding stated only in the recommendation, against the existing rule, would be lost.

## 3. Each fix names every other passage it must change

- **Process step:** 4d, "Record" (Procedure 3), which feeds step 5d, "Check the recommendation". Fixes A3.
- **Evidence:**
  - In the case study, the revision made from the first Observer pass fixed the three defects that pass found and introduced about ten new ones.
  - 30 of the second pass's 35 consistency problems were in text that the revision added or reworded.
  - The current check only asks whether a change would create a new conflict.
  - The consistency check already maps the passages that depend on each rule, definition and figure, so naming them costs the tester little.
- **Expected effect:** fixes that can be applied without creating new conflicts, and a list of affected passages that a reader can check.
  - Confidence 50 that fixes become more complete.
  - Confidence 60 that the audit grows by less than a tenth.
  - The blind test cannot register this effect.
- **Main risk:** a longer audit. Length may move into the fixes rather than leave the output.

## Wording trim (not a change in method)

The trim pays for the changes.
- The introduction's sentence "For material the person supplies, an audit then checks it for conflicts, gaps and unsupported or wrong claims, quoting it exactly." (21 words) becomes "An audit checks supplied material for conflicts, gaps and doubtful claims." (11 words).
- No instruction changes, and the Quotation rule in the procedure is untouched.
- The user may want the longer sentence back.

## Not changed, and why

- **No revert.** The evidence that the claims text from cycles 2 and 4 did not help is within single-run noise. That text also carries source checks and calibration safeguards that the test cannot see.
- **Deferred, in order of priority:**
  1. What to quote for a gap (A6): state what the material as a whole lacks, then quote where the lack shows. This comes first because a later test can measure it.
  2. What the confidence score is the chance of (A4). The scores have stayed between 55 and 62 in every recorded run.
  3. Showing the framing in the summary (A5).
  4. Two low-severity wording conflicts. The introduction still gives the transparency report to the Higher-Order Observer (A7), and the text does not say what a lens with nothing new still owes (A8).

## Checks

| Rule | Result |
|---|---|
| At most 1,600 words (wc -w) | 1,598 |
| Name and license lines unchanged | Yes; the description is also unchanged |
| "Limits and ethics" intact | Identical to version 1.4, which the cycle 4 report found identical to version 1.0 |
| At most three changes | Three, plus a wording trim |
| No backtick characters | None |
| General wording only | Yes; it names no subject, paper, test, score or finding |

## Diff against the current version (diff -u)

~~~diff
--- cycle-04/SKILL.md	2026-10-22 14:30:09.768950099 +1300
+++ cycle-05/SKILL.md	2026-10-22 19:51:01.447368954 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once: five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. For material the person supplies, an audit then checks it for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
+Observer is a method for reasoning through a question from several perspectives at once: five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -44,8 +44,8 @@
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
-- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, what your own knowledge says for and against it, and what kind of source or data would settle it. Internal consistency cannot settle such a claim; check the claims against any sources you can consult without exposing confidential material, citing only what you read. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
-- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
+- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Internal consistency cannot settle such a claim: check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read. For each, set what it claims, at its stated strength and scope, beside the material's support and what you know or found for and against it, and state any difference precisely. Call a claim wrong only when confident; mark other doubtful claims unverified and say what source or data would settle them.
+- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
@@ -65,7 +65,7 @@
 
 ## Output shape
 
-Lead with a short summary usable on first read: the recommendation, the confidence scores, and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation, the convergence zones and productive divergences, the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
+Lead with a short summary usable on first read: the recommendation, the confidence scores, and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
 
 Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence scores, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
 
~~~
