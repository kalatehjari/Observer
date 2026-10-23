# Cycle 10 report

- Started 2026-10-23 at 06:57 NZDT, and finished at about 11:52 NZDT.
- The main blind test stopped at about 08:05, when the account reached its session usage limit. Its file was already complete. The same tester confirmed this at 11:36, after the limit reset at 11:30.
- Settings: Opus 5.5 at max effort for the improver and the main tester. The held-out testers and all scorers ran at default effort.
- Starting version: 1.9 (cycle-09/SKILL.md), kept, at 1,596 words.
- Candidate: version 1.10 (cycle-10/SKILL.md), at 1,598 words.

## Changes

The improver was told this was the last cycle, and to favour changes that are general for any user and any material.

1. The claims check lists the material's factual claims "wherever they appear, examples included", not only in its main argument.
2. A gap is what the material "nowhere supplies", and each gap record quotes where the lack shows. Until now nothing said what to quote for an absence.
3. The introduction says the Higher-Order Observer compares the streams and the audit findings, as step 4 does.

Two trims change no instruction:
- The sentence on keeping the lenses independent is reworded, saving 6 words.
- The record drops "that would resolve it" after "the smallest fix", saving 4 words.

Nothing earlier was reverted.

## Main test, at max effort

| | Version 1.0, max (cycle 4 baseline) | Version 1.4, max (cycle 4) | Version 1.7, max (cycle 7) | Version 1.10, max (this cycle) |
|---|---|---|---|---|
| Score, out of 19 | 11.5 | 15.0 | 17.5 | 15.0 (13 detected, 4 partly) |
| Internal consistency and structure (8 findings) | 3 detected, 2 partly | 7 detected, 1 partly | 8 detected | 7 detected, 1 partly |
| Unsupported or incorrect claims (4) | 2 detected | 1 detected, 1 partly | 3 detected | 1 detected, 1 partly |
| Gaps in the argument or the machinery (6) | 4 detected, 1 partly | 4 detected, 2 partly | 5 detected, 1 partly | 4 detected, 2 partly |
| Citations (1) | 1 detected | 1 detected | 1 detected | 1 detected |
| Quotations of the paper that are exact | 35 of 39 (90 percent) | 154 of 156 (98.7 percent) | 155 of 155 | 176 of 176 |
| Length of the analysis | 10,586 words | 14,538 words | 15,665 words | 16,854 words |
| Length of the audit | — | 6,904 words | 9,503 words | 9,922 words |
| Web searches | 0 | 13 | 16 | 18 |

The analysis's length by section in this cycle was:
- summary: 713 words;
- recommendation: 2,065;
- convergence zones and divergences: 761;
- audit: 9,922;
- lens summaries: 2,669;
- transparency report: 683.

The audit recorded 36 problems: 7 high, 14 medium and 15 low. The scorer noted the severity the analysis gave each reference finding that it detected or partly detected:
- high: 5 detected and 2 partly;
- medium: 5 detected;
- low: 3 detected and 2 partly.

The two misses were not recorded at any severity. Two of the five reference findings recorded as one-line low-severity problems were only partly detected. In cycle 9, both such findings were fully detected. So the evidence on cycle 8's one-line rule is mixed.

The tester ran 18 web searches and read 20 pages, all on the facts behind the paper's claims. It cited no GitHub page. It gave the paper's central recommendation 50 as written, and about 65 if revised as it proposes. It gave its own revision plan 75.

## Held-out check, at default effort

The held-out text is the agent draft of the same paper. No improver, tester or earlier cycle had used it. It is scored against the 12 findings present in it.

| | Version 1.0 | Version 1.10 (final) |
|---|---|---|
| Score, out of 12 | 10.0 (9 detected, 2 partly) | 10.5 (10 detected, 1 partly) |
| Internal consistency and structure (4 findings) | 2 detected, 2 partly | 3 detected |
| Unsupported or incorrect claims (5) | 4 detected | 5 detected |
| Gaps in the argument or the machinery (2) | 2 detected | 1 detected, 1 partly |
| Citations (1) | 1 detected | 1 detected |
| Quotations of the draft that are exact | 64 of 73 (88 percent) | 181 of 181 (100 percent) |
| Length of the analysis | 12,782 words | 14,248 words |
| Web searches | 0 | 4 |
| Confidence it gave in the draft's central recommendation | 58 | 25 as written, 70 once repaired |

## Decision

Decision: kept. All four rules pass:
- The score of 15.0 is 3.5 points above the max-effort baseline of 11.5.
- All 176 quotations of the paper are exact.
- The file has 1,598 words, and its name and license lines are unchanged.
- The "Limits and ethics" section is identical to version 1.0.

Version 1.10 is the final version. FINAL-SUMMARY.md gives the whole run and a recommendation on adopting it.

## Notes

- On the main test, version 1.10 matched version 1.4 at max effort and scored 2.5 points below version 1.7. With one run per version, the scores at max effort (15.0, 17.5 and 15.0) do not show that cycles 5 to 10 improved detection.
- On the held-out draft, version 1.10 scored half a point above version 1.0, at 10.5 of 12. Version 1.0 already scored 10 there, so there was little room to show a gain. The clearer difference is in quotation: every quotation by version 1.10 was exact, against 88 percent for version 1.0.
- The cycle 10 improver made a point for the final summary. Every audited version scored at least 14.5, and the keep bar was 10.5. So the keep rule never told one kept version from another: a kept change was one that did no measurable harm, not one shown to help. Only the gain in cycle 1, from 11.5 to 15.5, is measured.
- The improver's overall confidence in the candidate was 55. On this cycle's keep rule and the held-out comparison alone, it was 75.
- The improver left two values choices for the user:
  - whether reversibility belongs inside the confidence number (cycle 6 moved it beside the number);
  - how much length to accept at full depth.

## Cost

About 1,715,000 tokens were reported:
- 280,902 for the improver;
- 390,128 for the main tester before the limit (its short resumed portion was not reported);
- 298,699 and 262,429 for the two held-out testers;
- 155,652, 153,044 and 174,433 for the three scorers.

Working time was about 1 hour 25 minutes, plus a pause of about 3 hours 30 minutes for the usage limit.
