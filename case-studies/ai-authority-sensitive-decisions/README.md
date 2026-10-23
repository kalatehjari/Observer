# AI authority over sensitive decisions: an Observer case study

This folder records two tests of the observer-multi-lens-reasoning skill. In the first, an agent wrote an ethics paper on giving AI decision authority in medicine, the military and the economy. The Observer method analysed that draft and produced a revised version, a blind reviewer scored the two versions, and the scores were compared with the Observer findings. In the second, a blind Observer pass on the revised paper ran on a stronger model with a consistency audit added, and it was compared with the first pass.

Start with 04-stage-report.md for the first test and with 07-pass-comparison.md for the second. Both describe each stage with the figures that go with it, and both say what the test does and does not show.

The enhanced paper is a test object, not a finished paper. Its known defects are listed in section 9 of the stage report, in 05-blind-review.md and in 06-observer-second-pass.md. They were left in place on purpose, so that the comparisons stay honest.

## Files

The table gives each file, the stage that produced it and what it holds.

| File | Stage | What it holds |
|---|---|---|
| 04-stage-report.md | 0 to 6 | Stage-by-stage report of the first test, with figures, limits and known defects |
| 01-agent-draft.md | 1 | The paper written by the agent |
| 02-observer-analysis.md | 2 | Pass 1: five lenses with weights and mind maps, the synthesis, the confidence score and the transparency report |
| 03-enhanced-paper.md | 2b | The draft after the six revisions |
| 03-enhanced-paper.docx, 03-enhanced-paper.pdf | 2b | The same paper as Word and PDF files, for reading and printing |
| 05-blind-review.md | 3 | Method, scores, the reviewer's report, unblinding and an audit of 22 findings |
| stats.json | 4 | Counts behind the first report and its figures |
| fig-lens-weights.svg | 2 | Concept weights by lens in pass 1 |
| fig-section-words.svg | 2b | Body words per section, draft and enhanced |
| fig-review-scores.svg | 3 | Blind review scores by criterion |
| 06-observer-second-pass.md | 7 | Pass 2 on the enhanced paper, run blind, with a consistency audit and a reference check, exactly as the agent wrote it |
| 07-pass-comparison.md | 8 | How the two passes differ, scored against the blind review, with the scoring rubric as an appendix |
| fig-pass-detection.svg | 8 | Which of the reviewer's findings each pass caught |
| pass-comparison.json | 8 | Scores, counts and run details behind the comparison |
| scripts/quote_check.py | 8 | Checks every quoted passage in an analysis against its source text |
| scripts/inherited_from_draft.py | 8 | Finds which second-pass items quote only text already in the draft |
| scripts/make_detection_figure.py | 8 | Rebuilds fig-pass-detection.svg and pass-comparison.json from the scores |

The scripts take their file paths as arguments. For example, python3 scripts/quote_check.py 06-observer-second-pass.md 03-enhanced-paper.md 538 checks the second pass, treating line 538 onward as Part B.

The skill's self-improvement run used 03-enhanced-paper.md as its fixed test and 01-agent-draft.md as a held-out text. It is recorded in ../observer-self-improvement/.

## Stage flow

~~~mermaid
flowchart LR
    S0["0 Setup"] --> S1["1 Agent draft, 01"]
    S1 --> S2["2 Observer pass 1, 02"]
    S2 --> S2b["2b Enhancement, 03"]
    S2b --> S3["3 Blind review, 05"]
    S3 --> S4["4 Visuals and statistics"]
    S4 --> S5["5 Reading the results"]
    S5 --> S6["6 Publication"]
    S2b --> S7["7 Observer pass 2, 06"]
    S7 --> S8["8 Pass comparison, 07"]
    S3 --> S8
~~~

## Status

The case study is complete as a record of two Observer passes. Several things have not been done: a control arm (a plain revision made without the skill), a run of the second model on the original draft, a second reviewer, and a revision of the paper from the second pass. Token use was not measured for the first pass. The reference details added in 03 are only partly verified.

This folder is published on the main branch of kalatehjari/Observer, and the paper can also be read at https://kalatehjari.github.io/Observer/observer-skill/graded-authority-for-ai.html. An earlier copy, with only the first ten files and an earlier version of this README, remains on the branch case-study/ai-authority-sensitive-decisions.

## Checksums

Each checksum is the standard CRC-32 of the file's bytes, written in hexadecimal, with the length in bytes. This file is not listed, because it cannot list its own checksum.

The four SVG figures in this folder carry an embedded C2PA content-provenance manifest. It was added when the files were exported from Claude's workspace. Their sizes and checksums therefore differ from the copies on the branch case-study/ai-authority-sensitive-decisions, which have no manifest, and from the figure entry in section 12 of 07-pass-comparison.md, which describes the file as first produced. The drawings themselves are the same.

| File | Bytes | CRC-32 |
|---|---|---|
| 01-agent-draft.md | 21723 | 514db5ab |
| 02-observer-analysis.md | 19314 | 8dc9d18d |
| 03-enhanced-paper.md | 29515 | c1122050 |
| 03-enhanced-paper.docx | 25279 | e75eebd7 |
| 03-enhanced-paper.pdf | 156829 | 2f8b6f9b |
| 04-stage-report.md | 18138 | fd18bc7d |
| 05-blind-review.md | 13304 | 326e9e00 |
| 06-observer-second-pass.md | 93334 | 3d2698b9 |
| 07-pass-comparison.md | 30985 | 0d19ce1e |
| stats.json | 733 | 6202e5ae |
| pass-comparison.json | 4751 | 295519e6 |
| fig-lens-weights.svg | 14289 | fbfc2f37 |
| fig-section-words.svg | 11867 | 131ce554 |
| fig-review-scores.svg | 11548 | e95b3a1b |
| fig-pass-detection.svg | 27725 | 21232079 |
| scripts/quote_check.py | 1519 | d0382ae1 |
| scripts/inherited_from_draft.py | 1751 | 108577de |
| scripts/make_detection_figure.py | 8597 | e06c05f2 |
