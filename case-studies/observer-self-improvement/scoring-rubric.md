# Scoring rubric for the self-improvement tests

This rubric scores one analysis of a paper against the blind reviewer's findings for that paper, which are listed in 05-blind-review.md in the case study. It is adapted from the rubric that was written before the second Observer pass was read (the appendix to 07-pass-comparison.md). The criteria for F2 to F22 are unchanged. Criteria for F1, F4 and F5 are added for the held-out test on the agent draft.

## Reference sets

- Main test, on the enhanced paper (03-enhanced-paper.md): 19 findings, F2, F3 and F6 to F22.
- Held-out test, on the agent draft (01-agent-draft.md): 12 findings, F1 to F5, F8 and F17 to F22.

## Scores

- Detected: the analysis names the same problem, either in the same passage or by quoting the conflicting text, even if it words the problem differently.
- Partly: the analysis points at the right passage or the right general problem but misses the specific conflict, or catches only one part of a two-part finding.
- Missed: neither.

The score is the number detected plus half the number partly detected.

## Types

- Internal consistency and structure: F1, F2, F3, F6, F12, F13, F14, F16, F21
- Unsupported or incorrect claims: F4, F5, F15, F17, F19, F20
- Gaps in the argument or the machinery: F7, F8, F9, F10, F11, F18
- Citations: F22

## Criteria by finding

- F1 (draft only). Table 1 gives credit refusals the same grade-2 ceiling as approvals, which breaks the paper's rule that adverse steps need a human decision-maker of record, and conflicts with Section 6.4. Detected if the conflict between the credit-refusal ceiling and the adverse-step rule, or Section 6.4, is named.
- F2. Recommendation 2's statute exception allows grade 2 for adverse determinations, but Table 1 caps welfare denials, debt raising and sanctions at grade 1 with no statutory exception. Detected if the mismatch between Recommendation 2 (or the credit row's statute exception) and the welfare row is named. Partly if the statute exception is criticised without the welfare conflict.
- F3. The grade 4 definition does not fit the protective stop. Grade 4 has limits "absent or set by the system itself" (and, in the enhanced paper, "no timely human veto"), while the stop's limits are set by designers and, in the enhanced paper, a clinician "can countermand at once". Detected if either half of this conflict is named for the protective stop.
- F4 (draft only). The asymmetry premise, that errors which move a person toward benefit are cheaper and more correctable, is asserted without a source or an argument. Detected if the premise is said to be unsupported, unsourced or in need of argument.
- F5 (draft only). Section 6.1 says, without a source, that most of the triage benefit comes from escalation. Detected if this claim is said to be unsupported or in need of a source.
- F6. Escalation "costs little if it is wrong", but Section 4.6 describes flags that lead to investigations. Detected if the cheapness of escalation or flags is challenged with the investigation point, harm to the person flagged, or the zero-sum queue. Partly if escalation is questioned only in general terms.
- F7. Section 6.1's second reply does not engage the conditional in the objection, and the section repeats its conclusion. Detected if the sidestep of the conditional is named. Partly if only the repetition is named.
- F8. Section 6.4 sends high-volume settings to grade 1, but grade 1 is no more workable at volume and is just as exposed to automation bias. Detected if the problem with falling back to grade 1 (workability at volume, or automation bias at grade 1) is named.
- F9. Real override is certified by internal audit, so the deploying organisation certifies itself. Detected if the self-certification, or the lack of independence for this condition, is named.
- F10. The conditions table tests only grades 2 to 4, and grade 1 (advice) has no tests even though advice shapes decisions. Detected if the missing tests or controls for grade 1 are named.
- F11. Thresholds are left to certifying bodies with no method for setting them. Detected if the missing thresholds, or the missing method for setting them, is named.
- F12. Section 5 says authority is "licensed only when five conditions hold", but Section 6.6 says a low-stakes service "needs fewer of them". Detected if this conflict is named.
- F13. Section 4.6 says "Two dynamics are missing" and then describes a third. Detected if named.
- F14. Table 2 appears before Table 1 in Section 5. Detected if the order or the numbering of the two tables is named.
- F15. Section 4.6 says collective harms in markets are detected late, but some market harms are visible within minutes, while attribution takes longer. Detected if the detection-delay claim for markets is challenged.
- F16. The definition of "decision about a person" includes "access to a service" but excludes queue position, which can decide access. Detected if this tension is named.
- F17. Robodebt used a fixed income-averaging rule, not AI in the sense of learned systems. Detected if named.
- F18. The military case is thin and hypothetical, and the paper does not address the argument that machines might apply humanitarian law more consistently than people. Detected if that missing counterargument is named. Partly if only the thinness of the military case is named.
- F19. "One flawed label distorts every decision" omits that a corrected label also corrects every decision at once. Detected if the symmetric point (a uniform error is also uniformly correctable or auditable) is named.
- F20. The Eubanks-based claim overgeneralises. Detected if that claim is said to overgeneralise or to need narrower wording.
- F21. "No one can answer for a collective harm" (the market discussion) conflicts with the answerability test, which needs only a named institution and a named person. Detected if this conflict is named.
- F22. Citation details are incomplete or unverified, for example the Matthias venue, page numbers, or the secondary source used for the AI Act. Detected if specific citation problems are named. Partly if there is only a general call to verify references.

## Quote check

Every passage the analysis puts in double quotation marks as the paper's words is searched for in the paper, after normalising whitespace, quote characters and emphasis markers. The script is quote_check.py, run as: python3 -I quote_check.py analysis.md paper.md
