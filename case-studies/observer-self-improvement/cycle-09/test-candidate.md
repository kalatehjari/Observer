Model: claude-opus-5-5

# Observer analysis: revising the graded-authority paper

## Summary

**Question as framed.** How should the paper be revised so that it is the strongest defensible account of whether AI systems should hold decision authority over medicine, military force and economic allocation, and how far can its central recommendation be trusted? Here "strongest defensible" means most likely to survive hostile but fair expert review, not most persuasive.

**Recommendation.** Keep the paper's tiered architecture and the direction of its thesis, and make five kinds of change:
- Extend the paper's protections to grade 1, where its main safeguard sits.
- State the premise the grade-1 ceilings rest on, and defend it against the strongest rival model.
- Repair the grade definitions so they classify the paper's own cases.
- Measure "favourable" decisions and escalation against a stated baseline.
- Let ceilings move on evidence, and test them on authorised successes as well as failures.

Then audit the revised version again. Steps R1 to R15 below give the detail.

**Confidence.**
- This revision plan: **68** overall. By part: textual repairs 90, substantive additions 68, new external cases 80. Fully reversible.
- The paper's central recommendation: **40** as written, and **60** for its core direction once repaired. By part, after repair:
  - no AI authority above grade 1 over force against persons: 75;
  - adverse determinations about persons at grade 1, with conditions: 60;
  - bounded grade-3 delegation for functions with a fixed operating envelope: 70;
  - grade 2 for additive approvals: 45;
  - market rows, once scoped: 40.
- Reversibility: rules can be revised. But wrongly granting authority and wrongly withholding a service both cause harm that cannot always be undone.

**Main divergence.** Precaution against access (D1). Strict ceilings protect against errors that no one can detect or contest. Where review capacity is absent, they also withhold imperfect service. This is a values choice for the authors, not a factual dispute to settle.

**Most serious problems**, high first:
1. F01 (high): grade 1 carries the central safeguard, yet no condition, test or trigger applies to it. §5, Table 1.
2. F02 (high): §4.5 limits automation bias to grades above advice, contradicting §2 and the paper's own source. §4.5.
3. F03 (high): the grade-1 ceilings rest on an unstated premise, and the rival model (an automated decision plus human review on request) goes unanswered. §2, §5, §7.2.
4. F04 (high): grade-2 escalation conflicts with grade-1 deprioritisation when capacity is scarce, and the Obermeyer harm was a missed escalation. Table 1, §5.
5. F05 (high): there is no class for diagnostic or screening decisions, and the ceilings are tested only on failures. Table 1, §3.
6. F06 (high): there is no route for raising a ceiling, so §6.1's claim that the question is testable fails for classes held at grade 1. §5, §6.1.
7. F07 (medium): the grade-3 and grade-4 definitions leave the paper's own military case unclassified. §2, §3.2.
8. F08 (medium): the grade-4 protective stop is grade 3 by the paper's own definitions, and no grade-4 system can meet the conditions. Table 1, §5.
9. F10 (medium): the asymmetry premise is stated in three forms that do not agree. §5, §6.5.
10. F16 (medium): the volume argument for keeping credit refusals at grade 1 does not follow. §6.4.

This analysis is not legal, medical, military or financial advice. Before anyone relies on the revised tables, three experts should test them: a clinical ethicist or health regulator, an international humanitarian law specialist, and a credit or social-security regulator.

## Recommendation

Revise the paper rather than restructure it. Each step names the findings it closes.

R1. Restate the thesis in defined terms: AI should hold no authority above grade 1 over adverse determinations about particular persons or over force against persons. Higher grades apply only to bounded, additive or protective functions that meet the conditions. Define "final" or drop it (F09).

R2. State the premise behind the grade-1 ceilings: an adverse determination needs a human who can weigh the person's situation before it takes effect. Link it to §4.2. Add a seventh objection that answers the rival model (an automated decision plus human review on request), domain by domain (F03).

R3. Correct §4.5 so that automation bias covers advice. Add a table to §5 showing which conditions apply at each grade: grade 1 gets right target, real review and contestability. Define "effective grade" and apply the triggers to it (F01, F02, F18, F19).

R4. Define a baseline in §2: the pathway the person would have without the system. Allow grade 2 only for additive outputs, audit missed flags by subgroup, and classify any flag that allocates a capped resource as allocation of scarce care (F04, F11, F30).

R5. Add a medicine class for screening and diagnostic decisions, and choose and defend its ceiling. Test it on the authorised autonomous retinopathy-screening case once that case is checked against primary sources (F05).

R6. Add a rule for raising a ceiling. It should state the evidence required, who decides, and a sunset. The evidence: a prospective or silent-mode evaluation, with subgroup error, against the outcome the decision is for. Point §6.1 to the rule (F06).

R7. Separate grades 3 and 4 by one test: can a human halt the system in time? Move the protective stop to grade 3, and state that grade 4 is never licensed (F07, F08).

R8. State the asymmetry premise once, counting the harm that wrongful approvals do to the applicant and to others. Replace "reversed" with "withdrawn", and correct §6.5's sentence about the borrower (F10, F12).

R9. Make answerability trace responsibility, not just name a person. The named person knew the validated envelope, receives the monitoring data and can halt the system. Answer the scapegoat objection in §4.1 (F13).

R10. Strengthen the triggers:
- Add triggers for label loops and for detection delay.
- Send trigger data to the external certifier.
- Require a tested fallback, and allow suspension where the next grade down is unworkable.
- Keep seeded errors synthetic, or intercept them before they take effect (F14, F15, F20).

R11. Scope the market rows to interventions by public authorities, or defend the wider claim. Narrow the claim that no one can answer for market harm, and say how the conditions apply to collective decisions (F24, F25, F26).

R12. Align the military text:
- Relabel the row on persons.
- Make §6.3 and Rec 5 say that force against persons gets no grade above 1, and that the defensive row covers "incoming munitions" only.
- Require validated discrimination between munitions and crewed aircraft.
- Take a position on systems that target military equipment rather than people (F21, F22, F23).

R13. Put the burden of proof on the deployer in the contestability test. Fix the remaining medium-severity conflicts and overstatements in Rec 2, §6.4, §6.1, §6.2 and §3.3 (F16, F17, F27, F28, F29, F31).

R14. Make the low-severity edits in one pass (F32 to F52).

R15. Audit the revised paper again, because these steps change definitions, tables and replies together. Then have the three domain experts named in the summary test the tables.

**If the authors will not defend the premise in R2.** A smaller fix is available: stop saying that the conditions "yield" the ceilings (§7.2), and present the ceilings openly as values judgements resting on §4.2. The cost is that the rival model becomes the first objection a referee will raise.

**What would change this recommendation.**
- If the authors want a short position paper rather than a framework for certifiers, R3, R6 and R10 can shrink to statements of principle. R1, R2, R4, R5 and R7 still stand.
- The authors may decide, as a matter of values, that every adverse determination needs a prior human decision however reversible it is. Then R2 becomes a single argument from §4.2, and R5 must argue against the authorised screening use rather than accommodate it.
- If evidence shows the grade-1 conditions cannot be met at volume in credit or welfare, prefer this design: automate approvals only, and have a human decide every non-approval. It beats grade-1 review of every case.
- If an item resting on my own knowledge fails verification, drop that example and keep the structural fix.

**Top next steps.** Do R7 and R3 first, because every other step relies on the repaired grades. Then do R2 and R4, then R5 and R6, then R15.

### Check of the recommendation

Each step was tested against five constraints from the framing:
- (a) the paper stays a normative framework that committees and regulators can use;
- (b) its thesis and architecture are kept unless the audit shows they fail;
- (c) no unverified claim is added;
- (d) the smallest fix is preferred;
- (e) values choices stay with the authors.

Results by step:
- **R1** narrows wording and adds no claim. It creates a new conflict unless the Abstract, §1 and §7.2 change together. It passes with those edits.
- **R2** adds one objection and its reply. Its legal anchor, GDPR Article 22, comes from my own knowledge and must be verified before it is cited (c). A smaller fix exists (see "If the authors will not defend the premise in R2" above), at the cost noted there.
- **R3** is the largest addition: one table that closes four findings. It could conflict with §2's "Grades 0 and 1 are not authority". To avoid that, the table must present the grade-1 requirements as conditions on relying on advice, not as a licence of authority. §5 must also say what a one-grade downgrade from grade 1 means.
- **R4** adds one definition and edits two rows. It agrees with §2's existing rule that "the grade of a decision class is set by the most consequential permission it carries". The baseline must be defined as the pathway in place before deployment, so that a deployer cannot pick a convenient one.
- **R5** adds one row and one external case. Excluding the class from scope would be a smaller fix, but it would leave the thesis contradicted by an authorised system. The ceiling stays the authors' choice (e).
- **R6** must give the upgrade decision to the external certifier, not the deployer. Otherwise it opens a route to self-certification.
- **R7** changes Table 1 (the protective stop moves from 4 to 3), §5, and §6.1's "grade 3 or 4 use". Point defence stays at grade 3, because an operator can halt it. The §3.2 case becomes grade 4, which is consistent with Rec 5.
- **R8** keeps two passages consistent: Table 1's "asymmetry premise checked for the domain" and Rec 2's "only where it has been checked for the domain".
- **R9 and R10** tighten tests. Some deployments will then qualify only for lower grades, which is intended. Rec 7 must say "downgrade or suspend".
- **R11** prefers narrowing the scope to defending the wide claim (d). It relies on a fact I verified: the penalty paid by Knight Capital.
- **R12** leaves the decision on systems that target military equipment to the authors (e). The 2003 Patriot example must be verified first (c).

Coverage of the high-severity findings:
- R3 closes F01 and F02.
- R2, with R1, closes F03.
- R4 closes F04, R5 closes F05 and R6 closes F06.

None stays open, though the values judgements inside R2 and R5 remain the authors' to make. Revisions like these usually introduce new conflicts, so the revised version must be audited again (R15).

### Confidence

**This revision plan: 68.**

Checks still needed:
- a re-audit of the revised paper;
- verification of the items from my own knowledge listed under Coverage;
- domain experts confirming that the repaired tables are workable.

What moved the score up:
- The high-severity findings rest on quoted text, and on sources I read: the Parasuraman and Manzey abstract, AI Act Article 14 and the ICRC position.
- Most fixes reuse the paper's own mechanisms: the permission bundle, the ceilings and the triggers.

What moved it down:
- The steps change definitions, tables and replies together, so new conflicts are likely.
- Several additions rest on my own knowledge. All five lenses come from one model, so their agreement is not independent.

Scores by part:

| Part | Steps | Score |
|---|---|---|
| Textual repairs | R1, R7, R8, and the wording edits in R12 to R14 | 90 |
| Substantive additions | R2, R3, R4, R6, R9, R10, R11 | 68 |
| New external cases and anchors | R5, and the cited examples in R2, R12 and R13 | 80 |

Reversibility: complete. The cost is the authors' time.

**The paper's central recommendation: 40 as written; 60 for its core direction after R1 to R7.**

Checks still needed:
- expert review in each domain;
- whether grade 1 with conditions protects better than an automated decision with review on request;
- the screening counterexample;
- evidence on how far reviewers defer to the system at grade 1.

What moved the score up:
- Its direction matches positions I verified. The ICRC calls for ruling out autonomous weapons designed or used to apply force against persons. The AI Act imposes an oversight duty and names automation bias explicitly.
- The paper is candid about its values and limits (§5, §6.5, §6.6, §8), so its ceilings read as judgements that can be revised.

What moved it down:
- Its main safeguard, grade 1, is not protected by its own tests and is mis-described in §4.5 (F01, F02).
- The ceiling for adverse determinations rests on an unstated premise, and a rival model with legal standing goes unanswered (F03).
- An authorised autonomous screening system contradicts the medical claim as written (F05).
- No successful delegation is examined.

Scores by part, after repair:

| Part of the central recommendation | Score |
|---|---|
| Force against persons held at grade 1 or below | 75 |
| Adverse individual determinations at grade 1 with conditions | 60 |
| Bounded grade-3 delegation for functions with a fixed operating envelope | 70 |
| Grade 2 for additive approvals under the asymmetry premise | 45 |
| Market rows, once scoped to public authorities | 40 |

The score for additive approvals is low partly because the paper itself does not claim the evidence supports the premise in credit.

Reversibility: the rules can be revised. But a wrongful grant of authority (an unlawful strike, a wrongful debt) and a wrongful withholding (a missed screening) both cause harm that cannot always be undone.

## Where the lenses agree and disagree

All five lenses come from one model. Where they agree, that shows the reasoning is consistent; it does not confirm the conclusion independently.

### Points of agreement

- **C1. Grade 1 is the weakest point of the central safeguard.** All five lenses reach this: Analytical, Critical, Systems-thinking, Pragmatic and Creative. For the conflict in the text (F01, F02), the agreement rests on shared evidence and is strong: §2, §4.5, the Parasuraman and Manzey abstract and AI Act Article 14(4)(b). How large the effect is in each domain rests on a shared assumption, so that part is weaker.
- **C2. The conditions do not produce the ceilings for adverse determinations.** Analytical and Critical agree. The shared evidence is Table 2's tests set against Table 1's rows. Strong (F03).
- **C3. Escalation and favourable decisions need a baseline.** Creative and Systems-thinking agree, and the audit's reading of Obermeyer supports them. Escalation and deprioritisation are linked when capacity is scarce, and favourable and adverse decisions are linked in welfare. Shared evidence; strong (F04, F11).
- **C4. Ceilings should move with evidence and be tested on successes.** Creative, Critical and Pragmatic agree. This rests partly on a shared assumption. But §6.1 makes the same assumption ("That is an empirical question"), so it is the paper's own. Moderate (F05, F06).
- **C5. The grade definitions need repair.** Analytical and Pragmatic agree, on shared textual evidence. Strong (F07, F08, F09).
- **C6. Accountability can be gamed in two ways.** Naming a responsible person invites scapegoating, and letting the deployer measure its own triggers invites missed detection. Critical and Systems-thinking agree, from my own knowledge and inference. Moderate (F13, F15).

### Points of disagreement

- **D1. Precaution against access.**
  - The disagreement: Critical and Pragmatic stress what strict ceilings cost where review capacity is absent. Systems-thinking stresses that higher grades wear down the human capacity kept in reserve and make label loops worse.
  - Source: values (how much weight errors that cannot be contested carry against access to service), plus a factual dispute (how well systems perform in particular settings).
  - Judgement: a real trade-off the authors must own. The revision should name it and offer an exception that has to be earned with evidence (R5, R6), not settle it by assertion.
- **D2. Grade 1 with conditions, or an automated decision with review on request.**
  - The disagreement: Critical holds that the automated model may protect people better at high volume. Systems-thinking holds that it wears down the human capacity needed for review and correction.
  - Source: time horizon, and the weight given to different evidence (reviewer deference now, against deskilling and label loops later).
  - Judgement: a real trade-off. Decide it domain by domain under R2; neither option is better everywhere.
- **D3. Expand the paper or keep it tight.**
  - The disagreement: Creative proposes new frames; Pragmatic warns about length and unverified additions.
  - Source: scope and resources.
  - Judgement: mostly resolved by preferring the smallest fix. Adopt the baseline (R4) and the burden-of-proof clause (R13), because each closes a finding. Set aside AI tools for affected people as future work.
- **D4. Military objects.**
  - The disagreement: Analytical would add a regulated row for systems that target military equipment, matching the ICRC position. Critical would treat any envelope whose targets could be crewed as force against persons.
  - Source: a factual question (how reliably systems tell munitions from crewed aircraft), plus values (what risk to crewed objects is acceptable).
  - Judgement: a real trade-off; the authors decide (R12).

## Audit

The question concerns a paper the user supplied, so I audited it after running the lenses. Inconsistencies and gaps appear in the Record below, each with its type. Problems the lenses raised appear there too, each under its own ID.

### Factual claims

The table lists the paper's factual claims and checks each against what I read or know. Claims the conclusions depend on come first. Rows with no finding have an empty ID cell.

| # | Claim (location) | Supported at the strength stated? | True? (basis) | ID |
|---|---|---|---|---|
| 1 | Obermeyer: the algorithm used cost as its label; less was spent on Black patients with equal illness; Black patients were under-identified; the model was accurate on its label (§3.1, §4.3) | Yes | Yes. Read: a lecture summary of the study reports that the score was calibrated for cost across races but not for health. Without the bias, the Black share of patients above the 97th percentile would rise from 17.7% to 46.5%. Own knowledge: the study attributes the bias to predicting costs rather than illness. | |
| 2 | Obermeyer shows that a system that "saves more lives overall" can under-serve a subgroup (§6.1) | No, overstated | The study did not measure lives saved (own knowledge) | F27 |
| 3 | Robodebt averaged annual income across fortnights, put the onus of proof on recipients, and was examined by a royal commission (§3.3) | Yes | Yes. Read: averaged income was compared with declared fortnightly income, and the onus shifted to recipients. The commission's report came out on 7 July 2023. In November 2019 the government agreed to Federal Court orders (the Amato case) that using averaging to calculate debts was unlawful. | |
| 4 | Robodebt debts came from "an adverse decision that no official had individually reviewed" (§3.3) | Partly | Probably true. The sources I read say "less human oversight", and that human involvement was "very limited" when debt letters were sent. The royal commission's chapters on the online compliance system would settle it. | F41 |
| 5 | The ICRC recommends banning unpredictable autonomous weapons and those designed or used against persons, and restricting the rest (§3.2) | Yes | Yes (read: the ICRC position of 12 May 2021). The paper's summary omits two of the four kinds of limit. | F40 |
| 6 | The ICRC's recommendations "are a coordinated response" (§6.3) | No, overstated | They are a humanitarian body's proposal, not an agreement among states (read). | F35 |
| 7 | Supervisors over-rely on automation and monitor less well as reliability rises; the problem is one of attention (§4.5) | Mostly | Over-reliance and attention: yes (read, Parasuraman and Manzey abstract). Monitoring worsening as reliability rises: probably true, from my knowledge of research on complacency; the abstract I read does not mention it. | |
| 8 | Automation bias "affects every grade above advice" (§4.5) | No | Wrong. The cited review (read) locates automation bias in the use of decision aids. AI Act Article 14(4)(b) (read) names it, notably for systems that inform or recommend. | F02 |
| 9 | Bainbridge: automation removes practice and leaves operators with rare, hard cases and with monitoring (§4.5, §6.4) | Yes | Yes (own knowledge) | |
| 10 | Matthias, Sparrow, and Santoni de Sio and van den Hoven, as the paper describes them (§4.1) | Yes | Yes (own knowledge; I did not check the texts) | |
| 11 | Doshi-Velez and Kim, Eubanks, Topol and Scharre, as the paper describes them | Yes | Yes (own knowledge; I did not check the texts) | |
| 12 | The AI Act requires high-risk systems to be designed for effective human oversight; it was published on 12 July 2024 (§6.4, references) | Yes | Yes (read: Article 14(1), "effectively overseen by natural persons"). The cited URL is a third-party site, not the official text. | F34 |
| 13 | No one can answer for a collective harm caused by a learned discretionary policy (§5, §3.3) | No, overstated | Read: in 2013 the US Securities and Exchange Commission charged Knight Capital under its market access rule. Knight paid a $12 million penalty after its trading error of August 2012. Own knowledge: the EU places duties on firms that trade by algorithm. | F25 |
| 14 | "the model's reasons are often unavailable to the applicant" (§3.3) | Unsupported | Unverified, but probably partly true. US and EU law require lenders to give their main reasons (own knowledge), but the reasons given are often generic. | F39 |
| 15 | Lending decisions are typically made in high volume (§3.3) | No citation | True (own knowledge) | |
| 16 | The scene-setting claims in §1 about armed forces, public agencies, lenders and trading | No citation | True in general (own knowledge) | F51 |
| 17 | "the evidence needed to justify numerical values does not yet exist" (§5) | Overstated | Probably overstated: regulators already set performance targets in advance for some autonomous devices (own knowledge, needs verifying). | F52 |
| 18 | The ICRC position "is not binding law, and states hold differing positions" (§3.2) | Yes | Yes (own knowledge) | |
| 19 | The details in the references (volumes, pages, years) | Not applicable | They match my own knowledge. | |

### Record

Each finding gives: its ID, type and severity; where it occurs, with exact quotations; why it is a problem; the claim it weakens; the smallest fix; and the other passages the fix must change.

#### High severity

**F01: gap, high.** Grade 1 carries the paper's central safeguard, but no condition, test or trigger applies to it.
- Where:
  - §2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
  - §4.6: "the effective grade rises toward grade 4 without any formal change"
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - Table 1, conditions for the grade-1 rows: "Clinician decides, with reasons recorded"; "Human decision for each engagement"; "Named human decision-maker of record".
  - §6.4: "When these conditions fail, the system drops to grade 1."
- Why: grade 1 is the paper's fallback for any deployment that fails, and its ceiling for every adverse determination and for force against persons. The paper's own text says the failures of Section 4 occur at grade 1. Yet grade 1 has no test, no certifier and no trigger, and "effective grade" is never measured.
- Weakens: the central recommendation that adverse determinations and force against persons are adequately protected at grade 1 (§1, §5, Table 1, Rec 2, Rec 5).
- Fix: add a table to §5 showing which conditions apply at each grade.
  - Grade 0: none.
  - Grade 1, where the advice bears on a determination about a person: right target; real review (time, information, reasons recorded independently of the system's, and disagreement measured); contestability.
  - Grades 2 and 3: all five, with grade-3 versions of two of them (F19).
  - Grade 4: none can be met (F08).
  - Define "effective grade" as the grade at which a deployment actually operates, and apply the triggers to it.
- Also change:
  - the Abstract's "Authority is licensed only when five conditions hold";
  - the end of §2's paragraph on the grades;
  - §4.5 (F02);
  - §5's paragraph on triggers, to say what a downgrade from grade 1 means;
  - §6.4;
  - §6.6 and Rec 1 (F18);
  - Rec 4.

**F02: conflict and wrong claim, high.** §4.5 limits automation bias to grades above advice.
- Where:
  - §4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
  - §2: "the failures discussed in Section 4 arise there too"
  - §4.5: "Reviews of the human-factors literature treat this as a problem of attention (Parasuraman and Manzey, 2010)."
- Why: two sources I read place automation bias at the advice grade.
  - The abstract of the review the paper cites says automation bias "results in making both omission and commission errors when decision aids are imperfect" and "cannot be prevented by training or instructions".
  - AI Act Article 14(4)(b) names automation bias, in particular for systems that give information or recommendations on which people base decisions.
  - Advice is grade 1. So the sentence excludes the very grade where this failure is best documented, and it contradicts §2.
- Weakens: the inference that grade 1 is free of the failure the conditions guard against, and with it the claim that the grade-1 ceilings are enough.
- Fix: change the sentence to "This affects advice and every grade above it". Add one sentence saying that automation bias is documented chiefly for decision aids and that training or instructions do not remove it.
- Also change:
  - §6.4. Its remedy, "Reviewers should answer for accuracy, not agreement", has some experimental support (own knowledge, to verify: Skitka, Mosier and Burdick, 2000). But that remedy cannot rest on training alone.
  - The table added by F01's fix.

**F03: gap, high.** The grade-1 ceiling for adverse determinations rests on a premise the paper never states, and the strongest rival model goes unanswered.
- Where:
  - §2: "To say that a system has decision authority is to say that its output settles a matter others must accept, and that someone can be held to account for it."
  - §1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."
  - Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system".
  - Table 2, contestability test: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time".
  - §5: "The ceilings are design judgements, not empirical findings."
  - §7.2: "Those conditions, with the asymmetry premise tested before it is used, yield ceilings that are low for decisions about persons"
  - §7.2: "AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge."
- Why:
  - Defining "authority" so that it includes answerability makes the claim that AI cannot hold authority alone true by definition.
  - The real question is different: may an institution let an AI output settle an adverse determination, while the institution answers for the result and offers review by someone who can reverse it?
  - Every Table 2 test can be met under that arrangement, so the conditions do not "yield" the grade-1 ceilings. A further premise does: a human who can weigh the person's situation must decide before the determination takes effect. §4.2 comes closest to stating it but is never linked to the ceilings.
  - EU data-protection law already uses the rival arrangement. Own knowledge, to verify: GDPR Article 22 permits decisions with significant effects that are made solely by automated means in limited cases. Its safeguards include the right to obtain human intervention and to contest the decision.
  - The paper does not address this, although §8 names the EU as one of its two jurisdictions.
  - Finally, §7.2's "cannot ... hear and reverse a challenge" states as fact what is a normative claim.
- Weakens: the justification for the central recommendation (the §1 thesis, Table 1's grade-1 rows, §7.2).
- Fix:
  - In §2, separate actual decision power (the grades) from legitimate authority (power that meets the conditions).
  - In §5, state the premise and tie it to §4.2.
  - In §6, add a seventh objection that answers the rival model domain by domain. Review on request may be enough where a wrongful outcome is cheap and fully reversed. It fails where it is not: lethal force, and benefit cuts against people least able to contest them, as Robodebt showed.
  - In §7.2, change "yield" to "together with the premise in Section 5, support", and restate the last claim as a normative one.
- Also change: §1 (its account of the argument's steps, and "Section 6 answers six objections" becomes seven); the Abstract; §8 (name the relevant EU law if it is cited); Rec 2.

**F04: conflict, high.** Escalation at grade 2 conflicts with deprioritisation at grade 1 when capacity is scarce. The paper's own medical case is a harm caused by missed escalation.
- Where:
  - §2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service. Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately."
  - §5: "A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
  - Table 1: "Escalating a case for urgent clinician review" (ceiling 2) and "Deprioritising a patient or withholding scarce care" (ceiling 1).
  - §3.1: "Consider a commercial algorithm that health systems used to identify patients for additional care management, a scarce programme of nurse outreach and extra attention."
  - §3.1: "the proxy systematically under-identified them"
  - §1: "Hospitals rank patients for scarce beds and specialist review."
  - §6.1: "Until it is answered, the lives-saved argument supports augmentation, with escalation and audit, more clearly than it supports authority over who receives care."
- Why:
  - When capacity is fixed, moving one case up moves others down. Queue position then decides access to a service, which §2 counts as a determination.
  - At grade 2 the system's decision not to flag a case also stands by default, and no one reviews cases that are never flagged.
  - Obermeyer's harm was exactly this: patients missed for a scarce programme. A lecture summary I read reports that patients above the 97th percentile were enrolled automatically. In the paper's terms, that is escalation at grade 2 (to verify against the original paper).
  - §5's claim that a wrong flag costs little covers false flags only, not missed ones.
  - §2's own rule that "the grade of a decision class is set by the most consequential permission it carries" already implies that a ranking which deprioritises people is grade 1.
- Weakens: Table 1's escalation ceiling, and the use of escalation as the safe route in §6.1 and §6.6.
- Fix:
  - Restate the row as additive escalation: adding cases to clinician review without removing anyone from a capped resource, while unflagged cases keep the standard pathway.
  - Add "missed flags audited by subgroup" to the row's conditions.
  - State in §5 that a flag which allocates a capped resource belongs in the deprioritisation row (grade 1), and extend §5's cost sentence to cover missed flags.
- Also change: the §2 sentence on escalation; §6.1 (to "additive escalation"); §6.6 (F30).

**F05: gap, high.** Medicine has no class for diagnostic or screening decisions, and the ceilings are tested only on failures.
- Where:
  - §1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
  - Table 1's five medicine rows, none of which covers diagnosis or screening.
  - §1: "Section 3 gives one case per domain". Every case is a failure (Obermeyer, Robodebt) or invented (§3.2).
  - §6.6: "Where review capacity is absent, the framework could leave a population with slower triage or none."
- Why (own knowledge, to verify):
  - In 2018 the US FDA authorised an autonomous system that screens for diabetic retinopathy in primary care. It returns a result without a clinician reading the images. A negative result sends the patient back to routine rescreening, and the system was authorised after a prospective trial.
  - It holds final authority over a determination about a particular person: refer or not. Its rationale is the access problem §6.6 raises.
  - A negative result falls closest to "Deprioritising a patient or withholding scarce care" (ceiling 1). The framework as written would therefore forbid an authorised use without saying so.
- Weakens: the medicine part of the thesis, and the reply in §6.6.
- Fix:
  - Add a medicine row for screening or diagnostic decisions whose negative output returns the person to the pathway they would have had without the system.
  - The authors choose and defend its ceiling. The example implies grade 3 under bounded conditions, or else an argument for a lower one.
  - Conditions: validation against the outcome in the population where it is deployed; subgroup error published; positive results escalated to a clinician; clinician review on request.
  - Discuss the case in §3.1 or §6.6, after checking it against primary sources.
- Also change: the wording of the thesis (F09); §5's summary paragraph; §6.6; §8.

**F06: gap, high.** There is no route for raising a ceiling, so §6.1's claim that the question is testable fails for classes held at grade 1.
- Where:
  - §6.1: "That is an empirical question, and the framework makes it testable through subgroup audit and the override tests in Section 5."
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
  - §7.2: "Any future extension of authority should pass one test."
- Why: a class held at grade 1 never runs at grade 2 or above. The Section 5 tests therefore never apply to it, and the evidence §6.1 calls for never accumulates. The paper gives a route down but none up.
- Weakens: §6.1's second reply to the strongest objection, and the claim that the ceilings are judgements open to revision.
- Fix: add a short rule to §5 for raising a ceiling.
  - Evidence required: a prospective or silent-mode evaluation (outputs are recorded but not acted on), measured against the outcome the decision is for. It must report subgroup error, and the grade-1 conditions must hold throughout.
  - The external certifier decides.
  - Any raised ceiling has a sunset date and must be reviewed again.
  - Point §6.1 to this rule.
- Also change: §7.2's sentence on the test; Rec 1, or a new Rec 9.

#### Medium severity

**F07: gap, medium.** The grade definitions leave the paper's own military case unclassified.
- Where:
  - §2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
  - §2, grade 4: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
  - §2: "If the human can change only the envelope or stop the system, it is at grade 3."
  - §3.2: "A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time."
- Why: the §3.2 system's limits were set by humans. With communications degraded, no one can monitor or halt it, so it is not grade 3. Its limits are neither absent nor set by the system, so it is not grade 4 either.
- Weakens: §5's claim that committees can apply the tests "without further philosophical work", and the military analysis.
- Fix: separate grades 3 and 4 by a single test. At grade 3, a human can halt the system in time to prevent further acts. At grade 4, no human can, whoever set its limits. The §3.2 case then becomes grade 4.
- Also change: §2's test sentences; Table 1 and §5 (F08); §6.3 (F23).

**F08: conflict, medium.** The protective stop that the paper places at grade 4 is grade 3 by the paper's own definitions, and no grade-4 deployment can meet the conditions.
- Where:
  - Table 1: "Automatic protective stop that moves the system to a defined safe state" (ceiling 4), with "Narrow and reversible; removes no entitlement; clinician can countermand at once".
  - §5: "No domain licenses grade 4 for decisions about persons, with one exception. A protective stop may run at grade 4 if it moves a system to a defined safe state, removes no entitlement and can be countermanded by a clinician at once."
  - Table 2: "Limits are written before operation, enforced by an automatic stop" and "Reviewers have the time, information and competence to disagree".
  - §6.1: "it supports grade 3 or 4 use, as in dosing or protective stops"
- Why: a narrow stop whose limits humans set, and which a clinician can countermand at once, can be halted by a human. That meets the definition of grade 3, not grade 4. Grade 4, as defined, has no timely veto and no limits set by humans, so it can never meet the conditions of real override or bounded delegation. The ban on grade 4 therefore follows from the conditions and needs no exception.
- Weakens: the paper's account of grade 4. No conclusion changes.
- Fix: move the protective stop to grade 3. Replace the two §5 sentences with "No deployment at grade 4 can meet the conditions, so none is licensed."
- Also change: §6.1 (to "grade 3 use").

**F09: conflict, medium.** "Final authority" is never defined, and the thesis is stated more absolutely than Table 1 supports.
- Where:
  - Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy"
  - §1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
  - Table 1: "Dosing within clinician-set limits" (3); "Automatic protective stop that moves the system to a defined safe state" (4); "Favourable approvals, such as low-cost approvals" (2).
- Why: eight Table 1 rows are determinations about persons under §2's definition. Five are capped at grade 1 and three go above it. If "final" means grade 2 and above, three rows contradict the thesis. If it means grade 4 only, the thesis is far weaker than the table.
- Weakens: the thesis as stated.
- Fix: define "final authority" in §2 as authority at grade 3 or 4 over a determination about a person, or adopt R1's restatement.
- Also change: §7.2.

**F10: conflict, medium.** The asymmetry premise appears in three forms that do not agree, and "reversed" is used in two senses.
- Where:
  - Abstract and §5: "where a wrongful adverse decision is harder to reverse than a wrongful favourable one, automated systems may be given more authority over favourable decisions than over adverse ones"
  - §5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
  - §6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
- Why: the three forms measure different things.
  - The first compares how hard each kind of decision is to reverse.
  - The second compares irreversible harm to everyone affected.
  - The third counts the harm of approvals "to others" only.
  - Taken literally, reversing the premise would give refusals more automated authority than approvals, which no passage endorses. §6.5 uses "reversed" to mean that approvals fall to grade 1.
- Weakens: the "Favourable approvals" row, and Rec 2's requirement that the premise be checked.
- Fix: state the premise once, in §5. Compare the expected irreversible harm of wrongful approvals (to the person approved and to others) with that of wrongful refusals (to the person refused). Where approvals are not shown to do less harm, approvals take grade 1. Use "withdrawn" in place of "reversed".
- Also change: the Abstract; §6.5; F12.

**F11: gap, medium.** "Favourable" and "adverse" have no baseline, so several economic decisions cannot be classified.
- Where:
  - Table 1: "Favourable approvals, such as low-cost approvals"
  - §1: "and, in some lending and administrative settings, over favourable decisions"
  - §5: "Grade 2 suits favourable or cheaply corrected outcomes"
- Why (own knowledge, general):
  - In welfare, a wrongful approval creates an overpayment that is later recovered as a debt, which is the adverse decision class of the Robodebt case.
  - In credit, a wrongful approval can leave the applicant with more debt than they can carry.
  - Credit limits, prices and benefit amounts are partly favourable and partly adverse compared with what the person asked for.
  - Without a baseline, a deployer can describe the same output either way.
- Weakens: the ceiling for favourable approvals, and the direction that the asymmetry premise is meant to set.
- Fix: in §2, define the baseline as what the person would receive without the system. An output is additive if it gives at least that, and subtractive otherwise. Allow grade 2 only for additive outputs, and classify mixed outcomes by their subtractive part.
- Also change: the label of the Table 1 row; §5's sentence on grade 2; F04's escalation row, which uses the same baseline.

**F12: conflict, medium.** §6.5 counts the approved borrower as a third party, then leaves the applicant's own harm out of the comparison.
- Where:
  - §6.5: "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation."
  - §6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
  - §6.5: "The asymmetry premise counts mainly the harm to the person affected, so this objection threatens it directly."
- Why: the borrower who cannot carry the debt is the applicant. Because the comparison counts the harm of approvals "to others" only, it drops the largest harm a wrongful credit approval does. That makes the premise easier to satisfy than §5's version.
- Weakens: the reply to the third-party objection.
- Fix: rewrite the first sentence as "A wrongful approval can harm the applicant, who takes on debt they cannot carry, and others: a lender that absorbs losses, or the public..." Then use the single comparison from F10.
- Also change: nothing beyond F10.

**F13: conflict and gap, medium.** The answerability test names a person but does not test traceability, which §4.1 calls the minimal test.
- Where:
  - §4.1: "The paper treats traceability as the minimal test of answerability. A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
  - Table 2: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
- Why: naming someone does not show that their understanding and control actually extend to the system's behaviour. The tracing condition requires that, as §4.1 reports it, and Matthias and Sparrow say it is what is missing. Elish (2019) calls the resulting position a "moral crumple zone": a nominal human absorbs the blame for failures they could not control (own knowledge, to verify). The paper never answers this scapegoat objection.
- Weakens: the answerability condition, and step 1 of the argument.
- Fix: extend the Table 2 test so that the named person:
  - approved the envelope knowing its validated behaviour and limits, and documented this;
  - receives the monitoring data;
  - has the authority and means to halt or withdraw the system.
  - Add one sentence to §4.1 answering the scapegoat objection.
- Also change: the last sentence of §4.1.

**F14: conflict, medium.** The triggers miss two of the three drift risks they are said to put into practice.
- Where:
  - §4.6: "The second is the label loop. In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
  - §4.6: "A third dynamic concerns detection."
  - §5: "These triggers are the working form of the drift risks in Section 4.6."
  - §5, among the triggers: "any change to the outcome label"
  - Rec 7: "Monitor for authority creep and label loops, and downgrade any deployment that meets a trigger in Section 5 until it is re-certified."
- Why: a label loop runs while the label's definition stays the same; what changes is which cases get labelled. A trigger that fires on changes to the label therefore misses it. No trigger covers detection delay.
- Weakens: Rec 7, and §5's claim about the triggers.
- Fix: add two triggers. One fires on retraining with labels produced by the system's own selections, without an independent random sample. The other, for collective harms, fires when detection time in exercises exceeds a limit set in advance. Alternatively, narrow §5's claim to cover authority creep only.
- Also change: Rec 7.

**F15: gap, medium.** The trigger system is measured by the party it penalises, and it assumes a fallback that may not exist.
- Where:
  - Table 2: "Internal audit using sampled cases"
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
- Why:
  - A trigger that forces a costly downgrade gives the deployer a reason not to find it.
  - A downgrade assumes staff and skills that years of operation at a higher grade wear away. This is Bainbridge's point, applied to a whole institution.
  - For fast functions such as defending against incoming munitions, dropping one grade to grade 2 may be unworkable. For grade-1 rows, dropping one grade means grade 0.
- Weakens: the downgrade mechanism, and Rec 7.
- Fix: trigger measurements go to the external certifier, which also takes its own samples. A tested fallback plan becomes part of bounded delegation. Where the next grade down is unworkable, the deployment is suspended.
- Also change: the "Certified by" cell of Table 2's real-override row; Rec 7 (to "downgrade or suspend").

**F16: conflict, medium.** §6.4's argument for keeping high-volume credit refusals at grade 1 does not follow.
- Where:
  - §6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."
  - §3.3: "Lending decisions are typically made in high volume, which makes individual review costly"
  - Table 1: "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit"
- Why: at grade 1 a human must decide every case. That takes at least as much attention per case as grade 2's override window. Where meaningful review is impossible at volume, grade 1 becomes the rubber stamp §6.4 itself warns against.
- Weakens: the row on credit refusals.
- Fix: "Credit refusals sit at grade 1 only where the lender funds a real human decision on each refusal. Where it cannot, the system may approve, if the asymmetry premise holds, and must route every non-approval to a human decision-maker."
- Also change: Rec 2.

**F17: conflict, medium.** Rec 2 extends a statutory exception to grade 2 to every adverse determination, but Table 1 allows it only for credit refusals.
- Where:
  - Rec 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."
  - Table 1: "Welfare denials, debt raising and sanctions", with "Named human decision-maker of record".
  - Table 1: "Credit refusals", ceiling 1, with "grade 2 only under a statute that sets review capacity and audit".
- Why: Rec 2 would allow welfare debts to be raised at grade 2 under statute. That is the Robodebt class, which the table forbids. In addition, the credit ceiling reads 1 although its own condition allows 2.
- Weakens: Rec 2, and the welfare row.
- Fix: limit Rec 2's "unless" clause to credit refusals, and show the credit ceiling as "1 (2 under statute)".
- Also change: Table 1's credit row.

**F18: conflict, medium.** The paper says three different things about which conditions apply where.
- Where:
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - Rec 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2)."
  - §6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes. A low-stakes information service needs fewer of them than a system that decides who receives scarce care."
  - §5: "A deployment is licensed for less than its ceiling wherever its conditions are weakly met."
- Why: Rec 1 applies all five conditions to every sensitive deployment. §5 applies them only at grades 2 to 4. §6.6 makes the number of conditions depend on the stakes, a rule of proportion that §5 does not contain. "Weakly met" also fits badly with conditions that must "hold".
- Weakens: Rec 1, and §6.6's reply.
- Fix: use the table from F01's fix. Rec 1 becomes "...show that the conditions for its grade pass their tests". §6.6 becomes "...which conditions apply depends on grade, and each certifier sets thresholds in proportion to the stakes". Define "weakly met" or delete it.
- Also change: F01's fix.

**F19: gap, medium.** The real-override and contestability tests are written for case-by-case review, and the paper does not say how they apply at grade 3.
- Where:
  - Table 2: "Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors"
  - Table 2: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time"
  - §2, grade 3: "but do not approve each act"
- Why: at grade 3 no one reviews individual cases, and many acts cannot be reversed, such as a dose or an interception. As written, neither test can be passed or failed.
- Weakens: the licensing of the grade-3 rows.
- Fix: write grade-3 versions of both tests. Real override: a human can halt the envelope in time, and halts are practised in drills. Contestability: affected persons can contest the envelope and obtain redress for harm.
- Also change: the table from F01's fix.

**F20: gap, medium.** Seeding known errors into live review can harm the people whose cases carry them.
- Where:
  - Table 2: "their disagreement is measured with seeded errors"
  - Table 1: "reviews sampled for seeded errors"
  - Rec 4: "seed reviews with known errors"
- Why: in a clinical or welfare workflow, a seeded error that a reviewer misses could take effect on a real person.
- Weakens: the real-override test as a safeguard that can be put into practice.
- Fix: add one sentence to §5: seeded cases are synthetic, or are intercepted before they affect any person.
- Also change: nothing else.

**F21: gap, medium.** The military table has no class for engaging objects other than incoming munitions. And the line between munitions and persons is drawn by the machine itself.
- Where:
  - Table 1: "Recommending the engagement of persons" (ceiling 1) and "Defensive engagement of incoming munitions, not persons" (ceiling 3).
  - §3.2: "It recommends restricting others through limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021)."
- Why:
  - The ICRC position I read would regulate, not ban, systems limited to objects that are military objectives by nature. Table 1 says nothing about that class, or about crewed objects such as aircraft and vehicles.
  - Whether a target is "not persons" is decided by the system's own classification. From my own knowledge (to verify): in 2003, Patriot missile batteries fired on allied aircraft they had classified as missiles.
  - The row label "Recommending the engagement of persons" names a grade-1 activity, not a decision class.
- Weakens: the coverage of the military rows, and the grade-3 defensive row.
- Fix:
  - Relabel the first row "Engagement of persons".
  - Either add a row for objects that are military objectives by nature, excluding crewed objects, with a ceiling the authors choose and limits of the kind the ICRC proposes; or declare that class out of scope.
  - Add a condition to the defensive row: the system's ability to tell munitions from crewed aircraft must be validated, and its error rate reported.
- Also change: Rec 5; §8.

**F22: conflict, medium.** Rec 5 covers "objects", which is wider than Table 1's "incoming munitions".
- Where:
  - Rec 5: "keep defensive envelopes against objects bounded and stoppable"
  - Table 1: "Defensive engagement of incoming munitions, not persons"
- Why: crewed aircraft and vehicles are objects, so Rec 5 reads as permitting grade-3 envelopes against them.
- Weakens: Rec 5.
- Fix: replace "objects" with "incoming munitions".
- Also change: nothing else, unless F21's new row is added.

**F23: conflict, medium.** §6.3 and Rec 5 leave grades 2 and 3 open for force against persons.
- Where:
  - §6.3: "It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable."
  - Rec 5: "Prohibit delegated authority to select and engage persons with force."
  - Table 1: "Human decision for each engagement"
- Why: §6.3 implies that speed justifies a bounded envelope against persons at grade 3, which Table 1 rules out. Rec 5's "delegated authority" most naturally means grade 3, and says nothing about grade 2.
- Weakens: §6.3's reply, and Rec 5.
- Fix:
  - §6.3: "It does not justify any grade above 1 for force against persons, or grade 4 for any decision".
  - Rec 5: "Prohibit any grade above 1 for selecting and engaging persons with force."
- Also change: nothing else.

**F24: gap, medium.** The scope of "discretionary AI market interventions" is undefined.
- Where:
  - §5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
  - Table 1: "Discretionary AI market interventions", with "Public justification; no unilateral action".
  - Rec 6: "and prohibit discretionary AI market interventions without public justification."
  - §1: "trading systems act on prices in milliseconds"
- Why: read literally, every trading system that chooses when and how to act on prices is capped at grade 1. That covers most algorithmic trading. It is a sweeping claim the paper does not defend, and it falls outside a thesis about determinations about persons. If the class means interventions by public authorities, the paper should say so.
- Weakens: Rec 6, and the market rows.
- Fix: in §5, define the class as interventions by public authorities. State that private algorithmic trading is out of scope and governed by existing market rules. Alternatively, defend the wider claim.
- Also change: the Table 1 row; Rec 6; §3.3.

**F25: overstated claim, medium.** The claim that no one can answer for algorithmic market harm overstates the gap.
- Where:
  - §5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
  - §3.3: "The harm is collective and fast, and no single person can answer for it."
- Why:
  - From a source I read: in October 2013 the US Securities and Exchange Commission charged Knight Capital under its market access rule, and Knight paid a $12 million penalty. On 1 August 2012 a defective router at Knight had sent more than 4 million orders in 45 minutes, and the firm lost more than $460 million. Knight's system was not a learned policy, but the firm answered for the harm its system caused.
  - From my own knowledge (to verify): EU rules require firms that trade by algorithm to control their algorithms, including a function to shut them off.
  - The defensible claim is narrower. Harm that emerges when many algorithms interact is hard to pin on any one firm. And offences that require intent may not reach a learned policy, for example one that learns to collude with competitors' algorithms (own knowledge, to verify: Calvano and colleagues, 2020).
- Weakens: §5's verdict that discretionary interventions fail answerability, and Rec 6.
- Fix: replace the §5 sentence with the narrower claim.
- Also change: §3.3.

**F26: gap, medium.** The paper applies conditions written for persons to market mechanisms that affect everyone at once, without saying how.
- Where:
  - §5: "Pre-committed public rules, with halts and rate limits, meet the conditions at grade 3."
  - Table 2: "The affected person can obtain the basis of the decision in usable terms"
- Why: a market halt has no single affected person. The paper asserts that halts meet the conditions without applying the contestability or right-target tests to them.
- Weakens: the grade-3 licence for market rules.
- Fix: add one sentence. For decisions that affect a market as a whole, contestability means public reasons and a review route for affected participants. The right target means validating the rule against the market outcome it is meant to protect.
- Also change: nothing else.

**F27: overstated claim, medium.** §6.1 attributes more to the Obermeyer study than it showed.
- Where: §6.1: "A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019)."
- Why: the study showed that a system accurate on its cost label under-identified a group of patients. It did not show that the system saved more lives overall.
- Weakens: the evidence for the first reply to the lives-saved argument, though not its logic.
- Fix: "...as the Obermeyer case shows for a system that was accurate on its own label".
- Also change: nothing else.

**F28: overstated claims and a strong objection unanswered, medium.** §6.2 rests on absolute claims.
- Where:
  - §6.2: "Human bias is heterogeneous."
  - §6.2: "Automated bias is uniform and scaled. One flawed label distorts every decision the system makes"
- Why (own knowledge):
  - Human bias is often systematic, not merely varied.
  - Automated bias sits in one place, so it can be measured and fixed in one place. That is the strongest form of the objection.
  - Kleinberg and colleagues (2018, to verify) estimate that algorithmic decisions on pretrial release could reduce detention without raising crime.
  - The reply should grant that a well-audited system can be less biased than the people it replaces, and then explain why answerability and contestability are still required.
- Weakens: the reply to "humans are biased too".
- Fix: qualify the claims ("often uniform and always scaled"; "distorts every decision that relies on that label"). Add two sentences that grant the strong form of the objection and answer it.
- Also change: nothing else.

**F29: gap, medium.** Robodebt is used as evidence about automated authority, without saying what kind of system it was or what it shows about human authority.
- Where:
  - §3.3: "It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients."
  - §8: "The jurisdictions discussed are few: the European Union's AI Act and the Australian Robodebt case."
- Why:
  - From the sources I read:
    - the scheme replaced manual investigation of the highest-risk discrepancies with automated data-matching under less human oversight, and shifted the burden of proof onto recipients;
    - in November 2019 the government agreed to Federal Court orders that using averaging to calculate debts was unlawful;
    - the royal commission found the scheme was designed without regard to social security law, and that the department's secretary was told it was illegal.
  - From my own knowledge (to verify):
    - the system applied a fixed rule, not a learned model;
    - Australian law lets the Secretary arrange for computer programs to make decisions that legally count as the Secretary's own (s 6A, Social Security (Administration) Act 1999).
  - Formal human authority was in place and did not prevent the harm, which bears directly on F01.
- Weakens: the use of the case as evidence about AI authority, and the confidence the paper places in a "named human decision-maker of record".
- Fix: add two sentences to §3.3. Robodebt was a rule-based system that applied an unlawful method under formal human authority. Its lessons are the reversed burden of proof, the absence of review, and the failure of authority held only on paper. Optionally, add a welfare case that involved machine learning (own knowledge, to verify: the risk model in the Dutch childcare-benefits scandal; the 2020 Dutch court ruling against the SyRI fraud-detection system).
- Also change: §1's "flag families for fraud review", if a case is added.

**F30: conflict, medium.** §6.6's way out needs the very capacity §6.6 says is absent.
- Where: §6.6: "Second, where review capacity is absent, the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review."
- Why: escalation sends cases to reviewers. Where there are none, it decides nothing. Where there are few, it reorders a queue for a capped resource (F04).
- Weakens: the reply to the low-resource objection.
- Fix: "...or to restrict the system to information, and to additive escalation where someone can receive the escalated cases. Where no one can, the choice is between no service and an exception that has to be earned with evidence (Section 5). That choice is a trade-off between values."
- Also change: the rule for raising a ceiling in F06's fix.

**F31: gap, medium.** The contestability test does not say who must prove what, although the paper's welfare case turned on exactly that.
- Where:
  - Table 2: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time"
  - §3.3: "Debt notices were generated at scale, and the burden of showing that a debt was wrong fell on the recipient."
- Why: if the affected person can win a review only by disproving the system's output, the review repeats the Robodebt harm, even when someone has the power to reverse the decision.
- Weakens: the contestability condition, and the welfare row.
- Fix: add to the test "and the deployer bears the burden of showing that the decision is correct".
- Also change: add a cross-reference in Rec 2.

#### Low severity

| ID | Type | Location and problem | Fix |
|---|---|---|---|
| F32 | Conflict | The Abstract's "It distinguishes five grades of authority" contradicts §2's "Grades 0 and 1 are not authority". | "a five-grade scale of decision involvement" |
| F33 | Convention | §5 refers to Table 2 ("Table 2 states each condition with a proposed test") before Table 1. | Number the tables in the order they appear. |
| F34 | Convention | The AI Act is cited through a third-party site: "https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/". | Cite the Official Journal (OJ L, 2024/1689) or EUR-Lex. |
| F35 | Overstated | §6.3: "The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021)." They are a proposal, not an agreement among states. | "propose a coordinated response of this kind" |
| F36 | Conflict | §6.2: "it fits the grade 1 role of review". §2 defines no review role, and auditing past decisions supplies grade-0 information. | "it supplies grade-0 information to those who review decisions" |
| F37 | Faulty logic | §4.6: "When review windows are shortened to save time, fewer cases reach reviewers". Shorter windows cut the time per case, not the number of cases. | "reviewers have less time per case" |
| F38 | Conflict | §6.4: "grade 2 collapses into grade 4 with a human's name attached". Under §2's definitions the limits are still set by humans and the veto still formally exists. | "its effective grade rises toward grade 3 or 4", using the definition from F01's fix |
| F39 | Unverified | §3.3: "the model's reasons are often unavailable to the applicant". Probably partly true: US and EU law entitle applicants to the main reasons (own knowledge), but the reasons given are often generic. The relevant rules on refusal notices would settle it. | "the reasons given are often generic and may not reflect the model's actual reasons" |
| F40 | Incomplete | §3.2 lists "limits on target types, duration, geographic scope and scale". The ICRC position (read) also proposes limits on situations of use and requirements for human-machine interaction. | Add both. |
| F41 | Overstated | §3.3: "imposed by an adverse decision that no official had individually reviewed". The sources I read are less absolute: "less human oversight", and human involvement "very limited". | Keep the wording only if the royal commission report supports it; otherwise "with little or no individual review". |
| F42 | Conflict | §6.4's list, "review fits the workflow, overrides are logged, reviewers are tested with seeded errors, and the drift triggers in Section 5 are monitored", differs from Table 2. "Reviewers should answer for accuracy, not agreement." appears only in §6.4. | Say "in addition to the five conditions", and add the accuracy rule to Table 2 and Rec 4. |
| F43 | Conflict | §1 says "Section 3 gives one case per domain", but §3.3 gives three: Robodebt, credit scoring and market interventions. | "at least one case per domain" |
| F44 | Gap | The economy domain covers credit, welfare and markets, but not employment, insurance or pricing, all of which "economic allocation" includes. | State the scope in §1 and §8, and apply F11's baseline to allocations that vary by degree, such as prices and limits. |
| F45 | Gap | Table 1's "low-cost approvals" is undefined: low cost to whom? | "additive approvals whose wrongful grant is cheaply and fully reversed" (F11) |
| F46 | Gap | Table 1's "human on the loop" is undefined. | Use grade 3's wording: "a human monitors and can halt in time". |
| F47 | Gap | Rec 1's "every sensitive deployment" leaves "sensitive" undefined. | "every deployment that bears on a determination about a person or on the use of force" |
| F48 | Gap | Table 2's "Safety authority for the domain" names no such body for credit or welfare. | Name the kind of body in each domain, such as a credit regulator or a social-security tribunal, or require each jurisdiction to designate one. |
| F49 | Overstated | §5 says committees "can apply them without further philosophical work", but F09, F11 and F45 to F47 leave key terms undefined. | Qualify the claim once those fixes are made. |
| F50 | Conflict | §4.6's "which weakens the requirement that errors be correctable" refers to a requirement Table 2 does not state; it appears only as "errors correctable" in Table 1. | Name the condition it weakens: contestability. |
| F51 | Unsupported | §1's scene-setting sentences, from "Armed forces use systems that classify objects and people faster than staff can check them." onward, cite no sources, though they are broadly true. | Add one citation each, or soften the wording. |
| F52 | Overstated | §5: "the evidence needed to justify numerical values does not yet exist". Some regulators already set performance targets in advance for autonomous devices (own knowledge, to verify). | "does not yet exist for most of these decision classes" |

### What was checked

- **Internal consistency:** every section, both tables, all eight recommendations and the reference list.
- **Factual claims checked against sources:** the claims about the ICRC position, AI Act Article 14, Robodebt and the royal commission, the Obermeyer study's design (through a lecture summary), the Parasuraman and Manzey abstract, and Knight Capital.
- **Checked against my own knowledge only:** the original Obermeyer paper, the royal commission report itself, and the texts of Matthias; Sparrow; Santoni de Sio and van den Hoven; Bainbridge; Doshi-Velez and Kim; Eubanks; Scharre; and Topol.
- **Not verified:** these items from my own knowledge, which appear in the findings and recommendations:
  - GDPR Article 22;
  - the 2018 FDA authorisation of autonomous retinopathy screening;
  - the 2002 Überlingen collision and the rule that crews follow collision-avoidance advisories over controllers (TCAS);
  - the 2003 Patriot incidents;
  - Elish (2019);
  - Skitka, Mosier and Burdick (2000);
  - Kleinberg and colleagues (2018);
  - Calvano and colleagues (2020);
  - s 6A of the Social Security (Administration) Act 1999;
  - the Dutch childcare-benefits and SyRI cases;
  - EU duties on firms that trade by algorithm.

## Lens summaries

Each lens was run as its own stream before the synthesis, without borrowing another lens's conclusions. Each step is labelled as evidence, own knowledge, assumption or inference. Finding IDs refer to the Record above.

### Analytical

**Reasoning chain**
1. [evidence] The paper's practical output is 12 ceilings (Table 1), five conditions (Table 2), five triggers and eight recommendations. It reaches them through a three-step argument (§1).
2. [inference] Eight Table 1 rows are determinations about persons under §2's definition. Five are capped at grade 1 and three go above it. So the thesis matches the table only under a definition of "final" that the paper does not give (F09).
3. [inference] Every Table 2 test can be met when an institution lets an AI output settle an adverse determination and offers human review on request. So the conditions do not produce the grade-1 ceilings; a premise the paper never states does (F03).
4. [inference] The grades rest on two criteria, timely veto and who sets the limits, and these do not sort every case into one grade. The §3.2 system is neither grade 3 nor grade 4. The protective stop is grade 3 by definition. And grade 4 can never meet the conditions (F07, F08).
5. [evidence] The evidence base is thin:
   - one study for medicine and one case for welfare;
   - none for credit, markets or force, and the military case is invented;
   - Table 1 leaves out a class the ICRC would regulate rather than ban (F21);
   - there are five triggers for three drift dynamics, and two of the dynamics are not covered (F14).
6. [inference] The strongest version would state the rule that turns features of a decision into ceilings. It would also separate the grades by one test: whether a human can halt the system in time.

**Key concepts**
- How conditions lead to ceilings: 0.9. The justification for the central recommendation depends on it.
- Separating the grades cleanly: 0.75. Two of the paper's own cases are classified wrongly.
- What "final" means: 0.6. The thesis and the table disagree on three of eight rows about persons.
- Evidence by domain: 0.55. Three domains rest on only two empirical cases.

**Mind map: Analytical**
- Question: the strongest defensible revision, and how far to trust the core claim
  - How the ceilings are derived
    - "Authority" is defined to include answerability (§2)
    - Table 2's tests can be met at grades 2 and 3 for adverse cases
    - §5 admits the ceilings are "design judgements"
  - Definitions
    - Veto and limits do not separate grades 3 and 4
      - The §3.2 case cannot be classified
      - The protective stop is grade 3
    - "Final" is undefined
  - Counting the tables
    - 8 rows about persons: 5 at grade 1, 3 above
    - 5 triggers for 3 drift dynamics
  - Evidence
    - Medicine: Obermeyer
    - Welfare: Robodebt
    - Credit, markets and force: no cases; a class the ICRC would regulate is missing

### Creative

**Reasoning chain**
1. [evidence] The paper's welfare case turned on who had to prove what: Robodebt recipients had to disprove their debts (§3.3, verified). No grade captures this.
2. [inference] Treating authority as a question of who bears the burden of error and of proof gives a rule the grades miss: no automated output may shift the burden of proof onto the person affected (F31).
3. [own knowledge] Regulators class medical devices by risk and let trial evidence carry a product into autonomous use. In 2018 the US FDA authorised an autonomous system for diabetic retinopathy screening in primary care. In aviation, crews must follow the collision-avoidance system's advisories (TCAS) even against an air traffic controller's instruction; the 2002 Überlingen mid-air collision followed a conflict between the two.
4. [inference] So ceilings can be earned with evidence rather than fixed (F05, F06). And advice that must be followed is authority in practice, so a system's effective grade depends on rules about deference as well as on its formal power (F01).
5. [inference] One counterfactual test could replace both pairings (favourable/adverse and escalation/deprioritisation): does the output give the person at least what they would have had without the system? The same test covers limits, prices and amounts (F04, F11).
6. [inference] AI could also work for the affected person, explaining decisions and drafting challenges. This is speculative, so I set it aside.

**Key concepts**
- A counterfactual baseline: 0.85. One rule replaces two pairings.
- Ceilings earned with evidence: 0.75. It makes design judgements revisable on stated evidence.
- The burden of proof: 0.7. It names the Robodebt harm.
- Required deference: 0.55. It explains how advice becomes authority.
- AI for the affected person: 0.3. Promising, but unsupported, and it would lengthen the paper.

**Mind map: Creative**
- Question: which reframings does the obvious framing hide?
  - Burden of error and proof
    - Robodebt: recipients had to disprove their debts
    - Rule: no automated output shifts the burden
  - Ceilings earned with evidence
    - Medical devices classed by risk
    - Autonomous retinopathy screening, 2018
  - Required deference
    - Collision-avoidance advisories outrank controllers
    - Effective grade depends on formal power and on deference
  - Counterfactual baseline
    - Does the output add to or take away from the person's baseline?
    - It covers limits, prices and amounts
  - AI for the affected person
    - Tools to explain decisions and draft challenges

### Critical

**Reasoning chain**
1. [assumption] The paper assumes that a named human decision-maker of record at grade 1 provides both answerability and protection (Table 1, Rec 2).
2. [evidence] Four things I read count against that assumption (F01, F02, F29):
   - The paper itself concedes that advice shapes decisions (§2).
   - The review it cites finds that people over-rely on imperfect decision aids, and that training or instructions cannot prevent this.
   - The AI Act names automation bias for systems that inform or recommend.
   - In Robodebt, formal authority stayed with officials who were told the scheme was illegal.
3. [own knowledge] Three further points:
   - Elish's "moral crumple zone" describes nominal operators who absorb the blame for failures they could not control.
   - EU data-protection law allows some decisions made solely by automated means, with a right to human intervention afterwards.
   - In 2003, Patriot missile batteries fired on allied aircraft they had classified as missiles.
4. [inference] The strongest counterargument: a grade 1 with no conditions may protect people less well than audited automation with review on request, while shifting the blame onto frontline staff (F03, F13).
5. [inference] Every case §3 examines is a failure or invented. So the ceilings are untested where delegation works (screening, dosing, defence against incoming fire). And they are trusted too much where a machine draws the boundary between classes (F05, F21).
6. [inference] Either way, the costs fall on the disadvantaged:
   - Strict ceilings burden people who have no review capacity, and §6.6's way out needs that very capacity (F30).
   - Permissive ceilings burden groups like the patients Obermeyer found under-identified, and the Robodebt recipients.

**Key concepts**
- The illusion that grade 1 is safe: 0.9. The paper's own sources undercut it.
- The rival model, automation with review on request: 0.75. The strongest alternative goes unanswered.
- Who bears the costs: 0.7. Both caution and permission burden the disadvantaged.
- Bias in choosing cases: 0.6. Only failures are examined.
- Answerability that produces scapegoats: 0.6. Naming a person is not the same as fair blame.

**Mind map: Critical**
- Question: what fails if the leading view is wrong?
  - The assumption that grade 1 protects
    - Advice still biases decisions (§2; Parasuraman and Manzey; AI Act Article 14(4)(b))
    - Robodebt: formal human authority failed
    - Nominal operators absorb blame
  - The strongest rival view
    - Automated decision plus review on request
    - Algorithmic bias can be fixed in one place
  - Choice of cases
    - Only failures and a hypothetical
    - Patriot misclassifications, 2003
  - Who bears the cost
    - Strict ceilings: people without review capacity
    - Permissive ceilings: under-identified groups and welfare recipients

### Systems-thinking

**Reasoning chain**
1. [evidence] §4.6 names two drift processes: authority creep and label loops. §5 turns drift into downgrade triggers. Table 2 makes internal audit the certifier for real override.
2. [inference] A trigger that forces a costly downgrade gives whoever measures it a reason not to find it. So the loop meant to correct drift can fail at the point of measurement (F15).
3. [own knowledge] Bainbridge's irony of automation: automation leaves operators out of practice for the rare cases in which they must take over.
4. [inference] The same holds for a whole institution. Long operation at grade 3 wears away the staff and skill a downgrade needs, and for fast functions a one-grade drop may be unworkable (F15).
5. [inference] The table's decision classes are linked, so a change in one spills into another (F04, F11):
   - When capacity is fixed, escalating one case moves others down.
   - In welfare, a wrongful approval becomes an overpayment that is later raised as a debt.
   - Class names invite relabelling: a refusal can be renamed a flag, or replaced by never making an offer.
6. [inference] A label loop runs while the label's definition stays the same, so a trigger that watches for label changes misses it. Harms that fall on many people at once surface late. So pre-commitment and independent monitoring must carry the load (F14).

**Key concepts**
- Linked decision classes: 0.85. Scarcity and overpayment connect classes the table treats as separate.
- Who does the measuring: 0.7. The party that would be penalised measures its own triggers.
- Reserve human capacity: 0.7. A downgrade needs skills that automation wears away.
- Relabelling: 0.6. Class names can be gamed.
- Delay in detecting harm: 0.5. It limits correction after the fact when harm falls on many people at once.

**Mind map: Systems-thinking**
- Question: what loops, delays and knock-on effects are at work?
  - Drift loops
    - Authority creep: less time, then less practice, then fewer overrides
    - Label loop: flags lead to investigations, which become labels, which train the model
  - The correction loop
    - The deployer measures its own triggers
    - A downgrade needs reserve staff and skill
  - Linked classes
    - Escalation when capacity is fixed
    - A wrongful approval becomes an overpayment, then a debt
  - Gaming
    - Refusals renamed as flags, or replaced by never making an offer
  - Delay
    - Harms to many people are found late
    - Pre-commitment matters more than correction

### Pragmatic

**Reasoning chain**
1. [evidence] The paper is written for hospital committees, procurement officers, regulators and ethics boards (§1). It says they can apply its tests "without further philosophical work" (§5). Yet it leaves the thresholds to certifiers, and it names a "Safety authority for the domain" that has no counterpart in credit or welfare (F48, F49).
2. [inference] To classify a deployment, a committee needs terms the paper does not define: "final", "favourable", "low-cost", "human on the loop", and the effective grade of advice that staff routinely follow (F09, F11, F45, F46).
3. [inference] At high volume, grade 1 needs a real human decision on every adverse case, and without funded capacity it becomes a rubber stamp. Two designs work: automated approvals with a human deciding every non-approval, or no automated refusals at all (F16).
4. [inference] Seeding known errors into live clinical or welfare review could harm a real person if a reviewer misses one. So seeded cases must be synthetic, or intercepted before they take effect (F20).
5. [inference] Procurement needs a route up as well as down. A vendor with strong evidence has no stated path to a higher grade (F06).
6. [inference] Revising the paper is cheap and reversible; the real risks are added length and unverified additions. So the paper gains most from:
   - small, local fixes;
   - one table of which conditions apply at each grade;
   - additions only where they are verified;
   - a fresh audit;
   - review by a clinician-ethicist, an international humanitarian law expert, and a credit or social-security regulator.

**Key concepts**
- Usability through named bodies: 0.8. Readers must know who certifies what.
- Whether grade 1 works at volume: 0.75. This decides whether grade 1 is real.
- A path to approval: 0.65. Vendors and committees need a route up.
- Economy of revision: 0.6. The paper's strength comes from fixes, not length.
- Safe testing with seeded errors: 0.5. The test itself can cause harm.

**Mind map: Pragmatic**
- Question: can the paper's readers use it, and what should happen next?
  - The readers
    - Who certifies (credit, welfare)
    - The terms needed to classify a deployment
  - Volume
    - Grade 1 on every case needs staff
    - Automate approvals; humans decide every non-approval
  - Testing
    - Seeded errors are synthetic or intercepted
  - Routes
    - Down: triggers (these exist)
    - Up: a rule based on evidence (missing)
  - The revision itself
    - Local fixes and one new table
    - Verified additions; a fresh audit; expert review

## Transparency report

- **Framing:** how to revise the paper into the strongest defensible account of AI decision authority over medicine, military force and economic allocation, and how far to trust its central recommendation. No clarifying question was needed; Assumption 1 settles the one ambiguity.
- **Goal:** a revision plan the authors can carry out, plus confidence scores calibrated by part.
- **Constraints:** keep the paper a normative framework for committees and regulators; keep its thesis and architecture unless they fail; add only verified claims; prefer the smallest fix; leave values choices to the authors.
- **Stakeholders:**
  - the authors;
  - their readers: committees, procurement officers, regulators and ethics boards;
  - the people affected: patients, claimants, borrowers and people in conflict zones;
  - frontline staff named as accountable;
  - certifiers.
- **What a good answer must do:** locate weaknesses exactly, propose fixes that create no new conflicts, score confidence by part, and keep facts separate from values.
- **Assumptions:**
  1. "Strongest defensible" means most likely to survive hostile but fair expert review.
  2. The authors want to keep the graded architecture.
  3. "Central recommendation" means §1's position as Table 1's ceilings for persons put it into practice.
  4. The readership is international.
- **Which lens drove which steps:**

  | Source | Steps it drove |
  |---|---|
  | Analytical | R1, R7 |
  | Critical | R2, R5, R9 |
  | Creative | R4, R6, and the burden-of-proof clause in R13 |
  | Systems-thinking | R10, and the linked decision classes behind R4 |
  | Pragmatic | the volume rule (F16), safe seeding (F20), R15 |
  | The audit | R8, R11 to R14 |

- **Set aside, and why:**
  - AI tools for affected people: speculative, and they close no finding.
  - The aviation collision-avoidance case (TCAS): used only to motivate "effective grade".
  - A wider survey of national weapons and AI law: not needed to close any finding.
  - Closed-loop insulin as a case: the dosing row already covers it.
- **Confidence and what drives it:**
  - This revision plan: 68 (textual repairs 90, substantive additions 68, external cases 80). Quoted and verified evidence raises it; edits that interact and unverified items from my own knowledge lower it.
  - The paper's central recommendation: 40 as written, 60 for its core direction. Agreement with the ICRC and the AI Act raises it; F01 to F03 and F05 lower it.
- **One model, five lenses:** all five lenses come from one model, so their agreement is not independent verification. This matters most for C1 and C4.
- **What the reasoning cannot establish:**
  - how far reviewers defer to the system at grade 1 once the proposed conditions apply;
  - whether the asymmetry premise holds in credit or welfare;
  - whether review on request protects better than grade 1 at volume;
  - which ceiling values are right, since they rest on values;
  - whether the revised paper is free of new conflicts.
- **What to verify with sources:**
  - every item listed under "Not verified" in What was checked;
  - Obermeyer's enrolment rule, in the original paper;
  - the royal commission's findings on human review.
- **Experts who should review it:**
  - a clinical ethicist or health regulator, for the medicine rows and the screening class;
  - an international humanitarian law specialist, for the military rows;
  - a credit or social-security regulator or lawyer, for the economy rows.

  This analysis is not legal, medical, military or financial advice.
- **What the authors still have to decide:**
  - D1: whether to allow an exception, earned with evidence, where the alternative is no service at all;
  - D2: grade 1 with conditions, or an automated decision with review on request, domain by domain;
  - D4: whether systems may target military equipment autonomously, and how to treat crewed objects;
  - whether the market rows cover public authorities only;
  - the ceiling for screening decisions.
- **Method notes:** the mind maps are plain indented outlines, because colour is not available in a plain Markdown file. I ran 7 web searches and read 8 pages. Only pages I read are cited.
- **Sources read:**
  - [ICRC position on autonomous weapon systems (12 May 2021)](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems)
  - [EU AI Act Service Desk, Article 14: Human oversight](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14)
  - [TRID record: Parasuraman and Manzey (2010), abstract](https://trid.trb.org/View/1085175)
  - [Lecture summary of Obermeyer et al. (2019), Heidelberg University course material](https://www.cl.uni-heidelberg.de/courses/ws19/bias/material/obermeyer.pdf)
  - [Wikipedia: Royal Commission into the Robodebt Scheme](https://en.wikipedia.org/wiki/Royal_Commission_into_the_Robodebt_Scheme)
  - [Wikipedia: Robodebt scheme](https://en.wikipedia.org/wiki/Robodebt)
  - [Law Society Journal: Robodebt royal commission findings](https://lsj.com.au/articles/crude-cruel-and-unlawful-robodebt-royal-commission-findings/)
  - [SEC press release 2013-222: Knight Capital](https://www.sec.gov/news/press-release/2013-222)
