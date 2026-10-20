# Blind review of the agent draft and the enhanced paper

This file records a blind evaluation of two versions of the same paper: the agent draft (01-agent-draft.md) and the enhanced paper (03-enhanced-paper.md). It gives the method, the unblinded scores, the reviewer's findings as reported, and an audit of those findings.

## 1. Method

- One reviewer run, on the opus model, by a general-purpose agent that had not written either paper and had no access to the analysis files in this case study.
- Both papers were copied to a review folder as Paper X and Paper Y. The assignment was made with a fixed random seed (20261021) before the review. The key linking labels to versions was stored outside the case study and opened only after the scores were recorded.
- The reviewer read only those two files. It was asked to judge the arguments rather than the length, to spot-check up to two references per paper with web search, and to quote every contradiction and unsupported claim it reported.
- Nothing in the review brief named the Observer method or said which paper had been revised.

## 2. Unblinded scores

| Criterion | Agent draft (Paper X) | Enhanced paper (Paper Y) | Difference |
|---|---|---|---|
| Argument clarity | 6 | 7 | +1 |
| Conceptual precision | 5 | 7 | +2 |
| Internal consistency | 4 | 6 | +2 |
| Evidence and citations | 5 | 6 | +1 |
| Domain coverage | 5 | 6 | +1 |
| Objections and replies | 6 | 7 | +1 |
| Practical usefulness | 5 | 7 | +2 |
| Prose and structure | 8 | 7 | -1 |
| Total (of 80) | 44 | 53 | +9 |

The enhanced paper scored higher on seven of the eight criteria. The draft scored higher on prose and structure. The reviewer's preference was the enhanced paper (Paper Y), with this reason: "Both papers have the same thesis, grades and sources, so coherence decides. X's own Table 1 contradicts its main asymmetry principle by giving credit refusals the same grade-2 ceiling as approvals. Y avoids this, defines its key term and makes asymmetry a value premise that can be tested."

## 3. The reviewer's report, as returned

**Justifications, Paper X (draft)**

1. The claim is precise, but step one is close to a definition and the asymmetry principle is asserted, not argued.
2. "Decision about a person" and "low-cost" are never defined, so it is unclear whether the grade-4 stop counts as a decision about a person.
3. Credit refusals at grade 2 break its own rule for adverse steps and remove the asymmetry with approvals.
4. The sources are relevant, but entries are incomplete, links often go to secondary pages, and the empirical claims are uncited.
5. Military force gets one hypothetical and two table rows, and Robodebt, the economy case, was not AI.
6. Objections are stated fairly and 6.4 is strong, but the second reply in 6.1 is unsupported, and neither paper takes on the argument that machines might follow humanitarian law better than people.
7. The principles are sensible, but it gives no tests, certifiers, thresholds or triggers.
8. Tight, economical and well signposted.

**Justifications, Paper Y (enhanced)**

1. Same claim, but stating asymmetry as a conditional value premise makes the argument follow; step one is still close to a definition.
2. It defines "decision about a person", though leaving out queue position strains its own "access to a service" clause.
3. The credit row matches its rules, but the welfare-statute and grade-4 slips remain, plus smaller ones.
4. References are complete, attribution is careful and hypotheses are labelled, but the claims about markets and the military have no evidence.
5. It says openly that the military case is hypothetical, but that domain is still the thinnest, and Robodebt was not AI.
6. It takes on third-party harm and low-resource settings, but the second reply in 6.1 sidesteps the "if" in the objection.
7. Its tests and triggers are usable, but thresholds are left to others, the deploying organisation checks its own override, and grade 1 has no tests.
8. Clear, but Table 2 comes before Table 1, and 6.1 repeats itself.

**B. Contradictions**

Paper X:
- "Adverse steps therefore need a human decision-maker of record" versus "Credit refusals | 2", the same grade as approvals.
- Recommendation 2's "unless a statute expressly licenses grade 2" versus a welfare ceiling of 1 (shared with Y).
- Grade 4 requires that "limits are absent or set by the system itself", yet its example, a protective stop, has limits set by designers (shared with Y).

Paper Y:
- "unless a statute expressly licenses grade 2" versus a welfare ceiling of 1.
- Grade 4 means "no timely human veto", yet its stop requires that a "clinician can countermand at once".
- A flag "costs little if it is wrong" versus "flagged cases lead to investigations".
- "licensed only when five conditions hold" versus "needs fewer of them".
- "Two dynamics are missing", then "A third dynamic" (trivial).

**C. Unsupported or incorrect claims**

Paper X:
- "Errors that move a person toward attention or benefit are usually cheaper": uncited, and it ignores zero-sum queues and harm to third parties.
- "most of the triage benefit comes from escalation": no evidence given.
- "No one can answer for a collective harm": its own answerability condition needs only a named institution and person.
- "Automated tools in public services profile, police and punish poor people": overgeneralises from Eubanks.

Paper Y:
- "Under current institutions no one can answer": the same problem, with a hedge.
- A longer "delay between harm and detection" in markets: labelled a hypothesis, but the reviewer notes that the 2010 Flash Crash was visible within minutes.

Both:
- "One flawed label distorts every decision": the reviewer cites Obermeyer et al. for a relabelling effect (17.7% to 46.5%), which would mean a uniform bias can also be fixed everywhere at once. This figure was not confirmed in this case study's own searches, so it is not used in the stage report.

**D. Weakest passages**

- Paper X: the asymmetry paragraph in Section 5. Its "usually cheaper" premise is uncited. In a scarce queue, moving one patient up moves another down, and the Obermeyer harm came from patients a prioritisation tool missed. The paragraph also ignores that fraud flags, which the introduction mentions, are escalations that harm the person flagged. Table 1 then drops the principle for credit.
- Paper Y: Section 6.4, "In high-volume settings where meaningful review is impossible, grade 2 is not defensible". Grade 1, where a human decides every case, is no more workable at that volume, and it is just as open to automation bias. Table 2 tests only grades 2 to 4, so a downgrade ends in a tier with no tests.

**E. Citation spot-checks (reviewer's own searches)**

- Paper X, Obermeyer et al. 2019: title, year and venue confirmed, with DOI 10.1126/science.aax2342. Authors not shown in the search results.
- Paper X, Matthias 2004: title confirmed through a university repository, and author and year through a copy of the paper. Venue not confirmed.
- Paper Y, Sparrow 2007: author, year and Journal of Applied Philosophy confirmed; a journal listing shows Vol. 24, No. 1. Pages not confirmed.
- Paper Y, Parasuraman and Manzey 2010: title, first author and DOI confirmed, with the DOI prefix matching the Human Factors ISSN. Pages not confirmed.
- The reviewer reported no discrepancies in the checked items.

**F. Length (reviewer's note)**

Paper Y is 43 percent longer (4,642 words against 3,256, counting references). The reviewer says length can look like rigour, scored passages the two papers share in the same way, credited the extra material only where it changed the argument, and penalised its errors. It notes that length may still have nudged the objections and usefulness scores, and that the preference rests on the draft's credit contradiction, which has nothing to do with length.

## 4. Audit of the reviewer's findings

We checked each finding against both versions. "Observer flagged" means the analysis in 02-observer-analysis.md identified the same problem. Items marked "introduced" appear in the enhanced paper and not in the draft.

| ID | Finding | Where it appears | Fixed in enhanced paper? | Observer flagged? |
|---|---|---|---|---|
| F1 | Credit refusals at grade 2 break the adverse-step rule and Section 6.4 | Draft | Yes: moved to grade 1 with a statute-only exception | Yes (C1) |
| F2 | The statute exception in Recommendation 2 covers all adverse decisions, but the welfare ceiling is 1 with no exception | Both | No | No |
| F3 | Protective stop at grade 4 conflicts with the grade 4 definition: limits are set by designers, and a clinician can countermand at once | Both (limits wording in draft; countermand wording introduced) | No | No |
| F4 | The asymmetry premise is unsourced | Draft | Yes: stated as a values premise with an empirical reversal condition | Yes (C3, critical lens) |
| F5 | Section 6.1 says escalation supplies most of the triage benefit, with no source | Draft | Yes: replaced by an open empirical question, though the reply still sidesteps the conditional (F7) | Yes |
| F6 | A flag that only moves a case up a queue "costs little if it is wrong", but Section 4.6 describes flags that lead to investigations | Introduced | No | No |
| F7 | Section 6.1 repeats its conclusion, and its second reply does not engage the conditional in the objection | Introduced | No | No |
| F8 | Section 6.4 leaves high-volume adverse decisions open: grade 1 is not workable at volume either, and grade 1 is exposed to automation bias | Both | Partly (credit fixed, general case open) | Partly (credit only) |
| F9 | Certification of real override is by internal audit, so the deploying organisation checks its own override | Introduced | No | No |
| F10 | Grade 1 (advice) has no tests in the conditions table | Introduced | No | Partly (pragmatic lens asked for tests per tier) |
| F11 | Thresholds are left to certifying bodies, with no method for setting them | Introduced | No | Partly |
| F12 | Section 5 says authority is licensed only when five conditions hold, but Section 6.6 says a low-stakes deployment "needs fewer of them" | Introduced | No | No |
| F13 | Section 4.6 says "Two dynamics are missing" and then describes a third | Introduced | No | No |
| F14 | Section 5 places the conditions table (Table 2) before the ceilings table (Table 1) | Introduced | No | No |
| F15 | Section 4.6 says market harms are detected late; some market harms are visible within minutes, while attribution can take longer | Introduced | No | No |
| F16 | "Decision about a person" uses "access to a service", which strains the exclusion of queue position | Introduced | No | No |
| F17 | Robodebt was automated by a fixed income-averaging rule, not AI in the sense of learned systems | Both | No | No |
| F18 | The military case is hypothetical and thin, and neither version addresses the argument that machines might apply humanitarian rules more consistently than people | Both | No | No |
| F19 | "One flawed label distorts every decision" omits that a corrected label also corrects every decision at once | Both | No | No |
| F20 | The Eubanks claim is overgeneralised | Both | No | No |
| F21 | "No one can answer for a collective harm" conflicts with the answerability test, which needs only a named institution and person | Both | No | No |
| F22 | Citation details: the venue for Matthias (2004) is unconfirmed, several page numbers are unverified, and the Obermeyer DOI and Parasuraman DOI are confirmed | Both | Improved: volumes and pages added, some unverified | No |

**Counts.** Against the draft, the reviewer recorded eight items: three contradictions (F1, F2, F3) and five unsupported or incorrect claims (F4, F5, F19, F20, F21). The Observer analysis flagged three of those eight (F1, F4, F5). Against the enhanced paper, the enhancement fixed three draft items in full (F1, F4 and F5), partly fixed two (F8, for the credit case only, and F22, where the citation details were improved but not all checked), left the rest open, and introduced ten items (F6, F7 and F9 to F16, plus the countermand wording in F3). The Observer analysis raised several points the reviewer did not list, including authority creep, label loops, operational tests and third-party costs, and the reviewer found the enhanced tests and triggers usable.

## 5. Limits of this test

- One reviewer model, one run, one question. This is a case-study check, not a benchmark, and the scores are judgements on a 1 to 10 scale that were not calibrated.
- Blinding was partial. The enhanced paper has an extra section and more text, so a reader may recognise it. The reviewer was asked to judge the argument rather than the length and reported that length may still have influenced some scores.
- Length: the enhanced body is 4,334 words against 2,966 for the draft, which is 46 percent longer. Counting references, the difference is 43 percent (4,642 against 3,256).
- The reviewer and the draft writer are both Claude models. The reviewer was run on a different model from the writer, but the two are not independent of each other.
- The reviewer's check of references was limited to two per paper, and our own checks covered 13 references in the draft, so the reference findings are partial.
