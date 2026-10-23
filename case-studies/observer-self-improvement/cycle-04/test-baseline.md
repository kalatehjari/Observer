Model ID: claude-opus-5-5

# Observer analysis: revising "Graded Authority for AI over Sensitive Human Matters", and how far to trust its central recommendation

**Question.** How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

**Method.** Observer multi-lens reasoning (skill v1.0), at the full depth the skill gives for high-stakes questions: five independent lenses, a Higher-Order Observer (HOO) synthesis and a transparency report. The only inputs were the skill and the paper. No web search was used, because the skill does not call for source retrieval. Facts were checked against the model's own knowledge (training cutoff June 2026), and Section 5.6 lists what still needs checking.

**Not professional advice.** The question touches medicine, the law of armed conflict, administrative and credit law, and financial regulation. Nothing here is medical, legal, military or financial advice. Section 5.8 names the professionals who should review the revised tiers.

---

## 1. Recommendation and confidence

### 1.1 Recommendation in brief

**Keep the paper's direction and rebuild how it is stated.** The direction is defensible. Answerable humans and institutions keep authority over adverse, discretionary determinations about particular persons. No system selects and engages persons with force. Narrow, bounded and revocable delegation is allowed elsewhere on stated conditions.

The way the paper states it is not yet defensible, for four reasons:

- The thesis rests on an undefined word ("final"). Read naturally, it conflicts with the paper's own Table 1.
- The grade scale misclassifies its one exception, and it has a gap exactly where the paper's military scenario sits.
- The asymmetry premise treats some harmful decisions as favourable.
- The grade-1 default for high-volume adverse decisions runs into the same rubber-stamp problem that the paper uses to reject grade 2.

Section 1.3 orders ten revisions by how much defensibility each one buys for the effort. Items 1 to 5 fix the paper's own logic, and each can be checked against its text. Items 6 to 10 add evidence, objections, law and institutional detail. One choice cannot be settled by analysis, and it belongs to the author. For high-volume adverse decisions, the paper must choose between a grade-1 default with funded review and a contestability-first route licensed by statute (Section 1.6).

### 1.2 Confidence score: 62 / 100

The score is my confidence that the paper's central recommendation, read as the paper intends it, is the right direction and can be defended against the strongest objections. I read the recommendation as three parts: no AI authority over adverse determinations about particular persons, no delegated force against persons, and bounded delegation on the five conditions. Within that:

- The ban on delegated force against persons and the principle of bounded, revocable delegation deserve more confidence than 62.
- The grade-1 default for high-volume adverse decisions and the asymmetry premise deserve less.
- The literal wording of the thesis deserves less still.

The four factors that moved the score:

1. **Up: external support for the direction.** The direction is backed by sources outside this analysis, and the paper cites them accurately. They include the ICRC's 2021 position, Article 14 of the EU AI Act, the human-factors literature on complacency and deskilling, and documented failures (Obermeyer et al., 2019; the Robodebt royal commission).
2. **Down: internal inconsistency.** As written, the recommendation cannot be applied consistently. The thesis conflicts with Table 1, the protective stop sits in the wrong grade, the scale has a gap, grade 1 becomes nominal at high volume, and escalation is also deprioritisation (Section 1.3, items 1 to 5).
3. **Down: thin and one-sided evidence.** The paper has few cases. None of them involves current deep-learning or generative systems, and Robodebt was not machine learning at all. The paper gives no comparative evidence that human final decisions beat well-designed automated first instances with review. It does not engage documented successes or the strongest critical literature. By its own account, the asymmetry premise is unestablished.
4. **Down: an unresolved values divergence.** How much accuracy, speed or access the paper will trade for individualised human consideration is a values choice. The ceilings for the economy rows depend on that choice, and the paper does not state its answer.

I weighed reversibility, and it roughly balances. A cautious default is easier to correct where errors kill, exclude or impoverish. Delay and refusal also cause harms that cannot be undone, such as care that comes too late and services that are withheld, so reversibility did not move the score much. The five lenses agreed on keeping the direction, but that agreement did not raise the score. All five come from the same model, so they are not independent checks.

The score answers the question as asked, and the revision plan has no separate score. Items 1 to 5 fix inconsistencies that can be checked against the paper's text, so they carry less uncertainty than the thesis does. The re-derived ceilings in Section 1.5 carry about as much uncertainty as the paper's own.

### 1.3 Revision plan, in priority order

#### Fixes to the paper's own logic (items 1 to 5)

**1. Separate legitimate authority from delegated decisional power (Sections 1 and 2).**

*Problem.* Section 2 says that authority presupposes "an agent who can give reasons, be questioned and be corrected". It then calls grades 2 to 4 authority held by systems. Read literally, the first step of the argument ("Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone") is true by definition and does no work. Critics will say the conclusion was built into the definition.

*Revision.* State that legitimate authority always rests with answerable humans and institutions, and that the grades measure how much decisional power those humans and institutions delegate to a system. The question then becomes open and substantive: when may an answerable institution delegate, how much, and on what conditions? The five conditions become the paper's answer to that question, not consequences of a definition.

**2. Restate the thesis in grade terms that match Table 1.**

*Problem.* "No final decision authority over determinations about particular persons" relies on a word the paper never defines. Read naturally, a dose given at grade 3 and a protective stop at "grade 4" are final determinations about a person's treatment, so the thesis seems to contradict Table 1. The thesis also understates the paper's real position. For deprioritisation, credit refusals, welfare denials and force against persons, Table 1 bars grades 2 and 3 as well, not only "final" authority.

*Revision.* Adopt the restated thesis in Section 1.4, or the author's own version of it. Either way, state it in grades and give the sorting criteria that generate Table 1.

**3. Repair the grade scale.**

- *The exception is not grade 4.* The paper defines grade 4 as a system that "acts with no timely human veto, and its limits are absent or set by the system itself". The protective stop moves the system to a safe state that humans have defined, and a clinician can countermand it at once. By the paper's own definitions, that is grade 3. Reclassify the protective stop, delete "with one exception", and say plainly that grade 4 is never licensed for decisions about persons. The cleaner claim is also the stronger one.
- *The gap at the military scenario.* Some systems have limits that humans set but cannot be halted in time, such as fire-and-forget munitions and systems working under jammed communications. Such a system is not grade 3, which requires that humans "can halt it". It is not grade 4 either, because its limits are neither absent nor self-set. The paper's own military scenario sits in this gap, because the commander's authorisation "is the last human act before the consequences". Define grade 4 by the absence of a timely human halt or veto, whoever set the limits. Alternatively, make the scale two-dimensional: how outcomes are controlled, and who sets and can enforce the limits. Either change sharpens the military argument, because the conditions offered to justify autonomy (degraded communications and speed) are the same conditions that remove the halt and push a system to grade 4.
- *Grade 2 for high-volume approvals.* Table 1 licenses favourable approvals at grade 2 under "audit". By the paper's own test, a sampled audit controls the envelope, which makes it grade 3. A genuine grade 2 would need a per-case override window, and high-volume approval cannot support one. The paper should say which it means.

**4. Assign grades by de facto control, and apply the core conditions from grade 1.**

*Problem.* Section 6.4 rejects grade 2 for credit refusals because, at high volume, "meaningful review is impossible". The same volume turns a grade-1 "decision-maker of record" into a formality, which is the failure that section describes. Section 2 concedes that advice shapes what humans do, yet the five conditions apply only from grade 2. That invites grade laundering: a deployer can call a system advisory to escape the tests. Generative AI makes this worse, because an AI-drafted denial signed by a caseworker is formally grade 1.

*Revision.* Define a deployment's effective grade by measured control:

- time per case;
- override rates, and whether the overrides were right;
- whether reviewers see information beyond the system's output.

A process that is nominally grade 1 but fails these measures is treated as grade 2 or higher. It must then meet that grade's conditions or be redesigned. For decisions about persons, apply right target and real override from grade 1. This also turns the paper's "authority creep" (Section 4.6) from a worry into a quantity that can be measured.

**5. Replace the favourable/adverse split with an interest-and-rivalry test, and allow escalation only when it is additive.**

*Problems.*

- Under scarcity, favouring one person deprioritises another. The paper's lead medical case is a harm of exactly this kind. The algorithm selected patients for a scarce, favourable programme, and the harm lay in the patients it failed to select.
- The paper's permission-bundle rule gives a decision class the grade of its most consequential permission. A ranking of patients for scarce beds therefore carries the "deprioritise" permission and sits at grade 1. The escalation carve-out should be worded so that it cannot be read to cover rankings.
- Section 6.5 lists "a borrower who takes on debt they cannot carry" among the harms to "people other than the applicant". The borrower is ordinarily the applicant. An unaffordable approval is an adverse outcome for the person approved, so "favourable" cannot simply mean "what was requested".
- In welfare, a wrongful approval later becomes an overpayment debt. That debt is an adverse decision of exactly the Robodebt kind.

*Revision.*

- Define "favourable" by the affected person's interests, not by what they requested.
- Treat any decision that consumes a scarce resource others also need as an allocation decision, with a ceiling of 1.
- License escalation above grade 1 only when it is additive. Additive means that no one's access falls below what the existing pathway already gives them, and that false negatives (the people the system does not flag) are audited by subgroup.
- Restate the asymmetry premise on this basis, and keep the paper's honest admission that its empirical condition has not been tested.

#### Evidence, objections, law and institutional detail (items 6 to 10)

**6. Re-ground the military ceiling and widen the military analysis.**

*Problem.* Section 4.2 supports the lethal ceiling with contestability: "the person judged cannot contest the decision at all". That is equally true when a human soldier fires, so it cannot separate human decisions from machine ones. Section 4.1 leans on Sparrow's responsibility gap. But the paper's own remedy, named accountability assigned before deployment, is close to the replies critics have given Sparrow (for example Simpson and Müller, 2016), which weakens Sparrow as support.

*Revision.*

- Rest the ceiling for persons on grounds that do separate human from machine decisions:
  - the capacity to recognise reasons the target cannot voice (surrender, being hors de combat, civilian status) in adversarial and deceptive conditions;
  - the contextual judgements that distinction, proportionality and precaution require;
  - dignity arguments against being killed by a process that cannot register the value of the life it ends (for example Heyns, 2013; Asaro, 2012);
  - the risks of escalation and proliferation.

  Contestability can stay in a revised form: because the target cannot contest, the decision-maker must be able to register the reasons the target would give.
- Address crewed objects. A manned aircraft or vehicle is an object with persons inside it, and Table 1's line between persons and objects does not say where such targets fall. Add a decision class for them with a ceiling of 1.
- Make the grade-3 ceiling for defensive systems conditional on lessons from documented failures. In the 2003 Patriot fratricides, a missile-defence system engaged allied aircraft. The 1988 Vincennes shoot-down of a civilian airliner was a failure of human–machine teaming. The conditions should be:
  - reliable separation of munitions from crewed tracks;
  - an envelope that excludes crewed civil and friendly traffic or escalates it to a human;
  - a halt that still works when communications are degraded.
- Engage the strongest argument for autonomy: constrained autonomous systems might comply with the law of armed conflict better than stressed humans do (Arkin, 2009). Acknowledge too that human crews have misidentified civilian aircraft.
- State positions accurately and with dates:
  - the ICRC (2021);
  - US DoD Directive 3000.09, which requires "appropriate levels of human judgment over the use of force" and does not ban such systems;
  - the CCW Group of Governmental Experts, and UN General Assembly resolutions since 2023;
  - weapons reviews under Article 36 of Additional Protocol I, the existing home for the "safety authority" certification in Table 2.

**7. Engage the strongest objections and counterexamples, and add successes.**

- *Human oversight as a flawed remedy.* Green (2022) argues that policies requiring human oversight of government algorithms give those algorithms false legitimacy. Studies of people using risk scores have found selective and sometimes racially disparate departures from the scores (Green and Chen, 2019, an experiment; Albright, 2019, Kentucky judges). Section 6.4 deals only with complacency, not with biased deviation. The reply should make three points:
  - the case for grade 1 rests on answerability and contestability, not on accuracy;
  - the paper accepts a stated accuracy cost in return for them;
  - stated evidence would change that trade.
- *Comparative performance.* Kleinberg et al. (2018) is the standard evidence that an algorithm can outperform human decision-makers in a high-stakes setting. The setting is bail, outside the paper's three domains, but the evidence bears directly on Section 6.2.
- *Real counterexamples.*
  - In 2018 the FDA authorised autonomous screening for diabetic retinopathy (IDx-DR), which gives a screening result without a clinician interpreting it. That is a determination about a person, and it is absent from Table 1.
  - Hybrid closed-loop insulin systems already dose within set limits, which supports the dosing row.
  - Exchange circuit breakers support the row for pre-committed market rules.

  Including successes shows that the framework licenses what works, not only that it forbids what failed.
- *Escalation is not cheap.* An external validation of a widely deployed sepsis prediction model found much weaker performance than had been reported (Wong et al., 2021). This supports the right-target test, and it undercuts Section 5's claim that a wrong flag "costs little".
- *Moral crumple zones.* Named responsibility can turn operators who lack real control into a liability sink (Elish, 2019). Require that the named person's responsibility match their control. That is the tracing condition of Santoni de Sio and van den Hoven, which the paper already cites.
- *Section 6.2 concedes too little.* Uniform bias is also easier to detect and correct than scattered human bias. Obermeyer and colleagues reported that changing the label removed much of the disparity. The right conclusion is that the five conditions should apply to human-only processes too, so that the comparison is between whole arrangements and not "AI versus humans". This symmetry also protects the paper against the charge of status-quo bias.

**8. Fit the evidence to the claims and bring it up to date.**

- *Say what the account covers.* Say whether the account is about AI or about automated decision-making in general. Robodebt was rule-based data matching with income averaging, not machine learning. The strongest version says that the five conditions apply to every automated decision system, and that learned systems add risks of their own:
  - opaque proxies;
  - unpredictable behaviour;
  - drift at retraining;
  - label loops;
  - now, generated text that frames a human's decision.
- *Add welfare cases closer to the paper's AI claims.* The Dutch childcare benefits scandal involved a risk-classification model. In 2020 the District Court of The Hague ruled against the SyRI welfare-fraud system.
- *Support the label loop.* Cite the evidence of runaway feedback in predictive policing (Lum and Isaac, 2016; Ensign et al., 2018). The label loop in Section 4.6 then rests on a mechanism documented in an adjacent domain, not on inference alone.
- *Sharpen the right-target test.* Add the selective-labels problem (Lakkaraju et al., 2017) and the impossibility results for fairness criteria (Kleinberg, Mullainathan and Raghavan, 2017; Chouldechova, 2017). Outcomes for refused applicants are often never observed, so "validated against the outcome the decision is for" needs a stated method.
- *Add a matrix of cases against conditions.* It should show which conditions each case violated. Robodebt, for example, failed right target, because averaged annual income stood in for fortnightly income. It failed contestability too, because the burden of proof was reversed. The matrix shows that the conditions explain the failures, not merely list virtues.

**9. Correct factual and legal claims, and widen the jurisdictions.**

- *Credit.* The claim that "the model's reasons are often unavailable to the applicant" is unsupported and needs qualifying. US adverse-action rules (ECOA and Regulation B, with CFPB Circular 2022-03 on complex models) require lenders to give specific reasons. GDPR Article 22, as the CJEU read it in *SCHUFA* (C-634/21, 2023), reaches credit scores that lenders rely on heavily.
- *Markets.* The claim that no one can answer for harm from a learned trading policy is too strong, because firms answer for their algorithms. Examples are the SEC's action against Knight Capital under the Market Access Rule after its 2012 trading loss, and the kill-functionality duties under MiFID II Article 17. The real gap is narrower and more interesting. It lies in offences that require intent, such as manipulation, and in tacit collusion that pricing algorithms can learn (Calvano et al., 2020). Also say whether "discretionary AI market interventions" means interventions by public authorities or trading by private firms. As written, Recommendation 6 could be read as a ban on autonomous private trading, which the paper does not argue for.
- *AI Act.* Cite the Official Journal or EUR-Lex rather than a third-party site. Note that Article 2(3) excludes military, defence and national-security uses, so the Act bears only on the medicine and economy rows. Map Table 2 onto these articles:
  - Article 14, human oversight;
  - Article 26, under which deployers must give oversight to people with the competence, training and authority to exercise it;
  - Article 27, fundamental-rights impact assessment;
  - Article 86, the right to an explanation.

  Give application dates with an "as of" note.
- *Housekeeping.* Table 2 appears before Table 1. Section 8 names the EU and Australia as the jurisdictions discussed, but the Obermeyer case comes from US health systems.

**10. Make the institutional machinery credible, and state when the ceilings would change.**

- *Independent certification.* Answerability is certified by the deploying organisation's own governing body, so Robodebt's department would have certified itself. Require external certification, or at least an independent legal review of the decision rule's lawful basis.
- *Two-sided triggers.* An override rate near zero and a very high one (alert fatigue) are both warning signs. Measure whether overrides are right, not only how often they happen. Seeded errors must be synthetic and must never reach real people. Threat-image projection in airport screening is a working precedent.
- *Incentives to measure.* If measuring a trigger leads to a downgrade, deployers have a reason not to measure. Require mandatory reporting and independent access to logs.
- *Envelopes.* Borrow the "operational design domain" from automated-driving standards (SAE J3016). It defines an envelope by the conditions the system works in, not only by its outputs, and the system stops when it leaves that domain.
- *Thresholds.* Leaving thresholds to certifiers moves the value judgements; it does not remove them. The claim that certifiers can apply the tests "without further philosophical work" therefore overstates. Say who should set thresholds, and on what principles.
- *Revision conditions.* Turn ceilings into default ceilings, and state the evidence that would raise or lower each one.
  - To raise a ceiling: prospective, independent, subgroup-level evidence of better outcomes, with contestability preserved and a sunset date for re-review.
  - To lower a ceiling: any trigger.

  The paper then updates on new evidence instead of breaking on it.

### 1.4 A restated thesis (drafting aid)

> Legitimate authority over decisions about persons rests with answerable humans and institutions. In medicine, the use of force and economic administration, they should not delegate to an AI system any adverse or discretionary determination about a particular person at grade 2 or above, judged by de facto control. The one exception is where a statute licenses an automated first instance with prompt, *de novo* human review and the burden of proof on the decision-maker. No system should select and engage persons with force. Humans and institutions may delegate functions that meet five conditions:
>
> - the function is narrow and can be specified in advance;
> - it serves the affected person's interests or is directed at objects;
> - it takes no scarce resource from anyone else;
> - its errors can be caught and corrected faster than the harm unfolds;
> - a named institution answers for it in proportion to its control.
>
> No decision about a person is ever licensed at grade 4.

Table 1 should be derived from these five sorting features (narrow, serving the person's interests or aimed at objects, taking nothing scarce from others, correctable in time, answerable in proportion to control). Every ceiling can then be checked against a stated reason, instead of standing as a bare design judgement.

### 1.5 Table 1 re-derived from those features (a sketch for the author to test)

| Decision class | Paper's ceiling | Suggested ceiling | Reason |
|---|---|---|---|
| Medicine: flag a case for urgent review | 2 | 2 if additive; otherwise 1 | A ranking of scarce capacity also deprioritises |
| Medicine: deprioritise or withhold scarce care | 1 | 1 | Adverse, and takes a scarce resource from others |
| Medicine: treatment selection | 1 | 1 | Discretionary and value-laden |
| Medicine: dosing within clinician-set limits | 3 | 3 | Narrow, serves the patient, envelope set by a clinician |
| Medicine: protective stop to a defined safe state | 4 | 3 | Human-set limits and an immediate countermand make it grade 3 by the paper's definitions |
| Medicine: autonomous screening where a negative result returns the person to routine rescreening (new) | none | 3 if additive and prospectively validated by subgroup; otherwise 1 | The strongest real counterexample, and a test of additivity |
| Military: engagement of persons | 1 | 1 | Recognising surrender and civilian status, legal judgement, dignity |
| Military: engagement of crewed platforms (new) | none | 1 | Persons inside objects |
| Military: defensive engagement of incoming munitions | 3 | 3, only with crewed-track separation and a halt that works when communications are degraded | Lessons of the 2003 Patriot fratricides |
| Economy: favourable approvals | 2 | 3 for low-cost approvals that take nothing scarce from others and cannot harm the applicant; 1 where they take a scarce resource or put affordability at risk | Interest-and-rivalry test; a sampled audit controls the envelope |
| Economy: credit refusals | 1 | 1 judged by de facto control, or 2 under statute (see 1.6) | A values choice |
| Economy: welfare denials, debts and sanctions | 1 | 1 judged by de facto control, with the burden of proof on the state | Robodebt |
| Economy: pre-committed market rules (halts, rate limits) | 3 | 3 | Blunt, collective and reversible |
| Economy: discretionary AI market interventions | 1 | Public authorities: 1. Private trading: out of scope, or 3 under existing kill-switch and market-access rules | The row is ambiguous as written |
| Any domain: a decision drafted by AI and signed by a human (new) | none | Treat as 2 unless de facto review is shown | Prevents grade laundering |

### 1.6 The choice the author has to make

For high-volume adverse decisions such as credit refusals and welfare denials, the author should choose one of two routes and defend it as a values choice.

- **Keep the grade-1 default** if two things hold: the paper takes the dignity premise that individualised human consideration is owed *before* an adverse effect, and review capacity can be funded. Then add a capacity requirement, judged by de facto control, so that grade 1 is real. Also say what happens when that requirement cannot be met: lower volume, more reviewers, or no deployment.
- **Otherwise, make the route licensed by statute the main one.** That route has five parts:
  - an automated first instance (grade 2);
  - the decision's effect suspended pending review wherever the harm is reversible;
  - prompt *de novo* human review on request, with the burden of proof on the decision-maker;
  - proactive review of samples, so that the people least able to contest are not left out;
  - contestation outcomes published by subgroup.

Whichever route the author takes, the paper should not present the choice as following from the definition of authority.

### 1.7 What would change this recommendation

- *Evidence on the economy rows.* Suppose independent, prospective evidence showed that real grade-1 processes in high-volume settings produce more wrongful adverse decisions than contestability-first processes with proactive review, and that those wrongful decisions fall mostly on disadvantaged groups. Then the grade-1 default for the economy rows should give way. My confidence in the paper as written would fall, and my confidence in a revised paper that took the second route in 1.6 would rise.
- *Evidence on machine recognition.* Suppose machines were verified to recognise surrender and civilian status better than humans under adversarial conditions. Then the empirical support for the military ceiling would weaken, and the ceiling would rest on its normative grounds alone. Nothing in the evidence I know of points that way.
- *Failed checks.* If the facts flagged in Section 5.6 do not check out, the items that depend on them change. The main ones are the way Obermeyer's programme selected patients, the history of Robodebt, the legal mapping, and the status in late 2026 of the AI Act's application dates and of the autonomous-weapons negotiations.
- *Narrower scope.* If the author narrows the paper's scope, for example to public-sector decisions only, several of the economy revisions fall away, and confidence in the narrowed thesis would rise.

### 1.8 Top next steps

1. Fix the logic first (items 1 to 5). This is cheap and can be checked against the text, and it closes most of the openings a hostile reviewer would use.
2. Make the choice in Section 1.6 and write its defence, including the cost in accuracy or access that the paper accepts.
3. Verify the items in Section 5.6. Then add the objections, counterexamples and evidence (items 6 to 8).
4. Map Table 2 onto existing law in an appendix, with "as of" dates (item 9), and add the institutional fixes (item 10).
5. Have the revised tiers tested by the reviewers listed in Section 5.8, as the paper's own Section 8 already proposes.

---

## 2. Convergence zones

Each zone below names the lenses that reached it on their own and says whether their agreement rests on shared evidence or on a shared assumption.

**C1. The direction holds, but the way the paper states it does not.** Reached by the Analytical, Critical and Pragmatic lenses.

- The Analytical lens found the defects by checking the grade definitions against Table 1.
- The Critical lens found that the strongest objections bite on the high-volume economy rows, not on the ban on force against persons or on bounded delegation.
- The Pragmatic lens found that certifiers cannot apply decision classes that the scale misclassifies.

*Basis: shared evidence.* The evidence is the paper's own text and tables, which anyone can check. This is the strongest convergence.

**C2. Grades must be judged by de facto control, and the core conditions must apply from grade 1.** Reached by four lenses:

- Analytical: Section 6.4 conflicts with Table 1.
- Systems: authority creep and grade laundering are feedback effects.
- Critical: review becomes nominal, and reviewers deviate in biased ways.
- Pragmatic: humans sign decisions that AI has drafted.

*Basis: partly shared evidence, partly a shared assumption.* The evidence is the paper's own concession that advice shapes decisions, and the human-factors literature it cites. The assumption is that review quality falls as volume rises in these particular settings. That is plausible and supported in general, but it has not been measured here, so this zone is weaker than C1.

**C3. "Favourable" decisions and escalation are neither cheap nor one-sided.** Reached by four lenses:

- Analytical: the permission-bundle rule puts rankings at grade 1.
- Critical: the paper misplaces the borrower, and unaffordable credit harms the person approved.
- Systems: escalation competes for a fixed queue, and wrongful approvals turn into debts.
- Creative: additivity is the remedy.

*Basis: shared evidence.* The evidence is the paper's own description of the Obermeyer programme as scarce and of its harm as under-identification, together with the logic of a fixed-capacity queue. This zone is strong.

**C4. The evidence base must be widened, updated and balanced.** Reached by the Analytical, Critical, Creative and Pragmatic lenses.

*Basis: shared evidence for the gaps, a shared assumption for the remedy.* Anyone can read the reference list and see the gaps. The claim that filling them will make the paper stronger is a shared assumption about what informed reviewers will demand. It is a reasonable assumption, but it is an assumption.

**C5. The institutional machinery needs independence and two-sided, measured triggers.** Reached by the Systems, Pragmatic and Critical lenses.

*Basis: a shared inference.* The inference draws on Robodebt, whose department would have certified itself, and on reasoning about incentives. This zone is moderate.

## 3. Productive divergences

**D1. High-volume adverse decisions: grade 1 with funded review, or contestability first?**

- *The disagreement.* The Creative, Critical and Pragmatic lenses see the contestability-first route as at least as protective as a nominal grade 1, and far more feasible. That route is an automated first instance, review that is suspensive and *de novo*, and the burden on the decision-maker. The Systems lens resists. Any design that relies on people contesting fails those least able to contest, and low contest rates then look like accuracy, as happened with Robodebt and in the cases Eubanks documents.
- *Source.* Partly values: individualised consideration before an adverse effect, set against timely and consistent access with review afterwards. Partly a factual dispute: whether grade 1 at scale is ever real.
- *Judgement: productive.* Measurement can narrow the factual part, but the values part is the author's to own (Section 1.6). The Systems objection is the reason the second route in 1.6 includes proactive review of samples.

**D2. Can outcome evidence raise a ceiling?**

- *The disagreement.* The Analytical and Creative lenses say yes, if the paper states what evidence is required, so that authority is earned. The Critical lens warns that outcome evidence often comes from vendors and fails external validation, as the sepsis model did. The Systems lens warns that short-run gains can reverse through deskilling and drift.
- *Source.* The weight given to evidence, and the time horizon.
- *Judgement: productive, and mostly reconcilable.* The paper can require independent, prospective evidence at subgroup level, together with a sunset date and monitoring after deployment. What remains is how high the bar should be, and that is a values choice about risk.

**D3. Do markets belong in the paper?**

- *The disagreement.* The Pragmatic lens would narrow private trading or drop it. Trading involves no decision about a particular person, and kill-switch and market-access rules already govern it. The Systems lens would keep collective harms, because that is where the gap in answerability is most real: manipulation and collusion can arise without any human intending them.
- *Source.* A question of scope and values: what counts as a sensitive human matter.
- *Judgement: productive, and the author's scope decision can resolve it.* The middle course is a short section on collective harms. It would separate public authorities from private firms and correct the claim about answerability.

**D4. Grade 3 for defensive systems.**

- *The disagreement.* The Critical lens reads the fratricide record as a reason for tighter limits wherever crewed aircraft may be present. The Pragmatic lens notes that defence against saturation attacks needs machine speed, and that states will ignore a framework whose ceiling they cannot accept.
- *Source.* Partly a factual question: how reliably a system can tell munitions from crewed aircraft in a given setting. Partly a values question: protecting one's own forces, set against the risk to crews and civilians.
- *Judgement: productive.* Conditions resolve it better than a lower ceiling does (Section 1.5).

**D5. Low-resource settings.**

- *The disagreement.* The Creative lens argues that additivity licenses an automated service where there is none. The Systems lens warns that a tool that starts out additive can later become a substitute, if funders stop paying for specialists. The Critical lens notes that the same population bears both kinds of error.
- *Source.* The time horizon, and values.
- *Judgement: productive.* Adopt additivity, with a re-check that the tool has not displaced existing routes. The paper should also say that this trade-off belongs to accountable local institutions working with the people affected, not to the paper.

**Noise, resolved: the ceiling for favourable approvals.**

- *The disagreement.* The Analytical lens read Table 1's grade 2 as too strict, because a sampled audit counts as grade 3 by the paper's own test. The Systems lens read it as too loose, because approvals compete for scarce resources and can turn into debts.
- *Judgement: mostly noise.* The disagreement came from the paper's ambiguous use of grade 2, not from a real difference between the lenses. Once "favourable" is defined by the person's interests and by whether the decision takes scarce resources from others, the two readings apply to different subclasses:
  - low-cost approvals that take nothing scarce from others and serve the person's interests: grade 3;
  - approvals that take a scarce resource, or that put affordability at risk: grade 1.

---

## 4. The five lenses

The lenses were run one after another. Each was kept independent of the others' conclusions while it worked, and Sections 2 and 3 deal with where they overlap. Each step of a reasoning chain is labelled as evidence (E), assumption (A) or inference (I). "Evidence" means the paper's own text or sources known to the model; none of it was checked live. A plain Markdown file cannot show colour, so the lenses are labelled by name instead of colour-coded.

### 4.1 Analytical lens

**Reasoning chain**

1. (E) The argument has three steps. Authority needs an answerable agent and a route of challenge; the failures of automated decision-making are structural; so authority should be tiered. Its practical output is two tables: conditions with tests (Table 2) and ceilings (Table 1).
2. (E) The cited sources are real and, as far as the model knows, fairly summarised. The AI Act is cited through a third-party website. Two claims have no support:
   - that credit applicants often cannot get the model's reasons (Section 3.3);
   - that no one can answer for collective harm from a learned trading policy (Section 5).
3. (I) The first step of the argument is partly true by definition. Section 2 builds answerability into the meaning of authority, so the real claims lie in the ceilings, and the paper must defend those directly.
4. (I) The formal apparatus has six defects:
   - "final" is undefined, so the thesis seems to conflict with the dosing and protective-stop rows;
   - the protective stop is grade 3 under the paper's own definitions;
   - a system with human-set limits but no timely halt fits no grade, and the military scenario is such a system;
   - grade 1 at high volume is as nominal as the grade 2 that Section 6.4 rejects;
   - under the permission-bundle rule a ranking carries "deprioritise", so escalation cannot cover rankings;
   - grade 2 for high-volume approvals describes control of the envelope, which is grade 3.

   Section 6.5 also places the borrower among third parties.
5. (I) Seven of Table 1's twelve rows need a different grade, a new condition or a scope fix: escalation, the protective stop, defensive engagement of munitions, favourable approvals, credit refusals, welfare denials and discretionary market interventions. The other five stand. Every defect can be fixed without reversing the direction of the thesis.
6. (I) The direction follows validly from the paper's normative premises together with the failure modes it documents. What limits confidence is not the logic but a missing comparison: the paper gives no error rates for human-only or hybrid processes. So it should say what evidence would move each ceiling.

**Key concepts**

| Concept | Weight | Why this weight |
|---|---|---|
| Consistency of the grade scale | 0.90 | Certifiers cannot apply ceilings if the scale misclassifies cases |
| Authority versus delegated decisional power | 0.80 | Removes the circularity and locates the real question |
| Fit between cases and claims | 0.70 | The cases show the harm of automation that cannot be contested, not that grade 1 is better |
| Comparative baseline | 0.60 | Without error data for human-only processes the ceilings rest on values, and the paper should say so |
| Citation accuracy | 0.40 | Mostly sound; only sourcing fixes are needed |

**Mind map**

- Analytical
  - Argument structure
    - Step 1, answerability: true by definition as written
      - Fix: separate authority from delegated power
    - Step 2, structural failures: supported by cases and human-factors work
    - Step 3, tiering: plausible but not forced; alternatives not argued
  - Formal apparatus
    - Grade scale
      - Protective stop is grade 3
      - Gap: human-set limits, no halt (military scenario)
      - Grade-2 approvals are envelope control
    - Permission bundle
      - Rankings carry "deprioritise"
    - Thesis against Table 1
      - "Final" undefined
  - Evidence
    - Accurate citations
      - AI Act cited through a third-party site
    - Unsupported claims
      - Credit reasons; market answerability
    - Missing comparison
      - Error rates for human-only and hybrid processes

### 4.2 Creative lens

**Reasoning chain**

1. (A) The obvious frame, "should the AI or the human decide?", hides the variables that matter most: who can undo a decision, how fast, and at whose cost.
2. (I) Reframe authority as a reversibility budget. A decision class may carry only as much risk of irreversible harm as its correction loop can catch. A ceiling then follows from comparing how fast harm unfolds with how fast errors are caught and reversed.
3. (I) Add an additivity principle: "ratchet up, never down". Automation may add routes to help, such as flags or screening where none exists, but it may not lower anyone below the pathway they already have. This one principle settles the escalation puzzle and much of the low-resource objection. Autonomous screening where there is no specialist is additive; the same tool used to replace specialists is not.
4. (E, by analogy) Working institutions already supply templates:
   - the operational design domain of automated driving, for envelopes;
   - threat-image projection in airport screening, for seeded errors;
   - phased trials and post-market surveillance of medicines, for earning a higher grade;
   - the two-person rule and the banking "four eyes" principle, for adverse decisions;
   - sunset clauses, for grants of authority.

   These analogies show that the tests are feasible; they are not evidence that the tests work in these domains.
5. (I) A contestability-first architecture is a serious alternative to the grade-1 default for high-volume adverse decisions. It has four parts: an automated first instance, the decision's effect suspended pending review, *de novo* human review on request, and the burden of proof on the decision-maker. A strongest paper would present it and say why it is or is not preferred.
6. (I) The paper becomes stronger and more general if two changes are made. Reversibility and additivity should organise the ceilings. Grades should become licences, earned by evidence and suspended by triggers, rather than fixed entries in a table.

**Key concepts**

| Concept | Weight | Why this weight |
|---|---|---|
| Additivity | 0.85 | One principle resolves the escalation, screening and low-resource cases |
| Reversibility budget | 0.70 | Ties ceilings to a property that can be estimated, not to intuition |
| Authority as an earned, revocable licence | 0.65 | Supplies the update path the static tables lack |
| Contestability-first architecture | 0.60 | The strongest alternative design, so it must be engaged |
| Borrowed templates | 0.45 | Make the tests look feasible; analogies, not evidence |

**Mind map**

- Creative
  - Reframe the question
    - From "who decides" to "who can undo"
      - Reversibility budget
    - From fixed ceilings to licences
      - Earned by phased evidence
      - Suspended by triggers
  - New principles
    - Additivity
      - Flags that only add
      - Screening where none exists
    - Contestability first
      - Suspensive, *de novo* review
  - Borrowed templates
    - Operational design domain
    - Threat-image projection
    - Two-person rule; sunset clauses
  - Alternatives to tiering
    - A regime of liability alone
    - Licensing each system
    - Public participation in setting fairness criteria

### 4.3 Critical lens

**Reasoning chain**

1. (A, challenged) The paper assumes that a named human decision-maker of record supplies answerability. It need not. Robodebt had officials and ministers in the chain. The paper would have the deploying organisation's own governing body certify answerability, and Robodebt's department would have certified itself. Named operators can also become "moral crumple zones", absorbing blame for systems they do not control (Elish, 2019).
2. (E) Human oversight can make outcomes worse, not merely fail to improve them. An experiment found that people's departures from risk scores were racially disparate (Green and Chen, 2019). A field study of Kentucky judges reported a similar pattern (Albright, 2019; to verify). Green (2022) argues that oversight mandates give flawed algorithms false legitimacy. The paper deals only with complacency, not with biased deviation.
3. (I) The strongest counterargument to the grade-1 default runs as follows. At scale, human final authority over adverse decisions produces rubber-stamp review. That review adds cost and delay, legitimises errors with a signature, and may add bias. Meanwhile the protections that actually work can be attached directly to an automated first instance: a lawful basis, a validated target, the burden of proof on the decision-maker, contestation with suspensive effect, and independent audit. In the military domain, the strongest counterargument is Arkin's (2009): constrained machines might kill fewer civilians than frightened or vengeful humans.
4. (I) The paper is also too permissive in two places.
   - Approvals labelled "favourable" can harm the person approved, as unaffordable credit does. Section 6.5 even places the borrower among third parties.
   - Grade-3 defensive systems can engage crewed aircraft. In 2003, Patriot batteries shot down allied aircraft.
5. (E) The cases are skewed towards failure:
   - every case is a failure;
   - none involves current deep-learning or generative systems;
   - one anchor case, Robodebt, is not machine learning at all;
   - documented successes are absent, such as closed-loop insulin dosing, autonomous retinopathy screening and circuit breakers.

   By the paper's own account, the dynamics in Section 4.6 are hypotheses.
6. (I) Both kinds of error have a cost, and different people bear it. Restrictive ceilings put the cost on patients and applicants where review capacity is scarce, often in poorer settings. Permissive ceilings put it on the people least able to contest, and on civilians. The leading view fails under different conditions in different domains:
   - for the economy rows, if real review at scale proves nominal and contestability-first designs produce fewer wrongful adverse outcomes;
   - for the military row, only if machines are shown to recognise surrender and civilian status better than humans under adversarial conditions, *and* the dignity premise is rejected.

**Key concepts**

| Concept | Weight | Why this weight |
|---|---|---|
| Biased deviation by human overseers | 0.80 | The strongest empirical threat to the grade-1 default, and the paper does not address it |
| Moral crumple zones and self-certification | 0.70 | Answerability by naming can become scapegoating or self-approval |
| Mislabelled "favourable" decisions | 0.70 | A concrete error that weakens the asymmetry premise |
| Case selection limited to failures | 0.60 | Makes the framework look better supported than it is |
| Who bears the cost | 0.60 | Both kinds of error fall on vulnerable people, so the trade-off is real |

**Mind map**

- Critical
  - Assumptions challenged
    - A human of record means answerability
      - Robodebt had humans
      - Self-certification
      - Moral crumple zones
    - Grade 1 is safe
      - Biased deviation
      - Nominal review at volume
    - Favourable means low harm
      - Unaffordable credit
      - Overpayment debts
  - Strongest counterarguments
    - Contestability first, at scale
    - Military: fewer civilian deaths (Arkin)
  - Weak evidence and bias
    - Only failures as cases
    - An anchor case that is not machine learning
    - Dynamics that are only hypothesised
  - Who bears the cost
    - Restrictive ceilings: patients and applicants where capacity is scarce
    - Permissive ceilings: those least able to contest; civilians

### 4.4 Systems-thinking lens

**Reasoning chain**

1. (I) Feedback, not the label, sets a deployment's effective grade. Authority creep is a reinforcing loop. Shorter review windows mean fewer overrides, less practice and more reliance on the system, which in turn justify shorter windows.
2. (E) Label loops are documented in an adjacent domain: data and models from predictive policing show runaway feedback (Lum and Isaac, 2016; Ensign et al., 2018). The opposite failure is documented in clinical decision support. Under alert fatigue, clinicians override the great majority of alerts, and true positives are lost.
3. (I) Decisions are coupled. In a fixed-capacity queue, every escalation deprioritises someone else. In welfare, every wrongful approval becomes a future overpayment debt. The split between favourable and adverse decisions hides both couplings. An additive tool can also drift into a substitute over time, if funders stop paying for the route it was meant to supplement.
4. (I) Incentives shape what is measured and who is heard.
   - If a trigger leads to a downgrade, deployers have a reason not to measure.
   - If a named person absorbs blame, that person has a reason to hide behind procedure.
   - Any safeguard that waits for people to contest fails those least able to contest, and low contest rates then look like accuracy. This is the pattern Eubanks documents.
   - Political pressure can drive automated enforcement at scale. Robodebt was a deliberate design under policy pressure, not drift, so the triggers must also catch deliberate redesign.
5. (I) Collective dynamics differ from individual ones.
   - In the military and in markets, competitive pressure is a reinforcing loop. Coordinated limits can balance it only if autonomy can be verified, and autonomy is a property of software that is hard to verify.
   - In markets, the gap in answerability is real where an offence requires intent, because a learned policy can manipulate or collude without any human intending it.
6. (I) The paper's dynamic controls protect more than its static ceilings do. The revision should put these at the centre:
   - measured de facto grade;
   - two-sided triggers;
   - independent access to logs;
   - analysis of coupled decisions;
   - monitoring of collective harms.

**Key concepts**

| Concept | Weight | Why this weight |
|---|---|---|
| De facto grade as a dynamic quantity | 0.85 | Explains authority creep, grade laundering and nominal grade 1 |
| Coupled decisions (shared scarce resources; approvals that become debts) | 0.75 | Exposes the asymmetry premise's blind spot |
| Two-sided triggers | 0.60 | Alert fatigue is as real a failure as complacency |
| Incentives to measure | 0.55 | Triggers without independent measurement will be gamed |
| Verifiability of autonomy | 0.50 | The coordination answer to competitive pressure depends on it |

**Mind map**

- Systems
  - Reinforcing loops
    - Authority creep
      - Shorter windows, fewer overrides, deskilling
    - Label loop
      - Flag, investigate, label, retrain
    - Races
      - Rivals delegate, so pressure grows
  - Coupled decisions
    - Shared queue
      - Escalation deprioritises someone else
    - Approval to debt
      - Welfare overpayments
    - Additive to substitute
      - Funders withdraw the existing route
  - Control dynamics
    - Two-sided triggers
      - Complacency and alert fatigue
    - Incentives to measure
      - Independent access to logs
    - Delays
      - Slow re-certification, fast drift
  - Collective harms
    - Manipulation and collusion without intent
    - Delay before harm is detected
  - Downstream
    - Those least able to contest
      - Low contest rates read as accuracy

### 4.5 Pragmatic lens

**Reasoning chain**

1. (E) The paper's intended readers already work under overlapping duties:
   - the EU AI Act for medicine and the economy (Articles 9 to 15, 26, 27, 72, 73 and 86), but not for military uses (Article 2(3));
   - GDPR Article 22;
   - US adverse-action rules for credit;
   - medical-device regulation, including the FDA's predetermined change control plans for AI that is retrained;
   - Article 36 weapons reviews and DoD Directive 3000.09;
   - MiFID II Article 17 and market-access rules for trading.
2. (I) Mapping Table 2 onto these instruments shows what the paper adds: seeded-error tests of override, de facto grading, downgrade triggers and additivity. It also lowers the cost of adoption. Without the mapping, readers will see a parallel compliance regime and ignore it. The mapping also exposes a gap that no instrument handles well: decisions drafted by generative AI and signed by staff, which count as advice on paper (an assumption about how fast such tools are spreading in casework).
3. (A) The certifiers named in Table 2 often do not exist or are not independent. The market for independent algorithmic audit is young, defence ministries review their own weapons, and the deploying body certifies its own answerability. Interim arrangements are needed.
4. (I) Three ceilings or scope choices fail the test of feasibility:
   - A grade-1 default for millions of credit decisions cannot be staffed. In practice it becomes either nominal review or no service. Existing law already provides an alternative: automated decisions with a right to obtain human intervention and to contest (GDPR Article 22(3)).
   - States will not accept a ceiling below grade 3 for defence against saturation attacks. Conditions on grade 3, rather than a lower ceiling, are the line that can hold.
   - Private trading is governed elsewhere and involves no decision about a particular person, so it can leave the paper's scope.
5. (I) The conditions cost money, as Recommendation 8 says. Many deployers cannot fund subgroup reporting or seeded review. Data on protected attributes may be unavailable or legally restricted, for example in US credit outside mortgage lending. For each grade, the paper should give a minimum viable version of each condition, and say what follows when it cannot be met: a lower grade, or no deployment.
6. (I) The revision costs differ by item.
   - Consistency and definitions are cheap to fix.
   - Evidence and legal mapping take moderate effort and need verification.
   - Expert review is costly but necessary.

   The law is moving in 2026 (the AI Act's application dates; the autonomous-weapons negotiations), so every legal claim needs an "as of" date. The sequence should be: logic, then the values choice, then evidence and objections, then the mapping in an appendix, then expert review. Appendices can keep the main text to a manageable length.

**Key concepts**

| Concept | Weight | Why this weight |
|---|---|---|
| Mapping to existing law | 0.75 | Decides whether practitioners can use the paper |
| Existence and independence of certifiers | 0.70 | A test is only as good as whoever applies it |
| Feasibility at volume and speed | 0.65 | Ceilings that cannot be staffed, or that states will not accept, get ignored |
| Minimum viable conditions per grade | 0.55 | Keeps the framework from becoming paperwork or a de facto ban |
| Dated legal claims and sequencing | 0.45 | The law is moving in 2026, and the revision could sprawl |

**Mind map**

- Pragmatic
  - Use by practitioners
    - Map to existing law
      - AI Act (not military); GDPR Article 22; US adverse-action rules
      - FDA change control plans; Article 36; DoD Directive 3000.09; MiFID II
    - What the paper adds
      - Seeded errors; de facto grade; triggers; additivity
  - Feasibility
    - Certifiers
      - Missing or self-certifying
    - Volume and speed
      - Credit at scale; saturation attacks
    - Costs and data
      - Minimum viable conditions; protected attributes
  - Scope
    - Leave out: private trading
    - Bring in: decisions drafted by AI
  - Revision plan for the author
    - Sequence
      - Logic, values choice, evidence, mapping, expert review
    - Length
      - Appendices
    - Dates
      - "As of" notes

---

## 5. Transparency report

### 5.1 Framing and assumptions

*The question as framed.* The question sets two linked tasks. The first is to say how the paper should be revised so that it is the most defensible paper possible on whether AI systems should hold decision authority in medicine, military force and economic allocation. The second is to say how far its central recommendation can be trusted.

- *Goal:* a prioritised revision plan grounded in the paper's text, and a calibrated confidence.
- *Constraints:* the paper and the skill as the only inputs; no web search; the full depth the skill gives for high-stakes questions.
- *Stakeholders:* the author; the paper's intended readers (hospital governance committees, procurement officers, regulators and ethics boards); the people decided about (patients, claimants, borrowers, civilians and combatants); deployers and vendors; states.
- *What a good answer must do:* separate the fixes the text proves from judgements, separate facts from values, and say what must be checked.

*Assumptions.*

1. "Strongest defensible" means most robust to informed criticism, not most ambitious.
2. The "central recommendation" is the thesis in the abstract and Section 1, together with the five conditions.
3. The readership is mixed, academic and practitioner, as the paper's Section 1 says.
4. The model's knowledge of the cited literature and of the law is accurate up to its June 2026 training cutoff, but none of it was checked live.
5. Unless the author decides otherwise, "AI" covers automated decision systems in general, and learned systems add risks of their own.

### 5.2 Which lens drove which part

- **Analytical:** the consistency fixes (items 1 to 4, and the point about grade-2 approvals), the count of Table 1 rows that need changing, and the finding that what limits confidence is the missing comparison, not the logic.
- **Critical:** the repair of the asymmetry premise and the misplaced borrower (item 5), the re-grounding of the military ceiling (item 6), the strongest objections and counterexamples (item 7), and most of the downward pressure on the score.
- **Systems-thinking:** de facto grading as a dynamic quantity (item 4), coupled decisions, two-sided triggers and incentives to measure (item 10), and the proactive review of samples in the second route of Section 1.6.
- **Creative:** additivity, reversibility as an organising idea, the restated thesis (Section 1.4), licences in place of fixed ceilings, and the borrowed templates (operational design domain, threat-image projection).
- **Pragmatic:** the legal mapping and dating (item 9), certifier independence, minimum viable conditions, the scope advice on private trading, and the order of the next steps (Section 1.8).

### 5.3 What was weighted down or set aside, and why

- *AI moral agency or legal personhood* was set aside. Nothing in the question turns on it, and the paper is right not to rely on it.
- *Speculative future capabilities* were weighted down. The paper concerns present deployment, and the revision conditions in item 10 cover future change.
- *Criminal justice and immigration* were set aside as domains. They were used only as evidence from neighbouring domains, as with the bail studies.
- *Exact figures from studies recalled from training* were left out, so that no unverified number enters the analysis or the paper.
- *A regime of liability alone*, suggested by the Creative lens, was weighted down. It fails where the people harmed cannot detect the error, as Robodebt shows.
- *Further domains*, such as employment and platform work, were left to the author as a scope choice (Section 5.7) rather than made a recommendation.

### 5.4 Confidence and its drivers

The score is 62 out of 100, for the central recommendation as the paper intends it (Section 1.2).

- *Up:* external support for the direction.
- *Down:* internal inconsistency, thin and one-sided evidence, and an unresolved values divergence.
- *Roughly balanced:* reversibility.

All five lenses come from one model, so their agreement is not independent verification, and it did not raise the score.

### 5.5 What this reasoning cannot establish

- Whether the paper's normative premises are true: that individualised human consideration is owed before an adverse effect, that answerability must sit with persons, and that dignity forbids delegated killing. These are values. Argument can clarify them but cannot settle them.
- How often human review at scale is in fact nominal, and how human-only, hybrid and automated processes compare on wrongful adverse decisions in these domains.
- The state of the law, and of the autonomous-weapons negotiations, in October 2026, which is after the model's training data.
- Whether the details recalled from memory are exact (Section 5.6).
- Whether a particular journal or committee will find the revised paper persuasive.

### 5.6 What to verify with sources, data or experts

*Sources.* Everything below was recalled from training, and none of it was checked live.

- **Obermeyer et al. (2019).** How the programme selected patients. As I recall, it automatically identified patients above a high score threshold and referred those above a lower threshold to their doctor. Also the reported effect of changing the label.
- **Robodebt.**
  - That the scheme used rule-based income averaging, not machine learning.
  - That the 2016 version removed earlier manual checks.
  - The royal commission's findings on legality.
  - The government's 2019 concession in Federal Court proceedings.
- **Welfare cases in the Netherlands.**
  - The childcare benefits scandal: the risk-classification model, the data-protection fine, and the government's resignation in January 2021.
  - The SyRI judgment of the District Court of The Hague (February 2020).
- **Credit law.**
  - *SCHUFA* (CJEU, C-634/21, December 2023).
  - GDPR Article 22.
  - ECOA and Regulation B, including Regulation B's limits on collecting protected attributes outside mortgage lending.
  - CFPB Circular 2022-03.
- **The EU AI Act.**
  - Articles 2(3), 14, 26, 27, 72, 73 and 86, and Annex III.
  - The current application date of the high-risk obligations, given the Commission's November 2025 "Digital Omnibus" proposal to delay them.
- **Military.**
  - The wording of the ICRC's 2021 position, and of DoD Directive 3000.09 as updated in 2023.
  - Developments in the CCW and the UN General Assembly. In October 2023 the UN Secretary-General and the ICRC President jointly called for a legally binding instrument by 2026; check whether that target was met.
  - Article 36 of Additional Protocol I.
  - The 2003 Patriot fratricides, the Vincennes shoot-down (1988), and Arkin (2009).
- **Medicine.**
  - The FDA's 2018 authorisation of IDx-DR, and its pivotal trial (Abràmoff et al., 2018).
  - The clearances of hybrid closed-loop insulin systems.
  - Wong et al. (2021) on the sepsis model.
  - The FDA's guidance on predetermined change control plans.
  - The literature on alert fatigue.
- **Oversight and responsibility.** Green (2022); Green and Chen (2019); Albright (2019); Kleinberg et al. (2018); Elish (2019); Simpson and Müller (2016); Heyns (2013); Asaro (2012).
- **Measurement and fairness.** Lakkaraju et al. (2017); Kleinberg, Mullainathan and Raghavan (2017); Chouldechova (2017); Lum and Isaac (2016); Ensign et al. (2018).
- **Markets.** The Knight Capital incident (2012) and the SEC's action (2013); MiFID II Article 17 and its technical standard on kill functionality; Calvano et al. (2020).
- **Borrowed templates.** Threat-image projection in airport screening; the operational design domain in SAE J3016.

*Data.*

- Measures of de facto review in real deployments: time per case, override rates, and whether the overrides were right.
- False-negative rates of escalation tools, by subgroup.
- Contestation rates, success rates and times to resolution, by subgroup.

*Experts.* See Section 5.8.

### 5.7 What the author still has to decide

1. The route for high-volume adverse decisions (Section 1.6): grade 1 with funded capacity, or contestability first under statute.
2. Whether outcome evidence may raise a ceiling, and how high the bar should be.
3. Scope:
   - whether "AI" means all automated decision systems;
   - whether markets stay in the paper, and in what form;
   - whether to add employment and platform work, which the AI Act treats as high-risk.
4. Whether to adopt the sorting features and the additivity principle proposed here, or to argue for others.
5. The venue. An argument-first philosophy paper would put the legal mapping in an appendix; a policy paper would lead with the tests and the mapping.
6. How firmly to take a position on the autonomous-weapons negotiations, given their status in 2026.

### 5.8 Professional review and the limits of this method

This analysis is not medical, legal, military or financial advice. Before anyone uses the tiers, qualified professionals should review them:

- for the medicine rows, a clinician with clinical-safety or informatics expertise, and a specialist in medical-device regulation;
- for the military rows, a lawyer in international humanitarian law with experience of weapons reviews, and a military ethicist;
- for the economy rows, an administrative-law or welfare-rights lawyer, and a consumer-credit lawyer or regulator;
- for the market rows, a financial-markets regulator;
- for the override and seeded-error tests, a human-factors researcher;
- representatives of the people most affected, such as patients' groups and welfare claimants.

All five lenses were produced by one model, so where they agree, that is not independent confirmation. What the paper should argue is for its author to decide. This analysis can support that decision but does not make it.
