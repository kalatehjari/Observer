Model: claude-opus-5-5

# Observer analysis: revising "Graded Authority for AI over Sensitive Human Matters"

**Question.** How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

**Method.** Observer multi-lens reasoning at full depth: framing, five independent lenses, an audit of the paper against itself and against its evidence, a Higher-Order Observer (HOO) synthesis, and a transparency report. No web search was used. Where I rely on my own knowledge of law, cases or literature, I say so, and every such point is listed under "What to verify".

**Not professional advice.** The paper and this analysis concern medical, legal, military and financial decisions. Nothing here is legal, medical, military or financial advice. Before the tiers are used anywhere, they should be reviewed by qualified people: a lawyer in international humanitarian law and a military ethicist for the military rows; an administrative-law and consumer-credit lawyer for the welfare and credit rows; clinicians and a clinical ethicist for the medical rows; and a human-factors specialist for the override tests.

**Severity scale used throughout.** High: lets a referee defeat or blur a central claim. Medium-high: defeats a section or a row of a table. Medium: weakens a section or misleads a reader. Low-medium and Low: presentation or convention.

## Summary

**Recommendation.** Keep the paper's direction and rebuild its machinery. The core claim holds up against the strongest objections: no AI system should hold grade-4 authority over any decision about a person, and a human should decide each use of force against persons. What a hostile referee could exploit lies mostly inside the paper. Its key term is undefined. Its one grade-4 exception is ruled out by its own definitions. Its five conditions stop exactly where its most sensitive decisions sit (grade 1). Its asymmetry premise carries three different burdens of proof. Make ten changes in this order (details under "Recommendation in full"):

1. State the thesis in the paper's own grade vocabulary, and reclassify the protective stop as grade 3. The rule that no decision about a person may be made at grade 4 then holds without exception.
2. Add a condition-by-grade table that applies each condition where its failure mode arises, including to high-volume grade-1 decisions.
3. Rewrite the asymmetry premise with one burden of proof, all harms counted (including the applicant's own), a rivalry clause for scarce goods and a named body that checks it.
4. Split escalation into protective escalation and adverse flagging.
5. Make answerability more than naming: add traceability and an external check.
6. Repair the drift triggers: cover the label loop, define fallbacks for grade-3 functions and define what happens at grade 1.
7. Fill the coverage gaps: offensive engagement of crewed or occupied military objects, the scope of "market interventions", and rule-level economic allocation.
8. Answer the strongest versions of objections 6.1, 6.2 and 6.3, and add a route by which evidence can raise or lower a ceiling.
9. Map the grades to existing law and verify the external claims.
10. Fix the conventions, then run the audit again on the revised text.

**Confidence.** In this recommendation: **68/100**. In the paper's central recommendation as written: **about 60/100**, made up of parts of clearly different strength:
- Core direction (no grade-4 authority over decisions about persons; a human decides each engagement of persons): 75.
- Adverse determinations about persons default to grade 1 (a named human decision-maker of record): 60.
- The asymmetry premise (more automation for favourable decisions): 40.
- The operational machinery (tests, certifiers, triggers): 30 as written, about 50 after the revisions, and untested either way.

The drivers are under "Confidence" in the synthesis.

**Most serious problems, ranked by severity**

1. **High.** The five conditions apply only at grades 2 to 4, yet the paper says Section 4's failures also arise at advice, and Recommendation 1 applies the conditions to every sensitive deployment. As written, the six grade-1 rows of Table 1, which hold every adverse, lethal and allocative decision, carry no tests and no drift triggers. (Sec. 2, 4.5, 5, 6.4, 6.6, Rec. 1; audit A3, A4)
2. **High.** "Final authority" is never defined. Grade-3 dosing changes a person's treatment with no human approval of each dose, so on a plain reading it breaches the thesis. (Abstract, Sec. 1, Sec. 2, Table 1; A2)
3. **High.** Under the paper's own definitions the protective stop is grade 3, and no grade-4 system can ever pass the bounded-delegation test. The thesis's only stated exception is therefore incoherent. (Sec. 2, Tables 1 and 2, Sec. 5, 6.1, 6.3; A1)
4. **High.** The asymmetry premise is presumed until refuted in one sentence, required to be supported in the next, and required to be checked in Recommendation 2. When the paper says the premise is "reversed", it in fact means that the premise lapses, and no body certifies it. (Sec. 5, 6.5, Rec. 2; A5, A6, A8)
5. **Medium-high.** Section 6.5 counts the over-indebted borrower as a third party. That hides the stronger objection: in credit, wrongful approvals harm the applicant. (6.5; A7)
6. **Medium-high.** Under scarcity, a favourable decision for one person is a refusal for another. The paper's own lead medical case, selection for a scarce programme, falls between the asymmetry premise (grade 2) and the allocation ceiling (grade 1). (3.1, Sec. 5, Table 1, 6.1; A9)
7. **Medium-high.** The escalation carve-out says a wrong flag costs little, which conflicts with the paper's own fraud-flag example and its label loop. (Sec. 1, 4.6, Sec. 5, 6.6; A10, A11)
8. **Medium-high.** As defined, "discretionary AI market interventions" covers all private algorithmic trading, so Recommendation 6 overreaches. The claim that no one can answer for such harms is overstated. (Sec. 5, Table 1, Rec. 6; A18, B6)
9. **Medium-high.** The military rows do not cover offensive engagement of crewed or occupied objects, the most contested class in practice. The defensive row assumes that munitions can be reliably told apart from crewed aircraft. (Table 1, Rec. 5; coverage gap G1, B12)
10. **Medium.** Answerability is tested by naming a responsible person and certified by the deploying organisation itself, a test a Robodebt-type scheme could pass. The traceability test promised in Section 4.1 is missing from Table 2. (4.1, Table 2; A17)
11. **Medium.** The drift triggers miss the label loop and the detection delay, though the paper says they cover Section 4.6. A one-grade downgrade is unworkable for grade-3 speed functions and undefined at grade 1. (4.6, Sec. 5, 6.3; A13, A14)
12. **Medium.** Seeded errors placed in live review could harm real people unless the seeded cases are synthetic or are intercepted before they take effect. (Table 2, Rec. 4; lens finding P4)

The audit records 25 consistency findings (A1 to A25) and 15 claims about the world (B1 to B15). Three coverage gaps (G1 to G3) come from the lenses.

## Higher-Order Observer synthesis

### Convergence zones

**CZ1. Grade 1 is the weak joint of the framework.** Lenses: Analytical, Critical, Systems-thinking, Pragmatic.
- Analytical: 6 of the 12 rows in Table 1 are at grade 1, and all of them fall outside the conditions and the triggers.
- Critical: at volume, a named human decision-maker becomes the rubber stamp that the paper calls its strongest objection, and the cost falls on claimants and borrowers.
- Systems-thinking: authority creep can happen at grade 1, and no trigger would catch it.
- Pragmatic: adopters need tests where the most sensitive decisions sit.
- Basis: mostly shared evidence, namely the text of Sec. 2, 4.5, 5, 6.4 and Rec. 1. The lenses also share one empirical assumption: that automation bias acts on advice as well as on defaults. I believe the human-factors literature supports this, and the paper's own Parasuraman and Manzey citation covers decision aids (own knowledge, not verified here).

**CZ2. The asymmetry premise is the most fragile part that carries weight.** Lenses: Analytical (three burdens of proof), Creative (rivalry under scarcity), Critical (harm to the applicant in credit), Pragmatic (no body certifies it).
- Basis: the internal conflicts are shared textual evidence and are strong. The empirical doubt about the ordering in credit rests on the Critical lens's reasoning and on my own knowledge of responsible-lending concerns. That part is weaker and needs data for each domain.

**CZ3. The core direction is defensible.** Lenses: Analytical, Critical, Systems-thinking, Pragmatic.
- Analytical: after the definitional repair, the thesis can be stated without exception.
- Critical: the strongest objections hit the machinery and the grade-1 safe harbour, not the ban on grade 4.
- Systems-thinking: lethal force is irreversible and its harms are detected late.
- Pragmatic: existing instruments point the same way: the ICRC position, Article 14 of the EU AI Act and, from my own knowledge, Article 22 of the GDPR.
- Basis: partly a shared assumption that agreement among institutions, together with irreversibility arguments, shows defensibility. That is weaker than it looks. Agreement among institutions shows that the position is acceptable to them, not that it is right, and several military powers reject a prohibition (own knowledge). All five lenses also come from the same model, so this agreement is not independent verification.

**CZ4. Escalation must be split.** Lenses: Creative (rivalry), Critical (fraud flags), Systems-thinking (pressure on review capacity and the label loop).
- Basis: shared textual evidence, namely the paper's own fraud-flag example (Sec. 1) and its label loop (Sec. 4.6). Strong.

**CZ5. The framework needs a way for evidence to raise ceilings, not only to lower them.** Lenses: Creative (staged ceilings and trials), Critical (status-quo bias), Pragmatic (revisability).
- Basis: a shared assumption that ceilings should respond to evidence. This is a stance about knowledge, not a finding. An author could reasonably hold that some ceilings, such as the one on lethal force, are fixed by principle and should not move with evidence.

**CZ6. Answerability needs more than a name.** Lenses: Analytical (Sec. 4.1 promises a traceability test that Table 2 lacks), Critical (self-certification, which a Robodebt-type scheme could pass), Pragmatic (whether certifiers exist).
- Basis: textual evidence plus my own knowledge of the Robodebt Royal Commission's findings, which should be verified.

### Productive divergences

**PD1. Protection against access in high-volume and low-resource settings.**
- Disagreement: the Critical and Systems-thinking lenses hold that grade-1 review at volume becomes nominal, and that ceilings withheld from under-resourced services leave people with slower care or none. The paper holds that protection from errors no one can detect or contest is worth slower service, and the Analytical lens accepts that stance as coherent.
- Source: values (how much access weighs against protection), plus a factual dispute about how often grade-1 review is nominal in practice.
- Judgement: productive. This is a real trade-off that the author has to own. Section 6.6 already owns it in part. The paper should add that grade 1 protects no one unless review capacity exists, and it should limit capacity or volume instead of relying on the grade label.

**PD2. Is the statute exception a route to adoption or a loophole?**
- Disagreement: the Pragmatic lens values the statute route because it makes the framework usable by legislatures. The Critical lens notes that Robodebt was a government programme and that a statute can license grade 2 cheaply.
- Source: values (how far to trust legislatures) and time horizon (adoption now against abuse later).
- Judgement: productive. The author must decide whether some classes, such as debt raising, sanctions and force, are excluded from the statute route altogether.

**PD3. Military restraint without coordination.**
- Disagreement: the Systems-thinking and Pragmatic lenses ask what the paper recommends if international coordination fails. The paper's reply in 6.3, that competitive pressure cannot justify authority where the conditions fail, does not say.
- Source: a factual dispute (whether coordination will succeed) and values (how much military risk restraint should accept).
- Judgement: productive. The paper should state its position for the non-cooperative case as a values choice rather than leave it implied.

**PD4. Repair the structure or rebuild it?**
- Disagreement: the Creative lens proposes reorganising the paper around rule-level against case-level authority, that is, accountable pre-committed rules against learned discretion. The Analytical and Pragmatic lenses prefer the smallest repairs inside the existing structure.
- Source: how much weight conceptual unity gets against the cost and risk of a rewrite.
- Judgement: productive and resolvable. Adopt the rule-level idea as one short subsection, which also fills the economic-allocation gap (G3), and keep the existing structure.

**PD5. Should the conditions reach grade 1?**
- Disagreement: the Analytical and Critical lenses say yes, for coherence and for protection. The Pragmatic lens notes the cost, and that auditing human decision-makers in this way is new.
- Source: cost against protection (values), plus feasibility.
- Judgement: productive. Resolve it by applying right target, real override and the override-rate trigger only to grade-1 classes that the certifying body designates as high-volume.

**Noise, resolved.** N1. The Critical lens first read the definition of authority in Sec. 2 as circular: authority requires an answerable agent, AI cannot be one, so AI cannot hold authority by definition. A closer reading shows the definition requires that "someone can be held to account", and that someone can be a human. The definition is therefore not circular. It does merge two ideas, decision power and legitimate authority, and the merger makes the first step of the argument in Sec. 1 look stronger than it is. The point survives as drafting advice (Change 1), not as a charge of circularity.

### Recommendation in full

Convention: text in quotation marks is copied exactly from the paper; proposed new wording is in italics.

Revise the paper as follows, keeping its direction. One condition applies. If the author means "final authority" to cover grade 4 only, use the narrow variant of Change 1. The other changes stand either way.

**Change 1. Definitions and thesis** (fixes A1, A2, A21 and N1)
- In Sec. 2, separate decision power, which the grades measure, from legitimate authority, which the conditions license. Suggested wording: *The grades measure how far a system's output settles an outcome. Whether that power is legitimate depends on the conditions in Section 5.* In the abstract, change "five grades of authority" to *five grades of decision power, of which grades 2 to 4 are authority*.
- Define final authority and restate the thesis in grade terms. Suggested wording: *No AI system should hold grade-4 authority over any decision about a person. Nor should it hold authority above grade 1 over adverse, value-laden or lethal determinations about a particular person, except where a statute licenses grade 2 for a listed class. Executional decisions, which carry out a choice an accountable human has already made, may reach grade 3 inside envelopes that humans set and can stop.* Add one sentence defining *executional*.
- In Table 1, reclassify the protective stop as grade 3. Replace the sentence that licenses grade 4 "with one exception" with one saying that grade 4 cannot meet the bounded-delegation condition and is licensed for no decision about a person. In 6.1, change "grade 3 or 4" to *grade 3*.
- Narrow variant: if "final authority" means grade 4 only, say so in Sec. 2. The grade-1 ceilings for adverse decisions then become a second, separate claim, and the paper should argue for them as such.

**Change 2. A condition-by-grade table** (fixes A3, A4, A15 and A16, and resolves PD5)
Replace the rule that all five conditions license grades 2 to 4 with *Each grade requires the conditions marked in Table 3*, and add:

| Condition | Grade 1 | Grade 2 | Grade 3 | Grade 4 |
|---|---|---|---|---|
| Answerability, with traceability | Required | Required | Required | Cannot be met for decisions about persons |
| Contestability | Required for the human decision about a person | Required | Review and redress after the act; not applicable where no person is the object | Not licensable |
| Right target | Required for classes designated high-volume | Required | Required | Not licensable |
| Real override | High-volume classes: seeded-error and override-rate tests on the decision-maker of record | Case review within the window | Tested ability to halt or narrow the envelope within the time the function allows | Not licensable |
| Bounded delegation | Not applicable | Limits on scope and volume | Required, with an automatic stop | Fails by definition |

Then make four textual fixes:
- In 4.5, change "every grade above advice" to *every grade from advice upward*.
- Align 6.6 and Rec. 1 with Table 3.
- Define "weakly met": if a condition passes only at the standard for a lower grade, the deployment is licensed at that grade.
- Revise 6.4 so that it says grade 1 at volume is defensible only where review capacity exists. Where capacity is lacking, the volume should be capped or the system kept at information.

**Change 3. The asymmetry premise** (fixes A5 to A9)
- Replace the paragraph with one burden of proof. Suggested wording: *The premise applies to a decision class only when the domain's regulator has found positive evidence that wrongful adverse decisions are harder to reverse than wrongful favourable ones, counting all the harm a wrongful approval causes, to the applicant and to others. It applies only to non-rival decisions. Where approvals draw on a fixed pool, approving one person refuses another; such a decision is an allocation and takes the grade-1 ceiling. Where the premise does not apply, favourable decisions share the adverse ceiling.*
- Replace "reversed" with *does not apply* in Sec. 5 and 6.5, and correct the borrower in 6.5.
- Add the check to Table 2: a test, the domain regulator as certifier, and a re-check interval.
- In the abstract, change "governs direction" to *sets the direction of any exception*.
- Place selection for a scarce programme, the Obermeyer case, explicitly at grade 1 as allocation.
- State that credit is non-rival unless it is rationed, so the rivalry clause does not capture all lending by accident.

**Change 4. Escalation** (fixes A10 and A11)
- Separate protective escalation from adverse flagging. Protective escalation moves a case towards more care or review in the person's interest; give it ceiling 2, with monitoring of false positives and of how far other cases are displaced in the queue. Adverse flagging moves a case towards investigation, sanction or scrutiny; give it ceiling 1, with the label-loop trigger.
- Limit the claim that a wrong flag costs little to protective flags, where review capacity absorbs the false positives.
- In 6.6, replace "restrict the system to escalation and information" with *restrict the system to information, or to advice to whoever is available*.

**Change 5. Answerability** (fixes A17; bears on B1 and CZ6)
- Add to the Table 2 test: *and can explain the system's behaviour well enough to act on it (traceability)*. Specify that this holds *for each of design, deployment and outcome*.
- Keep certification by the governing body, but require that the named persons and their power to withdraw the system be filed with an external regulator, which spot-checks them. Where no such regulator exists, the class defaults to grade 1.
- Use Robodebt to show that naming is necessary but not sufficient, after verifying the Royal Commission's findings.

**Change 6. Triggers** (fixes A13 and A14, and lens finding P4)
- Change "Two dynamics" to *Three dynamics*.
- Add a label-loop trigger: training labels drawn mainly from cases the system itself selected, without an independent random sample.
- Handle detection delay with a condition, namely a stated maximum lag between harm and detection with monitoring sized to meet it, or drop the claim that the triggers cover it.
- For each grade-3 class, specify a fallback mode, such as a narrowed envelope or manual operation, to use when a trigger fires, instead of a mechanical one-grade drop.
- For grade-1 classes designated high-volume, a trigger suspends automated recommendations (grade 0) until review.
- Require seeded cases to be synthetic, or to be intercepted before any outcome takes effect.

**Change 7. Coverage gaps** (fixes G1 to G3 and A18; bears on B12)
- G1, military. Add a row for offensive engagement of military objects that may be crewed, occupied or near persons. Take an explicit position on it, as a values choice made with advice from international humanitarian law (IHL): either grade 1, or grade 3 with ICRC-style limits on target type, duration, area and scale. Add to the defensive row a condition that the envelope is tested against crewed and civil aircraft. Classify the Sec. 3.2 scenario explicitly: it is grade 3 against persons, and Rec. 5 prohibits it.
- G2, markets. Define discretionary AI market interventions as interventions by public authorities, or by actors with market-wide reach, acting on market-wide prices. State that private trading algorithms fall under market-conduct rules and outside the person-level thesis. Replace the claim that no one can answer for collective harm with a claim about attribution.
- G3, economic allocation. Either add a short subsection on rule-level authority, covering AI that sets or tunes allocation rules such as eligibility thresholds, budget formulas and scores for scarce goods, or exclude this explicitly in Sec. 8. One position the subsection could take: a system may compute a rule, but an accountable public process must adopt and publish it, and applying a published rule to individual cases can then sit at grade 3, with appeal.

**Change 8. Objections** (fixes the replies affected by B5 and B14; bears on CZ5)
- 6.2: concede that uniform bias is easier to detect and to fix. My own recollection is that the Obermeyer algorithm's bias was much reduced by changing the label; verify this. Then rest the reply on answerability and contestability, not on the heterogeneity of human bias.
- 6.1: drop the third reply, or rest it explicitly on the dignity premise of 4.2. Add an evidence route: shadow (silent) deployment, then prospective randomised or stepped evaluation under ethics approval, with a stated rule for raising a ceiling.
- 6.3: say what the paper recommends if coordination fails.
- 4.2: say that in lethal force, contestability cannot tell human decisions from machine ones, so the military ceiling rests on answerability and on judgements of distinction and proportionality. Legal review of weapons before use and accountability after the fact take contestability's place. My own knowledge is that the review duty is Article 36 of Additional Protocol I.

**Change 9. Law and evidence** (bears on B1 to B15)
- Map the grades to existing instruments, all from my own knowledge and each to be verified: Article 22 of the GDPR and the CJEU's 2023 SCHUFA judgment on credit scoring; US adverse-action notice rules (ECOA and Regulation B); Article 14 of the EU AI Act, which names automation bias, and the Act's exclusion of military uses; Article 36 of Additional Protocol I; US DoD Directive 3000.09.
- Define the paper's scope as *AI and other automated decision systems*, and say that Robodebt was rule-based (verify).
- Qualify or cite the uncited empirical claims (B4, B9, B10, B11 and B13).

**Change 10. Conventions** (fixes A19, A20 and A22 to A25)
- Put Table 1 before Table 2.
- Change "one case per domain".
- Cite the AI Act from the Official Journal.
- Define grade 1 without "with reasons".
- Correct "grade 1 role of review", "without further philosophical work" and "a coordinated response".

### Check of the recommendation

Each change was tested against the framing constraints (smallest change, no new unsupported claims, and the paper keeps its direction) and against the passages and audit findings it touches.

- **Change 1.** I tested the restated thesis against every Table 1 row:
  - Dosing (executional, grade 3): consistent.
  - Protective stop (executional, now grade 3): consistent.
  - Escalation (protective, grade 2): consistent.
  - Favourable approvals (grade 2, conditional): consistent.
  - Credit refusals (grade 1, or grade 2 under statute): consistent, but only because the restatement includes the statute clause. Without that clause it would conflict with Table 1 and Rec. 2.
  - Welfare denials (grade 1): consistent.
  - Recommending engagement (grade 1): consistent.
  - Defensive engagement of munitions (grade 3, not persons): consistent.
  - The two market rows (not decisions about persons): consistent.
  - It is also consistent with 6.3, which now has no exception, and with Rec. 5.
  - New risk: *executional* must be defined. Otherwise people will argue either way about whether dosing that embeds clinical judgement is executional. One definitional sentence is enough.
- **Change 2.** It adds a table, which is more text. It is still the smallest single change that resolves A3, A4, A15 and A16 together; four separate patches would be longer and could disagree with one another. Risks:
  - It extends tests to human decisions at grade 1, which adds cost, so Rec. 8 must mention it.
  - It must not imply that grade 1 is authority, so Sec. 2's distinction stays.
  - Seeded errors at grade 1 raise the live-harm problem (P4), so Change 6's rule on seeded cases must come with it.
- **Change 3.** Consistent with Rec. 2, the last sentences of 6.5 and Sec. 8. The rivalry clause agrees with 6.1, which puts allocation of scarce care at grade 1. Naming the domain regulator as checker is a proposal, not a factual claim. The clause stating that credit is non-rival unless rationed prevents a new over-reach.
- **Change 4.** It adds a Table 1 row and fits Sec. 2's bundle of permissions. Once its wording changes, 6.6 is consistent.
- **Change 5.** An external spot-check adds cost and assumes that a regulator exists. The default to grade 1 where no regulator exists closes the gap that would otherwise open.
- **Change 6.** Fallback modes add one clause to each grade-3 row; keep them that short. The rule for grade-1 suspension needs Table 3 to designate high-volume classes, which it does.
- **Change 7.** G1 and G3 add content. They are needed because the question asks about military force and economic allocation, and the paper as written does not address the most contested military class or rule-level allocation. The position on crewed objects is a values choice that I have not made for the author, and the paper must not present it as settled.
- **Change 8.** Conceding the correctability point weakens one reply but strengthens the paper. It creates no new conflict, provided the claim about how the Obermeyer bias was corrected is verified before it is used.
- **Change 9.** Its main risk is that my unverified recollections get imported as citations. Every item must be checked against primary sources before it enters the paper.
- **Change 10.** No risk.

No change contradicts another, provided Change 1 keeps its statute clause and Change 6 keeps its rule on seeded cases. Revisions often introduce new conflicts, so **the author should run the full audit again on the revised text**, especially Table 1 against Table 3, and the restated thesis against every row, objection reply and recommendation.

### What would change this recommendation

- If the author means "final authority" to cover grade 4 only, use the narrow variant of Change 1 and argue for the grade-1 ceilings as a separate claim.
- Evidence might show that grade-1 review at volume performs no better than grade 2 licensed by statute with seeded-error testing. In that case the default for high-volume adverse classes should move from grade 1 to grade 2 under statute with the Table 3 conditions, and PD1 would tilt towards access.
- If domain evidence supports the asymmetry ordering for a non-rival class, such as renewal of an existing entitlement, the premise can be kept there, and its score would rise.
- If the paper's main audience is legislators rather than deployment committees, the statute route (PD2) becomes the main lever and needs conditions of its own.
- If the author holds that the ceiling on force is fixed by principle rather than by evidence, drop the evidence route (CZ5) for force and say so.

### Top next steps

1. Make Changes 1 to 3 first, because they carry the thesis.
2. Draft Table 3 and test every Table 1 row against it.
3. Verify the external claims listed under "What to verify" before adding any citation suggested in this report.
4. Commission targeted expert review:
   - a lawyer in international humanitarian law and a military ethicist: G1, 4.2 and Rec. 5;
   - an administrative-law and consumer-credit lawyer: A12, and Changes 3 and 9;
   - a clinician and a clinical ethicist: the dosing, protective-stop and scarce-care rows;
   - a human-factors specialist: the real-override tests in Table 3, and seeding.
5. Run the audit again on the revised text.

### Confidence

**Overall confidence in this recommendation: 68/100.**
- Up: most findings are internal conflicts that can be checked against exact quotations, which is the most certain kind of finding available here.
- Up: every change was tested against the passages it touches.
- Down: "strongest defensible" depends on values choices that remain the author's, on the asymmetry premise, crewed objects, access against protection and the statute route. No revision is therefore uniquely strongest.
- Down: every external claim rests on my own unverified knowledge, because no web search was used. The five lenses are one model, so their agreement is not independent.

**Scores by part.** The parts rest on evidence of clearly different strength.

| Part | Score | Main drivers |
|---|---|---|
| A. The audit's consistency findings are real defects in the text | 90 | Exact quotations, checked across every passage that applies them; the remaining risk is misreading the author's intent |
| B. The proposed changes resolve them without new conflicts | 70 | Checked against the text, but Table 3 and the restated thesis add new text that has not yet been audited |
| C. The paper's core direction: no grade-4 authority over decisions about persons, and a human decides each engagement of persons | 75 | Strong arguments from irreversibility and answerability, and wide institutional agreement (own knowledge); contested by some states and by the lives-saved argument; a values position |
| D. Adverse determinations about persons default to grade 1 | 60 | Defensible as a default, but grade 1 at volume is unproven and, as written, ungoverned |
| E. The asymmetry premise | 40 | The paper admits it is unestablished; it has the rivalry and applicant-harm problems; it is plausible only for non-rival entitlements |
| F. The operational machinery | 30 as written; about 50 after revision | Internal conflicts now; untested in any deployment even after revision; thresholds left open |

**Answer to the second half of the question.** As written, the paper's central recommendation deserves about 60/100. Its direction is solid (75), but its finer machinery and the asymmetry premise are not yet (30 to 40). The paper should state this split itself, in Sec. 8.

## Audit of the paper

The audit checks; the lenses judge. Quotations are copied exactly from the paper. Where a passage is cited more than once, it is quoted once in full and referred to afterwards.

### A. Consistency findings

**A1. The only grade-4 licence contradicts the paper's own grade definitions and conditions.**
- Location: Sec. 2 (grade definitions); Sec. 5 (licensing rule and the grade-4 sentence); Table 1 (fifth medicine row); Table 2 (bounded delegation); 6.1; 6.3.
- Quotations:
  - Sec. 2, grade 4: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
  - Sec. 2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
  - Sec. 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - Table 2: "Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions"
  - Table 1 (ceiling 4): "Automatic protective stop that moves the system to a defined safe state", with the conditions "Narrow and reversible; removes no entitlement; clinician can countermand at once"
  - Sec. 5: "No domain licenses grade 4 for decisions about persons, with one exception."
  - 6.3: "It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable."
  - 6.1: "it supports grade 3 or 4 use, as in dosing or protective stops"
- Analysis:
  - A system whose limits are absent or self-set can never pass a test that requires limits written before operation, so no grade-4 deployment can ever be licensed.
  - The protective stop has limits that humans define (a defined safe state) and a clinician who can countermand at once, so it meets the definition of grade 3, not grade 4.
  - Section 6.3 then denies what Table 1 grants.
- Type: conflict. Severity: High.
- Smallest fix: reclassify the stop as grade 3, replace the sentence that creates the exception, and amend 6.1 (Change 1).

**A2. "Final authority" is undefined, and grade-3 dosing appears to breach the thesis.**
- Location: Abstract; Sec. 1; Sec. 2; Table 1.
- Quotations:
  - Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy"
  - Sec. 2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service."
  - Sec. 2: "If the human can change only the envelope or stop the system, it is at grade 3."
  - Table 1 (ceiling 3): "Dosing within clinician-set limits"
- Analysis: a dose changes a person's treatment, so it is a decision about a person. At grade 3 no human can change the individual dose before it takes effect, so on any natural reading of "final" the system holds final authority over that determination. Section 1's carve-out "over narrow executional tasks whose limits humans set in advance" softens this. But the thesis in the abstract has no such carve-out, and "final" is never mapped to a grade.
- Type: conflict. Severity: High.
- Smallest fix: define final authority in grade terms and carve executional decisions out of the thesis (Change 1).

**A3. Three statements disagree on which deployments must meet which conditions.**
- Location: Sec. 5; 6.6; Rec. 1.
- Quotations:
  - Sec. 5, as in A1: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - 6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes."
  - 6.6: "A low-stakes information service needs fewer of them than a system that decides who receives scarce care."
  - Rec. 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2)."
- Analysis:
  - Section 5 requires all five conditions, at grades 2 to 4 only.
  - Section 6.6 says the tests are proportionate, with fewer for low stakes. But Section 5 contains no mechanism of proportion, and a low-stakes information service is grade 0, which Section 5 exempts altogether. The reply is therefore either inconsistent with Section 5 or empty.
  - Recommendation 1 requires all five conditions of every sensitive deployment, including those at grades 0 and 1.
- Type: conflict. Severity: High.
- Smallest fix: add Table 3, then align 6.6 and Rec. 1 with it (Change 2).

**A4. The failures the paper fears most are acknowledged at grade 1 but left unguarded there.**
- Location: Sec. 2; 4.5; 6.4; Sec. 5 (triggers); Table 1.
- Quotations:
  - Sec. 2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
  - 4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
  - 6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."
  - Sec. 5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
- Analysis:
  - (a) Sections 2 and 4.5 disagree on whether automation bias reaches advice.
  - (b) Section 6.4 moves high-volume credit refusals to grade 1 because meaningful review at volume is impossible. Grade 1 requires a human to select in every case, which needs more review capacity than grade 2. The move relocates the rubber stamp rather than removing it.
  - (c) Grade-1 deployments have no certifying body, so the downgrade rule cannot reach them, and 6 of the 12 rows in Table 1 sit at grade 1.
- Type: conflict for (a) and (c); unsupported inference for (b). Severity: High.
- Smallest fix: under Table 3, high-volume grade-1 classes get the right-target and real-override tests and the override-rate trigger (Change 2). Also amend the wording of 4.5 and revise 6.4.

**A5. The asymmetry premise carries three burdens of proof.**
- Location: Sec. 5; Rec. 2; Abstract.
- Quotations:
  - Sec. 5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
  - Sec. 5: "Where the ordering is not supported at all, the default is grade 1."
  - Rec. 2: "Apply the asymmetry premise in law and procurement only where it has been checked for the domain."
  - Abstract: "An asymmetry premise governs direction"
- Analysis:
  - The first sentence presumes the premise until evidence refutes it.
  - The second requires support, and "at all" suggests that weak support is enough.
  - Recommendation 2 requires a check but does not say what result the check must give.
  - Mixed or weak evidence falls into the gap between these three. Because the premise governs direction, the ambiguity reaches every row that concerns a favourable decision.
- Type: conflict. Severity: High.
- Smallest fix: one burden of proof, under which the premise applies only on positive evidence (Change 3).

**A6. "Reversed" describes a lapse, and a true reversal would contradict Rec. 2.**
- Location: Sec. 5; 6.5; Rec. 2.
- Quotations:
  - 6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
  - Rec. 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."
- Analysis: the stated consequence, that approvals fall to grade 1, is the premise ceasing to apply. A literal reversal would give refusals more automation than approvals, which Rec. 2 forbids.
- Type: conflict (wording). Severity: Medium.
- Smallest fix: replace "reversed" with *does not apply* (Change 3).

**A7. Section 6.5 narrows the harm count and misclassifies the borrower.**
- Location: Sec. 5; 6.5.
- Quotations:
  - Sec. 5, from the sentence quoted in A5: "including harm to third parties"
  - 6.5: "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation."
  - 6.5, from the sentence quoted in A6: "harm to others"
- Analysis:
  - The borrower who takes on debt they cannot carry is the applicant, not a person other than the applicant.
  - Section 5 counts all harm from wrongful approvals, including harm to the applicant, while 6.5 counts only harm to others.
  - The misclassification hides the strongest objection in credit: a wrongful approval can harm the applicant through over-indebtedness, the concern that responsible-lending rules address (own knowledge).
- Type: conflict. Severity: Medium-high.
- Smallest fix: in 6.5, list the applicant's own harm first and separately, and align its harm count with Sec. 5 (Change 3).

**A8. The asymmetry check is a precondition in law with no test, certifier or interval.**
- Location: Rec. 2; Table 1 (favourable approvals row); Sec. 5; Table 2.
- Quotations:
  - Table 1: "Audit; errors correctable; asymmetry premise checked for the domain"
  - Sec. 5: "Table 2 states each condition with a proposed test, the body that would certify it and a proposed re-check interval."
  - Rec. 2, as in A5.
- Analysis: every other precondition has a test, a certifier and an interval. This one has none, although Rec. 2 makes it a precondition in law and procurement.
- Type: conflict (a gap in a table that the text presents as complete). Severity: Medium.
- Smallest fix: add a row to Table 2 (Change 3).

**A9. Favourable decisions under scarcity fall between two rules with different ceilings.**
- Location: 3.1; Sec. 5; Table 1; 6.1.
- Quotations:
  - 3.1: "a scarce programme of nurse outreach and extra attention"
  - Sec. 5: "automated systems may be given more authority over favourable decisions than over adverse ones"
  - Table 1 (ceiling 1): "Deprioritising a patient or withholding scarce care"
  - 6.1: "On its own it does not support authority over deprioritisation or the allocation of scarce care."
- Analysis: selecting a patient for a scarce programme is a favourable decision for the person selected and a withholding of scarce care from those not selected. The first rule permits grade 2, while the second sets grade 1. The paper's own lead medical case falls into this gap, and the harm the paper describes is under-identification for that very programme.
- Type: conflict. Severity: Medium-high.
- Smallest fix: a rivalry clause (Change 3).

**A10. The escalation carve-out conflicts with the paper's own examples.**
- Location: Sec. 1; Sec. 2; 4.6; Sec. 5.
- Quotations:
  - Sec. 5: "A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
  - Sec. 1: "Public agencies score benefit claims and flag families for fraud review."
  - 4.6: "In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
  - Sec. 2: "Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately."
- Analysis:
  - A fraud flag is an escalation that imposes an investigation on a family and feeds the label loop, so it does not cost little when it is wrong.
  - Even protective escalation is not free in a queue with fixed capacity. Moving one case up moves others down, and Table 1 treats that as deprioritisation, at grade 1.
- Type: overstated claim, which also conflicts with Sec. 1 and 4.6. Severity: Medium-high.
- Smallest fix: separate protective escalation from adverse flagging (Change 4).

**A11. Section 6.6's fallback needs the review capacity it assumes is absent.**
- Location: 6.6; Table 1 (medicine escalation row); Sec. 5.
- Quotations:
  - 6.6: "the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review"
  - Table 1 (ceiling 2): "Escalating a case for urgent clinician review", with the conditions "Clinician can override within the workflow; reviews sampled for seeded errors"
- Analysis: escalation is a grade-2 function in Table 1. As such it needs clinicians to review, and it needs all five conditions. A setting without review capacity cannot run it.
- Type: conflict. Severity: Medium.
- Smallest fix: restrict the system to information, or to advice to whoever is available (Change 4).

**A12. The statute exception differs between Table 1 and Rec. 2, and the ceiling column misstates it.**
- Location: Table 1 (credit and welfare rows); Sec. 5 (definition of a ceiling); Rec. 2.
- Quotations:
  - Table 1, credit row, whose ceiling column shows 1: "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit"
  - Table 1, welfare row (ceiling 1): "Welfare denials, debt raising and sanctions"
  - Rec. 2, as in A6.
  - Sec. 5: "A ceiling is the highest grade a decision class may take, given the conditions."
- Analysis:
  - Table 1 grants the statute route to credit only. Recommendation 2 grants it to all adverse determinations. On its words that includes welfare debts and sanctions, the deprioritisation of patients, and even force.
  - The credit row's ceiling column shows 1 although its own conditions allow 2, which contradicts the definition of a ceiling.
- Type: conflict. Severity: Medium, or High if Rec. 2 is read as licensing grade 2 for force.
- Smallest fix: limit Rec. 2's exception to the classes Table 1 lists, and show such ceilings as *1 (2 under statute)*. Decide explicitly whether debt raising and sanctions may ever use the statute route (PD2).

**A13. The triggers do not cover what the paper says they cover.**
- Location: 4.6; Sec. 5.
- Quotations:
  - 4.6: "Two dynamics are missing from a static account of grades."
  - 4.6: "A third dynamic concerns detection."
  - 4.6: "The paper treats them as hypotheses that deployments should monitor, and Section 5 turns them into downgrade triggers."
  - Sec. 5: "These triggers are the working form of the drift risks in Section 4.6."
  - Sec. 5, the last trigger: "and any change to the outcome label"
- Analysis:
  - (a) The count is wrong: two dynamics are announced, then a third appears.
  - (b) Authority creep is covered, by the triggers for shortened windows and near-zero override rates. The label loop is not. In that loop the definition of the label stays the same while the labelled data come from the system's own flags, so the trigger on a change to the outcome label never fires. The subgroup-gap trigger catches the loop only if the loop happens to open a subgroup gap.
  - (c) Detection delay has no trigger at all.
- Type: conflict. Severity: Medium.
- Smallest fix: amend the count, add a label-loop trigger, and handle detection delay with a condition (Change 6).

**A14. A one-grade downgrade cannot work at grade 3 or at grade 1 as written.**
- Location: Sec. 5 (downgrade rule); 6.3; the grade-3 and grade-1 rows of Table 1.
- Quotations:
  - Sec. 5, as in A4: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
  - 6.3: "Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules."
- Analysis:
  - Dropping a defensive envelope or closed-loop dosing to grade 2 means case-by-case review within a window, which 6.3's own argument from speed rules out. The downgrade may be more dangerous than the fault that triggered it.
  - Dropping a grade-1 deployment gives grade 0, but grade-1 deployments have no certifying body to re-certify them.
- Type: conflict. Severity: Medium.
- Smallest fix: fallback modes for grade-3 classes, and a suspension rule for designated grade-1 classes (Change 6).

**A15. Two tests do not fit the grade-3 rows they must license.**
- Location: Table 2 (real override and contestability); the grade-3 rows of Table 1; Sec. 5.
- Quotations:
  - Table 2, real override: "Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors"
  - Table 2, contestability: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time"
  - Table 1: "Defensive engagement of incoming munitions, not persons"
- Analysis:
  - At grade 3 no human reviews individual acts, and in missile defence there is no time to.
  - Defensive engagement of munitions has no affected person to contest it, and review cannot reverse a dose already given.
  - Section 5 requires all five conditions at grades 2 to 4, so these rows cannot be licensed as written.
- Type: conflict. Severity: Medium.
- Smallest fix: Table 3 restates both tests for grade 3 (Change 2).

**A16. Licensing is all-or-nothing, but the ceiling rule is graded.**
- Location: Sec. 5.
- Quotations:
  - Sec. 5, as in A1.
  - Sec. 5: "A deployment is licensed for less than its ceiling wherever its conditions are weakly met."
- Analysis: the conditions are pass-or-fail tests with thresholds set by certifying bodies. "Weakly met" has no operational meaning, so no committee can tell which lower grade applies.
- Type: conflict. Severity: Medium.
- Smallest fix: define "weakly met" (Change 2).

**A17. Answerability is tested by naming, not by the traceability the paper promises, and is self-certified.**
- Location: 4.1; Table 2 (answerability row).
- Quotations:
  - 4.1: "The paper treats traceability as the minimal test of answerability."
  - Table 2, the test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
  - Table 2, the certifier: "Governing body of the deploying organisation"
- Analysis:
  - The test assigns responsibility but does not check that anyone understands the system well enough to act on it, which is what traceability means in the account the paper cites.
  - The deploying organisation certifies itself.
  - A single named person cannot hold design responsibility for a vendor's product, such as the commercial algorithm in 3.1.
  - A scheme like Robodebt, run by a named department under named ministers, could pass this test as written (own knowledge of the scheme; verify).
- Type: conflict (4.1 against Table 2). Severity: Medium; nearer Medium-high, because answerability is the first step of the argument.
- Smallest fix: add traceability to the test and an external spot-check of the named persons (Change 5).

**A18. As defined, the market class covers private algorithmic trading, which Rec. 6 would then prohibit.**
- Location: Sec. 1; Sec. 5; Table 1; Rec. 6.
- Quotations:
  - Sec. 1: "Lenders use models to refuse credit, and trading systems act on prices in milliseconds."
  - Sec. 5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
  - Table 1 (ceiling 1): "Discretionary AI market interventions", with the conditions "Public justification; no unilateral action"
  - Rec. 6: "prohibit discretionary AI market interventions without public justification"
- Analysis:
  - Every trading algorithm chooses when and how to act on prices. Read literally, Rec. 6 prohibits private algorithmic trading without public justification. That is a sweeping claim the paper never argues for, and Sec. 1 treats such trading as given.
  - The phrase "Public justification" suggests the author meant interventions by public authorities.
  - These rows also fall outside the thesis, which concerns determinations about particular persons.
- Type: conflict (scope). Severity: Medium-high.
- Smallest fix: define the class (Change 7, G2).

**A19. The claim that the tests need no further philosophical work conflicts with the paper's account of fairness.**
- Location: Sec. 5; 4.3.
- Quotations:
  - Sec. 5: "The tests are designed so that a hospital committee, procurement office or regulator can apply them without further philosophical work."
  - 4.3: "Fairness is a choice of target and metric, and no metric is neutral."
- Analysis: the right-target test needs a choice of fairness metric, which 4.3 says is a value choice.
- Type: overstated claim. Severity: Low-medium.
- Smallest fix: *without re-deriving the framework; the choice of fairness metric and of thresholds remains a value judgement that the certifying body must make and record.*

**A20. Grade 1 is defined in a way that leaves opaque advice without a grade.**
- Location: Sec. 2; 4.4.
- Quotations:
  - Sec. 2: "The system recommends options with reasons."
  - 4.4: "Without reasons, an override rests on intuition, which is a weak safeguard."
- Analysis: 4.4 discusses systems that advise without reasons. Under the definition in Sec. 2 such systems are not at grade 1, and no other grade fits them.
- Type: conflict. Severity: Low-medium.
- Smallest fix: define grade 1 as recommending options, and treat reasons as part of contestability and real override.

**A21. The abstract calls all five grades "authority".**
- Location: Abstract; Sec. 2.
- Quotations:
  - Abstract: "It distinguishes five grades of authority, from information to autonomous execution"
  - Sec. 2: "Grades 0 and 1 are not authority"
- Type: conflict (terminology). Severity: Low.
- Smallest fix: Change 1.

**A22. Auditing is called the grade-1 role of review.**
- Location: 6.2; Sec. 2.
- Quotation: 6.2: "Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review."
- Analysis: grade 1 is advice on a decision. Reporting disparities across past decisions is information (grade 0), or advice to an auditor. It is not review.
- Type: conflict (terminology). Severity: Low.
- Smallest fix: *it fits grades 0 and 1: informing and advising the people who review human decisions.*

**A23. "One case per domain" does not describe Section 3.**
- Location: Sec. 1; 3.3.
- Quotation: Sec. 1: "Section 3 gives one case per domain"
- Analysis: 3.3 gives three cases: Robodebt, credit scoring and market interventions.
- Type: convention. Severity: Low.
- Smallest fix: *gives cases for each domain*.

**A24. Table 2 appears before Table 1.**
- Location: Sec. 5.
- Quotation: Sec. 5: "Table 2 states each condition with a proposed test"
- Type: convention. Severity: Low.
- Smallest fix: renumber the tables or reorder them.

**A25. The AI Act is cited from a secondary website.**
- Location: References.
- Quotation: "Text consulted at https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/"
- Type: convention. Severity: Low.
- Smallest fix: cite the text in the Official Journal (EUR-Lex), with the article number.

**Checked and found consistent.**
- The counts match: five grades, five conditions, six objections and eight recommendations.
- The abstract's statement of the asymmetry premise matches the first sentence of the premise in Sec. 5.
- 6.4's drop to grade 1 agrees with the one-grade rule for grade-2 deployments.
- Recs. 3 and 4 match Table 2 and the triggers, apart from the seeding issue (P4).
- Rec. 5 matches the military rows of Table 1 and the account of the ICRC position in 3.2.
- Sec. 8's account of its own limits matches the text.
- The Sec. 3.2 scenario is covered by Rec. 5, though not by a row of Table 1.

### B. Claims about the world

These are listed in order of how much the conclusions depend on them. Internal consistency cannot settle any of them. No source was consulted for this analysis; "own knowledge" marks points where I rely on what I know without checking.

**B1. AI cannot carry answerability or hear and reverse a challenge.** The claim carries the argument.
- Location: Sec. 1; 7.2.
- Quotations:
  - 7.2: "AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge."
  - Sec. 1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."
- Support given: Matthias (2004), Sparrow (2007), and Santoni de Sio and van den Hoven (2018), all philosophical arguments.
- Stated more strongly than the support allows: partly.
  - Read as fact, the claim about challenges is false: a system can re-process a case and reverse the outcome. What the paper needs is a normative claim, that a challenge heard only by the system that made the decision does not satisfy contestability, because no one who can be questioned hears it.
  - The claim about answerability is a philosophical thesis. The cited works defend it, but it is contested. From my own knowledge, replies to Sparrow argue that role or institutional responsibility can fill the gap.
  - The paper's own remedy, named institutional accountability, concedes that institutions around a system can supply answerability. The claim therefore does no work beyond requiring that institutional wrapper.
- What would settle it: argument, not data. The paper should engage the strongest replies.
- Type: overstated claim. Severity: Medium-high.
- Smallest fix: restate the claim normatively in Sec. 1 and 7.2.

**B2. Automation bias and complacency.**
- Location: 4.5; Sec. 2.
- Quotation: 4.5: "Supervisors of automated systems tend to over-rely on them, and they monitor less well as reliability rises."
- Support given: Parasuraman and Manzey (2010) and Bainbridge (1983). As far as I know these support the claim.
- Stated more strongly than the support allows: no. The scope is understated instead. My understanding is that automation bias has been studied mainly with decision aids, which is advice (own knowledge).
- What would settle it: the cited review, plus domain studies of clinical and other decision support.
- Type: supported claim with its scope understated. Severity: High, through A4.

**B3. The asymmetry ordering.**
- Location: Abstract; Sec. 5; 6.5; Sec. 8.
- Quotation: Sec. 8: "The asymmetry premise is a values choice with an empirical condition that this paper does not establish."
- Support given: none, as the paper admits.
- Stated more strongly than the support allows: not in Sec. 8. The abstract's "governs direction" does present it more strongly than its support allows.
- What would settle it: evidence for each domain on how reversible each kind of wrongful decision is. For wrongful refusals, that means lost housing and the health effects of denied benefits. For wrongful approvals, it means over-indebtedness, default, recovery of overpayments and losses to third parties.
- Type: unsupported claim, acknowledged as such. Severity: High, through A5.

**B4. A wrong escalation costs little.**
- Location: Sec. 5; quoted in A10.
- Support given: none.
- Stated more strongly than the support allows: yes. The cost depends on whether the flag is protective or adverse, and on review capacity. False alarms can also cause alarm fatigue, which is documented for clinical alarms (own knowledge).
- What would settle it: data on false-positive escalation rates, on how far other cases are displaced in the queue, and on the burden that investigation places on flagged families.
- Type: overstated claim. Severity: Medium-high, through A10.

**B5. Human bias is varied; automated bias is uniform.**
- Location: 6.2.
- Quotations:
  - 6.2: "Human bias is heterogeneous."
  - 6.2: "Automated bias is uniform and scaled."
- Support given: argument only, plus the Obermeyer case for automated bias.
- Stated more strongly than the support allows: partly.
  - Human biases can be systematic and shared across decision-makers.
  - Uniformity also makes automated bias easier to find and fix. My recollection is that the Obermeyer study showed the bias could be much reduced by changing the label, and that its authors worked with the developer to do so (own knowledge; verify in the paper). If so, the paper's own lead case supports the opposing view on whether bias can be corrected.
- What would settle it: the empirical literature on noise and bias in human decisions, and the remediation results in Obermeyer et al.
- Type: overstated claim. Severity: Medium.

**B6. No one can answer for collective harm from a learned policy.**
- Location: Sec. 5.
- Quotation: Sec. 5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
- Support given: none.
- Stated more strongly than the support allows: yes. Firms that deploy trading algorithms are subject to market-conduct rules and have been sanctioned for algorithmic failures. One example is the US SEC's enforcement action after the Knight Capital incident of 2012 (own knowledge; verify). What is hard is attributing a market-wide harm to one learned policy. That is a problem of attribution, not of answerability.
- What would settle it: legal analysis of liability for market conduct in the relevant jurisdictions.
- Type: overstated claim. Severity: Medium.

**B7. Robodebt as a case about AI.**
- Location: title and abstract (scope); 3.3.
- Quotation: 3.3: "It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients."
- Support given: Royal Commission (2023). The description matches what I know.
- The issue:
  - My understanding is that Robodebt was a rule-based process of data matching and income averaging, not machine learning (own knowledge; verify). The paper's scope is AI systems, so its welfare lesson is really about automated decision-making in general. That strengthens the argument, by showing the failures need no machine learning, but only if the paper says so.
  - I also recall that the Royal Commission found the scheme unlawful and criticised how officials handled legal advice about it. That bears on A17 (own knowledge; verify).
- What would settle it: the Royal Commission's report.
- Type: a matter of convention (scope). Severity: Medium.

**B8. The Obermeyer case.**
- Location: 3.1; 4.3; 6.1; 6.2.
- Quotation: 3.1: "Because, at the same level of illness, less had been spent on Black patients, the proxy systematically under-identified them (Obermeyer et al., 2019)."
- Support given: the cited study. The description matches what I know.
- Opportunity:
  - The paper could quote the study's own figures for the size of the disparity and for the effect of relabelling.
  - It could also note that the score was used to identify the highest-risk patients for the programme automatically, if that is right (my recollection; verify). That would put that use at grade 2 or 3 and make the case directly about authority, not only about advice.
- Type: supported claim. Severity: none; this is an opportunity.

**B9. Credit applicants often cannot see the model's reasons.**
- Location: 3.3.
- Quotation: 3.3: "the model's reasons are often unavailable to the applicant"
- Support given: none.
- Stated more strongly than the support allows: in some jurisdictions. My understanding is that:
  - US law requires lenders to state the principal reasons for an adverse action (ECOA and Regulation B);
  - EU data-protection law gives rights concerning automated decisions, under Article 22 of the GDPR and the CJEU's 2023 SCHUFA judgment on credit scores (own knowledge; verify).

  Whether the reasons given are usable is a separate, empirical question.
- What would settle it: the legal sources, and empirical studies of adverse-action notices.
- Type: unsupported, and overstated for some jurisdictions. Severity: Low-medium.

**B10. Lending happens at high volume.**
- Location: 3.3.
- Quotation: 3.3: "Lending decisions are typically made in high volume, which makes individual review costly"
- Support given: none. The claim is plausible.
- What would settle it: data from industry or regulators.
- Type: unsupported but plausible. Severity: Low. It carries the reasoning of 6.4, so it should be cited.

**B11. Military systems classify faster than staff can check.**
- Location: Sec. 1.
- Quotation: Sec. 1: "Armed forces use systems that classify objects and people faster than staff can check them."
- Support given: none.
- Note: the claim is plausible. Investigative reports in 2024 about AI-assisted target recommendation in the Gaza war alleged very brief human review per target, and the Israeli military disputed that characterisation (own knowledge; contested; verify carefully). If substantiated, such a system is formally at grade 1, and it would be a direct real-world case of the grade-1 rubber stamp in A4.
- What would settle it: official sources, investigative reporting and independent inquiries. The paper should present the matter as contested.
- Type: unsupported claim. Severity: Low-medium.

**B12. Defensive envelopes engage munitions, not persons.**
- Location: Table 1; Rec. 5.
- Quotation: Table 1: "Defensive engagement of incoming munitions, not persons"
- Implicit claim: that the system can reliably tell munitions from crewed platforms.
- Support given: none.
- Note: my recollection is that in 2003 Patriot batteries operating with a high degree of automation shot down two allied crewed aircraft. Those incidents are often cited in work on automation bias (own knowledge; verify).
- What would settle it: the official investigations of those incidents, and test data for the system.
- Type: unsupported (implicit) claim. Severity: Medium-high, together with G1.
- Smallest fix: add the condition that the envelope is tested against crewed and civil aircraft.

**B13. Collective harms are detected late.**
- Location: 4.6.
- Quotation: 4.6: "For collective harms, such as market failures or some military effects, the delay between harm and detection is longer, which weakens the requirement that errors be correctable."
- Support given: none, and "longer" has nothing to compare against.
- Stated more strongly than the support allows: yes, and it confuses detection with attribution.
  - A market crash is usually detected at once. What takes months is diagnosis and attribution; official reports on the 2010 flash crash came months later (own knowledge; verify).
  - The delay does not weaken the requirement; it makes the requirement harder to meet.
- What would settle it: post-event reports on market disruptions, and military assessments of battle damage and civilian harm.
- Type: overstated claim. Severity: Low-medium.
- Smallest fix: *attributing a collective harm can take months, which makes the requirement that errors be correctable harder to meet.*

**B14. Lethal decisions cannot be contested.**
- Location: 4.2.
- Quotation: 4.2: "In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all."
- Support given: the claim is true as stated. But for that very reason contestability cannot distinguish human from machine decisions in lethal force, because the person killed can contest neither.
- What would settle it: argument, together with the law on review of weapons (Article 36 of Additional Protocol I, from my own knowledge) and on accountability.
- Type: overstated as support for the military ceiling. Severity: Medium.
- Smallest fix: Change 8.

**B15. The ICRC and AI Act descriptions.**
- Location: 3.2; 6.3; 6.4.
- Quotations:
  - 3.2: "The recommendation is not binding law, and states hold differing positions."
  - 6.3: "The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021)."
  - 6.4: "The EU's AI Act requires that high-risk systems be designed so that natural persons can effectively oversee them (European Union, 2024), but a legal requirement does not make oversight real."
- Support given: citations. The descriptions match what I know of the ICRC's 2021 position and of Article 14(1) of the AI Act.
- Further points from my own knowledge (verify both):
  - Article 14 names automation bias explicitly, which would strengthen 6.4.
  - The AI Act excludes military uses from its scope. The paper should say so, so that readers do not assume the Act covers the military rows.
- Stated more strongly than the support allows: only in 6.3, which calls a recommendation a coordinated response when it is a proposal for one.
- Type: supported claims; 6.3 is overstated. Severity: Low.
- Smallest fix: *a proposal for coordinated limits of this kind*.

### C. Coverage gaps found by the lenses

These are not audit findings, because the text does not contradict itself on them. They are what a referee in each field would ask about first.
- **G1. Military** (Systems-thinking, Critical): offensive engagement of military objects that are crewed, occupied or near persons has no row in Table 1 and no recommendation. In practice this is the most contested class.
- **G2. Markets** (Analytical, Pragmatic): the scope of the market rows, as in A18.
- **G3. Economic allocation** (Creative, Systems-thinking): the paper does not address rule-level authority, meaning AI that sets eligibility thresholds, budget formulas or scores for scarce goods. The question asks about economic allocation directly.

### D. Coverage of the audit

- **Checked:**
  - every definition: authority, grades 0 to 4, the test separating grades 2 and 3, the bundle of permissions, and a decision about a person;
  - every test and certifier in Table 2, every row of Table 1 and every trigger;
  - the asymmetry premise everywhere it appears: Abstract, Sec. 5, Table 1, 6.5, Rec. 2, 7.2 and Sec. 8 (7.2 agrees with Rec. 2 that the premise must be tested before use);
  - each objection reply against the definitions and tables, and each recommendation against Tables 1 and 2.
- **Claims about the world:** checked only against my own knowledge.
- **Not checked:**
  - bibliographic details beyond recollection: the entries match my memory of the works, but page ranges and URLs were not verified;
  - whether each cited work says exactly what the paper attributes to it, beyond its main thesis;
  - the quality of the prose;
  - jurisdictions other than those named.

## Lens summaries

Each lens was run as its own stream and did not use another lens's conclusions. Steps are labelled evidence (E), assumption (A) or inference (I). This file is plain Markdown and cannot show colour, so each mind map is headed by its lens name instead. All five lenses come from the same model.

### 1. Analytical lens

**Reasoning chain**
1. (E) The paper's apparatus has four parts (grades, conditions, ceilings and triggers) and one premise that sets direction (the asymmetry premise). The thesis, however, is stated in another vocabulary, "final authority", which appears in the abstract and Sec. 1 and is never mapped to a grade.
2. (E, then I) Three passages fit together badly. Grade 4 is defined by limits that are absent or set by the system itself. The bounded-delegation test requires limits written before operation. Section 5 requires all five conditions at grades 2 to 4. It follows that no grade-4 licence is possible, and that the protective stop, with limits set by humans and countermand at once, is grade 3 by definition (A1).
3. (I) Once "final authority" is mapped to grades and the stop reclassified, the thesis can be stated without exception, and every row of Table 1 can be checked against it. That check is in "Check of the recommendation".
4. (E) The conditions apply at grades 2 to 4, yet Section 4's failures are said to arise at grades 0 and 1 as well. Quantification: Table 1 has 12 rows.
   - Six are at grade 1: deprioritising, treatment selection, recommending engagement, credit refusals, welfare denials and discretionary market interventions.
   - Two are at grade 2, three at grade 3 and one at grade 4.
   - (I) Half the rows, including every adverse, lethal and allocative one, therefore lie outside the conditions and the triggers.
5. (E, then I) The asymmetry premise appears in seven places (Abstract, Sec. 5, Table 1, 6.5, Rec. 2, 7.2 and Sec. 8) and carries three different burdens of proof (A5). Where evidence is mixed, the direction of every favourable-decision row is therefore indeterminate.
6. (I) Section 5 states three rules from which the ceilings follow:
   - a small decision space with limits set in advance and a reliable stop gives grade 3;
   - favourable or cheaply corrected outcomes, or review that fits the workflow, give grade 2;
   - adverse, value-laden or forceful decisions against persons give grade 1.

   Table 1 follows these rules except in two places: the protective stop, and favourable decisions under rivalry, which the rules do not place. Presenting the rules as the derivation of Table 1 would make the table auditable.

**Key concepts with weights**
- Which conditions apply at which grade, 0.9: this drives the largest cluster of conflicts and decides whether grade 1 is protected.
- Mapping "final authority" onto the grades, 0.8: the thesis cannot be tested against Table 1 until this is done.
- Burden of proof for the asymmetry premise, 0.75: it sets the direction of every favourable-decision row.
- Coherence of grade 4, 0.6: a small fix, but it touches the thesis's only stated exception.
- Rules from which the ceilings follow, 0.5: they make Table 1 checkable instead of a list of judgements.

**Mind map**
- Analytical lens
  - Thesis vocabulary
    - "final authority" is never mapped to a grade
    - Grade-3 dosing reads as a counter-instance
    - Restate the thesis in grade terms
  - Conditions and grades
    - Conditions apply at grades 2 to 4 only (Sec. 5)
    - 6 of the 12 rows sit at grade 1
    - No grade-4 licence is possible
  - Asymmetry premise
    - Three burdens of proof
    - "reversed" means that the premise lapses
    - No certifier
  - How the ceilings are derived
    - Three rules in Sec. 5
    - Two cases the rules do not place: the stop, and favourable decisions under rivalry

### 2. Creative lens

**Reasoning chain**
1. (I) Reframe the core variable. The market rows already turn on whether a rule is pre-committed and public or chosen by a learned policy. The same distinction sorts medicine and welfare: a published, deliberated allocation rule applied by a system is different from a system's learned discretion. (A) An analogy, assuming it transfers: in organ allocation, a scoring rule set by a public process ranks candidates and clinicians decide whether to accept (own knowledge).
2. (I) Reframe rivalry. When the pool is fixed, approving A and refusing B are one act seen from two sides, as in musical chairs. A favourable/adverse asymmetry without a rivalry clause can pass off allocation as approval.
3. (I) Alternative structure: attach conditions to failure modes rather than to grades. Contestability follows the affected person, real override follows the human reviewer, and bounded delegation follows the envelope. A matrix of conditions by grade follows directly.
4. (A) Analogies, assuming they transfer:
   - safety-critical engineering scales the assurance it requires to the severity of failure, for example the assurance levels for aviation software (own knowledge);
   - drug approval stages the evidence it requires before wider use.

   (I) Both suggest a route upwards, from shadow deployment to trials to a higher ceiling, which the paper's downgrade-only triggers lack.
5. (I) Robodebt suggests a test the paper lacks: an automated adverse determination must not shift the burden of proof to the affected person.
6. (I) Reframe economic allocation to include authority over rules, meaning AI that writes or tunes thresholds, formulas and scores. That is where allocation happens at scale, and the paper is silent on it.

**Key concepts with weights**
- Rule-level against case-level authority, 0.75: it unifies the market rows with medicine and welfare, and fills the allocation gap.
- Rivalry under scarcity, 0.7: it exposes a hidden flaw in the asymmetry premise.
- Conditions attached to failure modes, 0.7: a structure that resolves the conflicts about which conditions apply at which grade.
- A route upwards through staged evidence, 0.55: a constructive answer to the lives-saved objection.
- A test against reversing the burden of proof, 0.4: a strong lesson from Robodebt, but it overlaps with contestability.

**Mind map**
- Creative lens
  - Reframe the axis
    - A pre-committed public rule against learned discretion
    - Analogy: scores for organ allocation
    - Fills the economic-allocation gap
  - Rivalry
    - Under scarcity, approving A refuses B
    - Musical chairs
  - Restructure the conditions
    - Each condition follows its failure mode
    - A matrix of conditions by grade
  - A route for evidence
    - Shadow deployment, then trials, then a change of ceiling
    - Analogies: assurance levels; drug approval phases
  - A new test
    - The burden of proof never shifts to the affected person (Robodebt)

### 3. Critical lens

**Reasoning chain**
1. (E: Sec. 1, Sec. 2, 7.2; then I) The first step of the argument says that an AI system cannot supply answerability. Yet the paper's own remedy supplies answerability through named institutions. The claim therefore does no independent work. The real question is which conditions can be met for which decision classes, and a referee will press this.
2. (E: 3.1, 6.2; own knowledge) The strongest counterargument is that bias in an algorithm is easier to find and fix than bias in people. The paper's own lead case was found by audit and, as I recall, reduced by relabelling. The reply in 6.2 answers a weaker version.
3. (A: about human factors; then I) The grade-1 safe harbour fails at volume. A named decision-maker facing thousands of credit or welfare cases defers to the recommendation, and because the tests stop at grade 2 the failure would be invisible. The cost falls on claimants and borrowers. They are the group 3.3 has in mind when it says the adverse decision was imposed "against people least able to contest it".
4. (E: Sec. 5, 6.5, Sec. 8; then I) The asymmetry premise is unestablished. In credit its ordering is doubtful even for the applicant alone, because of over-indebtedness. Under scarcity, approvals are rival. The premise is plausible mainly for entitlements that are not rival.
5. (E: Table 2; own knowledge of Robodebt) Answerability by naming, plus self-certification, could be passed by a scheme like Robodebt, which ran for years under named institutions.
6. (I) The framework has a status-quo bias: there is a route down through the triggers but none up. The costs of restraint fall on under-resourced patients (6.6) and, in the military case, on forces whose adversaries do not restrain themselves. The paper names the first cost but not the second.

**Key concepts with weights**
- Grade 1 as a rubber stamp at volume, 0.9: the paper's own strongest objection reappears where its most sensitive decisions sit.
- Fragility of the asymmetry premise, 0.75: it is unestablished and has two specific ways of failing.
- Bias in algorithms can be corrected, 0.6: the strongest form of objection 6.2, supported by the paper's own case.
- Answerability as a formality, 0.6: naming plus self-certification can be passed by bad schemes.
- Status-quo bias, 0.5: there is no route up, and the costs of restraint are borne unevenly.

**Mind map**
- Critical lens
  - Hidden assumptions
    - That AI cannot be answerable, when institutions can be
    - That grade 1 is safe
  - Strongest counterarguments
    - Bias in algorithms is easier to fix (Obermeyer)
    - Lives saved, with no route for ceilings to rise
  - Conditions under which the leading view fails
    - High volume turns grade 1 into a rubber stamp
    - A Robodebt-type scheme passes the answerability test
  - Who bears the cost
    - Claimants and borrowers
    - Under-resourced patients
    - Forces facing adversaries that do not restrain themselves

### 4. Systems-thinking lens

**Reasoning chain**
1. (E: 4.6, Sec. 5; then I) The paper names two feedback loops, authority creep and the label loop, and one delay, detection. The triggers act on creep. The label loop, however, runs with the definition of the label unchanged, so the trigger for a change to the outcome label never fires. The loop most likely to entrench bias in welfare and fraud systems goes unwatched.
2. (I) Downgrades have second-order effects of their own.
   - Moving a grade-3 function such as closed-loop dosing or missile defence to grade 2 forces case-by-case review that the function cannot support. The downgrade may create more risk than the fault that caused it.
   - Measures that trigger downgrades invite gaming. Reviewers may override for show to keep their rate above near zero, and they may learn to spot seeded cases (Goodhart's law).
   - (A) This assumes such gaming happens in practice.
3. (I) Escalation imposes costs on the system around it.
   - In a queue with fixed capacity, false-positive escalations use up reviewer time, push other cases down and breed alarm fatigue, which in turn feeds the complacency the paper fears. (A) This assumes alarm fatigue applies here.
   - Adverse flags feed the label loop directly.
4. (I) Authority creep can also happen at grade 1. When staff are short, reviewers accept recommendations, so the effective grade rises with no formal change and no trigger. Delays matter here too. At scale, the harms of adverse determinations can take years to surface; Robodebt ran for several years before it was stopped (own knowledge; verify).
5. (I) The domains are coupled.
   - A credit refusal or welfare denial affects housing and health, so economic decisions feed into medical ones.
   - Economic allocation at scale works through rules such as thresholds and formulas. There the harms are collective, and the paper's grades, which apply to decisions about individuals, do not reach them.
6. (I) International dynamics. Military restraint depends on coordination. If coordination fails, competitive pressure pushes militaries towards authority creep, and the paper offers no fallback. One could rest on states' own interest in avoiding fratricide and unintended escalation. (A) This assumes those interests are strong enough to motivate limits a state adopts alone.

**Key concepts with weights**
- The label loop has no trigger, 0.8: the loop most likely to entrench bias goes unwatched.
- Authority creep at grade 1, 0.75: the creep the paper fears, in the place it does not look.
- The cost escalation imposes on capacity, 0.65: the carve-out for escalation is not free.
- Second-order effects of downgrades, and gaming, 0.55: the triggers can create risk and invite gaming.
- Rule-level allocation and coupling between domains, 0.55: this is where economic allocation actually happens.

**Mind map**
- Systems-thinking lens
  - Feedback loops
    - Authority creep: covered at grades 2 and 3, missed at grade 1
    - The label loop: not covered
    - Gaming of the trigger measures
  - Delays
    - Detection against attribution
    - Years before harms from adverse decisions at scale surface
  - Second-order effects
    - Downgrading a grade-3 function can add risk
    - False-positive escalations displace other cases
  - Downstream and coupled systems
    - Credit and welfare feed housing and health
    - Allocation rules set collective outcomes
    - Coordination between states on military restraint

### 5. Pragmatic lens

**Reasoning chain**
1. (E: Sec. 1; then I) The paper says it is written for "hospital governance committees, procurement officers, regulators and ethics boards". For these readers the operative content is Tables 1 and 2, the triggers and the recommendations. Inconsistencies there will block adoption sooner than gaps in the philosophy: who certifies, which conditions apply at which grade, what "weakly met" means.
2. (I) Feasibility. Some certifiers that Table 2 names, such as "Independent oversight body or regulator" and "Safety authority for the domain", may not exist in a given sector or country. The paper should say what happens then. The cleanest default is that the decision class stays at grade 1.
3. (E: Rec. 8; then I) Cost. Recommendation 8 admits real costs but gives no orders of magnitude. Seeded review, quarterly audit and publication of results by subgroup (which raises privacy problems for small groups) need at least a list of what drives the cost, and an admission that the costs are unquantified.
4. (I) The tests must themselves be safe. If known errors are seeded into live review, a seed the reviewer misses becomes a wrong outcome for a real person. Seeded cases must be synthetic or be intercepted before any outcome takes effect, and neither Table 2 nor Rec. 4 says so. This is finding P4.
5. (E: own knowledge) Existing law already encodes parts of the scheme: Article 22 of the GDPR and the SCHUFA judgment for credit; US adverse-action notices; Article 14 of the AI Act; legal review of weapons under Article 36 of Additional Protocol I; and DoD Directive 3000.09. (I) Mapping the grades onto these instruments makes the paper usable at once and tests some of its claims (B9). Every item must be verified first.
6. (I) Reversibility and order of work. Most of the recommendations are policy choices that can be reversed; those on lethal force cannot. The order of revision that gives the most value soonest:
   - definitions and the thesis;
   - Table 3;
   - the asymmetry premise;
   - escalation;
   - answerability;
   - triggers;
   - coverage gaps;
   - objections;
   - law;
   - conventions;
   - then the audit again.

**Key concepts with weights**
- Whether the operational tables can be adopted, 0.85: the intended readers act on the tables, not on the philosophy.
- Safety of the tests themselves (seeding), 0.6: a test that can harm people undercuts the paper's ethics.
- Mapping onto existing law, 0.6: it makes the paper usable at once and checks some of its claims.
- Whether certifiers exist, 0.55: a missing certifier silently voids a condition.
- Honesty about cost, 0.45: Recommendation 8 is right but thin.

**Mind map**
- Pragmatic lens
  - Who will use the paper
    - Committees, procurement officers and regulators
    - They act on Tables 1 and 2 and the triggers
  - Feasibility
    - A missing certifier means defaulting to grade 1
    - "Weakly met" needs a definition
  - Cost and safety
    - List the cost drivers, even if unquantified
    - Seeded cases must be synthetic or intercepted
  - Existing law
    - GDPR Art. 22, the SCHUFA judgment, ECOA
    - AI Act Art. 14; Art. 36 of Additional Protocol I; DoD Directive 3000.09
  - Next actions
    - Order of revision
    - Run the audit again

## Transparency report

**Framing.** The question asks which revisions would make this paper the most defensible treatment of whether AI should hold decision authority in medicine, military force and economic allocation, and how far its central recommendation can be trusted.
- Goal: a revision plan in order of priority, and a calibrated confidence in the paper's central recommendation.
- Constraints:
  - keep the paper normative, and keep its direction unless a defect forces a change;
  - prefer the smallest fix;
  - add no evidence that cannot be verified;
  - no web search, which this task did not permit.
- Stakeholders:
  - the author;
  - the intended readers: committees, procurement officers, regulators and ethics boards;
  - the people subject to the decisions: patients, claimants, borrowers, civilians and combatants;
  - deployers and vendors;
  - states and militaries;
  - referees.
- A good answer must:
  - rank defects by severity, with locations and exact quotations;
  - give fixes that create no new conflicts;
  - test the paper against the strongest objections;
  - separate values from facts;
  - give a calibrated confidence, with scores by part.

**Assumptions**
1. "Strongest defensible" means the most robust to expert criticism across philosophy, law, medicine, military ethics and economics. It does not mean the most persuasive, the most permissive or the most restrictive.
2. The author wants to keep the thesis unless the analysis shows it cannot be defended.
3. The text supplied is the whole paper, with no appendices.
4. "Economic allocation" in the question maps onto the paper's economy section (welfare, credit and markets), plus the rule-level allocation the paper omits (G3).
5. The "central recommendation" is the thesis in the abstract and Sec. 1, together with the ceilings in Table 1 and the five conditions. The eight recommendations in 7.1 are its operational form.
6. My knowledge of law, cases and literature dates from my training and was not checked against sources here.

**Which lens drove which part of the recommendation**
- Analytical: Changes 1 and 2 (definitions, the thesis and Table 3), the burden-of-proof part of Change 3, and part scores A and F.
- Creative: the rivalry clause in Change 3, the subsection on rule-level authority (G3, Change 7), the evidence route in Change 8, and the structure of Table 3 (conditions attached to failure modes).
- Critical: the stronger replies to objections in Change 8, the answerability fix in Change 5, the correction about harm to the applicant in Change 3, and part scores D and E.
- Systems-thinking: the repairs and fallbacks for the triggers (Change 6), the split of escalation (Change 4) and the military fallback for the case without coordination (PD3).
- Pragmatic: the rule on seeded cases (Change 6), the default where no certifier exists (Change 5), the legal mapping (Change 9), and the order of the changes and next steps.
- The audit: it grounds the High findings (A1 to A5), which set the order of priority.

**Weighted down or set aside, and why**
- A full restructuring around rule-level authority (Creative). Set aside in favour of one subsection. The smallest change that fixes the problem is preferred, and the existing structure works once repaired (PD4).
- A sixth condition against shifting the burden of proof to the affected person (Creative, weight 0.4). Folded into contestability and the Robodebt discussion rather than added, so as not to enlarge the set of conditions.
- Specific figures, such as the size of the Obermeyer disparity and the Robodebt settlement and dates. Not inserted, because I could not verify them here. The paper should take them from the sources.
- The charge of circularity (N1). Reduced to drafting advice after a closer reading.
- The analogies from aviation assurance and drug approval. Used only to motivate an evidence route, not as evidence.
- Contested reporting on military targeting (B11). Mentioned only as a contested matter to verify. No finding relies on it, and A4 stands on the text alone.
- Formatting of citations other than the AI Act source. Not reviewed in detail.

**Confidence and its drivers.**
- Overall confidence in this recommendation: 68/100.
  - It rests on internal conflicts that can be checked against exact quotations, and on changes tested against every passage they touch.
  - It is held down by values choices that remain open, by external claims I could not verify, and by the fact that all five lenses come from one model.
- The paper's central recommendation as written: about 60/100. By part:
  - core direction: 75;
  - adverse determinations default to grade 1: 60;
  - the asymmetry premise: 40;
  - the machinery: 30 as written, about 50 after revision.

**What this reasoning cannot establish**
- Whether the asymmetry ordering holds in any domain. That needs data for each domain.
- Whether grade-1 review at volume does better or worse than grade 2 with seeded-error testing. That needs empirical study.
- Whether an AI system can be answerable in a morally relevant sense. That is a contested philosophical question.
- What the law currently requires in each jurisdiction. That needs legal review.
- Whether the revised paper would satisfy actual referees in each field.
- Independent confirmation of the convergence zones. The five lenses are one model, so their agreement is not independent verification.

**What to verify with sources, data or experts**
1. The report of the Royal Commission into the Robodebt Scheme (2023):
   - the scheme's technical character (rule-based, not machine learning);
   - its findings on lawfulness and on how legal advice was handled;
   - how long the scheme ran.
2. Obermeyer et al. (2019):
   - the size of the disparity;
   - the remedy by relabelling;
   - whether and how the score was used to enrol patients automatically.
3. The EU AI Act:
   - the text of Article 14, including its reference to automation bias;
   - the exclusion of military uses from its scope;
   - the citation in the Official Journal.
4. Article 22 of the GDPR, and the CJEU's 2023 SCHUFA judgment on credit scoring.
5. The US rules on adverse-action notices (ECOA and Regulation B), and any regulator guidance on reasons given for complex models.
6. Article 36 of Additional Protocol I, and US DoD Directive 3000.09 in its current version.
7. The Patriot incidents of 2003 involving crewed aircraft, and the official findings on them.
8. The enforcement action after the Knight Capital incident of 2012, and the rules on algorithmic trading in the relevant jurisdictions.
9. The official reports on the 2010 flash crash, and how long diagnosis took.
10. The 2024 reporting on AI-assisted targeting in the Gaza war, and the responses to it. This matter is contested.
11. The human-factors literature on automation bias with decision aids, and on alarm fatigue.
12. The bibliographic details of every reference in the paper.

The experts to consult are listed at the top of this report and under "Top next steps".

**What the author still has to decide.** These are values choices. The analysis does not settle them by declaring one side wrong.
- Whether "final authority" is meant narrowly (grade 4 only) or broadly (the two variants of Change 1).
- How to weigh access against protection in high-volume and low-resource settings (PD1).
- Whether any adverse classes, such as debt raising, sanctions and force, are barred from the statute route (PD2).
- What position to take on offensive engagement of crewed or occupied objects (G1), and what to recommend if military coordination fails (PD3).
- Whether to keep the asymmetry premise at all, or only for named classes that are not rival (Change 3).
- Whether every ceiling should move with evidence, or whether some, such as the ceiling on force, are fixed by principle (CZ5).
- Whether to include rule-level allocation or to exclude it explicitly (G3).

This analysis is meant to support the author's decisions, not to make them. It is not legal, medical, military or financial advice. The tiers should be reviewed by the qualified people named at the top of this report before anyone relies on them.

