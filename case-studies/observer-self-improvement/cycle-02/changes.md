# Cycle 02 changes

- Current version: 1.1 (cycle-01/SKILL.md), 1,466 words.
- Candidate: cycle-02/SKILL.md, 1,582 words by wc -w.
- Three changes, and nothing reverted.
- The name, license and description lines are unchanged, and so is the "Limits and ethics" section. Both were checked by string comparison with version 1.1.
- The candidate contains no backticks.

Process step numbers refer to the process map in self-analysis.md, step 1. Finding IDs (A1 to A6) refer to the audit in the same file.

## 1. A gaps check in the audit

- **Process step:** 3, Audit. The change adds a new check between 3a (Consistency) and 3b (Claims about the world), and adds a gap type to 3c (Record). The introduction's one-line account of the audit is updated to match.
- **Edit:** a new Gaps bullet tells the audit to list what the material needs but does not supply:
  - a key term left undefined;
  - a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails;
  - a case that none of its categories covers;
  - a conclusion that rests on an unstated premise;
  - a strong objection left unanswered.
- **Evidence:**
  - In cycle 1, the two categories that got a dedicated audit check gained: consistency went from 4.0 to 7.0 of 8, and claims from 2 to 3 of 4.
  - Gaps had neither a check nor a type, and stayed at 4.5 of 6. Within that score, full detections fell from 4 to 3 and partial detections rose from 1 to 3.
  - Partial detections account for 2.5 of the 3.5 points version 1.1 lost.
  - When the self-analysis recorded omissions in version 1.1 itself, none of the record types fitted (A5, A6).
- **Expected effect:** gaps are recorded in the audit, with a location, an exact quotation, a severity and a fix, instead of being left in lens prose. That should turn partial detections into full ones. Assumption: a gain of up to 1 point at default effort, and less at max effort.
- **Main risk:** longer audits padded with trivial gaps, and less attention left for the consistency check at lower effort. If the shift in gaps in cycle 1 was noise, the change adds length for little gain.

## 2. One full statement per finding, defined severity, and the limits kept in short answers

- **Process steps:** 3c, Record, and 6, Assemble the output.
- **Edits:**
  - Each finding gets an ID and is stated in full once, in the audit when there is one.
  - The summary gives each of the most serious findings one line with its ID. Every other section cites the ID instead of restating the finding.
  - Severity gets three defined levels: high if it changes the conclusion, medium if it misleads a reader, low otherwise.
  - A short answer still keeps what the limits require.
- **Evidence:**
  - In cycle 1 the analysis grew from 8,351 to 15,479 words (85 percent) and the test from 35 to 83 minutes, and the report names length and time as the method's main cost.
  - Version 1.1 has no rule against restating the same finding in the summary, the synthesis, the lenses and the report.
  - Severity had no scale, although the summary ranks findings by it (A3).
  - Read literally, the short-answer rule dropped the notes that the limits require (A1).
- **Expected effect:** a shorter analysis, whose summary points to records a reader can check. Detection should not change, because every finding is still stated in full once. Assumption: 5 to 20 percent shorter; this has not been measured.
- **Main risk:** the model adds IDs but still restates findings, or cites the wrong ID. A summary of pointers also reads less well on its own, without the records. With three parts, this change is the hardest of the three to attribute.

## 3. The model's own knowledge as a labelled check on claims

- **Process steps:** 3b, Claims about the world, and 2, the labels on reasoning chain steps.
- **Edits:**
  - The claims check also asks whether the model's own knowledge agrees with the claim, and the model labels that knowledge as its own.
  - It calls a claim wrong only when confident, and marks other doubtful claims unverified.
  - The record's claim types gain unverified and wrong.
  - Chain steps can be labelled own knowledge.
- **Evidence:**
  - Unsupported or incorrect claims reached 3 of 4 in cycle 1.
  - In the max-effort second pass, the only misses were claims about the world (PROGRESS.md).
  - Version 1.1's check asks about support, overstatement and what would settle a claim, but never whether the claim is true (A6).
  - The chain labels had no place for recalled knowledge (A4).
- **Expected effect:** a wrong claim that looks supported gets flagged, and the reader can see which steps rest on recall. Assumption: a gain of up to 1 point on claims, more likely at max effort.
- **Main risk:** confident false corrections from mistaken or outdated recall. The confidence threshold and the unverified mark limit this risk but cannot remove it.

## Checks, and notes for the next cycle

- **Re-audit of the candidate:** the first draft introduced two conflicts. It had an unverified mark with no matching record type, and a sentence that could be read as putting every finding in the summary. Both were fixed before this list was written.
- **Word headroom:** 18 words remain under the 1,600 limit. Later cycles should trim before they add.
- **Testing:** cycle 3 tests these changes together with its own. To keep both sets readable, record the score by type of finding, the length of the analysis and the time it took, and avoid rewriting the same sentences.

## Diff against the current version

Made with diff -u cycle-01/SKILL.md cycle-02/SKILL.md, run from the self-improvement folder.

~~~diff
--- cycle-01/SKILL.md	2026-10-21 20:43:09.967016083 +1300
+++ cycle-02/SKILL.md	2026-10-22 09:16:42.109054458 +1300
@@ -6,7 +6,7 @@
 
 # Observer: multi-lens reasoning
 
-Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks that material against itself and against its evidence, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
+Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks that material for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.
 
 The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.
 
@@ -34,7 +34,7 @@
 
 For each lens, produce three things:
 
-- **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, assumption or inference.
+- **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
 - **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason for the weight.
 - **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline with the lens name at the top. Color-code the lenses where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output is going somewhere that renders it.
 
@@ -43,8 +43,9 @@
 When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis. The lenses judge; the audit checks. Skip this step when there is no such material.
 
 - **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
-- **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. If you rely on your own knowledge, say so.
-- **Record:** give each finding its location, a short exact quotation of each passage involved, its type (a conflict, an unsupported or overstated claim, or a matter of convention), its severity (how much it would change the conclusion or mislead a reader) and the smallest fix that would resolve it.
+- **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
+- **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, whether your own knowledge agrees, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
+- **Record:** give each finding an ID, its location, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
 - **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
 - **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.
 
@@ -64,9 +65,9 @@
 
 ## Output shape
 
-Lead with a short summary that is usable on first read: the recommendation, its confidence, and the most serious problems or risks found by the lenses or the audit, ranked by severity, one line each with its location where there is one. Then give the convergence zones and productive divergences, then the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report.
+Lead with a short summary that is usable on first read: the recommendation, its confidence, and the most serious problems or risks, ranked by severity, one line each with its ID, and its location where there is one. Then give the convergence zones and productive divergences, then the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report. State each finding in full once, with an ID, in the audit when there is one, and elsewhere, apart from the summary, cite the ID instead of restating it.
 
-Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score, the main divergence and the most serious problems, and drop the rest. Do not pad: a lens with nothing new to add should say so in one line.
+Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.
 
 ## Limits and ethics
 
~~~
