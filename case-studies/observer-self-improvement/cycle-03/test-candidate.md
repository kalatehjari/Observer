Model ID: claude-opus-5-5

# Observer analysis: revising "Graded Authority for AI over Sensitive Human Matters"

**Question.** How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

**Depth.** Full version, because the question is high-stakes. Finding IDs: C = conflict within the paper, G = gap, W = claim about the world, K = convention. Each finding is stated in full once, in section 3. Elsewhere it is cited by ID only.

## Summary

**Recommendation.** Keep the thesis and the tiered design, but restate the thesis in the paper's own grade terms. Then revise in three passes:
1. Repair the conceptual core.
2. Supply the missing arguments on military force, the burden of proof, and rule-based allocation of scarce care.
3. Make the rules usable by the audience the paper names.

Audit the revised draft again afterwards. The default is Option A (repair and argue). Choose Option B (principles first) if a larger rewrite is affordable. The details are in section 1.

**Confidence scores.**

| What is scored | Overall | Parts |
|---|---|---|
| This revision plan | 72 | Repairs 88; added arguments 65; that the result would be the strongest version 55 |
| The paper's central recommendation, as written | 55 | Core negative claim 85; military ceiling 60; licensing regime 50; Table 1 ceilings 45; asymmetry premise 35; markets 35 |

- If revised as recommended, the paper's central recommendation would score about 65 to 70.
- The scores measure how well a recommendation would survive informed scrutiny, given the paper's stated values. They do not measure whether those values are right.
- All five lenses come from one model, so their agreement is not independent verification.

**The most serious problems.** Ranked by severity, then by how much of the conclusion each one carries:

1. **C1, high:** the paper uses "authority" in two senses, so its thesis can look true by definition. Sections 2 and 7.2.
2. **C2, high:** "final authority" is never defined, and grade-3 dosing gives the system final authority over each case. Abstract, Section 1 and Table 1.
3. **C4, high:** grade 1 carries the protective ceilings, but nothing tests whether its human review is real. Sections 4.5, 5 and 6.4.
4. **C3, high:** the escalation exemption ignores scarcity and missed cases, the very failure in the paper's own Obermeyer case. Section 5 and Table 1.
5. **C5, high:** Recommendation 2's statute exception covers all adverse determinations, but Table 1 allows it only for credit refusals. As written, it would reopen Robodebt-type debts. Recommendation 2.
6. **C6, high:** the asymmetry premise is stated three different ways, and third-party harm is counted on one side only. Sections 5 and 6.5.
7. **G1, high:** the military prohibition is asserted, not argued, and the reasoning in Section 6.3 would license the Section 3.2 scenario. Sections 3.2 and 6.3.
8. **G3, high:** answerability is reduced to naming someone, and the test drops the traceability that Section 4.1 calls minimal. Table 2 and Section 4.1.
9. **G2, high:** accepted practices already exceed the medical ceilings, and the paper does not address them: rule-based organ allocation and autonomous screening. Table 1 and Section 5.
10. **C7, high for Recommendation 6:** the claim that "no one can answer" for learned market policies conflicts with the paper's own answerability test and with existing market rules. Section 5 and Recommendation 6.
11. **G9, medium:** the burden of proof falls on automation, with no argument for it and no comparison with how humans perform. Sections 5 and 6.1.
12. **C8, medium:** the protective stop is classified as grade 4 but meets the definition of grade 3. Table 1 and Section 5.
13. **G4, medium:** the grade scale has no place for envelopes that cannot be halted, or for decisions that take effect before review. Section 2.
14. **G17, medium:** the defensive-engagement row assumes the system can tell munitions from crewed aircraft. Table 1.

Section 3 records the other 19 medium-severity and 13 low-severity findings.

This analysis is not legal, medical, military or financial advice. Section 5.9 names who should review the paper's tests before anyone uses them.

## 1 Recommendation

### 1.1 The recommendation

Keep the paper's thesis and its tiered design. Restate the thesis in the paper's own grade terms, then rebuild the parts that carry it. The recommendation is conditional on what the author wants.

- **Option A, repair and argue (my default).** Choose this if the aim is the strongest defensible paper at about its present length and structure. Repair the conceptual core, make the protective ceilings enforceable, supply the three missing arguments (military force, burden of proof, rule-based allocation of scarce care), narrow the market claims, fix the operational rules, and then audit the revised draft again.
- **Option B, principles first.** Choose this if the author can afford a larger rewrite and wants a framework that holds up against new cases and more capable systems. Do everything in Option A, and also reorganise Section 5 around three cross-domain principles, with Table 1 recast as worked applications. The principles are: (1) public, pre-committed rules may run at higher grades than learned or discretionary policies; (2) no adverse effect that is hard to reverse may land on a person before an answerable human has reviewed it; (3) a deployment's grade is measured by how people actually behave around it, not by how it was declared.

Draft wording for the restated thesis, for the author to adapt: *No AI system should hold grade 4 authority over any decision about a person in these domains. For adverse determinations, discretionary or learned allocation of scarce goods among persons, and force against persons, a system should not go beyond grade 1, and the human decision at grade 1 must itself pass tests of real review. Grades 2 and 3 may be licensed only for the narrow classes listed, and only while the conditions in Table 2 are certified. Answerability always stays with named humans and institutions.*

### 1.2 Revisions in priority order

**Pass 1: repair the core.** Every later section depends on this pass.

1. Separate the two senses of "authority". Define "final authority" or drop the term, and restate the thesis as above (C1, C2).
2. Add two classification rules to the grade scale, and reclassify the protective stop as grade 3. The "one exception" then disappears (G4, C8).
3. Make grade 1 enforceable. In every decision class capped at grade 1, apply the real-override and contestability tests, plus a trigger on the agreement rate, to the human decision. Correct Section 4.5, which wrongly places automation bias only above grade 1 (C4, C16).
4. Rewrite the escalation rule. Grade 2 should cover only flags that add a case to review without displacing anyone else. Ranking for a scarce resource should count as deprioritisation unless missed cases are audited by subgroup (C3).
5. Adopt one statute rule and one statement of the asymmetry premise, applied the same way everywhere, and assign someone to check the asymmetry ordering (C5, C6, C9, C10, G5).
6. Rewrite the answerability test so that it includes traceability, names the vendor's responsibility, and is certified by a body independent of the deployer (G3).

**Pass 2: supply the missing arguments.**

7. Military force. Derive the ceiling on force against persons from three sources rather than from the ICRC's authority alone. First, judgements about distinction, surrender and proportionality are made at the time of attack and cannot be fixed in an envelope in advance. Second, the person targeted cannot contest the decision. Third, the commander cannot trace outcomes inside the envelope. Classify the Section 3.2 scenario explicitly, and tighten the row for defensive engagement (G1, G17).
8. Comparative baseline and burden of proof. Add a short subsection that states the precautionary default as a values choice and gives reasons for it: errors are uniform and scaled, contest is lost, and some harms cannot be reversed. Say what evidence would raise a class's ceiling. Acknowledge that human–AI pairs can do worse than AI alone. Replace the "proves too much" reply, and correct the reply to the low-resource objection, which also assumes a reviewer (G9, G10, C15, W1).
9. Rule-based allocation of scarce care, and existing autonomous medical devices. Add a decision class for public, pre-committed allocation rules, and address the precedents that already exceed the paper's ceilings (G2).
10. Separate the claims that are principled from those that depend on what AI can do today (G11).
11. Markets. Define what the paper means by "market interventions", replace the unargued answerability claim, and narrow Recommendation 6. Alternatively, cut markets to a scoped paragraph and say so in Section 8 (C7).

**Pass 3: make the rules usable by the paper's stated audience.**

12. Map each trigger to the body that re-certifies. Name a fallback mode for each envelope. Add triggers for label loops, alert fatigue and censored outcomes. Add a safeguard so that seeded errors cannot reach real people (G6, C13, G14, G7, G13).
13. Add a rule for classifying decisions as adverse or favourable, certified by a body other than the deployer (G8).
14. State once how the stakes adjust the tests, and make the grade 2 rule conjunctive (C11, C12, C14).
15. Run Obermeyer, the Section 3.2 scenario and Robodebt through the revised framework as worked examples (G15).
16. Fix the scope statements: AI or automated decision systems, the coverage of economic allocation, liberty, and jurisdictions (G16, G12, C20).
17. Make the low-severity edits (C17–C19, G18, G19, W2–W5, K1, K2).

Then audit the revised draft again (section 1.5).

**Length.** Assuming a journal-length paper, offset the additions by compressing the ICRC paragraph in Section 3.2 and the replies in Sections 6.2 and 6.3. Under Option A, also consider cutting markets to one paragraph.

### 1.3 What would change this recommendation

- **A short policy brief rather than a paper.** Keep Pass 1 and Pass 3 and drop items 9 to 11.
- **Comparative evidence.** Suppose that in some decision class, AI alone reliably outperforms human plus AI, and contestability is preserved. Then that class's ceiling should rise, and the paper should say so rather than hold grade 1 everywhere.
- **Persistent rubber-stamping.** Suppose that grade-1 review stays a rubber stamp even under the added tests. Then the paper should move toward information only (grade 0) for force against persons and for adverse determinations.
- **The author's values.** Suppose the author weights aggregate lives saved above contestability. Then the medicine ceilings and the default to grade 1 must be rewritten, and Option B fits better.
- **A narrower scope.** If the author decides that the paper concerns only decisions about particular persons, cut markets. C7 is then resolved by removal.

### 1.4 Top next steps

1. Rewrite the Section 2 definitions: operative and answerable authority, final authority, and the two classification rules. Restate the thesis in the Abstract, Section 1 and Section 7.2.
2. Fix Tables 1 and 2 and the rules they carry: the protective stop, the credit row, the scope of the statute exception, escalation, grade-1 safeguards and the single asymmetry statement.
3. Write the three missing arguments (G1, G9, G2), using only sources that have been checked.
4. Add worked examples of the three cases (G15).
5. Verify the items marked *own knowledge* (section 5.7) before relying on them, and then audit the revised draft again.

### 1.5 Check of the recommendation

Each proposed change was tested against the framing constraints (a revision rather than a replacement, usable by the stated audience, no unsupported claims), against the paper and against the audit.

| Change | New conflict or unsupported claim? | Smallest form |
|---|---|---|
| Split operative from answerable authority (C1) | It introduces two terms that must then be used consistently throughout. It also requires the "five grades of authority" fix (C17). | Define both once in Section 2. In one sentence in Section 2 and one in Section 7.2, change "Authority" to *Answerable authority*. |
| Restate the thesis (C2) | It must match Table 1 after G2 adds a grade-3 allocation class. The wording *discretionary or learned allocation* keeps the two consistent. | Use the same sentence in the Abstract, Section 1 and Section 7.2. |
| Classification rules (G4) | Under the strict rule, an automated credit refusal with a later appeal sits above the credit ceiling. That is stricter than common practice and, from my own knowledge, stricter than GDPR Art. 22(3). This is a policy consequence the author must accept, or soften with a named intermediate class: prompt, cost-free reversal and no interim effect. | Two sentences in Section 2. |
| Protective stop to grade 3 (C8) | None, but Sections 5 and 6.1 must also be edited. | Change one Table 1 cell. Delete "with one exception" in Section 5. In Section 6.1, change "grade 3 or 4 use" to *grade 3 use*. |
| Grade-1 safeguards (C4) | It would clash with "Grades 0 and 1 are not authority" only if framed as licensing. Frame it as a set of safeguards on advice. It adds cost, which Recommendation 8 already covers. | Apply two tests and one trigger, not all five conditions. |
| Escalation rule (C3) | The term *additive* needs a definition: a flag that adds a case to review without removing or delaying any other case beyond a set time. A strict version would put many triage tools at grade 1 (PD3). | Grade 2 for additive flags. Grade 2 for ranking under scarcity only with audits of missed cases by subgroup. Otherwise grade 1. |
| One statute rule (C5, C9, C10) | None. Section 6.4's sentence on credit stays true. | Limit the exception to credit refusals, and make the certified conditions, not the statute, the licence. |
| One asymmetry statement (C6, G5) | Adding a sixth condition would break the count of "five conditions" in the Abstract, Section 1, Section 5 and Recommendation 1. | Assign the check to the domain regulator in one sentence. Do not add a condition. |
| Answerability test (G3) | It strengthens the military argument. The dosing row still passes. The crumple-zone point must be attributed to Elish's argument (my own knowledge, to verify) and not presented as measured fact. | Rewrite one Table 2 cell and one sentence in Section 4.1. |
| Military argument (G1) | Whether international humanitarian law (IHL) requires human judgement for each attack is disputed among states (my own knowledge). The paper should not present it as settled law. | One paragraph in Section 3.2 or Section 5. One edited sentence in Section 6.3. One edited word in Recommendation 5. |
| Comparative baseline (G9) | High risk of unsupported claims. Every study cited must be checked first. If none can be checked, state the question as open. | One subsection in Section 6.1. |
| Rule-based allocation class (G2) | It must not reopen C3. The new row covers only public, pre-committed and published rules, not learned ranking. | One Table 1 row. Edit the "value-laden allocation" sentence in Section 5. |
| Markets (C7) | Cutting removes the risk but loses coverage of economic allocation. | Define the term and replace one sentence. Rewrite Recommendation 6. |
| Operational fixes (G6, C13, G14, G7, G13) | Table 2 could become crowded. | Keep all the triggers in one list in Section 5. |

These edits touch the Abstract, four sections and both tables, so the revised version must be audited again. Revisions like these often introduce new conflicts, especially between the restated thesis and the Table 1 rows.

### 1.6 Confidence

**This revision plan: 72 overall.**

| Part | Score | Why |
|---|---|---|
| A. Repairs: Pass 1, Pass 3 and the low-severity edits | 88 | Each one fixes a conflict or gap that can be checked against quoted text. |
| B. The added arguments of Pass 2 | 65 | They rest partly on precedents and studies I know of but have not checked in this session, and on values choices the author must make. |
| C. That the result would be the strongest defensible version, rather than Option B or a narrower paper | 55 | This depends on the author's goals and venue, which I do not know (PD1). |

What moved the overall score:
- **Up:** most findings are textual and quoted exactly, so the author can check them directly.
- **Down:** Pass 2 relies on facts from my own knowledge that I have not checked here. No web search was used.
- **Down:** all five lenses come from one model. Their agreement on the top revisions is not independent verification, and I did not raise the score because of it.
- **Down:** the choice between Options A and B turns on facts about the author I do not have.

**The paper's central recommendation, as written: 55 overall.** The recommendation scored here is: no final AI authority over determinations about particular persons, bounded delegation under five conditions, and low ceilings for adverse decisions, value-laden allocation and force.

| Part | Score | Main reason |
|---|---|---|
| Core negative claim: no grade 4, and no unbounded autonomy, over adverse or lethal determinations about persons | 85 | Supported by the documented cases, the automation-bias literature and the direction of law and policy. Few serious opponents defend the contrary for adverse decisions. |
| Military ceiling: no delegated engagement of persons | 60 | Largely a judgement of values and law. The ICRC and many states support it, while some states contest it. The paper's own argument for it is thin (G1). |
| The five-condition licensing regime as specified | 50 | The architecture is sound, but key mechanisms are undefined or inconsistent (G3, G6, C11, C13). |
| Table 1 ceilings as specified | 45 | Design judgements. Several rows conflict with the paper's own rules or with existing practice (C3, C5, C8, G2, G17). |
| Asymmetry premise as stated | 35 | Stated three different ways, its empirical condition is not established, and it has no assigned checker (C6, G5). |
| Market rows and Recommendation 6 | 35 | The key answerability claim is overstated, and the scope is undefined (C7). |

What moved the overall score:
- **Up:** the direction matches documented failures (Obermeyer, Robodebt), the human-factors literature the paper cites, and convergent regulation. From my own knowledge, that includes EU AI Act Art. 14 and GDPR Art. 22.
- **Down:** the rules that put the recommendation into practice contain seven high-severity internal conflicts (C1–C7).
- **Down:** the ceilings and the asymmetry ordering are, by the paper's own account, design judgements whose empirical conditions have not been tested.
- **Down:** the strongest objections go unanswered: the comparative baseline, existing legitimate automated allocation, and answerability by naming (G9, G2, G3).

How to read these scores:
- **They are not probabilities that the paper's values are correct.** They measure confidence that the recommendation would survive informed scrutiny, given the values the paper states. A reader who weights aggregate lives saved above contestability would score the medicine and credit parts lower (PD2).
- **Projection after the revisions: about 65 to 70 overall.** The core claim would stay at about 85, and the architecture and ceilings would rise to about 60 to 65. The gain would come from removing contradictions, not from new evidence, so the projection is not itself evidence.

## 2 Convergence zones and productive divergences

All five lenses come from the same model. Where lenses agree below, that agreement is not independent verification. It matters most for CZ1 and CZ5, which drive the highest-priority revisions.

### 2.1 Convergence zones

**CZ1. Grade 1 is the weak point of the protective ceilings (C4).**
- **Lenses:** Critical, Systems, Creative and Analytical.
- **Basis:** mostly shared evidence. The evidence is the paper's own text (Sections 2, 4.5 and 6.4) and the automation-bias literature it cites, which studies decision aids, that is, advice.
- **Shared assumption:** behavioural measures can tell real review from rubber-stamping. The measures are agreement rates, review times and the share of seeded errors caught. The assumption is plausible but not established, so this agreement is weaker than it looks.

**CZ2. The escalation exemption is too generous (C3).**
- **Lenses:** Systems, Critical and Analytical.
- **Basis:** shared evidence: the paper's definition of a decision about a person, its own account of scarcity in Section 1, and its own Obermeyer case.
- **Strength:** strong, because the conflict is internal to the text.

**CZ3. The conceptual core must be repaired before the ceilings can be judged (C1, C2, G4, C8).**
- **Lenses:** Analytical, Critical and Pragmatic.
- **Basis:** textual evidence.
- **Strength:** strong.

**CZ4. The military ceiling needs an argument of its own (G1, G17).**
- **Lenses:** Analytical, Critical and Systems.
- **Basis:** mostly textual evidence. The reasoning in Section 6.3 does not exclude the scenario in Section 3.2.
- **Supplement:** my own knowledge of IHL and of fratricide incidents, which needs checking.

**CZ5. The paper must defend its burden of proof and engage counter-precedents (G9, G2).**
- **Lenses:** Critical, Creative and Pragmatic.
- **Basis:** largely a shared assumption, held only from my own knowledge, with two parts:
  - the human status quo makes errors large enough to matter in the comparison;
  - the precedents (rule-based organ allocation, autonomous screening devices) and the studies of human–AI pairs are as I recall them.
- **Strength:** the weakest zone until those items are checked.

**CZ6. The operational rules are not yet usable by the stated audience (G6, C13, C14, G13, G14).**
- **Lenses:** Pragmatic and Systems.
- **Basis:** textual evidence.

### 2.2 Productive divergences

**PD1. Repair the paper, or restructure it.**
- **The disagreement:**
  - The Pragmatic and Analytical lenses favour keeping the domain structure and fixing conflicts (Option A).
  - The Creative lens favours rebuilding Section 5 around cross-domain principles (Option B).
- **Source:** different time horizons and values. Option A means fewer new conflicts and a paper publishable sooner. Option B means more explanatory power and a longer life.
- **Judgement:** productive. This is a real trade-off the author must own, and the recommendation is conditional on it.

**PD2. Where the burden of proof should lie.**
- **The disagreement:**
  - The Critical lens: the precautionary default is unargued, and its costs fall on patients and claimants, often poor ones, who would be better served by faster or more accurate automated decisions.
  - The Systems lens: errors that are uniform, scaled and self-reinforcing, and that are detected late, justify a precautionary default.
- **Source:** mainly a values difference over how much weight contestability and dignity carry against aggregate welfare. There is also a factual dispute over comparative error rates, which differs from one decision class to another.
- **Judgement:** productive, and a values choice. The paper should name it and defend it, not settle it by declaration. The factual part can be settled class by class with data.

**PD3. How strong the escalation fix should be.**
- **The disagreement:**
  - The Systems lens: cap ranking for scarce goods at grade 1.
  - The Pragmatic lens: that would put most triage tools at grade 1, with costs from delay.
- **Source:** different weights on harm from missed cases and on operational feasibility.
- **Judgement:** productive. The recommendation resolves it conditionally (section 1.5): grade 2 for additive flags; grade 2 for ranking under scarcity only with audits of missed cases by subgroup; otherwise grade 1.

**PD4. Markets.**
- **The disagreement:**
  - The Critical and Analytical lenses: the market claims are overstated and should be fixed or cut.
  - The Systems lens: collective harms that arrive fast are exactly where answerability is thinnest.
- **Source:** a factual dispute over whether existing market-access rules deliver answerability, plus a question of scope.
- **Judgement:**
  - Partly noise: the paper never defines "market interventions", and a definition resolves that.
  - Partly productive: whether learned, discretionary trading policies should be allowed is a real policy question beyond the paper's person-level thesis, which argues for narrowing.

**PD5. Seeded errors.**
- **The disagreement:**
  - The Pragmatic lens: seeding errors into live clinical decisions is ethically fraught.
  - The Creative lens: precedents exist. My own knowledge: airport baggage screening projects fictional threat images to test screeners.
- **Source:** evidence drawn from different domains.
- **Judgement:** noise once a rule is stated: seeded cases must be synthetic or intercepted before they take effect (G13).

**PD6. Appeals after the decision takes effect (the strict rule in G4).**
- **The disagreement:**
  - The Analytical lens: for consistency, an effect that lands before review cannot count as grade 2.
  - The Pragmatic lens: that would place common credit practice above its ceiling.
- **Source:** a values question (how much interim harm is acceptable if reversal is prompt) and policy feasibility.
- **Judgement:** productive. This is the author's decision, and section 1.5 sets out both versions.

## 3 Audit findings

**What was checked.** All eight sections, both tables and the reference list, for three things: consistency, gaps, and claims about the world.

**How to read the entries.**
- Quotations are exact, continuous text from the paper. Table cells are quoted without the table's separators.
- *Own knowledge* marks what I know without having checked it in this session. No web search was used.
- Severity: high means the problem changes a conclusion, medium means it misleads a reader, low means neither.
- Each entry gives the problem's locations, the problem, and the smallest fix.
- Proposed replacement wording is shown in italics. Quotation marks enclose only text copied exactly from the paper or, where named, from another source.

### 3.1 Consistency: conflicts within the paper

#### High severity

**C1. Two senses of "authority".** High; conflict.

Locations:
- Section 1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."
- Section 2: "To say that a system has decision authority is to say that its output settles a matter others must accept, and that someone can be held to account for it."
- Section 2: "Authority presupposes an agent who can give reasons, be questioned and be corrected."
- Section 2: "Authority in the relevant sense is grades 2 to 4."
- Section 7.2: "Authority over sensitive matters therefore stays with humans and institutions, which may delegate bounded functions to machines on conditions."

Problem:
- The paper uses "authority" in two senses:
  - the system's output settling a matter, which Section 5 licenses at grades 2 to 4;
  - a standing that presupposes an answerable agent and that, per Section 7.2, "stays with humans".
- On the second reading, "AI should not hold authority" follows from the definition. A critic will say the paper begs the question.
- On the first reading, the paper licenses AI authority, which Section 7.2 then denies.

Fix:
- Define two terms:
  - *operative authority*: the system's output settles a case without a human decision on that case (grades 2 to 4);
  - *answerable authority*: the standing to be held to account for the outcome and to reverse it, which is always human or institutional.
- Edit two sentences:
  - Section 2: change "Authority presupposes" to *Answerable authority presupposes*.
  - Section 7.2: change "Authority over sensitive matters therefore stays" to *Answerable authority over sensitive matters therefore stays*.

**C2. The term "final authority" is undefined, and the paper's own rows grant it.** High; conflict.

Locations:
- Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy."
- Section 1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
- Section 2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service."
- Section 2: "If the human can change only the envelope or stop the system, it is at grade 3."
- Table 1: "Dosing within clinician-set limits" (ceiling 3).
- Table 1: "Automatic protective stop that moves the system to a defined safe state" (ceiling 4).

Problem:
- The word "final" is never defined against the grades.
- A dose changes a person's treatment, so dosing is a decision about a person.
- At grade 3 no human can change an individual dose before it takes effect. By the paper's own test, the system's decision on each case is final.
- The thesis is therefore contradicted by Table 1, unless "final" means something the paper never states.

Fix: Drop "final", and restate the thesis in grade terms (draft in section 1.1). Use the same sentence in the Abstract, Section 1 and Section 7.2.

**C3. The escalation exemption conflicts with the paper's own definition under scarcity, and ignores missed cases.** High; conflict.

Locations:
- Section 1: "Hospitals rank patients for scarce beds and specialist review."
- Section 2: "Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately."
- Section 3.1: "Consider a commercial algorithm that health systems used to identify patients for additional care management, a scarce programme of nurse outreach and extra attention."
- Section 5: "A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
- Table 1: "Escalating a case for urgent clinician review" (ceiling 2).

Problem:
- Scarcity: when a queue rations a scarce resource, moving one case up moves others down.
  - Queue position is then "access to a service", so the escalation is a decision about the people it displaces.
  - Displacing them is deprioritisation, which Table 1 caps at grade 1.
- Missed cases: "a human's judgement still settles the outcome" holds only for flagged cases.
  - A case the system fails to flag is settled by the system's silence, and no one reviews it.
- The paper's own Obermeyer case is a failure of this second kind: Black patients who should have been identified were not.

Fix:
- In Section 5, limit grade-2 escalation to additive flags: flags that add a case to human review without removing any other case, or delaying it beyond a set time.
- Treat ranking for a scarce resource as deprioritisation (ceiling 1), unless missed cases are audited by subgroup against an independent sample of unflagged cases.
- Add missed cases to the right-target test.

**C4. Grade 1 has no safeguards, yet it carries the protective ceilings.** High; conflict.

Locations:
- Section 2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
- Section 4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
- Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- Section 6.4: "If reviewers accept whatever the system proposes, grade 2 collapses into grade 4 with a human's name attached."
- Section 6.4: "When these conditions fail, the system drops to grade 1."
- Table 1: "Recommending the engagement of persons", with the condition "Human decision for each engagement".

Problem:
- Section 4.5 confines automation bias to grades above advice. That contradicts Section 2.
- It also contradicts the literature the paper cites. From my own knowledge, Parasuraman and Manzey (2010) study automation bias largely in decision aids, that is, at the level of advice.
- The tests for real review apply only from grade 2. So the human decision at grade 1 is never tested, yet it is the only safeguard for:
  - force against persons;
  - credit refusals;
  - welfare denials;
  - deprioritisation in medicine.
- A grade-2 deployment that fails its tests "drops to grade 1". There, the same reviewers face the same pull to defer, with no test at all.
- A rubber-stamped grade 1 is in effect grade 2 or higher. The paper's most protective ceilings are therefore unenforced.

Fix:
- In every class capped at grade 1, apply two tests to the human decision: real override and contestability.
- Also apply the override-rate trigger, read as an agreement rate.
- A grade-1 deployment that fails moves to grade 0 (information only).
- In Section 4.5, change "every grade above advice" to *every grade from advice upward*.

**C5. The scope of the statute exception differs between Recommendation 2 and Table 1.** High; conflict.

Locations:
- Table 1, credit refusals: "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit"
- Table 1: "Welfare denials, debt raising and sanctions", with the condition "Named human decision-maker of record" and no exception.
- Recommendation 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."

Problem:
- Table 1 allows the statutory route only for credit refusals.
- Recommendation 2 extends it to all adverse determinations, including debts and sanctions.
- Read as written, Recommendation 2 would let a legislature license Robodebt-style debt raising at grade 2. That is the paper's own cautionary case.

Fix: Restrict the exception in Recommendation 2 to credit refusals, for example by inserting *for credit refusals* after "unless", or remove it from both places.

**C6. The asymmetry premise is stated three different ways.** High; conflict.

Locations:
- Abstract and Section 5: "where a wrongful adverse decision is harder to reverse than a wrongful favourable one"
- Section 5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
- Section 6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
- Section 6.5: "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation."
- Section 6.5: "The asymmetry premise counts mainly the harm to the person affected, so this objection threatens it directly."

Problem:
- The three statements make three different comparisons:

| Statement | Harm counted on the approval side | Harm counted on the refusal side |
|---|---|---|
| Abstract and Section 5 premise | How hard a wrongful favourable decision is to reverse | How hard a wrongful adverse decision is to reverse |
| Section 5 reversal test | Irreversible harm to everyone, third parties included | Harm to the people refused only |
| Section 6.5 reversal test | Harm to others only | Harm to applicants |

- Third-party harm is counted on the approval side only, although refusals also harm dependants.
- In a credit decision the borrower is the applicant. Listing "a borrower who takes on debt they cannot carry" among people "other than the applicant" misfiles a first-party harm.
- The three versions can give different verdicts for credit approvals, the one class the premise licenses at grade 2.

Fix:
- State the premise once, in Section 5, with one metric applied to both sides. Compare the expected irreversible harm of:
  - wrongful favourable decisions, to the applicant and to others;
  - wrongful adverse decisions, to the applicant, dependants and others.
- Have the Abstract and Section 6.5 cite that statement rather than restate it.
- Move the over-indebted borrower to first-party harm.

**C7. The market answerability claim conflicts with the paper's own test, and the term "market interventions" is undefined.** High for Recommendation 6; conflict and overstated claim. It does not affect the thesis about decisions on particular persons.

Locations:
- Section 1: "Lenders use models to refuse credit, and trading systems act on prices in milliseconds."
- Section 3.3: "The harm is collective and fast, and no single person can answer for it."
- Section 5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
- Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
- Recommendation 6: "Keep market automation within public, pre-committed rules with halts and kill switches, and prohibit discretionary AI market interventions without public justification."

Problem:
- A trading firm running a learned policy can pass the paper's own answerability test. It is a named institution, with named officers who can withdraw the system.
- From my own knowledge, existing rules already require this:
  - the US SEC market access rule (Rule 15c3-5);
  - MiFID II Article 17, which requires trading controls and the ability to stop algorithms.
- Firms have been sanctioned for algorithmic failures, for example Knight Capital after its 2012 trading losses.
- So "no one can answer" is overstated. It also conflicts with Table 2, unless "answer" means something stronger that the paper never states.
- Separately, the scope is unclear:
  - the Introduction frames private trading systems;
  - the Table 1 condition "Public justification" suggests interventions by public authorities.
- Read broadly, Recommendation 6 would confine all private algorithmic trading to public, pre-committed rules. The paper does not argue for that.

Fix:
- Define "market interventions" as actions by a public authority on prices or on how a market functions.
- State that existing market-access rules govern private algorithmic trading. Treat as an open question whether those rules deliver answerability for collective harm.
- Restate Recommendation 6 so that it covers public interventions only.

#### Medium severity

**C8. The protective stop is misclassified as grade 4.** Medium; conflict.

Locations:
- Section 2: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
- Table 1: "Automatic protective stop that moves the system to a defined safe state" (ceiling 4), with the conditions "Narrow and reversible; removes no entitlement; clinician can countermand at once".
- Section 5: "No domain licenses grade 4 for decisions about persons, with one exception."
- Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- Table 2, bounded delegation: "Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions"
- Section 6.1: "Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops."

Problem:
- Grade 4 requires limits that are absent or set by the system itself.
- The stop's limits are set by humans: a defined safe state and narrow triggers. A clinician can also countermand the stop, so the stop fits the grade 3 description.
- Grade 4 can never pass the bounded-delegation test, which requires written limits. Under the Section 5 rule, no grade-4 deployment could ever be licensed.
- The "one exception" is therefore a misclassification. Correcting it makes the rule against grade 4 hold without exception.

Fix:
- Change the stop's ceiling to 3.
- In Section 5, delete "with one exception" and the sentence after it, which restates conditions already in the Table 1 row. Say that grade 4 is never licensed.
- In Section 6.1, change "grade 3 or 4 use" to *grade 3 use*.

**C9. The credit-refusal ceiling is labelled 1, but the row allows grade 2.** Medium; conflict.

Locations:
- Section 5: "A ceiling is the highest grade a decision class may take, given the conditions."
- Table 1: "Credit refusals" (ceiling 1), with the condition "grade 2 only under a statute that sets review capacity and audit".
- Section 6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."

Problem: Grade 2 is allowed under a statute. The highest grade this class may take is therefore 2, not 1.

Fix: Choose one of two options.
- Show the ceiling as *1 (2 under the statutory route)*, and add one sentence defining a conditional ceiling.
- Remove the statutory route (see C5).

**C10. A statute serves as a licence, although the paper says law does not make oversight real.** Medium; conflict.

Locations:
- Section 6.4: "but a legal requirement does not make oversight real."
- The credit-refusal row of Table 1 and Recommendation 2, quoted at C5.

Problem:
- The paper denies that a legal requirement proves oversight is real.
- It then makes a statute the licence for grade 2.
- A statute can fund review capacity. It cannot certify that the five conditions hold.

Fix: Rewrite the condition as *grade 2 only where a statute funds review capacity and the conditions in Table 2 are certified for the deployment*.

**C11. The paper claims proportionality but gives no mechanism for it.** Medium; conflict.

Locations:
- Section 1: "Any such grant must meet five conditions, and its strength must track the stakes."
- Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- Section 5: "A deployment is licensed for less than its ceiling wherever its conditions are weakly met."
- Section 6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes."
- Section 6.6: "A low-stakes information service needs fewer of them than a system that decides who receives scarce care."

Problem:
- Section 5 states a pass-or-fail rule: all five conditions must pass.
- It gives no mechanism for conditions that are "weakly met", or for adjusting to the stakes.
- Section 6.6 says a low-stakes service needs fewer conditions. But an information service is grade 0, and grade 0 lies outside the conditions altogether.
- The reply to the low-resource objection therefore rests on a mechanism the paper does not have.

Fix:
- State once, in Section 5:
  - all five conditions must pass for any grade from 2 to 4;
  - the stakes set the threshold each certifying body applies and the re-check interval;
  - grade 0 services lie outside the conditions.
- Replace "weakly met" with *met only at the thresholds set for a lower grade*.

**C12. The grade 2 rule is an either/or list in Section 5 but a list of joint requirements in Section 6.4.** Medium; conflict.

Locations:
- Section 5: "Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow."
- Section 6.4: "Grade 2 is permissible only where review fits the workflow, overrides are logged, reviewers are tested with seeded errors, and the drift triggers in Section 5 are monitored."

Problem:
- Section 5 reads as if review that fits the workflow is enough on its own for grade 2.
- Section 6.4 makes it one of four required conditions.
- A reader applying Section 5 could license grade 2 for adverse outcomes wherever review fits the workflow.

Fix: Rewrite as *Grade 2 suits favourable or cheaply corrected outcomes, and only where review fits the workflow (Section 6.4).*

**C13. The triggers do not cover the drift risks they claim to put into practice.** Medium; conflict.

Locations:
- Section 4.6: "Two dynamics are missing from a static account of grades."
- Section 4.6: "A third dynamic concerns detection."
- Section 4.6: "In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
- Section 5: "and any change to the outcome label"
- Section 5: "These triggers are the working form of the drift risks in Section 4.6."
- Table 2, right-target re-check: "Before deployment, and at each retraining"

Problem:
- A label loop changes how labels are distributed, not how the label is defined. "Any change to the outcome label" does not catch it.
- The detection delay has no trigger.
- The subgroup-gap trigger needs continuous measurement, but the right-target check runs only before deployment and at each retraining.
- Section 4.6 says "Two dynamics" and then describes a third.

Fix:
- Add a label-loop trigger. It fires when the share of training labels produced by the system's own flags exceeds a set level, or when no independent sample of unflagged cases exists.
- Add continuous subgroup monitoring to the right-target re-check.
- Change "Two dynamics" to *Three dynamics*.
- Either add a trigger for detection delay, or state that detection delay is handled only by the stricter ceilings for collective harms.

**C14. The claim that the tests can be applied "without further philosophical work" overstates how ready they are.** Medium; conflict.

Locations:
- Section 5: "The tests are designed so that a hospital committee, procurement office or regulator can apply them without further philosophical work."
- Section 5: "The thresholds are for each certifying body to set, because the evidence needed to justify numerical values does not yet exist."
- Section 4.3: "Fairness is a choice of target and metric, and no metric is neutral."
- Table 2, answerability re-check: "At each material change, and annually"

Problem:
- By Section 4.3's own account, choosing a fairness metric and the threshold for the subgroup-gap trigger is a value choice.
- Several terms also need judgement before anyone can apply them: "material change", "usable terms", "stated time", "near zero" and "sustained period".

Fix: Replace "can apply them without further philosophical work" with *can apply them once they have set and published the thresholds; choosing the fairness metric and threshold is itself a value choice that the body must make openly*.

**C15. The third reply in Section 6.1 contradicts the paper's own concession.** Medium; conflict.

Locations:
- Section 6.1: "Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops."
- Section 6.1: "If efficiency justified removing review, no appeal would survive."
- Section 6.1: "Lives saved are evidence for augmentation, not for authority over persons' fates."

Problem:
- The paper concedes that validated benefit licenses grade 3 dosing, which is a determination about a person's treatment.
- It then says lives saved are evidence only for augmentation, "not for authority over persons' fates".
- The "proves too much" reply is a slippery-slope argument the paper itself rejects, since its own framework removes per-case review for dosing.

Fix: Replace the third reply with the distinction the paper actually uses.
- Benefit can license authority over small, validated and reversible decision spaces that have a stop.
- Benefit cannot license authority over allocation among persons. There the question is who should receive the benefit, not whether the system is accurate.

#### Low severity

**C16. The paper does not say which conditions apply at which grade.** Low; conflict.

Locations:
- Recommendation 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2)."
- Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."

Problem:
- Recommendation 1 applies all five conditions to every sensitive deployment. Section 5 applies them only at grades 2 to 4.
- The word "sensitive" is undefined.
- Bounded delegation, which requires an automatic stop (quoted at C8), fits grade 3 but not grade 2, where each case is controlled separately.

Fix:
- Add a short matrix showing which conditions apply at each grade. Under C4, real override and contestability would apply from grade 1 in classes capped at 1.
- Define a "sensitive deployment" as one that makes decisions about persons in the three domains.

**C17. The Abstract's "five grades of authority".** Low; conflict.

Locations:
- Abstract: "It distinguishes five grades of authority, from information to autonomous execution"
- Section 2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."

Problem: By the paper's own definition, only three of the five grades are authority.

Fix: Rewrite as *five grades of machine involvement, of which the top three are authority*.

**C18. The roadmap promises one case per domain.** Low; conflict.

Locations:
- Section 1: "Section 3 gives one case per domain"
- Section 3.2: "The case below is illustrative."

Problem: Section 3.3 has three cases (Robodebt, credit scoring and market interventions), and the military case is a hypothetical.

Fix: Rewrite as *Section 3 gives cases from each domain, one of them illustrative*.

**C19. The "grade 1 role of review".** Low; conflict.

Locations:
- Section 6.2: "Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review."
- Section 2: "The system recommends options with reasons."

Problem: Auditing reports information about human decisions, which is grade 0. It reaches grade 1 only when it recommends corrections. Grade 1 has no "role of review".

Fix: Rewrite as *it fits grades 0 and 1*.

**C20. The scope statements do not match the coverage.** Low; conflict.

Locations:
- Abstract: "AI systems are increasingly placed inside decisions about health, life and death, liberty and livelihood."
- Section 8: "The jurisdictions discussed are few: the European Union's AI Act and the Australian Robodebt case."

Problem:
- The abstract invokes liberty, which in practice means criminal justice, but no domain covers it.
- Section 8 omits the US setting of the Obermeyer case and the international ICRC material.

Fix:
- Scope liberty out in one sentence, or drop it.
- List the US and international material in Section 8.

### 3.2 Gaps: what the paper needs but does not supply

#### High severity

**G1. The military prohibition is asserted rather than argued.** High; gap.

Locations:
- Section 3.2: "A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time."
- Section 3.2: "What is at stake is whether persons can be distinguished, whether force is proportionate, and whether anyone can answer for an unlawful killing."
- Section 6.3: "It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable."
- Recommendation 5: "Prohibit delegated authority to select and engage persons with force."
- Table 1: "Recommending the engagement of persons" (ceiling 1).

Problem:
- Section 3.2 names the stakes, but the paper never argues from them to the ceiling. The prohibition rests on the ICRC's recommendation and on one sentence in Section 4.2 about the impossibility of contest.
- The reply in Section 6.3 undercuts the prohibition. It says a bounded envelope is what makes speed tolerable, and the Section 3.2 scenario is a bounded envelope: a defined area for a fixed period. Read literally, the reply supports the scenario the paper prohibits.
- The scenario is never assigned a grade (see G4).
- Recommendation 5 prohibits only "delegated authority", which is grade 3. That leaves grade 2 open, although Table 1 caps the class at grade 1.

Fix:
- Add one paragraph deriving the ceiling from three premises:
  1. Distinction, surrender (being hors de combat) and proportionality are judgements about changing facts, made at the moment of attack. An envelope fixed in advance cannot encode them.
  2. The person targeted cannot contest the decision (Section 4.2).
  3. Inside the envelope, the commander cannot trace individual outcomes, so the tracing test fails (G3, G18).
- From these, conclude that no envelope licenses force against persons. Classify the Section 3.2 scenario as exceeding the ceiling.
- In Section 6.3, change "It does not justify grade 4 for decisions about persons" to *It does not justify delegated engagement of persons at any grade above 1*.
- Rewrite Recommendation 5 as *Prohibit any grade above 1 for selecting and engaging persons with force.*
- Own knowledge, to verify: IHL rules on precautions in attack (Additional Protocol I, Article 57) and on persons hors de combat (Article 41) can inform the argument. States disagree on whether IHL itself requires human judgement for each attack, so present this as the paper's normative argument, not as settled law.

**G2. Accepted practices already exceed the medical ceilings, and the paper accepts public pre-committed rules only in markets.** High; gap, a strong objection left unanswered.

Locations:
- Table 1: "Deprioritising a patient or withholding scarce care" (ceiling 1), with the condition "Clinician decides, with reasons recorded".
- Section 5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
- Section 5: "Pre-committed public rules, with halts and rate limits, meet the conditions at grade 3."

Problem:
- Three practices, from my own knowledge (to verify), exceed a Table 1 ceiling or contradict the claim that grade 1 governs value-laden allocation:
  - **Liver allocation.** In the United States, deceased-donor livers have long been allocated by a published score (MELD) under rules set by a national body, with exceptions decided by a review board. Ranking for a scarce, life-saving resource is set by a public rule, not by a clinician for each case.
  - **Autonomous screening.** In 2018 the FDA authorised an autonomous AI screening system for diabetic retinopathy (IDx-DR). It issues "refer" or "rescreen" results without a clinician reading the images.
  - **Implanted defibrillators.** These deliver shocks with no human decision.
- Each of these practices is widely accepted.
- The paper already accepts the relevant principle for markets: public, pre-committed rules run at grade 3. It never says why the principle fails for scarce care.
- A critic will use these precedents to argue that the ceilings are arbitrary.

Fix:
- Add a decision class, *Allocation of scarce care by a public, pre-committed rule*, with ceiling 3. Its conditions:
  - an accountable public body sets and publishes the rule;
  - the rule is validated against the purpose of the allocation;
  - there is a route for exceptions and appeals.
- Keep learned or discretionary prioritisation at ceiling 1.
- In Section 5, change "value-laden allocation" to *discretionary or learned allocation*.
- Treat autonomous screening under the missed-case rule in C3.
- Cite implanted devices as precedent for grade 3 in small decision spaces.

**G3. Answerability is reduced to naming someone.** High; gap.

Locations:
- Section 4.1: "The paper treats traceability as the minimal test of answerability."
- Section 4.1: "A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
- Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system"
- Table 2, certified by: "Governing body of the deploying organisation"
- Section 3.1: "Consider a commercial algorithm that health systems used"

Problem:
- **The test drops understanding.** Section 4.1 makes traceability the minimal test: a human who understands the system and can act on it. Table 2 tests only naming and the power to withdraw.
- **Naming does not make blame fair.** The paper's own sources (Matthias, Sparrow) argue that it is unfair to blame humans for outcomes they could not foresee. Naming someone narrows the institutional gap but does not make blame fit. Own knowledge, to verify: Elish (2019) calls the result a "moral crumple zone", in which the named human absorbs blame without having control.
- **The test assumes a single responsible institution.** It requires one institution to hold design, deployment and outcome responsibility. That fails for procured systems, such as the paper's own commercial algorithm, where a vendor does the design.
- **The deployer certifies itself.** The body that certifies answerability is the deploying organisation's own governing body.

Fix:
- Rewrite the test as *A named institution and a named person hold deployment and outcome responsibility, understand the system's capabilities and failure modes well enough to foresee the range of its outcomes, and can correct or withdraw it; design responsibility is assigned to the vendor by contract.*
- Give certification to a body independent of the deployer.
- In Section 4.1, replace "A gap is closed by" with *The institutional gap is narrowed by*. Add that naming does not by itself make blame fit, which is why the test requires traceability.

#### Medium severity

**G4. The grade scale does not cover every case.** Medium; gap.

Locations:
- Section 2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
- Section 2, grade 4: quoted at C8.
- Section 2: "If a human must be able to change an individual outcome before it takes effect, the system is at grade 2 or below."
- Section 3.2: "because communications are expected to be degraded and approval could not be obtained in time."

Problem: Two common cases fit no grade.

| Case | Why not grade 2 | Why not grade 3 | Why not grade 4 |
|---|---|---|---|
| Limits set by humans, but no way to halt the system in time (the Section 3.2 scenario) | No change is possible before the effect | No halt is available | The limits are set by humans |
| A decision that takes effect at once and can be reversed only on later appeal (the usual pattern for automated credit refusals and benefit notices) | No change is possible before the effect | The grade 3 test does not mention appeals | The limits are usually set by humans |

Fix:
- Add two rules to Section 2:
  - a system whose envelope cannot be halted in time is grade 4, whoever set its limits;
  - a decision that takes effect before any human review is grade 3 or 4, whatever appeal follows, because an appeal is contestability, not override.
- Classify the Section 3.2 scenario as grade 4, and therefore prohibited.
- Note the consequence for credit decisions (PD6, section 1.5).

**G5. No one is assigned to check the asymmetry ordering, and no evidence standard is given.** Medium; gap.

Locations:
- Section 5: "Where the ordering is not supported at all, the default is grade 1."
- Table 1, favourable approvals: "Audit; errors correctable; asymmetry premise checked for the domain"
- Recommendation 2: "Apply the asymmetry premise in law and procurement only where it has been checked for the domain."

Problem:
- No one is named to check the ordering, and no standard of evidence is given.
- The rule covers three states: supported, reversed and "not supported at all". Weak or mixed evidence falls into none of them.
- The check appears in no row of Table 2.

Fix:
- Add one sentence to Section 5: the domain regulator certifies the ordering on published evidence, and until it does, favourable decisions stay at grade 1.
- Replace "not supported at all" with *not shown to hold*.
- Do not add a sixth condition (section 1.5).

**G6. The downgrade rule cannot be applied as written.** Medium; gap.

Locations:
- Section 5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
- Section 5: "a sampled reviewer who cannot state the reason for a decision"

Problem:
- **Which body?** Table 2 names five certifying bodies, so "its certifying body" is ambiguous.
- **A lower grade may be unsafe or impossible.**
  - For defensive engagement against incoming munitions, grade 2 would require someone to approve each engagement within the munition's flight time.
  - For closed-loop dosing, grade 2 would mean manually approving every adjustment.
- **One failure downgrades everything.** A single reviewer's failure downgrades the whole deployment.

Fix:
- Map each trigger to the condition it tests and to that condition's certifying body.
- Require each grade-3 envelope to name its fallback mode in advance. The fallback may be a safe stop or manual operation rather than grade 2.
- Turn the reviewer trigger into a rate.

**G7. The right-target test cannot be run where the decision hides the outcome.** Medium; gap.

Locations:
- Table 2, right-target test: "Performance is validated against the outcome the decision is for, and error rates are published by subgroup"
- Section 4.6, the label-loop sentence quoted at C13.

Problem:
- Some decisions hide their own outcomes. From my own knowledge (to verify), this is the "selective labels" problem (Lakkaraju et al., 2017):
  - no one observes whether a refused applicant would have repaid;
  - no one investigates unflagged welfare cases.
- For these classes, error rates on the outcome the decision is for cannot be computed from operating data.
- The test is therefore unusable in exactly the classes where the label loop operates.

Fix:
- Add: where the decision hides the outcome, validation requires an independent sample. Examples are randomised human review of a share of refused or unflagged cases, or a held-out group.
- The same sample can serve the label-loop trigger in C13.

**G8. Deployers classify their own decisions.** Medium; gap.

Locations:
- Recommendation 1: quoted at C16.
- Table 1: "Favourable approvals, such as low-cost approvals"

Problem:
- Deployers declare their own grades.
- "Favourable", "adverse" and "low-cost" are undefined.
- A deployer could label a mixed outcome as favourable, or as an escalation, to escape a lower ceiling. Examples are approval on worse terms, or a benefit suspended pending review.
- Own knowledge, to verify: in the Dutch childcare-benefits scandal, a risk model's flags led to suspended payments and demands for repayment.

Fix:
- Classify a decision by its effect on the person before any human decides. Any output that removes, suspends or worsens a benefit, treatment or term is adverse.
- Have the contestability body, not the deployer, certify the classification.

**G9. The paper does not defend its burden of proof or compare against the realistic baseline.** Medium; gap, a strong objection left unanswered.

Locations:
- Section 5: "Where the ordering is not supported at all, the default is grade 1."
- Section 6.1: "Until it is answered, the lives-saved argument supports augmentation, with escalation and audit, more clearly than it supports authority over who receives care."

Problem:
- The default to grade 1, and the reply in Section 6.1, place the whole burden of proof on automation without saying why.
- The realistic alternative is today's human process, which has its own error rates and biases.
- Own knowledge, to verify, from two studies:
  - a meta-analysis (Vaccaro, Almaatouq and Malone, 2024) found that human–AI combinations, on average, performed worse on decision tasks than the better of human or AI alone;
  - a randomised trial of physicians given access to a large language model (Goh et al., 2024) found no improvement in diagnostic reasoning, while the model alone scored higher.
- If these findings hold, augmentation at grade 1, the paper's preferred design, can cost accuracy.

Fix: Add a subsection to Section 6.1 that:
- states the precautionary default as a values choice;
- gives the reasons for it: errors are uniform and scaled, the person loses the chance to contest, some harms cannot be undone, and errors are detected late;
- acknowledges the comparative evidence once it is verified;
- says what evidence would raise the ceiling for a decision class.

**G10. The reply to the low-resource objection also needs review capacity.** Medium; gap.

Locations:
- Section 6.6: "Second, where review capacity is absent, the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review."
- Table 1, escalation: "Clinician can override within the workflow; reviews sampled for seeded errors"

Problem:
- The objection assumes there is no reviewer.
- Escalation at grade 2 needs a clinician to review flagged cases, so escalation is not available either.
- The phrase "fund that capacity" assumes the resources the objection says are missing.
- What remains is information only, or nothing.

Fix:
- Concede this.
- State the options that remain: information only, or a time-limited exception audited by an outside body.
- Name who bears the cost of each.

**G11. Claims about what AI cannot do are stated as permanent, without argument.** Medium; gap.

Locations:
- Section 7.2: "AI systems can carry work that humans set for them, but they cannot carry answerability or hear and reverse a challenge."
- Section 4.2: "To be determined by a process that cannot take one's situation into account is to be treated as an object of calculation rather than as a subject with reasons."
- Section 1: "Authority requires an answerable agent and a route of challenge, which an AI system cannot supply alone."

Problem:
- Some of the inabilities the paper names depend only on current systems. A capable system can process a challenge, take a person's situation into account and reverse its own output.
- If the conclusion rests on those inabilities, it weakens as capabilities grow.
- One thing does not depend on capability: answerability. Answerability is the standing to be blamed, sanctioned and required to justify a decision. Under current law and practice, only persons and institutions hold it.

Fix:
- Rest the conclusion on answerability.
- In Section 7.2, replace "or hear and reverse a challenge" with *and a challenge must be heard by someone who can answer for reversing it*.
- In Section 4.2, say that the dignity argument concerns who decides and who answers, not whether the process can take individual circumstances into account.

**G12. Economic allocation is covered only in part.** Medium; gap.

Locations:
- Section 1: "Public agencies score benefit claims and flag families for fraud review. Lenders use models to refuse credit, and trading systems act on prices in milliseconds."
- Section 3.3: "Credit scoring follows the same logic."

Problem:
- For a paper about economic allocation, the economic domain covers only welfare, credit and markets. Missing:
  - **employment**: algorithmic hiring, scheduling, and the deactivation of platform workers;
  - **insurance**: pricing and claims;
  - **scarce public goods**: social housing and school places.
- The Abstract's "livelihood" points to employment without covering it.

Fix:
- Add one scoping paragraph that names the classes covered and those excluded.
- Optionally, add a row for terminating employment, at ceiling 1 like other adverse determinations.

**G13. Nothing stops seeded errors from reaching real people.** Medium; gap.

Locations:
- Table 2, real-override test: "Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors"
- Table 1, escalation: "Clinician can override within the workflow; reviews sampled for seeded errors"
- Recommendation 4: "seed reviews with known errors"

Problem:
- No rule keeps seeded errors from reaching real people. If a reviewer accepts a seeded wrong recommendation, a real patient's care or a real claimant's payment could change.
- Seeding can work where the seed cannot alter a real outcome. Own knowledge: airport screening projects fictional threat images onto real bags.

Fix:
- Require that seeded cases are synthetic, or are intercepted before they take effect.
- Tell reviewers that seeding is practised, without saying which cases are seeded.

**G14. The override trigger catches complacency but not alert fatigue.** Medium; gap.

Locations:
- Section 5: "an override rate that falls to near zero over a sustained period without an audit explanation"
- Recommendation 4: "treat a near-zero override rate as a signal to investigate, not as proof of accuracy."

Problem:
- In clinical decision support, the documented failure is often the opposite of complacency: clinicians dismiss most alerts.
- Own knowledge, to verify:
  - studies report that clinicians override between about half and nearly all drug-safety alerts (van der Sijs et al., 2006);
  - an external validation of a widely used sepsis model found that it discriminated poorly between patients and produced many alerts (Wong et al., 2021).
- A reviewer who dismisses correct escalations is not exercising real override either.

Fix: Make the trigger two-sided. It should fire when the override or dismissal rate reaches either extreme, judged against how reviewers perform on seeded cases.

**G15. The paper never applies its framework to its own cases.** Medium; gap.

Locations:
- Section 3.2: "The case concerns who decides whether a person is killed, not how any system works."
- Section 3.3: "Section 5 sets the tiers for each."

Problem:
- None of the three cases is assigned a grade or tested against the conditions.
- Readers therefore cannot see whether the framework would have:
  - caught the Obermeyer proxy, through the right-target test;
  - stopped Robodebt, through the grade-1 ceiling and contestability;
  - resolved the Section 3.2 scenario (see G4).
- For the paper's stated audience, worked examples are the best evidence that the tests can be applied.

Fix: Add a short worked example for each case, covering:
- the grade at which the system was deployed;
- the condition that fails;
- the ceiling;
- what the framework would have required.

**G16. The scope says "AI systems", but one main case is not AI.** Medium; gap.

Locations:
- Abstract: "AI systems are increasingly placed inside decisions about health, life and death, liberty and livelihood."
- Section 1: "The characteristic failures of automated decision-making, such as proxy labels, opacity and complacent oversight, are structural and must be designed against."
- Section 3.3: "It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients."

Problem:
- Robodebt's averaging rule was a fixed calculation, not a learned model. This is own knowledge, and it agrees with the paper's description.
- The paper's stated scope is "AI systems", but its argument, and one of its three main cases, concern automated decisions in general.
- A critic will say that Robodebt shows failures of policy and administration, not failures of AI.

Fix:
- State the scope as automated decision systems, including learned models.
- Say that Robodebt is used for its decision structure: adverse effects at scale, a reversed burden of proof, and no individual review.
- Optionally, add a welfare case that involves a learned model, such as the Dutch childcare-benefits risk model (own knowledge, to verify).

**G17. The row for defensive engagement assumes the system can tell munitions from crewed aircraft.** Medium; gap.

Locations:
- Table 1: "Defensive engagement of incoming munitions, not persons", with the conditions "Human-set envelope; human on the loop; stop available"
- Section 3.2: "It recommends restricting others through limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021)."

Problem:
- The row assumes the system can reliably tell munitions from crewed aircraft.
- Own knowledge, to verify: in 2003, Patriot batteries operating with humans on the loop shot down a British Tornado and a US Navy F/A-18. Misclassification and over-trust in the automated mode were part of the cause.
- As I recall it, the ICRC position also recommends three limits that the row omits:
  - limiting such systems to objects that are military objectives by nature;
  - using them only in situations where civilians are absent;
  - requiring timely intervention and deactivation.
- The row's conditions are therefore looser than the source the paper relies on.
- The term "human on the loop" is undefined.

Fix: Add to the row's conditions:
- target signatures that exclude crewed platforms, or envelopes restricted to situations without civil or friendly air traffic;
- tested and audited rates of misidentification;
- a definition of "human on the loop" as the grade-3 monitoring role.

#### Low severity

**G18. The tracking condition is dropped without explanation.** Low; gap.

Location:
- Section 4.1: "Santoni de Sio and van den Hoven (2018) argue that meaningful human control requires that the system track the relevant reasons of the humans responsible for it, and that its behaviour be traceable to a human who understands it and can act on that understanding."

Problem:
- The paper reports two conditions but adopts only traceability, and does not say why.
- Tracking means that the system stays responsive to the reasons of those responsible, in the conditions of use.
- Tracking is the condition most relevant to grade-3 envelopes, and to the military scenario, where conditions change after the envelope is set.

Fix: Either justify dropping tracking, or add it to the bounded-delegation test: the envelope must keep the system responsive to the responsible human's reasons in the expected conditions of use.

**G19. Subgroup error rates cannot always be published.** Low; gap.

Locations:
- Table 2, right target: quoted at G7.
- Recommendation 3: "Fix the outcome label and fairness criteria in advance, validate them against the purpose of the decision, and publish subgroup error rates."

Problem:
- Publication is impossible for classified military systems.
- For small subgroups, publication risks exposing individuals.
- The paper does not say what replaces publication in either case.

Fix:
- Where publication is impossible, allow disclosure to an oversight body with security clearance.
- Set a minimum subgroup size for publication.

### 3.3 Claims about the world

The paper's conclusions rest mainly on its definitions and design judgements, and partly on four factual claims:
- the descriptions of the cases;
- the ICRC position;
- the human-factors literature;
- the assertion about markets, which is recorded as C7.

The problems found are below, followed by the claims checked without finding a problem.

**W1. "Human bias is heterogeneous."** Medium; overstated.

Location:
- Section 6.2: "Human bias is heterogeneous. Different officials err in different ways, and each can be questioned, trained and replaced. Automated bias is uniform and scaled."

Problem:
- The paper cites no support.
- Own knowledge: human bias is often systematic, coming from shared stereotypes and institutional practice.
- Uniform automated bias is also uniformly correctable once it is found, and the paper's own audit regime depends on that.
- The claim is stated more strongly than the support allows.
- Settling the comparison would take studies of how far errors vary between decision-makers in the same domain.

Fix: Rewrite as *Human bias is often heterogeneous, though it can be systematic. Automated bias is uniform and scaled, which makes it more damaging while undetected and easier to correct once found; the case for human decision rests on the first effect outweighing the second, which is an empirical question.*

**W2. Credit refusals: "the model's reasons are often unavailable".** Low; overstated, needs qualifying by jurisdiction.

Location:
- Section 3.3: "A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant."

Problem:
- Own knowledge, to verify:
  - **United States:** the Equal Credit Opportunity Act and Regulation B require adverse-action notices that give the principal reasons. The CFPB has said this applies to complex models (Circular 2022-03).
  - **European Union:** GDPR Articles 15 and 22 apply. In its SCHUFA judgment (C-634/21, 2023), the Court of Justice of the EU treated a credit score that plays a determining role as an automated decision.
- Reasons are often generic, but these jurisdictions require them by law.

Fix: Replace "are often unavailable to the applicant" with *are often unavailable to the applicant or reduced to generic reason codes, even where law requires reasons*, and cite the regimes.

**W3. The ICRC's position is called "a coordinated response".** Low; overstated.

Location:
- Section 6.3: "The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021)."

Problem:
- The ICRC is a humanitarian organisation. Its position proposes coordination among states; it is not itself a coordinated response.
- Own knowledge, to verify: state-level processes include the CCW Group of Governmental Experts on lethal autonomous weapons, and UN General Assembly resolutions on the topic from 2023 onward.

Fix: Replace "a coordinated response of this kind" with *a proposal for a coordinated response of this kind*, and cite the state-level processes once verified.

**W4. Matthias's thesis is stated as settled fact.** Low; overstated.

Location:
- Section 4.1: "Learning automata can act in ways their designers cannot foresee, so ordinary ascriptions of responsibility fail (Matthias, 2004)."

Problem:
- The sentence reports Matthias's thesis as established fact.
- Own knowledge: the responsibility-gap thesis is contested. Some authors argue that responsibility can be assigned to those who deploy or command such systems.
- The paper's own remedy, assigning named accountability, partly concedes the critics' point.

Fix: Attribute the claim, for example *Matthias (2004) argues that learning automata can act in ways their designers cannot foresee, so that ordinary ascriptions of responsibility fail.* Add one sentence acknowledging the critics and saying how the paper's view differs (see G3).

**W5. The claim about armed forces' classification systems has no source.** Low; unsupported.

Location:
- Section 1: "Armed forces use systems that classify objects and people faster than staff can check them."

Problem:
- The paper cites no source.
- Own knowledge: the claim is plausible, since target-recognition and decision-support systems are in use. But the specific claim about the speed of checking needs a source, and some public reports on targeting-support systems are unverified journalism.

Fix: Cite a documented source, or rephrase the claim as a design trend, for example *Armed forces are adopting systems designed to classify objects and people faster than staff can check them.*

**Claims checked without finding a problem.** These were checked against my own knowledge only, not against sources in this session.

- **Obermeyer et al. (2019):** the account of the cost proxy and of the under-identification of Black patients matches my knowledge.
- **Robodebt:** the account of income averaging, debt notices issued at scale and the reversed burden of proof matches my knowledge, as does the royal commission's 2023 report.
- **ICRC (2021):** the summary of the two prohibitions and the restrictions is accurate as far as it goes. Its omissions are recorded at G17.
- **EU AI Act, Article 14:** the paper's statement of the human-oversight requirement matches my knowledge. As far as I recall, Article 14 also names automation bias explicitly, which would support Section 6.4.
- **The other cited works:** the paper's uses of Bainbridge (1983), Parasuraman and Manzey (2010), Doshi-Velez and Kim (2017), Sparrow (2007), Topol (2019), Scharre (2018), Eubanks (2018) and Santoni de Sio and van den Hoven (2018) match what I know of them. The exception is the selective use recorded at G18. The bibliographic details look right but were not checked.
- **Section 4.6, "not findings from measured cases":** accurate for deployed systems as far as I know. Simulation studies of feedback loops in predictive policing do exist, and the paper could cite them (own knowledge).

### 3.4 Matters of convention

**K1. Table 2 comes before Table 1.** Low; convention.

Locations:
- Section 5: "Table 2 states each condition with a proposed test, the body that would certify it and a proposed re-check interval."
- Section 5: "Table 1 gives the grade ceilings."

Problem: Table 2 appears and is cited before Table 1.

Fix: Renumber the tables in order of appearance, or move the ceilings table first.

**K2. The AI Act is cited through a third-party website.** Low; convention.

Location:
- References: "Text consulted at https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/"

Fix: Cite the Official Journal text on EUR-Lex.

### 3.5 Coverage

**Checked:**
- every section of the paper, both tables, the abstract and the references;
- with priority given to the parts that carry the conclusion: Sections 2 and 5, Tables 1 and 2, the replies in Section 6 and the recommendations in Section 7.

**Not checked:**
- URLs and bibliographic details, against the sources themselves;
- the full texts of the ICRC position, the AI Act and the royal commission report;
- the current application dates of the AI Act, and any later case law;
- the studies and precedents cited above from my own knowledge.

These items are listed for verification in section 5.7.

## 4 Lens summaries

Each lens was run on its own before the synthesis. Steps are labelled evidence (from the paper), own knowledge, assumption or inference. Steps that coincide with an audit finding cite its ID instead of restating it. The mind maps are plain indented outlines, because this Markdown file cannot show colour.

### 4.1 Analytical

**Reasoning chain**

1. *Evidence.* Section 1 sets out the argument in three steps:
   - authority requires an answerable agent and a route of challenge;
   - the failures of automated decision-making are structural;
   - so a tiered allocation of authority is the right design.

   The licensing rule (Section 5) and the ceilings (Table 1) put this argument into practice.
2. *Inference.* The premises establish only that humans must supply answerability and a route of challenge. On their own, they do not fix how high a system's operative grade may go. The low ceilings need further premises about error costs and reviewer reliability. These appear piecemeal, in the asymmetry premise and in Sections 4.5 and 6.4, rather than as a stated premise (C1, C2).
3. *Evidence.* As a classification scheme, the grade scale misses some cases and misclassifies one row (G4, C8).
4. *Evidence.* As a rule set, it states key rules inconsistently: the statute route, the asymmetry premise, the grade 2 rule and the proportionality claim (C5, C6, C12, C11).
5. *Own knowledge.* The paper gives no figures and leaves its thresholds to certifying bodies. So this lens cannot estimate the expected harm under any ceiling. That would need error data for each decision class. For refused credit and unflagged welfare cases, such data cannot be drawn from operations at all (G7).
6. *Inference.* The structure of the argument supports the core negative claim. The architecture must be repaired before its ceilings can be judged on their merits.

**Key concepts and weights**

| Concept | Weight | Reason |
|---|---|---|
| Coherent definition of "authority" | 0.90 | The thesis is stated in this term. |
| A grade scale that covers every case | 0.80 | A ceiling cannot apply to a case no grade covers. |
| Rules consistent across sections | 0.75 | Readers applying different sections now get different answers. |
| Evidence for the ceilings | 0.55 | Decisive in principle, but the paper admits it does not yet exist, so it cannot be assessed here. |
| Measurable tests | 0.50 | Needed for use, but secondary to coherence. |

**Mind map**

- Analytical: revising the paper for defensibility, and confidence in it
  - Structure of the argument
    - Premise: authority requires answerability
    - Premise: the failures are structural
    - Missing premise: error costs and reviewer reliability fix the ceilings
  - The grade scale as a classifier
    - Cases it misses: envelopes that cannot be halted; effects before review
    - Misclassification: the protective stop
  - Consistency of the rules
    - The statute route
    - The asymmetry premise
    - The grade 2 rule; proportionality
  - Evidence and measurement
    - Thresholds left to certifying bodies
    - Outcomes the decision hides (selective labels)

### 4.2 Creative

**Reasoning chain**

1. *Inference.* Reframe the variable. Across the paper's own rows, acceptable and unacceptable delegation are separated less by domain than by the kind of rule:

   | Kind of rule | Examples from the paper |
   |---|---|
   | Public and pre-committed | Market halts; dosing limits |
   | Learned or discretionary | Prioritisation; market interventions |

   The paper applies this distinction to markets only.
2. *Own knowledge.* The same distinction explains accepted medical practice. Formula-based organ allocation, automatic defibrillators and closed-loop insulin delivery all run above grade 1. Their rules are set in advance, published or validated, and narrow (G2).
3. *Inference.* Reframe "grade" as measured behaviour rather than declared design. A deployment's real grade shows in its agreement rates, review times and reversal rates. Authority creep (Section 4.6) then becomes the main thing monitored rather than a side risk, and grade 1 is covered too (C4).
4. *Own knowledge.* Other fields offer mechanisms that have been tried in practice:
   - airport screening projects fictional threats onto real bags, which shows that seeded errors can work without touching real outcomes (G13);
   - a two-person rule could serve as a model for adverse determinations. As I recall, the EU AI Act uses one for remote biometric identification.
5. *Assumption.* An option the paper does not consider: let the affected person choose between an instant automated decision and a slower human one, with a guaranteed human appeal either way. This answers the dignity concern with choice rather than prohibition. Choice under financial pressure may not be free, however.
6. *Inference.* A principles-first structure (Option B) would make the ceilings follow from stated principles. They would then be harder to attack one row at a time.

**Key concepts and weights**

| Concept | Weight | Reason |
|---|---|---|
| Public pre-commitment versus learned discretion | 0.85 | One principle explains most of Table 1 and the precedents. |
| Grade measured from behaviour | 0.80 | Makes the grade observable and catches rubber-stamping. |
| Principles-first structure | 0.60 | Strong, but costly to carry out. |
| Mechanisms from other fields | 0.50 | Useful, but each analogy needs checking against the domain. |
| Opt-in automation with a human appeal | 0.40 | New, but its ethics are unresolved. |

**Mind map**

- Creative: revising the paper for defensibility, and confidence in it
  - Reframe the variable
    - Public, pre-committed rules
      - Market halts; dosing limits; organ-allocation formulas
    - Learned or discretionary policies
      - Prioritisation; market interventions
  - Reframe the grade
    - Grade measured from behaviour
      - Agreement rates; review times; reversal rates
  - Mechanisms from other fields
    - Seeded threats in airport screening
    - Two-person rule
  - A new option for affected persons
    - Choice between an automated and a human decision
    - Guaranteed appeal
  - A new structure
    - Principles first, with Table 1 as worked examples

### 4.3 Critical

**Reasoning chain**

1. *Inference.* The strongest counterargument is that the real alternative to automation is today's human process, which has its own errors and biases. A default of grade 1 costs lives, time and consistency, and those costs fall on patients and claimants, often poor ones. The paper places the burden of proof on automation without defending that choice (G9). This also marks where the paper's view fails: in any class where an automated decision with a robust right of challenge beats the human process, a grade-1 ceiling cannot be defended.
2. *Evidence.* The paper's definition of authority invites the charge that it begs the question (C1).
3. *Own knowledge.* Naming an accountable person may create a moral crumple zone. The paper's own sources argue that naming someone does not make blame fit (G3, W4).
4. *Evidence and own knowledge.* The paper is weakest where it leans hardest. Grade 1 carries the protective ceilings but has no tests, and the automation-bias literature concerns advice, which is grade 1 (C4).
5. *Inference.* Each choice of ceiling puts its cost on someone.

   | Choice | Who bears the cost |
   |---|---|
   | Low ceilings | People who would gain from faster or more accurate automation, such as low-resource patients and applicants who need quick decisions |
   | High ceilings | People wrongly denied or targeted, who are the least able to contest |

   The paper names this trade-off only in Section 6.6 (G10).
6. *Inference.* The military reply in Section 6.3 is the paper's most exposed argument, because it would license the very scenario the paper sets out to prohibit (G1).

**Key concepts and weights**

| Concept | Weight | Reason |
|---|---|---|
| Burden of proof | 0.85 | It decides most of the contested ceilings. |
| Real review at grade 1 | 0.85 | The protective ceilings depend on it. |
| Answerability reduced to naming | 0.70 | The first condition may pass on paper and fail morally. |
| Begging the question | 0.65 | A reviewer's first objection, though easily fixed. |
| Who bears the costs | 0.60 | Shows the values choice the paper must own. |

**Mind map**

- Critical: revising the paper for defensibility, and confidence in it
  - Strongest objection
    - The human process errs too
    - The burden of proof is not argued for
  - Conceptual weak points
    - The definition settles the thesis in advance
    - Naming someone is not answerability
  - The weakness the paper rests on
    - Grade 1 is never tested
    - Automation bias arises in advice
  - Who bears the cost
    - Low ceilings: people denied faster help
    - High ceilings: people wrongly denied or targeted
  - Most exposed argument
    - The speed reply would license targeting within an envelope

### 4.4 Systems-thinking

**Reasoning chain**

1. *Inference.* Six actors shape outcomes: the vendor, the deployer, the reviewer, the affected person, the certifier and the regulator. Under Recommendation 1, deployers declare their own grades. That gives them an incentive to label adverse actions as escalations or review flags (G8).
2. *Evidence.* Two feedback loops operate:
   - authority creep: shorter review windows mean reviewers get less practice and override less;
   - the label loop: the system's flags generate the labels it learns from.
   The triggers catch the first loop but not the second (C13).
3. *Inference.* Scarcity couples cases together. In a rationed queue, raising one case lowers others. Cases that are never flagged are never reviewed, so errors concentrate on the groups the model under-serves (C3).
4. *Inference.* The safeguards have side effects of their own:
   - a one-grade downgrade can remove a protective function, or demand approvals faster than people can give them (G6);
   - a trigger on near-zero overrides can push reviewers to override for show, while alert fatigue goes unmeasured (G14).
5. *Inference.* Delays matter. Collective harms surface late, and annual or quarterly re-checks are slow next to the drift of a high-volume system. The triggers therefore need continuous measurement (C13).
6. *Own knowledge.* Between states, one state's restraint on military autonomy depends on others' restraint. Coordinated limits need verification, which is hard for software. The paper's reply to competitive pressure needs this mechanism to be credible (W3).

**Key concepts and weights**

| Concept | Weight | Reason |
|---|---|---|
| Coupling through scarcity, and missed cases | 0.85 | This is where the most permissive medical row fails. |
| Gaming of classification | 0.75 | Self-declared grades invite it. |
| Label loop | 0.70 | The current triggers do not detect it. |
| A safe fallback when downgrading | 0.60 | Without one, the safeguard itself can cause harm. |
| Monitoring frequency against drift | 0.50 | Matters most at high volume. |

**Mind map**

- Systems-thinking: revising the paper for defensibility, and confidence in it
  - Actors and incentives
    - Vendor; deployer; reviewer; affected person; certifier; regulator
    - Self-declared grades invite gaming
  - Feedback loops
    - Authority creep: caught by the triggers
    - Label loop: not caught
  - Coupling through scarcity
    - Raising one case lowers others
    - Missed cases are never reviewed
  - Side effects of the safeguards
    - A downgrade can remove protection
    - The override trigger looks only one way
  - Delays and scale
    - Collective harm is detected late
    - Re-check intervals are slower than drift
  - Between states
    - Restraint depends on others
    - Verification is hard

### 4.5 Pragmatic

**Reasoning chain**

1. *Evidence.* Consider the paper's stated audience. A hospital committee applying Table 2 would need four things that the paper leaves open (C14, G6, G13, G3):
   - the thresholds;
   - the body that re-certifies after a trigger;
   - a safe way to seed errors in live care;
   - a rule for the vendor's responsibility.
2. *Inference.* The conditions have real costs (Recommendation 8), and extending tests to grade 1 adds more. The revision should name a minimum set of tests for each grade, so that small deployers can either comply or decline (C16).
3. *Inference.* Revising the paper is cheap and fully reversible. Its recommendations, once deployers or regulators adopt them, are harder to reverse. The two kinds of error also differ:
   - errors in the permissive rows cause harms that may not be undone;
   - errors in the restrictive rows cause forgone benefits that can be recovered later.
   This supports fixing the permissive rows first (C3, C8, G17).
4. *Own knowledge.* Seeded errors, independent samples of unflagged cases and subgroup monitoring are all practised in some fields. The tests are therefore achievable, but each needs a stated procedure.
5. *Assumption.* For a journal paper, the additions need about 2,000 words: the military argument, the burden of proof, the worked examples and the allocation class. They must be offset by compressing Sections 3.2, 6.2 and 6.3, and possibly by cutting markets.
6. *Inference.* The next actions, in order, are definitions and thesis, tables and rules, missing arguments, worked examples, verification, then a fresh audit (section 1.4).

**Key concepts and weights**

| Concept | Weight | Reason |
|---|---|---|
| Usable by the stated audience | 0.85 | This is the paper's own stated aim. |
| Worked examples | 0.70 | The cheapest proof that the tests can be applied. |
| Fix the permissive rows first | 0.65 | Their errors are harder to undo. |
| Cost of meeting the conditions | 0.55 | Decides who can comply. |
| Length budget | 0.45 | Real, but depends on the venue. |

**Mind map**

- Pragmatic: revising the paper for defensibility, and confidence in it
  - What the stated audience would need
    - Thresholds; re-certifying body; seeding procedure; vendor rule
  - Cost
    - A minimum set of tests for each grade
    - Grade-1 tests add cost
  - Reversibility
    - Revising the paper: cheap and reversible
    - Permissive rows: harms may be irreversible
  - Feasibility
    - Seeded errors; independent samples; subgroup monitoring
  - Length
    - About 2,000 words to add
    - Compress or cut to make room
  - Next actions
    - Definitions, tables, arguments, examples, verification, fresh audit

## 5 Transparency report

### 5.1 Framing

**Restatement.** The author needs two things:
- a plan for revising the paper so that it makes the most defensible case on whether, and when, AI systems should hold decision authority over medicine, military force and economic allocation;
- a calibrated judgement of how far the paper's central recommendation can be trusted.

**The decisions to be made.** Which revisions to make, in what order, and how much confidence to place in the thesis.

**Constraints.**
- It must remain a revision, not a new paper.
- It must stay usable by the audience the paper names: hospital governance committees, procurement officers, regulators and ethics boards.
- It must add no claim without support.
- It must respect a length budget, assumed to be journal length.

**Stakeholders.**
- The author, the stated audience and academic reviewers.
- The people decided about: patients, people in conflict zones, benefit claimants and borrowers.
- Those who run the systems: reviewers, operators and vendors.
- States and armed forces.
- The public, which bears collective market harms.
- Populations with few resources.

**What a good answer must do.**
- Rank the revisions by how much they add to defensibility.
- Keep the revised paper internally consistent.
- Separate values choices from factual disputes.
- Give calibrated confidence, part by part.
- Add no unsupported claims.

### 5.2 Assumptions

- **What "strongest defensible" means.** The version most likely to survive informed scrutiny from ethicists, lawyers, domain experts and regulators, while remaining usable by the stated audience. It does not mean the most persuasive or the most radical version.
- **Direction of the thesis.** The author wants to keep the direction of the thesis unless the analysis shows it cannot be defended.
- **Venue.** The paper is aimed at a journal, at roughly its present length.
- **Sources.** The paper is the only material used. Facts I supply are labelled own knowledge and were not checked against sources. The skill does not call for web search, and none was used.
- **Scope of "AI systems".** I read it as including the automated decision systems the paper discusses (G16).
- **Currency.** My knowledge runs to about mid-2026. I cannot see later legal changes, for example to the AI Act's application dates.

### 5.3 Which lens drove which part

| Lens | What it drove |
|---|---|
| Analytical | The conceptual repairs (C1, C2, G4, C8) and the fixes to make the rules consistent (C5, C6, C11, C12) |
| Critical | The burden-of-proof subsection (G9), the rewritten answerability test (G3), the military argument (G1) and the grade-1 safeguards (C4) |
| Systems-thinking | The escalation rule (C3), the triggers for label loops and alert fatigue (C13, G14), the fallback when downgrading (G6) and the classification rule (G8) |
| Creative | The class for rule-based allocation (G2), the idea of measuring grade from behaviour in the fix for C4, and Option B |
| Pragmatic | The order of the passes, the operational fixes (G13, C14, C16), the worked examples (G15), how to offset the extra length, and the next steps |

The audit supplied the exact locations and the smallest fixes for all of these.

### 5.4 What was weighted down or set aside, and why

- **Set aside: replacing the tiered framework** with a blanket prohibition or a purely procedural account. The question asks for a revision, and the framework's direction is well supported.
- **Set aside: a full survey of the law in every jurisdiction.** That is more than a revision needs, and the paper's Section 8 already limits its scope. W2 and G1 flag the legal points that matter most.
- **Weighted down: generative and agentic AI.** The grade scale covers these systems in principle, and limiting grade 3 to small decision spaces already excludes open-ended agents. A sentence saying so would help, but it is not urgent.
- **Weighted down: letting the affected person choose** between an automated and a human decision (Creative lens, step 5). Its ethics are unresolved, so it is offered as an idea, not a recommendation.
- **Not used: agreement among the lenses.** It was not allowed to raise any score (section 1.6).

### 5.5 Confidence scores and their drivers

**The revision plan: 72.** Its parts score 88 for the repairs, 65 for the added arguments, and 55 for the claim that the result would be the strongest version.
- Up: most findings can be checked against quoted text.
- Down: some precedents rest on my own knowledge and are unverified.
- Down: the lenses all come from one model.
- Down: I do not know the author's goals.

**The paper's central recommendation, as written: 55.**

| Part | Score |
|---|---|
| The core negative claim | 85 |
| The military ceiling | 60 |
| The licensing regime | 50 |
| The Table 1 ceilings | 45 |
| The asymmetry premise | 35 |
| Markets | 35 |

- Up: the documented failures and the convergent direction of regulation.
- Down: seven high-severity internal conflicts.
- Down: empirical conditions that have not been tested.
- Down: the strongest objections go unanswered.

**After the revisions:** a projected 65 to 70. This is a projection, not evidence.

### 5.6 What the reasoning cannot establish

- **Whether any ceiling is right.** That depends on comparative error rates for each decision class, for humans, AI, and humans working with AI. This analysis does not have them.
- **Whether real institutions can meet the tests** at a reasonable cost.
- **Whether my own-knowledge items are accurate.** These are the precedents and studies I cite from memory.
- **The values questions in PD2 and PD6.** Reasoning can expose them but not settle them.
- **Whether the lenses missed something.** All five come from one model, so their agreement is not independent verification.

### 5.7 What to verify with sources, data or experts

**Medicine**
- The FDA's 2018 authorisation of the IDx-DR autonomous screening system.
- US liver allocation by the MELD score, with a national review board for exceptions.
- The external validation of a widely used sepsis model (Wong et al., 2021, *JAMA Internal Medicine*).
- Override rates for drug alerts (van der Sijs et al., 2006).
- The details of the Obermeyer case.

**How humans and AI perform together**
- Vaccaro, Almaatouq and Malone (2024, *Nature Human Behaviour*).
- Goh et al. (2024, *JAMA Network Open*).

**Military**
- The full ICRC 2021 position, including its limits on situations of use and its requirements for timely intervention and deactivation.
- The 2003 Patriot fratricide incidents.
- Additional Protocol I, Articles 41 and 57.
- State positions, and UN General Assembly resolutions on autonomous weapons from 2023 onward.
- The process under the Convention on Certain Conventional Weapons (CCW).

**Economy and law**
- GDPR Article 22, and the Court of Justice's SCHUFA judgment (C-634/21).
- The Equal Credit Opportunity Act, Regulation B and CFPB Circular 2022-03.
- The SEC market access rule (Rule 15c3-5) and MiFID II Article 17.
- The enforcement action against Knight Capital.
- The Dutch childcare-benefits case.
- The findings of the Robodebt royal commission.
- The wording of AI Act Article 14 on automation bias, and the Act's current application dates.

**Responsibility literature**
- Elish (2019) on moral crumple zones.
- Critics of the responsibility-gap thesis.
- Lakkaraju et al. (2017) on selective labels.

**The paper itself**
- The bibliographic details and URLs in its reference list.

### 5.8 What the author still has to decide

- **Structure:** Option A or Option B (PD1).
- **Burden of proof:** a precautionary default or a comparison of harms, and how to defend the choice (PD2).
- **Effects before review:** whether an adverse decision that takes effect before review, with a later appeal, can ever be grade 2 (PD6). The answer decides how the paper treats much current credit practice.
- **Escalation:** how strong the escalation rule should be (PD3).
- **Markets:** keep them, narrow them or cut them (PD4).
- **The military ceiling:** absolute, or dependent on conditions such as a working stop and a narrow class of targets.
- **New domains:** add employment and insurance, or rule them out of scope (G12).

### 5.9 Professional review

This analysis is not legal, medical, military or financial advice. Before anyone uses the paper's tests in practice, qualified specialists should review them:

| Part of the paper | Reviewer |
|---|---|
| Military sections | A lawyer specialising in international humanitarian law |
| Medicine rows | A clinical ethicist and a specialist in medical-device regulation |
| Welfare and credit rows | An administrative-law or consumer-credit lawyer in each target jurisdiction |
| Market rows | A specialist in financial-markets regulation |

The paper's own Section 8 makes the same point.
