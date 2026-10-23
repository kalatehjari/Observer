Model ID: claude-opus-5-5

# Observer review: revising "Graded Authority for AI over Sensitive Human Matters"

Method: the Observer multi-lens skill as written (cycle-10 version), applied at full depth for a high-stakes question. Reading: the skill file and the draft paper only, plus targeted checks of the paper's factual claims (see the transparency report). Conventions: exact quotations from the draft are in double quotation marks; proposed wording is in italics; *verified* means checked against a source read in this session; *own knowledge* means not checked here. Finding IDs (F01 to F31) are recorded in full in Section 3.

## Summary

**Question as framed.** How should this draft be revised so that its answer to whether AI systems should hold decision authority over medicine, military force and economic allocation is the strongest position that survives expert critique? And how far can its central recommendation be trusted, both as written and once repaired?

**Recommendation.** Keep the paper's architecture and core thesis, and repair them in this order (all 14 steps are in Section 1):
1. Narrow the thesis to adverse determinations about particular persons, and define "final authority" by its effect.
2. Remove the contradictions in Table 1: the grade 4 stop and the credit-refusal row.
3. Judge asymmetry by effects on persons, so that zero-sum rankings and scrutiny flags count as adverse.
4. Attach conditions to grade 1, and grade systems by how their outputs function in practice.
5. State the premises that turn conditions into ceilings, naming the standing premise as a values commitment.
6. Answer the comparative-performance objection at full strength, with an evidence ladder for ceilings.
7. Complete the military, medical and market rows.
8. Re-audit the revised draft.

**Confidence.**
- This revision plan: 75/100. By part: consistency repairs 90; argument reconstruction 70; added evidence and cases 60 until verified; credit and market choices 65. The plan is fully reversible.
- The paper's central recommendation as written: 25/100, because it fails its own consistency checks.
- Its repaired core: 70/100.
- Parts of the central recommendation, as written → repaired:
  - welfare adverse determinations at grade 1: 70 → 80;
  - no delegated force against persons: 60 → 70;
  - medical ceilings: 45 → 60;
  - credit refusals: 20 → 50;
  - market rows: 30 → 55;
  - asymmetry principle: 25 → 70;
  - five conditions as a licensing test: 50 → 75.

**Main divergence (PD1).** When a system outperforms current human-led practice with subgroup validity, should ceilings rise? Raising them serves welfare in the near term. Holding them fixed for adverse determinations respects the standing premise (the person is owed an answerable decider) and avoids feeding a complacency ratchet over the long term. This is partly a values choice the author must own.

**Most serious problems, ranked by severity.**
1. High, F01: the thesis bars final authority over person-specific determinations, but Table 1 grants grades 2 to 4 over them, and "final authority" is never defined (Abstract; §1; Table 1).
2. High, F02: by the paper's own definitions the five conditions cannot hold at grade 4, yet Table 1 licenses a grade 4 stop that actually fits grade 3 (§2; §5, Table 1).
3. High, F03: credit refusals at grade 2 contradict the asymmetry rule, the scope set in §1, §6.4 and Rec 2 (§5, Table 1).
4. High, F04: the asymmetry rule sorts by the system's verb, so it misclassifies zero-sum ranking (the Obermeyer case) and fraud flags (§5; §1; §3.1).
5. High, F05: grade 1 carries no conditions, although it holds the highest-stakes classes and automation bias affects advice too (§2; §4.5; §6.4).
6. High, F06: the answerability argument does not generate the ceilings, and the premises that do are unstated (§1; §4.1; §5).
7. High, F07: the strongest form of the lives-saved objection, that human-led practice can be worse, is not answered (§6.1).
8. High, F08: the §3.2 case is never graded, offensive anti-materiel autonomy is missing, and "incoming munitions" conflicts with "defensive envelopes against objects" (§3.2; Table 1; Rec 5).
9. Medium, F11: "AI system" is never defined, and Robodebt is rule-based automation, not AI (§1; §3.3).
10. Medium, F12: the claim that no one can answer for market harms is overstated and conflicts with §4.1, and its key term is undefined (§5; Rec 6).
11. Medium, F13: naming a person does not secure answerability (§5, condition 1; §4.1).
12. Medium, F15: the conditions have no certifier, timing, test or rule for what happens on failure (Rec 1; §5).

Other findings: medium F09, F10, F14 and F16 to F22; low F23 to F31.

**Not professional advice.** This analysis is not legal, medical, financial or military advice. Before publication, the revised paper should be reviewed by an international humanitarian law specialist, an EU data-protection and AI Act lawyer, a clinical-safety or medical-device regulatory specialist, and specialists in consumer-credit and administrative law.

## 1. Recommendation

Keep the paper's architecture (grades, licensing conditions, an asymmetry rule, domain ceilings) and its core thesis. As drafted, though, Table 1 contradicts both the thesis and the licensing rule, the asymmetry rule misclassifies the paper's own cases, and the strongest objections are answered only in weak forms. Revise in this order:

1. **Restate the thesis by effect.** No final AI authority over adverse determinations about particular persons: withholding or withdrawing care, benefit or credit; imposing a debt or sanction; using force against persons. Define "final authority" by effect, and say that executing within an envelope an answerable human set for that person is not final authority (F01).
2. **Remove the grade 4 contradiction.** Reclassify the infusion stop as grade 3 and state that no decision class licenses grade 4. Add a short table showing how each condition applies at each grade's unit of control (F02, F16).
3. **Rebase asymmetry on effects on persons.** A ranking for a scarce good is adverse to those it places lower. A flag that triggers scrutiny is adverse to the person flagged. False alarms and missed cases both carry costs. Add a row for fraud and welfare-investigation flags (F04, F09).
4. **Give grade 1 conditions.** Fix a system's grade by how its output functions in practice. For adverse decision classes, require the decision-maker of record to pass a real-judgement test, and amend §4.5 and §6.4 to match (F05, F28).
5. **Show how conditions become ceilings.** Add a short subsection that states the error-cost premise and the standing premise. Label the standing premise a values commitment, ground it in due process and existing law, and answer the institutional-liability objection (F06, F20).
6. **Meet the comparative objection at full strength.** Rewrite §6.1. Concede where better-performing systems justify higher grades, keep the standing floor for adverse determinations, define the evidence that raises or lowers a ceiling, correct the use of Obermeyer, and tighten the contrast in §6.2 (F07, F10, F17).
7. **Resolve credit refusals and favourable errors.** The smallest fix is ceiling 1, with the system allowed only to approve or refer. The alternative is a statute-licensed grade 2 with review before the refusal takes effect. In either case the deployer bears the cost of its system's favourable errors (F03, F18).
8. **Complete domain coverage.** Grade the §3.2 case. Add the ICRC's limits on situations of use and its supervision requirements, and add a row for offensive engagement of objects. Reconcile "incoming munitions" (Table 1) with "defensive envelopes against objects" (Rec 5), and address verification and interim national policy. Add an autonomous-screening row in medicine (F08, F22, F19).
9. **Define scope.** Say whether "AI system" covers rule-based automated decision systems, and note that Robodebt was rule-based. Add a machine-learning welfare case only after verifying it (F11).
10. **Repair the market section.** Define "discretionary AI market interventions", replace the absolute claim that no one can answer, and anchor Rec 6 in existing controls on algorithmic trading (F12).
11. **Tighten answerability and explanation.** In condition 1, require control and understanding in proportion to accountability. Narrow §4.4 to reasons a person can dispute (F13, F14).
12. **Make the conditions operational.** State who certifies, when, by what test and what follows a failure. Replace "weakly met" with a rule, add revalidation that is robust to selective labels, and name the lawful data route and fairness criterion for audits (F15, F21, F23).
13. **Fix the low-severity items.** These are seeded-error safety, the credit-reasons claim, attributions, terminology, references and uncited claims (F24 to F27, F29 to F31).
14. **Re-audit the whole revised draft.** Steps 1 to 8 change the abstract, Table 1 and the recommendations at once, and revisions of this size often introduce new conflicts.

**Top next steps.**
- First, Steps 1, 2 and 7. These remove the direct contradictions with small edits.
- Second, Steps 3 and 4. These repair the two principles every row depends on.
- Third, Steps 5 and 6. These supply the missing argument and answer the strongest objection.

**What would change this recommendation.**
- **A permissive thesis.** If the author wants AI authority to be acceptable when ex post remedies exist, Steps 1, 3 and 7 change, and the paper becomes a remedy-based framework close to GDPR Article 22 rather than a human-decision framework.
- **Rejecting the standing premise.** Adverse ceilings would then rest on error cost alone and become evidence-indexed everywhere, so Step 6 widens.
- **Weaker comparative evidence.** If verification shows the comparative-performance studies I cite from memory are weaker than I recall, Step 6's concession shrinks.
- **A new weapons instrument.** If a legally binding instrument on autonomous weapons was concluded after June 2026, Step 8's framing changes.

### 1.1 Check of the recommendation

Each step was tested against the framing constraints (keep the architecture, prefer the smallest defensible fix, add no unsupported claim, fit a journal article) and against the audit.

- **Steps 1 and 3 must share one definition of adverse.** Two definitions would create a new conflict. Rec 2 already relies on "Adverse determinations", so the definition belongs once, in §5, and every other passage refers to it.
- **Step 2 is the smallest fix for F02.** It changes one table cell and two sentences. The alternative, keeping grade 4 and exempting fail-safe actions from conditions 4 and 5, adds more machinery than the problem needs.
- **Step 4 must not invent thresholds.** The paper should require each deployment to set and justify its own review-time and override-rate triggers rather than state numbers it cannot support.
- **Step 6 changes the definition of a ceiling.** It makes ceilings hold under current evidence, which conflicts with §5's definition ("A ceiling is the highest grade a decision class may take, given the conditions.") unless that sentence is revised too. The step includes that revision.
- **Step 7 involves a choice.** Option (a) changes only the credit row and creates no new conflict, but it is stricter than EU law and costly at volume. Option (b) needs edits in §1, §5 and §6.4. The choice is the author's (PD2).
- **Step 8 leaves two ceilings to the author.** I recommend aligning with the ICRC's restrictions, which I verified, but I do not supply a ceiling for offensive anti-materiel autonomy or crewed objects, because the paper has not argued for one.
- **Some steps suggest sources from my own knowledge.** These are in Steps 6, 8, 9, 11 and 12 and were not checked in this pass. Each must be verified first, because adding them unverified would introduce unsupported claims (see the transparency report).
- **Length.** The additions come to roughly 800 to 1,000 words: the Step 5 subsection, the §6.1 rewrite, three or four table rows, one implementation paragraph, and the scope and legal-grounding sentences. Deleting the passages they replace offsets part of that.
- **Every high-severity finding has a step.** F01 (1), F02 (2), F03 (7), F04 (3), F05 (4), F06 (5), F07 (6), F08 (8).
- **F07 stays partly open after Step 6.** Whether systems outperform human-led practice depends on the domain and is unsettled. The paper can state the standard and the trade-off but cannot settle the facts.
- **Audit the revised version again.** The author should re-audit after revising, because revisions of this size often introduce new conflicts, especially between the abstract, Table 1 and Section 7.

### 1.2 Confidence

**This revision plan: 75/100** that it survives the checks still needed: a re-audit of the revised draft, verification of the sources suggested from my own knowledge, review by domain experts, and a check for legal and policy changes after June 2026.
- **Up:** the high-severity findings are textual, so any reader can check them. The paper's load-bearing empirical claims (ICRC, Obermeyer, Robodebt, AI Act Article 14) were verified, so the plan does not have to replace its core evidence. Most fixes are local.
- **Down:** Steps 3, 5 and 6 add conceptual machinery that can create new conflicts. Several suggested additions rest on own knowledge not checked here. All five lenses come from one model, so their agreement is not independent verification.
- **Parts:**
  - Consistency repairs (Steps 1, 2 and 4, and the table edits in Steps 7 and 8): 90.
  - Argument reconstruction (Steps 3, 5 and 6): 70.
  - Added evidence and cases: 60 until verified.
  - Credit and market choices (Steps 7 and 10): 65, because values choices remain.
- **Reversibility:** fully reversible, since the paper is a draft.

**The paper's central recommendation**, scored separately. I take it to be four things: no final AI authority over determinations about particular persons; bounded delegation under five conditions and an asymmetry rule; the Table 1 ceilings; and the §7.1 recommendations.
- **As written: 25/100.**
  - Its checks: internal consistency, which it currently fails (F01 to F05); expert review; and the strongest objections (F06, F07).
  - Down: contradictions at the licensing core; an asymmetry rule that misclassifies the paper's own cases; grade 1 left without conditions.
  - Up: its core empirical claims are accurate, and it agrees with the ICRC position and with EU oversight law.
- **Repaired core, after Steps 1 to 8: 70/100.**
  - Its checks: comparative-performance evidence domain by domain; the standing premise under critique; the cost of real judgement at volume; legal review.
  - Up: verified failure cases (Robodebt, Obermeyer) show exactly the failures the conditions target. The core agrees with the ICRC and with EU rules on automated decisions and oversight; the oversight rules are verified, the rules on automated decisions are own knowledge. Errors in the two directions also differ in reversibility, which favours starting with low ceilings.
  - Down: comparative evidence could move the medical ceilings; the standing premise is a values commitment that able critics reject; real judgement may be unaffordable at the volumes involved.
- **Reversibility:** as policy, low ceilings can be raised later on evidence, while mass adverse errors are slow to undo. Robodebt's averaging ran until November 2019, and the Royal Commission reported in July 2023 (verified).

By part, as written and as repaired by the plan:

| Part of the central recommendation | As written | Repaired | Main remaining check |
|---|---|---|---|
| Welfare denials, debts and sanctions at grade 1 with a named decision-maker | 70 | 80 | Real judgement at volume (F05) |
| No delegated force against persons; a human decision for each engagement | 60 | 70 | State practice, verification, anti-materiel coverage (F08, F22) |
| Medical ceilings (withholding care and treatment selection at 1, escalation at 2, dosing at 3) | 45 | 60 | Comparative evidence; screening precedent (F07, F19) |
| Credit refusals at grade 2 | 20 | 50 | A values choice and its cost (F03; PD2) |
| Market rows (pre-committed rules at 3, discretionary interventions at 1) | 30 | 55 | Scope of the term; existing controls (F12) |
| Asymmetry principle | 25 | 70 | One definition of adverse (F04) |
| Five conditions as a licensing test | 50 | 75 | Operational tests (F15, F16) |

## 2. Convergence zones and productive divergences

All five lenses and this synthesis come from one model, so agreement between lenses is not independent verification. Each zone below says what its agreement rests on.

### Convergence zones

- **CZ1. Table 1 must follow from one explicit rule.** Lenses: Analytical, Creative, Systems-thinking, Pragmatic.
  - Rests mainly on shared evidence: the conflicts F01 to F03 are visible in the text.
  - Also rests on a shared assumption that a rule-derived table is better than case-by-case rows. That part is a design preference, and weaker than it looks.
- **CZ2. Grade 1 is not a safe harbour (F05).** Lenses: Analytical, Critical, Systems-thinking, Pragmatic.
  - Rests on shared evidence: the paper's own §2 and §4.5, plus the automation-bias literature it cites. The paper characterises that literature from its author's knowledge, and I checked it against mine.
  - Moderately strong.
- **CZ3. Direction must be judged by effects on persons (F04, F09).** Lenses: Analytical, Critical, Creative, Systems-thinking.
  - Rests on shared evidence from the paper's own cases: the Obermeyer ranking, whose automatic enrolment of the top tier I verified, and the fraud flags in §1.
  - Strong for the conflict. The outside examples (sepsis alerts, the Dutch childcare-benefits case) are own knowledge.
- **CZ4. Naming someone is necessary but not sufficient for answerability (F13).** Lenses: Critical, Systems-thinking, Analytical.
  - Rests on shared evidence: Robodebt, where individuals were referred for possible action only after the harm (verified), and the paper's own traceability test.
  - The moral-crumple-zone concept is own knowledge.
- **CZ5. The comparative objection must be met at full strength (F07).** Lenses: Critical, Creative, Pragmatic.
  - Rests on studies I know but did not check in this pass, so this zone is weaker than it looks.

### Productive divergences

- **PD1 (main). Should ceilings rise with evidence?**
  - Critical and Creative: when a system outperforms current human-led practice, with subgroup validity on the right target, a fixed low ceiling costs the people it is meant to protect. Ceilings should therefore climb an evidence ladder.
  - Systems-thinking: rising ceilings feed the reliability and complacency ratchet. Deskilling erodes the human comparator, so apparent superiority partly manufactures itself.
  - Analytical: the standing premise does not depend on performance at all.
  - Source: values (welfare against the standing of the affected person) and time horizon (near-term outcomes against long-term capacity and answerability).
  - Judgement: productive. This is a real trade-off the decision-maker has to own. A defensible position lets non-adverse and protective functions climb the ladder and keeps a standing floor for adverse determinations. That position is a values choice, not a finding.
- **PD2. Credit refusals: principle or feasibility?**
  - Analytical and Critical: the paper's own asymmetry rule requires a human decision-maker of record.
  - Pragmatic: volume and cost weigh against that, and existing law offers another model. Under GDPR Article 22 (own knowledge), a solely automated decision is allowed in defined cases with a right to human intervention afterwards.
  - Source: values (access and cost against standing) and a factual dispute (does human review improve credit decisions, or mainly raise their cost?).
  - Judgement: productive. The author chooses between the two options in Step 7.
- **PD3. Scope: AI or all automated decision systems?**
  - Analytical prefers precision: an AI-only thesis argued from AI-specific premises.
  - Systems-thinking and Pragmatic prefer coverage, because the failures and their governance are the same for rule-based systems, as Robodebt shows.
  - Source: different framing goals.
  - Judgement: productive but low-stakes. I recommend the broad scope, with an explicit statement of which arguments depend on learning (F11).
- **PD4. Can coordination answer competitive pressure in war?**
  - Systems-thinking and Critical doubt that limits on a software property can be verified, and expect defection under jamming.
  - The paper, consistent with the ICRC (verified), relies on coordinated limits.
  - Source: a factual dispute (whether limits are verifiable, and whether autonomy improves discrimination) and values (what risk is acceptable).
  - Judgement: productive. The paper should state its interim unilateral position (F22).
- **Noise, resolved.** Creative proposed a full second axis for the grade scale; Pragmatic preferred parsimony. This is a design detail, not a real trade-off: adding a remedy column to Table 1, rather than a new scale, resolves it.

## 3. Audit of the draft

### 3.1 Claims about the world

Claims that carry the conclusions come first, then figures, dates, attributions and absolute claims. For each claim the table answers two questions: does the draft support it at its stated strength, and is it true?

| Claim (location) | Supported at stated strength? | True? What I know or found | Result |
|---|---|---|---|
| Obermeyer: using cost as the label under-identified Black patients, because less was spent on them at equal illness (§3.1, §4.3) | Yes, cited | Verified in a copy of the article. The label was next-year cost. The score was calibrated for cost across races but not for health. In the article's simulation without the bias, the Black share of the highest-risk group rises from 17.7% to 46.5% | True |
| "The algorithm was accurate about its label" (§3.1) | Yes | Verified: the score was well calibrated for cost across races | True |
| Obermeyer shows that "A system that saves more lives overall can still under-serve a subgroup" (§6.1) | No | The study measured label bias. It did not measure lives saved | Overstated (F10) |
| "One flawed label distorts every decision the system makes" (§6.2) | No | Own knowledge: label bias shifts a ranking, and many individual decisions stay the same | Overstated (F17) |
| What the ICRC recommends prohibiting (§3.2) | Yes, cited | Verified (ICRC position, 12 May 2021): rule out unpredictable systems, and systems designed or used to apply force against persons | True |
| What the ICRC recommends restricting (§3.2) | Partly | Verified: the ICRC also proposes limits on situations of use (for example, only where civilians or civilian objects are not present) and requirements for human–machine interaction (supervision, timely intervention, deactivation). It recommends new legally binding rules | Incomplete (F08) |
| "The ICRC's recommendations are a coordinated response of this kind" (§6.3) | No | Verified: they are recommendations that States adopt rules, not a response already in force | Overstated (F22) |
| Robodebt raised debts by averaging income (§3.3) | Yes, cited | Verified (Royal Commission overview): the scheme relied heavily on income averaging and did not comply with the income-calculation provisions of the Social Security Act. Debts stopped being raised solely on averaged income in November 2019. The final report was released on 7 July 2023 | True |
| "the burden of showing that a debt was wrong fell on the recipient" (§3.3) | Cited | Own knowledge: yes, in effect. Verified only indirectly: the page I read says recipients lacked the means to supply years-old income evidence | Likely true; not verified directly |
| "no official had individually reviewed" (§3.3) | Cited | Own knowledge: staff checks of discrepancies were removed when the online system began in 2016. Not checked here | Likely true; unverified |
| Robodebt as evidence about AI (§3.3, inside an AI thesis) | Not argued | Own knowledge: Robodebt was a fixed averaging and data-matching rule, not machine learning | Scope problem (F11) |
| The AI Act requires high-risk systems to be designed for effective human oversight (§6.4) | Yes, cited | Verified (European Commission AI Act Service Desk): Art 14(1) requires this. Art 14(4)(b) names automation bias, and Art 14(5) requires two-person verification for remote biometric identification | True; the reference link is unofficial (F30) |
| Characterisations of Matthias, Sparrow, Santoni de Sio and van den Hoven, Doshi-Velez and Kim, Parasuraman and Manzey, Bainbridge, Topol and Scharre (§3–4) | Cited | Own knowledge: accurate | True, apart from a small addition (F27) |
| Eubanks: harm lies largely in "the absence of anyone who will hear a challenge" (§4.2) | Cited | Own knowledge: this is a theme of the book, not its main claim | Partly supported (F26) |
| "A flag that moves a case up a queue costs little if it is wrong" (§5) | No support | Own knowledge against it: widely deployed sepsis alerts carry an alert burden and miss cases; scrutiny flags in welfare | Overstated (F09) |
| "most of the triage benefit comes from escalation" (§6.1) | No support | I know of no source that splits triage benefit this way. Lean: unknown. Settling it needs a study comparing the benefit from escalation with the benefit from deprioritisation | Unsupported (F09) |
| Errors toward "attention or benefit" are usually cheaper (§5) | No support | Own knowledge against it: scrutiny flags; recovery of favourable errors (Robodebt recovered alleged overpayments) | Overstated (F04, F18) |
| "No one can answer for a collective harm produced by a learned discretionary policy" (§5); "no single person can answer for it" (§3.3) | No support | Own knowledge against it: firms carry duties and sanctions for algorithmic trading, under EU kill-functionality rules and the US market-access rule, with enforcement after Knight Capital in 2012 | Overstated (F12) |
| "the model's reasons are often unavailable to the applicant" (§3.3) | No support | Own knowledge: US law requires lenders to give the principal reasons for adverse credit action, and EU law gives rights on automated decisions. In practice the reasons are often generic | Partly true; overstated as to law (F25) |
| "Human bias is heterogeneous" (§6.2) | No support | Own knowledge: human biases are often shared and institutional | Overstated (F17) |
| "Armed forces use systems that classify objects and people faster than staff can check them." (§1) | No citation | Plausible; not checked | Unverified (F31) |
| The AI Act was published in the Official Journal on 12.7.2024 (References) | n/a | Verified from the source pages' headers (OJ L 2024/1689, 12.7.2024) | True |

### 3.2 Record of findings

Severity: **high** if it changes the conclusion, **medium** if it misleads a reader, **low** otherwise.

Index by type:
- Conflicts: F01, F02, F03, F04, F05, F08, F12, F13.
- Gaps: F01, F05, F06, F07, F08, F11, F13, F15, F16, F18, F19, F20, F21, F22, F23, F24.
- Unsupported, overstated or unverified claims: F04, F08, F09, F10, F12, F14, F17, F22, F25, F26, F27, F31.
- Convention or imprecision: F28, F29, F30.

#### High severity

**F01. The thesis conflicts with Table 1, and "final authority" is never defined.**
- **Type:** conflict; gap (undefined key term).
- **Passages:**
  - Abstract: "argues that AI should not hold final authority over determinations about specific persons in medicine, military force or the economy"
  - §1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
  - Table 1, person-specific rows with ceilings above 1: "Dosing adjustments within clinician-set limits" (3); "Automatic protective stop, such as pausing an infusion on detected occlusion" (4); "Credit refusals" (2); "Favourable or low-cost approvals" (2).
  - §5: "No domain licenses grade 4 for decisions about persons."
  - §7.2: "yield ceilings that are low for decisions about persons and higher for narrow, reversible or envelope-bounded functions"
- **Weakens:** the central recommendation. A reader cannot apply the thesis, because the paper's own table appears to break it.
- **Severity:** high.
- **Smallest fix:**
  - Narrow the thesis to adverse determinations about particular persons.
  - Define the term, for example: *A system holds final authority over a determination when its output takes effect without a prior decision on that case by an answerable human exercising independent judgement, or when such a decision exists only in name.*
  - Add: *Executing within an envelope that an answerable human set for that person, as in dosing, is not final authority over the determination.*
- **Other passages the fix must change:**
  - the Abstract sentence;
  - both §1 thesis sentences;
  - the §5 grade 4 sentence (together with F02);
  - "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons." (define "value-laden allocation" or drop it);
  - the §7.2 sentence;
  - Rec 2's "Adverse determinations", which must use the single definition shared with F04.

**F02. Under the paper's own conditions grade 4 can never be licensed, and the protective stop it licenses at grade 4 is in fact grade 3.**
- **Type:** conflict.
- **Passages:**
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - §5, condition 4: "The human has the time, information, competence and incentives to disagree, and that capacity is tested."
  - §5, condition 5: "Where a system acts without case-by-case approval, its limits are fixed in advance by accountable humans and enforced by a stop."
  - §2, grade 4: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
  - §2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
  - Table 1: "Automatic protective stop, such as pausing an infusion on detected occlusion" (4), "Narrow, reversible, moves to a safe state".
  - §5: "The only grade 4 case is a narrow protective stop that is reversible and moves the system to a safe state."
  - §6.1: "the argument supports grade 3 or 4 use, as in dosing or protective stops"
- **The problem:**
  - By definition, a grade 4 system has neither a timely veto nor limits fixed by humans, so it cannot meet conditions 4 and 5.
  - The stop's trigger limits are set in advance by accountable humans, the manufacturer or the clinician (own knowledge of how such devices work), and a clinician can restart the infusion.
  - So the stop meets the definition of grade 3, not grade 4.
- **Weakens:** the claim that the account derives its ceilings from its conditions, and the stated conclusion about the one grade 4 case.
- **Severity:** high.
- **Smallest fix:** set the stop's ceiling to 3, and replace the "only grade 4 case" sentence with *No decision class licenses grade 4.*
- **Other passages the fix must change:**
  - merge it with "No domain licenses grade 4 for decisions about persons.";
  - in §6.1, "grade 3 or 4 use" becomes *grade 3 use*.

**F03. Credit refusals at grade 2 contradict the asymmetry rule and the paper's own scope.**
- **Type:** conflict.
- **Passages:**
  - Table 1: "Credit refusals" (2), "Reason codes; review on request; disparate-impact audit".
  - §5: "Adverse steps therefore need a human decision-maker of record."
  - §2, grade 2: "The system's option takes effect for each case unless a human actively overrides it within a set window."
  - §1: "in some lending and administrative settings, over favourable or low-cost decisions"
  - §3.3: "A refusal can exclude a person from housing" and "Credit scoring follows the same logic."
  - §6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible at all."
  - Rec 2: "need a named human decision-maker of record unless a statute expressly licenses grade 2 with conditions"
- **The problem:**
  - A refusal is adverse, and it is neither favourable nor low-cost.
  - The paper says credit follows the same logic as Robodebt, yet gives it a higher ceiling than welfare.
  - Review on request is applicant-initiated and comes after the fact. It is not an override window for each case.
  - It also puts the burden of starting review on the person, which is the feature the paper condemns in Robodebt ("the burden of showing that a debt was wrong fell on the recipient").
  - Credit is a high-volume setting of the kind §6.4 excludes.
- **Weakens:** the asymmetry rule, the economy ceilings and the central thesis.
- **Severity:** high.
- **Smallest fix:** change the row to *Credit refusals, ceiling 1: named human decision-maker of record; the system may approve or refer.* Automated approvals then fall under the existing approvals row.
- **Alternative, a values choice (PD2):** keep grade 2 only as the statutory exception Rec 2 already contemplates. It would require human review before a refusal takes effect where feasible, or automatic review whenever the applicant asks, at no burden to them. The paper must then say why credit differs from welfare, for example that private alternatives exist and no debt is imposed.
- **Other passages the fix must change:** none under the smallest fix. Under the alternative, the §1 scope sentence, the §5 asymmetry paragraph and the §6.4 high-volume sentence must all name the exception.

**F04. The asymmetry rule sorts decisions by the system's verb, not by their effects on persons.**
- **Type:** conflict with the paper's own cases; gap (cases not covered); overstated claim.
- **Passages:**
  - §5: "Under asymmetry, automated systems may escalate, prioritise, approve or protect more freely than they may deny, deprioritise, sanction or harm."
  - §5: "Errors that move a person toward attention or benefit are usually cheaper and more correctable than errors that withhold care, refuse benefit or impose a debt."
  - Abstract: "automated systems may escalate, prioritise or approve more freely than they may deny, deprioritise or sanction"
  - §1: "Hospitals rank patients for scarce beds and specialist review."
  - §1: "Public agencies score benefit claims and flag families for fraud review."
  - §1: "over steps that only escalate or protect"
  - §3.1: "a scarce programme of nurse outreach and extra attention"
  - Table 1: "Escalating a case for urgent clinician review" (2) and "Deprioritising a patient or withholding scarce care" (1).
- **The problem:**
  - (a) In a ranking for a scarce good, prioritising one person deprioritises another. The Obermeyer tool was such a ranking. Verified: the programme automatically enrolled patients above the 97th percentile of the score and referred those above the 55th to their physician. The tool that did the harm was therefore a favourable default, and the harm fell on those it left out. Under the paper's rule the same tool is both a freer prioritisation and a grade 1 withholding of scarce care.
  - (b) A fraud flag or child-welfare flag escalates a case, but it exposes the person to scrutiny, which is adverse. §1 names such flags, yet no Table 1 row covers them.
- **Weakens:**
  - the sixth principle;
  - the three medicine rows that depend on direction;
  - the reach of Rec 2;
  - the second reply in §6.1 (see F09).
- **Severity:** high.
- **Smallest fix:**
  - Add to §5: *Direction is judged by effect on persons, not by the system's verb. A ranking for a scarce good is adverse to those it places lower and takes the ceiling for deprioritisation. A flag that triggers scrutiny, investigation or sanction is adverse to the person flagged.*
  - Add a Table 1 row: *Flagging a person or family for fraud or welfare investigation, ceiling 1: a named human decides whether to open a case; reasons are recorded; flags are audited for disparity.*
  - Qualify the escalation row with *where review capacity is not scarce*.
- **Other passages the fix must change:**
  - the Abstract asymmetry sentence;
  - §1 "over steps that only escalate or protect";
  - the §5 flag sentence (F09);
  - the second reply in §6.1 (F09);
  - Rec 2's notion of adverse.

**F05. Grade 1 carries no conditions, although it holds the highest-stakes decision classes.**
- **Type:** gap; conflict.
- **Passages:**
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - §2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
  - §4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
  - §6.4: "When these conditions fail, the system drops to grade 1, with the reviewer's own judgement required."
  - Table 1, grade 1 conditions: "Human decision for each engagement"; "Named human decision-maker of record"; "Clinician decides, with reasons recorded".
- **The problem:**
  - Grade 1 covers welfare denials, force against persons and withholding care.
  - §4.5's "every grade above advice" contradicts §2's admission that the same failures arise at grade 1.
  - The automation-bias research the paper cites largely concerns decision aids, which is to say advice (own knowledge of Parasuraman and Manzey).
  - So a grade 1 system whose recommendations are adopted without independent judgement holds authority in fact.
  - §6.4's fallback to grade 1 treats grade 1 as immune to this (inference).
- **Weakens:** every grade 1 ceiling, and the reply in §6.4.
- **Severity:** high.
- **Smallest fix:**
  - Add to §2: *A system's grade is fixed by how its output functions in practice. Where recommendations are adopted without independent judgement, the system holds grade 2 authority and must meet the conditions of Section 5 or be withdrawn.*
  - Add to §5: *For adverse decision classes, conditions 2 to 4 also apply at grade 1, with condition 4 read as real judgement by the decision-maker of record.*
  - In §4.5, change "every grade above advice" to *every grade from advice upward*.
- **Other passages the fix must change:**
  - the §6.4 fallback sentence: *drops to grade 1, where the same tests apply*;
  - Rec 4: extend logging, minimum review times and override-rate monitoring to grade 1 adverse decisions;
  - the grade 1 conditions in Table 1;
  - F28.

**F06. The answerability argument does not generate the ceilings.**
- **Type:** gap (unstated premises; strong objection unanswered).
- **Passages:**
  - §1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."
  - §1: "Any such grant must meet five conditions, and its strength must track the stakes."
  - §4.1: "A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
  - §7.2: "AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge."
- **The problem:**
  - The premise shows only that a system cannot hold authority alone. Conditions 1 and 2 supply an answerable institution and a review route at grades 2 and 3.
  - So the premise cannot explain why welfare denials sit at grade 1 and credit refusals at grade 2, or why every adverse step needs a human decision-maker of record.
  - The ceilings in fact rest on two unstated premises. One is about error cost: the stakes, and how detectable and reversible an error is for the person. The other is about standing: a person facing an adverse determination is owed a decision by an answerable agent who can take their situation into account.
  - No measure of "the stakes" is given.
  - The strongest objection goes unanswered: answerability can be institutional, through the deployer's liability, without a human deciding each case. A right to a human decision has also been argued to be weakly grounded (Huq, 2020; own knowledge).
- **Weakens:** the derivation of Table 1 and of Rec 2, and so the justification of the thesis.
- **Severity:** high.
- **Smallest fix:** add a subsection, *From conditions to ceilings*, of about 300 words. It should:
  - state (P1, error cost): *a ceiling falls as the expected cost of an uncorrected error to the affected person rises, and as that person's ability to detect and reverse it falls*;
  - state (P2, standing): *where a determination withholds or withdraws care, entitlement, liberty or life, or imposes a burden, the person is owed a decision by an answerable agent who can take their situation into account*;
  - label P2 as a values commitment grounded in due process and in existing law (F20);
  - concede that institutional liability can provide answerability for favourable, protective and envelope-bounded functions, while holding P2 for adverse determinations.
- **Other passages the fix must change:**
  - the §1 summary of the argument, which should name both premises;
  - §4.2, whose "entitled to know its basis" becomes an application of P2;
  - the caption of Table 1;
  - §7.2.

**F07. The strongest form of the lives-saved objection is not answered.**
- **Type:** gap (strong objection unanswered).
- **Passages:**
  - §6.1: "If an AI triage system saves more lives on average than clinicians do, withholding authority from it costs lives."
  - §6.1: "Third, the argument proves too much."
  - §6.1: "If efficiency justified removing review, no appeal would survive."
  - §6.1: "Lives saved are evidence for augmentation, not for authority over persons' fates."
- **The problem:**
  - At full strength the objection is comparative. Arrangements with a human in the loop can perform worse than the system alone, and human decisions can be worse and more variable. A rule that the human decides last can then cost the very people it aims to protect.
  - Own knowledge, not checked in this pass: studies of pretrial release (Kleinberg et al., 2018), radiology (Agarwal et al., 2023) and diagnostic reasoning (Goh et al., 2024) report the system alone matching or beating humans, or humans working with the system, on their measures.
  - The "proves too much" reply attacks a version that removes all review. The objection need not claim that: an appeal after the fact can coexist with higher grades.
- **Weakens:** §6.1, the medical ceilings and the conclusion that lives saved support only augmentation.
- **Severity:** high.
- **Smallest fix:** rewrite §6.1 in four moves, replacing the "proves too much" reply:
  - (i) state the comparative objection;
  - (ii) concede that prospective evidence, measured against actual current practice and showing subgroup validity on the right target, can justify higher grades for non-adverse and protective functions;
  - (iii) hold P2 (F06) as the reason adverse determinations keep a human decision-maker, and name this trade-off as a values choice;
  - (iv) state the evidence that raises or lowers a ceiling.
- **Other passages the fix must change:**
  - §5's definition of a ceiling (make it hold under current evidence);
  - Rec 1 (deployments declare their evidence);
  - the F09 and F10 edits in the same section.

**F08. Military coverage is incomplete and internally inconsistent.**
- **Type:** gap; conflict; incomplete claim about the world.
- **Passages:**
  - §3.2: "A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time."
  - §3.2: "The area contains combatants, civilians and people who have surrendered."
  - §3.2: "It recommends restricting others by limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021)."
  - Table 1: "Recommendations on engagement of persons" (1); "Defensive engagement of incoming munitions, not persons" (3), "Human-set envelope; human on the loop; stop".
  - Rec 5: "keep defensive envelopes against objects bounded and stoppable"
  - §6.3: "Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules."
- **The problem:**
  - (a) The paper's own case is never given a grade or a ceiling.
  - (b) The ICRC summary leaves out a restriction. Verified: the ICRC also proposes limits on situations of use, such as use only where civilians or civilian objects are not present, and requirements for supervision, timely intervention and deactivation. It also recommends new legally binding rules. The paper omits the situations-of-use limit, which is the one its own case triggers.
  - (c) No row covers offensive engagement of objects that are military objectives by nature, the category the ICRC proposes to regulate rather than prohibit.
  - (d) Table 1 says munitions and Rec 5 says objects. Crewed aircraft and vehicles are objects with persons inside. Air-defence systems shot down crewed friendly aircraft they had misclassified in 2003 (own knowledge, not checked here).
- **Weakens:** the military ceilings and Rec 5.
- **Severity:** high.
- **Smallest fix:**
  - Grade the case explicitly: *Because the system may apply force to persons in an area where civilians and people who have surrendered are present, the deployment exceeds every ceiling in Table 1. It falls within the ICRC's proposed prohibition and conflicts with its proposed limits on situations of use.*
  - Complete the ICRC summary.
  - Add a row for offensive engagement of objects, either with the ICRC's set of restrictions or with an argued lower ceiling.
  - Use one term in both Table 1 and Rec 5. If the term is objects, say how persons aboard are protected, through limits on situations of use and safeguards on identification.
- **Other passages the fix must change:** the defensive-envelope sentence in §6.3, and Rec 5.

#### Medium severity

**F09. The claims that escalation is cheap and carries most of the triage benefit have no support.**
- **Type:** unsupported; overstated.
- **Passages:**
  - §5: "A flag that moves a case up a queue costs little if it is wrong, and the human's judgement still settles the outcome."
  - §6.1: "Second, most of the triage benefit comes from escalation, which asymmetry already licenses."
- **The problem:** no evidence is given for either claim, and both meet evidence against them.
  - False alerts consume scarce attention, and missed cases get relied on as all-clear.
  - An external validation of a widely deployed proprietary sepsis alert reported poor discrimination, many missed cases and a heavy alert load (Wong et al., 2021, JAMA Internal Medicine; own knowledge, not checked in this pass).
  - The clause "the human's judgement still settles the outcome" conflicts with the paper's own §4.5.
  - I know of no source that splits triage benefit between escalation and deprioritisation.
- **Weakens:** the grade 2 rationale for escalation, and the second reply in §6.1.
- **Severity:** medium.
- **Smallest fix:**
  - Replace the §5 sentence with: *A flag that adds review without displacing others or exposing the person to scrutiny is cheaper to get wrong. Even so, false alarms consume attention and missed cases are relied on, so escalation tools must also be validated against misses and alert burden.*
  - Delete the §6.1 claim, or support it with a source.
- **Other passages:** the escalation row's conditions in Table 1 (add validation against misses and alert burden).

**F10. §6.1 stretches the Obermeyer study beyond what it shows.**
- **Type:** overstated.
- **Passage:** §6.1: "A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019)."
- **The problem:** the study showed label-choice bias in a cost predictor that was well calibrated (verified). It reported nothing about lives saved overall.
- **Weakens:** the first reply in §6.1.
- **Severity:** medium.
- **Smallest fix:** *A system can perform well on its label overall and still under-serve a subgroup, as the Obermeyer case shows for a cost label.*
- **Other passages:** none.

**F11. "AI system" is never defined, and two key examples are rule-based automation.**
- **Type:** gap (undefined key term); overstated scope.
- **Passages:**
  - §3.3: "The Australian Robodebt scheme is a documented welfare case."
  - Table 1: "Pre-committed market rules, such as halts and rate limits"
  - §4.1: "Learning automata can act in ways their designers cannot foresee, so ordinary ascriptions of responsibility fail (Matthias, 2004)."
- **The problem:**
  - Robodebt applied a fixed averaging rule. The averaging is verified; that no machine learning was involved is own knowledge.
  - The case shows the harms of automating adverse determinations, not the harms of learning.
  - It therefore gives no support to the paper's AI-specific premises, learning automata and opacity.
- **Weakens:** the step from §3.3 to an AI-specific thesis.
- **Severity:** medium.
- **Smallest fix:**
  - Add to §1: *I use the term AI system broadly, for automated decision systems whether learned or rule-based, because the failures at issue arise in both; where an argument depends on learning, I say so.*
  - Add to §3.3 one sentence noting that Robodebt was rule-based.
  - Optionally, add a machine-learning welfare case after verifying it, for example the Dutch childcare-benefits risk model (own knowledge).
- **Other passages:** mark in §4.1 and §4.4 which arguments rely on learning.

**F12. The market section overstates the answerability problem and leaves its key term undefined.**
- **Type:** conflict; overstated; undefined term.
- **Passages:**
  - §5: "No one can answer for a collective harm produced by a learned discretionary policy."
  - §3.3: "The harm is collective and fast, and no single person can answer for it."
  - §4.1: "A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
  - §5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
  - Table 1: "Discretionary AI market interventions" (1), "Public justification; no unilateral action".
  - Rec 6: "prohibit discretionary AI market interventions without public justification"
  - §1: "trading systems act on prices in milliseconds"
- **The problem:**
  - If named accountability closes the responsibility gap, as §4.1 says, it can close it for markets too.
  - Firms are already answerable for algorithmic trading, under rules requiring risk controls and a kill function (own knowledge: EU algorithmic-trading rules, the US market-access rule, and enforcement after the 2012 Knight Capital incident).
  - The scope of "discretionary AI market interventions" is unclear. If it covers private algorithmic trading, a ceiling of 1 means human approval of each trade, which the paper's own description of millisecond trading makes unworkable. If it means interventions by public authorities, the paper should say so.
- **Weakens:** the market rows and Rec 6.
- **Severity:** medium.
- **Smallest fix:**
  - Define the term; how far it reaches is the author's choice.
  - Replace both absolute claims with: *Answerability for a collective harm produced by a learned discretionary policy is hard to trace to any human decision, and no affected person can contest it.*
  - Acknowledge the existing firm-level controls.
- **Other passages:** the §3.3 sentence; the Table 1 row; Rec 6.

**F13. Naming a person does not secure answerability.**
- **Type:** conflict between the test adopted in §4.1 and condition 1; strong objection unanswered.
- **Passages:**
  - §4.1: "Meaningful human control requires that the system track the reasons of the humans responsible for it, and that its behaviour be traceable to a human who understands it and can act on that understanding (Santoni de Sio and van den Hoven, 2018)."
  - §4.1: "I take traceability as the minimal test of answerability."
  - §5, condition 1: "A named institution and person are accountable for the system's design, deployment and outcomes, and can correct it."
- **The problem:**
  - Traceability requires a human who understands the system. Condition 1 requires only that someone is named and can correct the system, not that they understand or control it.
  - A named person without control absorbs the blame. This is the moral crumple zone (Elish, 2019; own knowledge).
  - Robodebt had nameable accountable officials, and the Commission recommended referring individuals for possible civil action or criminal prosecution, after the harm (verified).
  - As summarised on the Wikipedia page I read, the Commission also found that a departmental secretary was made aware of the scheme's illegality and failed to act. Check this in the report itself.
- **Weakens:** condition 1, and §4.1's claim that naming closes the gap.
- **Severity:** medium.
- **Smallest fix:**
  - Append to condition 1: *and have the authority, information and understanding that their accountability presupposes.*
  - Say in §4.1 that naming is necessary but not sufficient.
- **Other passages:** Rec 2 (the decision-maker of record must have that authority and information); the closing sentence of §4.1.

**F14. §4.4 overstates explanation as a precondition of override.**
- **Type:** overstated; strong objection unanswered.
- **Passages:**
  - §4.4: "Explanation is therefore a precondition of contestation and of meaningful override."
  - §4.4: "Without reasons, an override rests on intuition, which is a weak safeguard."
- **The problem:**
  - To contest a decision, a person needs usable reasons: the data used, the criteria and the main factors. Condition 2 already requires these.
  - For override, studies report that explanations can raise acceptance of wrong outputs (Bansal et al., 2021) and that post-hoc explanations are unreliable for individual cases (Ghassemi et al., 2021). Both are own knowledge, not checked in this pass.
  - Override also rests on independent information, not only on reasons.
- **Weakens:** §4.4, and the link it draws between explanation and condition 4.
- **Severity:** medium.
- **Smallest fix:** *Reasons in usable terms (the data used, the criteria applied and the main factors) are a precondition of contestation. Meaningful override needs independent information and time; model explanations alone can increase reliance on wrong outputs.*
- **Other passages:** none required. Condition 4 may cite the new sentence.

**F15. The conditions have no certifier, timing, test or failure rule.**
- **Type:** gap.
- **Passages:**
  - Rec 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show that the five conditions are met before deployment."
  - §5: "A system is licensed for less wherever the conditions are weakly met."
  - §5, condition 4: "and that capacity is tested"
- **The problem:**
  - The paper does not say who certifies, to whom, how often after deployment, by what test, or what follows a failure. Only §6.4 answers the last question, and only for grade 2.
  - The phrase "weakly met" introduces degrees of satisfaction for conditions stated as necessary, with no test to measure them.
  - Harms can surface years after deployment (verified for Robodebt: averaging was used until November 2019, and the report came in July 2023).
- **Weakens:** the claim that the framework can be put into practice, and Rec 1.
- **Severity:** medium.
- **Smallest fix:** add one paragraph stating four things.
  - The deployer's accountable officer certifies before deployment and at set intervals.
  - The competent regulator reviews the certification through existing regimes: AI Act conformity and impact assessments, medical-device regulators, legal reviews of new weapons and financial regulators (own knowledge).
  - Each condition has a pre-registered test.
  - Failure has a set consequence. Replace "weakly met" with: *Where any condition is not met at the system's unit of control, the system is licensed for no more than the next lower grade; for adverse decision classes it reverts to grade 1 or is withdrawn.*
- **Other passages:** §6.4, to match the rule; Rec 1 and Rec 4.

**F16. The paper does not say how each condition applies at each grade.**
- **Type:** gap.
- **Passages:**
  - §2: "Grades 2 and 3 differ in unit of control."
  - §5, condition 2: "An affected person can learn the basis of a decision in usable terms and obtain review by someone who can reverse it."
  - §4.2: "In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all."
- **The problem:**
  - At grade 3, real override cannot mean disagreeing with each act.
  - Contestability has no clear meaning for escalations, collective harms or defensive engagements.
- **Weakens:** how the conditions apply to the grade 3 rows (dosing, defensive envelopes, market rules).
- **Severity:** medium.
- **Smallest fix:** add a five-row table giving each condition's form at grade 2, which is controlled case by case, and at grade 3, which is controlled by envelope. At grade 3 that means the stop, review of the envelope, and a public route of challenge for collective harms.
- **Other passages:** none.

**F17. §6.2 overstates the contrast between human and automated bias.**
- **Type:** overstated.
- **Passages:**
  - §6.2: "Human bias is heterogeneous."
  - §6.2: "Automated bias is uniform and scaled."
  - §6.2: "One flawed label distorts every decision the system makes, and it can hide behind an appearance of objectivity, as the Obermeyer proxy did (Obermeyer et al., 2019)."
  - §6.2: "Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review."
- **The problem:**
  - Human biases are often shared and institutional (own knowledge).
  - Label bias shifts a ranking without changing every decision.
  - Uniformity is also what makes automated bias auditable, which the paragraph itself concedes.
  - Auditing past decisions is grade 0 information, not grade 1 advice on a case.
- **Weakens:** the reply to the objection that humans are biased too.
- **Severity:** medium.
- **Smallest fix:**
  - Replace the contrast with: *Human errors are also correlated where they come from shared institutions or stereotypes. The difference that matters is that automated errors propagate at machine speed and scale, and may lack an answerable, correctable decision point. Uniformity also makes automated bias easier to audit, which is why the machine should audit the human.*
  - Change "grade 1 role of review" to *grade 0 role of information*.
- **Other passages:** none.

**F18. Correcting a favourable error is itself an adverse act.**
- **Type:** gap (unstated premise).
- **Passages:**
  - Table 1: "Favourable or low-cost approvals" (2), "Audit; errors correctable".
  - §5: "Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow."
- **The problem:**
  - Correcting a mistaken approval usually means recovering a benefit or calling in a loan, which is an adverse determination against the person.
  - Robodebt itself was the recovery of alleged overpayments (own knowledge).
  - Mistaken credit approvals can also harm through over-indebtedness.
- **Weakens:** the grade 2 ceiling for approvals.
- **Severity:** medium.
- **Smallest fix:** add to the approvals row: *The deployer bears the cost of its system's favourable errors; recovery from the person requires a grade 1 determination with hardship safeguards.*
- **Other passages:** Rec 2 (recovery counts as an adverse determination).

**F19. Autonomous screening is not covered.**
- **Type:** gap (a case none of the categories covers).
- **Passages:**
  - Table 1: "Deprioritising a patient or withholding scarce care" (1).
  - Table 1: "Escalating a case for urgent clinician review" (2).
- **The problem:**
  - Some screening systems return a negative result with routine rescreening and no clinician review, which is a deprioritising determination. Own knowledge: the US FDA authorised such a system for diabetic retinopathy in 2018, and its developer accepted liability for its outputs.
  - The table would place these systems at grade 1, against current regulatory practice, without giving an argument.
  - The case is also the cleanest test of institutional answerability (F06).
- **Weakens:** coverage of the medicine rows.
- **Severity:** medium.
- **Smallest fix:** add a row for autonomous negative screening and set its ceiling with reasons. Possible ceilings are grade 2 or 3, with prospective validation, safety-net rescreening and deployer liability, or grade 1 with an argument for it.
- **Other passages:** §6.1, where this case is a natural example for the evidence ladder.

**F20. The paper does not engage the existing law its proposals build on.**
- **Type:** gap.
- **Passages:**
  - §4.2: "A person subject to a consequential decision is entitled to know its basis and to have it reviewed by someone who can reverse it, whether or not the decision is accurate."
  - Rec 2: "Apply asymmetry in law and procurement."
- **The problem:**
  - The normative premise in §4.2 is asserted without grounding.
  - Rec 2 is not related to existing rules on decisions made solely by automated processing that significantly affect a person. GDPR Article 22 is the main one, and its Recital 71 gives automatic refusal of an online credit application as an example.
  - Nor is it related to the AI Act's right to an explanation of individual decisions (Art 86). Both are own knowledge, not checked in this pass.
  - Readers cannot tell where the proposals go beyond current law.
- **Weakens:** the premise in §4.2, and the novelty and feasibility of Rec 2.
- **Severity:** medium.
- **Smallest fix:** add two or three sentences that place the contestability condition and Rec 2 relative to these provisions. For example: *EU law already restricts decisions based solely on automated processing that significantly affect a person, and gives rights to human intervention and to contest them; Rec 2 goes further by requiring a human decision before an adverse determination takes effect.* Verify these provisions first.
- **Other passages:** Rec 2; F03's option (b), if chosen.

**F21. Validation decays over time through selective labels.**
- **Type:** gap (mechanism not addressed).
- **Passages:**
  - §5, condition 3: "Performance is validated against the outcome the decision is for, with audit across groups."
  - §4.3: "Authority therefore requires that the target and fairness criteria be fixed before deployment, validated against the outcome the decision is for, and audited for differential error across groups."
- **The problem:**
  - Decisions hide the outcomes needed to validate them: whether declined applicants would have repaid, fraud in cases never flagged, and the outcomes of patients never enrolled (own knowledge: the selective-labels problem).
  - Validation done before deployment does not stay valid.
- **Weakens:** condition 3 over time.
- **Severity:** medium.
- **Smallest fix:** add to condition 3: *Validation is repeated at set intervals using designs that observe outcomes the system's decisions would otherwise hide, such as randomised audit samples or follow-up of declined cases.*
- **Other passages:** Rec 3; §4.3.

**F22. The military reply ignores verification and interim policy, and overstates the ICRC's role.**
- **Type:** gap; overstated.
- **Passages:**
  - §6.3: "Competitive pressure is a collective action problem, and its proper response is coordinated limits, not each actor surrendering authority."
  - §6.3: "The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021)."
  - Rec 5: "Pursue international limits along the lines the ICRC recommends (ICRC, 2021)"
- **The problem:**
  - Verified: the ICRC recommends that States adopt new legally binding rules. Its recommendations are a proposal, not a coordinated response.
  - The reply does not say what a state should do before any agreement exists, or how limits on a software property can be verified.
  - It omits unilateral tools that already exist, such as legal review of new weapons under Article 36 of Additional Protocol I (own knowledge).
- **Weakens:** the reply to competitive pressure, and the feasibility of Rec 5.
- **Severity:** medium.
- **Smallest fix:**
  - *The ICRC's recommendations propose a coordinated response of this kind, calling on States to adopt new legally binding rules (ICRC, 2021).*
  - Add two sentences: one on interim national measures (weapons reviews, published national policy), one on the limits of verification.
  - Check the current state of UN discussions before publication.
- **Other passages:** Rec 5.

#### Low severity

- **F23 (gap).** Rec 3, "publish subgroup error rates": name the lawful route for protected-attribute data and the fairness criterion chosen. Calibration and equal error rates can conflict when base rates differ (own knowledge).
- **F24 (gap).** §6.4, "reviewers are tested with seeded errors", and Rec 4, "seed reviews with known errors": specify simulation, shadow mode or guaranteed interception for clinical and targeting settings.
- **F25 (overstated).** §3.3, "the model's reasons are often unavailable to the applicant": US law requires lenders to give the principal reasons for adverse credit action (own knowledge). Say instead that the reasons given are often too generic to contest.
- **F26 (overstated attribution).** §4.2, "much of the harm lies in the absence of anyone who will hear a challenge": Eubanks's main claims concern the profiling and surveillance of the poor. Soften to *part of the harm*.
- **F27 (attribution).** §4.1, "and can act on that understanding": the tracing condition of Santoni de Sio and van den Hoven concerns understanding and awareness of responsibility. Drop the phrase, or mark it as the author's addition.
- **F28 (imprecision).** §6.4, "grade 2 collapses into grade 4 with a human's name attached": under the §2 definitions this is unsupervised execution in fact, not grade 4. Reword it together with F05.
- **F29 (convention).** The Abstract's "five grades of authority" conflicts with §2's "Grades 0 and 1 are not authority". §5's "A sixth principle governs direction." follows five conditions, not five principles. §1 says "Section 3 gives one case per domain", but §3.3 has three. "value-laden allocation" appears once and is never defined. Align the terms.
- **F30 (convention).** Several references link to unofficial or secondary pages: "https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/" for the AI Act, a Publishers Weekly page for Scharre, a book review ("computers-cant-override-americas-antipathy-towards-the-poor") for Eubanks, and "https://gwern.net/doc/sociology/technology/1983-bainbridge.pdf" for Bainbridge. They also omit volume, issue, pages and DOIs. Cite the Official Journal, the publishers and DOIs.
- **F31 (unsupported).** §1, "Armed forces use systems that classify objects and people faster than staff can check them.": add a source or soften the claim.

### 3.3 Coverage

- **Checked against sources read in this session.** Each was read through a page summary, so confirm exact wording in the primary text before quoting it.
  - The ICRC position, on the ICRC's official page.
  - Obermeyer's label, calibration, figures and enrolment rules, in a copy of the article.
  - Robodebt's method, legality, dates and referrals, in the Commission's overview and on Wikipedia.
  - AI Act Article 14, on the Commission's service desk.
- **Checked against my own knowledge only.**
  - The characterisations of Matthias, Sparrow, Santoni de Sio and van den Hoven, Doshi-Velez and Kim, Parasuraman and Manzey, Bainbridge, Eubanks, Topol and Scharre.
  - Robodebt's reversed onus and the removal of staff checks.
- **Not checked.**
  - The counter-evidence and legal provisions I suggest adding (listed in the transparency report).
  - The scene-setting claims in §1.
  - Legal and policy developments after June 2026.
- **Checked in full.** Internal consistency: every definition, condition, table row, reply and recommendation was compared against every passage that restates or applies it.

## 4. Lens summaries

Each lens was run as its own stream, taken in turn, without borrowing another lens's conclusion. Each step is labelled: evidence means the draft or a source read in this session; own knowledge means not checked here; the other labels are assumption and inference. Mind maps are indented outlines headed by the lens; colour coding is not available in plain Markdown.

### 4.1 Analytical

**Reasoning chain**
1. *Evidence.* The licensing rule says "Authority at grades 2 to 4 is licensed only when five conditions hold." Condition 5 requires limits "fixed in advance by accountable humans and enforced by a stop". Grade 4 acts "with no timely human veto", with limits that are "absent or set by the system itself". So no grade 4 grant can satisfy the rule, yet Table 1 makes one.
2. *Evidence.* The thesis bars final authority over determinations about particular persons. Yet Table 1 sets ceilings above 1 for person-specific classes: dosing a patient, stopping a patient's infusion, refusing a person credit. The paper never defines final authority.
3. *Inference.* The answerability premise shows only that a system cannot hold authority alone. Conditions 1 and 2 attach an answerable institution and a route of review at grades 2 and 3. The premise therefore cannot explain why welfare denials sit at grade 1 and credit refusals at grade 2. The ceilings must rest on unstated premises about error cost, correctability and the standing of the person affected.
4. *Evidence.* The asymmetry rule sorts decisions by verb. But the paper's medical case is a ranking for "a scarce programme of nurse outreach and extra attention", and §1 lists fraud flags. Verified: the Obermeyer programme automatically enrolled patients above the 97th percentile. The tool that did the harm was a favourable default.
5. *Evidence.* Grade 1 holds the highest-stakes classes but carries no conditions. §2 concedes that "the failures discussed in Section 4 arise there too", while §4.5 says the problem "affects every grade above advice". The two passages contradict each other.
6. *Inference, with evidence for the figures.* The architecture is sound but needs one rule from which every row follows. The paper also omits numbers that exist. Verified: the Black share of the highest-risk group rises from 17.7% to 46.5% in the article's simulation without the bias. Under the article's three labels, that share is 14.1% (total cost), 21.0% (avoidable cost) and 26.7% (health). Adding these figures would show the right-target condition at work rather than assert it.

**Key concepts**
- Gap between answerability and ceilings (0.90): the thesis's justification depends on closing it.
- Consistency of grades and conditions (0.85): the table must follow from the definitions, or a referee will reject it.
- Classification by effect: adverse, favourable, zero-sum (0.80): it decides most rows.
- Grade in fact versus formal grade (0.75): it decides whether grade 1 protects anyone.
- Quantified evidence (0.35): it strengthens the cases but changes no ceiling.

**Mind map**
- Analytical
  - Licensing logic
    - Grade 4 cannot satisfy the rule: conditions 4 and 5 against the grade 4 definition; the stop fits grade 3
    - Answerability does not yield ceilings: institutions can answer at grades 2 and 3; unstated premises
  - Thesis and table
    - Final authority undefined: dosing, stop and credit rows
    - Credit refusals: asymmetry, §1, §6.4, Rec 2
  - Classification
    - Verb or effect: zero-sum ranking; scrutiny flags
    - Grade 1 without conditions: automation bias in advice
  - Evidence
    - Obermeyer figures (verified)
    - Escalation claims without support

### 4.2 Creative

**Reasoning chain**
1. *Inference.* Treat authority as a property of the whole decision procedure, measured on two axes. One is control before the decision (the paper's grades). The other is remedy after it: none; review on request; automatic human review of every adverse outcome; or a human decision before the outcome takes effect. Robodebt's reversed onus and the credit row's "review on request" both sit on the remedy axis, which the current scale cannot express.
2. *Own knowledge, by analogy.* Replace the verb-based asymmetry with an error-burden asymmetry. Criminal procedure does this when it weighs a wrongful conviction above a wrongful acquittal. Rank decision classes by who bears an error's cost, how detectable the error is to that person, and how reversible it is.
3. *Inference.* Make the deployer bear the cost of its system's favourable errors. An approval made at grade 2 cannot later be clawed back from the person except by a grade 1 determination. "errors correctable" then becomes a design commitment rather than a hope.
4. *Evidence and own knowledge.* Borrow oversight practices that are already tested. The AI Act requires two-person verification for remote biometric identification (verified, Art 14(5)). Aviation security inserts fictitious threat images into live screening to measure and sustain vigilance (own knowledge). Both are templates for testing real override without seeding real errors into clinical or targeting work.
5. *Inference.* Turn the ceilings into a licensing ladder, like staged approval of medicines. A ceiling rises only on prospective evidence against current practice, with subgroup validity and a preserved route of challenge. It falls automatically on drift or a near-zero override rate.
6. *Inference.* Derive the table from five features of a decision: adverse to a person, zero-sum, reversible by that person, time-critical, collective. Missing cases such as fraud flags, offensive anti-materiel autonomy and autonomous screening then follow from the rule instead of needing ad hoc rows.

**Key concepts**
- Error-burden asymmetry (0.85): it repairs the weakest principle with the least new machinery.
- Remedy axis (0.70): it expresses Robodebt and models like GDPR Article 22, and fits in one table column.
- Licensing ladder (0.70): it answers the lives-saved objection without abandoning ceilings.
- Table derived from features (0.65): it covers the missing cases and prevents ad hoc rows.
- Deployer bears favourable errors (0.55): a small fix with a clear protective effect.

**Mind map**
- Creative
  - Reframe authority
    - Two axes: control before; remedy after
    - The conclusion's test as the organising question
  - Rebase asymmetry
    - Error burden: who pays; how detectable; how reversible
    - Deployer bears favourable errors
  - Make ceilings move
    - Licensing ladder: prospective evidence; subgroup validity; automatic downgrade
  - Oversight templates
    - Two-person verification (Art 14(5))
    - Threat image projection
  - Table derived from features
    - Covers fraud flags, anti-materiel autonomy, screening

### 4.3 Critical

**Reasoning chain**
1. *Own knowledge, not checked here.* The strongest objection is comparative. In some prediction and diagnostic tasks, systems working alone have matched or beaten humans. Human-plus-system teams have sometimes done worse than the system alone (Kleinberg et al., 2018, on pretrial release; Agarwal et al., 2023, on radiology; Goh et al., 2024, on diagnostic reasoning). If so, a grade 1 ceiling can cost the people it aims to protect. The paper's reply, "Third, the argument proves too much.", attacks a version that removes all review, which the objection need not claim.
2. *Own knowledge, not checked here.* Answerability need not mean a human deciding each case. Institutions can answer through liability, as when the developer of an autonomous diabetic-retinopathy screening system accepted liability for its outputs. Legal scholarship has also questioned whether there is a right to a human decision (Huq, 2020).
3. *Evidence and own knowledge.* Naming a person does not give them control. Robodebt had nameable accountable officials, and the Commission recommended referring individuals for possible civil action or criminal prosecution only after the harm (verified). A named person without control becomes a moral crumple zone (Elish, 2019; own knowledge).
4. *Own knowledge, not checked here.* Explanations can raise acceptance of wrong outputs (Bansal et al., 2021), and post-hoc explanations are unreliable for individual cases (Ghassemi et al., 2021). So the claim "Explanation is therefore a precondition of contestation and of meaningful override." holds for reasons a person can dispute, but not for model introspection.
5. *Evidence and own knowledge.* An escalation can itself be the adverse act. Examples: §1's "flag families for fraud review"; the child-welfare screening Eubanks describes; and the Dutch childcare-benefits risk model (own knowledge). The paper's "A flag that moves a case up a queue costs little if it is wrong" ignores both the cost of scrutiny and the burden of alerts.
6. *Inference.* The leading view fails in three cases:
   - volume makes grade 1 review nominal;
   - a system outperforms current practice, with subgroup validity and a preserved route of challenge;
   - coordination fails in war.

   Who bears the cost depends on the regime. Under strict ceilings, it falls on people harmed by slower or worse human decisions, and on the public that pays for review. Under loose ceilings, it falls on minorities, claimants and civilians harmed by correlated errors. Choosing between these is a values choice.

**Key concepts**
- Comparative performance of human, system and team (0.90): the objection most likely to move the medical ceilings.
- Escalation as an adverse act (0.80): it breaks the asymmetry rule as stated.
- Institutional answerability (0.75): it tests the thesis's foundation.
- Moral crumple zone (0.65): it shows that naming is not enough.
- Reliance induced by explanation (0.55): it limits §4.4.

**Mind map**
- Critical
  - Strongest objection
    - Comparative performance: the system alone beats the team in some tasks; the cost falls on those protected
  - Foundations
    - Answerability without a human per case: deployer liability; critique of a right to a human decision
    - Naming is not control: Robodebt officials; crumple zone
  - Weak claims
    - Explanation as a precondition
    - Escalation as cheap
  - Failure conditions
    - Volume; better and fair systems; failed coordination
  - Who pays
    - Under strict ceilings; under loose ceilings

### 4.4 Systems-thinking

**Reasoning chain**
1. *Evidence and inference.* There is a reinforcing loop. The paper says supervisors "monitor less well as reliability rises", and Bainbridge adds that skills decay. Overrides then fall, a low override rate is read as accuracy, and pressure builds to raise the grade. Rec 4's warning signal for a near-zero override rate breaks the loop only if it triggers a mandatory response.
2. *Own knowledge.* Selective labels. Decisions hide the outcomes needed to validate them: whether declined applicants would have repaid, fraud in cases never flagged, outcomes for patients never enrolled. Condition 3 therefore decays unless validation includes randomised audit or follow-up.
3. *Inference.* Classification gaming. Under a verb-based asymmetry, institutions can relabel a denial as a flag for review, or a ranking as escalation, to reach a higher ceiling. Grading by effect closes this route.
4. *Evidence.* Correlated and delayed harm. One rule applies the same error to every similar case, and the harm surfaces late. Robodebt's averaging was used until November 2019, and the Commission reported in July 2023 (verified). Checks before deployment are not enough on their own.
5. *Own knowledge.* Military dynamics. Jamming and degraded communications, the premise of §3.2, are widely reported to push autonomy in current drone warfare. Restraint that cannot be verified invites defection, so this is a coordination problem with a verification bottleneck.
6. *Inference.* Displacement. Strict ceilings at high volume can push decisions to vendors, contractors or less regulated jurisdictions. The declaration duty in Rec 1 must therefore bind the deploying institution, whatever the contracting chain.

**Key concepts**
- Reliability and complacency ratchet (0.85): how formal grades drift into higher grades in fact.
- Selective labels (0.70): they wear down the right-target condition over time.
- Classification gaming (0.70): it exploits an asymmetry based on verbs.
- Correlated and delayed harm (0.65): it argues for continuing monitoring and sunset clauses.
- Verification bottleneck (0.55): it limits the coordination reply.

**Mind map**
- Systems-thinking
  - Loops
    - Ratchet: reliability, complacency, apparent accuracy, higher grade; broken by a mandatory response to low override rates
    - Selective labels: broken by randomised audits and follow-up
  - Gaming
    - Adverse acts relabelled as escalation; closed by grading by effect
  - Scale and time
    - Correlated errors
    - Delayed detection (Robodebt until 2019; report in 2023): continuing monitoring
  - Military dynamics
    - Jamming drives autonomy
    - Verification bottleneck
  - Displacement
    - Vendors and jurisdictions; duties bound to the deployer

### 4.5 Pragmatic

**Reasoning chain**
1. *Inference.* Cost at volume. Real judgement at grade 1 for every welfare denial, and for every credit refusal if credit moves to grade 1, needs staff time in proportion to volume. Where that is unaffordable, the paper should say that the lawful response is to reduce automated adverse decisions, not to accept nominal review. It should also own that cost.
2. *Evidence and own knowledge.* Anchor each recommendation in existing machinery rather than new bodies. Available instruments:
   - AI Act oversight duties (Art 14, verified), conformity assessment and impact assessment;
   - medical-device regulation;
   - legal review of new weapons under Article 36 of Additional Protocol I;
   - EU kill-function rules for algorithmic trading;
   - US requirements to give reasons for adverse credit action.

   All except Article 14 are own knowledge. Anchoring makes Recs 1 to 6 feasible and shows where they go beyond current law.
3. *Inference.* Test real override safely. Seeded errors in live clinical or targeting work can cause harm if missed, so the paper should specify simulation, shadow mode or guaranteed interception.
4. *Own knowledge.* Data for subgroup audits. Publishing subgroup error rates needs protected-attribute data that some legal regimes restrict. US consumer-credit rules limit the collection of race outside mortgage lending. The AI Act permits processing special categories of data for bias detection only under conditions. The paper should name the lawful route and the fairness criterion it chooses.
5. *Inference.* Reversibility. The revision is fully reversible. As policy, low ceilings are easier to recover from than mass adverse errors, which supports starting low with an evidence ladder. The cost of delay falls on people who would have benefited.
6. *Inference.* Order of work: consistency first, then the derivation and the objections, then the domain rows, then sources and conventions, then a re-audit. This order avoids editing the same passages twice.

**Key concepts**
- Cost of review at volume (0.75): it decides whether grade 1 can be real.
- Anchoring in existing law (0.70): it supports feasibility and clarifies what is new.
- Order of revision (0.60): it prevents new conflicts.
- Safe testing of oversight (0.50): it prevents a harmful reading of Rec 4.
- Lawful data for audits (0.45): Rec 3 cannot work without it.

**Mind map**
- Pragmatic
  - Feasibility
    - Cost of review at volume: reduce automated adverse decisions
    - Lawful audit data: route and criterion
  - Implementation
    - Existing regimes: AI Act; device regulation; weapons reviews; trading controls; reasons for adverse action
    - Safe testing of override: simulation, shadow mode
  - Reversibility
    - The revision: fully reversible
    - The policy: low ceilings recoverable; cost of delay
  - Next actions
    - Consistency, derivation, domains, sources, re-audit

## 5. Transparency report

**Framing**
- Framing: revise the draft into the strongest defensible paper on whether AI systems should hold decision authority in medicine, military force and economic allocation, and calibrate confidence in its central recommendation.
- Decision or goal: a prioritised revision plan, plus scores for the central recommendation as written and as repaired.
- Constraints: keep the architecture where it is sound; prefer the smallest defensible fix; add no unsupported claim; stay within the length of a journal article.
- Stakeholders: the author; readers in ethics, law, medicine, defence, finance and public administration; people subject to these decisions (patients, claimants, borrowers, combatants, civilians); deployers; regulators.
- A good answer must: locate conflicts, gaps and doubtful claims, with exact quotations and fixes; state the strongest objections; propose a defensible thesis; and give scores with reasons.

**Assumptions**
- A1: the question's phrase *strongest defensible* means able to survive expert critique, not maximally restrictive or maximally permissive.
- A2: the draft is a journal-length article, so additions must be compact.
- A3: the author wants to keep the graded framework.
- A4: "AI systems" is read broadly unless the author narrows it (F11).
- A5: legal and policy facts after June 2026, the limit of my knowledge, may differ.
- A6: the central recommendation consists of the thesis in the Abstract and §1, the Table 1 ceilings and the recommendations in §7.1.

**Which lens drove which steps**
- Analytical: Steps 1, 2, 5 and 7 (consistency and derivation).
- Critical: Steps 5, 6 and 11 (objections, answerability, explanation).
- Systems-thinking: Steps 3, 4 and 12 (grading by effect, grade in fact, revalidation).
- Creative: Steps 3, 6 and 7 (error-burden asymmetry, licensing ladder, deployer bears favourable errors), and the template for safe testing in Step 13.
- Pragmatic: Steps 7, 10, 12 and 14 (feasibility, anchoring in existing law, order of work, re-audit).

**Weighted down or set aside**
- The full two-axis grade scale was reduced to a remedy column, for parsimony.
- Disputed press reports about military target-generation practice were not used as evidence. They served only as a reason to test grade 1.
- Figures from memory were not used except where verified (Obermeyer).
- Extending the economy domain to hiring and insurance is left to the author.

**Confidence and limits**
- Confidence scores: plan 75 (parts 90, 70, 60, 65); paper as written 25; repaired core 70; per-part scores and their drivers are in Section 1.2.
- One model: all five lenses and the synthesis come from one model, so their agreement is not independent verification.
- What the reasoning cannot establish:
  - whether systems outperform human-led practice in each decision class;
  - whether the standing premise is correct, which is a question of values;
  - whether real judgement at grade 1 is affordable at the volumes concerned;
  - the legal and policy position after June 2026.

**Verify before adding any of these to the paper**
- Comparative-performance studies: Kleinberg et al. (2018); Agarwal et al. (2023); Goh et al. (2024).
- Explanation and reliance: Bansal et al. (2021); Ghassemi et al. (2021).
- The sepsis-alert validation: Wong et al. (2021).
- Answerability and its critics: Huq (2020); Elish (2019).
- The 2018 FDA authorisation of autonomous retinopathy screening, and its liability arrangement.
- The Dutch childcare-benefits risk model.
- The 2003 air-defence fratricides.
- EU law on automated decisions: GDPR Article 22 and Recital 71; AI Act Article 86 and the timetable for its high-risk obligations.
- Algorithmic-trading controls: EU kill-function rules; the US market-access rule; the enforcement action after Knight Capital.
- Article 36 of Additional Protocol I.
- From the Robodebt primary report: the reversed onus, the removal of staff checks, and the official found to have failed to act.
- The current state of UN work on autonomous weapons.
- Exact wording: I read every source in this session through a page summary, so check the primary text before quoting it.

**Experts who should review the revised paper**
- An international humanitarian law specialist with experience of weapons reviews.
- An EU data-protection and AI Act lawyer.
- A clinical-safety or medical-device regulatory specialist.
- A consumer-credit compliance specialist.
- An administrative lawyer familiar with automated government decisions.

This analysis is not professional advice.

**What the author still has to decide**
- Whether to adopt the standing premise, and how far evidence may raise ceilings (a values choice; PD1).
- Whether credit refusals take ceiling 1 or a statutory grade 2 (values and cost; PD2).
- Scope: AI only, or all automated decision systems (PD3).
- Whether engaging crewed objects counts as force against persons, and what ceiling offensive anti-materiel autonomy gets (F08).
- What "discretionary AI market interventions" covers (F12).
- Where to cut length to make room for the new subsection.

**Web use**
- Four web searches and five page fetches.
- All of them concerned facts the draft relies on: the ICRC position, Obermeyer, Robodebt and AI Act Article 14.
- There was no search for the draft itself and no search for reviews of it.

### Sources read in this session

- [ICRC position on autonomous weapon systems (12 May 2021)](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems)
- [Obermeyer, Powers, Vogeli and Mullainathan (2019), Science (course-hosted copy)](https://www.cl.uni-heidelberg.de/courses/ws19/bias/material/obermeyer.pdf)
- [Royal Commission into the Robodebt Scheme: overview of the final report (hosted by APRA)](https://www.apra.gov.au/sites/default/files/2024-02/Robodebt%20Royal%20Commision%20-%20Overview%20of%20Final%20Report.pdf)
- [Wikipedia: Royal Commission into the Robodebt Scheme](https://en.wikipedia.org/wiki/Royal_Commission_into_the_Robodebt_Scheme)
- [European Commission AI Act Service Desk: Article 14, Human oversight](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14)
