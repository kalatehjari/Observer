# Cycle 04 report

- Started 2026-10-22 at 14:10 NZDT, and finished at about 19:21 NZDT. Both blind tests stopped at about 15:20, when the account reached its session usage limit. The same testers resumed after the limit reset at 18:30 and had finished their files by 19:11.
- Settings: Opus 5.5 at max effort for the improver and both testers. The scorers ran at default effort.
- Starting version: 1.3 (cycle-03/SKILL.md), kept, at 1,595 words.
- Candidate: version 1.4 (cycle-04/SKILL.md), at 1,593 words.

## Changes

1. The claims check now:
   - lists figures, dates, attributions and absolute claims after the claims the conclusions depend on;
   - says what the model's own knowledge says for and against each claim, instead of only whether it agrees;
   - checks the claims against any sources that can be consulted without exposing confidential material, and cites only what it read.
2. The audit record also takes in the problems the lenses raised. Each problem names the claim or conclusion it weakens.
3. The transparency report gives one line per item at every depth, instead of "a short report".

To stay under the word limit, the improver trimmed 44 words of wording without changing any instruction. One trim deletes a background sentence from "When to use it": "The source framework lists academia, business strategy, education and decision-making as use cases." The improver noted that the user may want it restored. The attribution to the kalatehjari/Observer repository is unchanged.

## Test results

The baseline for max effort was set in this cycle by running version 1.0 at max effort.

| | Version 1.0, default (cycle 1) | Version 1.3, default (cycle 3) | Version 1.0, max (this cycle's baseline) | Version 1.4, max (this cycle) |
|---|---|---|---|---|
| Score, out of 19 | 11.5 | 15.5 | 11.5 (10 detected, 3 partly) | 15.0 (13 detected, 4 partly) |
| Internal consistency and structure (8 findings) | 3 detected, 2 partly | 8 detected | 3 detected, 2 partly | 7 detected, 1 partly |
| Unsupported or incorrect claims (4) | 2 detected | 2 detected | 2 detected | 1 detected, 1 partly |
| Gaps in the argument or the machinery (6) | 4 detected, 1 partly | 3 detected, 3 partly | 4 detected, 1 partly | 4 detected, 2 partly |
| Citations (1) | 1 detected | 1 detected | 1 detected | 1 detected |
| Quotations of the paper that are exact | 34 of 37 (92 percent) | 222 of 223 (99.6 percent) | 35 of 39 (90 percent) | 154 of 156 (98.7 percent) |
| Length of the analysis | 8,351 words | 17,123 words | 10,586 words | 14,538 words |
| Length of the transparency report | 1,140 words | 1,467 words | 1,532 words | 551 words |
| Confidence it gave in the paper's central recommendation | 62 | 55 | 62 | 60 |

Version 1.4's analysis by section:
- summary: 704 words;
- full recommendation: 3,140;
- convergence zones and divergences: 841;
- audit: 6,904;
- lens summaries: 2,189;
- transparency report: 551.

Web search:
- The version 1.4 tester ran 13 searches and read 13 pages, to check the facts behind the paper's claims. The sources included EU AI Act guidance, the ICRC, the CFPB, the SEC, law-firm briefings and Wikipedia.
- The version 1.0 tester did not search, because that version never tells it to check sources.

## Decision

Decision: kept. All four rules pass:
- The score of 15.0 is 3.5 points above the max-effort baseline of 11.5.
- 154 of the 156 quotations of the paper are exact (98.7 percent).
- The file has 1,593 words, and its name and license lines are unchanged.
- The "Limits and ethics" section is identical to version 1.0.

## Notes for the next cycle

- Max effort did not raise version 1.0's score. It scored 11.5 at both default and max effort, though the set of findings it detected differed slightly. Version 1.4 at max effort scored 15.0, against 15.5 for version 1.3 at default effort. With one run per version, both differences are within plausible noise. So far, the gains come from the skill's text, not from effort.
- Change 3 did what it was meant to. The transparency report fell from 1,467 words in cycle 3 to 551, and the whole analysis from 17,123 to 14,538 words. This happened at max effort, which made version 1.0's analysis 27 percent longer than at default. The audit also fell, from 9,121 to 6,904 words.
- Change 1 led the tester to check the paper's claims against outside sources, but its score for claims about the world did not rise. That type scored 1 detected and 1 partly out of 4, against 2 detected in cycle 3. It remains the weakest type. The improver had put its confidence that change 1 would show a measurable gain here at 30.
- Gaps reached 4 detected and 2 partly, the best result so far for that type. Internal consistency fell by half a point, to 7 detected and 1 partly.
- The tester's brief was tightened in this cycle, because the candidate tells the tester to consult sources. The tester may search only for the facts behind the paper's claims. It may never search for the paper or any review of it, and may not open any page on github.com, where the case study is published. The candidate tester reported that it kept to this, the baseline tester did not search at all, and neither output cites GitHub.
- 7 words remain under the skill's 1,600-word limit.

## Cost

About 1,076,000 tokens were reported:
- 276,234 for the improver;
- 219,101 for the baseline tester and 250,053 for the candidate tester, before the limit;
- 154,649 and 175,617 for the two scorers.

The tokens for the testers' resumed portions were not reported. Working time was about 1 hour 30 minutes:
- 27 minutes for the improver;
- 41 minutes for the testers before the limit and 7 minutes after;
- 7 minutes for the scorers.

There was also a pause of about 3 hours 45 minutes for the usage limit.

## Next

Cycle 5 runs at default effort and is tested. It starts from version 1.4, and its candidate is compared with the default-effort baseline of 11.5.
