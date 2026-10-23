# Cycle 03 changes: version 1.2 to candidate 1.3

Candidate: cycle-03/SKILL.md, 1,595 words by wc -w (version 1.2 had 1,582). Process steps refer to the map in self-analysis.md (P0 to P7). Finding IDs (A1 to A9) and assumption IDs (S1 to S4) are the ones defined there. Nothing earlier was reverted, because no evidence says an earlier change hurt.

## 1. A finding is one distinct problem, with its own ID and every location where it occurs

- Process step: P3d, Record (and through it P6c, state each finding once).
- Edit: "give each finding an ID, its location" becomes "give each distinct problem its own ID, every location where it occurs".
- Evidence:
  - At version 1.1, consistency had 2 partial detections and gaps 3 (cycle 1 report).
  - The text conflicts with itself (A4): a single "location" per finding, against checks of "every place" and quotations of "each passage involved".
  - Inference: version 1.2's state-once rule adds a pull toward merging problems.
- Expected effect: fewer partial detections caused by findings that are merged, split or limited to one location (assumption S1). Each ID can be checked on its own. Length should be about neutral, because the instances of a problem sit under one ID instead of being repeated.
- Main risk: more locations means more quotations, so slightly more chance of an inexact one, and slightly more length. If the partials have another cause, the change does nothing. Confidence 55 that it helps, 80 that it does no harm.

## 2. Score the material's own claim when the person asks how far to trust it

- Process step: P4e, Confidence score. To avoid a new conflict, the mentions in P5 (transparency report) and P6d (short answer) become plural, "the confidence scores".
- Edit: added "When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors." The per-part sentence was reworded, with the same meaning and five fewer words.
- Evidence:
  - A3: the only score defined is "for the recommendation as a whole", meaning the analysis's own advice.
  - The cycle 2 report deferred this exact gap.
  - A weak sign: the cycle 1 report records the candidate's confidence in the material's central recommendation only as "about 60".
- Expected effect: the person gets the number that answers their question, with its drivers, kept separate from the score for the advice. No effect on detection is expected.
- Main risk: two scores could be confused, or add words. Applying it unasked is limited by "When asked". Confidence 65 that it helps, 90 that it does no harm.

## 3. Compose the summary last and check it against the body; give the full recommendation a place

- Process step: P6a and P6b, summary and order.
- Edits:
  - added "Compose it last, and check its IDs, severities and scores against the body.";
  - the order now begins with the full recommendation: "Then give the full recommendation";
  - the summary line names each problem's "main location";
  - the summary lists "the confidence scores", to match change 2.
- Evidence:
  - A1 and A2: the order has no place for the recommendation's conditions and next steps, and nothing says when the summary is written.
  - The cycle 2 report deferred both gaps.
  - Full-depth outputs run to about 15,000 words (cycle 1 report, progress notes), so the person relies on the summary.
- Expected effect: the summary agrees with the body, and the recommendation, with its conditions and next steps, has a defined home. No effect on detection is expected.
- Main risk: a writer working strictly top to bottom may treat "last" as a position. "Lead with" keeps the summary first. The full recommendation may repeat the summary and add some length. Confidence 65 that it helps, 85 that it does no harm.

## Wording trims (no instruction added or removed)

These pay for the additions:
- introduction: "checks it", and "converge and productively diverge" (3 words);
- mind-map bullet, reworded (7 words);
- audit introduction: "otherwise skip this step" (5 words);
- re-audit sentence: "audit the revised version again" (3 words);
- summary paragraph: "usable on first read" and "cite only its ID" (6 words).

## Checks

- At most 1,600 words: 1,595.
- Frontmatter name, description and license lines: unchanged; the description has 165 characters.
- "Limits and ethics": identical to version 1.2, checked by diff.
- Backticks: none.
- Wording: general only; no subject, paper, test or score is named.
- Changes: three.

## Unified diff against version 1.2

~~~diff
--- /tmp/claude-0/-home-claude/83f3f335-6e47-5ec6-a08c-86856ab6afa2/scratchpad/self-improvement/cycle-02/SKILL.md	2026-10-22 09:16:42.109054458 +1300
+++ /tmp/claude-0/-home-claude/83f3f335-6e47-5ec6-a08c-86856ab6afa2/scratchpad/self-improvement/cycle-03/SKILL.md	2026-10-22 11:38:46.264868292 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks that material for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
+Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks it for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -36,16 +36,16 @@
 
 - **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
 - **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason for the weight.
-- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline with the lens name at the top. Color-code the lenses where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output is going somewhere that renders it.
+- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output's destination renders it.
 
 ### 3. Audit the material
 
-When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis. The lenses judge; the audit checks. Skip this step when there is no such material.
+When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step. The lenses judge; the audit checks.
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
 - **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
 - **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, whether your own knowledge agrees, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
-- **Record:** give each finding an ID, its location, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
+- **Record:** give each distinct problem its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
@@ -56,18 +56,18 @@
 - **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
 - **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
 - **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
-- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to run the audit again on the revised version, because revisions often introduce new conflicts.
-- **Confidence score:** a number from 0 to 100 for the recommendation as a whole, with the two to four factors that moved it up or down. When parts of the recommendation rest on evidence of clearly different strength, also give each main part its own score. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.
+- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
+- **Confidence score:** a number from 0 to 100 for the recommendation as a whole, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.
 
 ### 5. Write the transparency report
 
-Close with a short report covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence score and its drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.
+Close with a short report covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence scores and their drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.
 
 ## Output shape
 
-Lead with a short summary that is usable on first read: the recommendation, its confidence, and the most serious problems or risks, ranked by severity, one line each with its ID, and its location where there is one. Then give the convergence zones and productive divergences, then the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report. State each finding in full once, with an ID, in the audit when there is one, and elsewhere, apart from the summary, cite the ID instead of restating it.
+Lead with a short summary usable on first read: the recommendation, the confidence scores, and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation, the convergence zones and productive divergences, the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.
 
-Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
+Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence scores, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
 
 ## Limits and ethics
 
~~~
