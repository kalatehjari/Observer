# Cycle 1 changes

Candidate: cycle-01/SKILL.md.
- Length: 1,466 words by wc -w, against 1,026 in the current version and a cap of 1,600.
- Unchanged: the name, description and license lines, and "Limits and ethics", word for word.
- Constraints met: no backtick characters, and no mention of a particular subject, paper, test, score or finding.

Evidence tags (E1 to E12) refer to the register in self-analysis.md, and process steps (P0 to P6) refer to its process map. C and D numbers refer to the convergence zones and divergences in its step 2.

## 1. Add an audit step for supplied material

**Process step.** This fills the gap between P2 (the lenses) and P3 (the synthesis). It adds:
- a new step 3, "Audit the material";
- one sentence in the overview;
- an instruction for the synthesis to read the audit findings.

The old steps 3 and 4 become steps 4 and 5.

**What it says.** When the question concerns supplied material, after the lenses:
- (a) Check each rule, definition, figure, threshold and condition against every place that applies, restates or depends on it.
- (b) List the material's factual claims. For each, say what supports it, whether it is overstated and what kind of source would settle it.
- (c) Record each finding with its location, short exact quotations, type, severity and the smallest fix.
- (d) Quote only continuous, exactly copied text, in lens steps too. Otherwise paraphrase without quotation marks.
- (e) If the audit cannot be complete, check what carries the conclusion first, and say what was not checked.

**Evidence.**
- E3: in one run, with the model, effort and material held fixed, adding the audit raised detection from 14.0 to 16.5 out of 19.
- E11: the audit caught every consistency problem on the reviewer's list.
- E4: of the 30 extra problems it found, 27 hold up and none is wrong, and all 175 of its 175 quotations were exact.
- E10: the two findings still missed were claims about the world.
- Also: proposals 1, 3 and 4 in the progress notes, and C1, C2 and D1 to D3 in step 2.

**Expected effect.**
- More internal conflicts and overstated claims are found.
- A reader or a script can check each finding.
- Claims about the world are flagged together with what would settle them, instead of being left under general advice to verify.

**Main risk.**
- At default effort the audit may be shallow or may crowd out the lens work, and every inexact quotation now counts against the output. The guards are the priority order, the statement of coverage, and the rule to copy exactly or else paraphrase.
- Part of the measured gain may come from a second, longer look rather than from the audit's design (E8).

**Confidence:** 70.

## 2. Make the synthesis test its own recommendation

**Process step.** P3, the recommendation and the confidence score (now step 4).

**What it says.**
- (a) A new bullet, "Check the recommendation". Before giving the recommendation, test each proposed change or next step against the constraints from the framing. When there is material, also test it against the material and the audit. Prefer the smallest change that fixes the problem. When the person will revise the material, tell them to run the audit again.
- (b) The confidence score is for the recommendation as a whole. When the parts rest on evidence of clearly different strength, each main part also gets its own score.

**Evidence.**
- E2: the revision made from one pass's recommendations fixed 3 defects and introduced about 10.
- E6: 30 of the 35 later consistency problems sat in added or reworded text, and that pass reported two separate scores, 72 and 50, for two parts of its recommendation.
- In step 2, the rule of a single number did not fit a question that asks for confidence in each change.
- Also: proposal 2 in the progress notes, and C3 and D4 in step 2.

**Expected effect.**
- Fewer new defects appear when the person acts on the recommendation.
- The confidence report shows which part is weak.

**Main risk.**
- The remedy is untested, and its main benefit arrives after the person acts, which a test of a single pass does not measure.
- "Smallest change" could be read as discouraging a larger fix that is needed.
- More numbers can add false precision.

**Confidence:** 55.

## 3. Lead the output with a ranked summary

**Process step.** P5, the output shape.

**What it says.**
- The answer opens with a short summary: the recommendation, its confidence, and the most serious problems or risks found by the lenses or the audit, ranked by severity, one line each with its location.
- The convergences and divergences come next, then the audit findings, the lens summaries and the transparency report.
- A short answer keeps the most serious problems.

**Evidence.**
- E9: the output ran to 14,562 words at full depth.
- Change 1 adds length.
- Also: proposal 5 in the progress notes, and C4 in step 2.

**Expected effect.** The person can act on the first screen. Nothing is removed, only reordered, and this offsets the length that change 1 adds.

**Main risk.**
- One-line items can strip out nuance.
- The ranking rests on the model's own judgement of severity.
- Nothing yet measures how useful the answer is to a real person deciding.

**Confidence:** 65 that it makes answers more useful, and about 90 that it does no harm to accuracy.

## Left unchanged on purpose

- The description: no change needs it, and a new trigger would confound the test.
- The set of lenses, the chain format, the mind maps and the weights: the notes give no evidence on their value either way, and D5 is deferred to a later cycle.
- "Limits and ethics": untouched.

## Diff against the current version

Made with: diff -u inputs/SKILL-v1.0.md cycle-01/SKILL.md

~~~diff
--- inputs/SKILL-v1.0.md	2026-10-21 20:28:16.047036529 +1300
+++ cycle-01/SKILL.md	2026-10-21 20:43:09.967016083 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
+Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks that material against itself and against its evidence, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -38,24 +38,35 @@
 - **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason for the weight.
 - **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline with the lens name at the top. Color-code the lenses where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output is going somewhere that renders it.
 
-### 3. Synthesize with the Higher-Order Observer
+### 3. Audit the material
 
-Compare the five streams and write the synthesis.
+When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis. The lenses judge; the audit checks. Skip this step when there is no such material.
+
+- **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
+- **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. If you rely on your own knowledge, say so.
+- **Record:** give each finding its location, a short exact quotation of each passage involved, its type (a conflict, an unsupported or overstated claim, or a matter of convention), its severity (how much it would change the conclusion or mislead a reader) and the smallest fix that would resolve it.
+- **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
+- **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
+
+### 4. Synthesize with the Higher-Order Observer
+
+Compare the five streams and the audit findings, and write the synthesis.
 
 - **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
-- **Confidence score:** a single number from 0 to 100, with the two to four factors that moved it up or down. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.
+- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to run the audit again on the revised version, because revisions often introduce new conflicts.
+- **Confidence score:** a number from 0 to 100 for the recommendation as a whole, with the two to four factors that moved it up or down. When parts of the recommendation rest on evidence of clearly different strength, also give each main part its own score. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.
 
-### 4. Write the transparency report
+### 5. Write the transparency report
 
 Close with a short report covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence score and its drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.
 
 ## Output shape
 
-Lead with the recommendation and its confidence so the answer is usable on first read. Then give the convergence zones and productive divergences, then the lens summaries (chains, concepts and mind maps) and the transparency report.
+Lead with a short summary that is usable on first read: the recommendation, its confidence, and the most serious problems or risks found by the lenses or the audit, ranked by severity, one line each with its location where there is one. Then give the convergence zones and productive divergences, then the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report.
 
-Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score and the main divergence, and drop the rest. Do not pad: a lens with nothing new to add should say so in one line.
+Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score, the main divergence and the most serious problems, and drop the rest. Do not pad: a lens with nothing new to add should say so in one line.
 
 ## Limits and ethics
 
~~~
