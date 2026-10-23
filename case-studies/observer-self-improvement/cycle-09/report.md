# Cycle 09 report

- Started 2026-10-23 at 02:18 NZDT, and finished at about 06:45 NZDT.
- The blind test stopped at about 03:11, when the account reached its session usage limit. The same tester resumed at 06:31, after the limit had reset at 05:00, and finished its file.
- Settings: Opus 5.5 at default effort for the improver, the tester and the scorer.
- Starting version: 1.8 (cycle-08/SKILL.md), provisionally kept, at 1,599 words. The last tested version was 1.7.
- Candidate: version 1.9 (cycle-09/SKILL.md), at 1,596 words. This cycle's test checks cycle 8's untested changes together with cycle 9's own.

## Changes

The improver made three small repairs to cycle 8's wording and left the consistency, gaps, claims, quotation and coverage rules unchanged.

1. A separate confidence score for a claim or recommendation in the material is given on the same basis as the main score, and names its own checks and factors.
2. The convergence-zones sentence again says that only agreement resting on a shared assumption is weaker than it looks. Cycle 8's trim had made it readable as discounting all agreement.
3. A low-severity problem gets one line that leaves out only the claim it weakens. Cycle 8's list of fields for that line had dropped the lean of an unverified claim and the other passages a fix must change.

Three trims change no instruction and save 8 words:
- "the constraints from the framing" becomes "the framing's constraints";
- "the smallest change that fixes the problem" becomes "the smallest fix";
- "requests for a single creative piece" becomes "a single creative piece".

Nothing earlier was reverted.

## Test results, at default effort unless stated

| | Version 1.3 (cycle 3) | Version 1.5 (cycle 5) | Version 1.7, max effort (cycle 7) | Version 1.9 (this cycle, includes 1.8) |
|---|---|---|---|---|
| Score, out of 19 | 15.5 | 14.5 | 17.5 | 14.5 (13 detected, 3 partly) |
| Internal consistency and structure (8 findings) | 8 detected | 7 detected, 1 partly | 8 detected | 6 detected, 1 partly |
| Unsupported or incorrect claims (4) | 2 detected | 1 partly | 3 detected | 2 detected |
| Gaps in the argument or the machinery (6) | 3 detected, 3 partly | 5 detected, 1 partly | 5 detected, 1 partly | 4 detected, 2 partly |
| Citations (1) | 1 detected | 1 detected | 1 detected | 1 detected |
| Quotations of the paper that are exact | 222 of 223 | 204 of 204 | 155 of 155 | 203 of 203 |
| Length of the analysis | 17,123 words | 14,973 words | 15,665 words | 14,801 words |
| Length of the audit | 9,121 words | 8,991 words | 9,503 words | 8,845 words |
| Audit records: high, medium, low | not recorded | 5, 27, 20 | 5, 17, 13 | 6, 25, 21 |
| Web searches | not recorded | 14 | 16 | 7 |
| Confidence it gave in the paper's central recommendation | 55 | 67 as a direction, 40 as written | 62 | 40 as written, 60 for its direction once repaired |

The analysis's length by section in this cycle was:
- summary: 575 words;
- recommendation: 1,839;
- agreement and disagreement among the lenses: 585;
- audit: 8,845;
- lens summaries: 2,178;
- transparency report: 751.

Within the audit:
- the table of factual claims: 872 words;
- the 6 high-severity records: 2,120 words;
- the 25 medium-severity records: 4,726 words;
- the 21 low-severity records: 852 words, one line each, about 41 words a line.

The tester ran 7 web searches and read 8 pages, all to check the facts behind the paper's claims. Its sources included the ICRC, the EU AI Act, the SEC, the Law Society Journal and Wikipedia. It cited no GitHub page.

What cycle 9's improver asked this report to check:
- **The scorer noted the severity the analysis gave each reference finding that it detected or partly detected.**
  - 2 were in low-severity one-line records, and both were fully detected.
  - The 3 partial detections were in high- or medium-severity records.
  - The 3 misses were not recorded at any severity.
  - So this run shows no sign that the one-line rule cost a detection.
- **Separate confidence score:** the score for the paper's central recommendation lists the checks still needed and its own factors, on the same basis as the plan's score.
- **Low-severity lines:**
  - The one unverified claim at low severity kept its lean ("probably partly true") and what would settle it.
  - The low-severity lines give a fix but do not list other passages it must change.

## Decision

Decision: kept. All four rules pass:
- The score of 14.5 is 3 points above the default-effort baseline of 11.5.
- All 203 quotations of the paper are exact.
- The file has 1,596 words, and its name and license lines are unchanged.
- The "Limits and ethics" section is identical to version 1.0.

The decision also confirms the provisional version 1.8.

## Notes for the next cycle

- The score equals version 1.5's at default effort and is 1 point below versions 1.1 and 1.3. It is 3 points below version 1.7's 17.5, but that run was at max effort.
- Compared with version 1.7:
  - consistency fell by 1.5 points, with one miss and one partial;
  - claims fell by 1 point, back to 2 of 4;
  - gaps fell by half a point.
- Cycle 9's improver set a rule for cycle 10: revert cycle 8's one-line rule if the default-effort score fell below about 14 and the fall was in consistency or gaps. The score is 14.5, so the rule does not apply, although consistency did fall. The severity evidence above also gives no sign against the one-line rule.
- With one run per version, the scores of the versions tested at default effort since version 1.1 (15.5, 15.5, 14.5 and 14.5) are within about a point of one another. Version 1.7's 17.5 at max effort stands out. Cycle 10 runs at max effort, so its result can be compared with version 1.7's.
- The improver left these low-severity points open for cycle 10 or the user:
  - The introduction still says the Higher-Order Observer gives the transparency report, and doesn't say it also compares the audit findings.
  - The skill doesn't say what a lens with nothing new still owes.
  - It doesn't say what to quote for a gap.
  - The output layout gives the framing no section of its own.
  - Problems in the summary need IDs even when there is no audit to assign them.
- The improver also noted that the progress notes are out of date: they still say none of their proposals has been applied to the skill. They are left unchanged while the cycles run, so that every improver reads the same notes, and will be updated with the final summary.
- 4 words remain under the skill's 1,600-word limit.
- The computer that holds the Skills folder was still not reachable at the start of this cycle.

## Cost

About 694,000 tokens were reported:
- 227,449 for the improver;
- 298,978 for the tester before the limit (its resumed portion was not reported);
- 167,112 for the scorer.

Working time was about 1 hour 10 minutes:
- 19 minutes for the improver;
- 33 minutes for the tester before the limit and 4 after;
- 7 minutes for the scorer.

There was also a pause of about 3 hours 20 minutes for the usage limit.

## Next

Cycle 10 is the last. It runs at max effort and is tested. It starts from version 1.9, and its candidate is compared with the max-effort baseline of 11.5. It also runs the held-out check: the final version and version 1.0, both at default effort, on the agent draft, which no earlier cycle has used. Then it writes FINAL-SUMMARY.md.
