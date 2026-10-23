# Cycle 05 report

- Started 2026-10-22 at 19:34 NZDT, and finished at about 20:50 NZDT.
- Settings: Opus 5.5 at default effort for the improver, the tester and the scorer.
- Starting version: 1.4 (cycle-04/SKILL.md), kept, at 1,593 words.
- Candidate: version 1.5 (cycle-05/SKILL.md), at 1,598 words.

## Changes

1. The claims check is reorganised. The skill first checks each claim against its own knowledge, labelled as such, and against any sources it can consult without exposing confidential material, citing only what it read. It then sets what the claim says, at its stated strength and scope, beside the material's support and what it knows or found for and against it, and states any difference precisely. It asks what source or data would settle a claim only for claims it leaves unverified.
2. The full recommendation is written as numbered steps of one or two lines. The detail stays in the audit and is cited there by ID.
3. Each fix in the audit record names every other passage it must change.

To stay under the word limit, the improver cut the introduction's sentence about the audit from 21 words to 11. That changes no instruction, but the introduction no longer says "quoting it exactly"; the quotation rule in the procedure is unchanged. The improver noted that the user may want the longer sentence back.

## Test results

| | Version 1.0, default (cycle 1) | Version 1.1, default (cycle 1) | Version 1.3, default (cycle 3) | Version 1.4, max (cycle 4) | Version 1.5, default (this cycle) |
|---|---|---|---|---|---|
| Score, out of 19 | 11.5 | 15.5 | 15.5 | 15.0 | 14.5 (13 detected, 3 partly) |
| Internal consistency and structure (8 findings) | 3 detected, 2 partly | 6 detected, 2 partly | 8 detected | 7 detected, 1 partly | 7 detected, 1 partly |
| Unsupported or incorrect claims (4) | 2 detected | 3 detected | 2 detected | 1 detected, 1 partly | 1 partly |
| Gaps in the argument or the machinery (6) | 4 detected, 1 partly | 3 detected, 3 partly | 3 detected, 3 partly | 4 detected, 2 partly | 5 detected, 1 partly |
| Citations (1) | 1 detected | 1 detected | 1 detected | 1 detected | 1 detected |
| Quotations of the paper that are exact | 34 of 37 (92 percent) | 142 of 142 (100 percent) | 222 of 223 (99.6 percent) | 154 of 156 (98.7 percent) | 204 of 204 (100 percent) |
| Length of the analysis | 8,351 words | 15,479 words | 17,123 words | 14,538 words | 14,973 words |
| Length of the full recommendation | — | — | 2,552 words | 3,140 words | 1,535 words |

The analysis's length by section in this cycle was:
- summary: 589 words;
- framing: 306;
- full recommendation: 1,535;
- convergence zones and divergences: 704;
- audit: 8,991;
- lens summaries: 2,098;
- transparency report: 477;
- a list of the sources consulted: 208.

The tester ran 14 web searches and opened 15 pages, one of which was blocked. All of them checked the facts behind the paper's claims. The sources included EU AI Act guidance, WHO, the ICRC, the CFPB, law-firm briefings and Wikipedia. The output cites no GitHub page.

The tester gave its revision plan a confidence of 76. It scored the paper's central recommendation 67 as a direction and 40 as written.

## Decision

Decision: kept. All four rules pass:
- The score of 14.5 is 3 points above the default-effort baseline of 11.5.
- All 204 quotations of the paper are exact.
- The file has 1,598 words, and its name and license lines are unchanged.
- The "Limits and ethics" section is identical to version 1.0.

## Notes for the next cycle

- Claims about the world are falling. The score for that type has gone 3, 2, 1.5 and 0.5 out of 4 across versions 1.1, 1.3, 1.4 and 1.5. Versions 1.2, 1.4 and 1.5 each revised the claims check, adding the own-knowledge check, the source check and the side-by-side comparison. None of those revisions was followed by a gain in claims, and the type is now lower than in version 1.0, which had no audit and scored 2. Each version ran once, so any single step is within plausible noise, but the direction has held for four tested versions. The protocol allows the improver to revert a change when the evidence says it did not help.
- The total score has drifted from 15.5 (versions 1.1 and 1.3) to 15.0 and then 14.5. Claims fell by more than the total: by 1.5 points since version 1.3, while consistency fell by half a point and gaps rose by 1. (Corrected in cycle 7: an earlier wording said all of the fall was in claims.) The keep rule compares each candidate with version 1.0's baseline of 11.5, not with earlier kept versions, so this drift does not trigger a rejection.
- Gaps reached 5 detected and 1 partly, the best result so far for that type, after rising in each of the last two tested versions.
- Change 2 did what it was meant to. The full recommendation fell from 3,140 words in cycle 4 to 1,535. The audit grew from 6,904 to 8,991 words, so the whole analysis was about the same length as in cycle 4.
- The improver listed these candidates for later cycles, in this order:
  1. what to quote for a gap: say what the material as a whole lacks, then quote where the lack shows;
  2. what the confidence score is the probability of; every recorded run gave a score between 55 and 62 (true of the runs in cycles 1 to 4; this cycle's run gave 67 as a direction and 40 as written, a point corrected in cycle 7);
  3. showing the question as framed in the summary;
  4. two low-severity wording conflicts: the introduction says the Higher-Order Observer gives the transparency report, and the text does not say what a lens with nothing new still owes.
- 2 words remain under the skill's 1,600-word limit.

## Cost

About 830,000 tokens:
- 256,967 for the improver;
- 395,327 for the tester, which used 100 tools, many of them for web searches and pages;
- 178,086 for the scorer.

Working time was about 1 hour 20 minutes: 24 minutes for the improver, 44 for the tester and 7 for the scorer.

## Next

Cycle 6 runs at default effort and is not tested. It starts from version 1.5. A candidate that passes the structural checks is provisionally kept, and cycle 7's test checks it together with cycle 7's own changes.
