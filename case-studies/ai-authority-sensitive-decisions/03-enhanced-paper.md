# Graded Authority for AI over Sensitive Human Matters: A Tiered Account for Medicine, Military Force and the Economy

## Abstract

AI systems are increasingly placed inside decisions about health, life and death, liberty and livelihood. This paper asks whether such systems should hold decision authority over these matters, and on what terms. It distinguishes five grades of authority, from information to autonomous execution, and argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy. Bounded delegation is defensible for narrow functions whose limits humans set in advance and can enforce with a stop. An asymmetry premise governs direction: where a wrongful adverse decision is harder to reverse than a wrongful favourable one, automated systems may be given more authority over favourable decisions than over adverse ones. Authority is licensed only when five conditions hold: answerability, contestability, the right target, real override and bounded delegation. The account yields domain-specific grade ceilings, a test for each condition, and triggers for downgrading authority when a deployment drifts.

## 1 Introduction

Hospitals rank patients for scarce beds and specialist review. Armed forces use systems that classify objects and people faster than staff can check them. Public agencies score benefit claims and flag families for fraud review. Lenders use models to refuse credit, and trading systems act on prices in milliseconds. In each case the question is no longer whether an algorithm informs a decision, but whether it may make one.

This paper defends a clear position. AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy. They may hold bounded authority: over narrow executional tasks whose limits humans set in advance, over steps that only escalate or protect, and, in some lending and administrative settings, over favourable decisions. Any such grant must meet five conditions, and its strength must track the stakes.

The aim is practical as well as argumentative. The paper is written for people who must decide whether a particular deployment may act on its own: hospital governance committees, procurement officers, regulators and ethics boards. For that reason Section 5 gives tests and certification rules, not only principles, and Section 6 answers the objections such readers are most likely to raise.

The argument has three steps. Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone. The characteristic failures of automated decision-making, such as proxy labels, opacity and complacent oversight, are structural and must be designed against. The right design is therefore a tiered allocation, not a choice between a human deciding and a machine deciding. Section 2 sets out the grades, Section 3 gives one case per domain, Section 4 examines the stakes, Section 5 states the tiers and their tests, Section 6 answers six objections and Section 7 makes recommendations. Section 8 states the limits of the account.

## 2 What "authority" means

To say that a system has decision authority is to say that its output settles a matter others must accept, and that someone can be held to account for it. Computing an answer is not enough. Authority presupposes an agent who can give reasons, be questioned and be corrected. The paper uses a five-grade scale to show how far a system's output may settle outcomes before a human acts on it.

- **Grade 0, information.** The system reports or summarises data and proposes no option.
- **Grade 1, advice.** The system recommends options with reasons. A human selects and remains the decision-maker of record.
- **Grade 2, default with override.** The system's option takes effect for each case unless a human actively overrides it within a set window.
- **Grade 3, delegated execution.** The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act.
- **Grade 4, autonomous execution.** The system acts with no timely human veto, and its limits are absent or set by the system itself.

Authority in the relevant sense is grades 2 to 4. Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too.

Grades 2 and 3 differ in the unit of control, and the difference can be stated as a test. Grade 2 is controlled case by case: the system's option stands unless a human overrides it in the window. Grade 3 is controlled by the envelope: limits are fixed before operation, actions are reviewed in patterns, and a human can stop the system. If a human must be able to change an individual outcome before it takes effect, the system is at grade 2 or below. If the human can change only the envelope or stop the system, it is at grade 3.

It helps to treat authority as a bundle of separable permissions: to escalate a case, to prioritise it, to approve it, to deny it, to act on it and to stop. A deployment is assessed permission by permission, and the grade of a decision class is set by the most consequential permission it carries. A system may therefore be trusted to escalate a case at grade 2 while being refused any power to deny one.

A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service. Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately.

## 3 The three domains

### 3.1 Medicine

Consider a commercial algorithm that health systems used to identify patients for additional care management, a scarce programme of nurse outreach and extra attention. It predicted future health-care costs and used them as the measure of need. Because, at the same level of illness, less had been spent on Black patients, the proxy systematically under-identified them (Obermeyer et al., 2019). The algorithm was accurate about its label and wrong about the thing the programme was for. What is at stake is the allocation of attention among people whose health depends on it, and the trust of communities whose needs were misread. One influential view holds that human and artificial intelligence should converge, with clinicians augmented rather than replaced (Topol, 2019). That view does not settle who holds authority when the two disagree.

### 3.2 Military force

The case below is illustrative. It is a policy-level scenario, not a description of any system. A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time. The area contains combatants, civilians and people who have surrendered. No one approves each engagement, and the commander's authorisation is the last human act before the consequences. What is at stake is whether persons can be distinguished, whether force is proportionate, and whether anyone can answer for an unlawful killing.

The ICRC recommends prohibiting unpredictable autonomous weapon systems and systems designed or used to target persons. It recommends restricting others through limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021). The recommendation is not binding law, and states hold differing positions. The wider debate is surveyed at book length (Scharre, 2018). The case concerns who decides whether a person is killed, not how any system works.

### 3.3 The economy

The Australian Robodebt scheme is a documented welfare case. It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients. Debt notices were generated at scale, and the burden of showing that a debt was wrong fell on the recipient. Its consequences were examined in detail by a royal commission (Royal Commission into the Robodebt Scheme, 2023). What is at stake is a person's income and standing, imposed by an adverse decision that no official had individually reviewed, against people least able to contest it.

Credit scoring follows the same logic. A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant. Lending decisions are typically made in high volume, which makes individual review costly and turns the design question into one of what review is possible at scale. Automated market interventions raise a different stake. The harm is collective and fast, and no single person can answer for it. Section 5 sets the tiers for each.

## 4 Ethical stakes

### 4.1 Accountability gaps

When designers, deployers and operators cannot predict a system's behaviour, the ordinary chain of responsibility breaks. Learning automata can act in ways their designers cannot foresee, so ordinary ascriptions of responsibility fail (Matthias, 2004). Applied to autonomous weapons, the worry is that a war crime committed by such a system may leave no one to whom blame can properly attach (Sparrow, 2007). Santoni de Sio and van den Hoven (2018) argue that meaningful human control requires that the system track the relevant reasons of the humans responsible for it, and that its behaviour be traceable to a human who understands it and can act on that understanding. The paper treats traceability as the minimal test of answerability. A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm.

### 4.2 Contestability and dignity

A person subject to a consequential decision is entitled to know its basis and to have it reviewed by someone who can reverse it, whether or not the decision is accurate. To be determined by a process that cannot take one's situation into account is to be treated as an object of calculation rather than as a subject with reasons. The cases Eubanks (2018) documents show how automated tools in public services can profile and punish poor people, often with no one available to hear a challenge. In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all.

### 4.3 Bias and fairness

Automated systems inherit the structure of their data and labels. A proxy can carry historical inequality into a decision while appearing neutral (Obermeyer et al., 2019). Fairness is a choice of target and metric, and no metric is neutral. A system can be highly accurate against its training label and systematically wrong about the outcome that matters. Authority therefore requires that the target and fairness criteria be fixed before deployment, validated against the outcome the decision is for, and audited for differential error across groups.

### 4.4 Opacity

Interpretability has no single meaning and must be defined relative to the task for which an explanation is needed (Doshi-Velez and Kim, 2017). An explanation that satisfies a data scientist may not let a patient, claimant or borrower identify an error and contest it. Opacity also disarms the professional who must decide whether to trust the system. Without reasons, an override rests on intuition, which is a weak safeguard. Explanation is therefore a precondition of contestation and of meaningful override.

### 4.5 Automation bias and deskilling

Supervisors of automated systems tend to over-rely on them, and they monitor less well as reliability rises. Reviews of the human-factors literature treat this as a problem of attention (Parasuraman and Manzey, 2010). Automation also removes the practice that keeps operators skilled, leaving them with rare, difficult cases and a monitoring task that humans perform poorly (Bainbridge, 1983). The person is least prepared exactly when the system fails. This affects every grade above advice, and a reviewer who never disagrees exercises no real authority.

### 4.6 Feedback, drift and detection

Two dynamics are missing from a static account of grades. The first is authority creep. When review windows are shortened to save time, fewer cases reach reviewers, reviewers lose practice and override less, and the effective grade rises toward grade 4 without any formal change. The second is the label loop. In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern. A third dynamic concerns detection. For collective harms, such as market failures or some military effects, the delay between harm and detection is longer, which weakens the requirement that errors be correctable.

These are inferences from the structure of the systems described above, not findings from measured cases. The paper treats them as hypotheses that deployments should monitor, and Section 5 turns them into downgrade triggers.

## 5 A tiered account

Authority at grades 2 to 4 is licensed only when five conditions hold. Table 2 states each condition with a proposed test, the body that would certify it and a proposed re-check interval. The tests are designed so that a hospital committee, procurement office or regulator can apply them without further philosophical work. The thresholds are for each certifying body to set, because the evidence needed to justify numerical values does not yet exist.

**Table 2. Conditions, tests and certification (proposed)**

| Condition | Test | Certified by | Re-check |
|---|---|---|---|
| Answerability | A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system | Governing body of the deploying organisation | At each material change, and annually |
| Contestability | The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time | Independent oversight body or regulator | At each change to the review process, and annually |
| Right target | Performance is validated against the outcome the decision is for, and error rates are published by subgroup | Independent auditor using criteria fixed in advance | Before deployment, and at each retraining |
| Real override | Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors | Internal audit using sampled cases | Quarterly, and after any change to review windows |
| Bounded delegation | Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions | Safety authority for the domain | Before each new envelope, and at each material change |

The asymmetry premise governs direction. It holds that, where a wrongful adverse decision is harder to reverse than a wrongful favourable one, automated systems may be given more authority over favourable decisions than over adverse ones. The premise is a values choice about the relative weight of error types, and it carries an empirical condition. It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused. Where the ordering is not supported at all, the default is grade 1. Escalation is treated separately. A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome.

Table 1 gives the grade ceilings. A ceiling is the highest grade a decision class may take, given the conditions. A deployment is licensed for less than its ceiling wherever its conditions are weakly met. The ceilings are design judgements, not empirical findings.

**Table 1. Grade ceilings by domain and decision class (proposed)**

| Domain | Decision class | Grade ceiling | Conditions |
|---|---|---|---|
| Medicine | Escalating a case for urgent clinician review | 2 | Clinician can override within the workflow; reviews sampled for seeded errors |
| Medicine | Deprioritising a patient or withholding scarce care | 1 | Clinician decides, with reasons recorded |
| Medicine | Individual treatment selection | 1 | Clinician and patient decide |
| Medicine | Dosing within clinician-set limits | 3 | Limits fixed in advance; stop available |
| Medicine | Automatic protective stop that moves the system to a defined safe state | 4 | Narrow and reversible; removes no entitlement; clinician can countermand at once |
| Military | Recommending the engagement of persons | 1 | Human decision for each engagement |
| Military | Defensive engagement of incoming munitions, not persons | 3 | Human-set envelope; human on the loop; stop available |
| Economy | Favourable approvals, such as low-cost approvals | 2 | Audit; errors correctable; asymmetry premise checked for the domain |
| Economy | Credit refusals | 1 | Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit |
| Economy | Welfare denials, debt raising and sanctions | 1 | Named human decision-maker of record |
| Economy | Pre-committed market rules, such as halts and rate limits | 3 | Parameters set by public authority; kill switch |
| Economy | Discretionary AI market interventions | 1 | Public justification; no unilateral action |

No domain licenses grade 4 for decisions about persons, with one exception. A protective stop may run at grade 4 if it moves a system to a defined safe state, removes no entitlement and can be countermanded by a clinician at once. Grade 3 suits small decision spaces with limits set in advance and a reliable stop. Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow. Grade 1 governs individual adverse determinations, value-laden allocation and force against persons.

A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it. The triggers are a review window shortened without audit; an override rate that falls to near zero over a sustained period without an audit explanation; a subgroup error gap above a threshold set in advance; a sampled reviewer who cannot state the reason for a decision; and any change to the outcome label. These triggers are the working form of the drift risks in Section 4.6.

Market mechanisms turn on a different consideration. They act faster than case-by-case approval, and their harms are collective. Pre-committed public rules, with halts and rate limits, meet the conditions at grade 3. Discretionary interventions, in which a system chooses when and how to act on prices, do not. Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails.

## 6 Objections and replies

### 6.1 The lives-saved argument

If an AI triage system saves more lives on average than clinicians do, withholding authority from it costs lives. The argument has force, and the paper accepts part of it. Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops. On its own it does not support authority over deprioritisation or the allocation of scarce care. Three replies apply.

First, an average hides distribution. A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019).

Second, the argument needs a premise the paper cannot yet supply: that the lives gained by automated prioritisation outweigh the lives lost to its errors, including errors concentrated in particular groups. That is an empirical question, and the framework makes it testable through subgroup audit and the override tests in Section 5. Until it is answered, the lives-saved argument supports augmentation, with escalation and audit, more clearly than it supports authority over who receives care.

Third, the argument proves too much. If efficiency justified removing review, no appeal would survive. Lives saved are evidence for augmentation, not for authority over persons' fates.

### 6.2 Humans are biased too

Human decision-makers are biased, and algorithms can be more consistent and more auditable. But the comparison concerns error correction. Human bias is heterogeneous. Different officials err in different ways, and each can be questioned, trained and replaced. Automated bias is uniform and scaled. One flawed label distorts every decision the system makes, and it can hide behind an appearance of objectivity, as the Obermeyer proxy did (Obermeyer et al., 2019). Human bias does not excuse automated bias. Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review. The machine should audit the human, not replace the person who answers for the decision.

### 6.3 Competitive pressure

If rivals delegate to machines, restraint looks like unilateral disadvantage. The dynamic is real, but the conclusion does not follow. Competitive pressure is a collective action problem, and its proper response is coordinated limits, not each actor surrendering authority. The argument also overstates the need for speed. Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules. It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable. The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021). Competitive pressure can explain why authority is granted. It cannot justify granting it where the conditions fail.

### 6.4 Oversight as rubber stamp

The strongest objection is that oversight becomes a formality. If reviewers accept whatever the system proposes, grade 2 collapses into grade 4 with a human's name attached. The concern is well founded. Complacency and automation bias are documented (Parasuraman and Manzey, 2010), and sustained monitoring is a task humans perform poorly (Bainbridge, 1983). The EU's AI Act requires that high-risk systems be designed so that natural persons can effectively oversee them (European Union, 2024), but a legal requirement does not make oversight real.

The objection is accepted as a design constraint. Grade 2 is permissible only where review fits the workflow, overrides are logged, reviewers are tested with seeded errors, and the drift triggers in Section 5 are monitored. Reviewers should answer for accuracy, not agreement. When these conditions fail, the system drops to grade 1. In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1.

### 6.5 Third-party harm

A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation. The asymmetry premise counts mainly the harm to the person affected, so this objection threatens it directly. The reply is that the premise is a values choice with an empirical condition. Third-party harm counts. Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1. The paper does not claim that the evidence favours its premise in credit. It claims that the premise must be tested before it is used.

### 6.6 Low-resource settings

A strict ceiling may withhold benefit from people who would be better served by an imperfect automated service than by none. Where review capacity is absent, the framework could leave a population with slower triage or none. The reply has two parts. First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes. A low-stakes information service needs fewer of them than a system that decides who receives scarce care. Second, where review capacity is absent, the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review. This is a values trade-off. It accepts slower service in exchange for protection from errors that no one can detect or contest, and the paper states that choice rather than hiding it.

## 7 Recommendations and conclusion

### 7.1 Recommendations

1. Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2).
2. Apply the asymmetry premise in law and procurement only where it has been checked for the domain. Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit.
3. Fix the outcome label and fairness criteria in advance, validate them against the purpose of the decision, and publish subgroup error rates.
4. Make override real. Log overrides, set minimum review times, seed reviews with known errors, and treat a near-zero override rate as a signal to investigate, not as proof of accuracy.
5. Prohibit delegated authority to select and engage persons with force. Pursue international limits along the lines the ICRC recommends (ICRC, 2021), and keep defensive envelopes against objects bounded and stoppable.
6. Keep market automation within public, pre-committed rules with halts and kill switches, and prohibit discretionary AI market interventions without public justification.
7. Monitor for authority creep and label loops, and downgrade any deployment that meets a trigger in Section 5 until it is re-certified.
8. Budget for the conditions. Audit, logging, seeded review and subgroup reporting have real costs in staff, data and time. A deployment that cannot pay for them should not be granted the grade its ceiling allows.

### 7.2 Conclusion

AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge. Authority over sensitive matters therefore stays with humans and institutions, which may delegate bounded functions to machines on conditions. Those conditions, with the asymmetry premise tested before it is used, yield ceilings that are low for decisions about persons and higher for narrow, reversible or envelope-bounded functions. Any future extension of authority should pass one test. Does it preserve someone who can answer for the decision, and a route by which the person affected can be heard?

## 8 Limitations

The account is normative. It states conditions and tests, but it does not measure how often any deployment meets them, and the ceilings in Table 1 are design judgements. The asymmetry premise is a values choice with an empirical condition that this paper does not establish. The jurisdictions discussed are few: the European Union's AI Act and the Australian Robodebt case. The military discussion is policy-level, and the ICRC position it relies on is a recommendation, not law. Nothing here is legal, medical or military advice. Clinicians, lawyers and military ethicists should test the tiers against their own institutions before use.

## References

Bainbridge, L. (1983). Ironies of automation. *Automatica*, 19(6), 775–779.

Doshi-Velez, F., and Kim, B. (2017). Towards a rigorous science of interpretable machine learning. arXiv:1702.08608. https://arxiv.org/abs/1702.08608

Eubanks, V. (2018). *Automating inequality: How high-tech tools profile, police, and punish the poor*. New York: St. Martin's Press.

European Union. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, L series, 12 July 2024. Text consulted at https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/

ICRC. (2021). *ICRC position on autonomous weapon systems*. Geneva: International Committee of the Red Cross. https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems

Matthias, A. (2004). The responsibility gap: Ascribing responsibility for the actions of learning automata. *Ethics and Information Technology*, 6(3), 175–183.

Obermeyer, Z., Powers, B., Vogeli, C., and Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447–453.

Parasuraman, R., and Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. *Human Factors*, 52(3), 381–410. https://doi.org/10.1177/0018720810376055

Royal Commission into the Robodebt Scheme. (2023). *Report*. Canberra: Commonwealth of Australia. https://robodebt.royalcommission.gov.au/

Santoni de Sio, F., and van den Hoven, J. (2018). Meaningful human control over autonomous systems: A philosophical account. *Frontiers in Robotics and AI*, 5, 15. https://doi.org/10.3389/frobt.2018.00015

Scharre, P. (2018). *Army of none: Autonomous weapons and the future of war*. New York: W. W. Norton.

Sparrow, R. (2007). Killer robots. *Journal of Applied Philosophy*, 24(1), 62–77. Open copy: https://robsparrow.com/wp-content/uploads/Killer-robots.pdf

Topol, E. J. (2019). High-performance medicine: The convergence of human and artificial intelligence. *Nature Medicine*, 25(1), 44–56. https://pubmed.ncbi.nlm.nih.gov/30617339/
