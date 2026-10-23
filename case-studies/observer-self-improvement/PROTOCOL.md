# Observer self-improvement protocol

This protocol runs ten cycles in which the observer-multi-lens-reasoning skill maps its own process, critiques that process with its own method, and revises itself. A fixed blind test checks every revision, so a change is kept only if the skill does not get worse. The user asked for it on 21 October 2026.

## Settings

- Model: Opus 5.5 for every agent.
- Effort: max in cycles 4, 7 and 10, and default in all the others. The user changed this on 22 October 2026; the first plan had max effort in cycles 3, 6, 9 and 10. Max effort applies to the agent that revises the skill and to the agent that runs the test. The scoring agent always runs at default effort.
- Testing: changed on 22 October 2026 at the user's request. The blind test runs in every other cycle and in every max-effort cycle, which now means cycles 1, 3, 4, 5, 7, 9 and 10. Cycles 2, 6 and 8 are not tested.
- Schedule: cycle 1 ran at once, as a pilot. Each later cycle starts about two hours after the previous one started, triggered by a reminder sent back into the same Claude session. A cycle never starts before the previous one has finished. When the account reaches its usage limit, work pauses until the limit resets, and a watchdog reminder resumes it.
- Where files go: this folder, self-improvement/, inside the skill's folder. The cycles never change the skill's own SKILL.md, one level up. The Claude account skill changes only if the user approves the final version.

## Files for each cycle

| File | What it holds |
|---|---|
| cycle-NN/self-analysis.md | The skill's map of its own process, and its Observer analysis of how to improve that process (the self-feedback) |
| cycle-NN/SKILL.md | The candidate version |
| cycle-NN/changes.md | Each change, the process step it targets, the evidence, the expected effect and the risk, with a diff |
| cycle-NN/test-candidate.md | The candidate's blind test output (tested cycles only) |
| cycle-NN/test-baseline.md | The original version's blind test output (cycles 1 and 4 only) |
| cycle-NN/score-candidate.json, score-baseline.json | The test scores (tested cycles only) |
| cycle-NN/report.md | Summary, scores, decision and cost |

## Steps in each cycle

1. Find the current version. It is the SKILL.md of the most recent cycle whose report says "Decision: kept" or "Decision: provisionally kept", unless a later report says that version was set aside. If there is no such cycle, it is the original SKILL.md (version 1.0).
2. Self-identification and self-feedback. An improver agent reads only the current version, this protocol, the skill's PROGRESS.md and the reports of earlier cycles. It maps the skill's process as a numbered pipeline. It then applies the current version of the skill to the self-improvement question below, and writes a candidate version with at most three changes.
3. Blind test, in tested cycles only. A fresh tester agent reads only the candidate SKILL.md and the test paper. It applies the candidate, exactly as written, to the test question. In cycle 1 (default effort) and cycle 4 (the first max-effort cycle), a second tester also runs the original version at that cycle's effort, to set the baseline for that effort.
4. Scoring, in tested cycles only. A fresh scorer agent scores each test output against scoring-rubric.md and runs the quote check. The score is the number of findings detected plus half the number partly detected, out of 19.
5. Decision. The candidate is kept if all four of these conditions hold:
   - Its score is no more than 1 point below the baseline for its effort.
   - When it quotes the paper at least five times, at least 95 percent of those quotations are exact.
   - The SKILL.md has at most 1,600 words, and its name and license lines are unchanged.
   - The safeguards in "Limits and ethics" are intact.

   Otherwise the candidate is rejected, and the next cycle starts from the current version.

   In an untested cycle, only the last three conditions are checked, along with the limit of three changes. A candidate that passes is provisionally kept, and becomes the starting point for the next cycle. When a later tested candidate is kept, it confirms the provisional versions it builds on. When a tested candidate is rejected, the provisional versions made since the last tested and kept version are set aside with it, and the next cycle starts from the last version that passed a test.
6. Report and schedule. Write report.md, copy the cycle folder here, post a short note in the session, and schedule the next cycle.

## The self-improvement question

"How should this skill's process be revised so that its analyses are more accurate, more verifiable and more useful to the person deciding, and how confident can we be in each proposed change?"

## Rules for the improver

- It never sees the test paper, the blind review, the case-study analyses, the test outputs or the scores for individual findings. It sees only the aggregate results in earlier reports: the total score, the score by type of finding, quotation accuracy and length. This keeps the changes general and the test honest.
- Changes are general instructions about the method. They never mention a subject, a paper, a test or a score.
- It makes at most three changes per cycle. Each change is tied to a step in the process map and comes with its evidence and its expected effect.
- It may revert an earlier change when the evidence says that change did not help.
- It keeps every safeguard in "Limits and ethics": the warning that all lenses come from one model, the ban on invented evidence, keeping the person in charge, the note on professional advice, and naming values choices as such.

## The test

- Paper: 03-enhanced-paper.md, in case-studies/ai-authority-sensitive-decisions/.
- Question, the same in every cycle: "How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?"
- Reference: the 19 blind-review findings still open in that paper, scored with scoring-rubric.md.
- Web search, from cycle 4: a tester may search only when the skill tells it to check sources, and only for the facts behind the paper's claims. It never searches for the paper, its title or its sentences, never looks for reviews or analyses of it, and opens no page on github.com, where this case study is published.
- Held-out check in cycle 10: the final version and the original are both run at default effort on the agent draft (01-agent-draft.md), and scored against the 12 findings present in it. No earlier cycle tests on that text.

## The final cycle

Cycle 10 also writes FINAL-SUMMARY.md, covering:
- the versions, and the changes kept and rejected;
- the scores by cycle and effort;
- the held-out result;
- a recommendation on whether to adopt the final version;
- the final SKILL.md.

Adopting the final version into the Claude account is the user's decision. They make it by reviewing a skill proposal.

## Limits

- There is one test paper, one test run per version in each cycle, and one scorer.
- Scores from repeated runs of the same version vary, and by how much is not yet known. That is why the rule allows a drop of one point.
- The test guards against regressions on one kind of task. It does not measure general quality.
- Repeated testing on one paper can reward changes that only suit that paper. The held-out check in cycle 10 partly guards against this.
- All the agents are Claude models, so their agreement is not independent evidence.

- Untested cycles add changes that only the next tested cycle checks, and a rejection there sets them aside as well.

## Cost

Cycle 1 used about 971,000 tokens, including the baseline run of version 1.0. Its improver used about 190,000 tokens, each test run 180,000 to 250,000, and each scoring about 170,000. The revised estimates are:
- about 190,000 tokens for an untested cycle;
- about 620,000 for a tested default-effort cycle;
- 0.9 to 1.6 million for a max-effort cycle.

That comes to about 6.5 million tokens for cycles 2 to 10. Usage limits pause the work when they are reached, so the cycles are likely to take about two days.
