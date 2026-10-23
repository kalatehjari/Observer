# Cycle 06 changes

- Starting version: 1.5 (cycle-05/SKILL.md), 1,598 words.
- Candidate: cycle-06/SKILL.md, 1,596 words by wc -w.
- Two changes, plus three trims that change no instruction. The name, license and description lines and the "Limits and ethics" section are unchanged, and the file contains no backtick.
- Process steps (P numbers) and finding IDs (A numbers) refer to self-analysis.md.

## Change 1. The claims check asks about support and about truth separately

- Process step: P4c, Claims about the world (skill step 3, Audit the material).
- What changes: each listed claim gets two questions. First: does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Second: is it true? That is checked as before, against own knowledge (labelled as such) and against sources consulted without exposing confidential material, citing only what was read, with what is known or found for and against. The rule to call a claim wrong only when confident stays, and an unverified claim now also says which way the analyst leans. Two passages are removed: the opening clause that framed the check as truth only, and the side-by-side sentence. This partly reverts cycle 5's change 1, back toward version 1.1's emphasis on support and overstatement, and it keeps cycle 4's source check.
- Evidence:
  - The claims type scored 3, 2, 1.5 and 0.5 out of 4 in versions 1.1, 1.3, 1.4 and 1.5. Versions 1.2, 1.4 and 1.5 each revised the claims check by adding to its truth side, and none of those revisions was followed by a gain (reports of cycles 1 to 5).
  - The cycle 1 report says version 1.1 checked factual claims "for support and overstatement". That version scored best on this type.
  - In cycles 4 and 5 the tester ran 13 and 14 searches. Inference: effort went into the check, and the shortfall lies in how claims were judged.
  - In version 1.5 the verdict rule yields only wrong or unverified, although the record lists four claim types. Nothing yields unsupported or overstated (A1 and A2).
- Expected effect: more unsupported and overstated claims are recorded as such, including claims the analyst believes true, and the person can rank unverified claims by their lean. Predictions for cycle 7:
  - claims scores at least 1.5 of 4, at 60 percent. This would not show that the change worked, because regression to the mean also predicts a rise.
  - consistency and gaps together lose no more than 1 point, at 80 percent.
  - It is also worth checking whether the audit grows by more than about a fifth.
- Main risk: a longer audit with more low-severity entries for unsupported claims. As a fourth rewrite of this bullet, it may also fail as the last three did.
- Confidence: 55 that it raises the expected claims score.
- Words: 6 more.

## Change 2. The confidence score names its event, and reversibility sits beside it

- Process step: P5e, Confidence score (skill step 4, Synthesize with the Higher-Order Observer).
- What changes: the score becomes "your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed". Reversibility leaves the list of things weighed and is noted beside the score.
- Evidence:
  - Version 1.5 never says what event the number is the probability of (A3). In cycle 5 the tester scored its plan 76, and the central recommendation 67 "as a direction" and 40 "as written". Each score names its object but not its event.
  - Weighing reversibility inside the number mixes likelihood with stakes, so a low score may mean either weak evidence or high stakes (A4).
  - Own knowledge: a probability can be checked for calibration only when its event is named.
  - Not used as evidence: the clustering of the earlier scores between 55 and 62. Every run scored the same material on the same question, so stable scores are what a reliable method should give (A10).
- Expected effect: each score can be checked afterwards against the checks the report lists, and the person sees likelihood and stakes separately. Predictions for cycle 7:
  - its main confidence score names its event, at 85 percent.
  - detection is unaffected, at over 90 percent.
- Main risks:
  - A model could make the event easy by listing few checks.
  - Disputes about values fall outside the event, although the limits still leave those choices to the person.
  - A short answer drops the report, so there the checks are less visible.
  - The user may prefer the score to keep its blended meaning. That is a values choice.
- Confidence: 70 that it makes the scores more verifiable and more useful.
- Words: 5 more.

## Trims that change no instruction (13 words saved)

- Introduction, first sentence: "Observer is a method for reasoning through a question from several perspectives at once: five parallel streams" became "Observer reasons through a question in five parallel streams" (8 words).
- Step 2: "work through them in turn" became "take them in turn" (1 word).
- Mind map: "color-coded where the output can show color" became "color-coded where possible" (4 words).

## Not changed

No third change was made. The evidence for each remaining candidate was weak, and an extra change would make cycle 7's result harder to read (A12). These were deferred:
- the introduction's account of what the HOO compares and produces (A5);
- a place for the framing in the summary (A6);
- what a lens with nothing new still owes (A7);
- what to quote for a gap;
- narrowing the costly source check.

No earlier change was reverted in full.

## Diff against version 1.5

--- cycle-05/SKILL.md	2026-10-22 19:51:01.447368954 +1300
+++ cycle-06/SKILL.md	2026-10-22 21:20:04.715389458 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once: five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
+Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -24,7 +24,7 @@
 
 ### 2. Run the five lenses
 
-Run each lens as its own stream. In a single pass, work through them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works.
+Run each lens as its own stream. In a single pass, take them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works.
 
 - **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
 - **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
@@ -36,7 +36,7 @@
 
 - **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
 - **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason.
-- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the destination renders it.
+- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where possible. Use a Mermaid mindmap only when the user asks for a diagram or the destination renders it.
 
 ### 3. Audit the material
 
@@ -44,7 +44,7 @@
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
-- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Internal consistency cannot settle such a claim: check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read. For each, set what it claims, at its stated strength and scope, beside the material's support and what you know or found for and against it, and state any difference precisely. Call a claim wrong only when confident; mark other doubtful claims unverified and say what source or data would settle them.
+- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
 - **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
@@ -57,7 +57,7 @@
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
 - **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
-- **Confidence score:** a number from 0 to 100 for the recommendation as a whole, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.
+- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.
 
 ### 5. Write the transparency report
 
