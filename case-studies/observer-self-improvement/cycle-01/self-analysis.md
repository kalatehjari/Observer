Model: claude-opus-5-5

# Cycle 1 self-analysis: observer-multi-lens-reasoning v1.0

Role: the improver in cycle 1. I read three inputs: SKILL-v1.0.md (the current version), PROTOCOL.md and PROGRESS.md. There are no earlier cycle reports, and I opened nothing else.

## Evidence and assumption register

Items marked as evidence come from PROGRESS.md, except E12, which I measured. Items marked as assumptions are my own expectations. The tags are used throughout this file.

### Evidence

- E1. The first pass (configured model Haiku 5.5) on the first draft found 3 of the blind reviewer's 8 draft defects and partly found 1 more. It proposed six revisions and gave confidence 62, with an estimated 68 after revision.
- E2. The revision made from the first pass grew the body from 2,966 to 4,334 words (46 percent). The blind review score rose from 44 to 53 out of 80, higher on 7 of 8 criteria. The revision fixed the 3 defects the pass had found and introduced about 10 new ones.
- E3. The second pass (Opus 5.5, max effort, blind) ran on the revised text. Of the 19 open reviewer findings, the standard pass caught 12 and partly caught 4. With the consistency audit added after it, the totals were 16 caught and 1 partly caught. On the protocol's rule (caught plus half of partly caught), that is 14.0 and 16.5 out of 19.
- E4. The second pass's own findings were 35 consistency problems and 7 overstated claims. All 175 quotations in its audit were exact. Of 30 problems the reviewer had not listed, 27 hold up, 3 are matters of convention and none is wrong.
- E5. Nine reviewer findings were present in both versions. On those, the first pass caught 1 and partly caught 3. The second pass caught 6 (2 of them partly) without the audit and 8 with it.
- E6. The second pass gave confidence 62 overall: 72 for the core position and 50 for the ceilings and premise. That split is more than v1.0's single number asks for. The more detailed brief may have requested it, and the notes do not say. The pass estimated 74 after its revisions. 30 of its 35 consistency problems involve text that the first revision added or reworded.
- E7. The second pass used about 312,000 tokens and took 34 minutes. The first pass was not metered.
- E8. The comparison between passes cannot separate the model, the effort, the input, the added audit and a more detailed brief. Each pass ran once, and the reviewer who defined the reference list was also an Opus model.
- E9. At max effort the second pass ran to 14,562 words.
- E10. With the audit, the second pass's two misses were claims about the world, which no internal check can settle.
- E11. In the second pass, the audit caught every consistency problem on the reviewer's list.
- E12 (measured). The current version is 1,026 words by wc -w and contains no backtick characters. Its description is 164 characters. The cap is 1,600 words, so about 570 can be added.

The progress notes also list five proposed changes: N1, a consistency audit as a standard step; N2, rerunning the audit after any revision; N3, a short evidence check for empirical claims; N4, exact quotations; and N5, a short summary first, with lens detail and the audit in an appendix. These are proposals, not evidence of effect.

### Constraints

These come from the protocol and the brief:

- At most three changes, each tied to a step in the pipeline.
- At most 1,600 words.
- The name and license lines stay unchanged. The description changes only if a change needs it, and stays under 300 characters.
- "Limits and ethics" and its five safeguards stay intact.
- Only general instructions about the method, and no backtick character.

The candidate is tested once, blind, at default effort, by an agent that applies it as written. It is kept if it scores no more than 1 point below the baseline and, when it quotes the material at least five times, at least 95 percent of those quotations are exact.

### Assumptions

- A1. The progress notes report the results accurately. The underlying files are off limits, so I cannot check them.
- A2. Some of the audit's measured gain survives at default effort.
- A3. The audit's gain comes mainly from its systematic design, not only from a second, longer look.
- A4. Many of the questions the skill receives concern material the person supplies, such as a document, plan, policy, design or data set.
- A5. Past some length, a longer answer is less useful to the person deciding, because less of the actionable part gets read.
- A6. A model with the material in context quotes it exactly when told to, at default effort as well as at max effort.
- A7. The defects introduced by revision (E2, E6) generalise: acting on recommendations is a common way for new defects to enter a text.
- A8. One test run per version is informative within the one-point noise the protocol allows.

## Step 1: process map

This is the pipeline as v1.0 describes it. For each step, "Fails by" lists how it can go wrong, with tags pointing to the register.

**P0. Decide whether to use the method** (the "When to use it" section)
- Takes in: the person's request and its context.
- Produces: a decision to run the method fully, run it briefly or skip it.
- Fails by: running on a simple question, which adds padding and cost; skipping a question that needed several views; treating a request about supplied material as a pure question of perspective, so that no later step checks the material itself (A4; no direct evidence).

**P1. Frame the question**
- Takes in: the question, any supplied material and the conversation.
- Produces: a restatement in one or two sentences; the decision or goal, the constraints, the stakeholders and what a good answer must do; a list of assumptions. If the question is too underspecified, it produces one clarifying question instead.
- Fails by:
  - framing the wrong question;
  - listing assumptions that no later step tests;
  - setting criteria for a good answer that are never checked at the end;
  - asking when it could answer, or guessing when it should ask;
  - not taking stock of the material's own rules, definitions and claims, which leaves later steps nothing to check against (an assumption; no direct evidence).

**P2. Run the five lenses** (analytical, creative, critical, systems-thinking and pragmatic, one after another, each kept independent)
- Takes in: the framing.
- Produces, for each lens: a reasoning chain of three to six steps, each labelled evidence, assumption or inference; three to five key concepts, each weighted from 0 to 1 with a reason; and a mind map about three levels deep.
- Fails by:
  - Lost independence. The lenses run in sequence in one model, so later lenses can echo earlier ones, and the rule against borrowing conclusions cannot be enforced.
  - A cap on detail. Three to six steps per lens hold only a handful of points, so a lens cannot list many specific defects in long material. This is where checkable defects get missed. The standard pass caught 12 of 19 and partly caught 4, and the audit raised that to 16 and 1 (E3, E5, E11).
  - Unanchored evidence. The "evidence" label names no source or passage, so a reader cannot check it, and a misremembered passage looks the same as a real one. Quoting is feasible: all 175 of the audit's quotations were exact (E4).
  - Weights that look precise but are not calibrated against anything.
  - Mind maps that repeat the chain and add length (E9; how much of that length comes from mind maps is unknown).
  - Invented figures when quantifying (guarded by P6).

**P3. Synthesize with the Higher-Order Observer**
- Takes in: the five streams.
- Produces:
  - convergence zones, with a check on whether each agreement rests on shared evidence or on a shared assumption;
  - productive divergences, each with its source and a judgement of whether it is productive or noise;
  - one recommendation, possibly conditional, with what would change it and the top next steps;
  - one confidence score from 0 to 100, with two to four factors.
- Fails by:
  - Treating agreement within one model as confirmation. The P6 caveat and the shared-assumption check guard against this.
  - Recommending changes without testing what they touch. When the material was revised from one pass's recommendations, the revision fixed 3 defects and introduced about 10, and 30 of the 35 later problems sat in added or reworded text (E2, E6).
  - Folding parts of different strength into one number, which hides the weaker part. The second pass reported 72 and 50 for two parts, beyond the single number the format asks for (E6).
  - Estimating higher confidence after revision without allowing for the risk that the revision itself brings. The first pass estimated 68 after revision, and a later pass rated the revised text 62. That later pass ran on a different model, so this is weak evidence (E1, E6, E8).
  - Forcing agreement, or treating a real trade-off as noise.

**P4. Write the transparency report**
- Takes in: everything above.
- Produces: the framing and assumptions; which lens drove what; what was set aside, and why; the confidence and its drivers; what the reasoning cannot establish; what to verify; and what the person still has to decide.
- Fails by: turning into boilerplate; a "what to verify" list of general categories instead of the specific claims the conclusion rests on (the two misses that remained were claims about the world, E10); no statement of what was checked and what was not.

**P5. Shape the output and scale the depth**
- Takes in: everything above, plus the depth the question deserves.
- Produces: the answer, led by the recommendation and its confidence, followed by the convergences and divergences, the lens summaries and the report.
- Fails by: growing very long at full depth (14,562 words, E9), with the actionable items buried; giving no ranking by severity, so the person cannot triage; a short-answer mode that keeps no actionable findings.

**P6. Apply the limits and ethics** (throughout)
- Takes in: the analysis as it is being written.
- Produces: caveats and constraints on every step. These cover agreement within one model, invented evidence, keeping the person in charge, professional advice and values choices.
- Fails by: stating caveats without acting on them. "Do not invent evidence" also has no positive mechanism that shows evidence is real, so honesty rests on trust rather than on something a reader can check.

**Structural reading.** Every step generates or synthesises. None checks the material against itself, and none checks the analysis against the material. The pipeline also ends at the recommendation, with no loop for what happens when the person acts on it. The two largest effects in the evidence sit at exactly these gaps: the audit (E3, E11) and the defects introduced by revision (E2, E6).

## Step 2: self-feedback

Question: "How should this skill's process be revised so that its analyses are more accurate, more verifiable and more useful to the person deciding, and how confident can we be in each proposed change?"

I applied v1.0 exactly as written, at full depth for a high-stakes question. The output follows v1.0's output shape: the recommendation and confidence first, then the convergence zones and divergences, then the lens summaries, then the transparency report, which holds the framing. This file is plain Markdown, which cannot show color, so the lenses are not color-coded. The mind maps are indented outlines, as v1.0 asks for chat output. All five lenses and the synthesis come from one model, so their agreement is not independent verification.

### Recommendation

Make three changes, each on one step of the pipeline.

1. **Add an audit step between the lenses (P2) and the synthesis (P3)**, used when the question concerns supplied material. The audit:
   - checks each stated rule, definition, figure, threshold and condition against every place that applies, restates or depends on it;
   - checks the material's claims about the world for support and overstatement, and names the kind of source that would settle each;
   - records each finding with its location, short exact quotations, type, severity and smallest fix;
   - allows quotation marks only around text copied exactly;
   - when it cannot be complete, checks what carries the conclusion first and says what it did not check.

   The synthesis then reads the audit alongside the streams.
2. **Make the synthesis test its own recommendation (P3).** Before giving the recommendation:
   - check each proposed change against the constraints from the framing and, when there is material, against the material and the audit;
   - prefer the smallest change that fixes the problem;
   - tell the person to run the audit again after revising.

   When parts of the recommendation rest on evidence of clearly different strength, give each main part its own confidence score as well as the overall one.
3. **Lead the output with a short summary (P5).** The summary gives the recommendation, its confidence and the most serious problems or risks, ranked by severity, one line each with its location. The convergences and divergences come next, then the audit findings, the lens detail and the transparency report. A short answer keeps the ranked problems.

What would change this recommendation:
- If the candidate scores more than a point below the baseline at default effort, the likeliest cause is the audit crowding out the lens work. The next cycle would narrow the audit to what carries the conclusion, or move part of it into the critical lens.
- If fewer than 95 percent of its quotations are exact, tighten quotation (fewer and shorter quotations) rather than drop it, because unanchored findings are the problem quotation solves.
- If a later control shows that a plain second look gains as much as the audit, replace the checklist with a shorter instruction to take a second look.
- If outputs grow much longer without more findings, consider trimming the mind maps at full depth (divergence D5).

Top next steps:
1. Write the candidate within the constraints: three changes, at most 1,600 words, safeguards untouched, nothing specific to a subject.
2. Run the blind test at default effort against the baseline, as the protocol sets out.
3. In the cycle report, record the score by type of finding, the quotation accuracy and the length, each against the baseline, so the next cycle can tell which change did what.

### Confidence

**Overall: 63 out of 100** that the three changes together make the skill more accurate, more verifiable and more useful without a regression.

What moved it:
- Up: in a comparison within one run, adding only the audit (same model, effort and material) gained 2.5 of 19 points, with high precision and exact quotations (E3, E4, E11).
- Down: each pass ran once, and the evidence cannot separate the audit from the more detailed brief that came with it or from the effect of a second, longer look. The reference findings also came from a model of the same family (E8).
- Down: there is no evidence at default effort, which is where this candidate is tested (A2, A6).
- Up: every change is a text edit, so the decision rule and later cycles can undo it cheaply.

By change, as the question asks:
- **Change 1, the audit: 70.** It has the best-identified effect in the evidence. The doubts are that a plain second look might explain the gain, and that quotations may be less exact at default effort.
- **Change 2, the recommendation check and part scores: 55.** The problem is well evidenced (E2, E6), but whether an instruction reduces it is untested. Its main benefit arrives after the person acts, which a single-pass test does not measure.
- **Change 3, the summary first: 65** that it makes answers more useful, and about 90 that it does no harm to accuracy, since it moves findings rather than removing them. Nothing yet measures usefulness to a real person deciding.

The format asks for a single number, while the question asks for one per change. I give both, and record the mismatch in the addendum at the end.

### Convergence zones

**C1. Add a step that checks supplied material systematically, between the lenses and the synthesis.**
- Lenses: analytical, creative, systems-thinking and pragmatic. The critical lens agrees, with conditions.
- Basis: shared evidence (E3, E4, E11), plus a shared assumption that the gain comes from the audit's design and survives at default effort (A2, A3). The critical lens shows that this assumption is untested, so the agreement is weaker than four lenses agreeing suggests.

**C2. Record findings as exact quotations, under a strict rule on exactness.**
- Lenses: all five.
- Basis: shared evidence that this is feasible at full depth (E4), and a shared assumption that it holds at default effort (A6). The exactness rule and the fallback to paraphrase are conditions added by the critical and pragmatic lenses. Without them the other lenses' view fails.

**C3. The recommendation must test its own proposals and close the loop after revision.**
- Lenses: analytical, creative and systems-thinking.
- Basis: shared evidence for the problem (E2, E6). The effect of the remedy is a shared assumption (A7).

**C4. Handle length through structure, not by dropping findings.**
- Lenses: analytical, creative, systems-thinking and pragmatic.
- Basis: shared evidence for the length (E9). The effect on the person deciding is a shared assumption (A5).

### Productive divergences

**D1. Where the audit lives.** The analytical and pragmatic lenses favour a new step. The creative lens offers a cheaper alternative: put the audit inside the critical lens.
- Source: the weight given to measured evidence against the value of keeping the method small.
- Judgement: productive, but settled by evidence. The measured audit ran as a separate step after the lenses, and a chain of three to six steps cannot hold dozens of findings. Decision: a new step.

**D2. An exhaustive or a prioritised audit.** The analytical lens's evidence favours checking every place, since the version that did so caught every listed consistency problem (E11). The pragmatic and critical lenses expect an exhaustive audit at default effort to be shallow or to crowd out the lens work.
- Source: different resources, and how far evidence from a max-effort run transfers.
- Judgement: productive, a real trade-off between coverage and depth. Resolution: keep "every place" as the instruction, add a priority order for when the audit cannot be finished, and require a statement of what was not checked.

**D3. Add the check of claims about the world now, or wait.** The analytical lens notes that it targets the only misses that remained (E10), though it rests on two cases. The critical lens warns that the model may "verify" claims from memory.
- Source: the weight given to thin evidence.
- Judgement: productive, and settled by a narrow design. The check flags the support given, any overstatement and the kind of source that would settle the claim, and it says when the model relies on its own knowledge. It costs little and risks little.

**D4. One confidence number, or one per part.** The analytical lens holds that one number hides the weak part (E6), and this question needs a score per change. The critical lens holds that more numbers bring more false precision.
- Source: values, simplicity against informativeness.
- Judgement: productive, and a values choice. Adopt part scores only when the parts rest on evidence of clearly different strength.

**D5. Trim the mind maps and weights to pay for the audit.** The creative lens raised this, then rated it low itself. The pragmatic lens shows there is room for the changes without cutting anything.
- Source: values (economy against fidelity to the source framework) and missing information (there is no evidence on what the mind maps add).
- Judgement: productive, but deferred to a later cycle that has data on length.

**Noise, set aside:** the systems-thinking lens's point that confidence estimates made before a revision tend to be optimistic (step 5). The only data point compares estimates across a change of model, so it cannot carry a conclusion yet.

### Lens summaries

#### Analytical

Reasoning chain
1. Inference: the question has four parts. They are accuracy (whether findings cover the real problems and whether they are right), verifiability, usefulness to the person deciding, and confidence in each change. The evidence bears on each part differently.
2. Evidence (E3, E11, E10), on coverage: within the second pass, with model, effort and material held fixed, adding the audit raised the score from 14.0 to 16.5 out of 19 (from 74 to 87 percent). The audit caught every listed consistency problem. The 2 findings still missed were claims about the world.
3. Evidence (E4), on correctness and verifiability: of 30 problems the reviewer had not listed, 27 hold up, 3 are matters of convention and none is wrong. All 175 of 175 quotations were exact.
4. Evidence (E2, E6), on where new defects come from: the revision made from the first pass fixed 3 defects and introduced about 10, and 30 of the 35 later consistency problems sat in text it had added or reworded.
5. Evidence (E6, E9), on usefulness and confidence: at full depth the output ran to 14,562 words. The second pass also scored two parts separately (72 and 50), beyond the single number the format asks for.
6. Inference: the gains sit at three points in the pipeline. The first is a systematic check between P2 and P3, which can also hold the check of claims about the world, since both act on the same material at the same moment. The second is a check of the recommendation's own proposals in P3, with part scores. The third is the structure of the output in P5. Ranked by how well the evidence identifies each effect: the audit (a comparison within one run), the proposal check (strong evidence of the problem, none for the remedy), the claims check (two cases), then the structure (no measure of usefulness).

Key concepts
- Systematic cross-check of the material, 0.90: the largest and best-identified effect in the evidence.
- Exact quotation as the record of a finding, 0.75: shown to be feasible at full depth, and it makes findings checkable. It is unmeasured at default effort.
- Defects introduced by revision, 0.70: strong evidence of the problem, but the remedy is untested.
- Claims about the world, 0.55: they account for the only misses that remained, but there are just two cases.
- Output length, 0.45: a clear sign of cost, with no measure of its effect on the person deciding.

Mind map
- Analytical
  - Accuracy: how much was found
    - Audit: 14.0 to 16.5 of 19 within one run
    - Like for like: 6 to 8 of 9 with the audit
    - Remaining misses: 2, both claims about the world
  - Accuracy: whether findings are right
    - 27 of 30 unlisted problems hold up
    - 3 matters of convention, none wrong
  - Verifiability
    - 175 of 175 quotations exact
    - Lens evidence labels carry no location
  - Usefulness and confidence
    - 14,562 words at full depth
    - Two parts scored separately, 72 and 50
  - Where new defects come from
    - Revision: 3 fixed, about 10 introduced
    - 30 of 35 problems in revised text

#### Creative

Reasoning chain
1. Assumption: some findings are judgements, such as whether an argument is strong. Others are facts about the text, such as whether one passage contradicts another. The lenses are built for the first kind.
2. Inference: so the skill can work as two instruments feeding one synthesis, lenses that judge and an audit that checks. Checking needs a list and a rule, not a perspective.
3. Inference, by analogy (not evidence): in software, tests check code against its specification, regression tests run after every change, and code review leads with the issues that block a merge. Mapped onto the method, these become an audit, a second audit after revision, and a summary that leads with the serious findings.
4. Inference: one format for recording findings can serve three goals. Its fields are location, exact quotation, type, severity and smallest fix. Each row can be checked, which serves verifiability; the rows sort by severity, which serves usefulness; and the synthesis can read rows instead of prose.
5. Inference: cheaper alternatives exist. One is to give the audit to the critical lens; the other is to pay for it by trimming the mind maps and weights. The first squeezes many findings into a short chain. The second removes parts of the method with no evidence about what they contribute.
6. Inference: the reframing with the most leverage is to treat the recommendation itself as a change that needs testing. Checking proposals before giving them, and preferring the smallest fix, goes at the source of new defects (E2, E6) instead of only finding them later.

Key concepts
- Judging against checking, 0.80: explains why lenses built on perspective miss defects that could be checked.
- One format for findings, 0.70: a single format serves three goals.
- The recommendation as a change to test, 0.65: moves checking ahead of the person's revision.
- The analogy with regression tests, 0.50: suggestive, but not evidence.
- Trimming the mind maps and weights, 0.30: frees length, but touches the method's identity with no evidence.

Mind map
- Creative
  - Two instruments
    - Lenses judge
    - Audit checks
      - Fields: location, quotation, type, severity, fix
  - Software analogy
    - Tests: the audit
    - Regression tests: a second audit after revision
    - Review summary: serious findings first
  - Cheaper alternatives
    - Audit inside the critical lens: the chain is too short
    - Trim mind maps and weights: no evidence
  - The recommendation as a change
    - Smallest fix
    - Test what it touches

#### Critical

Reasoning chain
1. Evidence (E8): each pass ran once, the reference findings came from an Opus reviewer, and the second pass had a more detailed brief. The comparison within one run rules out the model, the effort and the material as explanations. It does not rule out the brief, or the simple fact of a second, longer look.
2. Inference: the strongest counterargument is that any structured second look might have gained the same 2.5 points. Agreement between an Opus reviewer and an Opus analyst may also overstate how much was found. The notes contain no evidence against the audit, but they were written to record that pass. And I, also an Opus model, am reading notes that already propose these changes, so I am primed to accept them. The absence of contrary evidence is weak reassurance.
3. Inference: a rule on quotation can backfire. A near-quotation inside quotation marks looks verified when it is not, which is worse than a paraphrase. Exactness was 175 of 175 at full depth (E4) and is unmeasured at default effort (A6). The cost falls on the person who trusts a wrong quotation, and on a candidate judged partly on exactness.
4. Inference: two of the proposed additions carry a hidden cost. A check of claims about the world can slide into "verification" from memory, which breaks the safeguard against invented evidence in spirit. Part scores multiply numbers that look measured but are judgements. Each is safe only if it is narrow: the claims check flags claims rather than settling them and says when it relies on the model's own knowledge, and part scores appear only where the parts really differ.
5. Inference: an audit can mislead through its coverage. A partial audit written up as if it were complete gives false reassurance. An exhaustive audit at low effort can also crowd out the lens work that finds the problems an audit cannot.
6. Inference: the leading view fails in four conditions: there is no supplied material; the material is too long to cross-check at the given depth; quotations slip; or the extra length buries the recommendation. Each has a cheap guard:
   - make the audit conditional on supplied material;
   - require a priority order and a statement of coverage;
   - require exact copying, with paraphrase as the fallback;
   - lead with a ranked summary.

Key concepts
- Confounding by the brief and the second look, 0.80: the main reason to discount the audit's measured gain.
- False verifiability, 0.75: an inexact quotation is worse than none.
- A reference from the same model family, 0.60: shared habits of that family may inflate how much was found.
- False precision and memory presented as evidence, 0.55: these are risks to calibration and to the safeguard against invented evidence.
- Coverage illusion, 0.55: a partial check reported as complete misleads.

Mind map
- Critical
  - Weak points in the evidence
    - One run per pass
    - Opus reviewer, Opus analyst, Opus improver
    - Brief and second look not separated from the audit
  - Failure modes the changes could bring
    - Inexact quotations: they look verified and are not
    - Checks from memory: a breach, in spirit, of the rule against invented evidence
    - Part scores: false precision
    - A partial audit read as complete
  - Conditions where the view fails
    - No supplied material
    - Material too long for the depth
    - Length buries the recommendation
  - Who bears the cost
    - The person deciding
    - The candidate under test

#### Systems-thinking

Reasoning chain
1. Evidence (E2, E6): defects moved through a loop. The analysis produced recommendations. A revision made from them added 46 percent more text and about 10 new defects, concentrated in that new text. The new defects were found only at the next review.
2. Inference: the skill has no step on that loop. It recommends without testing what its recommendations touch, and it says nothing about what to do after the person revises. If recommendations tend to add text, and new text carries most new defects, the loop reinforces itself: each review produces more additions, and so more defects to review.
3. Inference: a balancing loop can be added at two points. Before the revision, test each proposal against what it touches and prefer the smallest fix. After it, run the audit again on the revised text.
4. Inference: an audit has a second-order cost. More findings make a longer answer, less of it gets read, and the serious items get buried. Accuracy and usefulness pull against each other unless the output leads with a ranked summary.
5. Assumption: delay hides the cost of revision, because the defects it introduces surface only at the next review. Confidence estimated before a revision may therefore be optimistic. The one data point is an estimate of 68 against a later rating of 62 (E1, E6), and it crosses a change of model, so it is weak.
6. Inference: downstream, exact quotations let anyone check findings cheaply, whether the person, a reviewer or a script, and that keeps trust in line with reliability. Keeping each change on one step of the pipeline also lets later cycles tell which change did what.

Key concepts
- The revision loop, 0.85: the largest observed source of new defects passes through the skill's own output.
- Accuracy against length, 0.70: the audit's gain costs usefulness unless the output is restructured.
- Closing the loop before and after, 0.65: cheap to state, but its effect is untested.
- Findings a machine can check, 0.60: lowers the cost of verification downstream.
- Optimistic confidence estimates, 0.30: one confounded data point.

Mind map
- Systems-thinking
  - Revision loop
    - Recommendations add text
      - New text carries new defects
    - Defects found only at the next review
  - Balancing points
    - Before: test proposals, prefer the smallest fix
    - After: audit the revised text again
  - Accuracy against length
    - More findings, longer answer
    - Ranked summary first
  - Downstream
    - Quotations anyone can check
    - Attribution across cycles

#### Pragmatic

Reasoning chain
1. Evidence (E12): the current version has 1,026 words and the cap is 1,600, so about 570 words can be added.
2. Evidence (protocol): the candidate is tested once, at default effort, by an agent applying it as written. It is kept only if it scores within a point of the baseline and, when it quotes the material five or more times, at least 95 percent of the quotations are exact.
3. Inference: an instruction to quote is therefore safe only with a rule on exactness and a fallback to paraphrase. An exhaustive audit also needs a priority order, because default effort gives less room than the run that produced the evidence (E7: about 312,000 tokens at max effort).
4. Inference: the estimated cost in words is about 300 for the audit and its mention in the overview, about 100 for the recommendation check and part scores, and about 30 more for the output shape. That is roughly 430 in all, within the room available, so nothing needs to be cut to pay for the changes. (Measured after drafting: 440 words added, 1,466 in all.)
5. Inference: the changes are easy to reverse. Each is a text edit, the decision rule rejects a candidate that falls more than a point, and later cycles may revert a change that did not help. Trying them costs one cycle.
6. Inference: next actions:
   - write the candidate;
   - check its word count, its frontmatter, the absence of backtick characters and the untouched safeguards;
   - produce the diff;
   - hand it to the blind test.

Key concepts
- Working at default effort, 0.80: the changes must work with less budget than the evidence had.
- A rule on exactness for quotations, 0.70: the cheapest guard against the largest new risk.
- Room in words, 0.60: a hard limit on what can be added.
- A priority order for the audit, 0.55: keeps the audit useful when it cannot be complete.
- Reversibility, 0.50: lowers the stakes of trying.

Mind map
- Pragmatic
  - Budget
    - Words: 1,026 now, cap 1,600
    - Effort: default in this cycle's test
  - Cost of each change
    - Audit: about 300 words
    - Recommendation check: about 100
    - Output shape: about 30
  - Risks and guards
    - Inexact quotations: copy exactly or paraphrase
    - A shallow audit: priority order and a note on coverage
    - Length: ranked summary first
  - Reversibility
    - Text edits only
    - A later cycle can revert

### Transparency report

**Framing.** The question asks how to revise the skill's process so that its analyses are:
- more accurate: they find the real problems, and their findings are right;
- more verifiable: a reader or a script can check each finding;
- more useful to the person deciding: the actionable part is easy to find and act on.

It also asks how confident we can be in each change.

- Decision: which changes, at most three, go into this cycle's candidate.
- Constraints: those listed in the register above.
- Stakeholders:
  - the skill's owner, who decides on adoption;
  - the people who receive Observer analyses;
  - later cycles, which need to tell the changes apart;
  - the source framework, whose five lenses, synthesis, mind maps and confidence score define the method.
- What a good answer must do: tie each change to a step in the pipeline and to evidence, give a confidence for each change, separate evidence from expectation, and keep the skill general.
- Assumptions: A1 to A8. No clarifying question was needed.

**Which lens drove what.**
- Analytical: the choice and ranking of the changes, and the numbers behind them.
- Critical: the rule on exactness and the fallback to paraphrase, the narrow design of the claims check (it flags rather than settles), the statement of coverage, the condition on part scores, and the discount on confidence.
- Systems-thinking: change 2 (closing the revision loop), and pairing change 3 with change 1 to offset the length change 1 adds.
- Creative: the fields for recording findings, the principle of the smallest fix, and the framing of lenses that judge and an audit that checks.
- Pragmatic: the word budget, the priority order, the condition that the audit runs only on supplied material, and reversibility.

**Weighted down or set aside.**
- Trimming the mind maps and weights (D5): no evidence, and it touches the method's identity.
- A sixth "auditor" lens: it breaks the five-lens structure and gains nothing over a separate step.
- Optimistic confidence estimates: noise for now.
- Changing how the lenses are ordered, to protect their independence: the notes give no evidence either way.
- Changing the description: no change needs it, and a different trigger would confound the test.
- Rewriting "When to use it": it would be a fourth change.

**Confidence and drivers.** 63 overall, and 70, 55 and 65 by change. The drivers are listed under Confidence above.

**What the reasoning cannot establish.**
- Whether the audit's gain comes from its design or from a second, longer look.
- Whether any of the gains carry over to default effort, other models or other material.
- Whether the reference findings carry the habits of the model family that wrote them.
- Whether a summary-first answer is more useful to real people making decisions.
- Whether checking proposals actually reduces the defects that revisions introduce.

**What to verify.**
- In this cycle's test: quotation exactness, the score by type of finding (consistency findings against the rest) and the output length, each compared with the baseline.
- Later:
  - the controls the notes list: a reviewer that is not an Opus model, the audit on a smaller model, and a plain revision made without the skill;
  - whether a second audit after revision catches the new defects.

**What the person still has to decide.**
- How much length they will accept in exchange for accuracy.
- Whether the mind maps and weights should stay at full depth.
- Whether the audit is worth its cost for their typical questions.
- Whether to adopt the final version at the end of the protocol.

**Limits.**
- All five lenses and this synthesis come from one model, so C1 to C4 are not independent verification. The evidence they share (E3, E4, E11) is the stronger part of the agreement.
- No evidence was invented. Every figure comes from the progress notes or was measured here (E12).
- This is not a medical, legal, financial or safety-critical question, so the note on professional advice does not apply.
- D4 and D5 are values choices (simplicity against informativeness, and economy against fidelity). They are named as such and left to the person.

## Addendum: friction met while applying v1.0

These points came up while running the method on this question. They are self-identification evidence, from one application.

- The single confidence number did not fit a question that asks about each change, so I added scores per change outside the format. This supports change 2.
- The chains' evidence labels carry no location. To make my own chains checkable, I had to add evidence tags (E1 to E12) that the skill does not ask for. This supports the rule on location and quotation in change 1.
- The output shape puts the framing in the closing report, so in a long answer the reader meets the lenses before the framing. This is minor and was not acted on.
- The mind maps largely repeated the chains. This bears on D5 for a later cycle and was not acted on.
- Markdown cannot show color, so the instruction to color-code did not apply.
