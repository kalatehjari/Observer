# AI authority over sensitive decisions: an Observer case study

This folder records one test of the observer-multi-lens-reasoning skill. An agent first wrote an ethics paper on giving AI decision authority in medicine, the military and the economy. The Observer method then analysed that draft and produced a revised version. A blind reviewer scored the two versions, and the scores were compared with the Observer findings.

Start with 04-stage-report.md. It describes each stage with the figures that go with it, and it says what the test does and does not show.

The enhanced paper is a test object, not a finished paper. Its known defects are listed in section 9 of the stage report and in 05-blind-review.md. They were left in place on purpose, so that the comparison stays honest.

## Files

The table gives each file, the stage that produced it and what it holds.

| File | Stage | What it holds |
|---|---|---|
| 04-stage-report.md | all | Stage-by-stage report, figures, limits and known defects |
| 01-agent-draft.md | 1 | The paper written by the agent |
| 02-observer-analysis.md | 2 | Five lenses with weights and mind maps, the synthesis, confidence and transparency report |
| 03-enhanced-paper.md | 2b | The draft after the six revisions |
| 05-blind-review.md | 3 | Method, scores, the reviewer's report, unblinding and an audit of 22 findings |
| stats.json | 4 | Counts behind the text and the figures |
| fig-lens-weights.svg | 2 | Concept weights by lens |
| fig-section-words.svg | 2b | Body words per section, draft and enhanced |
| fig-review-scores.svg | 3 | Blind review scores by criterion |

## Stage flow

~~~mermaid
flowchart LR
    S0["0 Setup"] --> S1["1 Agent draft, 01"]
    S1 --> S2["2 Observer analysis, 02"]
    S2 --> S2b["2b Enhancement, 03"]
    S2b --> S3["3 Blind review, 05"]
    S3 --> S4["4 Visuals and statistics"]
    S4 --> S5["5 Reading the results"]
    S5 --> S6["6 Publication"]
~~~

## Status

The case study is complete as a record of the test. Three things were not done. There was no second Observer pass on the enhanced paper, there was no control arm (a plain revision made without the skill), and token costs were not measured by stage. The reference details added in 03 and 05 are only partly verified.

## Checksums

Each checksum is the standard CRC-32 of the file's bytes, written in hexadecimal, with the length in bytes. This file is not listed, because it cannot list its own checksum.

| File | Bytes | CRC-32 |
|---|---|---|
| 01-agent-draft.md | 21723 | 514db5ab |
| 02-observer-analysis.md | 19314 | 8dc9d18d |
| 03-enhanced-paper.md | 29515 | c1122050 |
| 04-stage-report.md | 18138 | fd18bc7d |
| 05-blind-review.md | 13304 | 326e9e00 |
| stats.json | 733 | 6202e5ae |
| fig-lens-weights.svg | 6515 | 4aff4ed4 |
| fig-section-words.svg | 4093 | 0855c7db |
| fig-review-scores.svg | 3774 | e5a9d7fa |
