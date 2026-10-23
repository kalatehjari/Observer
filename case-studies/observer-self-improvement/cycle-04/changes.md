# Cycle 4 changes

- **Candidate:** cycle-04/SKILL.md, at 1,593 words (wc -w). Version 1.3 has 1,595 words.
- **Checks, made by script:**
  - the frontmatter is unchanged, including the name and license lines and the description;
  - "Limits and ethics" is identical to version 1.3;
  - the file has no backticks.
- **Reverts:** none. The evidence, one run per version, does not show that any earlier change failed to help.
- **Confidence:** 60 for the package; 85 that it passes this cycle's decision rule. self-analysis.md gives the reasons. The IDs A1 to A14 and S1 to S8 below refer to that file.
- **Notation:** quotation marks hold exact text from version 1.3. Italics hold new text.

## Change 1. Claims check: recall cue, evidence for and against, source check

- **Process step:** 3c, claims about the world (step 3, Audit the material).
- **Edits:**
  - The claims are now listed *first those its conclusions depend on, then figures, dates, attributions and absolute claims*.
  - "whether your own knowledge agrees" becomes *what your own knowledge says for and against it*.
  - After "Internal consistency cannot settle such a claim" comes *check the claims against any sources you can consult without exposing confidential material, citing only what you read*.
  - "what kind of source or data would settle it" stays, so the skill does not invite it to name specific sources it might invent.
- **Evidence:**
  - Claims are the weakest type: 2 of 4 points in version 1.3, against 3 in version 1.1 and 2 in version 1.0 (cycle 1 and 3 reports).
  - The own-knowledge check added in version 1.2 was followed by no gain.
  - The progress notes say the two misses in the earlier max-effort pass were claims about the world, "which no internal check can settle".
  - Cycle 3 deferred, as a medium gap, that the claims check never says to consult sources when they are available.
  - The audit found four related problems: the skill tells the person what to verify but never tells itself to verify when it can (A6); its knowledge test is yes or no (A7); its claims list has no recall cue (A8); and it has no guard for confidential material (A12).
- **Expected effect** (an assumption, not evidence):
  - Where sources are available, the verdicts on claims can be checked, and are more often right.
  - Without sources, the test for and against and the recall cue may catch more wrong or overstated claims.
  - A measurable gain in this test is uncertain, with a confidence of 30, because the tester probably has no sources (S3).
- **Main risk:**
  - Where sources exist, the analysis takes more time and tokens, and confidential material could reach outside queries. The wording guards against that but cannot enforce it.
  - If the blind tester can browse, a search could in principle reach the published case-study record, so the tester's brief should rule out looking up the test material or its review.
  - The claim entries get longer, and there are more unverified flags.
- **Words:** +28.

## Change 2. Record: problems the lenses raised, and what each problem weakens

- **Process step:** 3d, the record, and the link from step 2 into the audit.
- **Edits:**
  - After "give each distinct problem" comes *including those the lenses raised*.
  - Before the severity comes a new field: *the claim or conclusion it weakens*.
- **Evidence:**
  - Gaps stayed at 3 detected and 3 partly in both versions that had an audit (1.1 and 1.3), against 4 detected and 1 partly in version 1.0, which had none.
  - The output shape states each finding in full once, in the audit, but the audit step never takes in problems the lenses raised (A2).
  - Severity is defined by its effect on the conclusion, but no field names that effect, so the reader cannot check it (A9).
- **Expected effect** (an assumption):
  - Each gap finding says what it breaks, which may turn partial detections into full ones (confidence 40, S4).
  - The person deciding can check each severity and the summary's ranking (confidence 70).
  - Problems the lenses raise get locations and exact quotations.
- **Main risk:**
  - Every record gets a few words longer.
  - A lens's concerns about the decision, rather than about the material, may enter the audit.
- **Words:** +11.

## Change 3. Transparency report: one line per item

- **Process step:** 5, the transparency report.
- **Edit:** "a short report covering" becomes *a report, one line per item, covering*.
- **Evidence:**
  - In the last test the report ran to 1,467 words. Step 5 asks for "a short report", but the output shape gives a high-stakes question the full version, and the full version won (A3).
  - The whole analysis grew from 8,351 to 15,479 to 17,123 words. Cycle 1 called length and time the main cost of the method, and cycle 3 deferred length at full depth as a medium gap (A10).
- **Expected effect** (an assumption):
  - The report falls to roughly 200 to 300 words, about 1,200 fewer at default effort.
  - No findings are lost, because none is stated in the report.
  - The saving roughly offsets the words that changes 1 and 2 add to the analysis.
- **Main risk:**
  - The nuance in what the person still has to decide is squeezed into one line.
  - The change answers length only in part. The audit, which carries the detections, is left as it is.
- **Words:** +3.

## Trims that pay for the changes

None of these changes an instruction. Together they save 44 words.

- **Introduction (15 words).** The description of the streams and the audit is tightened. "an explicit confidence score" becomes *explicit confidence scores*. This completes cycle 3's change 2, which made the other mentions plural (A1).
- **When to use it (15 words).**
  - Deleted: "The source framework lists academia, business strategy, education and decision-making as use cases." It repeats the sentence before it, and it cannot be verified from here (A13). The user may want to restore it.
  - "decisions that are costly to reverse" becomes *decisions costly to reverse*.
- **Frame the question (3 words).** "List the assumptions you are making." becomes *List your assumptions.*
- **Run the five lenses (3 words).** "work through them one after another, and keep each one independent" becomes *work through them in turn and keep each independent*, and "while it is working" becomes *while it works*.
- **Key concepts (3 words).** "a one-line reason for the weight" becomes *a one-line reason*.
- **Mind map (1 word).** "the output's destination renders it" becomes *the destination renders it*.
- **Higher-Order Observer opening (4 words).** "Compare the five streams and the audit findings, and write the synthesis." becomes *Compare the five streams and the audit findings.*

One trim was tried and dropped. The candidate keeps "otherwise skip this step", because the shorter *otherwise skip it* could be read as skipping the material.

## Deferred

- A defined meaning for the confidence number (A11). Nothing in this protocol can test it, and the word budget is spent.
- Briefer records for low-severity problems. Bring this back if the audit keeps growing at max effort without score gains.
- Updating PROGRESS.md (A5). Its list of suggested changes still says that none has been applied.

## Diff against version 1.3

~~~diff
--- cycle-03/SKILL.md	2026-10-22 11:38:46.264868292 +1300
+++ cycle-04/SKILL.md	2026-10-22 14:30:09.768950099 +1300
@@ -6,13 +6,13 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks it for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
+Observer is a method for reasoning through a question from several perspectives at once: five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. For material the person supplies, an audit then checks it for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with explicit confidence scores and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
 ## When to use it
 
-Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions that are costly to reverse. The source framework lists academia, business strategy, education and decision-making as use cases. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.
+Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions costly to reverse. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.
 
 Skip it for simple factual questions, quick lookups, casual conversation, and requests for a single creative piece where the user wants one voice.
 
@@ -20,11 +20,11 @@
 
 ### 1. Frame the question
 
-Restate the question in one or two sentences. Name the decision or goal, the constraints, the stakeholders, and what a good answer must do. List the assumptions you are making. If the question is too underspecified to reason about, ask the single most important clarifying question instead of guessing.
+Restate the question in one or two sentences. Name the decision or goal, the constraints, the stakeholders, and what a good answer must do. List your assumptions. If the question is too underspecified to reason about, ask the single most important clarifying question instead of guessing.
 
 ### 2. Run the five lenses
 
-Run each lens as its own stream. In a single pass, work through them one after another, and keep each one independent: a lens must not borrow another lens's conclusion while it is working.
+Run each lens as its own stream. In a single pass, work through them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works.
 
 - **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
 - **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
@@ -35,8 +35,8 @@
 For each lens, produce three things:
 
 - **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
-- **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason for the weight.
-- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output's destination renders it.
+- **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason.
+- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the destination renders it.
 
 ### 3. Audit the material
 
@@ -44,14 +44,14 @@
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
-- **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, whether your own knowledge agrees, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
-- **Record:** give each distinct problem its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
+- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, what your own knowledge says for and against it, and what kind of source or data would settle it. Internal consistency cannot settle such a claim; check the claims against any sources you can consult without exposing confidential material, citing only what you read. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
+- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
 ### 4. Synthesize with the Higher-Order Observer
 
-Compare the five streams and the audit findings, and write the synthesis.
+Compare the five streams and the audit findings.
 
 - **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
@@ -61,7 +61,7 @@
 
 ### 5. Write the transparency report
 
-Close with a short report covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence scores and their drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.
+Close with a report, one line per item, covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence scores and their drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.
 
 ## Output shape
 
~~~
