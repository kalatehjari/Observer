---
name: observer-multi-lens-reasoning
description: Use for complex, ambiguous or high-stakes questions needing several perspectives or a confidence rating, or when asked for the Observer method; skip simple lookups.
license: MIT
---

# Observer: multi-lens reasoning

Observer reasons through a question in five parallel streams, one per cognitive lens, each with its own reasoning chain, weighted key concepts and map. An audit checks supplied material for conflicts, gaps and doubtful claims. The Higher-Order Observer (HOO) then compares the streams, finds where they converge and productively diverge, and gives one recommendation with confidence scores and a transparency report.

The method comes from the Observer framework in the kalatehjari/Observer repository and is inspired by dialectical reasoning and Edward de Bono's parallel thinking.

## When to use it

Use Observer for questions that are complex, ambiguous or consequential enough that one line of reasoning could miss something. Typical cases are strategy, trade-offs, design and policy choices, research framing, and decisions costly to reverse. Use it too when the user asks for the Observer method, several perspectives, or a critical check with a confidence rating.

Skip it for simple factual questions, quick lookups, casual conversation, and requests for a single creative piece where the user wants one voice.

## Procedure

### 1. Frame the question

Restate the question in one or two sentences. Name the decision or goal, the constraints, the stakeholders, and what a good answer must do. List your assumptions. If the question is too underspecified to reason about, ask the single most important clarifying question instead of guessing.

### 2. Run the five lenses

Run each lens as its own stream. In a single pass, take them in turn and keep each independent: a lens must not borrow another lens's conclusion while it works.

- **Analytical:** break the question into components, check the evidence and the logic, and quantify where the numbers allow.
- **Creative:** generate alternatives and reframings that the obvious framing hides. Analogies are welcome.
- **Critical:** challenge the assumptions, look for weak evidence and bias, state the strongest counterargument, and name the conditions under which the leading view fails. Ask who bears the cost.
- **Systems-thinking:** map relationships, feedback loops, delays, second-order effects and unintended consequences, and who is affected downstream.
- **Pragmatic:** test feasibility, cost, time, resources and reversibility, and name concrete next actions and implementation risks.

For each lens, produce three things:

- **Reasoning chain:** three to six numbered steps from premise to conclusion. Label each step as evidence, own knowledge, assumption or inference.
- **Key concepts with weights:** three to five concepts, each with a weight from 0 to 1 and a one-line reason.
- **Mind map:** a tree from the question to the lens's concepts and their supporting points, about three levels deep. In chat, use an indented outline headed by the lens name, color-coded where possible. Use a Mermaid mindmap only when the user asks for a diagram or the destination renders it.

### 3. Audit the material

When the question concerns material the person has supplied, such as a document, plan, policy, design or data set, audit it after the lenses and before the synthesis; otherwise skip this step.

- **Consistency:** check each rule, definition, figure, threshold and condition the material states against every place that applies, restates or depends on it, such as tables, examples, summaries, recommendations, replies to objections and cross-references. List every mismatch.
- **Gaps:** list what the material needs but does not supply: a key term left undefined; a rule, mechanism or recommendation that does not say who acts, when, by what test or what happens when it fails; a case none of its categories covers; a conclusion that rests on an unstated premise; a strong objection left unanswered.
- **Claims about the world:** list the material's factual claims, first those its conclusions depend on, then figures, dates, attributions and absolute claims. Ask two questions of each. Does the material support it at its stated strength and scope? If not, it is unsupported or overstated, even if true. Is it true? Check it against your own knowledge, labelled as such, and any sources you can consult without exposing confidential material, citing only what you read, and give what you know or found for and against it. Call a claim wrong only when confident; mark other doubtful claims unverified, saying which way you lean and what source or data would settle them.
- **Record:** give each distinct problem, including those the lenses raised, its own ID, every location where it occurs, a short exact quotation of each passage involved, its type (a conflict, a gap, an unsupported, overstated, unverified or wrong claim, or a matter of convention), the claim or conclusion it weakens, its severity (high if it changes the conclusion, medium if it misleads a reader, low otherwise) and the smallest fix that would resolve it, with every other passage that fix must change. Give a low-severity problem one line: ID, locations, quotation, type, severity and fix.
- **Quotation:** quote a continuous stretch of text, copied exactly with its spelling and punctuation. Do not insert ellipses, join separate passages or put quotation marks around words you did not copy. If you cannot quote exactly, paraphrase without quotation marks. The same rule applies wherever a lens step rests on the material.
- **Coverage:** if you cannot check everything, check first what carries the conclusion, and say what you did not check.

### 4. Synthesize with the Higher-Order Observer

Compare the five streams and the audit findings.

- **Convergence zones:** claims that two or more lenses reach independently. Name the lenses. Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks.
- **Productive divergences:** points where the lenses disagree. For each, state the disagreement and its source: different values, time horizons, weight given to evidence, or a factual dispute. Then judge it. A productive divergence exposes a real trade-off the decision-maker has to own. Noise is an error or misreading to resolve. Do not force agreement.
- **Recommendation:** one clear recommendation, or a conditional one ("choose A if X holds, otherwise B"). State what would change it, and give the top next steps.
- **Check the recommendation:** before giving it, test each proposed change or next step against the constraints from the framing and, when there is material, against the material and the audit. Ask whether it would create a new conflict, add an unsupported claim or add more than the problem needs, and prefer the smallest change that fixes the problem. Give each high-severity problem a step, or say why it stays open. When the person will revise the material, tell them to audit the revised version again, because revisions often introduce new conflicts.
- **Confidence score:** your probability, from 0 to 100, that the recommendation as a whole survives the checks still needed, naming the main ones, with the two to four factors that moved it up or down. When its main parts rest on evidence of clearly different strength, score each part too. When asked how far to trust a claim or recommendation in the material, score it separately, with its own factors. Weigh the strength of the evidence, the quality of the assumptions, unresolved divergences and missing information; note reversibility beside the score. Do not raise the score just because the lenses agree.

### 5. Write the transparency report

Close with a report, one line per item, covering the framing and assumptions; which lens drove which part of the recommendation; what was weighted down or set aside, and why; the confidence scores and their drivers; what the reasoning cannot establish; what to verify with sources, data or experts; and what the person still has to decide.

## Output shape

Lead with a short summary usable on first read: the question as framed; the recommendation and the confidence scores; the main divergence; and the most serious problems or risks, ranked by severity, one line each with its ID, and its main location where there is one. Compose it last, and check its IDs, severities and scores against the body. Then give the full recommendation as numbered one- or two-line steps; the convergence zones and productive divergences; the audit findings; the lens summaries (chains, concepts and mind maps); and the transparency report. State each finding in full once, with an ID, in the audit when there is one; elsewhere, apart from the summary, cite only its ID.

Scale the depth to the question. A quick decision can use one-line lens summaries, a three-concept list per lens and a brief report; a high-stakes question gets the full version. If the user asks for a short answer, give only the summary and what the limits below require. Do not pad: a lens with nothing new says so in one line.

## Limits and ethics

- All five lenses come from the same model, so their agreement is not independent verification. Say so whenever it matters to the conclusion.
- Do not invent evidence, figures, sources or citations to fill a lens. If a step has no support, label it as an assumption.
- Keep the person in charge. Observer supports a decision and does not make it. Present the trade-offs and the uncertainty plainly and leave the choice to them.
- For medical, legal, financial or safety-critical questions, say that the analysis is not professional advice and point to a qualified professional who should review it.
- When a disagreement is about values rather than facts, name it as a values choice. Do not settle it by declaring one side wrong.
