# Cycle 7 changes: version 1.6 to candidate version 1.7

This cycle makes two changes and two trims that change no instruction. It reverts nothing and leaves the third change slot empty. The audit, including cycle 6's rewrite of the claims check, and cycle 6's definition of the confidence score are unchanged. That way this cycle's test bears as cleanly as it can on cycle 6's untested changes: any movement in the claims score can only come from them, or from noise. The problem IDs (P1 to P22) refer to cycle-07/self-analysis.md.

## Change 1. The summary shows the question as framed and the main divergence, and a short answer is the summary

- **Process step:** step 6 (assembling the output: the summary and the short answer), together with step 1 (framing).
- **Edit:** the summary now lists "the question as framed; the recommendation and the confidence scores; the main divergence; and the most serious problems or risks". The short-answer sentence becomes "If the user asks for a short answer, give only the summary and what the limits below require."
- **Evidence:**
  - P3, a conflict in version 1.6: a short answer had to keep the main divergence, but the summary of a full answer left it out.
  - P5, a missing slot: the framing from step 1 had no place in the output except one line of the transparency report. The cycle 5 tester added a 306-word framing section that the output shape does not name, and applying version 1.6 to itself put the framing at the end.
  - The improvers of cycles 5 and 6 both deferred this point.
  - Limits and ethics asks that the trade-offs be presented plainly and the choice left to the person, and the summary is what the person reads first.
- **Expected effect:** on first read, the person sees how the question was understood and which trade-off is theirs. Short answers follow one list instead of two. No effect on the test score is expected. The change saves 6 words net.
- **Main risk:** a longer summary, since earlier summaries already ran 589 to 926 words. Confidence that it helps without harm: 70.

## Change 2. Each high-severity problem gets a step, or a reason it stays open

- **Process step:** step 4d (checking the recommendation).
- **Edit:** one sentence after "prefer the smallest change that fixes the problem": "Give each high-severity problem a step, or say why it stays open."
- **Evidence:**
  - P4: version 1.6 checks each step against the audit, but never checks the audit against the steps.
  - The progress notes show that a revision acts on what the analysis flags: pass 1's three defects were fixed and about ten new problems were added. So a serious problem with no step is likely to stay unfixed.
  - The progress notes' first proposal for the summary paired the must-fix revisions with the high-severity items.
  - Version 1.5 halved the recommendation's length, which may make it easier for a fix to drop out (an assumption; no report measures it).
- **Expected effect:** the recommendation becomes a complete list for the person to act on, and its coverage can be checked by ID. Problems left to the person, such as values choices, come with a reason. No effect on the test score is expected.
- **Main risk:** a longer recommendation. Also, no report shows that a recommendation has in fact left out a serious problem. Confidence that it helps without harm: 60.

## Trims that change no instruction (3 words)

- Introduction: "A final step, the Higher-Order Observer (HOO), compares" becomes "The Higher-Order Observer (HOO) then compares". This saves 2 words and removes a small inaccuracy, since the transparency report is a later step (P7).
- Introduction: "explicit confidence scores" becomes "confidence scores". This saves 1 word; the procedure still asks for a number from 0 to 100.

## Checks

| Rule | Result |
|---|---|
| At most 1,600 words (wc -w) | 1,599 |
| Name and license lines unchanged | Yes; the description is also unchanged |
| Limits and ethics intact | Identical to version 1.6 by diff |
| At most three changes | Two |
| General wording only | Yes |
| No backticks | None |

After the edits I audited the candidate again. It has one new low-severity problem: in a short answer, the summary's IDs point to an audit the reader does not see (P20). Change 2 also sits slightly less easily beside "the top next steps" (P11). Neither needs a fix now.

## Confidence

- Overall: 65.
- The candidate passes this cycle's keep rule: 90.
- The trims change no instruction: 90.
- This cycle's claims result is clear enough to guide cycle 8: 40.

The benefit of both changes rests on argument, because no test measures usefulness, and all the support comes from Claude models.

## For cycle 8

- If claims stay at or below 1 of 4, return to the claims check (P1). Options include going further back toward a check of support and overstatement, and narrowing the source check (P6).
- If claims reach 2 or more, turn to the audit's length (P2), for example with shorter records for low-severity problems.
- Deferred low-severity items: P8 to P13 and P21. This cycle partly fixes P7.

## Diff against version 1.6 (diff -u)

~~~diff
--- cycle-06/SKILL.md	2026-10-22 21:20:04.715389458 +1300
+++ cycle-07/SKILL.md	2026-10-23 00:00:50.742602601 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
+Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. The Higher-Order Observer (HOO) then compares the streams, finds where they converge and productively diverge, and gives one recommendation with confidence scores and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -56,7 +56,7 @@
 - **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
-- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
+- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
 - **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
 
 ### 5. Write the transparency report
@@ -65,9 +65,9 @@
 
 ## Output shape
 
-Lead with a short summary usable on first read: the recommendation, the confidence scores, and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
+Lead with a short summary usable on first read: the question as framed; the recommendation and the confidence scores; the main divergence; and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
 
-Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence scores, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
+Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, give only the summary and what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
 
 ## Limits and ethics
 
~~~
