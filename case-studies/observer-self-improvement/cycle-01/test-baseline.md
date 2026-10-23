Model: claude-opus-5-5

# Observer analysis: revising "Graded Authority for AI over Sensitive Human Matters"

**Question.** How should the paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in its central recommendation?

**Method.** Observer multi-lens reasoning (skill v1.0) at full depth, because the question is high-stakes. Five lenses (analytical, creative, critical, systems-thinking, pragmatic) were run one after another, each kept independent, and then compared by the Higher-Order Observer (HOO). The only inputs were the paper and the model's own knowledge. No web search was used, because the skill does not call for one. External works named below are cited from memory and are marked "verify": check each one before the paper relies on it.

This analysis is not legal, medical, military or financial advice. The transparency report (Section 5) names the professionals who should review the domain claims.

## 1. Recommendation and confidence

### Verdict in brief

Keep the paper's core position, because it survives every lens: no AI system should settle adverse, hard-to-reverse, value-laden determinations about particular persons unless a human who can be questioned is able to reverse them, and narrower delegation is defensible on conditions. The paper as written does not yet defend that position at its strongest, for five reasons:

- Its headline thesis does not say where "final" authority ends and "bounded" authority begins.
- Its escalation category is unstable.
- Its ceilings are verdicts without a derivation.
- It engages none of the strongest opposing evidence.
- Its tests do not fit the military and market domains.

The ten revisions below fix these problems without new empirical work.

**Confidence in the paper's central recommendation: 62/100.** Here "central recommendation" means the Section 1 thesis: AI should hold no final authority over determinations about particular persons in the three domains, and may hold bounded authority under the five conditions, scaled to the stakes. The core direction is better supported than 62 suggests. The specific ceiling values, the market row and the basis of the military line are less well supported. The drivers follow the revision list.

### The revision, in priority order

**1. State the thesis in the terms the framework actually uses.** Section 1 denies AI "final decision authority over determinations about particular persons" but grants "bounded authority" over executional, escalating or protective steps and over favourable decisions. The difference between final and bounded authority is never defined on the grade scale. By Section 2's own definition, a decision about a person is any determination that changes treatment, status, liberty, money or access. Dosing at grade 3, the protective stop at grade 4 and favourable approvals at grade 2 all fit that definition, and all take effect without per-case human approval. Section 5 already states the line the table draws: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons." Move that line into the thesis.

Suggested wording: *No AI system should hold authority at grade 2 or above over a determination about a particular person that is adverse, cannot be reversed within the time in which it matters, and turns on contestable value judgements, unless a statute licenses grade 2 with stated review capacity. Bounded authority is defensible in three cases: where a negative output never removes a person from human consideration, where errors are detectable and cheaply reversed in time, or where action stays inside a human-fixed envelope with a tested stop. Every grant must pass the five conditions.*

Then define "final authority" in Section 2 in grade terms. (Lenses: analytical, creative, critical.)

**2. Separate authority from decisional control.** Section 2 builds answerability into the definition of authority, which makes "AI cannot hold authority" partly true by definition. Pose the policy question directly: how much decisional control may be delegated, and on what terms? Then explain why accountability assigned in advance is enough for envelopes (grade 3) but not for adverse person-level determinations. The premise that carries the weight is the affected person's ability to be heard and to have the outcome reversed before, or soon after, it takes effect. Answerability alone does not do that work. This also answers the literature arguing that responsibility gaps can be closed by assigning responsibility in advance (for example Simpson and Müller, 2016; Tigard, 2021; verify). (Lenses: analytical, critical.)

**3. Fix escalation.** Section 2 says a change of queue position "is not such a determination", and Section 5 rates escalation at grade 2 because "a flag that moves a case up a queue costs little if it is wrong". Where capacity is fixed, escalating one person moves others down. As written, the same queue movement is "not a determination" when it lifts one person and a grade-1 determination ("deprioritising a patient") when it lowers another. The paper's own lead case falls in this gap. The Obermeyer algorithm selected patients into a scarce programme, and its harm fell on the patients it did not select.

Proposed rule: classify an escalation or triage system by what a negative output does.

- If a negative output removes a person from human view, or delays care past a clinically meaningful interval, the system is deprioritising and takes that ceiling.
- If every case still gets a human look and the system changes only the order or intensity of review, grade 2 can stand. AI-triaged mammography reading, where every examination is still read by a person, is the model case (MASAI trial, Lancet Oncology 2023; verify).

(Lenses: analytical, systems, creative, pragmatic.)

**4. Make reversibility, not direction, the governing feature.** The asymmetry premise uses the direction of a decision (favourable or adverse) as a stand-in for how irreversible its errors are. That is the same proxy-for-target substitution the paper criticises in Obermeyer. Keep direction as a default heuristic, but state ceilings in terms of three features:

- reversibility
- detection delay
- who bears the error, including third parties and, where allocation is zero-sum, the people displaced

This also handles approvals that harm, such as over-indebtedness. Some legislatures already apply the asymmetry, which supports the premise: for example, rules that medical-necessity denials in health insurance be made by clinicians, not by algorithms alone (California SB 1120, 2024; verify), and the EU Platform Work Directive's requirement that a human take decisions to suspend or terminate a worker's account (2024; verify). (Lenses: creative, analytical.)

**5. Derive Table 1 from a stated procedure.** List the features that set a ceiling:

- the direction of the decision
- reversibility
- detection delay
- whether capacity is fixed (zero-sum)
- volume relative to review capacity
- the affected person's ability to contest
- whether a validated outcome label exists
- what happens without the system
- harm to third parties

Then present Table 1 as worked results of that procedure. Readers can then dispute premises instead of twelve separate verdicts, and the framework extends beyond the three domains. Keep the table itself, because committees need something they can apply. (Lenses: creative, pragmatic.)

**6. Add an upgrade path beside the downgrade triggers.** State the evidence that would raise a ceiling: prospective, pre-registered outcome evidence showing the system is no worse than current human practice for the worst-off subgroup, plus a contest channel shown to work. Without this the framework only ratchets down, which leaves it exposed to the lives-saved objection. With it, the paper's position responds to evidence. Any categorical line, such as no delegated force against persons, should sit explicitly outside the upgrade path, with the reason stated. (Lenses: critical, creative, pragmatic.)

**7. Meet the strongest objections on their own ground (Section 6).**
- *Comparative performance.* Engage the evidence that human-AI teams sometimes do worse than AI alone (for example the radiology experiments of Agarwal et al., 2023, and algorithm aversion, Dietvorst et al., 2015; verify both). Engage the critique that human-oversight requirements often fail and lend legitimacy to flawed systems (Green, 2022; verify). Then state the price of the grade-1 ceilings and say when the paper thinks it is worth paying.
- *Real comparators.* Compare against real human institutions, not an idealised answerable official. Bureaucracies have their own responsibility gaps (the "many hands" problem; Thompson, 1980; verify). Robodebt itself had named, answerable officials and ministers and still ran for years.
- *"Humans are biased too."* Concede that uniform machine error is also easier to audit and to fix in one place. Rest the reply on contestability and on errors correlated across institutions, not on the heterogeneity of human bias alone.
- *Dignity.* As worded, 4.2 proves too much: rule-based human adjudication also fails to take a person's situation into account. Tie the dignity claim to a right to individual consideration on request, before any irreversible effect.
- *Military.* Engage the humanitarian argument that autonomous systems might distinguish targets better than stressed humans (Arkin, 2009; verify). Answer it on grounds of predictability, verification and dignity, and say plainly that the answer is a values choice.
- *Retrodiction test.* Ask whether Table 2 would have caught the paper's own cases. The right-target test would probably have caught Obermeyer. It is much less clear that answerability and contestability, as certified, would have stopped Robodebt.

(Lens: critical.)

**8. Make the conditions fit each domain.**
- *Military.* No one, human or machine, can meet the contestability test in lethal force; the paper says as much in 4.2. Publishing subgroup error rates also collides with military secrecy. Substitute the duties of international humanitarian law (IHL): distinction, proportionality and precautions in attack (Additional Protocol I, Arts 48, 51 and 57). Name the legal review of new weapons (Art 36) as the certifier, and add investigation after the fact.

  Then fix the grade scale. Grades 3 and 4 combine two dimensions: whether a human stop works in time, and who sets the limits. The Section 3.2 case has limits set by a commander but no timely veto, because communications are degraded. It therefore fits neither grade 3 (which requires a halt) nor grade 4 (whose limits are absent or self-set). It might still pass Table 2's bounded-delegation test through an automatic timer or geofence stop. Classify that case explicitly, resolve it, and correct 6.3, which argues against grade 4 when the contested case is an envelope directed at persons.

  The defensive grade-3 row also needs a rule for objects that carry people. The 2003 Patriot fratricides show the problem, and the 1988 Vincennes shoot-down is a human-in-the-loop case of automation bias (verify both). The EU AI Act excludes systems used exclusively for military purposes, so the paper's only binding legal anchor does not reach this domain. Compare US DoD Directive 3000.09 and its standard of "appropriate levels of human judgment over the use of force" (verify).
- *Markets.* Firms are already held answerable for algorithmic trading failures (Knight Capital, 2012; verify), so "no one can answer" is too strong. The real problem is fast, correlated, collective harm. Say whether "discretionary AI market interventions" means interventions by public authorities or private trading. If it includes private trading, Recommendation 6 would reach most algorithmic trading and needs its own argument. Map the grade-3 market rules onto existing regimes (SEC Rule 15c3-5; MiFID II Art 17; verify).
- *Collective allocation.* The question names economic allocation. Determinations about particular persons and collective allocation (budgets, prices, market-wide rules) need different licensing conditions: for collective allocation, democratic authorisation and public justification rather than individual contestability. Either add a short section or scope collective allocation out explicitly.
- *Missing high-volume classes.* Add insurance coverage and prior-authorisation denials, which sit where medicine meets the economy, and employment and platform deactivation.

(Lenses: analytical, systems, pragmatic, creative.)

**9. Make oversight real without creating scapegoats.**
- *Grade-1 rows.* Apply the real-override test to the grade-1 rows that carry adverse determinations: credit refusals, welfare denials and engagement recommendations. As written, the five conditions govern grades 2 to 4 only, so the rows where rubber-stamping matters most are never tested.
- *Functional grading.* Set the grade from observed behaviour: time per case, override rate and the information reviewers actually have. The deployer's declaration should not set it. Otherwise Recommendation 1 rewards declaring "decision support".
- *Layered answerability.* Spread answerability across levels to avoid a "moral crumple zone", in which the nearest human absorbs blame for a system's failure (Elish, 2019; verify). The institution answers for design, data and review capacity. A named senior officer answers for the deployment and its grade. Reviewers answer for their process, not for errors they could not have detected. Revise 6.4's "reviewers should answer for accuracy" accordingly.
- *Operating rules.* Count upstream model updates as material changes. Scale re-check intervals to how long harm takes to show. Run seeded errors in simulation or shadow mode, never on live patients or claimants. Read override rates together with accuracy, so the trigger does not reward token overrides. Require that reviewer skill be maintained.
- *Monoculture.* If many lenders or agencies use the same model or data, a refusal by one is in effect a refusal by most, and the reversibility the asymmetry premise relies on disappears (Kleinberg and Raghavan, 2021; verify).

(Lenses: systems, critical, analytical, pragmatic.)

**10. Broaden the evidence and fix the record.**
- *Cases.* Add successes and mixed results, not only failures, and verify each one:
  - autonomous diabetic-retinopathy screening (US FDA authorisation, 2018)
  - closed-loop insulin delivery, which fits the grade-3 dosing row
  - AI-triaged mammography reading
  - WHO-endorsed computer-aided chest X-ray reading for TB screening (2021), which bears directly on low-resource settings and 6.6
  - the poor external validation of a widely used sepsis alert (Wong et al., 2021)
- *Jurisdictions.* Add, after verification:
  - GDPR Art 22 and the CJEU's SCHUFA judgment (C-634/21, 2023) on credit scores as automated decisions
  - the Dutch childcare-benefits scandal and the SyRI judgment (2020)
  - US adverse-action rules (ECOA and Regulation B; CFPB Circular 2022-03)
  - EU AI Act Arts 14, 26 and 86 and Annex III
- *Contestability literature.* Draw on technological due process (Citron, 2008) and individual justice (Binns, 2022) for the contestability argument (verify).
- *Scope.* Robodebt was a rule-based income-averaging scheme, not machine learning. Either state the scope as "automated decision systems, including AI" or explain why the lessons transfer to learned systems.
- *Prior work on grades.* Place the grades in the levels-of-automation literature (Sheridan and Verplank, 1978; Parasuraman, Sheridan and Wickens, 2000) and say what is new: the permission bundle and the licensing conditions.
- *Housekeeping.* Cite the AI Act from the Official Journal or EUR-Lex rather than a third-party site, and check its current application dates. Number the tables in order of appearance (Table 2 currently comes first). Define "low-cost approvals".

**Conditional ordering.** If the target is the paper's stated policy audience (governance committees, procurement officers, regulators), lead with items 1, 3, 8 and 9 and the institutional mapping in the pragmatic lens. If the target is a philosophy or ethics journal, lead with items 1, 2, 4, 6 and 7. Either way, item 1 comes first.

### Confidence: 62/100, and what moved it

- **Up: evidence and reversibility.** The core direction rests on documented failure cases, a strong human-factors literature (automation bias, the ironies of automation) and broad agreement among governance instruments. A conservative default is also cheap to correct: a ceiling set too low can be raised by re-certification, while a wrongful death, debt or denial of care often cannot be undone.
- **Down: internal inconsistency.** As stated, the thesis leaves the final/bounded line undefined and the escalation category unstable, so the recommendation cannot yet be applied consistently.
- **Down: missing evidence.** The decisive comparative question is unanswered, as the paper concedes: does AI alone do better or worse than human-in-the-loop or human-alone decisions for the worst-off subgroup? Some evidence points against human-in-the-loop accuracy, and the oversight mechanism the recommendation relies on is itself fragile.
- **Down: values and method.** How much contestability should weigh against aggregate lives is a values choice that evidence cannot settle. All five lenses also share one model's priors, so their agreement on the core is not independent confirmation, and it did not raise the score.

### What would change this recommendation

- **Evidence for AI alone.** Robust prospective evidence that AI alone is at least as good for the worst-off subgroup in a decision class, together with a contest channel that works without per-case review, would justify raising that class's ceiling through the upgrade path in item 6.
- **Evidence that review cannot be made real.** If real review cannot be bought at a feasible cost in a domain, the paper must choose between two options there: keep automated systems out of adverse determinations altogether, or accept grade 2 with a right to human review after the decision. The "named human decision-maker" design would not be sound in that domain.
- **A weapons treaty.** If a binding international instrument on autonomous weapons is concluded, or abandoned, revise the military section and Recommendation 5.
- **Market scope.** If "discretionary AI market interventions" means public authorities only, most of the market concern in item 8 falls away.
- **Expert testing.** Testing the revisions against real cases with domain experts would raise confidence in the restated core. Without new outcome evidence, it cannot raise confidence in the exact ceiling values by much.

### Top next steps for the author

1. Rewrite the Section 1 thesis and the Section 2 definitions (items 1 and 2), then rebuild Section 5 around the derivation procedure and the escalation rule (items 3 to 5).
2. Draft the upgrade path and the retrodiction test (items 6 and 7), and run the retrodiction with a clinician and a social-security lawyer.
3. With an international humanitarian law (IHL) specialist, rework Section 3.2, Section 6.3 and the military rows. Then rewrite the market paragraph and decide the scope of collective allocation (item 8).
4. Verify every external source listed in the transparency report before adding it.

## 2. Convergence zones

Each zone names the lenses that reached it independently and says whether the agreement rests on shared evidence or on a shared assumption.

**C1. The thesis is less precise than the framework.**
- *Lenses:* analytical (the final/bounded line is undefined against the Section 2 definition and Table 1); creative (authority recast as a licence issued per permission); critical (the dignity argument proves too much as worded).
- *Basis:* shared evidence, namely the paper's own text.
- *Strength:* strong, because this is a textual check rather than a judgement. All three lenses still read the same text through the same model.

**C2. Escalation and triage are allocation when capacity is fixed.**
- *Lenses:* analytical (the paper's own escalation and deprioritisation rows collide); systems (in a fixed-capacity queue, others bear the cost of a false flag); creative (fixed capacity as a ceiling feature); pragmatic (a design where every case still receives a human read keeps escalation at grade 2).
- *Basis:* shared evidence (the Obermeyer case as the paper describes it), plus an inference about fixed-capacity queues that is close to definitional.
- *Strength:* strong.

**C3. Oversight is the load-bearing part, and the weakest, and it is least tested at grade 1.**
- *Lenses:* analytical (the conditions formally govern only grades 2 to 4); critical (oversight may be infeasible, and front-line reviewers risk becoming crumple zones); systems (declaration gaming and erosion of reviewer capacity); pragmatic (protocols for seeded errors and override metrics).
- *Basis:* shared evidence, the human-factors literature the paper itself cites. The shared remedy, measured and resourced review, rests on a shared assumption: that oversight quality can be measured without the measures being gamed.
- *Strength:* medium.

**C4. Ceilings need a two-way mechanism that responds to evidence.**
- *Lenses:* critical (the lives-saved objection and the failure conditions); creative (authority as a revocable, upgradable licence); pragmatic (a conservative default is justified only if an upgrade path exists).
- *Basis:* partly the paper's own commitments (it treats the asymmetry premise and the drift dynamics as empirical); partly a shared assumption that outcome evidence should move ceilings at all.
- *Strength:* medium. A reader who holds a categorical view of lethal force would reject that assumption for the military rows.

**C5. The tests need domain-specific forms.**
- *Lenses:* analytical (contestability cannot be met in lethal force, and the grade scale has a gap in the military case); systems (adversarial adaptation in military and fraud settings, and monoculture in credit); pragmatic (existing certifiers differ by domain).
- *Basis:* shared evidence (the paper's own remark on lethal decisions in 4.2 and its market answerability claim), plus external regimes cited from memory.
- *Strength:* medium to strong.

**C6. The core direction survives.**
- *Lenses:* all five.
- *Basis:* mixed. Documented failures and human-factors evidence support it. So does a value premise that every stream shares: a person's ability to be heard, and to have an outcome reversed, carries weight beyond aggregate accuracy.
- *Strength:* weaker than five-way agreement suggests. One model produced all five streams, and the value premise is common to all of them, so this agreement is not independent verification. It is the main reason the confidence score was not raised for agreement.

## 3. Productive divergences

**D1. Accuracy against contestability.**
- *The disagreement:* The critical lens holds that if AI alone does better for the worst-off subgroup, the grade-1 ceilings cost lives and the paper must say so. The pragmatic lens holds that the irreversibility of the harms and the cheapness of raising a ceiling later justify a conservative default.
- *Source:* values (aggregate welfare against individual standing), plus a factual dispute about the size and distribution of any advantage for AI alone.
- *Judgement:* productive. This is a real trade-off the author must own and state in the text. The upgrade path narrows it but does not dissolve it.

**D2. Fixed table or derivation procedure.**
- *The disagreement:* The pragmatic lens says committees need a table they can apply. The creative lens says a derivation procedure makes the ceilings defensible and general.
- *Source:* different weights on usability and generality.
- *Judgement:* mostly noise, because both can be kept: the procedure as the argument and the table as its worked examples.

**D3. The military line.**
- *The disagreement:* The pragmatic lens notes that a bright-line ban on delegated engagement of persons is cheaper to verify than a performance-based ceiling, and it matches the ICRC position. The critical and systems lenses point to the costs: operations without communications, adversaries defecting from coordinated limits, and the humanitarian argument for autonomy.
- *Source:* values (dignity, and what it means to be killed by a machine), different time horizons (arms-race dynamics), and a factual dispute (whether autonomy can improve distinction).
- *Judgement:* productive. The author must decide whether the line is categorical, holding whatever the performance evidence shows, or a ceiling that moves with evidence, and must say which.

**D4. The named human decision-maker.**
- *The disagreement:* The pragmatic lens values a named decision-maker of record as the cheapest answerability device, and one familiar in law. The critical lens warns that naming front-line reviewers creates moral crumple zones.
- *Source:* different units of accountability, the individual or the institution.
- *Judgement:* productive, but largely resolvable by layering answerability (item 9).

**D5. Scope.**
- *The disagreement:* The pragmatic lens would cut or shrink the market section under a word limit. The creative lens notes that the question names economic allocation, so collective allocation (and insurance and employment) belong in scope.
- *Source:* different weights on focus and completeness.
- *Judgement:* productive. The author must choose, and either choice is defensible if it is made explicit.

**D6. Credit refusals.**
- *The disagreement:* The systems lens finds that shared models make refusals correlated across lenders and hence hard to reverse, which supports the paper's grade-1 default. The pragmatic lens finds grade 1 costly at volume and suggests automatic approval with human review of refusals, or grade 2 with an automatic, fast, free human review on request. Several jurisdictions appear to regulate close to the latter (verify).
- *Source:* a factual dispute (how reversible a refusal is, which depends on how diverse the market's decision-makers are), plus values.
- *Judgement:* productive and conditional on the domain. The paper should state the condition under which grade 2 is acceptable, for example evidence of diverse decision-makers plus a review channel that works.

## 4. The five lens streams

Each lens was run as its own stream and did not draw on another lens's conclusions while it worked. Steps are labelled as evidence (from the paper, or external and from memory), assumption or inference.

### 4.1 Analytical lens

**Reasoning chain**
1. *Evidence (paper).* Section 1 denies AI "final decision authority over determinations about particular persons" but allows "bounded authority" over executional, escalating or protective steps and over favourable decisions. Section 2 defines a decision about a person as any determination that changes treatment, legal or social status, liberty, money or access to a service.
2. *Inference.* The thesis's own exceptions are determinations about persons under that definition. Table 1 puts dosing at grade 3 and a protective stop at grade 4, which change treatment, and favourable approvals at grade 2, which change money or access, and all of them take effect without per-case approval. The paper never defines the boundary between "final" and "bounded" in grade terms. The line it actually draws appears only in Section 5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
3. *Evidence (paper).* Section 2 says a change of queue position is "not such a determination". Section 5 rates escalation at grade 2 because a wrong flag "costs little". The medical case is a system that selected patients into a scarce programme and harmed the patients it failed to select.
4. *Inference.* Where capacity is fixed, escalating one case moves others down. One system can therefore fall in the grade-2 escalation row and the grade-1 deprioritisation row at once, and the paper's own lead case falls in that gap.
5. *Inference.* The text has three structural gaps:
   - (a) The five conditions govern grades 2 to 4 only, while the adverse classes sit at grade 1. The real-override test therefore does not formally reach the rows where rubber-stamping matters most.
   - (b) Grades 3 and 4 combine two dimensions: whether a human stop works in time, and who sets the limits. The Section 3.2 case has human-set limits and no timely veto, so it fits neither grade. The reply in 6.3 argues against grade 4 when the contested case is an envelope.
   - (c) No decision-maker, human or machine, can meet the contestability test in lethal force.
6. *Inference (counted from the paper).* The evidence base is 13 references, two documented cases and one hypothetical case. One of the documented cases, Robodebt, was a rule-based income-averaging scheme, not machine learning. All twelve ceilings are design judgements: six at grade 1, two at grade 2, three at grade 3 and one at grade 4. No comparative performance evidence is offered, as 6.1 and 8 concede.

*Lens conclusion:* the framework is well built and unusually operational. It needs four repairs: a precise thesis, a reclassified escalation category, a grade scale split into its two dimensions, and tests adapted to each domain. Once restated, the core claim stands.

**Key concepts with weights**

| Concept | Weight | Why this weight |
|---|---|---|
| Thesis precision against the table | 0.90 | It is the central claim and the first thing a referee checks. |
| Escalation as hidden allocation | 0.85 | The paper's own lead case sits in this gap. |
| Scope of the conditions (grade 1 untested) | 0.75 | The highest-stakes adverse classes escape the override test. |
| Authority versus decisional control | 0.65 | Defining authority to require answerability makes "AI cannot hold authority" partly true by definition. |
| Narrow, failure-only evidence base | 0.60 | Serious, but fixable from existing literature without new studies. |

**Mind map**
```
Analytical
- Thesis vs framework
  - "Decision about a person" (S2)
    - Dosing g3, protective stop g4, approvals g2 fit the definition
  - "Final" vs "bounded" undefined in grade terms
    - Operative line already in S5: adverse, value-laden, force on persons
- Category stability
  - Escalation g2 vs deprioritisation g1
    - Fixed capacity makes them one act
    - Obermeyer: selection system, harm to the unselected
- Scale and conditions
  - Conditions apply to grades 2-4 only
    - Grade-1 adverse rows untested for real override
  - Grades 3/4 conflate "stop works" and "who sets limits"
    - Case 3.2 falls between; 6.3 answers the wrong grade
  - Contestability unmeetable in lethal force
- Argument base
  - Answerability built into the definition of authority
  - 2 documented cases + 1 hypothetical; Robodebt not ML
  - 12 ceilings, all judgements (6/2/3/1 across grades 1-4)
```

### 4.2 Creative lens

**Reasoning chain**
1. *Assumption.* A framework is more defensible when readers can dispute its premises rather than only its verdicts.
2. *Inference.* Table 1 gives twelve verdicts. A procedure over stated features would turn them into one argument with worked examples and extend it to domains the paper does not cover. The features are direction, reversibility, detection delay, fixed capacity, volume against review capacity, the affected person's ability to contest, a validated outcome label, the counterfactual without the system, and third-party harm.
3. *Inference.* The asymmetry premise uses the direction of a decision as a proxy for the irreversibility of its errors, the same proxy-for-target move the paper criticises in Obermeyer. Using reversibility and detectability directly also covers two cases direction misses: approvals that harm, such as over-indebtedness, and zero-sum allocation, where one person's favourable decision is another's adverse one.
4. *Evidence (external, from memory; verify).* Protective automation can kill. The Boeing 737 MAX's MCAS was a protective function implicated in two crashes, in 2018 and 2019. The paper's grade-4 exception should therefore require two things beyond a countermand being available "at once": the stop fails safe when a sensor faults, and the countermand works in the time actually available.
5. *Inference.* "Economic allocation" covers two different things. One is determinations about particular persons: credit, benefits, jobs, insurance. The other is collective allocation: budgets, prices, market-wide rules. Collective allocation needs a different licensing condition, democratic authorisation and public justification, rather than individual contestability. Naming the split widens the paper's reach without diluting its thesis.
6. *Inference.* Reframe the contribution as a licence: authority is issued per permission, priced in review capacity, revocable on drift and upgradable on evidence. The thesis survives this reframing intact; what changes is that the upgrade path and the cost of the conditions become part of it.

**Key concepts with weights**

| Concept | Weight | Why this weight |
|---|---|---|
| Feature-based ceiling procedure | 0.85 | Turns verdicts into contestable premises and generalises beyond three domains. |
| Reversibility in place of direction | 0.80 | Fixes the proxy problem, harmful approvals and zero-sum allocation in one move. |
| Authority as a revocable, upgradable licence | 0.70 | Gives the paper a two-way mechanism and a cost model. |
| Person-level versus collective allocation | 0.60 | Answers the question's "economic allocation" without a second paper. |
| Protective-function failure (MCAS analogy) | 0.50 | Sharpens the grade-4 exception, but it is an analogy, not evidence about medicine. |

**Mind map**
```
Creative
- Reframe the thesis
  - Authority as licence
    - Per permission; priced in review capacity; revocable; upgradable
- Replace proxies
  - Direction -> reversibility and detectability
    - Harmful approvals; zero-sum triage; third parties
- Procedure, not verdicts
  - Feature list
    - Direction, reversibility, detection delay, capacity, volume,
      contest ability, label validity, counterfactual, third parties
  - Table 1 as worked examples
- Split "economic allocation"
  - Person-level determinations -> contestability
  - Collective allocation -> democratic authorisation, public justification
- Analogies and alternatives
  - Aviation: MCAS shows "protective" is not "safe"
  - Clinical delegation: standing orders, supervision levels
  - Notice-before-effect for adverse automated outputs
  - Opt-in human channel; a diverse second model as challenger
```

### 4.3 Critical lens

**Reasoning chain**
1. *Evidence (paper), then inference.* The paper concedes four things: its ceilings are design judgements, the asymmetry premise is unestablished, the drift dynamics are hypotheses, and the lives-saved premise "cannot yet" be supplied. The specific content of the recommendation therefore rests on values plus untested hypotheses. That is legitimate in a normative paper, but it obliges the paper to state the price of its values.
2. *Inference.* The comparison is skewed: real AI failures are set against an idealised answerable human. Human institutions have their own responsibility gaps (the "many hands" problem). Robodebt had named, answerable officials and ministers and still ran for years, so answerability on paper did not stop it. The paper must show that its conditions would have caught its own cases.
3. *Evidence (external, from memory; verify).* Some evidence cuts against the human-in-the-loop default:
   - experiments in which radiologists given AI assistance did not improve on average
   - algorithm aversion, where people discount an algorithm after seeing it err
   - a critique arguing that human-oversight policies often fail and lend legitimacy to flawed systems (Green, 2022)
   - the "moral crumple zone", where the nearest human absorbs blame for a system's failure (Elish, 2019)

   The paper engages none of these.
4. *Inference.* As worded, the dignity argument in 4.2 proves too much. Rule-based human adjudication also fails to take a person's situation into account, and so do the paper's own grade-3 and grade-4 rows. A defensible version requires individual consideration on request and before any irreversible effect, not a human at every determination. The thesis should be narrowed to match.
5. *Inference.* Who bears the cost:
   - Under-resourced hospitals and agencies, and their clients, bear most of the cost of strict ceilings and expensive certification. The 6.6 reply, "fund that capacity", assumes money that may not exist.
   - Front-line reviewers named as decision-makers of record bear the blame.
   - In the military domain, civilians might bear the cost of the prohibition, if validated systems could distinguish targets better than stressed humans (the humanitarian argument for autonomy; Arkin, 2009; verify). That empirical claim is contested, but the paper should meet it.
6. *Inference.* The leading view fails under any of three conditions:
   - (a) review cannot be made real at a feasible cost;
   - (b) AI alone is better for the worst-off subgroup, and a contest channel works without per-case review;
   - (c) adversaries defect from coordinated limits.

   None of these is shown to hold generally. They narrow the thesis and expose its price; they do not defeat it for adverse, irreversible, value-laden determinations.

**Key concepts with weights**

| Concept | Weight | Why this weight |
|---|---|---|
| Idealised-human comparator | 0.85 | The most common, and most damaging, referee objection. |
| Oversight fragility and moral crumple zones | 0.80 | It attacks the mechanism the whole framework relies on. |
| Failure-selected cases | 0.70 | Failure cases alone cannot show what the conditions buy. |
| Distributional cost of compliance | 0.65 | The paper's own equity concern cuts both ways. |
| Overreach of the dignity argument | 0.60 | Real, but fixable by tying dignity to an exception channel. |

**Mind map**
```
Critical
- Concessions
  - Ceilings are judgements; asymmetry unestablished; drift hypothesised
    - Values carry the recommendation: state the price
- Comparator
  - Idealised human vs real AI
    - Many hands; Robodebt had answerable officials
    - Retrodiction test needed
- Oversight fragility
  - Human-AI teams may underperform AI alone
  - Oversight policies may legitimise flawed systems
  - Reviewer as crumple zone
- Dignity argument
  - Proves too much as worded
    - Individual consideration on request, before irreversible effect
- Who pays
  - Under-resourced institutions and their clients
  - Front-line reviewers
  - Civilians, if autonomy discriminates better (contested)
- Failure conditions
  - Review infeasible
  - AI alone better for worst-off + working contest channel
  - Adversary defection
```

### 4.4 Systems-thinking lens

**Reasoning chain**
1. *Evidence (paper).* The paper models two reinforcing loops, authority creep and the label loop, and one delay, the late detection of collective harms. It answers them with downgrade triggers checked quarterly to annually.
2. *Inference.* Fixed capacity couples the queue. Every escalation lengthens the wait of everyone not escalated, so the cost of a false flag falls downstream on other people, not on the person flagged. Reviewer time is the real binding constraint, and the framework does not model it as a stock.
3. *Inference.* Declaring the grade (Recommendation 1) adds a third reinforcing loop. Obligations rise with the declared grade, so a deployer gains by declaring "decision support" while operating at an effective grade 2 or 3, and the costlier the conditions, the stronger that pull. Downgrading the licence does not correct an effective grade that has already risen, so the grade has to be read from observed behaviour.
4. *Inference, resting on external evidence (algorithmic monoculture; Kleinberg and Raghavan, 2021; verify).* Certification costs favour a few large vendors and shared models, and shared models make correlated errors across institutions. A person refused by one lender, or flagged by one agency, is then refused or flagged by most. That removes the reversibility the asymmetry premise depends on.
5. *Inference.* There is also a capacity-erosion loop. Automation reduces the hiring, training and practice of reviewers, which makes the review conditions harder to meet, which builds pressure to relax them. Grade-1 rows are not immune, because deference and deskilling occur under advice too.
6. *Inference.* Delays and displacement compound this:
   - Subgroup harms in medicine and welfare surface over months or years, longer than quarterly or annual re-checks.
   - An upstream model update changes behaviour without any local "material change".
   - Strict ceilings in regulated channels push activity into less regulated ones.
   - Adversaries in military and fraud settings learn and exploit known envelopes.

   Taken together, the loops show that oversight decays unless it is enforced by structure. That supports the paper's core and argues for structural safeguards rather than discretionary ones.

**Key concepts with weights**

| Concept | Weight | Why this weight |
|---|---|---|
| Functional (observed) grading | 0.80 | Closes the main gaming loop. |
| Monoculture and correlated refusals | 0.75 | The reversibility of a refusal depends on how diverse the decision-makers are. |
| Reviewer capacity as an eroding stock | 0.70 | The conditions get harder to meet over time. |
| Detection delay against re-check interval | 0.60 | Triggers fire late where harm is slow to show. |
| Displacement and adversarial adaptation | 0.45 | Real, but its size is unknown. |

**Mind map**
```
Systems-thinking
- Loops the paper has
  - Authority creep (reinforcing)
  - Label loop (reinforcing)
  - Downgrade triggers (balancing, delayed)
- Loops it lacks
  - Declaration gaming (reinforcing)
    - Grade from time per case, override rate, information access
  - Capacity erosion (reinforcing)
    - Hiring, training, practice
  - Monoculture (reinforcing)
    - Shared models -> correlated refusals -> refusal not reversible
- Couplings and delays
  - Fixed-capacity queues: false flags cost others
  - Outcome labels lag harm; upstream model updates
- Downstream
  - Affected persons; displaced queue members; reviewers;
    vendors; regulators; adversaries
- Displacement
  - Regulatory arbitrage; exploitation of known envelopes
```

### 4.5 Pragmatic lens

**Reasoning chain**
1. *Assumption.* The decision is the author's revision plan under ordinary limits: one revision cycle, a word limit, and no new empirical study.
2. *Inference.* Cheap, high-yield changes come first:
   - restate the thesis and define "final authority";
   - add the escalation rule (a design in which every case still receives a human read keeps escalation at grade 2);
   - clarify the market row, or, if the word limit binds, shrink the market section to a scope note;
   - cite the AI Act from the Official Journal;
   - number the tables in order.

   Committees need a table they can apply, so keep Table 1 even if a derivation is added.
3. *Inference, counted from Table 2.* As written, Table 2 implies up to five different certifying bodies per deployment, with re-checks from quarterly to annual. Map each certifier to an existing institution instead:
   - AI Act conformity assessment and deployer duties
   - medical-device regulators
   - Article 36 weapons reviews
   - credit regulators and adverse-action rules
   - ombudsmen and tribunals for welfare

   This shows what the paper adds to current law and what it would cost, and it avoids implying new bodies the paper cannot fund.
4. *Inference.* Some rows are expensive as written. Grade 1 for high-volume credit refusals means a human decision on every refusal. Cheaper designs exist: automatic approval with human review of refusals, or grade 2 with an automatic, fast, free human review on request, which is close to how several jurisdictions already regulate (verify). Two devices are cheap: a named decision-maker of record is the cheapest answerability device and is familiar in law, and bright-line rules (no delegated engagement of persons) are cheaper to verify than ceilings that depend on performance.
5. *Inference.* The tests need protocols and thresholds. Seeded errors should run in simulation or shadow mode, never on live patients or claimants; staff should be informed by policy, and the seeds rotated. Override rates should be read together with accuracy, so the trigger does not reward token overrides. Without inventing numbers, the paper can give a method for setting thresholds: pre-registered non-inferiority margins against current human practice, judged for the worst-off subgroup.
6. *Inference.* Reversibility favours the paper's default. A ceiling set too low can be raised by re-certification, whereas wrongful deaths, debts and denials of care often cannot be undone. This supports a conservative default only if an upgrade path exists and the cost of delay is counted. Implementation risks remain: compliance theatre, too few certifiers, and transition costs for current credit and welfare practice.

**Key concepts with weights**

| Concept | Weight | Why this weight |
|---|---|---|
| Conditions mapped to existing institutions | 0.80 | Makes the framework usable and shows what it adds. |
| Policy reversibility against harm irreversibility | 0.75 | The strongest practical support for the core. |
| Revision triage under a word limit | 0.70 | Not every gap can be closed in one paper. |
| Cost of grade-1 rows at volume | 0.65 | Decides whether the credit row can realistically be adopted. |
| Test protocols and threshold method | 0.55 | Necessary detail at low cost. |

**Mind map**
```
Pragmatic
- Cheap fixes
  - Thesis and definitions; escalation rule
  - Market scope; official AI Act citation; table order
- Medium fixes
  - Certifiers mapped to existing regimes
    - AI Act; device regulators; Art 36 reviews; credit rules; ombudsmen
  - Upgrade path with an evidence standard
  - Threshold method: non-inferiority, worst-off subgroup
- Cost and feasibility
  - Credit refusals at volume
    - Auto-approve + human review of refusals; or grade 2 + review on request
  - Bright lines cheaper to verify than ceilings
  - Named decision-maker: cheap, familiar
- Protocols
  - Seeded errors in simulation or shadow mode
  - Override rates paired with accuracy
- Implementation risks
  - Compliance theatre; certifier capacity; transition costs
- Out of scope this round
  - New empirical studies; a full theory of collective allocation
```

## 5. Transparency report

**Framing (step 1).**
- *Restated question:* what revisions would make this paper the strongest defensible argument on whether AI should hold decision authority over sensitive human matters in medicine, military force and economic allocation, and how much confidence does its central recommendation deserve?
- *Decision:* a prioritised revision plan and a calibrated confidence score.
- *Constraints:* one paper, a normative method, ordinary length limits and no new empirical study. The analysis used only the paper and the model's own knowledge.
- *Stakeholders:* the author and referees; the paper's stated readers (hospital governance committees, procurement officers, regulators, ethics boards); affected persons (patients, people in conflict zones, claimants, borrowers); front-line reviewers; vendors; states.
- *What a good answer must do:* find the weakest load-bearing parts, strengthen the paper without abandoning its core unless that is warranted, separate values from facts, and give a calibrated confidence.

**Assumptions.**
1. "Strongest defensible" means able to survive expert peer review in applied ethics and AI governance, and usable by the paper's stated readers.
2. "Central recommendation" means the Section 1 thesis, with Table 1 and Section 7 as its implementation.
3. External works are cited from memory, with knowledge running to mid-2026, and were not checked here. The current date is October 2026, so later legal and diplomatic developments are unknown.

The question was specific enough that no clarifying question was needed.

**Which lens drove which part of the recommendation.**
- *Analytical:* items 1 and 3, and the scale and scope gaps in items 8 and 9.
- *Creative:* items 4 and 5, the licence framing, and the split between person-level and collective allocation.
- *Critical:* items 2 and 7, the moral-crumple-zone part of item 9, and most of the downward pressure on confidence.
- *Systems-thinking:* the functional-grading, monoculture, capacity and delay parts of item 9.
- *Pragmatic:* the institutional mapping, the protocols, the threshold method, the conditional ordering, and the reversibility argument, which is the main upward factor on confidence.

**What was weighted down or set aside, and why.**
- *New empirical studies:* outside the scope of a normative paper; noted as future work.
- *Numerical thresholds:* there is no evidence for any value, and inventing one would breach the method.
- *A full theory of collective allocation:* a scope note or a short section is enough for this paper.
- *Displacement and regulatory arbitrage:* real, but their size is unknown.
- *The MCAS and clinical-delegation analogies:* used to test the argument, not as evidence about medicine.
- *Press reports of AI-assisted target generation in recent conflicts:* relevant to rubber-stamp risk at grade 1, but contested and not checkable here, so not relied on. The author may assess them with care.

**Confidence score and its drivers: 62/100, for the central recommendation as stated.**
- It rose for convergent evidence of failure and for the reversibility asymmetry.
- It fell for three reasons: the undefined final/bounded line and the unstable escalation category; the unanswered comparative-performance question together with fragile oversight; and the dependence of the core on values.
- The restated core is better supported than 62; the ceiling values, the market row and the basis of the military line are less so.
- Agreement among the lenses did not raise the score.

**What this reasoning cannot establish.**
- Whether AI alone outperforms human-in-the-loop decisions for the worst-off subgroup in any decision class.
- Whether review can be made real at a feasible cost in a given setting.
- How to weigh contestability against lives, which is a values choice.
- What has happened since mid-2026 to the EU AI Act's high-risk timetable and to international negotiations on autonomous weapons.
- Whether the external works named here say exactly what is attributed to them.

**What to verify with sources, data or experts before use.**
- *Medicine:*
  - IDx-DR FDA De Novo authorisation (2018)
  - the MASAI mammography trial (Lancet Oncology, 2023)
  - the WHO consolidated guidelines on TB screening (2021), on computer-aided detection
  - Wong et al. (JAMA Internal Medicine, 2021), on the Epic sepsis model
  - approvals of closed-loop insulin systems
  - Agarwal et al. (2023), the radiology experiment
  - California SB 1120 (2024), and any CMS guidance on algorithmic coverage denials
- *Military:*
  - Additional Protocol I, Arts 36, 48, 51 and 57
  - US DoD Directive 3000.09 (2023)
  - the findings on the 2003 Patriot fratricides
  - Vincennes and Iran Air 655 (1988)
  - Arkin (2009)
  - the status of the CCW Group of Governmental Experts and of UN General Assembly resolutions on lethal autonomous weapons, including the 2023 call by the UN Secretary-General and the ICRC for an instrument by 2026
- *Economy and law:*
  - GDPR Art 22
  - CJEU C-634/21, SCHUFA (2023)
  - the Dutch childcare-benefits scandal and the SyRI judgment (District Court of The Hague, 2020)
  - ECOA, Regulation B and CFPB Circular 2022-03
  - the EU Platform Work Directive (2024)
  - SEC Rule 15c3-5 and MiFID II Art 17
  - Knight Capital (2012)
  - EU AI Act Arts 2(3), 14, 26 and 86 and Annex III, and its current application dates
- *Theory:*
  - Green (2022); Elish (2019); Thompson (1980); Dietvorst et al. (2015)
  - Kleinberg and Raghavan (2021)
  - Simpson and Müller (2016); Tigard (2021)
  - Sheridan and Verplank (1978); Parasuraman, Sheridan and Wickens (2000)
  - Citron (2008); Binns (2022)
- *The paper's own record:* the Royal Commission's findings on what officials knew, and when, before running the Robodebt retrodiction.

**Professionals who should review it.** This analysis is not legal, medical, military or financial advice. Before the paper relies on its domain claims, they should be reviewed by:
- a clinical safety officer or clinician-informaticist, for the medical rows and the escalation rule;
- a specialist in international humanitarian law with experience of weapons reviews, for the military section;
- a consumer-credit and data-protection lawyer, for the credit rows;
- an administrative or social-security law expert, for the welfare rows and the Robodebt retrodiction;
- a human-factors researcher, for the override tests and seeded errors;
- a financial-markets regulator or lawyer, for the market rows.

**What you still have to decide.**
- The venue and audience, which set the order of the revisions.
- Whether markets and collective allocation stay in scope.
- Whether the military prohibition is a categorical line or a ceiling that moves with evidence. This is a values choice.
- How much delay or lost accuracy the paper accepts for contestability, and whether to state that price in the text.
- Whether credit refusals stay at grade 1 or move to grade 2 with automatic review on request.

**Method notes.** All five lenses come from one model in one pass, so their agreement is not independent verification. This matters most for convergence C6 and therefore for the confidence score. The output is plain Markdown, so lenses are labelled by name rather than colour-coded.
