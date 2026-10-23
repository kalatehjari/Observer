# Cycle 08 report

- Started 2026-10-23 at 01:29 NZDT, and finished at about 01:58 NZDT.
- Settings: Opus 5.5 at default effort for the improver. This cycle has no blind test, under the revised protocol.
- Starting version: 1.7 (cycle-07/SKILL.md), kept, at 1,599 words.
- Candidate: version 1.8 (cycle-08/SKILL.md), at 1,599 words.

## Changes

The improver made two changes and left the third slot empty, so that cycle 9's test bears on only one change that could affect detection.

1. A low-severity problem in the audit gets a one-line record, giving its ID, locations, quotation, type, severity and fix. The improver's reason: the audit is the only large section with no rule on length, and it made up 61 percent of the last analysis (9,503 of 15,665 words).
2. The confidence score names the main checks it depends on. Since cycle 6 the score has been a probability that the recommendation survives the checks still needed, but nothing said which checks, so the score could not be tested later.

Three trims pay for the 17 added words, and none changes an instruction:
- The convergence-zones sentence on shared assumptions is 8 words shorter.
- The no-padding sentence is 3 words shorter.
- The sentence "The lenses judge; the audit checks." is removed.

Nothing earlier was reverted. The claims check, the quotation rule and the checks for consistency and gaps are unchanged.

## Checks (no blind test this cycle)

| Rule | Result |
|---|---|
| At most 1,600 words | 1,599 words |
| Name and license lines unchanged | Yes, and the description is also unchanged |
| "Limits and ethics" intact | Identical to version 1.0 |
| At most three changes | Two |
| General wording only | Yes |
| No backticks | None |

## Decision

Decision: provisionally kept. Version 1.8 passes every structural rule, but it has not been tested. Cycle 9's test checks it together with cycle 9's own changes. If that test fails, version 1.8 is set aside along with cycle 9's candidate, and cycle 10 starts from version 1.7.

## Notes for the next cycle

- The improver's confidence:
  - 55 that change 1 helps. Its main risk is that the audit is where findings are detected, unlike the two sections where earlier rules on length worked.
  - 70 that change 2 helps. It cannot affect detection.
  - 45 that both changes survive the checks still needed.
- The improver pointed out that cycle 9's keep bar of 10.5 sits 7 points below the last score of 17.5. Passing it cannot confirm small gains or rule out moderate losses.
- The improver's advice for cycle 9:
  - leave the audit and the claims check unchanged;
  - report the audit's length and its number of records at each severity beside the scores by type.
- Open issues the improver left:
  - a low-severity unverified claim may lose its note on which way the analysis leans;
  - claims scored separately do not name their checks.
- A wording point for the next improver: the shortened convergence-zones sentence, "Say whether the agreement rests on shared evidence or a shared assumption, which makes it weaker than it looks", can be read as saying that either kind of agreement is weaker. The earlier wording said only agreement on a shared assumption is.
- The improver found two small errors in earlier reports, and both have been corrected:
  - The cycle 7 report gave 395,327 tokens and 100 tools as the cost of the source check. Those were the figures for the whole cycle 5 tester run, and 29 of its 100 tool calls were web searches and page reads.
  - The cycle 1 report did not say which of its two testers used 178,375 tokens and which used 252,960. That can no longer be checked, and the report now says so.
- 1 word remains under the skill's 1,600-word limit.
- The computer that holds the Skills folder was not reachable during this cycle, so the cycle 7 and cycle 8 files and the corrected reports are waiting to be copied there.

## Cost

About 276,000 tokens for the improver. Working time was about 30 minutes.

## Next

Cycle 9 runs at default effort and is tested. It starts from version 1.8. Its test checks cycle 8's changes and its own, against the default-effort baseline of 11.5.
