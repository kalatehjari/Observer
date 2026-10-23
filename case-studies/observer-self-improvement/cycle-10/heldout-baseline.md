Model ID: claude-opus-5-5

# Observer analysis: revising "Graded Authority for AI over Sensitive Human Matters" and weighing its central recommendation

*Observer method (skill v1.0), full depth for a high-stakes question. One model ran all five lenses, so their agreement is not independent verification. No web search was used: the skill asks for a list of what to verify but does not direct source checking. Facts from outside the draft are therefore marked "(background; verify)" and listed together in 5.6.*

## 1. Recommendation and confidence

### 1.1 Bottom line

**Question, restated.** What revisions would make this draft the strongest defensible paper on whether AI should hold decision authority over people in medicine, military force and economic allocation? And how much confidence does its central recommendation deserve?

**The draft's central recommendation, as read here.** AI should not hold final authority over determinations about particular persons in these domains. It may hold bounded, conditional and revocable authority, at grades 2 and 3, and at grade 4 only for narrow protective stops. That authority depends on five conditions. An asymmetry principle restricts adverse steps, and Table 1 sets the ceilings.

**Recommendation.** Keep the paper's direction, but rebuild its operative core. In order of priority:

1. **Narrow the thesis to what the argument supports.** Separate *normative authority* (being the decision-maker of record, owing reasons and answering for the outcome) from *operative control* (whose output settles the outcome unless someone steps in). AI can never hold the first. The second can be delegated, but only in bounded, contestable and revocable forms.
2. **Re-ground the asymmetry principle.** The current version sorts by verb (escalate and approve versus deny and sanction), and it fails on the paper's own examples. Base it instead on three things: the decision's effect on the person affected and on third parties, how much harm builds up before an error is corrected, and whether errors come to light at all.
3. **Derive the Table 1 ceilings from explicit variables, not by assertion.** Correct the three rows that contradict the paper's own rules (credit refusals, the protective stop and discretionary market interventions). Qualify five more, and add the decision classes the table leaves out.
4. **Close the grade-1 gap.** The five conditions stop at grade 2. Yet grade 1 is the fallback when oversight fails, and it suffers from the same automation bias. Add a functional-grade test.
5. **Engage the strongest opposing evidence and arguments.** None of the 13 references argues for AI decision authority. Present the remaining trade-off as a choice of values, not as something the paper has refuted.
6. **Broaden and repair the evidence and citations.** Give the military section a documented case. Reframe "the economy" as economic allocation to persons. Either cut market automation or treat it as a separate question of systemic risk.

**Confidence in the draft's central recommendation: 58/100.**

- **Up: the core direction has independent institutional support.** This is support from outside the analysis, not just lenses agreeing. It includes the ICRC's 2021 position and the CCW expert group's 2019 principle that accountability cannot be transferred to machines. It also includes GDPR Article 22, the EU AI Act's provisions on oversight and explanation, and the Robodebt royal commission (background; verify). Documented failures in all three domains show the risks are real.
- **Up: reversibility favours the cautious direction.** Low ceilings can be raised as evidence builds up. Delegation that has become entrenched is hard to unwind, because staff lose skills, procurement money is spent and workflows come to depend on it.
- **Down: as written, the recommendation contradicts itself.** The thesis is broader than the paper's own table. Three rows break the paper's own definitions or rules, and the asymmetry principle fails on the paper's own examples. The reply to competitive pressure (6.3) rules out only grade 4 for decisions about persons, not the grade 3 that the paper also forbids.
- **Down: the strongest counter-evidence goes unanswered, and the core depends on a values choice.** Regulators have authorised autonomous screening AI that issues negative results with no clinician review. There is evidence that clinicians working with AI can do worse than the AI alone, and research on bail prediction suggests large welfare gains (background; verify). The core also rests on ranking answerability and contestability above aggregate outcomes, a ranking that is contested and that evidence alone cannot settle.
- **How to read the score.** It blends a well-supported core with a weakly supported table. A narrowed version of the core would deserve noticeably more confidence. That narrowed core is: no normative authority for AI; no operative control over force against persons; a human decision-maker of record, with tested review, for severe adverse determinations that are hard to reverse; and real contestation for everything else. The specific ceilings in Table 1 deserve less. The score was not raised because the lenses agree, since all five share a value assumption (CZ6).

**What would change this recommendation.**

- **Prospective evidence that AI alone does better.** Suppose such evidence, validated by subgroup, shows that AI alone beats human-plus-AI on the right outcome in a decision class whose errors come to light and can be corrected. Then that class's ceiling should rise. The paper should state this update rule in advance.
- **Structured review that works at scale.** Suppose structured review (seeded errors, logged overrides and workload caps) is shown to stay effective at scale. Then grade 2 becomes defensible more widely, and the functional-grade test becomes a compliance check rather than a central plank.
- **A change in the treaty position.** Suppose a binding instrument on autonomous weapons has been adopted by the time of submission, or the CCW process has collapsed. Then the military recommendations need rewriting (status unknown to me; verify).
- **A short policy venue.** If the paper is going to a short policy outlet rather than a journal, do Tier A and the legal mapping, and cut most of Tier B.

**Top next steps.**

1. Rewrite the thesis (Abstract, Section 1, 7.2) and Section 2. Cover normative versus operative authority, a definition of "final", the scope (AI versus automated decision systems) and the criterion that unites the three domains.
2. Rewrite the asymmetry principle (Section 5) and add a value-setting condition.
3. Build the derivation rubric and re-derive Table 1 (a candidate version is in 1.4).
4. Add the functional-grade rule and safeguards for grade 1. Rewrite 6.4 to deal with the volume trap and with the critique that oversight requirements are a fig leaf.
5. Rebuild Section 6 around the strongest objections. Add replies on autonomous screening and access, on sceptics of the responsibility gap and on reason-giving by language models.
6. Do a pass on evidence and citations, then get the paper reviewed by legal, clinical, weapons-law and financial specialists.

**Not professional advice.** This analysis is not legal, medical, military-operational or financial advice. Before submission, the following should be reviewed by qualified specialists:

- **Legal claims:** lawyers in international humanitarian law, EU data-protection and AI law, administrative law and consumer-credit law.
- **Clinical examples:** a clinician or a specialist in clinical safety.
- **Weapons material:** a specialist in weapons reviews under Article 36.
- **Market material:** a specialist in financial regulation.

### 1.2 Detailed revision plan

**Tier A: must fix.** These are problems of internal consistency. A referee will find them first, and none of them depends on outside facts.

**A1. The thesis is broader than the paper's own table** (Abstract; Section 1; 7.2).

*Problem.* The thesis says "AI should not hold final decision authority over determinations about particular persons". That conflicts with rows that give AI operative control over particular persons:

- dosing, at grade 3;
- credit refusals, at grade 2;
- the protective infusion stop, at grade 4. Section 5 implicitly treats this as not a "decision about persons".

"Final" is never defined.

*Revision.* Define "final" as *not open to timely review and reversal, by a human with standing to reverse it, before significant harm has accrued*. Restate the thesis in two layers (wording in 1.3).

**A2. "Authority" is equivocal** (Section 2).

*Problem.* The definition builds in answerability ("someone can be held to account") and reason-giving agency ("an agent who can give reasons, be questioned and be corrected"). That makes "AI cannot hold authority" true by definition, which invites the charge of begging the question. The grades, meanwhile, measure something else: how far an output settles an outcome before a human acts.

*Revision.*

- Define the grades explicitly as levels of *operative control*, and treat *normative authority* separately. The substantive question then becomes how much operative control can be delegated, and on what terms.
- Place the grades against earlier work on levels of automation, such as Sheridan and Verplank (1978) and Parasuraman, Sheridan and Wickens (2000) (background; verify), and against the "in, on and out of the loop" vocabulary.
- Say where the novelty lies. It is in the asymmetry principle, the cross-domain ceilings and tested override, not in the scale itself.

**A3. The asymmetry principle fails on the paper's own examples** (Section 5; Abstract; Rec. 2).

*Problem 1: it sorts decisions by verb, not by effect.* The introduction's "flag families for fraud review" is an escalation, yet it is adverse. And "prioritise", applied to a target list, is the most adverse act in the paper.

*Problem 2: when capacity is fixed, escalating one person deprioritises another.* The paper's flagship medical case (Obermeyer et al.) was a tool that *selected* patients for a scarce programme. Its harm was under-identification. That harm therefore came through the escalate-and-prioritise direction, which the asymmetry principle says may be automated "more freely". In a queue, Table 1's "escalating a case" (grade 2) and "deprioritising a patient" (grade 1) can describe the same act.

*Problem 3: approving can harm.* Credit can push a borrower into over-indebtedness, and an approval can commit a person to a risky course.

*Revision.* Define direction by the decision's effect on the affected person's interests and liberty. Count the displacement of third parties when goods are scarce. Then ground the principle in two epistemic facts:

- Harm can build up before an error is corrected.
- Errors of denial tend to *conceal themselves*. No one observes what would have happened to the denied person (the selective-labels problem; background; verify). Many errors of approval or escalation, by contrast, come to light quickly.

This turns asymmetry from a stipulation into a principle derived from deeper facts. It also tells auditors where to look: at misses and denials. Wording is in 1.3.

**A4. Specific Table 1 rows contradict the paper's own rules** (Section 5).

*Credit refusals at grade 2.*

- This contradicts Section 5's rule: "Adverse steps therefore need a human decision-maker of record".
- It sits uneasily with the introduction, which confines lending authority to "favourable or low-cost decisions". It also sits uneasily with 3.3, which presents a refusal as high-stakes because it can exclude a person from housing.
- Rec. 2's exception ("unless a statute expressly licenses grade 2") is not invoked in the table.
- "Review on request" is contestation by the affected person after the fact. It is not the operator override that defines grade 2. This shows the scale running together operator control and contestation by the person affected.

*Fix:* either justify grade 2 explicitly, or split the row (see 1.4). Possible grounds for grade 2 are that this is private rather than state power, that alternatives exist, that each decision is of low severity, that review is fast and cheap, and that reasons are legally required.

*Automatic protective stop at grade 4.*

- The paper's own definition of grade 4 requires limits that are "absent or set by the system itself". An occlusion stop's limits are set in advance by humans, so it is grade 3. It is arguably not AI at all.
- Pausing a patient's infusion *is* a determination about a person.
- A stop triggered in error, such as a false occlusion alarm, interrupts therapy. For some life-sustaining infusions, interruption is itself dangerous. So "moves to a safe state" must be shown for each therapy, not assumed (background; check with a specialist in clinical safety).

*Fix:* reclassify the stop as grade 3, with a validated analysis of what the safe state is for each therapy. The paper can then make a simpler and stronger claim: that *nothing* in these domains warrants grade 4.

*Discretionary AI market interventions at grade 1, with Rec. 6* ("Keep market automation within public, pre-committed rules").

- As written, this would end most private algorithmic trading. Such trading already acts without human approval of each act, under mandatory pre-trade risk controls and kill switches (background; verify).
- If that outcome is intended, it needs an argument. If not, the paper should name the actor, for example public authorities' discretionary interventions.
- The claim that "no one can answer for a collective harm produced by a learned discretionary policy" also conflicts with the fact that firms are held liable for failures of algorithmic trading, as with Knight Capital in 2012 (background; verify).

*Defensive engagement of incoming munitions at grade 3.*

- "Objects, not persons" is a classification the system *outputs*, not a given. Systems in this class have killed aircrews they misclassified, as in the 2003 Patriot fratricides (background; verify).
- Add explicit safeguards against misclassification.
- State the principled basis for the line between persons and objects. A munition has narrow physical signatures. A person's status (civilian, combatant, surrendering or wounded) depends on behaviour and context. Errors against persons cannot be reversed or contested.

**A5. The grade-1 gap** (Sections 2, 5 and 6.4).

*Problem.* The five conditions license grades 2 to 4 only. Yet grade 1 is the fallback when oversight fails ("the system drops to grade 1", 6.4), and Section 2 concedes that the failures described in Section 4 "arise there too". So the paper's strongest protections sit exactly where no condition guards against automation bias, apart from table notes such as "reasons recorded". Those protections cover deprioritising patients, force against persons and welfare denials.

*Revision: add a functional-grade rule.* A deployment's grade is set by how its outputs actually settle outcomes, not by its label. The measures are:

- deviation and override rates, checked against ground truth;
- time spent on each case;
- whether the reviewer sees the case independently before seeing the recommendation;
- what disagreeing costs the reviewer.

An advisory tool that is followed without independent judgement is treated as grade 2 or higher, and must meet those conditions.

For severe adverse decisions, also add safeguards at grade 1:

- an independent first look, where feasible;
- reasons in the reviewer's own words;
- blame symmetry, so the reviewer answers for wrongly agreeing as well as for wrongly overriding;
- caps on workload.

Candidate evidence: reports of health-insurance claims denied in bulk, with seconds of physician review per case, and litigation over algorithmic denials of post-acute care (background; verify).

**A6. The reply to competitive pressure supports less than the paper claims** (Section 6.3).

*Problem.* The reply says speed "does not justify grade 4 for decisions about persons, because a bounded envelope ... is what makes speed tolerable". This rules out only grade 4. It seems to license grade 3 for persons, which is the engagement bounded by area and time in 3.2 that the paper means to forbid.

*Revision.* Give the reason specific to persons, from A4. The envelope logic works for munitions because their signatures are narrow and physical. It fails for persons because their status depends on context, and errors against them are irreversible.

**Tier B: should fix.** These changes make the paper defensible against expert referees.

**B1. Derive the ceilings from explicit variables** (Section 5).

Table 1 asserts its ceilings. The heuristics that follow it ("Grade 3 suits small decision spaces ...") are a start. Turn them into a rubric (1.4) and show how each row is derived. Doing so has three benefits:

- it turns assertion into argument;
- it makes the framework usable for decision classes the table does not list;
- it exposes which ceilings are value choices.

Consider a two-dimensional scale. One axis is *operator control* (grades 0 to 4). The other is *contestation by the person affected*: none; after the fact, on request; or notice and a hearing before the decision takes effect. Several rows (credit refusals, welfare debts and lethal force) differ mainly on the second axis.

**B2. Separate prediction from value-setting** (Sections 4.3 and 5).

Add a condition. AI may supply predictions. The values a decision rule embodies must be fixed by humans with standing, in public and inspectable form. Those values are its target, its thresholds, and the priority it gives between groups and between kinds of error. This condition does four things:

- **It explains Obermeyer.** A value, cost as the measure of need, was chosen implicitly through the label.
- **It explains why pre-committed public rules are acceptable for markets.**
- **It also admits publicly adopted rules for allocating scarce medical goods, executed by algorithm,** such as organ-allocation match runs (background; verify). This is a counterexample to "Grade 1 governs ... value-laden allocation", and the paper must deal with it either way.
- **It explains Robodebt.** The rule was written by humans and was simple, yet it measured the wrong quantity: averaged annual income stood in for fortnightly income. It also reversed the burden of proof. Robodebt was therefore a failure of target and of contestability, not of opacity or machine learning.

The paper should say that Robodebt was automated data-matching, not AI. It should then either widen its scope explicitly to automated decision systems, or mark which of its arguments apply only to AI: opacity, learned discretion, distribution shift and unfaithful self-explanation.

**B3. Engage the strongest opposing views** (Section 6). None of the 13 references argues for AI authority.

*Autonomous medical AI already makes negative determinations about persons.*

- In 2018 the US FDA granted De Novo authorisation to an autonomous system that screens for diabetic retinopathy and issues results without a clinician interpreting them. Those results include negatives, which send the patient to routine rescreening rather than referral.
- Autonomous reporting of normal chest X-rays has reportedly been CE-marked in the EU (background; verify both).

This is operative control at grade 3 over a determination that deprioritises the patient. The paper has two options:

- **Accept the strict conclusion:** these systems should be grade 1.
- **Set out a principled, conditional exception.** The conditions would be: the realistic comparator is no screening at all; validation is prospective, against the clinical outcome, across subgroups; the rescreen interval is short; a developer or deployer is accountable; and escalation is easy.

The exception fits the revised rubric and strengthens the paper.

*Evidence that the human filter can cost outcomes* (background; verify all three).

- **Radiology.** A large experiment found that AI assistance did not improve radiologists' average performance, and that they under-used the AI's information (Agarwal, Moehring, Rajpurkar and Salz, 2023, NBER working paper).
- **Diagnosis.** In a randomised trial, access to a large language model did not improve physicians' diagnostic reasoning, while the model alone scored higher in a secondary analysis (Goh et al., 2024, JAMA Network Open).
- **Pretrial release.** A study simulated large reductions in detention, without more crime, from using algorithmic predictions (Kleinberg et al., 2018, Quarterly Journal of Economics).

These are the strongest forms of the lives-saved objection and the humans-are-biased objection.

*Replace the weak replies in 6.1.*

- "Most of the triage benefit comes from escalation" is unsupported. Label it as an assumption or cite evidence. When resources are scarce, much of the value of triage lies in deciding who can wait.
- "The argument proves too much" mistakes an argument that weighs outcomes for a demand to abolish all review.
- The point about distribution in the Obermeyer case supports auditing subgroups (condition 3), not a lower ceiling. Obermeyer's algorithm was also neither a triage system nor assessed on lives saved.

Stronger replies:

- Superiority is an empirical claim. It has to be shown prospectively, against the right outcome and across subgroups.
- Where it is shown, it licenses delegating prediction and bounded execution. It does not license removing contestation or human value-setting.
- Where keeping a human decision-maker of record still costs outcomes, say so, and defend that price as a choice of values.

*Replace the weak reply in 6.2* (background; verify).

- Variation between human decision-makers is itself a fairness defect: it is noise (Kahneman, Sibony and Sunstein, 2021). Asylum adjudicators, for instance, differ widely in their decisions (Ramji-Nogales, Schoenholtz and Schrag, 2007).
- Uniform algorithmic bias can be easier to find and fix. The Obermeyer authors reported a substantial reduction in bias after changing the label (check the figure in the article).
- One study found that algorithmic lenders discriminated less than face-to-face lenders in a US mortgage market (Bartlett et al., 2022, Journal of Financial Economics).

The defensible claim is narrower. Algorithmic error is correlated and operates at scale. The relevant work is on algorithmic monoculture (Kleinberg and Raghavan, 2021) and on outcome homogenisation (Bommasani et al., 2022) (background; verify). So the remedy is audit, contestation and human value-setting, not exclusive human authority over every case.

*Ground the contestability claim.* Section 4.2 says a person is entitled to reasons and review "whether or not the decision is accurate". The contestability condition rests on that claim, but the paper asserts it rather than arguing for it. Possible grounds:

- respect for persons as reason-givers;
- due-process traditions;
- the idea of a right to be treated as a possible exception to a data-driven rule (Cen and Raghavan; background; verify the venue).

*Arguments for autonomy in military force* (background; verify).

- Arkin (2009) argued that autonomous systems might comply with international humanitarian law better than human soldiers.
- Schmitt and Thurnher (2013) argued that autonomous weapon systems are not unlawful in themselves.

The paper cites Scharre only as a survey. It should state these positions and answer them.

*Sceptics of the responsibility gap* (background; verify).

- Several authors argue that the gap is filled by the responsibility of commanders, states or developers, for example Himmelreich (2019) and Tigard (2021).
- The paper's own remedy, naming an accountable person before deployment, concedes much of this.

To keep its line on force against persons, the paper needs a further claim. Accountability without control or foresight creates a "moral crumple zone", in which a human absorbs blame for harm they could not prevent (Elish, 2019). The paper should also adopt both of Santoni de Sio and van den Hoven's conditions, tracking as well as tracing, rather than treating traceability as "the minimal test" (4.1).

*Reason-giving by systems built on language models.* The premise that AI cannot "give reasons, be questioned and be corrected" is now contestable, because these systems produce reasons and answer questions. Rest the premise instead on two points:

- It cannot be verified that a model's stated reasons are faithful to the actual basis of its output, for example Turpin et al. (2023) (background; verify).
- The system cannot bear sanctions, owe justification or make amends as a member of the community to which the decision answers.

This keeps the argument from ageing badly.

**B4. Broaden and balance the evidence** (Sections 3 and 6).

Reduce the weight placed on Obermeyer, which is cited in 3.1, 4.3, 6.1 and 6.2. State how the cases were selected, and include at least one success case per domain. Candidates follow (all background; verify).

*Medicine*

- **Sepsis prediction.** An external validation of a widely deployed proprietary sepsis model found much weaker performance than reported, and a heavy burden of alerts (Wong et al., 2021, JAMA Internal Medicine). This directly tests the claim that "a flag ... costs little if it is wrong".
- **Mammography.** In the MASAI trial, AI allocated human reading effort. That is authority over the workflow rather than the outcome, a unit the grade scale does not yet distinguish.
- **Insulin dosing.** Hybrid closed-loop insulin delivery is the model grade-3 dosing case.

*Military force: documented cases, not only a hypothetical*

- **The 2003 Patriot fratricides.**
- **The 1988 shoot-down by the USS Vincennes.** This is a case of misperception and over-reliance on system displays, under a human decision.
- **Reporting on AI decision-support systems used to nominate targets**, allegedly with minimal human review. These reports are contested and officially disputed. If used, cite the primary reporting and the official responses, and say what is disputed.
- **The 2021 UN Panel of Experts report on Libya**, on loitering munitions. Its interpretation is contested.

*Economic allocation to persons*

- **The Dutch childcare-benefits scandal.** A risk-classification model used nationality as a factor, and the government resigned in January 2021.
- **The SyRI judgment.** The Hague District Court ruled against the system in February 2020, under Article 8 of the European Convention on Human Rights.
- **Michigan's MiDAS system**, which made determinations of unemployment fraud.
- **The UK's 2020 exam-grading algorithm.**
- **The CJEU's SCHUFA judgment** (C-634/21, December 2023), which treats credit scores as automated decisions.
- **The EU Platform Work Directive**, which requires that decisions to suspend or terminate a platform worker's account be taken by a human (check the article).
- **Pintarich v Deputy Commissioner of Taxation [2018] FCAFC 79.** An Australian court held that a computer-generated letter was not a "decision", because no mental process lay behind it. This bears directly on Section 2's account of authority.

**B5. Map the recommendations onto existing law, without resting the argument on it** (background; verify with lawyers).

*EU*

- GDPR Article 22.
- AI Act Article 14, including 14(4)(b) on automation bias and 14(5) on verification by two people for remote biometric identification.
- AI Act Article 26 (deployers' duties of oversight), Article 27 (fundamental-rights impact assessment) and Article 86 (right to explanation).
- AI Act Annex III, point 5.
- Article 2(3) of the AI Act excludes military uses, so the paper cannot rely on the Act for its military recommendations.
- Cite the Official Journal or EUR-Lex, not a commercial site.

*Military*

- The rules of international humanitarian law on distinction, proportionality and precautions.
- Weapons reviews under Article 36 of Additional Protocol I.
- The CCW expert group's 2019 guiding principles.
- US DoD Directive 3000.09 (2023 update).
- UN General Assembly resolution 78/241.

*Credit*

- US rules on adverse-action notices, and CFPB Circular 2022-03.
- Qualify the claim that "the model's reasons are often unavailable" (3.3). Reasons are often legally required. The problem is that they are often not usable.

*Markets*

- MiFID II Article 17 and SEC Rule 15c3-5.

**B6. Add guidance on military force for non-ideal conditions** (6.3; Rec. 5).

As far as I know, international coordination has not produced a binding instrument, and autonomy in software is hard to verify. Say what a single state should do in the meantime:

- commit not to delegate force against persons;
- run weapons reviews that test autonomy specifically;
- constrain operational envelopes;
- publish its policies, as measures to build confidence.

Check the status of the CCW process at the time of submission.

**B7. Address the volume trap** (6.4).

The paper says that "in high-volume settings where meaningful review is impossible, grade 2 is not defensible at all". But in those settings grade 1 is not real either. Say what follows: the decision itself has to be redesigned.

- Automated outputs may trigger only favourable action or human contact.
- The agency bears the burden of proof.
- Adverse determinations become rarer and better evidenced.
- Appeals are properly resourced.

Engage Green (2022) (background; verify). Green argues that requirements for human oversight often legitimise flawed systems. On his view, they should give way to institutional oversight and to evaluating the whole human–AI system before deployment. Section 6.4 is in effect a reply to this critique.

**B8. Add a requirement to compare against realistic alternatives.**

Sometimes the realistic alternative to an AI decision is no qualified decision-maker at all, as with screening in under-served areas. There, a low ceiling can harm exactly the people the paper means to protect. Judge ceilings against realistic alternatives, not against ideal clinicians or officials.

**Tier C: polish and scholarly hygiene.**

**C1. Citations.** Several links point to reviews, listings or secondary hosts rather than to the works themselves:

- Eubanks links to a journal's review of the book.
- Scharre links to a trade listing.
- Bainbridge links to a PDF on a third-party host.
- The AI Act links to a commercial site.

Journal entries also lack volume, issue, pages and DOI. Check every reference against the publisher's record.

**C2. The logic of the conditions.** Say whether the five conditions are necessary, sufficient up to the ceiling, or both. Say also what follows when they are only partly met. The paper says such a system is "licensed for less"; it should say how much less.

**C3. Unsupported empirical claims.** Support or label each of these:

- "most of the triage benefit comes from escalation" (6.1);
- "they monitor less well as reliability rises" (4.5): cite the specific studies;
- "the model's reasons are often unavailable to the applicant" (3.3): qualify it (see B5).

**C4. Seeded errors.** Give the precedent: threat-image projection in aviation-security screening (background; verify). Give the limits too. Seeding false cases into live clinical queues risks patient safety, so use simulation or shadow cases there. Measure how accurate overrides are, that is, whether they are right more often than wrong. A high override rate can signal reflexive distrust of the system rather than vigilance.

**C5. Define the domain.** Define "highly sensitive human matters", for example as decisions that significantly affect a person's life, bodily integrity, liberty or livelihood, taken where power and information are unequal. Justify treating the three domains together, and state the main disanalogies:

- consent, in medicine;
- the adversarial setting, and the target's inability to contest, in war;
- collective rather than individual harm, in markets.

**C6. Positioning and structure.** Engage the closest legal and policy literature (background; verify):

- Citron (2008), on technological due process;
- Crootof, Kaminski and Price (2023), on humans in the loop;
- Green (2022).

Consider organising Section 5 by *decision function* rather than by domain. The functions would be allocating scarce goods, imposing burdens, using force, executing within protocols, and protective interlocks. This makes the framework more general and removes repetition.

### 1.3 Proposed wording (for the author to accept, adapt or reject)

**Thesis** (Abstract, Section 1, 7.2):

> "Normative authority over decisions about persons cannot be held by an AI system. That authority means being the decision-maker of record, owing reasons and answering for the outcome. It must remain with identified humans and institutions. Operative control over outcomes for particular persons may be delegated to AI systems only in bounded, contestable and revocable forms. The bound tightens as a decision becomes more adverse to the person, less reversible before correction, less likely to reveal its own errors, and more value-laden. No AI system should hold operative control over the use of force against persons."

**"Final":**

> "A determination is final when it is not open to timely review and reversal, by a human with standing to reverse it, before significant harm has accrued."

**Asymmetry** (Section 5):

> "Some automated steps may be delegated more freely than others. These are steps whose errors expose a person to more human attention or to a benefit, displace no one else, and come to light quickly. Other steps need tighter control. These are steps whose errors withhold a benefit, impose a burden, expose a person to scrutiny or coercion, or are unlikely to be detected. Ranking people for a scarce good is allocation, not escalation."

**Value-setting** (a new sixth condition, or folded into "right target"):

> "The values a decision rule embodies are fixed by accountable humans through a legitimate process. These values are its target, its thresholds, and the priority it gives between groups and between kinds of error. They are recorded in inspectable form, not left implicit in a training label or a learned policy."

**Functional grade** (Section 2 or 5):

> "A deployment's grade is fixed by how its outputs settle outcomes in practice, not by its declared role. It is measured by deviation and override rates checked against ground truth, by review time, by how independent the reviewer's information is, and by the consequences of disagreeing. An advisory tool that is followed without independent judgement is treated as a default."

### 1.4 A derivation rubric and a candidate revised Table 1

**Rubric.** Assess each variable for each decision class:

1. **Severity:** how bad a wrong outcome is for the person affected.
2. **Harm before correction:** reversibility in practice, not in law.
3. **Direction:** the effect on the affected person's interests and liberty, and the displacement of third parties when goods are scarce.
4. **Error observability:** whether a wrong decision comes to light without deliberate study.
5. **Contestability:** whether the affected person can contest in time, and at what cost. For lethal force, contesting is impossible.
6. **Validity evidence:** prospective, against the right target, across subgroups, and compared with the realistic alternative.
7. **Need for speed:** whether a human decision on each case is feasible at the required tempo.
8. **Openness of the decision space:** closed and physically specified, or open-textured and dependent on a person's status.
9. **Power and vulnerability:** state coercion, a monopoly provider or a vulnerable population.
10. **Scale and correlation:** one model making many decisions, so that the same people are excluded everywhere.

**Candidate revised Table 1.** "Values call" marks rows where the ceiling turns mainly on a value judgement that the author must own.

| Decision class | Draft | Proposed | Main reason | Values call? |
|---|---|---|---|---|
| Medicine: escalate for urgent clinician review, where escalation adds review and displaces no one | 2 | 2 | Errors come to light quickly; a human settles the outcome; monitor the burden of alerts | Low |
| Medicine: rank or select patients for a scarce bed, programme or slot | Split across two rows | 1; or 3 only under a publicly adopted, inspectable allocation rule with individual appeal | When goods are scarce, escalation is allocation; values must be set in public | Yes |
| Medicine: deprioritise a patient or withhold scarce care | 1 | 1, with the functional-grade test | Severe; errors conceal themselves | Partly |
| Medicine: autonomous screening result (negative → routine rescreen; positive → referral) | Absent | Up to 3, only with all of: prospective validation against outcomes across subgroups; a short rescreen interval; an accountable developer or deployer; easy escalation; and a realistic comparator of no screening | Gains in access; errors partly come to light at rescreen | Yes |
| Medicine: choosing a treatment for an individual | 1 | 1 | The patient's values and consent | Low |
| Medicine: dosing within limits set by a clinician | 3 | 3 | Closed decision space; limits set by humans; a stop | Low |
| Medicine: protective stop (e.g. infusion occlusion) | 4 | 3, with a validated analysis of the safe state for each therapy | Limits are set by humans (the paper's own definition of grade 4); stopping is not always safe | Low |
| Medicine/economy: insurer denial of coverage or of prior authorisation | Absent | 1, with the functional-grade test and a minimum of individual review | Adverse; reports of bulk denial with nominal review | Low |
| Military: nominating or recommending targets that involve persons | 1 | 1, with the functional-grade test (time per decision, independent verification, logged dissent) | Reported risk of rubber-stamping | Low |
| Military: decision to use force against persons | Implicit | 1 at most: a human decides each engagement; grades 2–4 prohibited | Irreversible; cannot be contested; status depends on context | Yes (in line with the ICRC) |
| Military: defensive engagement of incoming munitions | 3 | 3, with safeguards against misclassification (the envelope excludes crewed aircraft where feasible; identification checks; a human on the loop; a stop) | History of fratricide | Low |
| Economy: favourable approvals | 2 | 2, but only where the approval cannot itself harm the person (not, e.g., high-cost credit to over-indebted applicants) | An approval can be adverse | Partly |
| Economy: refusals of consumer credit | 2 | Split. Low-severity products with ready alternatives: 2, with specific reasons and fast, cheap human review. Credit that gates housing or essential services: a human decision-maker of record, on request, before the refusal takes effect | Squares the asymmetry rule with scale | Yes |
| Economy: risk or fraud flags that trigger scrutiny | Absent | 1 for any consequence (suspension, investigation); a flag may only open a human review that starts from a presumption of good faith | An adverse escalation (Dutch benefits; Robodebt) | Partly |
| Economy: welfare denials, raising debts, sanctions | 1 | 1, with the burden of proof on the agency | Robodebt reversed the burden of proof | Low |
| Economy: suspension or termination of workers by algorithmic management | Absent | 1 | Severe; mirrors EU rules on platform work (verify) | Low |
| Markets: pre-committed public rules (halts, rate limits) | 3 | 3 (these are rules, not AI) | Public parameters; a kill switch | Low |
| Markets: discretionary AI interventions | 1 | Name the actor. Discretionary interventions by public authorities: 1. Private algorithmic trading: out of scope, or treated separately as systemic risk (pre-trade controls, a kill switch, firm liability) | Scope | Yes (scope) |

### 1.5 What to keep

- **The graded scale.** Especially the way grades 2 and 3 are distinguished by unit of control: the individual case versus the envelope.
- **The five conditions.** They map well onto existing legal duties.
- **The concrete controls in 6.4.** Logged overrides, seeded errors, and treating a near-zero override rate as a signal to investigate rather than as proof of accuracy.
- **The closing test.** Asking whether a system preserves someone "who can answer for the decision, and a route by which the person affected can be heard" is the paper's best sentence, and it should frame the revised thesis.
- **The plain, compact prose.** At about 3,250 words including references, the draft has room for the Tier A and B additions within a typical journal article. If space runs short, cut or split the market material first.

## 2. Convergence zones

Each zone names the lenses that reached it and says whether the agreement rests on shared evidence or a shared assumption. All five lenses came from one model, so even agreement based on evidence is not independent verification.

**CZ1. The asymmetry principle needs re-grounding.**

Lenses that reached it:
- *Analytical:* the escalation and deprioritisation rows can describe the same act, and the credit row contradicts the principle's own rule.
- *Critical:* each of the four "free" verbs (escalate, prioritise, approve, protect) has an adverse instance.
- *Systems:* denials and misses are the errors that hide themselves, and routing has side effects.

Basis: mainly evidence shared from the paper's own text, which is strong. That text includes the fraud flags in Section 1, Obermeyer's algorithm as a selection tool, and Table 1. Part of the agreement rests on a shared assumption that capacity is fixed. That holds for the paper's examples of scarce care but not everywhere. The epistemic re-grounding comes from Systems alone.

**CZ2. Table 1 contradicts the paper's own rules in specific rows.**

Lenses that reached it:
- *Analytical:* checked the rows against the paper's definitions and rules.
- *Pragmatic:* these are the first objections a referee will raise.
- *Creative:* the MCAS analogy bears on the protective-stop row.

Basis: textual evidence that needs no outside facts. This is the most reliable convergence in the analysis.

**CZ3. Grade 1 is not a safe fallback, and the de facto grade must be tested.**

Lenses that reached it:
- *Analytical:* the conditions stop at grade 2.
- *Critical:* the paper's view fails if review is not real at scale.
- *Systems:* loops of complacency and deskilling, and asymmetric blame.
- *Pragmatic:* safeguards for grade 1 are among the cheap fixes.

Basis: shared evidence, namely the literature on automation bias and the ironies of automation that the paper itself cites. To this is added the assumption that reviewers at grade 1 face the same pressures. All four lenses draw on this one body of evidence. So this is one finding seen four ways, not four confirmations.

**CZ4. "Authority" needs to be disambiguated or decomposed.**

Lenses that reached it:
- *Analytical:* normative authority versus operative control.
- *Critical:* the current definition begs the question.
- *Creative:* authority as a bundle of separable powers.

Basis: conceptual analysis resting on a shared assumption that the cut between normative and operative is the right one. This is weaker than CZ2. A referee with another theory of authority could resist it, though the paper's own grades already presuppose operative control.

**CZ5. The paper must engage the strongest opposing evidence and arguments.**

Lenses that reached it:
- *Critical:* the counterarguments are unanswered.
- *Analytical:* the references include no opposing views, and one study carries four claims.
- *Pragmatic:* this is the work that decides whether the paper becomes its strongest version.

Basis: the reference list, which is strong evidence, plus background knowledge of the literature, which was not checked in this session.

**CZ6. The core direction is robust.**

Lenses that reached it:
- *Analytical:* the defects lie in the operative content, not in the direction.
- *Critical:* the narrowed thesis survives the strongest objections.
- *Systems:* the feedback loops favour caution.
- *Pragmatic:* low ceilings are reversible.

Basis: partly shared evidence, from documented failures and from institutions taking similar positions. Partly a *shared value assumption*: that answerability and contestability matter independently of aggregate outcomes. Every lens holds that assumption, so this agreement is weaker than it looks, and it was not allowed to raise the confidence score.

**CZ7. Authority should be dynamic and revocable.**

Lenses that reached it:
- *Systems:* the de facto grade drifts upward.
- *Creative:* earned licences that can be revoked.
- *Pragmatic:* an update rule, and the value of reversibility.

Basis: the evidence on deskilling and complacency, plus regulatory analogies such as surveillance after products reach the market. Moderate.

## 3. Productive divergences

**D1. How much authority should demonstrated AI superiority buy?**

The disagreement:
- *Critical*, joined by *Pragmatic* on the cost of delay, presses for higher ceilings where AI alone outperforms the human filter and the realistic alternative is no decision-maker at all.
- *Systems* presses for low ceilings because of drift, errors that hide themselves, and correlated harm that trials do not measure.

Source:
- *Values:* aggregate welfare versus answerability and contestability.
- *Time horizon:* outcomes in the near term versus the long-run erosion of institutions and skills.
- *Weight given to evidence:* trial results versus systemic risks that are plausible but under-measured.

Judgement: productive. This is a real trade-off that the author must own. The paper should not claim to refute the lives-saved objection. It should state an update rule and defend the remaining cost as a values choice.

**D2. Scope: narrow or broad?**

The disagreement:
- *Analytical* and *Pragmatic* favour narrowing, because the market rows concern no particular person and length is limited.
- *Creative* favours a broader framework built on decision functions, bringing in insurer denials, algorithmic management of workers, and fraud flags.

Source: different views of what "strongest" means. One view prizes coherence and depth, the other generality.

Judgement: productive, and a choice for the author. Whichever way the author goes, the question's own wording ("economic allocation") supports reframing the economy section around allocation to persons.

**D3. Repair the asymmetry principle or replace it?**

The disagreement:
- *Analytical* and *Systems* would repair it, re-grounding it on effect, harm before correction, and observability.
- *Critical* regards the verb-based version as wrong as written.
- *Creative* would add a separate axis: prediction versus setting values.

Source: a conceptual dispute over whether "direction" is a basic property or a derived one.

Judgement: mostly resolvable, and so partly noise. The repaired principle is a derived heuristic, and the value-setting principle works on a different axis (who sets the values), so the paper can have both.

**D4. Human sign-off on each case, or institutional oversight?**

The disagreement:
- The draft relies on a human decision-maker of record for adverse decisions.
- *Systems* and *Critical* warn that sign-off on each case can become a moral crumple zone or a fig leaf.
- *Creative* proposes AI that audits human decisions and lowers the cost of contesting.

Source: the weight given to evidence about how well human oversight works.

Judgement: productive, because it changes what the safeguards are. Keep a human decision-maker of record for severe adverse decisions. Add three things:
- evaluation of the human–AI system as a whole before deployment;
- symmetric blame;
- support for contestation.

**D5. The military line under non-ideal conditions.**

The disagreement:
- *Analytical* and *Critical* support a principled line: no operative control over force against persons.
- *Pragmatic* notes that coordination may stall and that autonomy in software is hard to verify.

Source:
- *Values:* restraint versus security.
- *A factual dispute:* whether coordination is feasible, and how reliably machines can discriminate.

Judgement: productive. Keep the principled line as the normative claim, and add guidance for non-ideal conditions instead of weakening the line.

## 4. The five lens streams

Plain Markdown cannot show colour, so each lens is labelled by name, and the mind maps are indented outlines. Each lens was worked on its own, without drawing on another lens's conclusions.

### 4.1 Analytical lens

*Breaks the paper into its premises and rules, checks logic, consistency and evidential support, and counts where counting is possible.*

**Reasoning chain**

1. [Evidence: paper text] The argument runs as follows:
   - P1: authority requires an answerable agent and a route of challenge, and AI cannot supply these alone.
   - P2: the characteristic failures of automated decisions are structural.
   - C: therefore authority should be allocated in tiers.

   C does not follow from P1 and P2 alone. It needs an unstated premise: that decision classes differ enough in stakes, reversibility, speed and how visible their errors are to warrant different grades.
2. [Evidence: paper text] Section 2 defines authority to include answerability and an agent able to give reasons. On that definition, "AI cannot hold authority" is true by definition. Yet the grades measure something else: how far an output settles an outcome before a human acts. The paper slides between normative authority and operative control.
3. [Evidence: paper text] Measured against the paper's own rules, three of Table 1's twelve rows conflict:
   - Credit refusals at grade 2 conflict with "adverse steps therefore need a human decision-maker of record".
   - The protective stop at grade 4 conflicts with the paper's own definitions. Its limits are set by humans, which makes it grade 3.
   - Discretionary market interventions at grade 1, read with Rec. 6, leave the actor undefined, so the rule reaches private trading.

   Five more rows need qualification: escalation, deprioritisation, recommendations to engage, defensive engagement and favourable approvals. Escalation and deprioritisation, for instance, can describe the same act in a queue with fixed capacity. Four rows stand: treatment selection, dosing, welfare denials and pre-committed market rules. The thesis also conflicts with dosing at grade 3.
4. [Evidence: paper text] The five conditions apply only to grades 2 to 4. Yet grade 1 is the fallback in 6.4, and Section 2 concedes it suffers the same failures. So the paper's strongest protections sit where its conditions do not reach. Separately, the argument in 6.3 excludes only grade 4 for persons. It does not exclude the grade 3 that 3.2 and Rec. 5 forbid.
5. [Evidence: paper's reference list] None of the 13 references argues for AI decision authority. Obermeyer et al. carries four separate claims (3.1, 4.3, 6.1 and 6.2), and it does not support one of them: in 6.1 it is treated as a triage case, but it was not a triage system and was not assessed on lives saved. Section 5, the core contribution, cites nothing, and neither does the market analysis. The military case is hypothetical, while the other two domains use documented cases.
6. [Inference] The defects lie in the operative content: the definitions, the wording of the asymmetry principle and the specific ceilings. They do not lie in the direction. The most efficient repair is to separate normative authority from operative control and to derive the ceilings from explicit variables. That would also show which rows are value choices.

**Key concepts and weights**

- **Normative authority vs operative control, 0.9:** the equivocation decides what the thesis is claiming everywhere it appears.
- **Consistency of Table 1 with the paper's own rules, 0.85:** cheap to fix, damaging if left, and found without outside evidence.
- **The grade-1 gap, 0.8:** the strongest protections are the least guarded.
- **Derivable ceilings, 0.75:** turns assertion into argument and reveals the value choices.
- **Concentration of evidence, 0.55:** matters for defensibility, but less than the logical defects.

**Mind map**
```
ANALYTICAL
- Argument structure
  - P1 answerability + P2 structural failures -> C tiered allocation
    - missing premise: classes differ in stakes, reversibility, speed, error observability
  - "authority" defined with answerability built in
    - "AI cannot hold authority" becomes true by definition
    - grades actually measure operative control
- Consistency with own rules
  - thesis vs Table 1
    - dosing (3), credit refusal (2), protective stop (4) concern particular persons
  - rows in conflict: 3 of 12
    - credit refusal vs "adverse steps need a decision-maker of record"
    - protective stop vs own grade-4 definition
    - discretionary market row: actor undefined
  - rows needing qualification: 5 of 12
    - escalation and deprioritisation coincide under fixed capacity
  - rows that stand: 4 of 12
- Reach of the conditions
  - conditions stop at grade 2
    - grade 1 is the fallback (6.4) yet shares Section 4's failures
  - 6.3 excludes only grade 4 for persons
- Scope
  - market rows concern no particular person
    - outside the thesis's own test
- Evidence profile
  - 13 references, none defending AI authority
  - Obermeyer carries 4 claims; its use in 6.1 is unsupported
  - Section 5 and markets uncited; military case hypothetical
- Repair
  - split normative / operative
  - rubric of explicit variables -> derived ceilings
```

### 4.2 Creative lens

*Looks for alternatives and reframings that the paper's framing hides.*

**Reasoning chain**

1. [Inference] The paper treats authority as one quantity on one axis (grades 0 to 4). It is better seen as a bundle of separable powers, each of which can sit at a different grade:
   - setting the values;
   - predicting;
   - settling the case;
   - executing;
   - stopping;
   - hearing a challenge;
   - reversing;
   - paying for errors.

   Two of these come apart clearly: control by the operator, and the affected person's power to contest. Organising by decision function rather than by domain also brings in decision classes the draft omits, such as insurer denials, algorithmic management of workers and fraud flags.
2. [Inference] A cleaner dividing line than human versus machine is prediction versus value-setting. AI may predict, but humans with standing must fix the values publicly and in a form that can be inspected. The paper already accepts this for markets ("pre-committed public rules"). Generalised, it would also admit publicly adopted rules for allocating scarce medical goods that an algorithm executes, such as organ allocation (background; verify). It would still reject learned discretionary policies whose values are implicit in a label.
3. [Evidence: background; verify] Analogies put the paper's conditions to the test:
   - **Envelope protection.** In aviation, flight-envelope protection shows that bounded delegation can work.
   - **The 737 MAX.** The Boeing 737 MAX accidents of 2018 and 2019 show that automation meant to protect, with limits set by engineers, can kill. It did so when its authority was widened without full validation, when it relied on a single sensor, and when pilots were not told about it.
   - **Standing orders.** In medicine, standing orders show legitimacy coming from protocols that someone authored.
   - **Rules and discretion in law.** The debate over rules versus standards, and the doctrine against fettering discretion, already ask when mechanical rules may replace judgement.
4. [Inference] AI can be pointed at contestability rather than authority. It can power tools that help affected people understand and challenge decisions, which lowers the cost of contesting. It can also audit human decision-makers for inconsistency. That is the paper's own "the machine should audit the human" (6.2), made into a programme.
5. [Inference] Static ceilings can become earned licences that can be revoked. A system would move through staged evidence: shadow mode, then advice, then default, then delegation. It would be monitored against ground truth and face sunset and re-licensing, on the model of phased drug approval and post-market surveillance. The ceiling then caps what can be earned.
6. [Inference] Where volume makes both grade 1 and grade 2 unreal, the answer is to redesign the decision rather than pick a grade. Automated outputs would trigger only favourable action or human contact. The agency would presume good faith and carry the burden of proof.

**Key concepts and weights**

- **Prediction vs value-setting, 0.9:** a principled line across domains that explains Obermeyer, Robodebt and the public rules the paper accepts, all at once.
- **Authority as a bundle (at least two axes), 0.8:** dissolves several tensions in the table by letting different powers sit at different grades.
- **Analogies (envelope protection, MCAS, standing orders, rules vs standards), 0.6:** strong tests of the conditions, though the facts need checking.
- **Earned licences that can be revoked, 0.6:** makes the ceilings dynamic and testable, at a cost in length.
- **AI for contestability, 0.5:** constructive and new, but peripheral to whether AI should hold authority.

**Mind map**
```
CREATIVE
- Reframe "authority"
  - bundle: set values / predict / settle / execute / stop / hear / reverse / pay
    - allocate each power separately
    - two axes: operator control x subject contestation
  - organise by decision function, not domain
    - surfaces insurer denials, worker management, fraud flags
- Prediction vs value-setting
  - AI predicts; accountable humans fix values in public
    - Obermeyer: value hidden in the label
    - Robodebt: human rule, wrong target, reversed onus
    - public allocation rules (organ matching; verify)
- Analogies
  - envelope protection (works) vs MCAS (protective automation kills)
    - authority widened late; single sensor; pilots not told
  - standing orders; rules vs standards; fettering of discretion
- Constructive uses
  - AI that lowers the cost of contesting
  - AI that audits human decisions
  - earned, revocable licences with sunset
- Volume trap
  - outputs may only trigger favourable action or human contact
  - burden of proof on the agency
```

### 4.3 Critical lens

*Challenges assumptions and evidence, states the strongest counterargument, names the conditions under which the paper's view fails, and asks who bears the cost.*

**Reasoning chain**

1. [Inference] The first premise is that an AI system cannot supply answerability. Under the paper's own definition this is true by definition. On the facts it is contestable, because systems built on language models now give reasons, answer questions and can be corrected. The premise survives only if restated in two parts:
   - the reasons a system states cannot be verified as faithful to the real basis of its output (background; verify: research on unfaithful model explanations);
   - the system cannot bear sanctions, owe justification or make amends as a member of the community the decision answers to.
2. [Evidence: background; verify] The strongest counterargument rests on three findings:
   - an autonomous screening system already issues negative results, under FDA authorisation, without a clinician reviewing them;
   - experiments and a trial suggest that clinicians working with AI can do worse than the AI alone;
   - research on pretrial release simulates large reductions in detention with no rise in crime.

   If these hold, keeping a human decision-maker of record costs missed diagnoses and unnecessary detention. Patients and defendants bear that cost, and they often belong to the groups the paper aims to protect.
3. [Evidence: paper text] The replies in 6.1 and 6.2 are weak:
   - "Most of the triage benefit comes from escalation" is unsupported.
   - "The argument proves too much" mistakes an argument that weighs outcomes for a demand to abolish review.
   - The Obermeyer point about distribution supports auditing subgroups, not lowering a ceiling.
   - The variation in human error that 6.2 praises as heterogeneous is itself a fairness defect, because it is noise.
4. [Evidence: paper text] The asymmetry principle fails on the paper's own material. Each of its four "free" verbs has an adverse instance:
   - escalate: flagging families for fraud review (Section 1);
   - prioritise: target lists;
   - approve: credit that over-indebts the borrower;
   - protect: protective interlocks that misfire.

   When a good is scarce, escalating one person displaces another. The costs fall on three groups: people who are never flagged, people who are displaced, and people escalated to scrutiny rather than to care.
5. [Inference] The responsibility-gap argument in 4.1 is open to sceptics. They say that liability on the commander, the state or the developer fills the gap (background; verify). The paper's own remedy, named accountability before deployment, concedes their point. To hold its line on force against persons, the paper needs a further claim: accountability without control or foresight creates a moral crumple zone. In such a zone, a named human absorbs blame for harm they could not prevent.
6. [Inference] The paper's view fails under any of three conditions:
   - structured review cannot be made real at scale, so the grade-1 protections are nominal;
   - AI is demonstrably better on the right outcome, and the realistic alternative is no human decision at all;
   - "named accountability" is put into practice by scapegoating front-line staff.

   The narrowed thesis survives all three better than the draft's broad thesis. It holds that AI has no normative authority, that AI has no operative control over force against persons, and that severe adverse decisions get tested human review.

**Key concepts and weights**

- **The strongest counterargument (AI alone outperforms, and access matters), 0.85:** the paper leaves it unanswered, and it is decisive in some medical sub-cases.
- **Asymmetry fails on the paper's own examples, 0.85:** this is the paper's distinctive principle, and the paper's own text refutes it.
- **Faithfulness and sanctionability as the real basis of answerability, 0.7:** this keeps P1 standing even though language models now give reasons.
- **Moral crumple zone, 0.65:** explains why named accountability is not enough for lethal force.
- **Who bears the cost, 0.6:** delegating too much and too little both fall on the vulnerable, and the draft mainly sees one side.

**Mind map**
```
CRITICAL
- Premise 1 under pressure
  - definitional or contestable
    - LLMs give reasons and answer questions
    - restate: faithfulness + sanctionability + standing
- Strongest counterargument (verify)
  - autonomous screening already authorised
  - human+AI below AI alone in some tasks
  - pretrial-release predictions
    - cost of human authority falls on patients and defendants
- Weak replies (6.1, 6.2)
  - "most triage benefit comes from escalation": unsupported
  - "proves too much": mischaracterises
  - heterogeneous human bias: itself unfair (noise)
- Asymmetry on own examples
  - all four "free" verbs have adverse cases
    - escalate: fraud flags
    - prioritise: target lists
    - approve: over-indebting credit
    - protect: misfiring interlocks
  - scarcity: escalation = displacement
    - costs fall on the unflagged and the displaced
- Responsibility gap
  - sceptics: command / state / developer liability
  - crumple zone: blame without control
- Failure conditions
  - review not real at scale
  - better AI + no human alternative
  - accountability as scapegoating
```

### 4.4 Systems-thinking lens

*Maps feedback loops, delays, second-order effects and who is affected downstream.*

**Reasoning chain**

1. [Evidence: the paper's own sources, Bainbridge 1983; Parasuraman and Manzey 2010] Delegation sets off two reinforcing loops:
   - Reliability breeds complacency, so fewer errors are caught. Trust stays high and delegation grows.
   - Delegation removes practice, so skill decays. Overrides become less competent, so reliance grows.

   The "real override" condition therefore decays over time. The de facto grade drifts upward while the declared grade stays fixed. These loops support the paper's cautious direction, but they also mean a ceiling has to be enforced over time, not just declared.
2. [Inference; relies on the selective-labels problem, background; verify] Errors of denial conceal themselves. Nobody observes what would have happened to the denied person, so the system gets no corrective feedback and its bias persists. In escalation tools the hidden errors are the misses, the people never flagged. Obermeyer's under-identification was found by outside research, not by the system's own operation. This gives asymmetry a sturdier foundation than "direction", and it points audits at misses and denials.
3. [Inference; relies on work on algorithmic monoculture, background; verify] When one model, or a few, is used across institutions, errors become correlated: the same people are refused by every lender, employer or programme. Review case by case cannot see harm that builds up across institutions.
4. [Inference] Incentives shape oversight. Reviewers may be blamed for overrides that go wrong but not for agreeing with the system. Agreement then becomes the safe choice, which is automation bias produced by incentive. Naming a front-line person as accountable can create a moral crumple zone. "Reviewers should answer for accuracy, not agreement" (6.4) therefore needs blame on both sides, and liability for the institution as well as the individual.
5. [Inference; relies on evidence about sepsis alerts, background; verify] The asymmetry principle has second-order effects:
   - If easy cases are approved automatically, only likely denials reach humans. The reviewers' base rate then shifts toward denial.
   - Mass escalation produces alert fatigue, which dulls the response to true alarms.

   Once flags compete for attention, the claim that "a flag ... costs little if it is wrong" is false at the level of the system.
6. [Inference] Delays turn legal reversibility into practical irreversibility. Automated adverse decisions do harm while a challenge is pending (the Robodebt royal commission's account of the harm is relevant; verify the specifics). In markets and in war, interacting automated systems produce fast, emergent harms: a flash crash, and by analogy the "flash war" concern that Scharre discusses (verify). The paper's market and military sections therefore share a structure. They could share an argument about speed, coupling and stopping.

**Key concepts and weights**

- **Drift of the de facto grade, 0.85:** static ceilings cannot hold without monitoring and re-licensing.
- **Errors that conceal themselves, 0.8:** gives asymmetry an epistemic basis and tells audits where to look.
- **Harm before correction, 0.7:** redefines reversibility in terms that matter to affected people.
- **Incentive design and crumple zones, 0.7:** decides whether named accountability works.
- **Correlated error at scale, 0.6:** supplies the mechanism behind the paper's "uniform and scaled" claim.

**Mind map**
```
SYSTEMS
- Reinforcing loops
  - complacency loop
  - deskilling ratchet
    - de facto grade drifts up -> monitor, re-license
- Feedback blindness
  - denials never observed (selective labels)
    - bias persists; asymmetry grounded epistemically
  - misses in escalation tools
    - audit the unflagged (Obermeyer found from outside)
- Scale
  - monoculture -> correlated exclusion
  - volume -> review impossible -> redesign the decision
- Incentives
  - blame asymmetry -> agreement is safe
  - crumple zones -> front-line scapegoats
- Delays
  - harm during contestation (Robodebt)
  - fast coupled harms (markets, interacting weapons)
- Second-order effects of asymmetry
  - routing shifts reviewers' base rates
  - alert fatigue from mass escalation
```

### 4.5 Pragmatic lens

*Tests the feasibility, cost, time and reversibility of both the revision and the paper's own recommendations, and names next actions and implementation risks.*

**Reasoning chain**

1. [Evidence: word count of the draft] The draft runs to about 3,250 words including references.
2. [Assumption] The target venue allows a conventional article length, several thousand words longer than the draft. If so, the Tier A and Tier B revisions fit. Not every candidate source or domain extension will, so the author must choose what to cut or split.
3. [Inference] The cheapest, highest-value work is repairing internal consistency:
   - the thesis wording;
   - the credit row;
   - the protective-stop grade;
   - the asymmetry wording;
   - the grade-1 safeguards;
   - the argument in 6.3.

   This is quick, and it removes the objections a referee will raise first. The rubric and the re-derived table take moderate effort. Engaging opponents and broadening the evidence cost the most. They also decide whether the paper becomes the strongest defensible version or only a tidier one.
4. [Inference; relies on background facts, verify] Several recommendations in 7.1 need operational detail or face limits:
   - **Seeded errors** have a precedent in aviation-security screening. In live clinical queues, though, they raise problems of patient safety and consent, so use simulation or shadow cases there.
   - **Minimum review times** can create backlogs that themselves harm applicants.
   - **Publishing subgroup error rates** needs demographic data, which some jurisdictions restrict. The AI Act makes a limited allowance for bias detection.
   - **Rec. 6** cannot be implemented until it says which actors it binds.
5. [Inference] The military recommendations need a fallback for non-ideal conditions. I cannot confirm the current state of the CCW process, and autonomy in software is hard to verify. Even so, a single state can:
   - commit not to delegate force against persons;
   - run weapons reviews specific to autonomy;
   - constrain operational envelopes;
   - publish its policies.
6. [Inference] Reversibility favours the paper's direction. Low ceilings can be raised as evidence accrues. Entrenched delegation is slow and costly to unwind. But delay has a cost too, so the paper needs an explicit update rule. The largest risk to the paper's reception is a single wrong legal or clinical statement. Examples would be implying that the AI Act governs military uses, or that stopping any infusion is safe. Expert review and a citation pass are cheap insurance against this.

**Key concepts and weights**

- **Ordering revisions by cost and value, 0.85:** makes the plan executable.
- **Update rule for raising ceilings, 0.7:** answers the objection that delay has a cost, and makes the thesis testable.
- **Operational detail in the recommendations, 0.7:** decides whether practitioners can use them.
- **Military fallback for non-ideal conditions, 0.6:** needed for credibility with readers in defence.
- **Expert review, 0.6:** low cost, and guards against the largest risk to the paper's reputation.

**Mind map**
```
PRAGMATIC
- Revision triage
  - cheap, high value: consistency fixes
  - moderate: rubric, re-derived table
  - costly, decisive: opponents, evidence
- Feasibility of 7.1
  - seeded errors: aviation precedent; clinical limits
  - minimum review times: backlog risk
  - subgroup error rates: data restrictions
  - market rule: actor undefined
- Military, non-ideal
  - no binding instrument known (verify)
  - unilateral commitments; weapons reviews; envelopes; transparency
- Reversibility
  - low ceilings can rise; entrenchment is sticky
  - explicit update rule
- Reception risk
  - legal and clinical accuracy -> expert review
  - length -> cut or split markets
```

## 5. Transparency report

### 5.1 Framing and assumptions

**Question.** What revisions would make the draft the strongest defensible paper on whether AI should hold decision authority over people in medicine, military force and economic allocation? And how much confidence does its central recommendation deserve?

**Goal.** A revision plan the author can carry out, and a calibrated confidence score with what drives it.

**Constraints.**
- Only the draft and the skill were read.
- Facts from outside them come from background knowledge and were not checked in this session.
- No web search was used, because the skill does not direct source checking.
- The paper is normative. "Defensible" therefore means surviving the strongest objections from ethicists, lawyers, clinicians, weapons-law experts and economists. It does not mean empirical proof.

**Stakeholders.**
- The author.
- Referees and editors.
- Policymakers and practitioners who might adopt the framework.
- The people affected: patients, combatants and civilians, claimants, borrowers and workers.
- Deployers: hospitals, armed forces, agencies, lenders and insurers.
- Developers.

**What a good answer must do.**
- Find the flaws that matter most to defensibility.
- Give concrete revisions in order of priority.
- Separate logical fixes from value choices.
- Give a calibrated confidence score.
- Avoid overclaiming from knowledge that has not been verified.

**Clarifying question.** None was needed; the question was specific enough to proceed. Its main ambiguity, what counts as the "central recommendation", is settled by assumption (iii) below.

**Assumptions.**
- (i) The venue is a peer-reviewed journal in applied ethics or policy.
- (ii) "Strongest defensible" means most robust to expert objection while still taking a clear position. It does not mean most cautious.
- (iii) The central recommendation is as summarised in 1.1.
- (iv) The author wants to keep the paper's broad direction.
- (v) The background facts cited here are broadly right.
- (vi) Today is October 2026 and my knowledge stops earlier, so recent legal, treaty or regulatory developments may be missing.

### 5.2 Which lens drove which part of the recommendation

| Part of the recommendation | Lens or lenses that drove it |
|---|---|
| Restating the thesis; splitting normative authority from operative control | Analytical, with Critical's point that the current version begs the question |
| Repairing the asymmetry principle | Critical (counterexamples) and Systems (errors that conceal themselves; harm done before correction) |
| Fixing rows in Table 1 | Analytical (consistency), Critical (fraud flags; approvals that harm), Creative (MCAS as a case of protective automation) and Systems (alert fatigue) |
| New rows for insurer denials, worker suspension and fraud flags | Creative's reorganisation by function, with evidence from background knowledge |
| Functional-grade rule and safeguards at grade 1 | Analytical (the gap) and Systems (drift; incentives) |
| Value-setting condition, the bundle view, revocable licences and redesign for the volume trap | Creative |
| Realistic-comparator requirement, the opposing arguments and the evidence list | Critical, with Analytical |
| Order of work, feasibility of the recommendations, military guidance for non-ideal conditions, and expert review | Pragmatic |

The confidence score was pushed up by external convergence and by reversibility (Pragmatic and Systems). It was pushed down by internal inconsistency (Analytical), and by unaddressed counter-evidence and dependence on value choices (Critical).

### 5.3 What was weighted down or set aside, and why

- **Reporting on AI decision support for targeting in recent conflicts.** Kept only as a contested candidate, because the claims are disputed. The author would need primary sources and the official responses.
- **Broadening the paper to hiring, insurance pricing and platform work.** Weighted down for reasons of length. It is offered only as a scope option and a few table rows.
- **The metaphysics of machine agency and moral status.** Set aside. The argument does not need it once answerability rests on faithfulness and sanctionability.
- **Specific effect sizes from studies recalled from background knowledge.** Deliberately left out, to avoid stating figures that have not been checked.
- **Dignity-based objections to autonomous weapons as a standalone ground.** Noted as a values position, not used as the basis of the recommendation.
- **Detailed regulation of algorithmic trading.** Set aside beyond the point about scope.

### 5.4 Confidence score and drivers

The draft's central recommendation, as written, gets **58/100**.

**Up:**
- Independent institutions converge on the core direction.
- Conservative ceilings can be reversed.

**Down:**
- The thesis, the principles and the table are inconsistent with one another.
- The strongest counter-evidence is not addressed, and the core depends on a contested ranking of values.

The narrowed core deserves noticeably more confidence than 58, and the specific ceilings deserve less. Agreement between the lenses was not counted as evidence, because one model produced all five and they share a value assumption (CZ6).

### 5.5 What this reasoning cannot establish

- **A question of values:** whether answerability and contestability should outweigh aggregate gains in health or liberty.
- **Empirical questions:**
  - how AI performs in any particular deployment;
  - whether structured review works at scale;
  - how strong automation bias is in a given setting.
- **Legal accuracy:** whether the legal statements hold in a given jurisdiction today.
- **Background facts:** whether the facts and sources cited from background knowledge are accurate in detail.
- **Independence of the lenses:** whether their agreement tracks the truth rather than one model's priors.

### 5.6 What to verify with sources, data or experts

**The draft's own references**
- Check each of the draft's 13 references against the publisher's record: volume, issue, pages and DOI.
- Replace links to reviews and listings with links to the works themselves.

**Medicine**
- Obermeyer et al. (2019): how the algorithm was deployed (automatic enrolment or referral for consideration), and the reported effect of changing the label.
- The FDA's 2018 authorisation of autonomous diabetic-retinopathy screening, and its conditions.
- Any EU authorisation of autonomous reporting of normal chest X-rays.
- Claims that developers carry the liability.

**Empirical studies**
- Agarwal, Moehring, Rajpurkar and Salz (2023).
- Goh et al. (2024).
- Kleinberg et al. (2018).
- Wong et al. (2021).
- The MASAI trial.
- Bartlett et al. (2022).

**Military force**
- The 2003 Patriot fratricides.
- The 1988 Vincennes shoot-down.
- The 2021 UN Panel of Experts report on Libya.
- Reporting on AI decision support for targeting, and the official responses to it.

**Public administration and work**
- The Dutch childcare-benefits scandal and the SyRI judgment.
- Michigan's MiDAS.
- The UK's 2020 exam-grading algorithm.
- CJEU case C-634/21 (SCHUFA).
- Pintarich [2018] FCAFC 79.
- The EU Platform Work Directive's provision on human decisions to suspend or terminate accounts.

**Law, regulation and policy**
- EU AI Act Articles 2(3), 10(5), 14, 26, 27 and 86, and Annex III.
- GDPR Article 22.
- The CCW expert group's 2019 guiding principles.
- DoD Directive 3000.09 (2023).
- UN General Assembly resolution 78/241.
- The current status of the CCW process and of any treaty negotiations.

**Credit and markets**
- US adverse-action rules and CFPB Circular 2022-03.
- MiFID II Article 17.
- SEC Rule 15c3-5.
- The reports on Knight Capital and on the 2010 Flash Crash.

**Other cases and practices**
- How the organ-allocation match run works in practice.
- Threat-image projection in aviation security.
- The facts of MCAS.
- Reporting on bulk denial of insurance claims, and litigation over algorithmic denials of post-acute care.
- Any CMS guidance on algorithmic coverage decisions.

**Clinical facts**
- When stopping an infusion is unsafe. Ask a clinical pharmacist or a clinical-safety engineer.

**Literature suggested for engagement**
- Sheridan and Verplank (1978).
- Parasuraman, Sheridan and Wickens (2000).
- Arkin (2009).
- Schmitt and Thurnher (2013).
- Himmelreich (2019).
- Tigard (2021).
- Elish (2019).
- Green (2022).
- Citron (2008).
- Crootof, Kaminski and Price (2023).
- Kleinberg and Raghavan (2021).
- Bommasani et al. (2022).
- Turpin et al. (2023).
- Cen and Raghavan.
- Ramji-Nogales, Schoenholtz and Schrag (2007).
- Kahneman, Sibony and Sunstein (2021).

### 5.7 What the author still has to decide

1. **The residual trade-off.** Will the paper accept, and say openly, that its ceilings may cost gains in outcomes for some decision classes? And how strong must the evidence be before a ceiling rises?
2. **Scope.** Should the paper keep markets (and if so, as what), cut them, or split into two papers? Should it widen from AI to automated decision systems?
3. **Autonomous screening.** Accept that it belongs at grade 1, or adopt a conditional exception.
4. **Credit refusals.** Split them by severity, lower the ceiling, or justify grade 2 by the difference between state and private power.
5. **The scale.** Should it become two-dimensional (operator control × contestation)? That would be more accurate, but more complex.
6. **Contested military reporting.** Whether to use it, and if so how.
7. **Length.** Which revisions fit in the space available.

These choices are the author's. The analysis supports them but does not make them.

### 5.8 Process notes

- **Searches:** no web search was used.
- **Files read:** only the skill file and the draft.
- **Colour:** plain Markdown cannot show colour, so each lens is labelled by name.
- **Diagrams:** no Mermaid diagram was used, because none was requested and it is not known how this output will be rendered.
