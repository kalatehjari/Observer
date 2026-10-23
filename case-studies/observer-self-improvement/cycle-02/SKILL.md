---
name: observer-multi-lens-reasoning
description: Use for complex, ambiguous or high-stakes questions needing several perspectives or a confidence rating, or when asked for the Observer method; skip simple lookups.
license: MIT
---

# Observer: multi-lens reasoning

Observer is a method for reasoning through a question from several perspectives at once. It splits the question into five parallel streams of thought, one per cognitive lens. Each stream builds its own reasoning chain, weights its key concepts and maps them. When the question concerns material the person has supplied, an audit then checks that material for conflicts, gaps and unsupported or wrong claims, quoting it exactly. A final step, the Higher-Order Observer (HOO), compares the streams, finds where they converge and where they productively diverge, and gives one recommendation with an explicit confidence score and a transparency report.

The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.

## When to use it

Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions that are costly to reverse. The source framework lists academia, business strategy, education and decision-making as use cases. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.

Skip it for simple factual questions, quick lookups, casual conversation, and requests for a single creative piece where the user wants one voice.

## Procedure

### 1. Frame the question

Restate the question in one or two sentences. Name the decision or goal, the constraints, the stakeholders, and what a good answer must do. List the assumptions you are making. If the question is too underspecified to reason about, ask the single most important clarifying question instead of guessing.

### 2. Run the five lenses

Run each lens as its own stream. In a single pass, work through them one after another, and keep each one independent: a lens must not borrow another lens's conclusion while it is working.

- **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
- **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
- **Critical:** challenge the assumptions, look for weak evidence and bias, state the strongest counterargument, and name the conditions under which the leading view fails. Ask who bears the cost.
- **Systems-thinking:** map relationships, feedback loops, delays, second-order effects and unintended consequences, and who is affected downstream.
- **Pragmatic:** test feasibility, cost, time, resources and reversibility, and name concrete next actions and implementation risks.

For each lens, produce three things:

- **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
- **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason for the weight.
- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline with the lens name at the top. Color-code the lenses where the output can show color. Use a Mermaid mindmap only when the user asks for a diagram or the output is going somewhere that renders it.

### 3. Audit the material

When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis. The lenses judge; the audit checks. Skip this step when there is no such material.

- **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
- **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
- **Claims about the world:** list the material's factual claims, starting with those its conclusions depend on. For each, say what support the material gives, whether the claim is stated more strongly than that support allows, whether your own knowledge agrees, and what kind of source or data would settle it. Internal consistency cannot settle such a claim. Label your own knowledge as such; call a claim wrong only when confident, and mark other doubtful claims unverified.
- **Record:** give each finding an ID, its location, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it.
- **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
- **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.

### 4. Synthesize with the Higher-Order Observer

Compare the five streams and the audit findings, and write the synthesis.

- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Check whether the agreement rests on shared evidence or on a shared assumption, and say which. Agreement built on a shared assumption is weaker than it looks.
- **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
- **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. When the person will revise the material, tell them to run the audit again on the revised version, because revisions often introduce new conflicts.
- **Confidence score:** a number from 0 to 100 for the recommendation as a whole, with the two to four factors that moved it up or down. When parts of the recommendation rest on evidence of clearly different strength, also give each main part its own score. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences, missing information, and how reversible the decision is. Do not raise the score just because the lenses agree.

### 5. Write the transparency report

Close with a short report covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence score and its drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.

## Output shape

Lead with a short summary that is usable on first read: the recommendation, its confidence, and the most serious problems or risks, ranked by severity, one line each with its ID, and its location where there is one. Then give the convergence zones and productive divergences, then the audit findings, the lens summaries (chains, concepts and mind maps) and the transparency report. State each finding in full once, with an ID, in the audit when there is one, and elsewhere, apart from the summary, cite the ID instead of restating it.

Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, keep the recommendation, the confidence score, the main divergence and the most serious problems, and drop the rest, except what the limits below require. Do not pad: a lens with nothing new to add should say so in one line.

## Limits and ethics

- All five lenses come from the same model, so their agreement is not independent verification. Say so whenever it matters to the conclusion.
- Do not invent evidence, figures, sources or citations to fill a lens. If a step has no support, label it as an assumption.
- Keep the person in charge. Observer supports a decision and does not make it. Present the trade-offs and the uncertainty plainly and leave the choice to them.
- For medical, legal, financial or safety-critical questions, say that the analysis is not professional advice and point to a qualified professional who should review it.
- When a disagreement is about values rather than facts, name it as a values choice. Do not settle it by declaring one side wrong.
