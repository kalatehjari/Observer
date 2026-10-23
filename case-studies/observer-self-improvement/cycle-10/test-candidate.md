Model ID: claude-opus-5-5

# Observer analysis: revising *Graded Authority for AI over Sensitive Human Matters*

## Summary

**Question as framed.** What revisions would make this paper the strongest defensible treatment of whether AI systems should hold decision authority over medicine, military force and economic allocation? And how far can its central recommendation be trusted? The assumptions are in §4.0.

**Recommendation.** Keep the paper's architecture and its direction, and repair it at three joints:

- State the thesis in grade terms (F-01).
- Give grade 1 its own tests, and set each deployment's grade by what it does in practice (F-02).
- State the premise that requires a human decision before an adverse effect (F-03).

Then:

- Unify the rule for adverse determinations (F-05).
- Treat escalation into a fixed-capacity queue as allocation (F-04).
- Add an upgrade path triggered by evidence (F-06).
- Scope the market rows (F-07).

Finish with the medium-severity fixes, a fresh audit and expert review. The 14 steps are in §1.1.

**Confidence.**

| Subject | Score | Scores by part |
|---|---|---|
| This revision plan | **75/100** | Text and definition repairs 90; grade-1 tests 75; the premise and the single adverse rule 65; upgrade path and counter-evidence 70; market and military repairs 65 |
| The paper's central recommendation, as now written | **50/100** | Human judgement for each use of force against persons 80; bounded-delegation licences 70; favourable approvals under the asymmetry premise 55; a grade-1 floor for every adverse determination 45 |

The central recommendation would rise to about 65 if revised as in steps 1 to 6. Reversibility: the revision itself is fully reversible. In policy, ceilings can be raised later, but wrongful automated adverse or lethal decisions, and benefits lost under over-strict ceilings, both do some damage that cannot be undone.

**Main divergence (PD-1): accuracy against answerability.** There is evidence that human–AI decisions can do worse than AI alone where the AI is better. It cuts against the paper's view that review is owed whether or not a decision is accurate. This is a values choice the author must own, and step 6 lets evidence move the line.

**Most serious problems, ranked by severity:**

| # | ID | Severity | Problem | Main location |
|---|---|---|---|---|
| 1 | F-02 | High | Grade 1 has no tests, though automation bias is a problem of decision aids | §5, §4.5, §6.4 |
| 2 | F-03 | High | The ceilings rest on an unstated premise; named accountability plus a later appeal would pass all five tests | §1, Table 2, §7.2 |
| 3 | F-01 | High | "final authority" is undefined, and the thesis conflicts with Table 1's licences | Abstract, §1, Table 1 |
| 4 | F-05 | High | The grade-2 rule for adverse determinations appears in five versions, and Rec 2 would let a statute license Robodebt-style debt raising | §5, Table 1, §6.4, Rec 2 |
| 5 | F-06 | High | There is no upgrade path, and the strongest counter-evidence is not engaged | §6.1, §5 |
| 6 | F-04 | High | Escalation into a fixed-capacity queue is deprioritisation, and its misses are never reviewed | Table 1, §5, §3.1 |
| 7 | F-07 | High | "Discretionary AI market interventions" is undefined, and "no one can answer" is overstated | §3.3, §5, Rec 6 |
| 8 | F-08 | Medium | The definition of grade 4 leaves §3.2 without a grade, and the protective stop is grade 3 by definition | §2, Table 1 |
| 9 | F-09 | Medium | The answerability test omits the tracing requirement the paper adopts | Table 2, §4.1 |
| 10 | F-11 | Medium | The military reply does not reach persons, and the defensive row assumes reliable classification (Patriot 2003) | §6.3, Table 1 |
| 11 | F-10 | Medium | The asymmetry premise has inconsistent tests and no certifier | §5, §6.5 |

A further 10 medium-severity and 15 low-severity findings are in §3.3 and §3.4.

**Not professional advice.** This analysis is not legal, medical, financial or military advice. Before anyone relies on the revised paper, have it reviewed by a clinical safety lead or clinical ethicist, an international humanitarian law (IHL) lawyer, and a lawyer in administrative law and consumer credit.

## 1. Recommendation

Keep the paper's architecture (grades, conditions, ceilings, triggers) and its direction, and revise it in the order below. Finding IDs (F- for high and medium, L- for low) refer to the audit in Section 3.

### 1.1 Revision steps

1. **State the thesis in grade terms (F-01, L-01).** No AI authority above grade 1 over adverse or value-laden determinations about persons, including force against persons. Grades 2 to 3 only for favourable, protective, escalating or envelope-bounded functions that pass the conditions, and nothing about a person at grade 4. Define "final authority" or drop it.
2. **Give grade 1 its own tests, and set grade by function (F-02).** Grade-1 deployments in classes whose ceiling is 1 must pass right target, contestability and a real-override test measured as disagreement with the advice. Heavy reliance on the system lifts its effective grade. Amend §4.5, §6.4, Rec 1 and Rec 8 to match.
3. **State the premise that requires a human decision before an adverse effect (F-03).** The premise has four parts: the burden of contesting, irreversible harm before review, a hearing before adverse treatment (a values premise, labelled as one) and discretion to depart from the rule. Then make §7.2 derive the ceilings from the conditions plus the premises, and add a third question to its final test.
4. **Replace the five versions of the adverse grade-2 rule with one rule in §5 (F-05).** Grade 2 only for a named class with certified conditions, funded and measured review, and a human decision available before the effect becomes irreversible. No exception for debts and sanctions imposed by public bodies.
5. **Treat escalation into a fixed-capacity queue as allocation (F-04).** Keep grade 2 where capacity is spare. Elsewhere, require an audit of unflagged cases for missed need, by subgroup. Qualify "costs little", and say how the Obermeyer algorithm was used.
6. **Add an upgrade path triggered by evidence, and meet the strongest counter-evidence (F-06).** A ceiling rises one grade only on prospective comparative evidence gathered under ethics approval. Engage the evidence on human–AI teams and on clinical versus mechanical prediction, and state the trade-off between accuracy and answerability as a values choice.
7. **Scope the market rows (F-07).** Define "discretionary AI market interventions", and narrow the answerability claim to harms that emerge from many interacting algorithms or from collusion.
8. **Fix the line between grades 3 and 4, and the protective-stop row (F-08, F-18).** Draw the line at a timely human halt. Regrade the stop to 3 and add a safe-state test specific to the patient.
9. **Strengthen answerability (F-09, F-21).** Add the tracing requirement, duties between vendor and deployer, and external verification. Answer the moral-crumple-zone objection.
10. **Repair the asymmetry premise (F-10).** Make it *suspended*, not "reversed". Use one test that counts third-party harm on both sides, define "favourable", and name the certifier and the evidence standard.
11. **Complete the military argument (F-11, F-14, F-12).** Say why an envelope cannot carry judgements about persons, cite the anti-personnel mine precedent and add a classification condition to the defensive row. Derive Rec 5 from contestability, add a residual rule, and take a position on offensive engagement of objects.
12. **Complete the mechanics for drift and low-resource settings (F-13, F-15, F-19, F-20).** Add triggers for label loops and detection delay, and one body per domain that holds the grade. Use synthetic seeding, present the remedies as safeguards whose effect must be measured, and correct §6.6.
13. **Correct the factual scope and the low-severity items (F-16, F-17, L-01 to L-15).** State the duties to give reasons for credit decisions in US and EU law, and define "AI system". Present Robodebt as rule-based automation and set a learned welfare case beside it.
14. **Audit the revised version again, and send it for expert review.** Revisions often introduce new conflicts. Verify every citation added from my own knowledge. Have it reviewed by a clinical safety lead or clinical ethicist, an international humanitarian law (IHL) lawyer, and a lawyer in administrative law and consumer credit.

### 1.2 What would change this recommendation

- **A shorter target.** If the author wants a short position paper rather than a usable framework, keep steps 1 to 6 and 14, and fold the rest into the limitations.
- **A different weighting of values.** If the author holds that accuracy should govern where the evidence is strong, step 6 becomes central. Some rows (credit refusals, and deprioritising reading effort in screening) would then move to conditional grade 2 now rather than after trials.
- **Expert legal review of credit.** If reviewers find the after-the-fact safeguards of EU law adequate for consumer credit, step 4's rule should place credit refusals at conditional grade 2 explicitly.
- **Evidence on oversight remedies.** If studies show that accountability and seeded errors reliably restore real override, the grade-1 tests in step 2 can be lighter.
- **Treaty developments.** If the November 2026 Review Conference of the Convention on Certain Conventional Weapons (CCW) opens negotiations or adopts an instrument, update §3.2, Rec 5 and §8.

### 1.3 Top next steps

1. In one sitting, make the text-only repairs that unblock the rest: steps 1, 8 and 10, the wording of step 4, and the low-severity fixes.
2. Decide the two values questions (PD-1 and PD-3 in Section 2.2). Then draft the premise (step 3) and the grade-1 tests (step 2) to match.
3. Add the upgrade path and the counter-evidence (step 6). Then audit again and send the paper for expert review (step 14).

### 1.4 Check of the recommendation

Each step was tested against the constraints of the framing: keep the paper's aim and audience, prefer the smallest fix, and add no unsupported claim. Each was also tested against the paper and the audit.

| Step | Risk of a new conflict, and how the step handles it | New claims and their status | Smallest fix? |
|---|---|---|---|
| 1 | The abstract, §1 and §7.2 must change together, or the old thesis survives in one of them | None | Yes: three sentences and one definition |
| 2 | Adds cost, which would contradict §6.6's reply unless step 12 amends it | Parasuraman and Manzey abstract, AI Act Art 14(4)(b), SCHUFA summary, Green (2022): read | Yes: three tests, in ceiling-1 classes only, not all five conditions |
| 3 | May clash with EU law's after-the-fact model for credit; stated openly as PD-3 | Robodebt onus on recipients: read. The hearing premise is labelled a values claim | Yes: one subsection and two sentences in §7.2 |
| 4 | Removes the statutory route that Rec 2 now gives public debts and sanctions, a values call for the author. Keeps a route elsewhere only with certified conditions | GDPR Art 22 exception for decisions authorised by law: read (in summary) | Yes: one rule plus cross-references |
| 5 | Could make escalation hard to deploy. Avoided by keeping grade 2 where capacity is spare | Obermeyer automatic-enrolment threshold: read | Yes |
| 6 | "design judgements" must become revisable ones. Trials run only under ethics approval with the five conditions certified, so no unprotected grant is added | Vaccaro et al. (2024): read. Grove et al. (2000) and Kleinberg et al. (2018): own knowledge, to verify | Yes: one rule, with current ceilings unchanged |
| 7 | Depends on which scope the author intends. Either is coherent once defined | Knight Capital penalty: read. Calvano et al. (2020): own knowledge, to verify | Yes |
| 8 | Defensive envelopes keep grade 3 only because their row requires a stop. Re-check after the edit | MCAS: own knowledge, used only as an analogy | Yes |
| 9 | Adds burden on deployers. No conflict found | Santoni de Sio and van den Hoven: read. Elish (2019): own knowledge, to verify | Yes |
| 10 | None found | None | Yes |
| 11 | A stance on offensive engagement of objects is new content. The residual rule is the minimal part | Patriot 2003: read. Ottawa Convention: own knowledge, to verify | Partly |
| 12 | Adds monitoring cost. No conflict found | Threat image projection: own knowledge, to verify | Yes |
| 13 | None found | CFPB Circular 2022-03, SCHUFA, Dutch fine, AI Act Art 2(3): read | Yes |
| 14 | Required by the method | None | Not applicable |

**High-severity coverage.** Each high-severity problem has a step:

| Problem | Step | What stays open |
|---|---|---|
| F-01 | 1 | Nothing |
| F-02 | 2 | Nothing |
| F-03 | 3 | The values premise: a revision can state it but cannot prove it |
| F-04 | 5 | Nothing |
| F-05 | 4 | Nothing |
| F-06 | 6 | The empirical comparison, until trials report |
| F-07 | 7 | Nothing |

### 1.5 Confidence

**This revision plan: 75/100.** That is my probability that the plan survives the checks still needed:

- a fresh audit of the revised paper;
- review by clinical, IHL and administrative/consumer-credit experts;
- verification of the citations added from my own knowledge.

What moved the score:

- **Up:** the seven high-severity problems are visible in the paper's own text, so their fixes rest on strong evidence.
- **Up:** the external facts behind the fixes were checked against sources: the Parasuraman and Manzey abstract, AI Act Art 14 and Art 2(3), CFPB Circular 2022-03, the SCHUFA judgment (in summary), the Robodebt recommendations, the 2003 Patriot record, and Vaccaro et al.
- **Down:** steps 3, 4 and 6 involve values on which reviewers may reasonably prefer another line, and several supporting citations rest on my own knowledge.
- **Not counted:** the five lenses come from one model, so their agreement did not raise the score.

Scores by part:

| Part | Steps | Score |
|---|---|---|
| Consistency and definition repairs | 1, 8, 10, 13, and the wording of 4 | 90 |
| Grade-1 tests and grade set by function | 2 | 75 |
| The premise, and the content of the single adverse rule | 3 and 4 | 65 |
| Upgrade path and counter-evidence | 6 | 70 |
| Market and military repairs | 7 and 11 | 65 |

Reversibility: revising the text is fully reversible.

**The paper's central recommendation, as now written: 50/100.** That is my probability that it survives the checks still needed:

- field evidence on whether grade-1 human decisions protect people in practice (disagreement rates, review time, outcomes);
- prospective comparisons, for adverse determinations, between human decisions and conditioned automation that can be contested;
- review by legal, IHL and clinical experts;
- a fresh audit after F-01 to F-07 are fixed.

What moved the score:

- **Up:** its direction matches positions held outside this analysis: the ICRC position (2021), AI Act Art 14, the GDPR Art 22 safeguards and Robodebt recommendations 17.1 and 17.2. Its core cases are accurately reported.
- **Down:** it protects people through a human decision-maker of record at grade 1, which is where the evidence on automation bias says protection is weakest, and the paper gives grade 1 no tests (F-02).
- **Down:** its ceilings lack a stated derivation and any route to change with evidence (F-03, F-06), so reviewers may move rows such as credit refusals.

Scores by part, where the evidence differs in strength:

| Part | Score |
|---|---|
| Human judgement for each use of force against persons, with no delegated anti-personnel engagement | 80 |
| The bounded-delegation licences: dosing within limits, defensive envelopes against munitions, pre-committed market rules, protective stops | 70 |
| Grade-2 favourable approvals under the asymmetry premise | 55 |
| A grade-1 floor for every adverse determination: welfare denials, debts, sanctions, credit refusals, deprioritising care | 45 |

If the paper is revised as in steps 1 to 6, the score rises to about 65. The claim becomes narrower and carries its own tests. What remains uncertain is mostly the empirical comparison and the weighting of values.

Reversibility: ceilings adopted in policy can be raised later, so over-caution can be corrected. But wrongful automated adverse or lethal decisions, and benefits lost under over-strict ceilings, both do some damage that cannot be undone for the people affected.

## 2. Convergence zones and productive divergences

All five lenses come from the same model, so their agreement is not independent verification. The weight in each zone below is carried by the sources named, not by the number of lenses.

### 2.1 Convergence zones

- **CZ-1. Grade 1 is the weakest joint (Analytical, Critical, Systems-thinking, Pragmatic).**
  - How each lens got there: Analytical counted the untested rows; Critical read the evidence on automation bias; Systems-thinking traced a workload loop; Pragmatic costed the review time each case needs.
  - Basis: mostly shared evidence (§5's scope, Table 1, the Parasuraman and Manzey abstract, AI Act Art 14(4)(b)).
  - One shared assumption: that the quality of review falls as volume rises. It is plausible but unmeasured in these settings.
  - Finding: F-02.
- **CZ-2. The ceilings need a stated derivation and a way to change (Analytical, Critical, Creative, Systems-thinking).**
  - Basis: shared evidence in the text (§5, §7.2, Table 2).
  - Shared assumption: that automated decisions may outperform human ones in some classes. Vaccaro et al. (2024) supports this, but mostly from experiments, so the agreement is weaker than it looks.
  - Findings: F-03, F-06.
- **CZ-3. Escalation into a fixed-capacity queue is allocation (Analytical, Critical, Systems-thinking).**
  - Basis: shared evidence (§2's definition of a decision about a person, and the Obermeyer source).
  - Finding: F-04.
- **CZ-4. The direction is defensible (Creative, Pragmatic, Critical, Analytical).**
  - The claim: answerable humans keep adverse and lethal determinations; machines may grant, protect, escalate or execute within bounds.
  - Weaker basis: a shared value, that answerability matters apart from accuracy.
  - Stronger basis: positions held outside this analysis (ICRC 2021, AI Act Art 14, GDPR Art 22 safeguards, Robodebt recommendations 17.1 and 17.2). These institutions may share assumptions with one another, but they did not get them from this analysis.
- **CZ-5. Each rule and definition must be stated once (Analytical, Pragmatic).**
  - Basis: shared evidence in the text.
  - Findings: F-01, F-05, F-13.
- **CZ-6. Automation licensed because it protects or defends can itself cause the harm (Creative, Critical).**
  - Basis: independent routes, an analogy from aviation (MCAS) and an incident record (Patriot 2003).
  - Findings: F-11, F-18.

### 2.2 Productive divergences

- **PD-1. Accuracy against answerability (Critical against Creative and Analytical).**
  - The disagreement: Critical finds evidence that human–AI decisions do worse than AI alone where the AI is better (Vaccaro et al., 2024). So grade-1 ceilings may cost accuracy, and the cost may fall on the groups the paper protects. Creative and Analytical follow §4.2, which grants review whether or not the decision is accurate, and treat the burden of error as the design variable.
  - Source: values (how much answerability and dignity weigh against outcomes), and how much weight laboratory evidence gets against field evidence.
  - Judgement: productive. This is a real trade-off for the author to own as a values choice, and step 6 lets evidence move the line.
- **PD-2. How much to demand at grade 1 (Critical and Systems-thinking against Pragmatic).**
  - The disagreement: Critical and Systems-thinking want full tests, because creep and automation bias empty grade 1 of its protection. Pragmatic weighs the cost, and the low-resource case in §6.6.
  - Source: resources and time horizon.
  - Judgement: productive. Step 2 resolves it with three tests, applied only in classes whose ceiling is 1 and costed under Rec 8.
- **PD-3. Credit refusals: a human decision before, or a human review after (Analytical and Creative against Pragmatic).**
  - The disagreement: the derivation of the ceilings and the burden-of-error framing favour a human decision before any adverse effect. Pragmatic notes two things. EU law accepts solely automated decisions under listed exceptions, with rights to human intervention and to contest. US law already requires specific reasons.
  - Source: values, plus a factual dispute about how irreversible a wrongful refusal of consumer credit is.
  - Judgement: productive, and the author must choose. F-03's premise supplies the test: is the harm before review irreversible? That test may sort public welfare determinations (grade 1) from much consumer credit (conditional grade 2).
- **PD-4. Markets: strict limits against existing accountability (Systems-thinking against Pragmatic).**
  - The disagreement: Systems-thinking sees emergent and collusive harms that firm-level liability does not reach. Pragmatic sees firm-level regimes that already work, and a ban on private AI trading that would be unworkable.
  - Source: a factual dispute about answerability, sharpened by an undefined term.
  - Judgement: partly noise and partly productive. Defining the class (F-07) removes most of the dispute. What remains is productive: emergent collective harms with no individual decision subject need a test of public legitimacy.

## 3. Audit of the paper

The audit did two things:

- It checked every rule, definition, threshold and condition against each place that restates, applies or depends on it.
- It checked the paper's claims about the world against my own knowledge (labelled as such) and against sources consulted in my own words. Section 3.6 lists those sources.

Severity scale:

- **High:** the problem changes a conclusion.
- **Medium:** the problem misleads a reader.
- **Low:** anything else.

Quotations from the paper are exact continuous stretches. Table cells are quoted cell by cell.

### 3.1 Index by type

| Type | Findings |
|---|---|
| Conflicts | F-01, F-02 (§2 against §4.5; §5 against Rec 1), F-03 (§7.2 against §5 and Table 1), F-04, F-05, F-08, F-09, F-10, F-15, L-01, L-02, L-07 |
| Gaps | F-01 (undefined key term), F-02 (no test or failure rule at grade 1), F-03 (unstated premise), F-04 (missed cases), F-06 (no upgrade rule), F-07 (undefined class), F-08 (uncovered case), F-09 and F-11 (unanswered objections), F-12 (unlisted classes), F-13, F-14, F-17, F-18, F-19, F-21, L-10, L-12, L-13, L-15 |
| Unsupported, overstated or unverified claims | F-06, F-07, F-09, F-16, F-17, F-20, L-05, L-06, L-08, L-09, L-11, L-14 |
| Matters of convention | L-03, L-04 |
| Wrong claims | None found with confidence |

### 3.2 Record: high severity

#### F-01. The thesis turns on an undefined term and conflicts with Table 1

- **Type:** gap (undefined key term) and conflict.
- **Passages:**
  - Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy"
  - §1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
  - §1: "They may hold bounded authority: over narrow executional tasks whose limits humans set in advance, over steps that only escalate or protect, and, in some lending and administrative settings, over favourable decisions."
  - §2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service."
  - Table 1 rows licensed above grade 1: "Dosing within clinician-set limits" (ceiling 3), "Automatic protective stop that moves the system to a defined safe state" (ceiling 4), "Favourable approvals, such as low-cost approvals" (ceiling 2) and "Escalating a case for urgent clinician review" (ceiling 2).
  - §5: "No domain licenses grade 4 for decisions about persons, with one exception."
  - §7.2: "Authority over sensitive matters therefore stays with humans and institutions, which may delegate bounded functions to machines on conditions."
- **Problem:** "final" is never tied to a grade. Dosing, the protective stop and favourable approvals change a person's treatment, money or access, so under §2 they are determinations about persons. Yet Table 1 licenses them at grades 2 to 4.
  - Read literally, the thesis contradicts Table 1.
  - Read as a ban on grade 4 only, it understates the paper's real position, which is that adverse and value-laden determinations stay at grade 1.
- **Weakens:** the central recommendation as worded in the abstract, §1 and §7.2.
- **Severity:** high, because what the paper recommends changes with the reading.
- **Smallest fix:** replace the thesis sentence in the abstract and §1 with a statement in grade terms. For example: AI systems should hold no authority above grade 1 over adverse or value-laden determinations about particular persons, including force against persons. They may hold grade 2 or 3 authority over favourable, protective, escalating or envelope-bounded functions that pass the five conditions. No determination about a person may run at grade 4. In §2, either drop "final" or define it as authority above grade 1 over an adverse or value-laden determination, which is what the restated thesis forbids.
- **Other passages the fix must change:** §7.2 (first three sentences), §5 ("with one exception", see F-08), and the abstract's count of grades (L-01).

#### F-02. Grade 1, where the highest-stakes decisions sit, has no tests

- **Type:** gap (no test and no failure rule), conflict, and a claim that understates its own source.
- **Passages:**
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - §2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
  - §2, grade 0: "The system reports or summarises data and proposes no option."
  - §2, grade 1: "The system recommends options with reasons. A human selects and remains the decision-maker of record."
  - §4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
  - §6.4: "When these conditions fail, the system drops to grade 1."
  - §6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."
  - Rec 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2)."
  - Rec 8: "A deployment that cannot pay for them should not be granted the grade its ceiling allows."
  - Table 1 rows with ceiling 1 include "Deprioritising a patient or withholding scarce care", "Individual treatment selection", "Recommending the engagement of persons", "Credit refusals" and "Welfare denials, debt raising and sanctions".
- **Problem:** for the most sensitive determinations, the paper's protection is a human decision-maker of record at grade 1. But none of the five tests applies there, the triggers are written for override rates and review windows that grade 1 lacks, and §6.4 sends failing grade-2 systems down to it.
  - The paper's own source on automation bias is about decision aids. Its abstract (read) says automation bias produces omission and commission errors when decision aids are imperfect, occurs in experts, and "cannot be prevented by training or instructions".
  - AI Act Art 14(4)(b) (read) asks that deployers stay aware of over-reliance, especially where systems give information or recommendations for human decisions.
  - So §4.5's "every grade above advice" conflicts with §2 and with the cited literature.
  - §6.4's credit argument puts refusals at the grade that needs the most review, in exactly the setting where review is called impossible.
  - A score given without reasons falls outside the definition of grade 1, so it reads as grade 0 information. Yet the CJEU treats a credit score that a lender relies on heavily as an automated decision (C-634/21; summary read).
  - Rec 1 applies the five tests to every sensitive deployment, which conflicts with the scope set in §5.
- **Weakens:** the claim that keeping adverse determinations at grade 1 protects the people affected; the reply in §6.4; Rec 1 and Rec 8.
- **Severity:** high.
- **Smallest fix:**
  - (a) In §2, set a deployment's grade by what it does. Where reviewers' rate of disagreement, or review time per case, falls below thresholds set in advance, a grade-1 deployment is treated as grade 2. In a class whose ceiling is 1, it must then restore review or fall to grade 0. A score that a decision-maker relies on counts as advice.
  - (b) In §5, require grade-1 deployments in any class whose ceiling is 1 to pass the right-target and contestability tests, plus a real-override test measured as disagreement with the advice.
  - (c) Change §4.5 to *This affects advice as well as every grade above it*.
  - (d) Replace §6.4's last sentence with: where meaningful review cannot be resourced, neither grade 2 nor a nominal grade 1 is defensible; the system may approve or refer, and every refusal goes to a resourced human decision.
  - (e) Add to Rec 8 what happens when review at grade 1 cannot be funded.
- **Other passages the fix must change:** the definitions of grades 0 and 1 in §2; a note on scope under Table 2; the triggers in §5; §6.6 (see F-15); Rec 1 (scope); Rec 4.

#### F-03. The ceilings rest on a premise the paper does not state

- **Type:** gap (a conclusion resting on an unstated premise) and conflict.
- **Passages:**
  - §1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."
  - §2: "To say that a system has decision authority is to say that its output settles a matter others must accept, and that someone can be held to account for it."
  - §2: "Authority presupposes an agent who can give reasons, be questioned and be corrected."
  - Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
  - Table 2, contestability test: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time"
  - §5: "The ceilings are design judgements, not empirical findings."
  - §5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
  - §7.2: "Those conditions, with the asymmetry premise tested before it is used, yield ceilings that are low for decisions about persons and higher for narrow, reversible or envelope-bounded functions."
  - §7.2: "Does it preserve someone who can answer for the decision, and a route by which the person affected can be heard?"
- **Problem:** the answerability argument fails either way it is read.
  - If the system itself must be the answerable agent, it begs the question: AI authority is ruled out by definition.
  - If "someone" may be a person answering for the system, institutions can meet it, and Table 2's test is satisfied by naming a person.
  - Either way, an automated refusal at grade 2 or 3, with a named answerable person and timely human review on challenge, passes all five tests. Table 1 still caps it at grade 1, so the cap needs a further premise, for example that review after the fact does not protect enough against adverse determinations.
  - §7.2 says the conditions yield the ceilings, which §5 and §8 call design judgements. And the final one-line test in §7.2 would admit the grade-2 refusals that Table 1 forbids.
  - EU law accepts solely automated decisions under listed exceptions, with safeguards that include human intervention, the right to express a view and the right to contest (GDPR Art 22; summary read). The paper must say why it goes further.
- **Weakens:** the justification for every row with ceiling 1 that concerns adverse determinations, and the conclusion.
- **Severity:** high.
- **Smallest fix:** add a short subsection, at the end of §4 or the start of §5, that states the premise and labels its values part. For adverse determinations, review after the fact is not enough, for four reasons:
  - (i) the burden of contesting falls on those least able to bear it, as in Robodebt;
  - (ii) harm in the interval before review may be irreversible;
  - (iii) before adverse treatment, a person is owed a judgement by someone able to take their situation into account (a values premise);
  - (iv) only a human decision-maker can use discretion to depart from the rule.

  Where (ii) does not hold, for instance where a refused applicant can readily get the same service elsewhere, the premise supports a human decision on request rather than before every refusal. Say which classes fall where. Then:
  - In §2, separate de facto authority (the output settles the matter) from legitimate authority (someone answerable holds it), and say the thesis concerns legitimate authority.
  - In §7.2, say the ceilings follow from the conditions together with this premise and the asymmetry premise.
  - Add a third question to §7.2's final test: can a human decide an adverse matter before it takes effect?
- **Other passages the fix must change:** §1 (the first step of the argument); §5 (the sentence beginning "Grade 1 governs" should cite the premise); §7.2 (two sentences); §8 (list the premise among the values choices).

#### F-04. Escalation into a fixed-capacity queue is deprioritisation, and its misses are never seen

- **Type:** conflict and gap.
- **Passages:**
  - §2: "A deployment is assessed permission by permission, and the grade of a decision class is set by the most consequential permission it carries."
  - §2: "Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately."
  - §5: "A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
  - Table 1: "Escalating a case for urgent clinician review" (ceiling 2; conditions "Clinician can override within the workflow; reviews sampled for seeded errors") against "Deprioritising a patient or withholding scarce care" (ceiling 1).
  - §3.1: "Because, at the same level of illness, less had been spent on Black patients, the proxy systematically under-identified them (Obermeyer et al., 2019)."
  - Table 2, right-target test: "Performance is validated against the outcome the decision is for, and error rates are published by subgroup"
- **Problem:** where the resource is fixed, moving one case up moves another down. Escalating A is then deprioritising B, and §2's rule on the most consequential permission puts the act at ceiling 1, not 2.
  - In such a queue, position is access to a service, which falls under §2's own definition.
  - The people displaced never reach the reviewing clinician. Seeded errors in flagged cases therefore test false alarms, not misses.
  - The paper's own medicine case is a miss of this kind. According to a source I read, patients above the 97th percentile of the risk score were enrolled automatically. Correcting the bias would have raised the share of Black patients in that group from 18% to 47%.
  - So the harm came from automated selection for a favourable, scarce programme, which the paper does not say.
- **Weakens:** the escalation ceiling in Table 1; §5's claim about the cost of escalation; the use made of §3.1.
- **Severity:** high.
- **Smallest fix:**
  - Limit the escalation row to queues where escalation displaces no one from a fixed-capacity resource.
  - Where capacity is fixed, treat escalation as prioritisation (ceiling 1), or license grade 2 only with an audit, by subgroup, of a random sample of unflagged cases for missed need.
  - Qualify §5's sentence with *in a queue with spare capacity*.
  - In Table 2, publish error rates *including missed cases*.
  - In §3.1, state how the algorithm was used: automatic enrolment above a score threshold.
- **Other passages the fix must change:** §2 (the sentence on queue position); §6.6 (escalation as the fallback where resources are low, see F-15); Rec 3.

#### F-05. The rule for an adverse determination at grade 2 is given five different ways

- **Type:** conflict.
- **Passages:**
  - §5: "Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow."
  - §5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
  - Table 1, the "Credit refusals" row: "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit"
  - Table 1, the "Welfare denials, debt raising and sanctions" row: "Named human decision-maker of record"
  - §6.4: "Grade 2 is permissible only where review fits the workflow, overrides are logged, reviewers are tested with seeded errors, and the drift triggers in Section 5 are monitored."
  - §6.4: "a legal requirement does not make oversight real"
  - Rec 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."
- **Problem:** the five statements do not agree.
  - §5's "or" makes grade 2 suit any outcome reviewed within the workflow, yet the next sentence puts adverse determinations at grade 1.
  - Table 1 gives credit a statutory route to grade 2 and gives welfare none.
  - Rec 2 extends the statutory route to debts and sanctions, so a statute could license Robodebt-style debt raising at grade 2.
  - §6.4 makes grade 2 depend on tested conditions and says the law does not make oversight real, which undercuts any statutory route.
  - Finally, a ceiling that can be exceeded under statute is not a ceiling as §5 defines one.
- **Weakens:** the welfare and credit rows, Rec 2, and the central claim.
- **Severity:** high.
- **Smallest fix:** state one rule in §5 and cite it elsewhere. For example: adverse determinations take grade 1. A named class may run at grade 2 only where all of these hold:
  - a statute or regulator licenses it;
  - the five conditions are certified for it, including funded and measured review capacity;
  - the person affected can obtain a human decision before the adverse effect becomes irreversible.

  Welfare denials, debts and sanctions imposed by public bodies take no such exception. Also reword §5's disjunctive sentence to *Grade 2 suits favourable or cheaply corrected outcomes where review fits the workflow.*
- **Other passages the fix must change:**
  - Table 1: in the credit and welfare rows, show the ceiling as 1 and refer to the §5 rule.
  - §6.4: two sentences, together with F-02.
  - Rec 2.
- **Note:** whether public adverse determinations should keep any statutory route is a values choice for the author (PD-3).

#### F-06. The ceilings cannot change with evidence, and the strongest counter-evidence is not engaged

- **Type:** gap (a strong objection only partly answered, and a mechanism with no rule for a passed test) and overstated claim.
- **Passages:**
  - §6.1: "That is an empirical question, and the framework makes it testable through subgroup audit and the override tests in Section 5."
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
  - §5: "The ceilings are design judgements, not empirical findings."
  - §6.2: "Human decision-makers are biased, and algorithms can be more consistent and more auditable."
  - §8: "the ceilings in Table 1 are design judgements"
- **Problem:** none of the Table 2 tests compares outcomes under automated authority with a baseline of human decisions. Classes with ceiling 1 never produce such outcomes in deployment, so "makes it testable" overstates. There is a rule for downgrading but none for upgrading, so no result could ever raise a ceiling. The objection's best evidence is not cited:
  - In a meta-analysis of 106 experiments (read), human–AI combinations did worse than the better of the human or the AI alone (Hedges' g −0.23). They lost ground in decision tasks, and lost more where the AI alone was better (g −0.54), though they beat humans alone (g 0.64).
  - From my own knowledge: mechanical prediction has matched or beaten clinical judgement on average (Grove et al., 2000). In bail decisions, an algorithmic rule could have reduced crime or detention while narrowing racial disparities (Kleinberg et al., 2018).
- **Weakens:** the reply to the lives-saved objection, and the paper's claim to be testable.
- **Severity:** high.
- **Smallest fix:**
  - Add to §5 an upgrade rule that mirrors the triggers. A ceiling may rise by one grade for a named decision class only on prospective comparative evidence showing fewer wrongful, irreversible adverse outcomes than the human-decided baseline in every audited subgroup. A randomised or stepped-wedge evaluation approved by an ethics body and run with the five conditions certified would qualify.
  - Rewrite the sentence in §6.1 to say the framework requires such an evaluation.
  - Cite the evidence above in §6.1 and §6.2.
  - State in §8 that, until such evidence exists, the ceilings trade some possible accuracy for answerability and contestability, and that this is a values choice.
- **Other passages the fix must change:** §5 (call them revisable design judgements); Rec 7; §7.2; §8.
- **What stays open:** the empirical comparison itself cannot be settled by revision.

#### F-07. The market rows rest on an undefined class and an absolute claim

- **Type:** gap (undefined term) and overstated claim.
- **Passages:**
  - §3.3: "Automated market interventions raise a different stake. The harm is collective and fast, and no single person can answer for it."
  - §5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
  - §5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
  - Table 1: "Discretionary AI market interventions", with the conditions "Public justification; no unilateral action"
  - Rec 6: "prohibit discretionary AI market interventions without public justification"
- **Problem:** the term market intervention usually means action by a public authority. But §5's definition, a system that chooses when and how to act on prices, also covers private algorithmic trading. Rec 6 would then prohibit such trading without public justification, a far-reaching result the paper does not argue.
  - The absolute claim is too strong, because firms answer for their trading systems. The SEC fined Knight Capital $12 million under the market access rule (read). Knight's automated router had sent more than 4 million orders in 45 minutes, and the firm lost more than $460 million.
  - The real gap is narrower. No single actor may be answerable under current law for two kinds of harm: harm that emerges from interactions among many algorithms, and tacit coordination among learned pricing policies (own knowledge: Calvano et al., 2020).
  - These rows also concern no particular person, so they fall outside the thesis's scope, and the paper does not say so.
- **Weakens:** the market ceiling and Rec 6.
- **Severity:** high: Rec 6 changes scope once the claim is corrected.
- **Smallest fix:**
  - Define the class, for example as interventions by or for a public authority, such as market-wide controls. If private trading is meant, argue why firm-level regimes are not enough.
  - Replace the absolute claim with the narrower one above.
  - State that these rows apply the conditions to collective decisions with no individual decision subject (see F-14).
- **Other passages the fix must change:** §3.3; the market paragraph in §5; the Table 1 row; Rec 6.

### 3.3 Record: medium severity

#### F-08. The boundary between grades 3 and 4 leaves the paper's military case without a grade and misgrades the protective stop

- **Type:** conflict and gap (a case that no category covers).
- **Passages:**
  - §2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
  - §2, grade 4: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
  - §3.2: "No one approves each engagement, and the commander's authorisation is the last human act before the consequences."
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - Table 2, bounded-delegation test: "Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions"
  - Table 1: "Automatic protective stop that moves the system to a defined safe state" (ceiling 4; conditions "Narrow and reversible; removes no entitlement; clinician can countermand at once").
  - §5: "A protective stop may run at grade 4 if it moves a system to a defined safe state, removes no entitlement and can be countermanded by a clinician at once."
  - §6.1: "it supports grade 3 or 4 use, as in dosing or protective stops"
- **Problem:** grade 4 requires two things at once: no timely veto, and limits that are absent or set by the system itself.
  - The §3.2 system has limits set by a human but no one who can halt it. It is therefore neither grade 3 nor grade 4.
  - The protective stop has limits defined by humans and an immediate countermand, so under §2 it is grade 3, not 4.
  - A true grade-4 system could never meet the bounded-delegation test that §5 requires for a licence.
- **Weakens:** the rules for classifying a deployment, and the single grade-4 exception.
- **Severity:** medium. The substantive permissions survive, but the classification misleads.
- **Smallest fix:** draw the line between grades 3 and 4 at whether an accountable human can halt the system in time to prevent further acts.
  - Grade 3 has limits set by humans and such a halt.
  - Grade 4 lacks the halt, or has limits that are absent or self-set.
  - On this definition, the §3.2 scenario is grade 4 and excluded, the protective stop is grade 3, §5 reads *No domain licenses grade 4 for decisions about persons.*, and §6.1 reads *grade 3*.
- **Other passages the fix must change:** Table 1 (stop row ceiling 3); §5 (two sentences); §6.1; F-18.

#### F-09. The answerability test omits the tracing requirement the paper adopts

- **Type:** conflict and unanswered objection.
- **Passages:**
  - §4.1: "The paper treats traceability as the minimal test of answerability."
  - §4.1: "A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
  - Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
- **Problem:** the tracing condition comes from Santoni de Sio and van den Hoven (2018; read). It requires at least one human in the design or use chain who understands, or is in a position to understand, the system's capabilities and effects, and who recognises that they are answerable. Its authors stress that tracing is not only about assigning blame after an accident. Table 2 tests only that a person is named and empowered.
  - A named person without that understanding takes the blame without having control. From my own knowledge, Elish (2019) calls this a moral crumple zone.
  - The claim that naming closes the gap is contested by the very sources §4.1 cites.
  - One person cannot hold both design and deployment responsibility where a vendor designs and a buyer deploys, as with the commercial algorithm in §3.1.
- **Weakens:** the answerability condition, and every grade-3 licence.
- **Severity:** medium.
- **Smallest fix:**
  - Add to the test: *and has the information and competence to understand the system's envelope and failure modes; where design and deployment sit with different organisations, each names an answerable person, and the contract gives the deployer the information needed to correct or withdraw the system*.
  - Change §4.1's sentence to: *A gap is narrowed, not closed, by assigning named accountability, and only when the named person meets the tracing condition*.
  - Answer the moral-crumple-zone objection briefly in §6.4.
- **Other passages the fix must change:** §4.1; Table 2; §6.4; Rec 1; F-21.

#### F-10. The asymmetry premise has inconsistent tests and no certifier

- **Type:** conflict and gap.
- **Passages:**
  - Abstract: "where a wrongful adverse decision is harder to reverse than a wrongful favourable one"
  - §5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
  - §5: "Where the ordering is not supported at all, the default is grade 1."
  - §5: "can apply them without further philosophical work"
  - §6.5: "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation."
  - §6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
  - Table 1: "Favourable approvals, such as low-cost approvals", with the conditions "Audit; errors correctable; asymmetry premise checked for the domain"
  - Rec 2: "Apply the asymmetry premise in law and procurement only where it has been checked for the domain."
- **Problem:** the premise is stated inconsistently, and nobody is assigned to check it.
  - "reversed" would literally give refusals more automated authority than approvals, which no other passage allows. §6.5 shows that the intended effect is to suspend the premise.
  - The test changes from place to place:

    | Passage | What is compared |
    |---|---|
    | Abstract | how hard each kind of wrongful decision is to reverse |
    | §5 | how much irreversible harm each causes: all harm from wrongful approvals, but only the refused person's harm from wrongful refusals |
    | §6.5 | only harm "to others" from approvals |

  - The borrower in §6.5 is the applicant, not another person.
  - "favourable" is undefined. A loan the applicant cannot repay is favourable only in the sense that it grants the request.
  - No test, certifier or standard of evidence exists for the check that Table 1 and Rec 2 require.
  - "not supported at all" sets the bar for grade 2 at any support whatever.
  - The check is a values decision, which conflicts with "without further philosophical work".
- **Weakens:** the favourable-approvals row and Rec 2.
- **Severity:** medium.
- **Smallest fix:**
  - Replace "reversed" with *suspended, so that approvals and refusals both take grade 1*.
  - Use one test in §5 and §6.5 that counts irreversible harm to the applicant and to third parties on both sides.
  - Rewrite the first sentence of §6.5 to separate the applicant's harm from harm to others.
  - Define "favourable" as the outcome the applicant requested.
  - Name the body that performs the check, and its standard of evidence.
  - Replace "not supported at all" with *not shown by the evidence that body requires*.
  - Qualify "without further philosophical work" for the asymmetry check.
  - Align the abstract with the new test.
- **Other passages the fix must change:** abstract; §5; §6.5; Table 1; Rec 2.

#### F-11. The military reply does not reach persons, and the defensive row assumes reliable classification

- **Type:** gap (strong objections unanswered) and unsupported premise.
- **Passages:**
  - §6.3: "Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules. It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable."
  - Table 1: "Defensive engagement of incoming munitions, not persons", with the conditions "Human-set envelope; human on the loop; stop available"
  - §3.2: "The recommendation is not binding law, and states hold differing positions."
  - Rec 5: "Prohibit delegated authority to select and engage persons with force."
- **Problem:** the reply has three gaps.
  - §6.3's logic, that an envelope makes speed tolerable, would equally support a grade-3 envelope for engaging persons. The paper never says why an envelope is enough for munitions but not for persons.
  - It names no opposing state position, and it does not answer the argument that machines could comply with humanitarian law better than soldiers under stress.
  - The defensive row assumes the system can tell munitions from crewed aircraft. In 2003, Patriot batteries misidentified a British Tornado and a US Navy F/A-18 as enemy missiles and shot them down, killing three aircrew (source read). Identification friend or foe (IFF) performed poorly, and operators had been trained to trust the software.
- **Weakens:** the justification of Rec 5, and the defensive grade-3 row.
- **Severity:** medium.
- **Smallest fix:**
  - Add to §6.3 that an envelope fixes where, when and how much force is used, but not the judgements that force against persons requires. Distinction, recognising surrender and proportionality are judgements about particular persons and circumstances, and they cannot be fixed in advance.
  - Note the treaty precedent: anti-personnel mines, which are triggered by their victims and confined to an area, are banned by the 1997 Ottawa Convention, while anti-vehicle mines fall outside it (own knowledge; to verify).
  - State the opposing view and reply to it.
  - Add to the defensive row: *validated discrimination of munitions from crewed aircraft; envelope excludes friendly and civil air traffic*, citing the 2003 incidents.
- **Other passages the fix must change:** §3.2 (opposing positions); §6.3; Table 1; Rec 5; §8.

#### F-12. No residual rule for decision classes Table 1 does not list

- **Type:** gap (cases that no category covers).
- **Passages:**
  - §5: "A ceiling is the highest grade a decision class may take, given the conditions."
  - Table 1's twelve rows, which include no offensive engagement of objects, no health-insurance coverage decision and no deferral.
- **Problem:** classes the table omits have no ceiling. Three examples:
  - offensive autonomous engagement of military objects, which the ICRC would regulate rather than prohibit (source read);
  - coverage decisions that straddle medicine and the economy;
  - indefinite deferral, which can act as a refusal when only approvals are automated.
- **Weakens:** Rec 1, which requires every deployment to declare a ceiling.
- **Severity:** medium.
- **Smallest fix:** add to §5 that an unlisted class takes grade 1 if it can be adverse to a person, until the domain authority classifies it, and that deferral beyond a stated time counts as an adverse determination. State the paper's position on offensive engagement of objects, or say it is out of scope.
- **Other passages the fix must change:** a note under Table 1; Rec 1; Rec 5.

#### F-13. The drift triggers miss two of the three dynamics and name no single body

- **Type:** overstated claim and gap.
- **Passages:**
  - §5: "These triggers are the working form of the drift risks in Section 4.6."
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
  - §4.6: "In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
  - §4.6: "A third dynamic concerns detection."
  - Table 2's "Certified by" column, which names five different bodies.
- **Problem:** the triggers catch authority creep, but they miss the other two dynamics.
  - A label loop can run while the definition of the label stays unchanged.
  - Detection delay has no trigger at all.
  - "its certifying body" is ambiguous when five bodies certify different conditions. No one is named to hold the grade declaration, detect a trigger or enforce the downgrade.
- **Weakens:** Rec 7, and the claim that drift is handled.
- **Severity:** medium.
- **Smallest fix:**
  - Add a trigger for retraining on labels produced by the system's own flags without an independent sample.
  - Add a trigger for detection delay above a bound set in advance, in classes whose harms are collective.
  - Name one body per domain that holds the grade declaration and decides downgrades, and require deployers to report trigger events to it within a stated time.
- **Other passages the fix must change:** §5; a note under Table 2; Rec 7.

#### F-14. The conditions assume an affected person who can contest

- **Type:** gap.
- **Passages:**
  - Table 2, contestability test: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time"
  - §4.2: "In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all."
  - Table 1 rows "Defensive engagement of incoming munitions, not persons" and "Pre-committed market rules, such as halts and rate limits".
- **Problem:** the contestability condition breaks down in two kinds of case, and the paper addresses neither.
  - Where there is no individual decision subject, contestability as written cannot be met, yet such classes are licensed at grade 3.
  - Where persons are affected but cannot contest at all, the condition can never be met. That case would give Rec 5 a direct derivation, which the paper does not use.
- **Weakens:** grade-3 licences for classes that concern no particular person; the justification of Rec 5.
- **Severity:** medium.
- **Smallest fix:** add to §5 that, for classes with no individual decision subject, contestability is met by public reporting and incident review by the domain authority; and that, where a person affected cannot contest at all, the class cannot exceed grade 1.
- **Other passages the fix must change:** §4.2 (cross-reference); a note under Table 2; Rec 5.

#### F-15. The reply on low-resource settings relies on proportionality and escalation that Section 5 does not provide

- **Type:** conflict.
- **Passages:**
  - §6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes."
  - §6.6: "A low-stakes information service needs fewer of them than a system that decides who receives scarce care."
  - §6.6: "Second, where review capacity is absent, the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review."
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - Table 1, escalation conditions: "Clinician can override within the workflow; reviews sampled for seeded errors"
- **Problem:** §5 states no proportionality.
  - All five tests apply at grades 2 to 4, and none at grade 0, so an information service needs none of them, not fewer.
  - Standards called minimal cannot be reduced further.
  - Escalation is a grade-2 row, and its conditions need the clinician capacity that §6.6 assumes is absent.
- **Weakens:** the reply to the objection about low-resource settings.
- **Severity:** medium.
- **Smallest fix:** either add a rule on proportionality to §5 (which tests apply at which stakes) or delete the sentences about proportionality. Change the fallback to: restrict the system to information, or to escalation where clinicians can review what it flags.
- **Other passages the fix must change:** §5, if a rule is added; the grade-1 tests in F-02.

#### F-16. The claim that credit reasons are often unavailable overstates against current law

- **Type:** overstated claim.
- **Passage:** §3.3: "A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant."
- **Problem:** the law in both the US and the EU requires more than the claim suggests.
  - In the US, creditors must give specific principal reasons for adverse action even when they use complex algorithms. They may not use algorithms that prevent this (CFPB Circular 2022-03; read).
  - In the EU, a person subject to a solely automated decision has safeguards, including human intervention and contest. The CJEU has held that a credit score a lender relies on heavily can itself be such a decision (C-634/21; summary read).
  - Reasons may still be generic in practice, but the paper offers no evidence that they are.
- **Weakens:** the contestability argument for credit, and the rationale for the credit row.
- **Severity:** medium.
- **Smallest fix:** replace the clause with: lenders in the United States must state the principal reasons for a refusal even when they use complex models, and EU law gives rights to human intervention and to contest a solely automated decision, but the reasons given can be generic and hard to act on. Cite the sources.
- **Other passages the fix must change:** §8 (jurisdictions); references.

#### F-17. "AI system" is undefined, and the economy case is rule-based automation

- **Type:** gap (undefined key term) and unsupported scope.
- **Passages:**
  - Abstract: "AI systems are increasingly placed inside decisions about health, life and death, liberty and livelihood."
  - §1: "The characteristic failures of automated decision-making, such as proxy labels, opacity and complacent oversight, are structural and must be designed against."
  - §3.3: "The Australian Robodebt scheme is a documented welfare case."
  - Table 1: "Pre-committed market rules, such as halts and rate limits"
- **Problem:** the paper moves between "AI systems" and "automated systems" without defining either.
  - Robodebt was a rule-based data-matching process that used averaged income (source read), not a learned model.
  - Market halts are also rule-based.
  - Readers may take both as evidence about AI specifically.
  - A learned case exists in the welfare domain. The Dutch tax authority used a self-learning risk model to detect childcare benefit fraud, and the Dutch data protection authority fined it €2.75 million in 2021 (source read).
- **Weakens:** the evidence base the paper claims for AI specifically.
- **Severity:** medium.
- **Smallest fix:** in §2, define the scope. For example, the paper uses "AI system" for any automated system whose output can settle or decisively shape a determination, whether rule-based or learned, and says so wherever learning matters (label loops, opacity). In §3.3, note that Robodebt was rule-based, and consider adding the Dutch case.
- **Other passages the fix must change:** §3.3; §4.6; §8; references.

#### F-18. A "defined safe state" is not safe in every clinical context

- **Type:** gap.
- **Passages:**
  - Table 1: "Automatic protective stop that moves the system to a defined safe state", with the conditions "Narrow and reversible; removes no entitlement; clinician can countermand at once"
  - §5: "A protective stop may run at grade 4 if it moves a system to a defined safe state, removes no entitlement and can be countermanded by a clinician at once."
- **Problem:** stopping is not always safe.
  - Interrupting a critical infusion can harm a patient who depends on it.
  - False stops have costs.
  - An immediate countermand can fail under workload.
  - An analogy from my own knowledge: the 737 MAX's MCAS, a protective function acting on input from a faulty sensor, contributed to two crashes in 2018 and 2019.
- **Weakens:** the licence for the protective stop.
- **Severity:** medium.
- **Smallest fix:** add to the row's conditions: *the safe state is safe for the patient in that context; false-stop rates are measured; countermand is tested under realistic workload*. Mirror this in §5.
- **Other passages the fix must change:** §5; F-08.

#### F-19. Seeded errors in live decisions have no safeguard

- **Type:** gap.
- **Passages:**
  - Table 2, real-override test: "Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors"
  - Table 1, escalation conditions: "Clinician can override within the workflow; reviews sampled for seeded errors"
  - §6.4: "reviewers are tested with seeded errors"
  - Rec 4: "seed reviews with known errors"
- **Problem:** a seeded wrong recommendation in a live case can harm a patient or claimant if the reviewer misses it, and the test expects some reviewers to miss some. The paper does not say whether seeded cases are synthetic or are intercepted.
- **Weakens:** the ethical acceptability of the real-override test.
- **Severity:** medium.
- **Smallest fix:** specify that seeded cases are synthetic, or are intercepted by a second check before they affect anyone, under ethics oversight. Aviation security offers a precedent: fictional threat images are projected onto screeners' displays (own knowledge; to verify).
- **Other passages the fix must change:** Table 1; §6.4; Rec 4.

#### F-20. The remedies for rubber-stamping are asserted without evidence

- **Type:** unsupported claim.
- **Passages:**
  - §6.4: "Reviewers should answer for accuracy, not agreement."
  - Rec 4: "Log overrides, set minimum review times, seed reviews with known errors, and treat a near-zero override rate as a signal to investigate, not as proof of accuracy."
- **Problem:** the evidence is mixed, and the paper cites none of it.
  - The paper's own source says automation bias "cannot be prevented by training or instructions" (abstract, read).
  - Some evidence supports accountability. In conference abstracts held by NASA (read), participants and pilots who saw themselves as accountable for their performance and their strategies of interaction cross-checked the automation more and made fewer errors involving it.
  - From my own knowledge, Skitka, Mosier and Burdick (2000) report a related experimental effect.
  - The paper supplies no evidence for seeded errors or minimum review times in clinical or benefit settings.
- **Weakens:** §6.4's claim that the objection is met as a design constraint.
- **Severity:** medium.
- **Smallest fix:** present the remedies as proposed safeguards whose effect each certifying body must measure. Cite the evidence on accountability, and add evaluation of the remedies to Rec 4.
- **Other passages the fix must change:** §6.4; Rec 4.

#### F-21. Two conditions are certified inside the deploying organisation

- **Type:** gap.
- **Passages:**
  - Table 2, answerability, certified by: "Governing body of the deploying organisation"
  - Table 2, real override, certified by: "Internal audit using sampled cases"
  - §6.4: "The strongest objection is that oversight becomes a formality."
- **Problem:** two key conditions are certified by the deployer itself, which is where formality takes hold:
  - answerability, the condition the paper treats as minimal;
  - real override, the condition aimed at its strongest objection.
- **Weakens:** the independence of the safeguards against rubber-stamping.
- **Severity:** medium.
- **Smallest fix:** require the answerability certificate to be registered with the domain regulator, which samples it. Require external verification of internal override audits at least once a year.
- **Other passages the fix must change:** Table 2; Rec 1; Rec 4.

### 3.4 Record: low severity

- **L-01.** Abstract, "It distinguishes five grades of authority, from information to autonomous execution", against §2, "Grades 0 and 1 are not authority". Conflict, low. Fix: write *five grades of decision involvement, of which grades 2 to 4 confer authority*. No other passage changes.
- **L-02.** §4.6, "Two dynamics are missing from a static account of grades.", against the same section's "A third dynamic concerns detection." Conflict, low. Fix: write *Three dynamics*. No other passage changes.
- **L-03.** §5 prints Table 2 before Table 1. Convention, low. Fix: renumber the tables in order of appearance, and update the references in §5, §6.4 and Rec 1.
- **L-04.** References, "Text consulted at https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/". Convention, low. Fix: cite the Official Journal (OJ L, 2024/1689, 12.7.2024) or EUR-Lex.
- **L-05.** §6.1, "A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows". Overstated, low: the study shows a subgroup under-served through a proxy label, not a system that saves more lives overall. Fix: *as the Obermeyer case shows for a proxy label*.
- **L-06.** §6.1, "If efficiency justified removing review, no appeal would survive." Overstated, low: it recasts an argument about lives as one about efficiency. Fix: *If better average outcomes alone justified removing review*.
- **L-07.** §6.2, "it fits the grade 1 role of review". Conflict with the grade definitions, low: grade 1 is advice on a case, whereas auditing human decisions is oversight. Fix: *it is an oversight use that needs no decision authority*.
- **L-08.** §1, "Armed forces use systems that classify objects and people faster than staff can check them.", and the other opening examples. Unsupported, low: no citations, though broadly true in my own knowledge. Fix: cite one source per example, or mark them as illustrative.
- **L-09.** §6.2, "Automated bias is uniform and scaled." Overstated absolute, low. Fix: *Automated bias tends to be uniform and scaled*.
- **L-10.** §5, "an override rate that falls to near zero over a sustained period without an audit explanation". Gap, low: unlike the subgroup trigger, it has no threshold set in advance. Fix: add *with both thresholds set in advance by the certifying body*.
- **L-11.** §3.2, "It recommends restricting others through limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021)." Incomplete, low. The summary omits three parts of the source (read): limits on the situations of use, requirements for supervision and for timely intervention and deactivation, and the ICRC's call for new legally binding rules. Fix: add them in one clause.
- **L-12.** §8, "The jurisdictions discussed are few: the European Union's AI Act and the Australian Robodebt case." Gap, low. The Act does not apply to systems used exclusively for military, defence or national security purposes (Art 2(3); read), and the medicine case comes from the United States. Fix: add both points.
- **L-13.** Table 2, "error rates are published by subgroup", and Rec 3, "publish subgroup error rates". Gap, low. Some deployers cannot collect protected attributes; from my own knowledge, US rules generally bar creditors outside mortgage lending from asking an applicant's race. Fix: let the independent auditor estimate subgroup errors by lawful methods where the attributes are not collected.
- **L-14.** §3.3, "imposed by an adverse decision that no official had individually reviewed". Unverified at the stated strength, low. The sources I read describe much reduced human oversight and very limited human interaction in issuing letters, not necessarily none. Fix: check against the Royal Commission report, or write *with little or no individual review before the notice issued*.
- **L-15.** §1, "Section 3 gives one case per domain". Gap, low: every case is a failure, and none tests a licensed row such as dosing at grade 3. Fix: add one documented success case where it tests a ceiling, such as hybrid closed-loop insulin delivery for the dosing row (own knowledge; to verify).

### 3.5 Claims about the world

The claims the conclusions depend on come first, then supporting claims, then dates, figures and attributions. Two columns answer the two questions asked of each claim. *Supported?* asks whether the paper supports the claim at the strength and scope it states. *True?* gives what I know or found for and against it. *Read* means a source I consulted, listed in §3.6. *Own knowledge* means I did not check it in this session.

| # | Claim (location) | Supported? | True? | Verdict |
|---|---|---|---|---|
| 1 | Supervisors over-rely on automation and monitor less well as reliability rises; complacency and automation bias are documented (§4.5, §6.4) | Yes, cited (Parasuraman and Manzey, 2010) | Read: automation bias causes errors with imperfect decision aids, occurs in experts and in teams, and is not prevented by training or instructions | True. Its scope is understated, because it applies to advice (F-02) |
| 2 | Automation removes practice, leaves the rare hard cases, and makes monitoring a task humans do poorly (§4.5, §6.4) | Yes, cited (Bainbridge, 1983) | Own knowledge: a fair summary of Bainbridge | True |
| 3 | A cost proxy under-identified Black patients; the algorithm was accurate about its label (§3.1, §4.3, §6.2) | Yes, cited | Read: cost was used as the proxy; at the same score, Black patients were sicker; patients above the 97th percentile were enrolled automatically; correction raises the Black share of that group from 18% to 47%. Own knowledge: the algorithm was calibrated for cost across races | True. The grade at which it was used goes unstated (F-04); §6.1 overclaims (L-05) |
| 4 | Robodebt compared averaged annual income with fortnightly reports, raised debts at scale, put the burden on recipients and issued decisions no official had individually reviewed; a royal commission reported in 2023 (§3.3) | Yes, cited | Read: rule-based data matching on averaged tax-office income; burden shifted to recipients; less human oversight; 470,000 wrongly issued debts to be repaid (May 2020); A$1.872 billion settlement approved in June 2021; report released 7 July 2023; recommendations 17.1 and 17.2 on automated decision-making | True in substance. The wording "no official had individually reviewed" is unverified at full strength (L-14); the scheme is not AI (F-17) |
| 5 | The ICRC recommends prohibiting unpredictable autonomous weapon systems and those designed or used to target persons, and restricting the rest; this is not binding law; states differ (§3.2, §6.3, Rec 5, §8) | Yes, cited | Read: matches the position of 12 May 2021, which also limits the situations of use, sets requirements for interaction between human and machine, and calls for binding rules. Read (August 2026): no binding instrument yet; the CCW expert group's mandate ends in 2026, with a Review Conference in November; over 70 states support negotiations; a December 2025 UN General Assembly resolution had 156 supporters | True. The summary is incomplete (L-11); re-check after November 2026 |
| 6 | The EU AI Act requires high-risk systems to be designed so that natural persons can oversee them effectively (§6.4) | Yes, cited | Read: Art 14(1) matches; Art 14(4)(b) names over-reliance, especially for recommendations; Art 2(3) excludes systems used only for military purposes | True. Supports F-02; see also L-12 |
| 7 | Learning automata can act unforeseeably, so ascriptions of responsibility fail; an autonomous weapon's war crime may leave no one to blame (§4.1) | Yes, cited (Matthias; Sparrow) | Own knowledge: accurate attributions | True |
| 8 | Meaningful human control requires tracking and tracing (§4.1) | Yes, cited | Read: tracing requires human understanding and recognition of answerability, not only blame after the fact | True. Table 2 omits tracing (F-09) |
| 9 | A gap is closed by assigning named accountability before deployment (§4.1) | No; asserted | Against: the tracing condition (read); the literature on responsibility gaps (own knowledge: Matthias, Sparrow, Elish) | Overstated (F-09) |
| 10 | The model's reasons for a credit refusal are often unavailable to the applicant (§3.3) | No | Against: CFPB Circular 2022-03 (read): specific principal reasons are required. GDPR Art 22 safeguards and the SCHUFA judgment (read in summary). For: reasons can be generic (own knowledge) | Overstated (F-16) |
| 11 | No one can answer for a collective harm produced by a learned discretionary policy; no single person can answer for automated market harm (§3.3, §5) | No | Against: SEC penalty against Knight Capital (read). Partly for: emergent harms among many algorithms; tacit algorithmic collusion (own knowledge: Calvano et al., 2020) | Overstated (F-07) |
| 12 | The framework makes the lives-saved premise testable through subgroup audit and override tests (§6.1) | No | None of Table 2's tests compares results with a baseline of human decisions | Overstated (F-06) |
| 13 | Unstated: a human decision at grade 1, with AI advice, protects people and keeps the benefits of augmentation (the rows with ceiling 1; §6.1) | Not argued | Against: Parasuraman and Manzey (read); Green (2022; read), who finds that oversight policies rest on an unexamined assumption and legitimise flawed tools; Vaccaro et al. (2024; read), where combinations did worse than the better of human or AI alone; Patriot 2003 (read). For: combinations beat humans alone (Vaccaro et al.; read) | Unsupported (F-02, F-06) |
| 14 | Unstated: seeded errors and accountability for accuracy restore real override (§6.4, Rec 4) | No | Partly for: the accountability abstracts held by NASA (read); own knowledge: Skitka et al. (2000) and threat image projection. Against: Parasuraman and Manzey (read) | Unverified, leaning partly true (F-20) |
| 15 | Unstated: defensive envelopes can be confined to munitions, not persons (Table 1) | Not argued | Against: the 2003 Patriot fratricides (read) | Unsupported (F-11) |
| 16 | Algorithms can be more consistent and more auditable than human decision-makers (§6.2) | Conceded, not cited | For: own knowledge (Grove et al., 2000; Kleinberg et al., 2018) | True. The paper understates the objection (F-06) |
| 17 | Human bias is heterogeneous; automated bias is uniform and scaled (§6.2) | Partly, through the Obermeyer example | Own knowledge: the literature on algorithmic monoculture supports the tendency, but human biases can also be shared and systematic | Overstated (L-09) |
| 18 | Fairness is a choice of target and metric, and no metric is neutral (§4.3) | Not cited | Own knowledge: supported by impossibility results (Kleinberg, Mullainathan and Raghavan; Chouldechova) | True |
| 19 | Interpretability must be defined relative to the task (§4.4) | Yes, cited (Doshi-Velez and Kim) | Own knowledge: a fair summary | True |
| 20 | Automated tools in public services profile and punish poor people, often with no one to hear a challenge (§4.2) | Yes, cited (Eubanks) | Own knowledge: a fair summary | True |
| 21 | Label loops: flagged cases lead to investigations, whose findings become training labels (§4.6) | Labelled as an inference | Own knowledge: analogous findings on runaway feedback loops in predictive policing (Ensign et al., 2018). Read: the Dutch self-learning fraud-risk model (fined in 2021) | A plausible hypothesis that citations could strengthen |
| 22 | The opening examples: hospitals rank patients, armed forces classify faster than staff can check, agencies score claims and flag families, lenders refuse credit with models, trading happens in milliseconds (§1) | Not cited | Broadly true (own knowledge). Read: Dutch fraud flags; the CFPB circular presupposes refusals made with models | True in general but unsupported in the text (L-08) |
| 23 | Lending is typically high-volume, and a refusal can exclude a person from housing (§3.3) | Not cited | Own knowledge: true | True |
| 24 | In lethal decisions, the person judged cannot contest at all (§4.2) | Self-evident | True | True; used in F-14 |
| 25 | Dates and bibliographic details in the reference list | Not applicable | Read: the AI Act's Official Journal date, the ICRC date, the Royal Commission's date, and the DOIs for Parasuraman and Manzey and for Santoni de Sio and van den Hoven. Own knowledge: the volume and page details for Obermeyer, Topol, Bainbridge, Matthias, Sparrow, Doshi-Velez and Kim, Eubanks and Scharre | No errors found |

### 3.6 Coverage and sources

**Coverage.**

- **Checked for consistency:** every section, both tables, all eight recommendations and the reference list.
- **Checked against sources:** the claims that carry the conclusion (automation bias, Obermeyer, Robodebt, the ICRC position, AI Act Art 14 and Art 2(3), the duty to give reasons for credit decisions, answerability in markets), and the main counter-evidence (Vaccaro et al., Green, Patriot 2003).
- **Read only in summary:** the sources were read through page fetches that return summaries and short extracts. I did not read the full texts of the Royal Commission report, the ICRC position, the AI Act, the Obermeyer paper or the Parasuraman and Manzey paper. Check any wording quoted from them against the originals before it goes into the paper.
- **Not checked against sources:** the content of Topol, Doshi-Velez and Kim, Eubanks, Matthias, Sparrow, Bainbridge and Scharre (my own knowledge only); and every citation added from my own knowledge: Grove et al. (2000), Kleinberg et al. (2018), Elish (2019), Calvano et al. (2020), Skitka et al. (2000), Ensign et al. (2018), the Ottawa Convention, MCAS, threat image projection and hybrid closed-loop insulin.
- **Not assessed:** prose style, length, and the paper's provenance or authorship.

**Sources consulted** (in my own words; none concerned the paper itself):

- [UC Berkeley News on Obermeyer et al. (2019)](https://news.berkeley.edu/2019/10/24/widely-used-health-care-prediction-algorithm-biased-against-black-people/)
- [ICRC position on autonomous weapon systems (12 May 2021)](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems)
- [EU AI Act Service Desk, Article 14](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14)
- [AI Act, Article 2](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-2/)
- [Royal Commission into the Robodebt Scheme (Wikipedia)](https://en.wikipedia.org/wiki/Royal_Commission_into_the_Robodebt_Scheme)
- [Robodebt scheme (Wikipedia)](https://en.wikipedia.org/wiki/Robodebt)
- [Parliamentary Library FlagPost on the Robodebt recommendations](https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Parliamentary_Library/FlagPost/2023/July/Robodebt-RC-legislative-recommendations)
- [Parasuraman and Manzey (2010), abstract](https://depositonce.tu-berlin.de/handle/11303/8923)
- [CFPB Circular 2022-03](https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/)
- [Bird & Bird on the SCHUFA judgment, C-634/21](https://twobirds.com/en/insights/2023/global/key-takeaways-from-the-schufa-case-of-the-cjeu)
- [MIT Technology Review, "Preventing fratricide" (2005)](https://www.technologyreview.com/2005/06/01/230882/preventing-fratricide/)
- [Vaccaro, Almaatouq and Malone (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11659167/)
- [NASA Technical Reports Server 20020041010](https://ntrs.nasa.gov/citations/20020041010)
- [NASA Technical Reports Server 20020043179](https://ntrs.nasa.gov/citations/20020043179)
- [Green, arXiv 2109.05067](https://arxiv.org/abs/2109.05067)
- [Santoni de Sio and van den Hoven (2018)](https://frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00015/full)
- [SEC press release 2013-222 (Knight Capital)](https://www.sec.gov/news/press-release/2013-222)
- [Opinio Juris on the autonomous-weapons decisions of 2026 (28 August 2026)](https://opiniojuris.org/2026/08/28/autonomous-weapons-systems-mini-symposium-beyond-yes-or-no-the-decisions-states-will-make-this-year-on-autonomous-weapons/)
- [Clifford Chance on the Dutch tax authority fines (April 2022)](https://cliffordchance.com/insights/resources/hubs-and-toolkits/talking-tech/en/articles/2022/04/dutch-government-fraud-scandal-leads-to-record-breaking-gdpr-fin.html)

## 4. Lens summaries

### 4.0 Frame shared by all lenses

- **Question.** What revisions would make this paper the strongest defensible treatment of whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation)? And how far can its central recommendation be trusted?
- **Decision or goal.** A prioritised set of minimal revisions, and a calibrated confidence score for the central recommendation.
- **Constraints.**
  - Keep the paper's practical aim and audience: hospital governance committees, procurement officers, regulators and ethics boards (§1).
  - Prefer the smallest fix.
  - Add no claim without a source or a label.
  - Respect that the paper is normative.
- **Stakeholders.** The author; the paper's users; the people affected (patients, benefit claimants, borrowers, people in conflict zones); deployers and vendors; regulators and states; the public.
- **A good answer must** find the problems that change the conclusion, give each one a fix together with every passage it touches, separate values from facts, and score confidence against named checks.
- **Assumptions.**
  - A1. The question's "strongest defensible" means most robust to informed critique while still usable. It does not mean most persuasive, most permissive or most restrictive.
  - A2. The author wants to keep the position unless logic or evidence requires a change.
  - A3. The revision stays a paper of similar form and length.
  - A4. The paper is a draft the person may revise, so checking its facts in my own words exposes nothing confidential.
  - A5. The central recommendation is the thesis of the abstract and §1, together with the licensing by five conditions and the Table 1 ceilings for determinations about persons.

### 4.1 Analytical

**Reasoning chain**

1. [evidence] The thesis forbids "final authority" over determinations about particular persons, and §2 defines such a determination broadly: treatment, status, liberty, money and access. No passage ties "final" to a grade.
2. [inference] Nine of Table 1's twelve rows concern persons under that definition, counting escalation, which §2 says shapes such a determination. Four of the nine are licensed above grade 1: escalation at 2, dosing at 3, the protective stop at 4 and favourable approvals at 2. Read literally, the thesis contradicts the table. Read as a ban on grade 4 only, it understates the table's real position on adverse determinations (F-01).
3. [evidence] The five conditions license grades 2 to 4 only, yet six rows sit at grade 1, including every adverse determination about a person. The most sensitive rows therefore face no test (F-02).
4. [inference] Take an automated refusal at grade 2 or 3 with a named answerable person and timely review on challenge. It would pass all five of the paper's own tests, so the grade-1 ceilings depend on a premise the paper never states (F-03).
5. [evidence] Three further rules are stated inconsistently. The rule for an adverse determination at grade 2 appears in five versions (F-05). Grade 4's two-part definition leaves the §3.2 system without a grade and makes the protective stop grade 3 (F-08). The escalation row and the deprioritising row describe the same act in a fixed-capacity queue (F-04).
6. [inference] The architecture of grades, conditions and ceilings is worth keeping. It fails at three joints: the thesis term, the grade-1 floor and the derivation of the ceilings. All three can be repaired mostly in the text.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Thesis precision | 0.90 | Every later rule depends on what "final authority" means |
| Coverage of grade 1 | 0.90 | The highest-stakes rows have no tests |
| Derivation of the ceilings | 0.85 | Without the missing premise, the ceilings look stipulated |
| One rule, stated once | 0.70 | Users cannot apply five versions of the same rule |
| Grade boundaries | 0.55 | Affects edge cases more than the main rows |

**Mind map**

- **Analytical**
  - Thesis precision
    - "final" tied to no grade
      - 4 of 9 rows about persons sit above grade 1
    - the abstract counts grades 0 and 1 as authority (L-01)
  - Coverage of the conditions
    - licensing at grades 2 to 4 only
      - 6 of 12 rows untested
  - Derivation of the ceilings
    - answerability met by naming a person
      - contest met after the fact
  - Consistency of the rules
    - adverse grade-2 rule in five versions (F-05)
    - escalation against deprioritising (F-04)
  - Grade boundaries
    - two-part definition of grade 4 (F-08)

### 4.2 Creative

**Reasoning chain**

1. [own knowledge] Weapons law already draws the paper's line between persons and objects for the simplest autonomous weapon. Anti-personnel mines are triggered by their victims, confined to an area and act without approval of each act, which makes them structurally the §3.2 scenario. The 1997 Ottawa Convention bans them, while anti-vehicle mines fall outside it. That gives Rec 5 a precedent (F-11).
2. [own knowledge] Aviation shows that protective automation can itself be the hazard. The 737 MAX's MCAS, a protective function acting on a faulty sensor, repeatedly pushed the nose down in the crashes of 2018 and 2019. By analogy, a safe state in medicine depends on the patient: stopping a critical infusion is not safe for someone who depends on it (F-18).
3. [inference] Reframe the design variable. Instead of asking who decides, ask who carries the burden of an error and how fast it can be undone. Robodebt's harm lay in moving the onus onto recipients (source read). Seen this way, the asymmetry premise becomes a plain rule: machines may grant, protect, escalate or refer to a human, and only an answerable human may deny, sanction or use force against a person (bears on F-03 and F-10).
4. [assumption] Sequencing the human first could blunt anchoring at grade 1. The human decides first, and the system then flags any disagreement for a second review, which extends §6.2's idea that the machine should audit the human. Whether this works is an assumption that needs testing (F-02).
5. [inference] The ceilings become falsifiable once an upgrade path mirrors the downgrade triggers, so that a ceiling rises one grade only on prospective comparative evidence. That turns design judgements into commitments that can be tested and revised (F-06).

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Burden of error as the frame | 0.80 | Explains why adverse determinations differ, without resting on the claim that AI cannot be answerable |
| Asymmetric automation rule | 0.75 | One sentence that practitioners can apply |
| Precedent in weapons law | 0.70 | Gives the line between persons and objects an existing legal analogue |
| Upgrade path | 0.70 | Answers the lives-saved objection with a mechanism |
| Human first, machine second | 0.45 | Promising, but untested here |

**Mind map**

- **Creative**
  - Precedents
    - anti-personnel mines banned
      - anti-vehicle mines outside the ban
    - aviation protections
      - MCAS: the protection as the hazard
  - Reframes
    - burden of error
      - Robodebt moved the onus to recipients
    - machines grant, humans deny
  - Alternatives
    - human first, machine second
    - upgrade path
      - mirrors the downgrade triggers

### 4.3 Critical

**Reasoning chain**

1. [evidence] The recommendation protects people through a human decision-maker of record at grade 1, but the paper's own source on automation bias concerns exactly that setting, decision aids. Its abstract (read) says automation bias yields omission and commission errors when decision aids are imperfect, occurs in experts, and "cannot be prevented by training or instructions". AI Act Art 14(4)(b) (read) singles out over-reliance where systems give recommendations for human decisions. So grade 1 can be nominal (F-02).
2. [evidence] The strongest counterargument now has meta-analytic support. Across 106 experiments, human–AI combinations did worse than the better of the human or the AI alone (g = −0.23). They lost more where the AI alone was better (g = −0.54), though they beat humans alone (g = 0.64) (Vaccaro et al., 2024; read). Grade-1 ceilings may therefore cost accuracy (F-06).
3. [own knowledge] The case behind that objection is old and broad. Mechanical prediction has matched or beaten clinical judgement on average (Grove et al., 2000), and an algorithmic bail rule could have reduced crime or detention while narrowing racial disparities (Kleinberg et al., 2018). §6.1 names no test that would compare automated and human decisions (F-06).
4. [evidence] The leading view fails under three conditions found in the paper and its sources:
   - High volume: §6.4's own reasoning about volume applies to grade 1 as well (F-02).
   - Misses in scarce queues: they never reach a reviewer, and the Obermeyer harm arose at an automatic-enrolment threshold (source read) (F-04).
   - Misclassification in defensive envelopes: Patriot batteries mistook two crewed aircraft for missiles in 2003 (source read) (F-11).
5. [own knowledge] A named person who lacks understanding of the system becomes what Elish (2019) calls a moral crumple zone: they carry the blame without the control (F-09).
6. [inference] Three further points concern who bears the costs and how the evidence was chosen:
   - Every case in the paper is a failure (L-15).
   - The evidence for the economy is rule-based automation, not AI (F-17).
   - The reply on low-resource settings depends on escalation, which itself needs capacity (F-15).

   The direction of the recommendation survives. The specific floor at grade 1 is its weakest claim.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Nominal human review | 0.95 | The recommendation's protection depends on review being real |
| Accuracy cost of the ceilings | 0.80 | The strongest objection, now with meta-analytic support |
| Errors of omission | 0.70 | The paper's own lead case is one |
| Moral crumple zone | 0.55 | Naming a person can move blame without giving control |
| Choice of examples | 0.40 | Weakens persuasion more than validity |

**Mind map**

- **Critical**
  - Protection at grade 1
    - automation bias in decision aids
      - not prevented by training
    - Art 14(4)(b): over-reliance
  - Strongest objection
    - human and AI together below the better alone
      - losses where the AI is better
    - mechanical prediction at least as good as clinical
  - Conditions of failure
    - volume turns review into a rubber stamp
    - misses never reviewed
      - Obermeyer threshold
    - moral crumple zone
  - Classification
    - Patriot 2003

### 4.4 Systems-thinking

**Reasoning chain**

1. [evidence] §4.6 names authority creep and label loops, and §5 calls the triggers their "working form". But the triggers detect only creep. A label loop can run while the definition of the label stays the same, and detection delay has no trigger (F-13).
2. [inference] A workload loop operates at grade 1. Routing every adverse case to humans raises queue pressure. That cuts review time per case, which raises deference, which lifts the effective grade without any formal change. This is the creep §4.6 describes, at a grade the paper does not monitor (F-02).
3. [inference] The evidence is locked in. With ceilings of 1, deployments never produce outcomes under automated authority, so the comparison that §6.1 calls testable cannot come from deployment. Only planned trials can supply it, and without them the ceilings confirm themselves (F-06).
4. [inference] Displacement follows from fixed capacity. In a fixed-capacity programme, moving one patient up moves another down, and the clinician who reviews flags never sees the patients displaced (F-04). And if approvals may be automated but refusals may not, hard cases can be left pending, so that delay becomes a refusal no row covers (F-12).
5. [own knowledge] The actors downstream complicate both answerability and liability.
   - Vendors design and deployers operate, and the algorithm in §3.1 was commercial, so one named person cannot span both roles without duties to share information (F-09).
   - In markets, harms can emerge from interactions among many algorithms, or from tacit coordination among learned pricing policies (Calvano et al., 2020). Liability at the level of a single firm does not reach such harms (F-07).

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Creep at grade 1 | 0.85 | The loop that empties the recommendation's protection |
| Locked-in evidence | 0.70 | Decides whether the ceilings can ever be tested |
| Zero-sum queues | 0.70 | Turns escalation into allocation |
| Emergent collective harm | 0.55 | The real gap in answerability for markets |
| Deferral as refusal | 0.45 | A plausible second-order effect, not yet measured |

**Mind map**

- **Systems-thinking**
  - Feedback loops
    - creep at grade 1
      - volume, then less time, then deference
    - label loops
      - definition of the label unchanged
  - Delays
    - detection delay
    - locked-in evidence
      - no outcomes under ceiling 1
  - Displacement
    - fixed-capacity queues
    - deferral as refusal
  - Actors
    - split between vendor and deployer
    - many algorithms in markets

### 4.5 Pragmatic

**Reasoning chain**

1. [evidence] The users are committees, procurement offices and regulators (§1), but the certification arrangements do not tell them who acts. Table 2 names five certifiers with different intervals, and §5 sends downgrades to "its certifying body". No one holds the grade declaration, and two conditions are certified inside the deployer (F-13, F-21).
2. [own knowledge] Testing must not itself cause harm. A seeded wrong recommendation in a live case can hurt someone if a reviewer misses it. Aviation security projects fictional threat images onto screeners' displays, which is a precedent for synthetic seeding (F-19). Publishing error rates by subgroup needs protected-attribute data, which many US lenders outside mortgages do not collect (L-13).
3. [evidence] The legal baseline already puts parts of the conditions into practice.
   - US creditors must give specific principal reasons even when they use complex algorithms (CFPB Circular 2022-03; read).
   - The CJEU treats a credit score that a lender relies on heavily as an automated decision, with safeguards of human intervention and contest (C-634/21; summary read).
   - The Robodebt Royal Commission recommended a clear path to review, disclosure in plain language, and independent scrutiny of business rules and algorithms (recommendations 17.1 and 17.2; read).

   Mapping the conditions onto these rules lowers the cost of adoption and corrects §3.3 (F-16).
4. [inference] Putting every credit refusal at grade 1 means a human decision for each decline, which is costly at volume. The workable design is to approve or refer, with properly resourced human decisions on refusals. Rec 8 also needs a rule for when even that cannot be funded (F-02, F-05).
5. [evidence] Read as covering private trading, Rec 6 would require public justification for most algorithmic trading. Yet firms already answer for their systems: the SEC fined Knight Capital $12 million under the market access rule (read). The workable target is public interventions and harms across the whole market (F-07).
6. [inference] The revision is cheap and fully reversible. Sequence it as follows: rules and definitions first, because they unblock the rest; then the coverage of grade 1 and the premise; then the evidence; then expert review and a fresh audit.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Budget for review | 0.75 | Whether grade 1 is real depends on funded time per case |
| Mapping onto existing law | 0.70 | Lowers cost and raises credibility |
| A single holder of the grade | 0.60 | Someone must own the declaration and the downgrade |
| Safe seeding | 0.50 | Keeps the test from causing harm |
| Sequencing | 0.45 | Practical and low-risk |

**Mind map**

- **Pragmatic**
  - Operability
    - five certifiers
      - no holder of the grade
    - certification inside the deployer
  - Testing safely
    - seeded errors
      - synthetic precedent
    - data for subgroups
  - Legal baseline
    - US duty to give reasons
    - EU Art 22 and SCHUFA
    - Robodebt recommendations
  - Cost
    - budget for review
      - approve or refer
  - Markets
    - firms already liable
      - Knight Capital penalty

## 5. Transparency report

- **Framing and assumptions:** I read the question as asking for the revision plan that makes the paper most robust to informed critique while it stays usable by its stated audience, together with a calibrated confidence in its central recommendation. The assumptions (A1 to A5) are in §4.0.
- **Which lens drove what:**
  - Analytical: steps 1, 4 and 8.
  - Critical: steps 2 and 6, and the factors behind the confidence scores.
  - Systems-thinking: steps 5 and 12, and part of step 2.
  - Creative: the framing of step 3, the upgrade path in step 6 and the precedent in step 11.
  - Pragmatic: steps 9, 13 and 14, and the cost limits in step 2.
- **What was weighted down or set aside:**
  - Putting the human decision first (weight 0.45, untested): kept as an option only.
  - Deferral as refusal: folded into a residual rule rather than given a new row.
  - Reports of autonomous terminal guidance used under jamming: not verified, so not used.
  - A wholesale redesign of the grade scale: more than the problems need.
  - MCAS: used as an analogy only, not as medical evidence.
- **Confidence scores and their drivers:**
  - Revision plan: 75. By part: 90 for text and definitions, 75 for the grade-1 tests, 65 for the premise and single rule, 70 for the upgrade path and evidence, 65 for markets and the military.
  - It is raised by problems visible in the text itself and by external facts checked against sources. It is lowered by values-laden steps and by citations that rest on my own knowledge.
  - The paper's central recommendation as written: 50. By part: 80 for force against persons, 70 for bounded delegation, 55 for favourable approvals, 45 for a grade-1 floor on all adverse determinations. About 65 if revised.
  - That score is raised by the institutional positions it matches. It is lowered by grade 1 having no tests, and by ceilings that have no derivation and no route to change.
- **What the reasoning cannot establish:**
  - Whether grade-1 human decisions, under the proposed tests, will in fact protect people better than conditioned automation that can be contested.
  - The right weighting of accuracy against answerability.
  - How the paper fits the law of each jurisdiction.
  - What the CCW Review Conference decides in November 2026.
- **To verify with sources, data or experts:**
  - Every citation added from my own knowledge, listed in §3.6.
  - The exact wording of the sources I read only in summary.
  - The Royal Commission's wording on human review (L-14).
  - The Obermeyer referral band below the 97th percentile, which I know only from memory.
  - Any application dates of the AI Act that the revision cites.
- **Professional review:** this is not legal, medical, financial or military advice. A clinical safety officer or clinical ethicist, an IHL lawyer or military legal adviser, and a lawyer in administrative and consumer-credit regulation should review the revised paper before anyone relies on it.
- **Independence:** all five lenses come from one model, so their agreement (notably CZ-1 and CZ-4) is not independent verification. The weight rests on the external sources.
- **Decisions that remain with the author:**
  - PD-1, accuracy against answerability.
  - PD-3, whether a human decides credit refusals before the effect or reviews them after it.
  - PD-4, the scope of the market rows.
  - Whether public adverse determinations keep any statutory route (F-05).
  - A ceiling for offensive engagement of objects (F-12).
  - How much of the paper's length to give the added evidence.
- **Use of search:**
  - I ran 18 web searches and read 20 pages, all limited to facts that the paper's claims are about and phrased in my own words.
  - I did not search for the paper, its title, its sentences, or any reviews or analyses of it, and I opened no page on github.com.
- **Format:** the mind maps are indented outlines. Plain Markdown carries no colour, so they are not colour-coded.
- **Re-audit:** audit the revised version again, because revisions often introduce new conflicts.
