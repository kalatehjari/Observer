# Observer analysis of the agent draft

**Question.** How should the agent draft be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

**Input.** 01-agent-draft.md only. The five lenses were worked in one pass, in the order the method gives. Each lens was worked from the draft text, not from another lens's output.

## 1. Recommendation and confidence

**Recommendation.** Keep the tiered framework and its five conditions, but do not treat the draft as ready. Revise it in this order:

1. Resolve the credit-refusal row. Table 1 puts credit refusals at grade 2, which lets the system's refusal take effect unless a human overrides it. That contradicts the asymmetry principle in Section 5, which requires a human decision-maker of record for adverse steps, and it contradicts Section 6.4, which says grade 2 is not defensible where high-volume review is impossible. Move refusals to grade 1, or state exactly what review capacity and statistical audit would justify grade 2 and write those conditions into the table.
2. Present the asymmetry principle as a premise, with its rationale and a stated condition under which it should be reversed. Name the values choice inside it, which is whose errors count.
3. Remove, source or label the claim in Section 6.1 that most of the triage benefit comes from escalation.
4. Make the five conditions operational: one test for each, the body that certifies it, and a re-certification interval.
5. Add the drift risks the draft omits (authority creep, label loops and delayed detection of collective harms), with downgrade triggers. Add a short section on costs and on low-resource settings, which is the strongest practical counterargument.
6. Repair the reference list, and state that the ICRC position is non-binding and that the military case is illustrative.

**Conditional element.** The credit case is the most sensitive one. If evidence shows that wrongful approvals harm third parties more than wrongful refusals harm applicants, the asymmetry should be reversed for credit. If the reverse holds, grade 2 for approvals is defensible. The draft does not contain the evidence needed to choose.

**Confidence: 62 of 100** for the draft's central recommendation: AI should not hold final decision authority over determinations about particular persons in medicine, military force or the economy, and may hold bounded authority only when five conditions hold.

- Raises it: the recommendation agrees with several independent bodies of work on automation bias, responsibility gaps and documented harm. The cited cases (Robodebt and the Obermeyer proxy) are apt. The conditions are explicit, which makes the position testable.
- Lowers it: the credit row contradicts the paper's own rules. The asymmetry premise drives the grade table but is asserted, not supported. The conditions cannot yet be checked in practice. Part of the reference list is unverified, and the central claims are normative and contested.

After the revisions above, the central recommendation would merit about 68. That figure is an estimate, not a measurement. The revisions repair internal defects but add no new evidence, so the score should not rise further on them alone.

## 2. Convergence zones

**C1. The credit row conflicts with the asymmetry rule and with Section 6.4.** Lenses: analytical (the contradiction), critical (the scope of the asymmetry rule) and pragmatic (review capacity decides whether grade 2 is realistic at all). All three read the same text, so the agreement rests on the paper's own sections. That is a textual finding, confirmed by reading, not by data.

**C2. The framework is not yet operational.** Lenses: pragmatic, analytical and systems. The pragmatic and analytical lenses both find the five conditions stated but not testable. The agreement partly rests on a shared assumption: that the paper is meant to guide institutions. The recommendations section supports that assumption, but the introduction does not state it. The agreement is weaker than it looks until the aim is stated.

**C3. The asymmetry principle is unsupported and misses some costs.** Lenses: critical, analytical and systems. The critical lens finds no source for the principle. The systems lens adds that wrongful approvals can propagate to third parties and to later decisions. The agreement rests on a shared reading of the text, since the draft cites nothing for the principle.

**C4. Authority needs sharper definitions.** Lenses: analytical and creative. The analytical lens finds the boundary between grades 2 and 3 too loose to settle cases. The creative lens proposes treating authority as a bundle of permissions. Both start from the same gap, so this convergence is partly a shared premise.

## 3. Productive divergences

**D1. Precision against usability.** The creative lens wants authority split into separate permissions: escalate, prioritise, approve, deny, act and stop. The pragmatic lens wants the three-level ladder that institutions can certify. The source is different weight given to conceptual accuracy and to the cost of certification. This is a real trade-off. Recommendation: keep the grade scale for communication, and move the permissions into the conditions and the table rather than adding grades.

**D2. Whose errors count.** The critical lens holds that the asymmetry principle may be unjust to third parties who bear the cost of wrongful approvals. The draft holds that errors which move a person toward benefit are cheaper and more correctable. The first is a values dispute about whose harm counts. The second is partly a factual dispute about the size and reversibility of each error type, which the draft does not measure. The paper must name this as a values choice and state the evidence that would reverse the principle.

**D3. Protection against access.** The critical lens favours strict ceilings because errors harm people. The pragmatic lens notes that the conditions may be unaffordable in low-resource systems, where strict ceilings would withhold benefit that is safer than nothing. The source is a values difference about the cost of error against the cost of no service, plus a factual question about capacity. The paper should say who bears each risk.

**Noise to resolve, not a divergence.** The claim in Section 6.1 that escalation supplies most of the triage benefit has no source. No lens disagrees with it. It needs a source or a label.

## 4. Lens summaries

### 4.1 Analytical

**Reasoning chain**

1. Evidence: the draft has a five-grade scale, three domain cases, a twelve-row ceiling table and five conditions.
2. Evidence: Section 5 says adverse steps need a named human decision-maker of record. Table 1 gives credit refusals grade 2.
3. Inference: under grade 2 the system's option takes effect unless overridden, so no human is the decision-maker of record for that case. The row contradicts the principle unless a statute licenses it. Recommendation 2 allows that exception, but the table does not mention it.
4. Evidence: Section 6.4 says grade 2 is not defensible in high-volume settings where meaningful review is impossible.
5. Assumption: credit decisions are high volume. The draft gives no figures, but the claim is plausible.
6. Inference: the credit row also conflicts with Section 6.4. Either the row moves, or the paper states what review would make high volume meaningful.

**Key concepts and weights**

- Internal consistency of Table 1 with the asymmetry rule, weight 0.9. It decides whether the framework can be applied at all.
- The boundary between grades 2 and 3, weight 0.7. Decisions turn on it, and the draft does not define it sharply.
- Verifiability of references, weight 0.6. Checking found missing venue and page details and some weak links.
- Empirical support for the triage claim, weight 0.5. It carries the reply to the strongest objection.
- Balance of domain coverage, weight 0.4. The military case is shorter, though its role is clear.

**Mind map**

~~~mermaid
mindmap
  root((Analytical lens))
    Consistency
      Credit row at grade 2
      Asymmetry rule in Section 5
      Clash with Section 6.4
    Definitions
      Grade 2 and grade 3 boundary
      Decision about a person
    Evidence
      Cases argue, data absent
      Triage claim unsourced
    References
      Venues and pages missing
      Weak or secondary links
~~~

### 4.2 Creative

**Reasoning chain**

1. Assumption: the obvious framing treats authority as one dial running from advice to autonomy.
2. Inference: authority is a bundle of separate permissions: to escalate, prioritise, approve, deny, act and stop. Each can be granted on its own, which removes much of the boundary problem in the grade scale.
3. Evidence: the draft already separates escalation from adverse steps in its asymmetry principle, so the bundle framing grows from the draft's own logic.
4. Inference: a two-key rule, as used in nuclear command and control, fits adverse acts. No single system may complete a denial or sanction alone, and the second key is a named human who can refuse. This is an analogy, not evidence that the rule works in these domains.
5. Inference: an envelope-protection analogy from aviation fits grade 3. The machine acts only inside limits set by the operator, and it can restrict the envelope but not expand it. This is also an analogy.
6. Assumption: analogies illuminate conclusions without establishing them, so the paper must label each one as an analogy.

**Key concepts and weights**

- Authority as separable permissions, weight 0.85. It removes the grade-boundary problem and lets the table state conditions for each permission.
- Reversibility as the organising axis, weight 0.7. The draft uses it implicitly, and making it explicit gives the ceilings a principle.
- Two-key rule for adverse acts, weight 0.6. A concrete design pattern that fits the asymmetry.
- Envelope protection for grade 3, weight 0.5. It fits well, but analogies are fragile across domains.

**Mind map**

~~~mermaid
mindmap
  root((Creative lens))
    Authority as permissions
      Escalate
      Prioritise
      Approve
      Deny
      Act
      Stop
    Two-key rule for adverse acts
      Nuclear command analogy
    Envelope protection
      Aviation analogy for grade 3
    Reversibility as organising axis
~~~

### 4.3 Critical

**Reasoning chain**

1. Assumption: the asymmetry principle, that errors toward benefit are cheaper and more correctable than errors that withhold, carries most of the grade table. The draft asserts it ("usually cheaper and more correctable") and gives no source.
2. Inference: the principle counts only costs to the person affected. A wrongful approval can impose costs on third parties and on institutions: a loan that pushes a borrower into over-indebtedness, or a flag that diverts scarce clinical attention from patients who need it. The draft does not name these costs.
3. Evidence: the claim in Section 6.1 that most of the triage benefit comes from escalation has no source and no figures.
4. Inference: the lives-saved reply depends on that claim, so the reply is weaker than it reads.
5. Assumption: grade 3 assumes that limits set in advance can be enforced in complex, changing environments. The draft offers no evidence on how well such limits hold under change.
6. Inference: the strongest outside counterargument is that strict ceilings may withhold benefit in low-resource systems. The draft addresses this only in passing.

**Key concepts and weights**

- Unexamined asymmetry premise, weight 0.9. Several rows of Table 1 depend on it.
- Unsourced claim in Section 6.1, weight 0.7. It weakens the reply to the strongest objection.
- Envelope reliability under change, weight 0.6. Grade 3 depends on it.
- Access costs in low-resource settings, weight 0.5. The strongest external counterargument.
- Status of the ICRC position, weight 0.3. It is a non-binding recommendation, and the paper should say so.

**Mind map**

~~~mermaid
mindmap
  root((Critical lens))
    Asymmetry premise
      Third-party costs missing
      Integrity costs missing
    Unsourced claim in 6.1
    Envelope reliability
      Changing conditions
    Access trade-off
      Low-resource settings
    ICRC status
      Non-binding recommendation
~~~

### 4.4 Systems-thinking

**Reasoning chain**

1. Assumption: the draft treats each grade as a fixed ceiling. In practice ceilings drift under cost and throughput pressure.
2. Inference: authority creep is a reinforcing loop. Shorter review windows mean fewer cases reach reviewers, reviewers lose practice and override less, so the effective grade rises toward grade 4 with no formal change.
3. Inference: label loops reinforce bias. In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern. This is an assumption about such systems, not a cited finding.
4. Inference: in medicine, prioritisation decides which patients are seen, which shapes the outcome data used to train the next model. The Obermeyer proxy is an early example of such a loop.
5. Inference: for collective harms in markets, and in some military settings, the delay between harm and detection is longer. The draft's "correctable" criterion may then fail in practice.
6. Assumption: the framework needs monitoring and downgrade triggers, not only entry conditions.

**Key concepts and weights**

- Authority creep through eroding override capacity, weight 0.85. The most likely way the framework fails in practice.
- Label loops from enforcement, weight 0.7. Explains why bias persists after a single correction.
- Detection delay for collective harms, weight 0.6. Matters for the market and military tiers.
- Deskilling as a loop with reviewer capacity, weight 0.6. Links Section 4.5 to Section 6.4.

**Mind map**

~~~mermaid
mindmap
  root((Systems lens))
    Authority creep
      Shorter review windows
      Fewer overrides
      Effective grade rises
    Label loops
      Enforcement creates labels
      Model repeats enforcement
    Deskilling loop
      Fewer cases, less skill
    Delayed detection
      Collective harms
    Remedy
      Monitored downgrade triggers
~~~

### 4.5 Pragmatic

**Reasoning chain**

1. Evidence: the draft lists five conditions but gives no operational test for any of them. The only concrete test is the recommendation to seed reviews with known errors (Recommendation 4).
2. Inference: a hospital or regulator could not apply the framework next month. It would need a certifying body for each condition, the evidence each must produce, and a re-check interval.
3. Assumption: the audits, logs, seeded reviews and subgroup error reports the framework needs have real costs in staff, data and time. The draft does not estimate them or say who pays.
4. Evidence: the named-decision-maker rule, and the human-oversight requirement for high-risk systems in Article 14 of Regulation (EU) 2024/1689 (Official Journal, 12 July 2024), give existing legal hooks. Attaching the framework to them makes implementation more plausible.
5. Inference: the next actions are a one-page checklist per tier, three measurable indicators per condition (for example override latency, subgroup error gap and the share of decisions with a stated reason), downgrade triggers and a costs section.
6. Assumption: reversibility is the best organising principle for implementation.

**Key concepts and weights**

- Operational tests for the five conditions, weight 0.9. Without them the framework cannot be applied.
- Certification and re-certification rules, weight 0.7. Someone must decide whether a condition is met.
- Costs and reviewer capacity, weight 0.6. It decides whether grade 2 is realistic at all.
- Existing legal hooks, weight 0.6. They attach the framework to law that already exists.

**Mind map**

~~~mermaid
mindmap
  root((Pragmatic lens))
    Operational tests
      One test per condition
      Measurable indicators
    Certification
      Who certifies
      Re-check interval
    Costs and capacity
      Reviewers
      Audits and logs
    Legal hooks
      EU AI Act Article 14
      Statutory exceptions
    Next steps
      Checklist per tier
      Downgrade triggers
~~~

## 5. Transparency report

**Framing and assumptions.** The question concerns the draft's quality and its central recommendation, not the truth of the wider debate. The assumed audience is academic and policy readers, and the assumed length is 2,500 to 3,500 words. The paper is assumed to guide institutions, although the introduction does not say so. The draft's cases are assumed to be illustrative rather than representative. The military case is treated as illustrative, following the draft's own framing.

**Which lens drove which part.** The analytical lens found the credit contradiction and the definition gap. The critical lens drove the asymmetry premise, the unsourced claim in Section 6.1 and the access trade-off. The systems lens drove authority creep and the label loops. The pragmatic lens drove the operational tests, the costs, the legal hooks and the next steps. The creative lens drove the bundle framing and the two-key rule.

**What was weighted down or set aside, and why.** The creative suggestion to abolish grade 2 entirely was set aside. It would remove real uses, such as low-risk support for escalation in workflows, and its evidence is weak. The paper should raise it as an option and leave the reader to weigh it. The aviation analogy was kept as illustration only, at weight 0.5. The ICRC position was kept, but its non-binding status must be stated.

**Confidence and its drivers.** 62 for the draft, and about 68 after the revisions, as estimated in Section 1.

**What the reasoning cannot establish.** It cannot say whether the asymmetry principle holds in practice in any domain, because that needs error and harm data the draft does not contain. It cannot say how often real override reviews are meaningful. It cannot establish the legal position in jurisdictions beyond the EU and Australia. It cannot settle the normative disagreements in D2 and D3.

**What to verify with sources, data or experts.** Venue, volume and page details for Bainbridge (1983), Matthias (2004) and Sparrow (2007), which the reference check did not fully confirm. The Obermeyer DOI, which was not confirmed. Any factual claim about how clinicians, military units or lenders use automated tools today. Any Robodebt figures added later.

**What the person still has to decide.** Whether credit refusals should sit at grade 1 or grade 2. How to weigh harms to third parties against harms to the person affected. How much error to accept in exchange for access in low-resource systems. How broad the military case should be.

**Limits.** All five lenses come from the same model, so their agreement is not independent verification. The analysis touches medical, military and legal questions. It is not professional advice, and qualified clinicians, lawyers and military ethicists should review the revised paper before anyone relies on it.
