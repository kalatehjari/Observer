Model ID: claude-opus-5-5

# Observer review of "Graded Authority for AI over Sensitive Human Matters"

**Question.** How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

**Method.** Observer multi-lens reasoning at full (high-stakes) depth: five lenses, an audit of the paper, and a Higher-Order Observer synthesis. I used web sources only to check facts that the paper's claims are about: 13 searches and 13 pages read, all listed in §4.5. ID prefixes: C = conflict, K = matter of convention, G = gap, W = claim about the world.

**Not professional advice.** The paper and this review concern medicine, armed force, credit and welfare. Nothing here is medical, legal, military or financial advice. Before any tier is used for a real deployment, the relevant rows should be reviewed by a clinical safety specialist, a lawyer in international humanitarian law (weapons review), and a consumer-credit or data-protection lawyer.

## 1. Summary

**Recommendation.** Revise the paper rather than rewrite it. Keep its graded, permission-by-permission architecture and the direction of its thesis. Then make four repairs, in this order:

1. Restate the thesis so that it matches the paper's own table and definitions.
2. Make grade 1 (advice) a tested grade. The paper sends every adverse decision there, and automation bias works on advice too.
3. Repair the four weakest supports: the escalation carve-out, the asymmetry premise, the grounds for the military ceiling, and the claim about market answerability.
4. Position the paper against existing law and real deployments.

Make the ceiling on force against persons categorical. Make the medical and economic ceilings rebuttable defaults with a demanding route for evidence, unless the author holds that contestability is owed whatever the outcomes. That is a values choice for the author to make and state openly.

**Confidence in this revision plan: 78/100.** By part:

- Consistency and definition repairs: 88.
- Substantive repairs: 72.
- Additions that depend on the author's aims and values: 62.

**Confidence in the paper's central recommendation, as written: 60/100.** The direction is stronger than the package: a human decision-maker of record for adverse determinations about persons and for force against persons. By part:

| Part | Score |
|---|---|
| Core direction, restated as in revision item 1 | 72 |
| Force against persons held at grade 1 | 70 |
| Welfare denials, debts and sanctions at grade 1 | 70 |
| Medical deprioritisation and treatment selection at grade 1 | 66 |
| Bounded-delegation rows (dosing, defensive envelopes, market rules) | 62 |
| Credit refusals at grade 1 | 50 |
| Tests and triggers as working safeguards | 50 |
| Favourable approvals at grade 2 under the asymmetry premise | 45 |
| Discretionary market interventions at grade 1 | 35 |

**Most serious problems, ranked by severity** (IDs as in §4)

High

- **C1** (Abstract, §1): the thesis rules out "final authority" over decisions about persons, yet Table 1 gives grades 2 to 4 to three such decisions under the paper's own definition. "Final" is never defined.
- **C2** (Table 1 vs Rec 2): the statutory route to grade 2 covers credit refusals only in Table 1, but in Rec 2 it covers every adverse determination, debts and sanctions included.
- **G1** (§2, §4.5, §5): every adverse decision goes to grade 1, and grade 1 has no test, although §2 concedes that automation bias acts on advice. The central safeguard can fail without anyone noticing.
- **G2** (§4.1, §4.2, §3.2): the military ceiling rests on answerability and contestability. By the paper's own method, neither separates a human killing from a machine killing. The grounds that would separate them (distinction, recognising surrender, predictability) are named but never argued.

Medium (10 of 24)

- **C6** (§6.4): the volume argument against grade 2 for credit refusals applies with more force to grade 1.
- **C7** (§5, Table 1): escalation sits at grade 2, yet the paper frames its lead medical case as allocation, which §5 assigns to grade 1.
- **G4** (§5): "costs little if it is wrong" ignores missed escalations. Those were the Obermeyer harm, and no seeded-error test can see them.
- **G5** (§1, §4.6): flags for fraud investigation have no row, and the general escalation rule would admit them at grade 2.
- **C3** (§5 vs §6.5): "reversal" of the asymmetry premise means different things in the two sections.
- **G6** (Table 2): the asymmetry check has no test, certifier or interval, though Table 1 and Rec 2 depend on it.
- **W1** (§5, §3.3): "no one can answer" for collective market harm is overstated, and it is the only ground given for the discretionary-market row.
- **G10** (§6.1): no route lets evidence raise a ceiling, so "makes it testable" is overstated.
- **G16** (Table 1, military): the line between persons and objects in the defensive row is itself a classification, and it has failed with fatal results.
- **G14** (§6.4, §8): the paper does not engage GDPR Art. 22, the detail of the AI Act, the CFPB's adverse-action rule or DoD Directive 3000.09.

A further 14 medium and 16 low findings are in §4.

## 2. Full recommendation

### 2.1 Framing

- **Restated question.** What revisions would let this paper survive informed critical review as an argument about AI decision authority in medicine, armed force and economic allocation? And how far can its central recommendation be trusted, as written and after revision?
- **Goal.** A ranked revision plan the author can carry out, and a calibrated confidence, part by part, in the central recommendation.
- **Constraints** (used in the check in §2.4):
  - R1. Keep the paper's stated purpose: tests that hospital committees, procurement officers, regulators and ethics boards can apply.
  - R2. Prefer the smallest change that fixes each problem. Keep what works: the grade scale, the bundle of permissions, the five conditions, the downgrade idea, and the paper's candour that its ceilings are design judgements.
  - R3. Add no claim without a source the author has read, or a label marking it as an assumption or a values choice.
  - R4. Name values choices as such and leave them to the author.
  - R5. Stay within journal-article length. Each addition must earn its place.
- **Stakeholders.** The author and the readers the paper names. The people affected: patients; people in conflict zones, including civilians and people who surrender; benefit claimants; borrowers. Named accountable officials and reviewers. Deployers. The public that bears collective harms.
- **A good answer must** find what changes or weakens the conclusion, give fixes that create no new conflicts, and score confidence part by part.
- **Assumptions.**
  - A1. "Strongest defensible" means internally consistent, claiming no more than its evidence, and able to survive review by ethicists, lawyers and domain experts.
  - A2. The author wants to keep the direction of the thesis.
  - A3. The audience is mixed academic and practitioner, as §1 says.
  - A4. The "central recommendation" is §1's thesis together with its operational form in Table 1 and Recs 1 to 8.
  - A5. The paper is a draft the author will revise.

### 2.2 Recommendation

Revise, and keep the architecture. The paper's real contribution is to treat authority as a bundle of separable permissions, each with a grade ceiling, tests and downgrade triggers, and that contribution holds. What fails is precision, in three places:

- The thesis contradicts the paper's own table.
- Two operative texts disagree about the statutory route.
- The grade where the paper places every adverse decision has no safeguard.

Several supports are also weaker than the conclusions they carry: escalation, the asymmetry premise, the military grounds and market answerability.

The recommendation is conditional on one values choice (D1, §3):

- **If** the author accepts that the medical and economic ceilings should respond to evidence about outcomes, make them rebuttable defaults with a demanding route upward, and keep force against persons categorical.
- **Otherwise**, keep every ceiling categorical. Delete the claim that the framework makes the lives-saved question testable, and say plainly that the paper accepts worse outcomes in some cases in exchange for contestability.

Either way, make items 1 to 7 and 9 to 13 below.

### 2.3 Revision plan, in priority order

Each item is the smallest fix that resolves the IDs it names.

1. **Restate the thesis** (C1, C5).
   - In the Abstract, §1 and §7.2, replace "final authority over determinations about particular persons" with a sentence the table can be checked against. For example: "AI systems should not hold authority above grade 1 over adverse determinations about particular persons, over the allocation of scarce goods among persons, or over force against persons. They may hold authority at grades 2 and 3 over favourable, protective, escalatory or envelope-bounded functions when the applicable conditions are certified, and never at grade 4 over decisions about persons."
   - Reclassify the protective stop as grade 3, which is where the paper's own definition puts it. Delete "with one exception" and the sentence after it in §5. In §6.1, change "grade 3 or 4 use" to "grade 3 use".
   - Add to the §2 test the case of an outcome that a human can reverse at once after it takes effect.
2. **Settle the statutory route** (C2, K2, C11). State one rule, identically, in Table 1, §5 and Rec 2. The option most consistent with the Robodebt reasoning in §3.3 has three parts:
   - Keep the route for credit refusals only, and write that ceiling as "1 (2 under statute)".
   - Require a statutory grant to pass the Table 2 tests as well, since §6.4 itself says a legal requirement does not make oversight real.
   - Edit Rec 2 so that welfare denials, debts and sanctions need a named human decision-maker of record, without exception.
3. **Make grade 1 a tested grade** (G1, C6, C9).
   - §2: keep "not authority", but add that advice in sensitive decision classes is regulated.
   - §4.5: change "every grade above advice" to "every grade, including advice".
   - Table 2: apply a grade-1 form of real override and contestability to grade-1 deployments in adverse, allocative and force classes. Call it "real review": a minimum review time, synthetic seeded cases and measured disagreement. State that failing the test restricts the system to grade 0 (information only) or suspends it.
   - §6.4: rewrite its last sentence. Grade 1 for credit refusals is licensed only when the volume of would-be refusals routed to humans fits certified review capacity. The system may still approve automatically where the asymmetry check passes.
   - §6.6: align its proportionality sentence with this rule.
4. **Repair the escalation carve-out** (C7, G4, G5).
   - Narrow §1's "steps that only escalate or protect", and §5's escalation rule, to escalation toward care or protection where capacity is reserved and no one is displaced.
   - Treat selection into a scarce programme as allocation, with ceiling 1, unless capacity does not bind.
   - Add to the escalation row an audit of a random sample of unflagged cases, reported by subgroup.
   - Add an economy row: "Flagging a person for investigation or fraud review | 1 | Named human decision-maker of record; random audit sample independent of flags".
   - Limit "costs little if it is wrong" to false positives in uncongested queues.
5. **Specify the asymmetry premise** (C3, C4, G6).
   - Replace "reversed" with "withdrawn". Where the ordering fails or reverses in a domain, favourable decisions there also take ceiling 1, and adverse decisions stay at 1 in every case.
   - Use one comparison basis in §5 and §6.5: irreversible harm to anyone, the applicant included.
   - Re-file the over-indebted borrower as harm to the applicant.
   - Add a sixth row to Table 2 for the asymmetry check. Test: evidence on how reversible each error type is, for applicants and third parties. Certifier: the domain regulator. Plus a re-check interval.
6. **Re-ground the military ceiling and close its gaps** (G2, G3, G16).
   - Keep answerability, but concede that named command accountability can close the responsibility gap for envelope systems.
   - Rest the ceiling on force against persons on three named grounds:
     - Distinction and the recognition of surrender. A person can surrender, and a human combatant can see and honour it, and the §3.2 area contains people who have surrendered. Whether current systems can reliably recognise this is an empirical premise, to be supported or labelled as an assumption.
     - Predictability, using the ICRC's reasoning that effects must be "sufficiently understood, predicted and explained".
     - Dignity, labelled as a values choice.
   - Rewrite §4.2's sentence on lethal decisions to match.
   - Classify the §3.2 case explicitly. It is prohibited because it targets persons, and also because civilians are present, which the ICRC's limit on situations of use excludes even for systems that target objects.
   - Add a row for offensive engagement of objects.
   - Add classification-risk conditions to the defensive row, citing the 2003 Patriot fratricides as the paper's documented military case.
7. **Re-ground or rescope the market rows** (W1, G17).
   - Replace "no one can answer" with the defensible claim. Firms are answerable: the SEC fined Knight Capital $12m under the market access rule after it lost more than $460m in about 45 minutes. What is slow and contestable is attributing a collective harm to one learned policy, and the harm outruns correction.
   - Define "discretionary AI market interventions". If the term means public-authority market operations, say so and leave private algorithmic trading out of scope. If it includes private trading, defend that sweeping implication explicitly.
8. **Add an evidence route upward** (G10). This applies only on the first branch of D1.
   - Add one procedural paragraph to §5. A medical or economic ceiling may rise one grade only after a prospective evaluation, approved by an ethics body and certified independently, shows no subgroup harm and preserved contestability.
   - Leave thresholds to certifiers, as §5 already does, and exclude force against persons.
   - On the second branch, delete "the framework makes it testable" from §6.1 instead.
9. **Engage existing law and real deployments** (G14, G15, G11). Add one subsection of about 700 words covering:
   - GDPR Art. 22 and the CJEU's SCHUFA ruling on credit scores.
   - AI Act Art. 14(4)(b) on automation bias, the 2 December 2027 start for Annex III obligations, and the Art. 2(3) military exclusion.
   - The CFPB's 2022 circular requiring specific reasons even for complex models.
   - DoD Directive 3000.09, which requires "appropriate levels of human judgment" but prohibits nothing.
   - FDA-authorised autonomous screening (IDx-DR) as the hard medical case.

   In the same subsection, say where the paper is stricter than the law, and why. Define the scope as "automated decision systems, including machine-learned models", since Robodebt was data matching. Update §8.
10. **Make certification credible** (G12, G13).
    - For adverse, allocative and force classes, require external verification of answerability and real override.
    - Add to the answerability test that the named person understands the system's limits and has authority matching the outcomes they answer for.
11. **Make the machinery usable** (G7, G8, G9, G18, G20). Add:
    - a matrix of which conditions apply at which grade and row;
    - triggers for the label loop (training labels drawn from cases the system itself selected, with no independent random sample) and for detection delay;
    - a named downgrade target for each row, in place of "one grade";
    - synthetic seeded cases;
    - a scheduled right-target re-check, with the error metric named for each trigger.
12. **Fix two replies that misuse the paper's own case** (C8, W2). Rewrite §6.2's premise that human bias is heterogeneous, and §6.1's attribution to the Obermeyer study, as the audit sets out.
13. **Copy-edit the low items** (C10, K1, K3 to K6, W3 to W7, G19).

Then re-audit the revised draft. Items 1 to 5 change Table 1, §5 and the Recommendations together, and that is where the current conflicts arose.

### 2.4 Check of the recommendation

I tested each item against the framing constraints (R1 to R5), the paper and the audit.

| Item | Constraints | Risk of a new conflict, and how it is avoided | Risk of an unsupported claim | Size |
|---|---|---|---|---|
| 1 | R1, R2 met | Must change the Abstract, §1, §5, §6.1 and §7.2 together, or the old wording survives somewhere | None: text only | Small |
| 2 | R2; R4 (the choice is the author's) | Opening the route to all adverse classes would contradict §3.3's reasoning; the recommended option avoids this | None | Small |
| 3 | R1 met; R5 adds about a paragraph | Could clash with "Grades 0 and 1 are not authority", so it is worded as regulated advice. It adds cost (Rec 8), so it is limited to sensitive classes, consistent with §6.6's proportionality | None new: §2 already concedes the point, and Parasuraman and Manzey are already cited | Small to medium |
| 4 | R2 met | A broad rule could forbid useful urgent-review flags, so grade 2 stays for urgent review with reserved capacity | The Dutch case is new. Verified (§4.5 [10]); cite the DPA decision itself | Small |
| 5 | R2, R3 met | None, if one comparison basis is used everywhere | None | Small |
| 6 | R3: the surrender-recognition premise is empirical, so it is labelled or supported. R4: dignity named as a values choice | Rec 5 and the new object-engagement row must agree. That row's ceiling is a design judgement and must be labelled as one | Patriot facts verified via a secondary account (§4.5 [8]); cite the 2005 Defense Science Board report | Medium; justified by G2's severity |
| 7 | R2 met | Rec 6 must change in step | Knight Capital verified (§4.5 [7]) | Small |
| 8 | R4: conditional on D1 | Excluding force against persons keeps it consistent with Rec 5 and the ICRC | Procedural only; no thresholds | Optional addition |
| 9 | R1 favours it; R5 costs about 700 words | §8 must be updated in step | Every legal claim must cite the primary text. I read secondary summaries for SCHUFA, IDx-DR and the Omnibus | Medium; justified because the named readers are regulators |
| 10 | Adds cost, so limited to sensitive classes | None | "Moral crumple zone" is my own knowledge, unchecked here; cite it only after reading it | Small |
| 11 | R1 favours it | The matrix must agree with Table 1's conditions column | None | Medium |
| 12, 13 | R2 met | None | None | Small |

No item adds an empirical claim without a source or a label. The largest items (6, 9, 11) are the ones whose problems are high-severity or block practical use. Revisions often introduce new conflicts, so audit the revised draft again, especially Table 1 against §5 and Recs 1 to 8.

### 2.5 Confidence scores

**A. This revision plan: 78/100.**

- Up: every internal finding rests on an exact quotation that any reader can check. The external facts used in the fixes were checked against primary or authoritative sources (§4.5).
- Down: all five lenses come from one model, so their agreement is not independent verification. No domain expert or intended reader has tested the fixes.
- Down: which version is "strongest" depends partly on values choices and aims that only the author can settle (D1, D2, D5).
- By part:
  - Consistency and definition repairs (items 1, 2, 5, 12, 13): 88.
  - Substantive repairs (items 3, 4, 6, 7, 10, 11): 72.
  - Additions that depend on the author's aims (items 8, 9): 62.

**B. The paper's central recommendation, as written: 60/100.**

- Up: the direction matches positions that bodies outside this analysis reached by their own processes:
  - GDPR Art. 22: a default bar on solely automated decisions, with safeguards.
  - AI Act Art. 14: effective oversight, naming automation bias.
  - The ICRC's 2021 position: prohibitions and limits.
  - DoD 3000.09: human judgement over force, though it prohibits nothing.

  It also fits documented failures: Robodebt, the Obermeyer label, the Dutch fraud profiling and the Patriot fratricides.
- Down: the specific ceilings are design judgements. They rest on an asymmetry premise the paper says it does not establish (§8) and on a grade 1 that has no test (G1).
- Down: internal conflicts let a reader take the recommendation two ways at key points (C1, C2). And in no domain is there comparative evidence on outcomes under human versus automated decision-making.

| Part | Score | What moves it |
|---|---|---|
| Core direction, restated as in item 1 | 72 | Up: convergence with independent institutions and documented cases. Down: grade 1 untested; no comparison of outcomes |
| Force against persons at grade 1 (Rec 5) | 70 | Up: the ICRC position; misclassification is a documented failure. Down: major states reject prohibition (DoD 3000.09); the paper's own grounds are weak (G2) |
| Welfare denials, debts and sanctions at grade 1 | 70 | Up: Robodebt and the Dutch case show the harm and the burden on those least able to contest. Down: Rec 2's exception (C2); cost of review at volume |
| Medical deprioritisation and treatment selection at grade 1 | 66 | Up: the Obermeyer label risk; consent norms for treatment. Down: authorised autonomous screening (G15); unclear escalation boundary (C7) |
| Bounded-delegation rows | 62 | Up: matches long practice and the ICRC's regulated category. Down: Patriot (G16); protective stop misgraded (C5); downgrade path (G9) |
| Credit refusals at grade 1 | 50 | Down: the paper's own volume argument (C6); existing reasons-and-contest regimes offer an alternative (W3, G14). Up: contestability matters when a refusal excludes someone from housing |
| Tests and triggers as safeguards | 50 | Up: they target documented failure modes. Down: G1, G8, G12 |
| Favourable approvals at grade 2 under the asymmetry premise | 45 | Down: premise unestablished (§8); C3, C4, G6. Up: plausible for low-cost welfare approvals |
| Discretionary market interventions at grade 1 | 35 | Down: sole ground overstated (W1); term undefined (G17). Up: collective harms are fast (Knight Capital) |

Reversibility cuts both ways. The ceilings are easy to revise on paper, but regulators who adopt them would impose costly operational change. Harms from too much automation, such as wrongful debts, deaths and lost care, are often irreversible. That asymmetry supports caution in the paper's direction, but not its specific numbers.

### 2.6 What would change this recommendation

- **If the author wants a short practitioner brief** rather than a defensible scholarly paper, items 8 and 9 shrink to a paragraph each.
- **If the author holds that contestability is owed whatever the outcome**, item 8 is dropped and the categorical ceilings stay, with the trade-off named.
- **If data showed that automated decisions with fast human review on request do better** in some domain, the credit-refusal ceiling should move to grade 2 with contestation, and my score for the paper's credit row would fall further. "Better" here means fewer and more evenly spread uncorrected errors than grade-1 review, judged by reversal rates and subgroup error.
- **If engagement systems were shown to reliably recognise surrender and civilian status** in mixed areas, ground (a) of item 6 would weaken. Predictability and dignity would remain.

### 2.7 Next steps

1. Make the four high-severity fixes first (C1, C2, G1, G2). They change what the paper claims.
2. Decide D1 and D2 (§3), and write each into the paper as a named values choice.
3. Re-audit the revised draft, above all Table 1 against §5 and the Recommendations.
4. Have each domain's rows reviewed by the right specialist: a clinical safety specialist, an international humanitarian law adviser experienced in weapons reviews, and a consumer-credit or data-protection lawyer.
5. Replace the secondary sources in §4.5 with primary texts before citing them.

## 3. Convergence zones and productive divergences

All five lenses come from the same model. Their agreement shows that the analysis is internally consistent; it is not independent verification. The zones that rest on the paper's text (Z1, Z3, Z5) can be checked by any reader. The ones that rest on assumptions (part of Z2, and Z7) cannot.

### Convergence zones

- **Z1: The thesis must match the table** (C1). Reached by the Analytical, Critical and Pragmatic lenses. Basis: shared evidence, namely the paper's own definitions and Table 1. Strong.
- **Z2: Grade 1 does not protect by itself** (G1, C6). Reached by all four of the following:
  - Analytical: the conflict between §2 and §4.5.
  - Critical: a rubber stamp at grade 1.
  - Systems: the loop in which volume brings time pressure and then automation bias.
  - Pragmatic: review capacity.

  Basis: shared evidence (the paper's own concession, and the automation-bias literature it cites), plus a shared assumption that review quality falls under volume pressure. That assumption is plausible but not measured here, so the zone is moderately strong.
- **Z3: The escalation carve-out is unsound as stated** (C7, G4, G5). Reached by all four of the following:
  - Analytical: the allocation rule.
  - Systems: coupled queues, invisible omissions and investigation flags.
  - Critical: the Obermeyer harm was an omission.
  - Creative: error detectability.

  Basis: shared evidence, including the verified Obermeyer and Dutch facts. Strong.
- **Z4: The military ceiling needs different grounds** (G2, G3, G16). Reached by the Critical, Creative and Systems lenses. Basis: shared reasoning about the text, plus verified facts (the ICRC position; Patriot 2003). Moderate, because whether the dignity ground persuades is a values question.
- **Z5: The asymmetry premise is under-specified and doubtful for credit** (C3, C4, G6). Reached by the Analytical, Critical, Creative and Pragmatic lenses. Basis: shared evidence (the text), plus my own unverified knowledge of responsible-lending rules. Moderately strong.
- **Z6: The paper must engage existing law** (G14). Reached by the Pragmatic, Critical and Analytical lenses. Basis: verified legal texts. Strong on the facts; how large the addition should be is a judgement.
- **Z7: The framework needs a way to learn from evidence** (G10). Reached by the Critical, Creative and Pragmatic lenses. Basis: the shared assumption that the author wants revisable ceilings. That is weaker than it looks, which is why D1 below exists.

### Productive divergences

- **D1: Categorical or rebuttable ceilings for medicine and the economy.**
  - The positions: the Critical and Pragmatic lenses favour rebuttable defaults with a route for evidence, which answers the lives-saved and low-resource objections. The paper's own contestability principle points the other way: a person is owed review "whether or not the decision is accurate" (§4.2), which supports categorical ceilings.
  - Source: values (process rights against outcomes) and time horizon (today's evidence against future evidence).
  - Judgement: productive. This is a real trade-off that the author must own, and §2.2 is conditional on it.
- **D2: Credit refusals at grade 1, or automated refusal with strong review after the fact.**
  - The positions: the Systems and Critical lenses expect grade-1 review at volume to decay into a rubber stamp. The paper's concern for those least able to contest expects after-the-fact review to fail exactly those people.
  - Source: a factual dispute (does human review at volume beat automation plus contestation?) and values (who bears the burden of contesting).
  - Judgement: productive. Data on reversal rates and subgroup error would settle the factual part; until then it is a values choice.
- **D3: Rescope or re-ground the market rows.**
  - The positions: the Pragmatic lens says these rows fall outside a thesis about decisions on persons. The Systems lens says collective, fast harms matter in their own right.
  - Source: scope and time horizon.
  - Judgement: productive but low-stakes. The author chooses the scope. Either way the overstated claim (W1) must go.
- **D4: Drop or reframe contestability in lethal decisions.**
  - The positions: the Critical lens would drop it because it does not separate human from machine. The Creative lens would reframe it as recognising surrender in the moment.
  - Source: the weight given to economy of argument against richness of argument.
  - Judgement: resolved. The reframed version meets the Critical objection, provided its empirical premise is supported or labelled.
- **D5: How much to add.**
  - The positions: the Pragmatic lens wants the smallest changes and journal length. The Critical lens wants every strong objection answered.
  - Source: values (thoroughness against economy).
  - Judgement: resolved by the priority order in §2.3. The high-severity items come first, and items 8 and 9 are sized to the author's aim.

### Noise resolved

- I first read "final authority" as meaning "irreversible" and set that reading aside. Under it, grade-3 dosing would still conflict with the thesis, because a delivered dose cannot be undone. The real conflict is definitional (C1).
- A systems suggestion that Table 2 should set numerical thresholds was dropped. The paper deliberately leaves thresholds to certifiers, which is defensible; the only problem is where it overclaims about this (W7).

## 4. Audit of the paper

### 4.1 Coverage

**What I checked.**

- Every section, both tables, all eight recommendations and the limitations section.
- Each rule, definition, threshold and condition against every place that restates or applies it.
- The claims that carry the conclusions, against the sources listed in §4.5.
- The bibliographic details of the 13 references, against my own knowledge rather than by fetching them. They appear correct.

**What I did not check.**

- The three secondary web copies the paper links to (springlex.eu, the robsparrow.com PDF and the PubMed page).
- The primary texts of the Royal Commission report, the Obermeyer article, the Defense Science Board report, the FDA decision and the CJEU judgment. For these I read the summaries listed in §4.5, and the author should cite the primaries.

**How to read each finding.** Each finding gives its ID, severity and type, then:

- **Locations:** where the problem occurs.
- **Passages:** exact quotations from the paper.
- **Problem:** what is wrong.
- **Weakens:** what it weakens.
- **Fix:** the smallest fix, often by reference to a revision item in §2.3.

### 4.2 Conflicts and matters of convention

**C1 (High; conflict caused by an undefined key term)**
- **Locations:** Abstract; §1; §2; Table 1 (medicine and economy rows); §5; §7.2.
- **Passages:**
  - Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy".
  - §1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
  - §2: "Authority in the relevant sense is grades 2 to 4."
  - §2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service."
  - Table 1 rows: "Dosing within clinician-set limits" (grade 3), "Automatic protective stop that moves the system to a defined safe state" (grade 4) and "Favourable approvals, such as low-cost approvals" (grade 2).
- **Problem:** "Final" is never defined. Under §2's own definitions, all three rows are decisions about persons held at a grade of authority, so the literal thesis forbids what the table licenses. §1 states the intent in its next sentence: "They may hold bounded authority: over narrow executional tasks whose limits humans set in advance, over steps that only escalate or protect, and, in some lending and administrative settings, over favourable decisions." But the headline is the sentence readers will cite.
- **Weakens:** the statement of the central recommendation.
- **Fix:** revision item 1.

**C2 (High; conflict)**
- **Locations:** Table 1 (credit and welfare rows); §5; Rec 2.
- **Passages:**
  - Credit row condition: "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit".
  - Welfare row: "Welfare denials, debt raising and sanctions", with the condition "Named human decision-maker of record".
  - §5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
  - Rec 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."
- **Problem:** Table 1 limits the statutory route to credit refusals. Rec 2 opens it to debts and sanctions, which is the Robodebt class. §5 states no exception at all. A regulator following Rec 2 could license grade-2 debt raising that Table 1 forbids.
- **Weakens:** the ceiling for the paper's flagship economic case.
- **Fix:** revision item 2.

**C3 (Medium; conflict)**
- **Locations:** §5; §6.5.
- **Passages:**
  - §5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
  - §6.5: "Where evidence shows that wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants, the premise is reversed for that domain, and approvals fall to grade 1."
- **Problem:** In §5, "reversed" implies that adverse decisions would then get more authority than favourable ones, which §5's grade-1 rule for adverse determinations forbids. §6.5 instead only lowers approvals. The two comparisons also differ: §5 counts all irreversible harm, "including" harm to third parties, while §6.5 counts harm "to others" only.
- **Weakens:** the asymmetry mechanism and the favourable-approvals row.
- **Fix:** revision item 5.

**C4 (Medium; conflict)**
- **Locations:** §6.5.
- **Passages:**
  - "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry, a lender that absorbs losses, or the public that bears the cost of a bad allocation."
  - "The asymmetry premise counts mainly the harm to the person affected, so this objection threatens it directly."
- **Problem:** The first example is the applicant. Filing it under "people other than the applicant" hides the most direct threat to the premise in credit: a wrongful approval can harm the very person approved. (Own knowledge, not checked here: responsible-lending rules exist for this reason.)
- **Weakens:** the asymmetry premise as applied to credit, and §6.5's reply.
- **Fix:** revision item 5.

**C5 (Medium; conflict)**
- **Locations:** §2; Table 1 (protective-stop row); §5; §6.1.
- **Passages:**
  - §2, grade 4: "The system acts with no timely human veto, and its limits are absent or set by the system itself."
  - §2, grade 3: "The system acts within limits fixed in advance by accountable humans, who monitor the envelope and can halt it, but do not approve each act."
  - Row condition: "Narrow and reversible; removes no entitlement; clinician can countermand at once".
  - §5: "No domain licenses grade 4 for decisions about persons, with one exception."
  - §6.1: "Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops."
- **Problem:** A stop to a defined safe state that a clinician can countermand has limits set by humans. It therefore fails the second condition of grade 4 and meets the definition of grade 3, so the paper's only grade-4 exception is a misclassification. The §2 test ("If a human must be able to change an individual outcome before it takes effect, the system is at grade 2 or below. If the human can change only the envelope or stop the system, it is at grade 3.") also has no case for an outcome that a human reverses after it takes effect.
- **Weakens:** the claim that grade 4 is ever licensed, and the clarity of the grade test.
- **Fix:** revision item 1.

**C6 (Medium; logical conflict)**
- **Locations:** §6.4; §2; §3.3.
- **Passages:**
  - §6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."
  - §2: "The system recommends options with reasons. A human selects and remains the decision-maker of record."
  - §3.3: "Lending decisions are typically made in high volume, which makes individual review costly and turns the design question into one of what review is possible at scale."
- **Problem:** Grade 1 requires a human to select the outcome in every case, which demands more human attention per case than grade 2's passive override window. If review is impossible at volume, grade 1 will be impossible too, or it will become a rubber stamp.
- **Weakens:** the rationale for the credit-refusal ceiling and its feasibility.
- **Fix:** revision item 3 (a capacity rule that routes only would-be refusals to humans).

**C7 (Medium; conflict)**
- **Locations:** §1; §2; §3.1; §5; Table 1 (escalation row).
- **Passages:**
  - §3.1: "What is at stake is the allocation of attention among people whose health depends on it, and the trust of communities whose needs were misread."
  - §5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
  - Table 1 row: "Escalating a case for urgent clinician review" (grade 2).
  - §2: "Escalation that changes only a queue position is not such a determination, but it can shape one, which is why Section 5 treats it separately."
- **Problem:** The paper frames its lead medical case as allocation, which §5 sends to grade 1, yet the escalation row holds the same kind of function at grade 2. The case's system did more than reorder a queue: patients above the 97th percentile were enrolled automatically (verified, §4.5 [1]). In a queue for a scarce resource, moving one case up moves others down.
- **Weakens:** the escalation row, and §1's carve-out "over steps that only escalate or protect".
- **Fix:** revision item 4.

**C8 (Medium; conflict)**
- **Locations:** §6.2; §3.1.
- **Passages:**
  - §6.2: "Human bias is heterogeneous. Different officials err in different ways, and each can be questioned, trained and replaced."
  - §6.2: "Automated bias is uniform and scaled."
  - §3.1: "Because, at the same level of illness, less had been spent on Black patients, the proxy systematically under-identified them (Obermeyer et al., 2019)."
- **Problem:** The biased label came from a systematic, institution-wide pattern of human spending. The source I read puts it as: at a given level of health, Black patients generated lower costs (§4.5 [1]). That is uniform human bias, the kind §6.2 says humans do not show. The reply to one of the strongest objections therefore rests on a premise that the paper's own case contradicts.
- **Weakens:** §6.2, and with it the case for keeping humans as decision-makers of record.
- **Fix:** Concede that institutional human bias can be uniform. Rest the reply on what still separates the two: a human decision can be questioned in the individual case, and a named decision-maker can be required to give reasons. Add that an algorithm makes bias measurable, which supports the paper's own proposal that AI audit human decisions.

**C9 (Medium; conflict)**
- **Locations:** §6.6; §5.
- **Passages:**
  - §6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes. A low-stakes information service needs fewer of them than a system that decides who receives scarce care."
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- **Problem:** §5 requires all five conditions at every grade from 2 to 4 and scales nothing to stakes. An information service is grade 0 and needs none of the conditions. The reply to the low-resource objection relies on a mechanism the paper does not contain.
- **Weakens:** §6.6's reply.
- **Fix:** Either scale the tests to stakes in Table 2 (revision item 11), or say that the conditions apply from grade 2 upward, plus the grade-1 review test for sensitive classes (revision item 3), so that information services face none.

**C10 (Low; conflict)**
- **Locations:** §4.6.
- **Passages:** "Two dynamics are missing from a static account of grades." and, later in the same paragraph, "A third dynamic concerns detection."
- **Fix:** change "Two" to "Three".

**C11 (Low; tension)**
- **Locations:** §6.4; Table 1 (credit row); Rec 2 (both quoted in C2).
- **Passages:** §6.4: "The EU's AI Act requires that high-risk systems be designed so that natural persons can effectively oversee them (European Union, 2024), but a legal requirement does not make oversight real."
- **Problem:** The statutory route treats a statute as enough to license grade 2, which goes against the paper's own point here. The row's requirement that the statute set review capacity and audit softens this but does not remove it.
- **Fix:** require a statutory grant to pass the Table 2 tests as well (revision item 2).

**K1 (Low; convention)**
- **Locations:** Abstract; §2.
- **Passages:** Abstract: "It distinguishes five grades of authority, from information to autonomous execution". §2: "Grades 0 and 1 are not authority".
- **Fix:** write "a five-grade scale" in the Abstract.

**K2 (Low; convention that produces a conflict)**
- **Locations:** §5; Table 1 (credit row).
- **Passages:** §5: "A ceiling is the highest grade a decision class may take, given the conditions." The credit row shows a ceiling of 1, yet its condition permits grade 2.
- **Fix:** write the ceiling as "1 (2 under statute)", or drop the route (revision item 2).

**K3 (Low; convention)**
- **Locations:** §6.2.
- **Passages:** "Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review."
- **Problem:** §2 defines grade 1 as advice, not review.
- **Fix:** describe auditing as a function outside the decision path, giving grade-0 information about human decisions.

**K4 (Low; convention)**
- **Locations:** §8.
- **Passages:** "The jurisdictions discussed are few: the European Union's AI Act and the Australian Robodebt case."
- **Problem:** A case is not a jurisdiction, and the paper also relies on a US health-system case and on international humanitarian norms.
- **Fix:** "The legal sources discussed are few: the EU AI Act, the ICRC's position and an Australian royal commission. The medical case is from the United States."

**K5 (Low; convention)**
- **Locations:** §5.
- **Problem:** Table 2 is presented before Table 1.
- **Fix:** number the tables in order of appearance.

**K6 (Low; convention)**
- **Locations:** References (European Union, 2024).
- **Passages:** "Text consulted at https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/"
- **Problem:** The regulation is cited through a third-party website.
- **Fix:** cite the Official Journal or EUR-Lex text, and note the consolidated version that includes the Digital Omnibus amendments (see W5).

### 4.3 Gaps

**G1 (High; gap, with an internal conflict)**
- **Locations:** §2; §4.5; §5; Table 2; every grade-1 row of Table 1.
- **Passages:**
  - §2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
  - §4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority."
  - §5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
- **Problem:** The paper sends every adverse determination, every allocation of scarce care and all force against persons to grade 1. Yet it attaches nothing to grade 1: no minimum review time, no seeded cases, no measure of disagreement and no trigger. §2 concedes that automation bias acts on advice, and §4.5 then denies it. A downgrade from grade 1 is undefined. A grade-1 deployment whose named decision-maker accepts every recommendation is in effect grade 2, without grade 2's tests. Rec 4 ("Make override real.") is general, but Table 2 attaches its test only to licensed authority.
- **Weakens:** the main safeguard of the central recommendation, which may then protect in name only.
- **Fix:** revision item 3.

**G2 (High; gap: the conclusion rests on unstated premises)**
- **Locations:** §3.2; §4.1; §4.2; §6.3; Table 1 (military rows); Rec 5.
- **Passages:**
  - §4.1: "A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
  - §4.2: "In lethal decisions the requirement is sharpest, because the person judged cannot contest the decision at all."
  - §3.2: "What is at stake is whether persons can be distinguished, whether force is proportionate, and whether anyone can answer for an unlawful killing."
  - §3.2: "The area contains combatants, civilians and people who have surrendered."
  - §6.3: "Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules."
- **Problem:** The two grounds the paper develops do not separate a human killing from a machine killing.
  - Answerability: §4.1's own method closes the responsibility gap by naming the commander who authorised the envelope, as the paper accepts for defensive envelopes at grade 3.
  - Contestability: a person shot by a soldier cannot contest the decision either.

  The grounds that would separate them are named in §3.2 but never argued: distinction, proportionality, recognition of surrender and predictability. As written, the military ceiling rests more on the ICRC's authority than on the paper's own argument.
- **Weakens:** the military pillar of the central recommendation (Rec 5).
- **Fix:** revision item 6.

**G3 (Medium; gap: a case that no category covers)**
- **Locations:** §3.2; Table 1 (military rows); Rec 5.
- **Passages:**
  - §3.2: "A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time."
  - §3.2: "It recommends restricting others through limits on target types, duration, geographic scope and scale, with human control and judgement retained (ICRC, 2021)."
  - Table 1 rows: "Recommending the engagement of persons" and "Defensive engagement of incoming munitions, not persons".
- **Problem:** The paper never classifies its own military case.
  - The word "targets" could mean persons or objects.
  - No row covers offensive engagement of objects, such as vehicles or radars, in an area where persons are present.
  - The summary of the ICRC position omits two of the ICRC's own limits (verified, §4.5 [2]): use restricted to situations where civilians or civilian objects are absent, and effective supervision with timely intervention and deactivation. The first limit would settle the §3.2 case, because civilians are present.
- **Weakens:** the usability of the military tier, and the completeness of the ICRC summary.
- **Fix:** revision item 6. Classify the case, add the row and complete the summary.

**G4 (Medium; gap: an unaddressed failure mode)**
- **Locations:** §5; Table 1 (escalation row); §3.1.
- **Passages:**
  - §5: "A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
  - Row condition: "Clinician can override within the workflow; reviews sampled for seeded errors".
  - §3.1: "the proxy systematically under-identified them (Obermeyer et al., 2019)".
- **Problem:** The claim holds only for false positives. A missed escalation never reaches the clinician, so no override and no seeded-error test on reviewed cases can see it. The Obermeyer harm was exactly this kind of miss.
- **Weakens:** the escalation row at grade 2.
- **Fix:** revision item 4. Audit a random sample of unflagged cases, with results reported by subgroup.

**G5 (Medium; gap: a case that no category covers)**
- **Locations:** §1; §4.6; §5; Table 1 (economy rows).
- **Passages:**
  - §1: "Public agencies score benefit claims and flag families for fraud review."
  - §4.6: "In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
  - §5's escalation sentence, as quoted in G4.
- **Problem:** No row covers flagging a person for investigation, so §5's general escalation rule would admit such flags at grade 2. Yet an investigation burdens the person and feeds the label loop. The Dutch childcare-benefits case shows that wrong flags are not cheap (verified, §4.5 [10]):
  - In 2021 the Dutch data-protection authority fined the Tax Administration €2.75m over risk profiling of benefit applicants by dual nationality.
  - The Cabinet resigned over the scandal in January 2021.
- **Weakens:** the economy tier and the escalation carve-out.
- **Fix:** revision item 4. Add the row at ceiling 1, with a random audit sample independent of flags.

**G6 (Medium; gap: a rule with no test, actor or interval)**
- **Locations:** §5; Table 1 (favourable-approvals row); Table 2; Rec 2; §8.
- **Passages:**
  - Row condition: "Audit; errors correctable; asymmetry premise checked for the domain".
  - Rec 2: "Apply the asymmetry premise in law and procurement only where it has been checked for the domain."
  - §5: "Where the ordering is not supported at all, the default is grade 1."
  - §8: "The asymmetry premise is a values choice with an empirical condition that this paper does not establish."
- **Problem:** Every other condition has a test, a certifier and a re-check interval in Table 2. The premise that governs direction has none of these. The paper also never says what evidence would count, or what "not supported at all" means as opposed to unproven.
- **Weakens:** the favourable-approvals row (economy, grade 2).
- **Fix:** revision item 5. Add a sixth row to Table 2.

**G7 (Medium; gap: the conditions do not fit the rows)**
- **Locations:** Abstract; §5; Table 2; Table 1's conditions column.
- **Passages:**
  - Bounded delegation test: "Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions".
  - Contestability test: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time".
  - Right-target test: "Performance is validated against the outcome the decision is for, and error rates are published by subgroup".
- **Problem:** §5 says all five conditions apply at grades 2 to 4, but the tests do not fit every row.
  - The grade-2 rows (escalation and favourable approvals) list no automatic stop.
  - Contestability by "the affected person" and error rates by subgroup have no clear meaning for intercepting a munition or halting a market.
  - Table 1's conditions column does not say whether its entries add to the five conditions or replace them.
- **Weakens:** the claim in §5 that the tests can be applied directly.
- **Fix:** revision item 11. Add an applicability matrix.

**G8 (Medium; gap: the triggers do not cover the risks they claim to)**
- **Locations:** §4.6; §5; Rec 7.
- **Passages:**
  - §5: "These triggers are the working form of the drift risks in Section 4.6."
  - §5: "The triggers are a review window shortened without audit; an override rate that falls to near zero over a sustained period without an audit explanation; a subgroup error gap above a threshold set in advance; a sampled reviewer who cannot state the reason for a decision; and any change to the outcome label."
  - §4.6: "For collective harms, such as market failures or some military effects, the delay between harm and detection is longer, which weakens the requirement that errors be correctable."
- **Problem:** Two of the three dynamics in §4.6 are uncovered.
  - The label loop changes the process that generates labels, not the label's definition, so "any change to the outcome label" never fires.
  - Detection delay has no trigger at all.
- **Weakens:** Rec 7 and the drift safeguard.
- **Fix:** revision item 11. Add the two triggers.

**G9 (Medium; gap: a mechanism that does not say what happens when it fails)**
- **Locations:** §5; Rec 7; the grade-3 rows of Table 1.
- **Passages:**
  - §5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
  - §2: "Grades 2 and 3 differ in the unit of control, and the difference can be stated as a test."
- **Problem:** Grades 2 and 3 differ in the unit of control, not in safety.
  - Moving a defensive envelope or closed-loop dosing from grade 3 to grade 2 means per-case approval within a time window. That may be impossible at the speed of an engagement or of physiology.
  - The likely result is either a rubber stamp or a suspension that leaves people unprotected.
  - A downgrade from grade 1 is undefined.
- **Weakens:** the downgrade rule and Rec 7.
- **Fix:** name a downgrade target for each row: a narrower envelope, suspension with a fallback, or grade 0 (revision item 11).

**G10 (Medium; gap, with an overstated claim)**
- **Locations:** §6.1; §5.
- **Passages:**
  - §6.1: "That is an empirical question, and the framework makes it testable through subgroup audit and the override tests in Section 5."
  - §5: "The ceilings are design judgements, not empirical findings."
- **Problem:** The tests apply only to deployments that are already licensed, while the decision classes at issue are capped at grade 1. The framework offers no route, such as a trial under ethics approval, for gathering the evidence that would justify raising a ceiling. Triggers only ever lower grades. So "makes it testable" is not borne out.
- **Weakens:** the reply to the lives-saved objection, and the revisability of the paper's design judgements.
- **Fix:** revision item 8. Either add an evidence route upward, or delete the claim.

**G11 (Medium; gap: undefined key term)**
- **Locations:** title; §1; §2; §3.3; Table 1 (market rows).
- **Passages:** §3.3: "It raised debts automatically by comparing averaged annual income data with fortnightly income reported by recipients."
- **Problem:** "AI system" is never defined, and two of the paper's examples are not machine learning:
  - Robodebt was data matching against averaged income. The source I read calls it "an automated data-matching technique with less human oversight" (§4.5 [3]).
  - Market halts and rate limits are fixed rules.

  The argument is really about automated decision systems in general.
- **Weakens:** the paper's scope, and the fit between its title and its evidence.
- **Fix:** define the scope in §2 as "automated decision systems, including machine-learned models". Say that the conditions apply whatever the technique, and that opacity and drift are worse for learned models.

**G12 (Medium; gap: no independence requirement)**
- **Locations:** Table 2.
- **Passages:** Answerability is certified by the "Governing body of the deploying organisation". Real override is certified by "Internal audit using sampled cases".
- **Problem:** The two conditions most prone to drift are certified by the party that gains from a higher grade. In the paper's own failure cases, internal governance did not catch the problem. For Robodebt this is verified (§4.5 [3]).
- **Weakens:** the credibility of certification.
- **Fix:** for adverse, allocative and force classes, require external verification of both conditions (revision item 10).

**G13 (Medium; gap: a strong objection left unanswered)**
- **Locations:** §4.1; Table 2 (answerability).
- **Passages:**
  - §4.1: "The paper treats traceability as the minimal test of answerability."
  - Answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system".
- **Problem:** The test asks only for a name and a power to correct or withdraw the system. It does not require the understanding that §4.1's account of traceability assumes, nor control in proportion to the outcomes the person answers for. A named official can therefore absorb blame for system behaviour they could neither foresee nor prevent. (Own knowledge, not checked here: the literature calls this a "moral crumple zone", after Elish.)
- **Weakens:** answerability, the first of the paper's conditions.
- **Fix:** revision item 10.

**G14 (Medium; gap: relevant law not engaged)**
- **Locations:** §1; §6.4; §8.
- **Passages:** §1: "The paper is written for people who must decide whether a particular deployment may act on its own: hospital governance committees, procurement officers, regulators and ethics boards."
- **Problem:** The paper is written for regulators, yet it does not engage the law that already governs its central question:
  - **GDPR Art. 22:** a default bar on solely automated decisions with significant effects, with exceptions and safeguards. In SCHUFA, the CJEU held that a credit score can itself be such a decision when lenders rely heavily on it (§4.5 [5]).
  - **US credit law:** the CFPB reads ECOA and Regulation B to require specific principal reasons for adverse action even when complex models are used (§4.5 [6]).
  - **The AI Act:** Art. 14(4)(b) names automation bias. Annex III obligations now apply from 2 December 2027 under the Digital Omnibus. Art. 2(3) excludes military uses (§4.5 [4], [12], [13]).
  - **DoD Directive 3000.09:** it requires "appropriate levels of human judgment over the use of force" but prohibits nothing (§4.5 [11]).

  Without these, readers cannot tell what the paper adds, or where and why it is stricter than the law.
- **Weakens:** the paper's practical aim in §1, and its claim to novelty.
- **Fix:** revision item 9.

**G15 (Medium; gap: a strong counterexample left unanswered)**
- **Locations:** Table 1 (medicine rows); §6.1; §6.6.
- **Passages:**
  - Row: "Deprioritising a patient or withholding scarce care" (grade 1).
  - §6.6: "Where review capacity is absent, the framework could leave a population with slower triage or none."
- **Problem:** An autonomous screening system already holds authority over a determination about a person. In 2018 IDx-DR was authorised in the US as the first device to give a screening decision without a clinician interpreting the image (§4.5 [9]).
  - A negative result means "rescreen in 12 months".
  - Performance: sensitivity 87.4% and specificity 89.5% in 900 primary-care patients.

  A negative screen withholds a specialist referral, which Table 1 caps at grade 1. This is §6.6's low-resource case in practice. The paper must either show why it is an exception (validated against the outcome, cheap to reverse, rescreening built in) or say that it belongs at grade 1.
- **Weakens:** the medical ceilings and the reply in §6.6.
- **Fix:** add it as a worked hard case (revision item 9). The creative lens's reframing around reversibility supplies the principled answer.

**G16 (Medium; gap: an unaddressed failure mode at a boundary)**
- **Locations:** Table 1 (defensive row).
- **Passages:** Row: "Defensive engagement of incoming munitions, not persons", with the condition "Human-set envelope; human on the loop; stop available".
- **Problem:** Whether a track is a munition or a crewed aircraft is itself the output of a classifier.
  - In 2003, Patriot batteries shot down an RAF Tornado and a US Navy F/A-18, killing three aircrew.
  - The Defense Science Board found that the "operating protocol was largely automatic, and the operators were trained to trust the system's software" (§4.5 [8]).
  - The row's conditions (an envelope, a human on the loop, a stop) were nominally in place.

  This is the documented military case the paper lacks.
- **Weakens:** the grade-3 defensive row.
- **Fix:** add conditions on classification risk (airspace deconfliction, identification of friend or foe, and exclusion of envelopes where crewed aircraft may be present), and cite the case (revision item 6).

**G17 (Medium; gap: undefined key term)**
- **Locations:** §1; §5; Table 1 (market rows); Rec 6.
- **Passages:**
  - §5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
  - Rec 6: "Keep market automation within public, pre-committed rules with halts and kill switches, and prohibit discretionary AI market interventions without public justification."
  - §1: "Lenders use models to refuse credit, and trading systems act on prices in milliseconds."
- **Problem:** Read literally, "a system [that] chooses when and how to act on prices" covers private algorithmic trading. Rec 6 would then prohibit most automated trading, a sweeping result that lies outside a thesis about decisions on persons. Read narrowly, private trading is not covered at all.
- **Weakens:** the market rows and Rec 6.
- **Fix:** revision item 7.

**G18 (Low; gap)**
- **Locations:** Table 2 (real override); Rec 4.
- **Passages:** "their disagreement is measured with seeded errors".
- **Problem:** If a reviewer misses a seeded error, it could take effect on a real patient or applicant.
- **Fix:** require seeded cases to be synthetic, or intercepted before they take effect. Airport baggage screening does this by projecting synthetic threat images (own knowledge).

**G19 (Low; gap: scope)**
- **Locations:** Abstract; §3.3; Table 1 (economy rows).
- **Passages:** Abstract: "AI systems are increasingly placed inside decisions about health, life and death, liberty and livelihood."
- **Problem:** Two major areas of economic allocation are missing despite the appeal to livelihood:
  - employment: hiring, scheduling, dismissal, and deactivation of platform workers;
  - insurance.
- **Fix:** add one sentence that brings them in under the same logic, or explicitly leaves them out.

**G20 (Low; gap)**
- **Locations:** Table 2 (right target); §5 (triggers); §4.3.
- **Passages:**
  - Right-target re-check: "Before deployment, and at each retraining".
  - Trigger: "a subgroup error gap above a threshold set in advance".
  - §4.3: "Fairness is a choice of target and metric, and no metric is neutral."
- **Problem:** Two things are unspecified:
  - Population drift can happen without any retraining, so a re-check tied to retraining can miss it.
  - Neither the subgroups nor the error metric for the trigger (false positives, false negatives or calibration) are named. That choice matters, because, as §4.3 itself says, no metric is neutral.
- **Fix:** add a periodic re-check, and name the subgroups and the metric for each row.

### 4.4 Claims about the world

The paper's factual claims are listed below, with the claims its conclusions depend on first. Problems carry W-IDs; claims that check out carry none. Bracketed numbers point to §4.5.

| Claim (location) | Paper's support | Check and result | What would settle it | Status |
|---|---|---|---|---|
| The algorithm used cost as a proxy for need; at the same level of illness less was spent on Black patients; Black patients were under-identified (§3.1) | Obermeyer et al. (2019) | [1] confirms the cost label; "Well calibrated for cost across races, not well calibrated for health across races"; lower costs at a given level of health; automatic enrolment above the 97th percentile, referral above the 55th | The Science article | Verified, through a course summary; cite the article. Bears on C7, C8, G4 |
| "The algorithm was accurate about its label" (§3.1) | Same | [1]: calibrated for cost across races | Same | Verified |
| The ICRC recommends prohibiting unpredictable systems and systems used against persons, and restricting others (§3.2) | ICRC (2021) | [2]: accurate, but omits two limits (situations of use; supervision with timely intervention and deactivation) and the call to "adopt new legally binding rules" | The ICRC text | Verified, incomplete (G3) |
| The ICRC position is not binding law, and states differ (§3.2) | None | [2] calls for new binding rules; [11]: DoD 3000.09 does not prohibit, and requires senior review instead | State positions in the UN discussions on autonomous weapons | Verified |
| Robodebt used income averaging and automatic debts, put the burden on recipients, and was investigated by a royal commission (§3.3) | Royal Commission (2023) | [3]: averaging; automated online system from July 2016; burden shifted; Amato (2019) found the averaging unlawful; A$1.872bn settlement approved June 2021; report 7 July 2023, which called the scheme a "costly failure of public administration, in both human and economic terms" | The commission's report | Verified; see W6 for one overstatement |
| The AI Act requires effective human oversight (§6.4) | EU (2024) | [4]: Art. 14(1) verified; Art. 14(4)(b) names automation bias | EUR-Lex consolidated text | Verified, incomplete (W5) |
| Over-reliance and complacency; deskilling (§4.5) | Parasuraman and Manzey (2010); Bainbridge (1983) | Own knowledge: fair summaries; not fetched | The articles | Consistent |
| The responsibility gap; meaningful human control (§4.1) | Matthias (2004); Sparrow (2007); Santoni de Sio and van den Hoven (2018) | Own knowledge: fair summaries. The last paper sets two conditions, tracking and tracing; the paper keeps tracing as its minimal test, which is a choice (see G13) | The articles | Consistent |
| Interpretability is relative to task (§4.4); automated tools punish the poor (§4.2) | Doshi-Velez and Kim (2017); Eubanks (2018) | Own knowledge: fair summaries | The works | Consistent |
| Human and artificial intelligence "should converge" (§3.1) | Topol (2019) | Own knowledge: the article describes convergence and favours augmentation; "should" is a mild normative gloss | The article | Broadly accurate |
| Lending decisions are made in high volume (§3.3) | None | Own knowledge: true | Industry volume data | Uncited; plausible |
| Reference details (volumes, pages, DOIs) | References list | Own knowledge: correct as listed; not fetched | The publishers' records | Consistent |

**W1 (Medium; overstated claim)**
- **Locations:** §5; §3.3.
- **Passages:**
  - §5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
  - §3.3: "The harm is collective and fast, and no single person can answer for it."
- **Paper's support:** none.
- **Check:** firms are held answerable for harms from automated trading. In 2012 Knight Capital's router sent more than 4 million orders in about 45 minutes, and the firm lost more than $460m. The SEC then imposed a $12m penalty under the market access rule, plus an independent review of its controls ([7]). That incident did not involve a learned policy, but the rule applies whatever the technique.
- **What the paper should say instead:** the hard part is attributing a collective harm with many actors to one learned policy, fast enough to correct it.
- **What would settle it:** enforcement records, and studies of algorithmic market incidents.
- **Weakens:** the only stated ground for the discretionary-market row and for Rec 6.
- **Fix:** revision item 7.

**W2 (Medium; overstated attribution)**
- **Locations:** §6.1.
- **Passages:** "A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019)."
- **Problem:** the study measured label bias, not lives saved. It shows a system that is calibrated on its own target and still under-serves a subgroup. It does not show a system that saves more lives overall.
- **Fix:** "A system can perform well on its aggregate target and still under-serve a subgroup, as the Obermeyer case shows."

**W3 (Low; overstated and unverified claim)**
- **Locations:** §3.3.
- **Passages:** "A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant."
- **Problem:** two legal regimes cut against this.
  - **United States:** the law requires specific principal reasons even when the model is complex ([6]). The CFPB circular of 26 May 2022 says: "Creditors who use complex algorithms, including artificial intelligence or machine learning, in any aspect of their credit decisions must still provide a notice that discloses the specific principal reasons for taking an adverse action."
  - **European Union:** the Art. 22 safeguards apply ([5]).

  The claim that the reasons given are often too generic to contest would be defensible.
- **What would settle it:** studies of adverse-action notices in practice.
- **Fix:** name the jurisdiction and recast the claim as above.

**W4 (Low; unsupported claim)**
- **Locations:** §1.
- **Passages:** "Armed forces use systems that classify objects and people faster than staff can check them."
- **Problem:** uncited. Own knowledge: reporting on targeting-support systems points this way but is disputed. Not checked here.
- **What would settle it:** official statements, investigations or court records.
- **Fix:** cite a source, or soften to "are reported to use".

**W5 (Low; incomplete claim)**
- **Locations:** §6.4.
- **Passages:** "The EU's AI Act requires that high-risk systems be designed so that natural persons can effectively oversee them (European Union, 2024)"
- **Problem:** the content is verified ([4]), but two qualifications are missing.
  - **Timing.** The Digital Omnibus entered into force on 27 July 2026. Under it, the obligations apply to Annex III high-risk systems from 2 December 2027 and to Annex I systems from 2 August 2028 ([12]).
  - **Scope.** The Act does not apply to systems used exclusively for military, defence or national security purposes (Art. 2(3), [13]). It therefore gives the paper nothing in the military domain.

  Separately, Art. 14(4)(b) names automation bias directly, which supports §4.5 and §6.4.
- **Fix:** add the dates and the exclusion, cite Art. 14(4)(b), and cite EUR-Lex (K6).

**W6 (Low; slightly overstated claim)**
- **Locations:** §3.3.
- **Passages:** "What is at stake is a person's income and standing, imposed by an adverse decision that no official had individually reviewed, against people least able to contest it."
- **Problem:** the source I read describes the online system as "an automated data-matching technique with less human oversight", with very limited human involvement in sending debt letters ([3]). The claim is true in gist for the 2016 online phase, but "no official" is universal.
- **Fix:** cite the commission's finding directly, or write "that officials in the scheme's online phase did not individually review".

**W7 (Low; overstated claim)**
- **Locations:** §5.
- **Passages:** "The tests are designed so that a hospital committee, procurement office or regulator can apply them without further philosophical work."
- **Problem:** the same section leaves thresholds to certifiers. "Competence to disagree", "usable terms" and the asymmetry check, which §5 itself calls a values choice, all require judgement.
- **Fix:** "with little further philosophical work, though each certifier must set thresholds and make the value judgements named in this section".

### 4.5 Sources read

I ran 13 web searches, written in my own words about the facts in question, and read the 13 pages below. None was a copy, review or analysis of the paper.

1. Course PDF summarising Obermeyer et al. (2019), Heidelberg University: https://www.cl.uni-heidelberg.de/courses/ws19/bias/material/obermeyer.pdf (risk score predicts cost; enrolment thresholds; calibrated for cost but not for health).
2. ICRC, *ICRC position on autonomous weapon systems*, 12 May 2021: https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems
3. Wikipedia, "Robodebt scheme": https://en.wikipedia.org/wiki/Robodebt_scheme
4. European Commission AI Act Service Desk, Article 14: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14
5. Bird & Bird, key takeaways from the CJEU's SCHUFA judgment (C-634/21, 7 December 2023): https://twobirds.com/en/insights/2023/global/key-takeaways-from-the-schufa-case-of-the-cjeu
6. CFPB Circular 2022-03, 26 May 2022: https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/
7. SEC press release 2013-222 (Knight Capital): https://www.sec.gov/news/press-release/2013-222
8. MIT Technology Review, "Preventing fratricide" (2005), reporting on the Defense Science Board's findings on Patriot: https://www.technologyreview.com/2005/06/01/230882/preventing-fratricide/amp/
9. Health Care Innovation, report of the FDA's authorisation of IDx-DR (April 2018): https://www.hcinnovationgroup.com/clinical-it/article/13009587/fda-permits-marketing-of-artificial-intelligence-based-device-to-detect-certain-diabetes-related-eye-problems
10. Clifford Chance, on the Dutch tax authority's fines and the childcare-benefits scandal: https://cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2022/04/dutch-government-fraud-scandal-leads-to-record-breaking-gdpr-fin.html
11. Wikipedia, "Department of Defense Directive 3000.09": https://en.wikipedia.org/wiki/Department_of_Defense_Directive_3000.09
12. Lewis Silkin, "The Digital Omnibus on AI enters into force today" (27 July 2026): https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo
13. European Commission AI Act Service Desk, Article 2: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2

## 5. Lens summaries

Each lens ran as its own stream and did not borrow another lens's conclusions. Findings are cited by ID only; each is stated in full once, in §4. Step labels: E = evidence (from the paper or a checked source), OK = own knowledge, A = assumption, I = inference. The mind maps are plain indented outlines, because this Markdown file cannot show colour.

### 5.1 Analytical lens

**Reasoning chain**
1. (E) The argument has six parts:
   - the thesis (§1);
   - the grade scale (§2);
   - the five conditions (Table 2);
   - the asymmetry premise (§5);
   - the ceilings (Table 1);
   - the triggers (§5).

   The three-step argument in §1 shows that conditions are needed. It does not fix where the ceilings sit, and §5 concedes that they are design judgements.
2. (E, I) Table 1 has 12 rows: six at grade 1, two at grade 2, three at grade 3 and one at grade 4. By §2's definition, three of the rows above grade 1 are decisions about persons. So the literal thesis conflicts with the table (C1), and the one grade-4 row fails grade 4's own definition (C5).
3. (E) Checking every rule against its restatements finds six problems:
   - the statutory route stated three different ways (C2, K2, C11);
   - the reversal rule stated two ways (C3);
   - an example filed under the wrong heading (C4);
   - a miscount (C10);
   - a proportionality claim with no mechanism behind it (C9);
   - a clash of terms (K1).
4. (I) The five conditions are said to be jointly necessary at grades 2 to 4, but several tests cannot apply to some rows (G7). The premise that governs direction has no test at all (G6).
5. (I) The ceilings rest on two load-bearing premises: the asymmetry ordering, which §8 says is not established, and the protective value of grade 1, which is untested (G1). The ceilings are only as strong as these two premises.
6. (I) The architecture is coherent; what fails is precision. Most defects are local, and they can be fixed without changing the thesis's direction.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Definitional coherence | 0.90 | A thesis must be checkable against its own table |
| Load-bearing premises | 0.85 | Asymmetry and grade-1 protection carry most of the ceilings |
| Consistency of restatements | 0.80 | Practitioners act on the recommendations, not on §5 |
| Applicability of tests | 0.60 | A test that does not fit a row cannot be applied "without further philosophical work" |
| Quantification | 0.35 | No numbers exist yet; deferring thresholds is acceptable if the paper says so |

**Mind map: Analytical**
- Thesis versus table
  - "final" undefined (C1)
  - three decisions about persons above grade 1: dosing, protective stop, approvals
- Grade definitions
  - protective stop meets the grade-3 definition (C5)
  - the test has no case for reversal after effect (C5)
- Restatements
  - statutory route: Table 1, §5 and Rec 2 (C2, K2, C11)
  - reversal rule (C3); borrower example (C4)
  - counts and claims (C9, C10, K1)
- Conditions
  - applicability by row (G7)
  - asymmetry check without a test (G6)
- Premises
  - asymmetry not established (§8)
  - grade 1 untested (G1)

### 5.2 Creative lens

**Reasoning chain**
1. (OK) Other safety-critical fields test human monitors with synthetic events. Baggage screening, for example, projects synthetic threat images onto real screens. So advice and monitoring can be a licensed, tested activity (bears on G1, G18).
2. (I) Reframe the asymmetry premise: the question is who can detect and reverse an error, and at what cost, not whether the decision is favourable or adverse. One principle then covers missed escalations, approvals that over-indebt the applicant, and fraud flags (C3, C4, G4, G5).
3. (I, A) Reframe contestability in lethal force as being addressable in the moment. A person can surrender, and a human combatant can recognise and honour that. §3.2 already includes people who have surrendered. This gives the military ceiling a ground that separates a human decision from a machine one, provided systems cannot reliably recognise surrender. That proviso is an assumption (G2).
4. (OK, analogy) Treat ceilings as licences raised in stages, as in phased clinical trials or graduated driver licensing. A default holds until staged evidence justifies a step up (G10).
5. (I) The paper's closing test, that someone can answer for the decision and the person affected has a route to be heard, could organise the whole paper. Rebuilding it around that test would be more than the problem needs, so use it only to frame the restated thesis.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Error detectability and reversibility | 0.85 | One principle covers four findings |
| Addressability in the moment | 0.75 | Gives the military ceiling a distinguishing ground |
| Licensed advice | 0.70 | Makes grade 1 a real safeguard |
| Staged ceilings | 0.60 | Answers the lives-saved objection without abandoning restraint |
| Organising principle | 0.30 | Elegant, but more than the problem needs |

**Mind map: Creative**
- Direction rule, reframed
  - detectability, reversibility, and who bears the burden of correction
  - covers omissions, over-indebtedness and flags
- Lethal contestability, reframed
  - surrender as a contest made in the moment
  - a capacity humans have and systems may lack (assumption)
- Advice as a licensed grade
  - synthetic seeded events
  - minimum review times
- Staged ceilings
  - phased evidence under ethics approval
  - force against persons excluded
- Set aside
  - rebuilding the paper around addressability

### 5.3 Critical lens

**Reasoning chain**
1. (E, I) The strongest counterargument judges by outcomes. If automated decisions plus prompt human review on request leave fewer and fairer uncorrected errors than human decision-makers do, then a categorical grade-1 ceiling makes the people it protects bear delay and inconsistency. Two facts strengthen this:
   - the label in the paper's own lead case came from biased human spending (C8);
   - autonomous screening is already authorised (G15).
2. (I) The costs of restraint fall on identifiable people:
   - applicants and patients waiting for review;
   - low-resource populations (§6.6);
   - named officials who may absorb blame without having control (G13);
   - defended people, if a defensive system is downgraded into suspension (G9).
3. (I) The military argument fails its own tests. Answerability can be closed by naming the commander, using §4.1's own method. And a person killed by a soldier is no more able to contest the decision (G2).
4. (E) Several claims are stated more strongly than their support allows:
   - that no one can answer for market harms (W1);
   - that the Obermeyer case shows lives saved (W2);
   - that reasons are often unavailable (W3).
5. (I) The leading view fails in three conditions:
   - grade-1 review becomes a rubber stamp (G1);
   - the asymmetry ordering does not hold in credit (C4, G6);
   - evidence shows that automation with contestation beats grade-1 review in some domain, and the paper has no route to respond to that evidence (G10).
6. (I) The direction survives the strongest objections only if three things are true: grade 1 is tested, the contestability premise is named as a values choice, and the framework can learn from evidence.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Honest comparator | 0.85 | Humans are the baseline, and institutional human bias can be systematic |
| Visible values premise | 0.80 | "whether or not the decision is accurate" is a values commitment |
| Failure conditions | 0.75 | A rubber stamp, a failed premise, no way to learn |
| Distribution of burdens | 0.70 | Restraint has costs that fall on identifiable people |
| Proportioned claims | 0.65 | Overclaims cost credibility with expert readers |

**Mind map: Critical**
- Strongest counterargument
  - regulation by outcomes
  - systematic human bias (C8)
  - authorised autonomous screening (G15)
- Who bears the cost
  - waiting applicants and patients; low-resource settings
  - named officials without control (G13)
  - defended people under suspension (G9)
- Military grounds fail their own tests (G2)
- Overclaims (W1, W2, W3)
- Failure conditions
  - grade 1 as a rubber stamp (G1)
  - asymmetry fails in credit (C4, G6)
  - no route to learn (G10)

### 5.4 Systems-thinking lens

**Reasoning chain**
1. (E) Queues for scarce care are zero-sum: moving one case up moves others down. The Obermeyer system enrolled patients above the 97th percentile automatically ([1]), so its "escalation" was in fact selection (C7).
2. (I) Errors of omission never reach a reviewer, so seeded-error tests run on reviewed cases cannot see them (G4).
3. (E, I) Investigation flags start the label loop described in §4.6, and fraud-risk profiling has caused a national scandal ([10]) (G5). Because the loop changes how labels are generated, not what they mean, no trigger fires (G8).
4. (A, I) Volume and capacity form a loop. At high volume, grade-1 reviewers face the same time pressure that defeats grade-2 review, and automation bias then turns advice into authority in all but name (G1, C6). This rests on the assumption that review quality falls under time pressure, which is plausible but not measured here.
5. (E, I) In defensive engagement, the boundary between persons and objects is itself a classifier output. In 2003, Patriot batteries running a largely automatic protocol shot down two allied aircraft ([8]) (G16). Downgrading an envelope system to per-case approval may be infeasible at engagement speed (G9).
6. (I) Two further dynamics:
   - Incentives: the party that gains from a higher grade certifies its own answerability and override (G12).
   - Delay: for collective harms, slow detection lets damage outrun correction (G8, W1).

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Coupled queues | 0.80 | In a scarce queue, escalation is allocation |
| Invisible omissions | 0.80 | A case never flagged is never reviewed |
| Volume–capacity pressure | 0.75 | The loop that turns advice into authority |
| Label-generating loop | 0.70 | Enforcement data trains the next model |
| Classification at the boundary | 0.65 | The line between persons and objects is itself an error-prone output |

**Mind map: Systems-thinking**
- Queues
  - zero-sum displacement (C7)
  - invisible omissions (G4)
- Loops
  - flag, investigation, label, retraining (G5, G8)
  - volume, time pressure, automation bias (G1, C6)
- Boundaries
  - persons versus objects as a classification (G16)
  - feasibility of downgrade paths (G9)
- Incentives
  - self-certification (G12)
- Delays
  - detection delay with no trigger (G8)

### 5.5 Pragmatic lens

**Reasoning chain**
1. (I) Most defects are local text edits (C1 to C11, K1 to K6). They are cheap and high in value, so do them first.
2. (I) Before the named readers can use the paper, it needs three additions:
   - a grade-1 test (G1);
   - an applicability matrix (G7);
   - a test and certifier for the asymmetry premise (G6).
3. (E) The readers already work within legal regimes that do part of what the paper proposes. Mapping each condition and certifier onto an existing institution makes the framework implementable (G14, G12). The regimes are:
   - GDPR Art. 22, with the SCHUFA ruling ([5]);
   - AI Act Art. 14, with Annex III obligations from 2 December 2027 ([4], [12]);
   - ECOA's requirement to give reasons ([6]);
   - DoD Directive 3000.09 ([11]).
4. (I, A) Human review of every credit refusal at consumer-credit volume is expensive. Rec 8 admits that costs exist but gives no rule for capacity. A feasible design routes only would-be refusals to humans and sizes capacity to that volume (C6). This assumes refusals are a fraction of applications.
5. (I) Revising the paper is cheap and easy to undo. Regulators who adopted its ceilings would impose large operational changes that are hard to undo. So the paper's claims should match its evidence, and its framework should be able to change as evidence arrives (G10).
6. (I) Next actions: make the high-severity fixes; decide D1 and D2; add one subsection on law and practice; obtain domain review; re-audit.

**Key concepts**

| Concept | Weight | Reason |
|---|---|---|
| Implementability | 0.85 | The paper's stated purpose is use by committees and regulators |
| Smallest fix first | 0.80 | Most of the problems are textual |
| Capacity sizing | 0.70 | Grade 1 must fit the volume it serves |
| Mapping to institutions | 0.65 | Certifiers should be bodies that already exist |
| Reversibility of adoption | 0.55 | Adopting the ceilings is costly to undo; revising the paper is not |

**Mind map: Pragmatic**
- Cheap fixes
  - textual conflicts (C1 to C11)
  - matters of convention (K1 to K6)
- Needed additions
  - grade-1 test (G1)
  - applicability matrix (G7)
  - asymmetry test (G6)
- Implementation
  - mapping to existing law and bodies (G14, G12)
  - capacity sizing for refusals (C6)
- Risks
  - cost of adoption; a route upward (G10)
- Next actions
  - expert review; re-audit

## 6. Transparency report

- **Framing:** the question was restated in §2.1 as two deliverables: a revision plan, and a calibrated confidence in the central recommendation.
- **Assumptions:** A1 to A5 are in §2.1. The most consequential is A2, that the author keeps the thesis's direction; if it is false, the plan would change.
- **Which lens drove what:**
  - Analytical: items 1, 2, 5 and 11.
  - Critical: items 3, 6, 8 and 12, and the scores in §2.5 B.
  - Systems: item 4, item 10, and the triggers in item 11.
  - Creative: the reframings in items 4, 6 and 8.
  - Pragmatic: the ordering, item 9, the capacity rule in item 3, and the check in §2.4.
- **Weighted down or set aside, and why:**
  - Rebuilding the paper around "addressability": more than the problem needs.
  - Numerical thresholds in Table 2: the paper defers them defensibly.
  - Quantitative modelling of queues: there are no data.
  - Employment and insurance: kept low, as a matter of scope rather than error.
  - Topol's "should": a minor gloss, with no ID.
- **Confidence scores and drivers:**
  - Plan: 78 overall (parts 88, 72, 62). Raised by checkable quotations and source checks. Lowered by lenses that all come from one model, by the lack of expert review, and by values choices that depend on the author.
  - Central recommendation: 60 overall (parts 72, 70, 70, 66, 62, 50, 50, 45, 35). Raised by convergence with independent institutions and documented failures. Lowered by the unestablished asymmetry premise, the untested grade 1, internal conflicts and the absence of outcome comparisons.
- **Independence:** all five lenses come from one model, so their agreement is not independent verification. The independent checks are the exact quotations and the 13 pages read.
- **What this reasoning cannot establish:**
  - whether grade-1 human review outperforms automated decisions with contestation in any domain;
  - whether current systems can recognise surrender or civilian status;
  - whether the asymmetry ordering holds in credit;
  - the real cost of grade-1 review at volume.
- **What to verify with sources:**
  - The primary texts for SCHUFA, the FDA's IDx-DR decision, the 2005 Defense Science Board report, the Royal Commission report, the Obermeyer article (for the thresholds) and the consolidated AI Act.
  - The Dutch data-protection authority's decision.
  - The points I gave from my own knowledge: responsible lending, moral crumple zones and threat-image projection.
- **What to verify with experts:**
  - a clinical safety specialist: escalation, dosing and the protective stop;
  - an international humanitarian law adviser experienced in weapons reviews: the military rows;
  - a consumer-credit or data-protection lawyer: the credit rows;
  - a specialist in welfare administration: the welfare rows.
- **What the author still has to decide:**
  - D1, categorical or rebuttable ceilings;
  - D2, credit refusals;
  - D3, the scope of the market rows;
  - the statutory route (C2);
  - how much to add (D5).
- **Not professional advice:** this review is not medical, legal, military or financial advice. The experts listed above should review the tiers before any real use.
- **Web use:** I ran 13 searches and read 13 pages, only to check facts that the paper's claims are about. I did not search for the paper, its title or its sentences, and I opened no review or analysis of it.
