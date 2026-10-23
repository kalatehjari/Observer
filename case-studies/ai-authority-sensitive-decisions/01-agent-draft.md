# Graded Authority for AI over Sensitive Human Matters: A Tiered Account for Medicine, Military Force and the Economy

## Abstract

AI systems are increasingly placed inside decisions over health, life and death, liberty and livelihood. This paper asks whether such systems should hold decision authority over these matters, and on what terms. It distinguishes five grades of authority, from information to autonomous execution, and argues that AI should not hold final authority over determinations about specific persons in medicine, military force or the economy. Bounded delegation is defensible for narrow functions whose limits humans set in advance and can enforce by a stop. An asymmetry principle governs direction: automated systems may escalate, prioritise or approve more freely than they may deny, deprioritise or sanction. Authority is licensed only when answerability, contestability, validity against the right target, real override and bounded delegation hold. Objections concerning lives saved, human bias, competitive pressure and nominal oversight are assessed, and the account yields domain-specific grade ceilings.

## 1 Introduction

Hospitals rank patients for scarce beds and specialist review. Armed forces use systems that classify objects and people faster than staff can check them. Public agencies score benefit claims and flag families for fraud review. Lenders use models to refuse credit, and trading systems act on prices in milliseconds. In each case the question is no longer whether an algorithm informs a decision, but whether it may make one.

This paper defends a clear position. AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy. They may hold bounded authority: over narrow executional tasks whose limits humans set in advance, over steps that only escalate or protect, and, in some lending and administrative settings, over favourable or low-cost decisions. Any such grant must meet five conditions, and its strength must track the stakes.

The argument has three steps. Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone. The characteristic failures of automated decision-making, such as proxy labels, opacity and complacent oversight, are structural and must be designed against. The right design is therefore a tiered allocation, not a choice between a human deciding and a machine deciding. Section 2 sets out the grades, Section 3 gives one case per domain, Section 4 examines the stakes, Section 5 states the tiers, Section 6 answers four objections and Section 7 makes recommendations.

## 2 What "authority" means

To say that a system has decision authority is to say that its output settles a matter others must accept, and that someone can be held to account for it. Computing an answer is not enough. Authority presupposes an agent who can give reasons, be questioned and be corrected. I use a five-grade scale to show how far a system's output may settle outcomes before a human acts on it.

- **Grade 0, information.** The system reports or summarises data and proposes no option.
- **Grade 1, advice.** The system recommends options with reasons. A human selects and remains the decision-maker of record.
- **Grade 2, default with override.** The system's option takes effect for each case unless a human actively overrides it within a set window.
- **Grade 3, delegated execution.** The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act.
- **Grade 4, autonomous execution.** The system acts with no timely human veto, and its limits are absent or set by the system itself.

The question concerns grades 2 to 4, which constitute decision authority in the relevant sense. Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too. Grades 2 and 3 differ in unit of control. Grade 2 is controlled case by case through an override. Grade 3 is controlled by setting the envelope and reviewing patterns of action.

## 3 The three domains

### 3.1 Medicine

Consider a commercial algorithm that health systems used to identify patients for additional care management, a scarce programme of nurse outreach and extra attention. It predicted future health-care costs and used them as the measure of need. Because, at the same level of illness, less had been spent on Black patients, the proxy systematically under-identified them (Obermeyer et al., 2019). The algorithm was accurate about its label and wrong about the thing the programme was for. What is at stake is the allocation of attention among people whose health depends on it, and the trust of communities whose needs were misread. One influential view holds that human and artificial intelligence should converge, with clinicians augmented rather than replaced (Topol, 2019). That view does not settle who holds authority when the two disagree.

### 3.2 Military force

Consider a policy-level case. A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time. The area contains combatants, civilians and people who have surrendered. No one approves each engagement, and the commander's authorisation is the last human act before the consequences. What is at stake is whether persons can be distinguished, whether force is proportionate, and whether anyone can answer for an unlawful killing. The ICRC recommends prohibiting unpredictable autonomous weapon systems and systems designed or used to target persons. It recommends restricting others by limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021). The wider debate is surveyed at book length (Scharre, 2018). The case concerns who decides whether a person is killed, not how any system works.

### 3.3 The economy

The Australian Robodebt scheme is a documented welfare case. It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients. Debt notices were generated at scale, and the burden of showing that a debt was wrong fell on the recipient. Its consequences were examined in detail by a royal commission (Royal Commission into the Robodebt Scheme, 2023). What is at stake is a person's income and standing, imposed by an adverse decision no official had individually reviewed, against people least able to contest it. Credit scoring follows the same logic. A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant. Automated market interventions raise a different stake. The harm is collective and fast, and no single person can answer for it. Section 5 sets the tiers for them.

## 4 Ethical stakes

### 4.1 Accountability gaps

When designers, deployers and operators cannot predict a system's behaviour, the ordinary chain of responsibility breaks. Learning automata can act in ways their designers cannot foresee, so ordinary ascriptions of responsibility fail (Matthias, 2004). Applied to autonomous weapons, the worry is that a war crime committed by such a system may leave no one to whom blame can properly attach (Sparrow, 2007). Meaningful human control requires that the system track the reasons of the humans responsible for it, and that its behaviour be traceable to a human who understands it and can act on that understanding (Santoni de Sio and van den Hoven, 2018). I take traceability as the minimal test of answerability. A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm.

### 4.2 Contestability and dignity

A person subject to a consequential decision is entitled to know its basis and to have it reviewed by someone who can reverse it, whether or not the decision is accurate. To be determined by a process that cannot take one's situation into account is to be treated as an object of calculation rather than as a subject with reasons. Automated tools in public services profile, police and punish poor people, and much of the harm lies in the absence of anyone who will hear a challenge (Eubanks, 2018). In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all.

### 4.3 Bias and fairness

Automated systems inherit the structure of their data and labels. A proxy can carry historical inequality into a decision while appearing neutral (Obermeyer et al., 2019). Fairness is a choice of target and metric, and no metric is neutral. A system can be highly accurate against its training label and systematically wrong about the outcome that matters. Authority therefore requires that the target and fairness criteria be fixed before deployment, validated against the outcome the decision is for, and audited for differential error across groups.

### 4.4 Opacity

Interpretability has no single meaning and must be defined relative to the task for which an explanation is needed (Doshi-Velez and Kim, 2017). An explanation that satisfies a data scientist may not let a patient, claimant or borrower identify an error and contest it. Opacity also disarms the professional who must decide whether to trust the system. Without reasons, an override rests on intuition, which is a weak safeguard. Explanation is therefore a precondition of contestation and of meaningful override.

### 4.5 Automation bias and deskilling

Supervisors of automated systems tend to over-rely on them, and they monitor less well as reliability rises. The evidence has been integrated as a problem of attention (Parasuraman and Manzey, 2010). Automation also removes the practice that keeps operators skilled, leaving them with rare, difficult cases and a monitoring task that humans perform poorly (Bainbridge, 1983). The person is least prepared exactly when the system fails. This affects every grade above advice, and a reviewer who never disagrees exercises no real authority.

## 5 A tiered account

Authority at grades 2 to 4 is licensed only when five conditions hold.

1. **Answerability.** A named institution and person are accountable for the system's design, deployment and outcomes, and can correct it.
2. **Contestability.** An affected person can learn the basis of a decision in usable terms and obtain review by someone who can reverse it.
3. **Right target.** Performance is validated against the outcome the decision is for, with audit across groups.
4. **Real override.** The human has the time, information, competence and incentives to disagree, and that capacity is tested.
5. **Bounded delegation.** Where a system acts without case-by-case approval, its limits are fixed in advance by accountable humans and enforced by a stop.

A sixth principle governs direction. Under asymmetry, automated systems may escalate, prioritise, approve or protect more freely than they may deny, deprioritise, sanction or harm. Errors that move a person toward attention or benefit are usually cheaper and more correctable than errors that withhold care, refuse benefit or impose a debt. Adverse steps therefore need a human decision-maker of record. Escalation is different. A flag that moves a case up a queue costs little if it is wrong, and the human's judgement still settles the outcome.

Table 1 gives the ceilings. A ceiling is the highest grade a decision class may take, given the conditions. A system is licensed for less wherever the conditions are weakly met.

| Domain | Decision class | Grade ceiling | Conditions |
|---|---|---|---|
| Medicine | Escalating a case for urgent clinician review | 2 | Clinician can override within the workflow |
| Medicine | Deprioritising a patient or withholding scarce care | 1 | Clinician decides, with reasons recorded |
| Medicine | Individual treatment selection | 1 | Clinician and patient decide |
| Medicine | Dosing adjustments within clinician-set limits | 3 | Limits fixed in advance; stop available |
| Medicine | Automatic protective stop, such as pausing an infusion on detected occlusion | 4 | Narrow, reversible, moves to a safe state |
| Military | Recommendations on engagement of persons | 1 | Human decision for each engagement |
| Military | Defensive engagement of incoming munitions, not persons | 3 | Human-set envelope; human on the loop; stop |
| Economy | Favourable or low-cost approvals | 2 | Audit; errors correctable |
| Economy | Credit refusals | 2 | Reason codes; review on request; disparate-impact audit |
| Economy | Welfare denials, debt raising, sanctions | 1 | Named human decision-maker of record |
| Economy | Pre-committed market rules, such as halts and rate limits | 3 | Parameters set by public authority; kill switch |
| Economy | Discretionary AI market interventions | 1 | Public justification; no unilateral action |

No domain licenses grade 4 for decisions about persons. The only grade 4 case is a narrow protective stop that is reversible and moves the system to a safe state. Grade 3 suits small decision spaces with limits set in advance and a reliable stop. Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow. Grade 1 governs individual adverse determinations, value-laden allocation and force against persons.

Market mechanisms turn on a different consideration. They act faster than case-by-case approval, and their harms are collective. Pre-committed public rules, with halts and rate limits, meet the conditions at grade 3. Discretionary interventions, in which a system chooses when and how to act on prices, do not. No one can answer for a collective harm produced by a learned discretionary policy.

## 6 Objections and replies

### 6.1 The lives-saved argument

If an AI triage system saves more lives on average than clinicians do, withholding authority from it costs lives. I accept part of this. Where authority is confined to validated execution within limits, the argument supports grade 3 or 4 use, as in dosing or protective stops. It does not support authority over deprioritisation or the allocation of scarce care. Three replies apply. First, an average hides distribution. A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019). Second, most of the triage benefit comes from escalation, which asymmetry already licenses. Third, the argument proves too much. If efficiency justified removing review, no appeal would survive. Lives saved are evidence for augmentation, not for authority over persons' fates.

### 6.2 Humans are biased too

Human decision-makers are biased, and algorithms can be more consistent and more auditable. But the comparison concerns error correction. Human bias is heterogeneous. Different officials err in different ways, and each can be questioned, trained and replaced. Automated bias is uniform and scaled. One flawed label distorts every decision the system makes, and it can hide behind an appearance of objectivity, as the Obermeyer proxy did (Obermeyer et al., 2019). Human bias does not excuse automated bias. Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review. The machine should audit the human, not replace the person who answers for the decision.

### 6.3 Competitive pressure

If rivals delegate to machines, restraint looks like unilateral disadvantage. The dynamic is real, but the conclusion does not follow. Competitive pressure is a collective action problem, and its proper response is coordinated limits, not each actor surrendering authority. The argument also overstates the need for speed. Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules. It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable. The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021). Competitive pressure can explain why authority is granted. It cannot justify granting it where the conditions fail.

### 6.4 Oversight as rubber stamp

The strongest objection is that oversight becomes a formality. If reviewers accept whatever the system proposes, grade 2 collapses into grade 4 with a human's name attached. The concern is well founded. Complacency and automation bias are documented (Parasuraman and Manzey, 2010), and sustained monitoring is a task humans perform poorly (Bainbridge, 1983). The EU's AI Act requires that high-risk systems be designed so that natural persons can effectively oversee them (European Union, 2024), but a legal requirement does not make oversight real. I accept the objection as a design constraint. Grade 2 is permissible only where review fits the workflow, overrides are logged, and reviewers are tested with seeded errors. Reviewers should answer for accuracy, not agreement. When these conditions fail, the system drops to grade 1, with the reviewer's own judgement required. In high-volume settings where meaningful review is impossible, grade 2 is not defensible at all. Permission to act by default is therefore conditional and revocable.

## 7 Recommendations and conclusion

### 7.1 Recommendations

1. Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show that the five conditions are met before deployment.
2. Apply asymmetry in law and procurement. Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with conditions.
3. Fix the outcome label and fairness criteria in advance, validate them against the decision's purpose, and publish subgroup error rates.
4. Make override real. Log overrides, set minimum review times, seed reviews with known errors, and treat a near-zero override rate as a signal to investigate, not as proof of accuracy.
5. Prohibit delegated authority to select and engage persons with force. Pursue international limits along the lines the ICRC recommends (ICRC, 2021), and keep defensive envelopes against objects bounded and stoppable.
6. Keep market automation within public, pre-committed rules with halts and kill switches, and prohibit discretionary AI market interventions without public justification.

### 7.2 Conclusion

AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge. Authority over sensitive matters therefore stays with humans and institutions, which may delegate bounded functions to machines on conditions. Those conditions, with asymmetry governing adverse steps, yield ceilings that are low for decisions about persons and higher for narrow, reversible or envelope-bounded functions. Any future extension of authority should pass one test. Does it preserve someone who can answer for the decision, and a route by which the person affected can be heard?

## References

Bainbridge, L. (1983). Ironies of automation. *Automatica*. https://gwern.net/doc/sociology/technology/1983-bainbridge.pdf

Doshi-Velez, F., & Kim, B. (2017). Towards a rigorous science of interpretable machine learning. arXiv:1702.08608. https://arxiv.org/abs/1702.08608

European Union. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, L, 12.7.2024. https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/

Eubanks, V. (2018). *Automating inequality: How high-tech tools profile, police, and punish the poor*. St. Martin's Press. https://www.cambridge.org/core/journals/european-journal-of-sociology-archives-europeennes-de-sociologie/article/computers-cant-override-americas-antipathy-towards-the-poor-virginia-eubanks-automating-inequality-how-hightech-tools-profile-police-and-punish-the-poor-new-york-st-martins-press-2018/82FB435EFFF055F84915F3721DD5D56D

ICRC. (2021). *ICRC position on autonomous weapon systems*. International Committee of the Red Cross. https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems

Matthias, A. (2004). The responsibility gap: Ascribing responsibility for the actions of learning automata. *Ethics and Information Technology*. https://scholars.ln.edu.hk/en/publications/the-responsibility-gap-ascribing-responsibility-for-the-actions-o/

Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*. https://escholarship.org/uc/item/6h92v832

Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. *Human Factors*. https://doi.org/10.1177/0018720810376055

Royal Commission into the Robodebt Scheme. (2023). *Report*. Commonwealth of Australia. https://apo.org.au/node/323427

Santoni de Sio, F., & van den Hoven, J. (2018). Meaningful human control over autonomous systems: A philosophical account. *Frontiers in Robotics and AI*. https://doi.org/10.3389/frobt.2018.00015

Scharre, P. (2018). *Army of none: Autonomous weapons and the future of war*. W. W. Norton. https://www.publishersweekly.com/9780393608984

Sparrow, R. (2007). Killer robots. *Journal of Applied Philosophy*. https://philpapers.org/rec/SPAKR

Topol, E. J. (2019). High-performance medicine: The convergence of human and artificial intelligence. *Nature Medicine*. https://pubmed.ncbi.nlm.nih.gov/30617339/
