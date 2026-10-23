# Cycle 10 changes

- **Starting version:** 1.9 (cycle-09/SKILL.md), 1,596 words.
- **Candidate:** cycle-10/SKILL.md, 1,598 words by wc -w.
- **Checks:** the name, license and description lines are unchanged. "Limits and ethics" is identical, and the file has no backticks.
- **Analysis:** step numbers refer to the process map, and IDs (A1, K1 and so on) to the audit, in self-analysis.md.

## Changes

### 1. Claims are listed wherever they appear

- **Process step:** 3c, claims about the world.
- **Text:** "list the material's factual claims, first those" becomes "list the material's factual claims wherever they appear, examples included: first those".
- **Evidence:**
  - Of the 12 findings missed outright in the six audited test runs, 11 were claims about the world.
  - Those runs average 2.0 of 4 on claims, the same as version 1.0.
  - In cycle 9 the misses were not recorded at any severity.
  - The consistency check says where to look, and it is where the audit gained most: from 4 to 7.4 of 8 on average. The claims check said only which claims to take first.
- **Expected effect** (an assumption):
  - more claims are listed and checked, especially in examples and other passages away from the main argument;
  - the claims table gets longer;
  - claims detection is no lower, and may be higher.
- **Main risk:** the missed claims may have been listed and then misjudged, not left unlisted. If so, the audit and the searching get longer with no gain (K2).
- **Confidence:** 65 that it holds up, and 30 that one run shows a gain.

### 2. A gap is what the material nowhere supplies, quoted where the lack shows

- **Process step:** 3b, gaps, which feeds 3d, the record.
- **Text:** "list what the material needs but does not supply:" becomes "list what the material needs but nowhere supplies:", and the bullet now ends "Quote where each lack shows."
- **Evidence:**
  - Of the 19 partial detections in the audited runs, 12 were gaps, and gaps never reached 6 of 6.
  - Every record needs "a short exact quotation of each passage involved", but nothing said what to quote for an absence.
  - The point has been open since cycle 5.
- **Expected effect** (an assumption):
  - each gap record states what the whole material lacks, and quotes where that lack matters;
  - fewer false gaps;
  - some partial detections become full ones;
  - gap findings become checkable.
- **Main risk:** the model may spend effort confirming absences, and may drop borderline gaps (K3).
- **Confidence:** 70 that it holds up, and 25 that one run shows a gain.

### 3. The overview says the HOO also compares the audit findings

- **Process step:** 4, synthesis, as the overview describes it.
- **Text:** "then compares the streams," becomes "then compares the streams and audit findings,".
- **Evidence:**
  - Step 4 says "Compare the five streams and the audit findings."
  - The cycle 6 and cycle 9 reports list the omission as open. Cycle 5 first flagged the overview's account of the HOO.
- **Expected effect:** the overview matches the procedure. I expect no effect on detection.
- **Main risk:** none, beyond 3 added words.
- **Confidence:** 90.

## Trims that change no instruction (10 words saved)

- The lens-independence sentence is reworded, saving 6 words.
  - Before: "Run each lens as its own stream. In a single pass, take them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works."
  - After: "Run each lens as its own independent stream; in a single pass, take them in turn. A lens must not borrow another lens's conclusion."
- The record's fix clause is shortened, saving 4 words.
  - Before: "and the smallest fix that would resolve it, with every other passage that fix must change."
  - After: "and the smallest fix, with every other passage that fix must change."

## Not changed

- Nothing earlier is reverted.
- These are unchanged:
  - the quotation rule;
  - the consistency sweep;
  - the two claims questions;
  - the one-line rule for low-severity problems;
  - the confidence definition.
- The deferred low-severity points (A4 to A7, A9 and A10) are left for the user.

## Diff against version 1.9

~~~diff
--- cycle-09/SKILL.md	2026-10-23 02:34:19.991997628 +1300
+++ cycle-10/SKILL.md	2026-10-23 07:16:52.245773971 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. The Higher-Order Observer (HOO) then compares the streams, finds where they converge and productively diverge, and gives one recommendation with confidence scores and a transparency report.
+Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. The Higher-Order Observer (HOO) then compares the streams and audit findings, finds where they converge and productively diverge, and gives one recommendation with confidence scores and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -24,7 +24,7 @@
 
 ### 2. Run the five lenses
 
-Run each lens as its own stream. In a single pass, take them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works.
+Run each lens as its own independent stream; in a single pass, take them in turn. A lens must not borrow another lens's conclusion.
 
 - **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
 - **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
@@ -43,9 +43,9 @@
 When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step.
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
-- **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
-- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
-- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change. Give a low-severity problem one line, omitting only the claim it weakens.
+- **Gaps:** list what the material needs but nowhere supplies: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered. Quote where each lack shows.
+- **Claims about the world:** list the material's factual claims wherever they appear, examples included: first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
+- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix, with every other passage that fix must change. Give a low-severity problem one line, omitting only the claim it weakens.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
~~~
