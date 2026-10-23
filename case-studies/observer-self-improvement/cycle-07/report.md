# Cycle 07 report

- Started 2026-10-22 at 21:40 NZDT, and finished on 23 October at about 00:58 NZDT.
- The improver stopped at about 21:56, when the account reached its session usage limit. The same improver resumed after the limit reset at midnight and finished at 00:09.
- Settings: Opus 5.5 at max effort for the improver and the tester. The scorer ran at default effort.
- Starting version: 1.6 (cycle-06/SKILL.md), provisionally kept, at 1,596 words. The last tested version was 1.5.
- Candidate: version 1.7 (cycle-07/SKILL.md), at 1,599 words. This cycle's test checks cycle 6's untested changes together with cycle 7's own.

## Changes

The improver made two changes and left the third slot empty. It left the audit unchanged, including cycle 6's rewrite of the claims check, so that this test would bear as cleanly as possible on cycle 6's changes.

1. The summary now also gives the question as framed and the main divergence. A short answer is now the summary plus what the limits require, instead of a separate list.
2. When checking the recommendation, each high-severity problem gets a step, or a reason why it stays open.

Two trims change no instruction:
- "A final step, the Higher-Order Observer (HOO), compares" becomes "The Higher-Order Observer (HOO) then compares". This also removes a small inaccuracy: the transparency report is a later step.
- "explicit confidence scores" becomes "confidence scores".

Nothing earlier was reverted.

## Test results

| | Version 1.0, max (cycle 4 baseline) | Version 1.4, max (cycle 4) | Version 1.5, default (cycle 5) | Version 1.7, max (this cycle, includes 1.6) |
|---|---|---|---|---|
| Score, out of 19 | 11.5 | 15.0 | 14.5 | 17.5 (17 detected, 1 partly) |
| Internal consistency and structure (8 findings) | 3 detected, 2 partly | 7 detected, 1 partly | 7 detected, 1 partly | 8 detected |
| Unsupported or incorrect claims (4) | 2 detected | 1 detected, 1 partly | 1 partly | 3 detected |
| Gaps in the argument or the machinery (6) | 4 detected, 1 partly | 4 detected, 2 partly | 5 detected, 1 partly | 5 detected, 1 partly |
| Citations (1) | 1 detected | 1 detected | 1 detected | 1 detected |
| Quotations of the paper that are exact | 35 of 39 (90 percent) | 154 of 156 (98.7 percent) | 204 of 204 (100 percent) | 155 of 155 (100 percent) |
| Length of the analysis | 10,586 words | 14,538 words | 14,973 words | 15,665 words |
| Web searches | 0 | 13 | 14 | 16 |
| Confidence it gave in the paper's central recommendation | 62 | 60 | 67 as a direction, 40 as written | 62 |

The analysis's length by section in this cycle was:
- summary: 723 words;
- recommendation: 1,582;
- convergence zones and divergences: 692;
- audit: 9,503;
- lens summaries: 2,256;
- transparency report: 892.

The tester ran 16 web searches and read 17 pages, all to check the facts behind the paper's claims. It cited sources such as the ICRC, the EU AI Act, the CFPB, the SEC, Human Rights Watch and Amnesty. It cited no GitHub page. It gave its revision plan a confidence of 80, and the paper's central recommendation 62.

## Decision

Decision: kept. All four rules pass:
- The score of 17.5 is 6 points above the max-effort baseline of 11.5.
- All 155 quotations of the paper are exact.
- The file has 1,599 words, and its name and license lines are unchanged.
- The "Limits and ethics" section is identical to version 1.0.

The decision also confirms the provisional version 1.6.

## Notes for the next cycle

- This is the highest score so far. It is 3 points above version 1.5 and 2.5 above version 1.4, the last version tested at max effort. Most of the gain over version 1.5 is in claims about the world, which rose from 0.5 to 3 out of 4. Consistency rose by half a point, to 8 of 8, and gaps held at 5.5 of 6.
- Cycle 6's two-question claims check is the obvious candidate for the gain in claims, since cycle 7 left the audit alone. Three cautions:
  - A score of 0.5 was likely to rise on the next run anyway, as the cycle 6 improver warned.
  - This run was at max effort, and version 1.5 ran at default. Effort alone seems an unlikely cause, because max effort did not change version 1.0's score and version 1.4 at max scored 15.0, but it cannot be ruled out.
  - There was one run and one scorer. The scorer noted that a strict reading of one partial finding's own criterion would make it a miss, which would give 17.0 instead of 17.5. The decision is the same either way.
- The audit is the longest so far, at 9,503 words. The transparency report rose to 892 words, against 551 and 477 in the last two tests, although each item is still one line.
- The improver's advice for cycle 8: if claims reach 2 or more, work on the audit's length; if they stay at 1 or below, go back to the claims check. Claims reached 3 here, so the advice points to the audit's length. The source check may also be costly: the cycle 5 tester, which ran it, used 395,327 tokens and 100 tool calls in all, 29 of them web searches and page reads. (Corrected in cycle 8: an earlier wording gave the whole run's figures as the cost of the source check.)
- The improver found two small errors in the cycle 5 and cycle 6 reports, and both have been corrected.
  - Those reports said that all of the fall in the total since version 1.3 was in claims. In fact claims fell by 1.5 points, consistency by half a point, and gaps rose by 1.
  - A note in the cycle 5 report said every recorded run gave a confidence between 55 and 62. That was true of cycles 1 to 4, but cycle 5's own run gave 67 as a direction and 40 as written.
- 1 word remains under the skill's 1,600-word limit.

## Cost

About 746,000 tokens were reported:
- 191,996 for the improver before the limit (its resumed portion was not reported);
- 392,469 for the tester;
- 161,960 for the scorer.

Working time was about 1 hour 20 minutes:
- 24 minutes for the improver;
- 42 for the tester;
- 5 for the scorer.

There was also a pause of about 2 hours for the usage limit.

## Next

Cycle 8 runs at default effort and is not tested. It starts from version 1.7.
