Model ID: claude-opus-5-5 (Opus 5.5). Reasoning effort: max.

# Observer pass 2: Graded Authority for AI over Sensitive Human Matters

## Part A. Standard Observer pass

**Question.** How should this paper be revised so that it is the strongest defensible paper on whether AI systems should hold decision authority over highly sensitive human matters (medicine, military force and economic allocation), and how confident can we be in the paper's central recommendation?

Framing. The decision belongs to the author: which revisions, in what order, will let the paper stand up to expert reviewers in clinical safety, administrative and data-protection law, international humanitarian law, human factors and economics, while keeping its practical aim of giving governance committees, procurement officers, regulators and ethics boards tests they can apply. Three constraints apply. The paper is a short normative piece of about 4,600 words. The evidence its ceilings would need does not yet exist. And revisions must not invent that evidence. The stakeholders are:

- the people decided about: patients, people in conflict zones, claimants and borrowers;
- the reviewers and operators who would carry named accountability;
- deploying institutions and vendors;
- certifiers and regulators;
- states;
- the paper's readers.

A good answer must rank the revisions, separate fixes to internal consistency from changes of position, give a calibrated confidence in the central recommendation with its drivers, and name the values choices the author still has to make.

I take the central recommendation to be the position stated in the Abstract and Section 1. AI systems should not hold final decision authority over determinations about particular persons in the three domains. They may hold bounded authority over narrow executional tasks, over escalation and protection, and over some favourable decisions, but only when five conditions hold, with the grade tracking the stakes. Table 1 is the operational form of this position.

Assumptions:
1. "Strongest defensible" means internally consistent, accurately sourced, engaged with the strongest objections, scoped to what it can support, and usable by its stated audience. It does not mean most persuasive.
2. The confidence score measures whether the central recommendation is right as a policy stance for the stated audience, not whether it will be adopted.
3. What I know of law, cases and literature beyond the paper comes from training data and was not checked against sources in Part A. Where it matters, I flag it for verification.
4. The author can revise freely, including changing ceilings, provided each change is argued.
5. The paper's three cases are described accurately enough for the argument. The reference spot-check is deferred to Part B.

**Input.** One document, the paper "Graded Authority for AI over Sensitive Human Matters: A Tiered Account for Medicine, Military Force and the Economy" (29,515 bytes, 4,642 words, 203 lines), read in full. It contains an Abstract, eight sections, Table 2 (five conditions, each with a test, a certifier and a re-check interval), Table 1 (twelve decision classes with grade ceilings) and thirteen references. Nothing else was read, and no web sources were used for Part A.

### 1. Recommendation and confidence

#### 1.1 Recommendation

Keep the paper's core position. Rebuild its machinery so that every rule, table row, objection reply and recommendation follows from one stated test.

The core worth keeping is narrower and firmer than the current thesis:

- Institutions stay answerable for every determination about a person.
- No system holds grade 4 over any such determination.
- Four kinds of determination stay at grade 1 under a named human decision-maker of record: force against persons, adverse determinations by the state, deprioritisation in scarce care, and treatment selection.
- Grades 2 and 3 are licensed only for functions whose effect on the person is favourable, protective or bounded by an envelope, and only when the five conditions pass.

Most of the revisions below make the paper say this consistently. Three of them (revisions 4, 5 and 7) change what it claims.

This is not legal, medical or military advice. Before publication, three kinds of specialist should review the paper: a clinical safety officer or medical-device regulatory specialist for the clinical tiers, an administrative and data-protection lawyer in each jurisdiction named for the legal statements, and a specialist in international humanitarian law for the military content.

#### 1.2 Ordered revisions

Must fix. Without these the paper is not defensible.

1. Define "final decision authority" in grade terms and make the thesis match Table 1. As written, the thesis says AI should not hold final authority over determinations about persons. Yet Section 5 licenses one such determination at grade 4 ("with one exception"), and Table 1 sets three of its eight person-level classes above grade 1. Escalation, which shapes such determinations, sits at grade 2 as well. Define final authority as grade 4: the output takes effect for a person, and no accountable human can prevent or promptly reverse it. Then state the bright lines given in 1.1. Reclassify the protective stop as grade 3. It has a human-defined safe state and an immediate clinician countermand, so it fails the paper's own grade-4 definition. In any case, no grade-4 system can pass the bounded-delegation and real-override conditions. Delete the exception. (Analytical, Pragmatic.)

2. Separate decision power from authority. Let the grades measure how far a system's output settles outcomes, which is power. Let the five conditions be the licence that makes delegating that power legitimate. Then say plainly that authority stays with the institution, in the paper's own sense of an agent who can give reasons and be corrected. Section 7.2 already says this. Sections 1, 2 and 5 speak as if systems hold authority ("They may hold bounded authority"; "automated systems may be given more authority"). The change removes a category tension that a philosopher reviewer will press. It also fixes the abstract's "five grades of authority". (Creative, Analytical.)

3. Classify each permission by its effect on the person affected, and on third parties, not by its label. The paper treats escalation, protection and favourable decisions as safe carve-outs, but its own examples show an adverse effect behind each one:
   - A fraud flag sends a family to investigation.
   - In a ranked queue for scarce beds, raising one patient lowers others.
   - An approval can leave a borrower with debt they cannot carry.

   Add an effect test with three questions: does the function move the person toward help, or toward scrutiny or sanction? Is the resource rival or non-rival? Does a favourable outcome carry risk to the person or to others? Add Table 1 rows for adverse escalation (fraud and sanction flags, child-protection screening) and for protective holds in the economy (account freezes). This is the paper's best defence against relabelling. (Critical, Creative, Analytical, Systems.)

4. Make grade 1 a safeguard in fact, not only in name. Section 2 says the failures of Section 4 arise at advice too, and the human-factors work the paper cites concerns decision aids. Yet the five conditions apply only to grades 2 to 4. Grade 1 is the paper's main protection for its gravest classes: six of twelve rows, including force against persons. For those classes, require right-target validation and evidence of real override at grade 1:
   - minimum deliberation times;
   - recorded reasons;
   - monitoring of agreement rates;
   - caps on the number of cases per reviewer;
   - a rule that a score which is decisive in practice is treated as the decision.

   EU case law on credit scoring may already support the last rule (the SCHUFA judgment, C-634/21; verify its scope). Add a matrix of grades against conditions so that Section 5, Section 6.6 and Recommendation 1 agree on which conditions apply where. (Critical, Systems, Pragmatic.)

5. Make the rule for adverse determinations a single rule. At present four passages disagree:
   - Table 1 allows a statutory grade 2 for credit refusals only.
   - Recommendation 2 extends that exception to all adverse determinations, including welfare denials, sanctions and debts.
   - Section 5 says grade 1 "governs" individual adverse determinations.
   - Section 6.4 says high volume makes grade 2 indefensible, yet lending approvals sit at grade 2.

   Choose one position (see the conditional element in 1.3) and apply it everywhere. Keep welfare denials, debts and sanctions out of any statutory exception, since Robodebt is the paper's own evidence for that line. Engage the existing legal settlement on solely automated decisions (GDPR Article 22, and the AI Act's provisions on oversight and explanation), and explain where the paper is stricter and why. (Pragmatic, Critical.)

6. Repair the asymmetry premise in four ways:
   - State one test of whose harm counts. It should count both the applicant's own harm from a wrongful approval and the harm to third parties.
   - When the condition fails, say the premise is suspended, not "reversed", since the stated effect is that both directions fall to grade 1.
   - Use one evidential threshold: the premise is usable only after a domain test. That means lending approvals default to grade 1 today, as Section 6.5 implies.
   - Acknowledge that the outcomes of refusals are largely unobserved. Any empirical check is therefore tilted toward finding approvals harmful and refusals harmless.

   Consider expressing the premise as an explicit, publicly set ratio of error costs for each decision class. (Analytical, Systems, Creative.)

Should fix. These decide whether the paper is the strongest version, not merely a consistent one.

7. Answer the strongest objections and add an upgrade path. Engage the hardest real cases:
   - Autonomous screening that already issues refer-or-rescreen results without a clinician. Diabetic retinopathy screening authorised by a medical regulator is one example (verify the details). It is the sharpest test of the medical ceilings and of Section 6.6.
   - The argument that autonomous systems might reduce civilian harm. Arkin's work is the standard reference (verify).
   - Arguments from access to credit.

   State the burden of proof and justify it by goods other than accuracy: answerability, contestability and dignity. Compare against the actual human baseline, not an ideal one. Then specify the evidence that would raise a ceiling: prospective validation against the outcome, subgroup error parity on a metric chosen in advance, demonstrated real override, and contestation outcomes, all certified independently and subject to sunset. Without this the framework can only ratchet down, and the lives-saved reply in Section 6.1 reads as status-quo bias. (Critical, Creative, Pragmatic.)

8. Make answerability resistant to scapegoating, and make certification independent. Section 4.1 calls traceability the minimal test of answerability, but Table 2's test asks only that a named person hold responsibility. Put traceability into the test: the named person must understand the system's behaviour and be able to act on it. Otherwise naming creates what the human-robot interaction literature calls a moral crumple zone (Elish; verify). Make certification of answerability and real override independent, at least for adverse and lethal classes. Robodebt failed at the level of the deploying body, and Table 2 lets that body certify itself. Say which certifier re-certifies after which trigger. (Critical, Systems, Pragmatic.)

9. Complete the drift machinery. Section 4.6 names three dynamics, but the triggers in Section 5 cover only authority creep. Five additions are needed:
   - a label-loop trigger, based on the share of training labels produced by the system's own flags;
   - a detection-delay rule, with a maximum time to detection and a pre-committed rollback for collective harms;
   - proactive outcome sampling, so that errors suffered by people who do not or cannot contest are found;
   - metrics that are hard to game, by rotating seeded-error methods and using triggers based on patterns rather than on a single reviewer;
   - reserve review capacity, so that a downgrade does not create a backlog that pushes the certifier toward quick re-certification.

   (Systems, Pragmatic.)

10. Scope the market rows. The thesis concerns determinations about persons, while halts, rate limits and discretionary price interventions are collective. Either move markets to a short separate section with its own principle (systemic risk, and answerability for collective harm), stating that private algorithmic trading falls outside the thesis and is governed by existing market regulation, or drop markets and say so. Recommendation 6 implies that discretionary AI interventions may proceed with public justification, while the grade-1 ceiling allows no action at all; reconcile the two. Replace "no one can answer" with the precise gap meant, and give a source for it. (Analytical, Critical, Pragmatic.)

11. Strengthen the military section where the live risk lies. The danger that the paper's own evidence points to is grade-1 rubber-stamping of target recommendations at high tempo, not only grade-4 autonomy. Five changes follow:
   - Apply real-override tests to per-engagement human decisions.
   - Add two things to the defensive grade-3 row: the ICRC's own exclusion of unpredictable systems, and the risk of misidentifying crewed aircraft as munitions.
   - Fix Section 6.3 so that its speed argument cannot be read as licensing the Section 3.2 envelope against persons.
   - Place the position within international humanitarian law (distinction, proportionality, precautions, legal review of new weapons) and within current state practice.
   - Present the prohibition as a position the paper shares with the ICRC, not as a consensus.

   (Critical, Systems, Pragmatic.)

Polish.

12. Answer the low-resource objection as it was posed. The objection says some people would get no service at all; the reply accepts only "slower service". Either own that cost (some populations will get no automated service) or allow a bounded exception: favourable or protective functions only, remote review, audit after the fact, and never adverse determinations. Restricting a system "to escalation" does not help where review capacity is absent, because escalation in Table 1 itself needs a reviewing clinician. (Critical, Pragmatic.)

13. Tighten the evidence and the editing:
   - Support or narrow the unsupported empirical claims: that human bias is heterogeneous and automated bias uniform; that model reasons are often unavailable to credit applicants; that a wrong flag costs little; that no one can answer for collective harms; and that the Obermeyer case shows a system that saves more lives overall.
   - Note that Robodebt was rule-based data matching, not machine learning. The paper's scope is therefore automated decision systems in general; say why learning, opacity and drift sharpen the case.
   - Cite the AI Act from the Official Journal or EUR-Lex rather than from a third-party site.
   - Number the tables in order of appearance, and put Limitations before the Conclusion.
   - Add one worked, end-to-end certification of a real type of deployment: a sepsis-alert escalation tool, or a hybrid closed-loop insulin system as a grade-3 example.
   - Map the certifiers to existing bodies in two jurisdictions.
   - Require deployers to report the cost of meeting the conditions.
   - Run a line-by-line consistency check.

   (Pragmatic, Analytical.)

#### 1.3 Conditional element

The author has to choose how to treat high-volume adverse determinations in private lending, and the choice is one of values:

- If the priority is that no affected person should have to start a challenge to get human attention, keep credit refusals at grade 1 with no statutory exception, and accept the cost in speed and access.
- If the priority is access and timeliness at scale, allow a statutory grade 2 for credit refusals only, on four conditions:
  - automatic human review before the refusal takes effect whenever the applicant disputes it;
  - reasons in usable terms;
  - published reversal rates;
  - no shift of the burden of proof to the applicant.

  Never extend the exception to welfare denials, debts or sanctions.

Either way, Table 1, Section 5, Section 6.4 and Recommendation 2 must state the same rule.

Two smaller conditionals follow the same pattern:

- If the paper keeps markets, scope them to public market-integrity mechanisms under their own principle. Otherwise remove them and say so in Limitations.
- If the target is a philosophy journal, give revisions 2 and 8 more space. If it is a policy outlet, give more space to revisions 4, 5 and 9 and to the worked example.

#### 1.4 Confidence in the paper's central recommendation

Confidence score: 62 out of 100.

Factors that raise it:
- The core bright lines agree with three kinds of support: the authoritative positions the paper cites (the ICRC's 2021 position; the AI Act's human-oversight requirement), the documented failures it uses (Obermeyer; Robodebt), and long-standing human-factors findings (Bainbridge; Parasuraman and Manzey). The bright lines are that nothing runs at grade 4 over persons, and that force against persons and adverse state determinations need a named human decision-maker.
- The two kinds of error are not equally costly. A ceiling set too low can be raised later, at the cost of delay and some forgone benefit. Delegation granted too freely in lethal or debt-raising decisions causes harm that cannot be undone. A conservative default is the choice with less to regret.
- Breaking authority into permissions and grades, with downgrade triggers, makes the recommendation testable and revisable. Few positions in this debate are.

Factors that lower it:
- The key term "final authority" is undefined, and Table 1 licenses a grade-4 determination about persons, so the recommendation as written contradicts itself. Several rules also disagree with each other: the exceptions for adverse determinations, and which deployments must meet the conditions.
- The ceilings and the asymmetry premise have no empirical support, as the paper itself says. The strongest counterexamples are not engaged: deployed autonomous screening, the claim that autonomy can reduce civilian harm, and access to credit. And there is no upgrade path.
- The machinery delivers less protection than the recommendation promises. Grade 1 carries no conditions, although automation bias arises at advice, and the carve-outs defined by label can hide adverse effects.
- The military position is contested among states. All five lenses come from one model, so their agreement on the core is not independent confirmation.

Taken separately, the core bright lines would score about 72, and the specific ceilings with the asymmetry premise about 50. The overall 62 gives the core slightly more weight, because the core is what the paper is mainly for.

#### 1.5 Estimated confidence after the revisions

About 74: roughly 78 for the core and 68 for the machinery. The revisions remove the internal contradictions, which are the largest correctable drag on the score. They also extend protection to grade 1 and add an upgrade path, so the recommendation becomes harder to attack from either side.

Three things keep the score from rising further:
- The values choices cannot be argued away: statistical lives and access weigh against answerability and freedom from the burden of challenge.
- The outcome data the ceilings would need do not yet exist, and no revision can supply them.
- The military position remains contested.

The revised paper's argument would be stronger than the certainty of its conclusion.

#### 1.6 What would change the recommendation, and next steps

What would change it:
- Prospective evidence about a grade 2 or 3 system for some adverse determination would justify raising that ceiling. The evidence would have to show that, with institutional answerability and automatic fast review, the system produces fewer and more evenly spread wrongful outcomes than grade-1 human decisions, without shifting the burden onto the person affected. The paper should say in advance that it would raise the ceiling on such evidence.
- Evidence that grade-1 review is routinely a formality in some domain, such as targeting at tempo or high-volume claims, would argue for tighter limits: caps on volume, or withdrawal of some decision-support uses.
- A binding international instrument on autonomous weapons, or a change in the controlling case law on automated decisions, would change the military or the legal framing.

Top next steps for the author:
1. Do a definitions pass covering final authority, decision about a person, and the effect classes. Then rebuild Table 1 with a column showing how each ceiling is derived from the effect on the person, reversibility, rivalry and review capacity.
2. Build the matrix of grades against conditions, and reconcile Section 5, Sections 6.4 and 6.6, and Recommendations 1, 2 and 6 against it.
3. Rewrite Section 6.1 as a section on the strongest objection: the screening case, the military argument, the credit-access argument, and the upgrade path.
4. Write one worked certification example, then have the three kinds of specialist named in 1.1 review the paper before submission.

### 2. Convergence zones

C1. The thesis and Table 1 must say the same thing, and the grade-4 protective stop is a misclassification.
- Lenses: Analytical, Pragmatic, Creative, Critical.
  - Analytical: grade 4 cannot pass the paper's own conditions.
  - Pragmatic: a committee cannot apply an undefined thesis.
  - Creative: the stop belongs with power to block, not power to impose.
  - Critical: the exception overstates how safe protective automation is.
- Basis: shared evidence, namely the paper's own definitions and table, which anyone can check. This is the strongest convergence.

C2. Grade 1 is not a reliable safeguard and needs conditions in the gravest classes.
- Lenses: Critical, Systems-thinking, Pragmatic, Analytical.
- Basis: mixed. The direction rests on shared evidence: the paper's Section 2 sentence and the human-factors literature it cites. The size of the problem in clinical, military and welfare review rests on a shared assumption that findings from aviation and process control carry over to those settings.

C3. Classify by effect, not by label.
- Lenses: Creative (the effect matrix), Critical (relabelling), Analytical (rival queues), Systems-thinking (vendors will design toward classes with higher ceilings).
- Basis: shared evidence from the paper's own examples (fraud flags; the over-indebted borrower), plus a shared assumption that deployers respond strategically to classification. That assumption is plausible but untested here.

C4. The paper needs an upgrade path and a real answer to the lives-saved and access objections.
- Lenses: Critical, Creative, Pragmatic, Analytical.
- Basis: mostly a shared assumption, a value of epistemic humility: ceilings the paper calls "design judgements" should be revisable by evidence. The paper's own admission supports it. This agreement is weaker than it looks, because the lenses share one model's priors.

C5. Answerability must include traceability, and certification must be independent where interests conflict.
- Lenses: Critical, Systems-thinking, Pragmatic.
- Basis: shared evidence (Section 4.1 read against Table 2, and the certifiers Table 2 lists), plus a shared assumption that self-certification is biased. Robodebt supports that assumption, but it is a single case.

C6. The core direction is sound as a default: humans and institutions stay answerable, nothing runs at grade 4 over persons, and force against persons and adverse state determinations stay at grade 1.
- Lenses: all five.
- Basis: largely a shared assumption (values about dignity and answerability, held by one model), and partly shared evidence (Robodebt, Obermeyer, the human-factors literature, and the ICRC as an authoritative but non-binding source).
- This convergence is the most likely to be an artefact of one model. External expert review is the check.

C7. The drift machinery is incomplete: there are no triggers for label loops or detection delay, and the metrics can be gamed.
- Lenses: Systems-thinking, Analytical, Pragmatic.
- Basis: shared evidence (Section 4.6 read against the trigger list in Section 5).

C8. The market rows fall outside the thesis.
- Lenses: Analytical, Critical, Pragmatic.
- Basis: shared evidence (the thesis concerns persons and the market rows do not), plus a shared but unverified belief about how existing market regulation assigns responsibility.

### 3. Productive divergences

D1. Credit refusals: grade 1, or a statutory grade 2.
- The disagreement: the Pragmatic lens favours a statutory grade 2 with human review, for scale, access and timeliness. This is close to the existing EU settlement on solely automated decisions. The Critical lens favours grade 1, because review on request moves the burden onto the person affected, which is the Robodebt failure.
- Source: values (who should bear the burden of starting a review), plus a factual dispute (whether review on request works for credit applicants as a population, who differ from welfare recipients).
- Judgement: a real trade-off that the author must own. It is carried into the conditional element in 1.3.

D2. An upgrade path, or a ratchet.
- The disagreement: the Creative and Pragmatic lenses want ceilings that evidence can raise, with sunset clauses. The Systems-thinking lens warns that an upgrade path feeds authority creep, and that the evidence for upgrades will be biased because the outcomes of refusals are unobserved. The Critical lens partly agrees.
- Source: time horizon, and the weight given to the quality of evidence.
- Judgement: a real trade-off, partly resolvable by making the procedure asymmetric: any upgrade needs independent, prospective evidence, while downgrades are automatic.

D3. The protective stop.
- The disagreement: the Analytical lens says reclassify it as grade 3. The Creative lens says create a distinct power to block or pause, with its own test. The Critical lens says protective automation can be the most dangerous kind. An automatic flight-control function meant to keep an aircraft within safe handling, which crews could in principle counter, contributed to two fatal crashes (the Boeing 737 MAX MCAS cases; verify). Bainbridge's irony predicts that the clinician who must "countermand at once" will be least prepared at exactly that moment.
- Source: framing (taxonomy against risk).
- Judgement: the taxonomy dispute is noise, an error that reclassification fixes. The risk point is real. The paper should test that the safe state is safe for this patient, and that a countermanding clinician is present and alert.

D4. Lives saved and the burden of proof.
- The disagreement: the Critical lens says the paper shows status-quo bias and does not answer the objection in its strongest form. The Pragmatic lens says the asymmetry in reversibility justifies a cautious default.
- Source: values about statistical lives against wrongful harm that cannot be undone, and time horizon.
- Judgement: a real values choice, which the paper should name as such. The reversibility argument justifies a default, not a permanent ceiling.

D5. The military position.
- The disagreement: the Critical lens notes that state positions differ, that the ICRC position is not law, and that the paper does not engage the argument that autonomy might reduce civilian harm. The Systems-thinking lens notes that autonomy is hard to verify (a grade is a software setting), and that arms-race dynamics favour coordinated limits. The Pragmatic lens notes that per-engagement human decisions at tempo may become ritual.
- Source: two factual cruxes, plus values. The cruxes are whether systems can reliably distinguish combatants, civilians and people who have surrendered, and whether human review at tempo can be meaningful.
- Judgement: real. The paper should state the cruxes and present its prohibition as a reasoned position.

D6. Markets: drop or keep.
- The disagreement: the Analytical lens says drop them, because they fall outside a thesis about persons. The Systems-thinking lens says keep collective harms, because detection delay and systemic coupling are where automated authority could do the most damage. The Pragmatic lens says existing regulation already covers much of this ground.
- Source: scope and framing.
- Judgement: partly noise, because the scope is ambiguous and stating it fixes that; and partly real, because it is a genuine question whether collective harms belong in this paper at all.

D7. Seeded errors.
- The disagreement: the Pragmatic lens says they are feasible, citing a precedent in security screening. The Systems-thinking lens warns of Goodhart effects. The Critical lens says they are unsafe in live clinical, welfare or targeting decisions.
- Source: the weight given to precedent, against the weight given to dynamics and ethics.
- Judgement: a real trade-off, resolvable by design. Seed errors only offline or in shadow review, never where a seeded error could reach a person, and rotate the methods.

### 4. Lens summaries

#### 4.1 Analytical

Reasoning chain:
1. Evidence. The thesis is stated in terms of "final authority" (Abstract, Section 1). The operational content, though, lives in the grades (Section 2) and the ceilings (Table 1), and "final" is never mapped onto a grade.
2. Evidence. Of Table 1's twelve decision classes, eight are determinations about persons by the paper's own definition. Section 2 excludes escalation that changes only a queue position, and the defensive row and the two market rows are not about persons. Three of the eight have ceilings above grade 1: favourable approvals at 2, dosing at 3 and the protective stop at 4. Escalation, which shapes such determinations, sits at 2.
3. Inference. The thesis is therefore true only on a narrow reading of "final", roughly grade 4 or beyond human reversal. On the natural reading, that the system settles the outcome for a person, the paper's own table contradicts it.
4. Inference. Grade 4 is defined by "no timely human veto" and by limits "absent or set by the system itself". The conditions, by contrast, require limits written before operation, an automatic stop and real override. No grade-4 deployment can satisfy them. And the protective-stop row, with a human-defined safe state and a clinician countermand, is grade 3 by the paper's own test.
5. Inference. The three-step argument establishes necessary conditions (answerability, contestability, designed safeguards), not the ceilings. Tiering is one design among several that meet those conditions; another is institutional answerability with an automated first instance and an appeal. The "therefore" in Section 1 overreaches unless the ceilings are derived from a stated rule.
6. Inference. The most valuable revision is definitional and structural: define final authority in grade terms, reclassify the stop, derive each ceiling from the effect on the person, reversibility, rivalry and review capacity, and report how much the paper licenses above grade 1.

Key concepts:
- Mapping "final authority" onto the grades, 0.90: whether the thesis is true depends on this mapping.
- Consistency of the grade definitions with the ceilings, 0.85: formal contradictions are the objections a reviewer can land most easily, and the cheapest to fix.
- A rule for deriving ceilings, 0.70: it turns design judgements into reproducible ones that a committee can apply to classes the table omits.
- Strength of claims against the evidence base, 0.60: three cases illustrate failure modes, but none tests the grade design itself.
- Breaking authority into permissions, 0.55: a real contribution, but it cannot carry weight until the problem of rival queues is resolved.

~~~mermaid
mindmap
  root((Analytical lens))
    Thesis versus table
      Final authority undefined
      Eight person level classes
      Three above grade 1
    Grade definitions
      Grade 4 means no veto
      Conditions need limits and override
      Protective stop fits grade 3
    Argument structure
      Necessary conditions shown
      Ceilings not derived
      Tiering is one design of several
    Evidence base
      Three cases
      Failure modes not design tests
    Fix
      Define terms
      Derivation column
~~~

#### 4.2 Creative

Reasoning chain:
1. Assumption. Asking whether AI should hold authority invites a category error. By the paper's own definition, authority presupposes an agent who can give reasons and be corrected, and the paper says a system cannot supply that alone.
2. Inference. Reframe the question: when may an institution let automated outputs settle outcomes, and under what licence? Authority stays with institutions, and systems hold delegated, revocable decision power. The grades measure that power, and the five conditions are the licence.
3. Evidence (outside the paper; general knowledge). Existing institutions already license delegated decisions: standing orders and scope-of-practice rules in clinical work, circuit breakers in markets, and sunset clauses in regulation. They offer tested templates for limits fixed in advance, credentialing, re-certification and expiry.
4. Inference. Generate the ceilings from an effect matrix rather than from domain lists. Its dimensions are the effect on the person (favourable, protective pause, neutral, adverse, lethal), reversibility, rivalry and review capacity. The domains then become worked examples, and missing classes come into view: a system that blocks a human's action, fraud flags, protective holds.
5. Inference. Distinguish the power to impose from the power to block or pause. Blocking power with a human unblock is the principled home for the protective stop, but only if the safe state is safe for the person. Replace the binary asymmetry premise with an explicit, publicly set ratio of error costs for each class, in the spirit of legal burdens of proof, and suspend the premise where the ratio is unknown.
6. Inference. A paper reframed around licensed delegation, an effect matrix, and symmetric paths up and down (sunset and re-licensing) would be more general, harder to game, and easier for its audience to apply.

Key concepts:
- Licensed delegation (the institution holds authority; the system holds revocable power), 0.80: it dissolves the category tension and matches how law treats agents.
- An effect matrix in place of domain lists, 0.75: it generalises, exposes missing classes and blocks relabelling.
- Blocking versus imposing power, 0.60: it gives protective functions a principled place, but needs a test that the safe state really is safe.
- A ratio of error costs for each class, 0.55: it makes the asymmetry premise explicit and adjustable, but invites false precision.
- Sunset and re-licensing, 0.50: a constructive answer to the lives-saved objection, though routine renewal can become a channel for authority creep.

~~~mermaid
mindmap
  root((Creative lens))
    Reframe the question
      Institutions hold authority
      Systems hold revocable power
      Conditions as a licence
    Effect matrix
      Favourable
      Protective pause
      Adverse
      Lethal
    Borrowed templates
      Standing orders
      Scope of practice
      Circuit breakers
      Sunset clauses
    Blocking versus imposing
      System may pause
      Human may unblock
      Safe state must be safe
    Error cost ratio
      Set in public
      Suspend when unknown
~~~

#### 4.3 Critical

Reasoning chain:
1. Evidence. The paper concedes that its ceilings are "design judgements, not empirical findings", and that the asymmetry premise has "an empirical condition that this paper does not establish".
2. Inference. The recommendation therefore rests on the normative argument from answerability and contestability, not on outcome evidence. Its strongest opponent is a lives-saved or access argument made against the actual human baseline, and the paper does not answer that argument in its strongest form. It places the burden of proof on the system without arguing for that allocation. Its third reply ("If efficiency justified removing review, no appeal would survive") answers a weaker argument than the one posed.
3. Evidence. Three facts in the text combine. Section 2 says the failures of Section 4 "arise there too", at advice. The five conditions apply only to grades 2 to 4. And Table 1's grade-1 row for force against persons lists only "Human decision for each engagement". So the paper's main safeguard for its gravest decisions carries no conditions.
4. Inference. The carve-outs are defined by label, and the paper's own examples put an adverse effect behind each label: flagged families go to fraud investigation, a favourable approval leaves a borrower with debt they cannot carry, and a protective function can withhold treatment. A deployer can therefore move an adverse determination into a looser class simply by renaming it. The cost falls on claimants, patients and people in conflict zones, and disproportionately on the poor and on minorities, as the paper's own sources (Eubanks; Obermeyer) show.
5. Inference. Naming a person closes the responsibility gap only on paper unless that person meets the traceability test the paper itself calls minimal. Without it, frontline clinicians, officials and operators absorb blame for behaviour they could not foresee. That is exactly what Matthias and Sparrow say ordinary ascription cannot fairly do. Self-certification by the deploying body puts a conflict of interest exactly where Robodebt failed.
6. Inference. As a cautious default, the recommendation points in the right direction, but it overstates the protection it offers. It fails in three conditions: if grade 1 is rubber-stamped, if labels are gamed, or if a narrow system is demonstrably safer and fairer than the human baseline. A strong revision has to close those three conditions and own the cost to people who are denied an automated service.

Key concepts:
- Grade 1 is not a safe harbour, 0.85: the gravest classes rely on advice-level review, which the paper's own evidence says is vulnerable.
- Relabelling the carve-outs, 0.80: an adverse act framed as escalation or protection escapes the ceiling meant for it.
- Burden of proof and status-quo bias, 0.70: the strongest objection goes unanswered, and the human baseline is never measured.
- A moral crumple zone in named accountability, 0.65: naming without traceability shifts blame downward.
- Conflicts in self-certification, 0.55: some certifiers have an interest in the outcome, and the paper's own welfare case shows where that fails.

~~~mermaid
mindmap
  root((Critical lens))
    Weak points
      Ceilings untested
      Asymmetry premise untested
      Military case hypothetical
      Third reply answers a weaker argument
    Grade 1 not safe
      Automation bias at advice
      Conditions skip grade 1
      Targeting at high tempo
    Relabelling
      Fraud flags as escalation
      Holds as protection
      Unaffordable credit as favourable
    Who bears the cost
      Poor and minority groups
      Frontline reviewers
      People denied service
    Failure conditions
      System safer than humans
      Rubber stamp review
      Unfunded review capacity
~~~

#### 4.4 Systems-thinking

Reasoning chain:
1. Evidence. The paper names authority creep and the label loop as reinforcing dynamics, and detection delay as a third. It treats them as hypotheses to monitor and says that Section 5 turns them into downgrade triggers.
2. Inference. The triggers damp authority creep (shortened windows, falling override rates, reviewers who cannot give reasons). They do not damp the label loop, which runs while the label definition stays the same, or detection delay. So two of the three named dynamics have no balancing loop. The triggers also create loops of their own. Metrics on override rates and seeded errors invite Goodhart effects: token overrides, hunting for the seeds, boilerplate reasons. And a downgrade with no reserve review capacity produces a backlog, which pushes the certifier toward quick, formal re-certification.
3. Evidence (outside the paper; the selective-labels literature; verify). The outcomes of refused applications and unflagged cases are largely unobserved, and contestation data come mostly from people who are able to contest.
4. Inference. The empirical checks the framework leans on (the asymmetry test, right-target validation, contestation) are therefore biased by who and what is observed. The bias tilts the asymmetry check toward restricting favourable automation, and it hides harm from omission, as in Obermeyer's under-identification.
5. Inference. Liability rules and procurement shape override behaviour and product design more than certification does. If deviating from a system is riskier for a clinician than following it, override rates fall whatever the table says. A grade is also a software setting that can be changed silently. Ceilings therefore need configuration control and tamper-evident logs, above all in weapons, where states find autonomy hard to verify in one another's systems.
6. Inference. The framework needs a trigger for every named dynamic, metrics robust to gaming, reserve capacity for downgrades, proactive sampling for unseen errors, and configuration integrity. Without them its reinforcing loops outweigh its balancing ones, and the effective grade will drift upward.

Key concepts:
- Reinforcing loops with no balancing trigger (the label loop, detection delay), 0.75: the paper names risks and then leaves them unmonitored.
- Observation bias (unobserved refusals; who contests), 0.75: it undermines the very empirical tests the framework relies on.
- Goodhart effects on override metrics, 0.60: reviewers who are measured learn the measure.
- Downgrade capacity and the backlog loop, 0.55: a downgrade that cannot be staffed is undone in practice.
- Configuration integrity of grades, 0.50: decisive in weapons and procurement, less so in hospital governance.

~~~mermaid
mindmap
  root((Systems lens))
    Reinforcing loops
      Authority creep
      Label loop without trigger
      Detection delay without trigger
    Balancing loops
      Downgrade triggers
      Contestation and reversal
    Second order effects
      Token overrides
      Seed hunting
      Downgrade backlog
      Liability shapes override
    Observation bias
      Refusal outcomes unseen
      Only some people contest
      Evidence tilts the premise
    Configuration integrity
      Grade is a setting
      Tamper evident logs
      Verification between states
~~~

#### 4.5 Pragmatic

Reasoning chain:
1. Evidence. The paper's audience is people who must decide whether a deployment may act on its own, and it promises tests they can apply "without further philosophical work".
2. Evidence. Several tests lack the parameters a committee needs. Thresholds are left to certifiers, and "near zero", "sustained period", "material change" and "a stated time" are all undefined. Table 2 names five certifiers, but the downgrade rule speaks of "its certifying body".
3. Inference. A committee cannot apply these tests as written. One certifier, "Safety authority for the domain", has no obvious counterpart in welfare administration. The cheapest fix is to map each condition onto bodies and duties that already exist. These include the AI Act's oversight, logging and fundamental-rights impact assessment; GDPR safeguards for solely automated decisions; adverse-action notice rules in credit; change control for medical-device software; and legal reviews of new weapons. Mapping lowers the cost of adoption and shows where the paper adds to the law rather than duplicating it.
4. Evidence (outside the paper; verify). Seeded-error testing has real precedents: threat images projected into airport baggage screening, and known-abnormal cases inserted into radiology quality assurance.
5. Inference. Seeding cannot be used wherever a seeded error could reach a person, as in live targeting, live debts or live patients. In those domains the paper should specify simulated or shadow seeding, and it should budget the costs (audit, logging, seeded review, reserve capacity) rather than only naming them.
6. Inference. Errors in the restrictive direction are cheap to reverse, since a ceiling can be raised later. Errors in the permissive direction are expensive to reverse for lethal and other irreversible harms. A conservative default with an evidence-based upgrade path is therefore the low-regret option. The next actions are a definitions pass, a rebuilt Table 1 with a derivation column, a matrix of grades against conditions, a mapping of certifiers to real bodies, one end-to-end worked example, and review by domain experts before publication.

Key concepts:
- Operational completeness of the tests, 0.80: the stated audience cannot use a test whose parameters are undefined.
- Mapping onto existing law and regulators, 0.75: it determines the cost of adoption and the paper's credibility with regulators.
- The reversibility asymmetry of the policy itself, 0.70: the strongest practical reason to accept a cautious default.
- Feasibility of seeded errors by domain, 0.60: precedents exist, but the method is unsafe in live high-stakes settings.
- Cost of the conditions and of reserve capacity, 0.55: Recommendation 8 names the cost without sizing it.

~~~mermaid
mindmap
  root((Pragmatic lens))
    Usability for committees
      Undefined thresholds
      Ambiguous certifier
      No welfare safety authority
    Seeded errors
      Screening precedent
      Not on live patients
      Not on live targeting
    Existing law
      AI Act oversight
      GDPR Article 22
      Adverse action notices
      Weapons reviews
    Reversibility
      Restrictive default cheap to undo
      Permissive error costly
    Next actions
      Definitions pass
      Rebuild Table 1
      Worked example
      Expert review
~~~

### 5. Transparency report

Framing and assumptions. I took the paper's central recommendation to be its Section 1 position, as made operational by Table 1. I took "strongest defensible" to mean consistent, accurately sourced, engaged with the strongest objections, appropriately scoped and usable. I assumed that my outside knowledge of law and literature is broadly right but unverified, and flagged it wherever it bears on a revision.

Which lens drove what:
- Analytical: revisions 1 and 2 (definitions, the grade-4 contradiction, deriving the ceilings), and the count of person-level classes above grade 1.
- Creative: the reframing as licensed delegation, the effect matrix in revision 3, the distinction between blocking and imposing power, the ratio of error costs in revision 6, and the sunset clauses in revision 7.
- Critical: revision 4 (grade 1), the relabelling argument in revision 3, revision 7 (burden of proof and the strongest objections), and revision 8 (moral crumple zone, self-certification).
- Systems-thinking: revision 9 (triggers, gaming, reserve capacity), the observation-bias point in revision 6, and configuration integrity in revision 11.
- Pragmatic: revision 5 (one rule for adverse determinations, the legal mapping), the worked example and certifier mapping in revision 13, the limits on seeded errors, and the low-regret argument behind the confidence score.

Weighted down or set aside, and why:
- Replacing the grade scale with a purely principled account: set aside. The grades are the paper's main practical contribution, and they can be repaired.
- Numerical ratios of error costs: weighted down. Without data they invite false precision.
- The MCAS aviation case: used only as an analogy for the risks of protective automation, not as evidence about clinical stops.
- Press reports of AI-assisted targeting with very brief human review: not relied on, because they are contested and I have not verified them. The grade-1 point stands on the paper's own sources.
- Debates about whether AI can be a moral agent: set aside. The institutional argument does not need them.
- The paper's length budget: noted, but not used as a reason to drop revisions. The author has to prioritise, and the ordering in 1.2 is meant to help.

Confidence and drivers. The score is 62 now and about 74 after revision; the drivers are in 1.4 and 1.5. The score was not raised for the agreement among lenses, which is one model agreeing with itself.

What this reasoning cannot establish:
- whether any ceiling is empirically right;
- whether seeded-error testing, minimum review times or override monitoring actually change how reviewers behave in clinical, welfare or military settings;
- how large automation bias is in those settings;
- whether my statements about GDPR Article 22, the SCHUFA judgment, the AI Act, adverse-action rules, weapons reviews or market regulation are accurate for any given jurisdiction;
- whether the cited works say exactly what the paper says they say. Part A did not consult them.

What to verify, and with whom:
- The scope of GDPR Article 22 and the SCHUFA ruling, and the AI Act's provisions on human oversight, deployer duties and the right to explanation: a data-protection lawyer.
- The Robodebt Royal Commission's recommendations on automated decision-making: the primary source.
- The wording of the ICRC's 2021 position.
- The regulatory authorisation and trial data for autonomous diabetic retinopathy screening: a clinical regulatory specialist.
- Arkin's argument about autonomous weapons and civilian harm, and the 2003 air-defence fratricide incidents as cases of misidentification by defensive systems: an international humanitarian law and military-ethics specialist.
- Elish on moral crumple zones.
- The selective-labels literature.
- Threat image projection, as a precedent for seeded errors.
- Whether the Obermeyer algorithm enrolled patients automatically above a threshold, which would settle its grade.

What the author still has to decide:
- the credit-refusal rule (the conditional element in 1.3);
- whether the asymmetry premise stays as a rule, or becomes a hypothesis with lending approvals at grade 1;
- whether markets stay in scope;
- how strongly to state the military prohibition;
- the target venue, which changes how the revisions should be weighted;
- what to cut to make room.

These are the author's calls. This analysis supports the decision; it does not make it.

Professional review. This is not legal, medical or military advice. Before publication, the revised paper should be reviewed by a clinical safety officer or medical-device regulatory specialist, by an administrative and data-protection lawyer in each jurisdiction named, and by a specialist in international humanitarian law.

End of Part A.

## Part B. Additions to the skill

### 6. Consistency audit

Method. I listed every definition, rule, principle and condition in the paper: the definition of authority, the five grade definitions, the grade 2/3 test, the permission rule and the definition of a decision about a person (Section 2); traceability (Section 4.1); the fairness requirement (Section 4.3); the licensing rule, the asymmetry premise, the definition of a ceiling, the grade-suitability rules, the downgrade rule and the market rule (Section 5); and the five tests in Table 2. I checked each one against the twelve rows of Table 1, the cases in Section 3, the six objection replies, the eight recommendations, the conclusion, the limitations and every cross-reference. I also checked the order of sections and tables. Severity measures how much a problem would damage the paper's defensibility if a reviewer found it. Every item quotes the paper exactly. Table cells are quoted as cells, and markdown markup is left out. Double quotes enclose only the paper's own words. Proposed replacement wording is in italics, and so are the search-result titles in Section 7. In Part A, the words strongest defensible appear twice in double quotes; there they quote the question, not the paper.

Shared roots. Most items come from a few root causes, so a few fixes clear many items:
- the classification of the protective stop: K1, K2, K3, K23;
- the rule for adverse determinations: K6, K9, K10, K11;
- the asymmetry premise: K12, K13, K14;
- the answerability test: K7, K15;
- the treatment of escalation: K5, K8, K19;
- which grades carry conditions: K4, K18, K30.

#### Problems found

**K1. The protective stop is labelled grade 4 but meets neither half of the grade-4 definition.** Severity: high.
- Passage 1, Section 2 (grade 4): "The system acts with no timely human veto, and its limits are absent or set by the system itself." Section 2 also gives the test: "If the human can change only the envelope or stop the system, it is at grade 3."
- Passage 2, Section 5, Table 1, medicine row: "Automatic protective stop that moves the system to a defined safe state", ceiling "4", conditions "Narrow and reversible; removes no entitlement; clinician can countermand at once".
- The same error recurs in Section 6.1: "Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops."
- Why they conflict. Grade 4 requires both no timely veto and limits that are absent or self-set. The row's "defined safe state" is a limit fixed in advance, and an immediate clinician countermand is a timely human check, so neither half holds. Under the Section 2 test the stop is grade 3 at most. In Section 6.1, "execution within limits" is grade 3 by the grade-3 definition ("acts within limits fixed in advance"), so "grade 3 or 4" cannot both describe it.
- Fix. Reclassify the protective stop as grade 3 in Table 1 and Section 5. In Section 6.1, write *it supports grade 3 use, as in dosing or protective stops*.

**K2. Under the paper's own licensing rule, grade 4 can never be licensed.** Severity: high.
- Passage 1, Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold." Table 2 sets the bounded-delegation test as "Limits are written before operation, enforced by an automatic stop, and tested in simulated and live conditions", and the real-override test as "Reviewers have the time, information and competence to disagree, and their disagreement is measured with seeded errors".
- Passage 2, Section 2 (grade 4): "The system acts with no timely human veto, and its limits are absent or set by the system itself."
- Why they conflict. The Abstract ties bounded delegation to functions "whose limits humans set in advance". A grade-4 system's limits are absent or self-set, so it fails bounded delegation. It has no timely veto, so no reviewer can disagree in time, and it fails real override too. No grade-4 deployment can therefore be licensed. The grade-4 ceiling in Table 1 and the words "with one exception" in Section 5 describe something the rule cannot license.
- Fix. Write *Authority at grades 2 and 3 is licensed only when five conditions hold; grade 4 is not licensed for any determination about a person.* Once K1 is fixed, no Table 1 row needs grade 4.

**K3. The thesis rules out what Section 5 licenses.** Severity: high.
- Passage 1, Abstract: "argues that AI should not hold final authority over determinations about particular persons in medicine, military force or the economy". Section 1: "AI systems should not hold final decision authority over determinations about particular persons in medicine, military force or the economy."
- Passage 2, Section 5: "No domain licenses grade 4 for decisions about persons, with one exception. A protective stop may run at grade 4 if it moves a system to a defined safe state, removes no entitlement and can be countermanded by a clinician at once."
- Also Section 7.2: "yield ceilings that are low for decisions about persons and higher for narrow, reversible or envelope-bounded functions".
- Why they conflict. On any reading, grade 4 ("no timely human veto") is final authority. Section 5 presents the protective stop as an exception among decisions about persons, so the paper licenses final authority over a decision about persons. The paper never defines "final authority", so readers cannot tell which grades the thesis excludes. And the conclusion's "low for decisions about persons" sits awkwardly beside the only grade-4 ceiling, which belongs to a decision about persons.
- Fix. Define final authority as grade 4 in Section 2. After fixing K1, delete "with one exception". Restate the thesis as the bright lines given in Part A, 1.1.

**K4. Section 2 says the failures arise at advice, but Section 4.5 and the licensing rule leave advice out.** Severity: high.
- Passage 1, Section 2: "Grades 0 and 1 are not authority, but advice shapes what humans do, and the failures discussed in Section 4 arise there too."
- Passage 2, Section 4.5: "This affects every grade above advice, and a reviewer who never disagrees exercises no real authority." Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- Why they conflict. Automation bias and deskilling (Section 4.5) are among "the failures discussed in Section 4". Section 2 says those failures arise at advice; Section 4.5 confines them to grades above advice; the licensing rule attaches no condition to grade 1. Read alone, the wording of Section 4.5 might be mere emphasis. Read with the licensing rule, it leaves advice outside every safeguard. Six of the twelve rows in Table 1 rest on grade 1, including "Human decision for each engagement" for force against persons. So the main safeguard for the gravest classes is the one the paper's own analysis calls vulnerable, and it carries no conditions.
- Fix. Rewrite Section 4.5 as *This affects every grade at which a human reviews a system output, advice included*. Apply the right-target and real-override tests to grade-1 deployments in adverse, lethal and scarce-allocation classes.

**K5. The paper says a wrong flag "costs little", yet its own examples of flags lead to fraud investigations.** Severity: high.
- Passage 1, Section 5: "Escalation is treated separately. A flag that moves a case up a queue costs little if it is wrong, and a human's judgement still settles the outcome."
- Passage 2, Section 1: "Public agencies score benefit claims and flag families for fraud review." Section 4.6: "In welfare and fraud systems, flagged cases lead to investigations, and the findings become training labels, so the model learns its own enforcement pattern."
- Why they conflict. A fraud flag moves a family's case up a review queue. When the flag is wrong, the family is investigated, which the paper elsewhere counts as harm: Section 4.2 says automated tools "can profile and punish poor people". The claim holds for escalation toward help, not toward scrutiny. Table 1 has no row for adverse flags, so by default they get the lenient treatment given to escalation. The paper also gives no source for the cost of wrong flags in any domain.
- Fix. Split escalation into protective escalation (toward care or help) and adverse escalation (toward scrutiny, investigation or sanction). Treat adverse escalation as an adverse determination, and give it its own row in Table 1.

**K6. Recommendation 2 extends the statutory exception to welfare denials, debts and sanctions.** Severity: high.
- Passage 1, Section 7.1, Recommendation 2: "Adverse determinations, including denials, sanctions and debts, need a named human decision-maker of record unless a statute expressly licenses grade 2 with stated review capacity and audit."
- Passage 2, Section 5, Table 1, economy row: "Welfare denials, debt raising and sanctions", ceiling "1", conditions "Named human decision-maker of record". Section 5: "Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
- Why they conflict. Table 1 gives a statutory route to grade 2 only for "Credit refusals". Recommendation 2 gives it to every adverse determination, so a statute could license grade-2 debt raising of the Robodebt kind, which is the paper's own lead example of harm. Section 5, meanwhile, puts adverse determinations at grade 1 without exception.
- Fix. Confine the exception in Recommendation 2 to the class Table 1 names, or remove it. State plainly that welfare denials, debts and sanctions have no statutory route to grade 2.

**K7. The answerability test leaves out traceability, which the paper calls the minimal test.** Severity: high.
- Passage 1, Section 4.1: "The paper treats traceability as the minimal test of answerability. A gap is closed by assigning named accountability before deployment, not by holding the system responsible after harm."
- Passage 2, Section 5, Table 2, answerability test: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system".
- Why they conflict. Section 4.1 states the requirement that a system's behaviour "be traceable to a human who understands it and can act on that understanding". The Table 2 test asks only for names and a power to withdraw. A deployment can therefore pass the test while failing the stated minimal test. Section 4.1's own sources say that "ordinary ascriptions of responsibility fail" when designers cannot foresee behaviour. Naming a person in advance is such an ascription, so on those sources it does not close the gap it is offered to close.
- Fix. Add to the test that the named person understands the system's behaviour in the decision class, has access to its logs and performance data, and has the authority and time to act on them. Have this certified independently.

**K8. In a rival queue, escalation is also deprioritisation.** Severity: medium.
- Passage 1, Section 2: "A decision about a person means any determination that changes a person's treatment, legal or social status, liberty, money or access to a service. Escalation that changes only a queue position is not such a determination". Also: "the grade of a decision class is set by the most consequential permission it carries".
- Passage 2, Section 5, Table 1, medicine rows: "Escalating a case for urgent clinician review", ceiling "2", and "Deprioritising a patient or withholding scarce care", ceiling "1". Section 1: "Hospitals rank patients for scarce beds and specialist review."
- Why they conflict. In a ranked queue for scarce beds or specialist review, raising one case lowers others. A system that re-ranks such a queue also deprioritises, and a place in the queue for a scarce resource changes access to a service. By the paper's own rule, the system takes the grade of its most consequential permission, which is 1.
- Fix. Limit grade-2 escalation to non-rival cases, where a review is added without displacing anyone. Treat re-ranking within a rival queue as deprioritisation, at grade 1.

**K9. The ceiling shown for credit refusals is not the highest grade the class may take.** Severity: medium.
- Passage 1, Section 5: "A ceiling is the highest grade a decision class may take, given the conditions."
- Passage 2, Table 1: "Credit refusals", ceiling "1", conditions "Named human decision-maker of record; grade 2 only under a statute that sets review capacity and audit".
- Why they conflict. The class may take grade 2 under a statute, so by the paper's own definition its ceiling is 2, not 1.
- Fix. Remove the exception, or show the ceiling as 2 (under statute only) and add a separate default grade of 1.

**K10. Section 5 makes fit with the workflow sufficient for grade 2; Section 6.4 makes it necessary.** Severity: medium.
- Passage 1, Section 5: "Grade 2 suits favourable or cheaply corrected outcomes, or review that fits the workflow. Grade 1 governs individual adverse determinations, value-laden allocation and force against persons."
- Passage 2, Section 6.4: "Grade 2 is permissible only where review fits the workflow, overrides are logged, reviewers are tested with seeded errors, and the drift triggers in Section 5 are monitored."
- Why they conflict. The "or" in Section 5 makes fit with the workflow enough on its own. That would put an adverse determination at grade 2 whenever review fits the workflow, contradicting the very next sentence. Section 6.4 makes the same fit only one of four necessary conditions.
- Fix. Write *Grade 2 suits favourable or cheaply corrected outcomes, and only where review fits the workflow, overrides are logged and reviewers are tested with seeded errors.*

**K11. The high-volume reason given for credit refusals applies equally to lending approvals.** Severity: medium.
- Passage 1, Section 6.4: "In high-volume settings where meaningful review is impossible, grade 2 is not defensible, which is why credit refusals sit at grade 1 in Table 1."
- Passage 2, Table 1: "Favourable approvals, such as low-cost approvals", ceiling "2", conditions "Audit; errors correctable; asymmetry premise checked for the domain". Section 3.3: "Lending decisions are typically made in high volume".
- Why they conflict. Approvals and refusals come from the same high-volume lending stream. If volume makes grade 2 indefensible for refusals, it does the same for approvals. The difference in Table 1 must therefore come from the asymmetry premise, not from volume. The approvals row also lists none of the conditions Section 6.4 calls necessary for grade 2.
- Fix. Give the asymmetry premise as the reason for the difference. Then either add Section 6.4's grade-2 conditions to the approvals row, or explain how grade-2 review would work for high-volume approvals.

**K12. The word "reversed" does not describe the effect the paper states.** Severity: medium.
- Passage 1, Section 5: "It should be reversed for any domain in which evidence shows that wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused."
- Passage 2, Section 6.5: "the premise is reversed for that domain, and approvals fall to grade 1".
- Why they conflict. Reversing the premise would give automated systems more authority over refusals than over approvals. The effect the paper actually states is that approvals fall to grade 1 while refusals stay at grade 1, as Table 1 requires. Both directions end up equal, which is suspension, not reversal. Read literally, "reversed" would license more automated refusal in exactly the domains where approvals turn out to be risky.
- Fix. Replace "reversed" with *suspended*, and state that both directions then sit at grade 1.

**K13. Two different tests for reversal, and an example that contradicts its own sentence.** Severity: medium.
- Passage 1, Section 5: "wrongful approvals cause more irreversible harm, including harm to third parties, than wrongful refusals cause to the people refused".
- Passage 2, Section 6.5: "wrongful approvals cause more irreversible harm to others than wrongful refusals cause to applicants". Also from Section 6.5: "A wrongful approval can harm people other than the applicant: a borrower who takes on debt they cannot carry".
- Why they conflict. Section 5 counts all irreversible harm from wrongful approvals, including the applicant's own. Section 6.5 counts only harm "to others". The first example in Section 6.5, the borrower, is the applicant, so the list contradicts its own opening clause. The harm it names would count under the Section 5 test but not under the Section 6.5 test.
- Fix. State one test, once, counting harm both to the applicant and to third parties. Reword the opening of Section 6.5 to *A wrongful approval can harm the applicant and others*.

**K14. When may the premise be used: when it has some support, or only once tested?** Severity: medium.
- Passage 1, Section 5: "Where the ordering is not supported at all, the default is grade 1."
- Passage 2, Section 6.5: "The paper does not claim that the evidence favours its premise in credit. It claims that the premise must be tested before it is used." Section 7.1, Recommendation 2: "Apply the asymmetry premise in law and procurement only where it has been checked for the domain."
- Also Section 1: "and, in some lending and administrative settings, over favourable decisions".
- Why they conflict. Under Section 5, a domain where the ordering has some support but has not been tested does not default to grade 1. Under Section 6.5 and Recommendation 2, the premise cannot be used there until it has been tested. On the stricter reading, lending approvals default to grade 1 today, because the paper disclaims evidence for credit. That sits uneasily with the position stated in Section 1.
- Fix. Write *Until the ordering has been tested for the domain, the default is grade 1.* Qualify the Section 1 claim with *once the premise has been tested for the domain*.

**K15. The conclusion on markets does not follow from the answerability test as written.** Severity: medium.
- Passage 1, Section 5: "Under current institutions no one can answer for a collective harm produced by a learned discretionary policy, so the answerability condition fails."
- Passage 2, Section 5, Table 2: "A named institution and a named person hold design, deployment and outcome responsibility, and can correct or withdraw the system". Section 4.1: "A gap is closed by assigning named accountability before deployment".
- Why they conflict. By the paper's own test and remedy, answerability is met by naming an institution and a person with power to correct or withdraw the system, and that can be done for a discretionary market system. To conclude that the condition "fails", the paper needs the traceability element missing from the test (K7), or an argument that naming is impossible in this case.
- Fix. After fixing K7, argue that the collective effects of a learned discretionary policy cannot be traced to a human who understands them. Otherwise, narrow the claim.

**K16. Recommendation 6 implies an action that the ceiling forbids.** Severity: medium.
- Passage 1, Section 7.1, Recommendation 6: "prohibit discretionary AI market interventions without public justification".
- Passage 2, Table 1: "Discretionary AI market interventions", ceiling "1", conditions "Public justification; no unilateral action". Section 5: "Discretionary interventions, in which a system chooses when and how to act on prices, do not."
- Why they conflict. Recommendation 6 implies that, given public justification, such interventions may proceed, which means the system acts. A grade-1 ceiling lets the system only recommend, and Section 5 says these interventions do not meet the conditions that pre-committed rules meet at grade 3.
- Fix. Write *Limit AI to advising on discretionary market interventions (grade 1); any intervention is decided and publicly justified by an accountable authority.*

**K17. The triggers are called the working form of Section 4.6, but two of its three dynamics have no trigger.** Severity: medium.
- Passage 1, Section 5: "These triggers are the working form of the drift risks in Section 4.6." Section 4.6: "Section 5 turns them into downgrade triggers."
- Passage 2, Section 4.6: "The second is the label loop." and "A third dynamic concerns detection." These sit against the list in Section 5: "The triggers are a review window shortened without audit; an override rate that falls to near zero over a sustained period without an audit explanation; a subgroup error gap above a threshold set in advance; a sampled reviewer who cannot state the reason for a decision; and any change to the outcome label."
- Also Section 7.1, Recommendation 7: "Monitor for authority creep and label loops".
- Why they conflict. The window, override and reviewer triggers address authority creep. The subgroup trigger addresses bias. The label trigger fires on a change to the label, but the label loop the paper describes runs while the label stays unchanged. Nothing addresses detection delay. Recommendation 7 asks for label-loop monitoring that no trigger acts on.
- Fix. Add a label-provenance trigger, which fires when the share of training labels generated by the system's own flags passes a set level. Add a detection-delay rule: a maximum time to detection, with a pre-committed rollback for collective harms. Otherwise, narrow the claim.

**K18. Which deployments must meet the five conditions is stated three different ways.** Severity: medium.
- Passage 1, Section 5: "Authority at grades 2 to 4 is licensed only when five conditions hold."
- Passage 2, Section 7.1, Recommendation 1: "Require every sensitive deployment to declare its grade and the ceiling for each decision class, and to show before deployment that the five conditions pass their tests (Table 2)."
- Passage 3, Section 6.6: "First, the conditions are minimal standards, and the tests in Section 5 are proportionate to a deployment's stakes. A low-stakes information service needs fewer of them than a system that decides who receives scarce care."
- Why they conflict. Section 5 requires all five conditions, and only at grades 2 to 4. Recommendation 1 requires all five for every sensitive deployment, grades 0 and 1 included, where the bounded-delegation test ("enforced by an automatic stop") has nothing to apply to. Section 6.6 asks only for a proportionate subset, and says an information service needs some conditions, although under Section 5 it needs none. And standards that are minimal cannot also be reduced.
- Fix. Draw up one matrix of grades against conditions, and cite it in all three places.

**K19. Escalation is offered as the fallback where review capacity is absent, but escalation needs review capacity.** Severity: medium.
- Passage 1, Section 6.6: "where review capacity is absent, the appropriate response is to fund that capacity or to restrict the system to escalation and information, not to accept grade 2 without review".
- Passage 2, Table 1: "Escalating a case for urgent clinician review", ceiling "2", conditions "Clinician can override within the workflow; reviews sampled for seeded errors".
- Why they conflict. Escalation is itself a grade-2 class that depends on a reviewing clinician. Restricting a system to escalation where no reviewer exists is therefore grade 2 without review, which the same sentence forbids.
- Fix. Write *restrict the system to information (grade 0), or to escalation only where a reviewer exists to receive it*.

**K20. The reply on speed rules out only grade 4 for persons, and its reason fits the envelope in Section 3.2.** Severity: medium.
- Passage 1, Section 6.3: "Speed justifies grade 3 for bounded functions such as defensive envelopes and pre-committed market rules. It does not justify grade 4 for decisions about persons, because a bounded envelope, rather than per-action approval, is what makes speed tolerable."
- Passage 2, Table 1: "Recommending the engagement of persons", ceiling "1", conditions "Human decision for each engagement". Section 7.1, Recommendation 5: "Prohibit delegated authority to select and engage persons with force."
- Also Section 3.2: "A commander authorises a system to engage targets within a defined area for a fixed period, because communications are expected to be degraded and approval could not be obtained in time."
- Why they conflict. The reply excludes only grade 4, and its reason is that a bounded envelope makes speed tolerable. That is exactly the structure of the Section 3.2 scenario: a defined area, a fixed period, and no approval of each engagement. Table 1 and Recommendation 5 cap force against persons at grade 1, so the reply understates the paper's own position and invites the opposite reading.
- Fix. Write *It does not justify any grade above 1 for force against persons, or grade 4 for any decision about persons.*

**K21. The reply on low-resource settings answers "slower", not "none".** Severity: medium.
- Passage 1, Section 6.6: "A strict ceiling may withhold benefit from people who would be better served by an imperfect automated service than by none. Where review capacity is absent, the framework could leave a population with slower triage or none."
- Passage 2, Section 6.6: "It accepts slower service in exchange for protection from errors that no one can detect or contest, and the paper states that choice rather than hiding it."
- Why they conflict. The hard case in the objection is no service at all. The reply states the trade-off as slower service, so the choice it claims to state openly is the easier one.
- Fix. Say that in some settings the framework means no automated service. Then either accept that explicitly, or provide a bounded exception: favourable or protective functions only, remote review, and audit after the fact.

**K22. The defensive military row lacks the predictability condition from the ICRC position the paper endorses.** Severity: medium.
- Passage 1, Section 3.2: "The ICRC recommends prohibiting unpredictable autonomous weapon systems and systems designed or used to target persons." Section 7.1, Recommendation 5: "Pursue international limits along the lines the ICRC recommends (ICRC, 2021)".
- Passage 2, Table 1: "Defensive engagement of incoming munitions, not persons", ceiling "3", conditions "Human-set envelope; human on the loop; stop available".
- Why they conflict. The only military class licensed above grade 1 carries no predictability condition. An unpredictable defensive system with an envelope and a stop would pass Table 1, although the position the paper endorses would rule it out.
- Fix. Add *predictable in its effects in the conditions of use* to the row. Add a test for misidentifying crewed aircraft and other objects that carry persons.

**K23. Section 6.1 both grants and denies that the lives-saved argument supports authority.** Severity: low.
- Passage 1, Section 6.1: "Where authority is confined to validated execution within limits, it supports grade 3 or 4 use, as in dosing or protective stops."
- Passage 2, Section 6.1: "Lives saved are evidence for augmentation, not for authority over persons' fates."
- Why they conflict. The first sentence concedes that the argument supports grade-3 authority over dosing, which is a determination about a person's treatment under Section 2's definition. The last sentence says lives saved support only augmentation.
- Fix. End the last sentence with *not for authority over adverse or value-laden determinations about persons*.

**K24. The Abstract's "five grades of authority" against Section 2's "Grades 0 and 1 are not authority".** Severity: low.
- Passage 1, Abstract: "It distinguishes five grades of authority, from information to autonomous execution".
- Passage 2, Section 2: "Grades 0 and 1 are not authority".
- Why they conflict. The Abstract calls all five grades authority. Section 2 says two of them are not.
- Fix. Write *five grades of system involvement, of which grades 2 to 4 confer authority*.

**K25. The body says systems hold authority; the conclusion says institutions do.** Severity: low.
- Passage 1, Section 2: "Authority in the relevant sense is grades 2 to 4." Section 5: "automated systems may be given more authority over favourable decisions than over adverse ones".
- Passage 2, Section 7.2: "Authority over sensitive matters therefore stays with humans and institutions, which may delegate bounded functions to machines on conditions."
- Why they conflict. The body treats systems at grades 2 to 4 as holding authority. The conclusion says authority stays with humans and institutions. Section 2's own definition ("someone can be held to account for it"; "Authority presupposes an agent who can give reasons, be questioned and be corrected") supports the conclusion's usage, not the body's.
- Fix. Use *decision power* for what the grades measure, and keep "authority" for what institutions hold and delegate.

**K26. The phrase "the grade 1 role of review" names no grade-1 function.** Severity: low.
- Passage 1, Section 6.2: "Auditing human decisions for disparity is a valuable use of AI, and it fits the grade 1 role of review."
- Passage 2, Section 2 (grade 1): "The system recommends options with reasons. A human selects and remains the decision-maker of record."
- Why they conflict. Grade 1 recommends options for the decision at hand. Auditing past human decisions recommends no option for any decision, so it is closer to grade 0 (information). The paper defines no "role of review" for grade 1.
- Fix. Write *it is an information function (grade 0) that supports oversight*.

**K27. A recommendation is called a coordinated response.** Severity: low.
- Passage 1, Section 6.3: "The ICRC's recommendations are a coordinated response of this kind (ICRC, 2021)."
- Passage 2, Section 3.2: "The recommendation is not binding law, and states hold differing positions."
- Why they conflict. One organisation's recommendation, which states have not jointly adopted, is a proposal for coordination, not a coordinated response.
- Fix. Write *The ICRC's recommendations propose a coordinated response of this kind*.

**K28. Market rules are said to "meet the conditions", but the tests are framed for persons.** Severity: low.
- Passage 1, Section 5: "Pre-committed public rules, with halts and rate limits, meet the conditions at grade 3."
- Passage 2, Table 2: "The affected person can obtain the basis of the decision in usable terms, and a review by someone who can reverse it, within a stated time" and "Performance is validated against the outcome the decision is for, and error rates are published by subgroup".
- Why they conflict. A market-wide halt has no single affected person and no subgroups, so the claim that it meets the conditions cannot be checked against the tests as stated.
- Fix. Give collective versions of the contestability and right-target tests (public notice, review after the fact, and published performance against the stated purpose), or exempt collective mechanisms from those two tests and name the substitutes.

**K29. The paper promises tests needing no "further philosophical work" but leaves value-laden thresholds to certifiers.** Severity: low.
- Passage 1, Section 5: "The tests are designed so that a hospital committee, procurement office or regulator can apply them without further philosophical work. The thresholds are for each certifying body to set".
- Passage 2, Section 4.3: "Fairness is a choice of target and metric, and no metric is neutral."
- Why they conflict. Applying the subgroup-error trigger means choosing a metric and a threshold, and by Section 4.3 that is a value choice that cannot be neutral. The paper hands this work to certifiers; it does not remove it.
- Fix. Write *without further theoretical work, though each certifier must make and publish the value choices its thresholds embody*.

**K30. The subgroup trigger needs monitoring that the re-check schedule does not provide.** Severity: low.
- Passage 1, Section 5, Table 2, right-target re-check: "Before deployment, and at each retraining".
- Passage 2, Section 5: "a subgroup error gap above a threshold set in advance".
- Why they conflict. The trigger can fire only if subgroup error is measured while the system is in use. The only scheduled right-target check falls before deployment and at each retraining, so between retrainings no one is responsible for measuring the gap.
- Fix. Add *and at a stated interval in operation* to the re-check column.

**K31. The downgrade rule says "its certifying body", but Table 2 names five.** Severity: low.
- Passage 1, Section 5: "A deployment is downgraded by one grade when a trigger is met, until its certifying body re-certifies it."
- Passage 2, Table 2, certified by: "Governing body of the deploying organisation"; "Independent oversight body or regulator"; "Independent auditor using criteria fixed in advance"; "Internal audit using sampled cases"; "Safety authority for the domain".
- Why they conflict. Each deployment has five certifiers, and the rule does not say which one re-certifies after which trigger.
- Fix. Map each trigger to the condition it tests, and so to that condition's certifier.

**K32. "Two dynamics", followed by a third.** Severity: low.
- Passage 1, Section 4.6: "Two dynamics are missing from a static account of grades."
- Passage 2, Section 4.6: "A third dynamic concerns detection."
- Why they conflict. The paragraph announces two dynamics and then describes three.
- Fix. Write *Three dynamics*.

**K33. The roadmap says "one case per domain", but Section 3.3 has three economic cases.** Severity: low.
- Passage 1, Section 1: "Section 3 gives one case per domain".
- Passage 2, Section 3.3: "Credit scoring follows the same logic." and "Automated market interventions raise a different stake."
- Why they conflict. Section 3.3 treats three cases: Robodebt, credit scoring and market interventions.
- Fix. Write *one lead case per domain, with two further economic examples*.

**K34. Section order: the conclusion comes before the limitations, and the roadmap leaves it out.** Severity: low.
- Passage 1, Section 1: "Section 6 answers six objections and Section 7 makes recommendations. Section 8 states the limits of the account."
- Passage 2, headings: "7 Recommendations and conclusion", "7.2 Conclusion", "8 Limitations".
- Why they conflict. The conclusion comes before the limitations that qualify it, and the roadmap never mentions a conclusion.
- Fix. Move Limitations ahead of the Conclusion (for example, as 7.2, with the Conclusion as 7.3 or as Section 8), and update the roadmap.

**K35. The tables are numbered out of order of appearance.** Severity: low.
- Passage 1, Section 5: "Table 2 states each condition with a proposed test, the body that would certify it and a proposed re-check interval." The table titled "Table 2. Conditions, tests and certification (proposed)" is printed first.
- Passage 2, Section 5: "Table 1 gives the grade ceilings." The table titled "Table 1. Grade ceilings by domain and decision class (proposed)" is printed second.
- Why they conflict. Tables should be numbered in the order they appear, and these are not.
- Fix. Renumber the tables (conditions as Table 1, ceilings as Table 2), or print the ceilings first. Update the cross-references in Section 6.4, Recommendation 1 and Section 8.

#### Unsupported or overstated empirical claims

**U1. Section 1:** "Armed forces use systems that classify objects and people faster than staff can check them."
- Why. No source is given, yet the claim does argumentative work: it motivates the speed objection answered in Section 6.3 and the scenario in Section 3.2. It needs a documented example, or rewording as a possibility.

**U2. Section 3.3:** "A refusal can exclude a person from housing, and the model's reasons are often unavailable to the applicant."
- Why. No source is given. In some jurisdictions creditors must state specific reasons for an adverse action; the US Equal Credit Opportunity Act's notice requirement is one example (verify). The real problem may be that the reasons given are uninformative, not that none are given. The claim needs scoping and a source.

**U3. Section 3.3:** "The harm is collective and fast, and no single person can answer for it."
- Why. No source is given. In several jurisdictions market regulation assigns responsibility for algorithmic trading to firms and requires controls such as kill functions; the EU's MiFID II regime is one example (verify). The claim should be narrowed to the gap the paper means, presumably culpability for emergent collective effects. Section 5 repeats the claim (see K15).

**U4. Section 6.1:** "A system that saves more lives overall can still under-serve a subgroup, as the Obermeyer case shows (Obermeyer et al., 2019)."
- Why. As the paper itself describes it (Section 3.1), the cited study concerns racial bias in who was identified for a care-management programme. Nothing in the paper indicates that the study measured lives saved, so the case supports only the second half of the sentence.

**U5. Section 6.2:** "Human bias is heterogeneous. Different officials err in different ways, and each can be questioned, trained and replaced."
- Why. No source is given, and the paper's own evidence cuts against the claim. The Obermeyer case rests on a systematic pattern of human and institutional decisions ("at the same level of illness, less had been spent on Black patients"). Section 4.3 says that "A proxy can carry historical inequality into a decision while appearing neutral", which presupposes bias regular enough for a system to learn. Human bias is often correlated, not heterogeneous.

**U6. Section 6.2:** "Automated bias is uniform and scaled. One flawed label distorts every decision the system makes".
- Why. Overstated. A flawed label distorts decisions where the label and the target diverge, not every decision. Corrections scale too: an audited system can be fixed once for every case, which the paper concedes in the same paragraph by calling algorithms "more auditable".

**U7. Section 6.6:** "It accepts slower service in exchange for protection from errors that no one can detect or contest".
- Why. Overstated. Errors in a grade-2 system without per-case review can still be found by sampled audit and outcome monitoring, which the paper's own Table 2 relies on ("Internal audit using sampled cases"). Such errors are harder to detect and contest, not impossible.

Totals: 35 K items (7 high, 15 medium, 13 low) and 7 U items.

### 7. Reference check

What I checked. I spent all four permitted web searches. Each search returns titles and URLs only, and I did not open any page. The checks below therefore confirm that URLs exist and that titles and identifiers match. They do not confirm what the pages say.

1. **European Union (2024), AI Act, the springlex.eu link.**
   - Found: the search returned the cited URL. Its title begins *Source: OJ L, 2024/1689, 12.7.2024*, and French, German and Swedish versions sit alongside it. The site is therefore a third-party consolidation that names the Official Journal as its source, and that source label matches the paper's "L series, 12 July 2024".
   - Not confirmed: I did not see the text of Article 14.
   - Also found: the same search returned a page for Article 14 on an ec.europa.eu domain (an AI Act service desk).
   - Recommendation: for a paper aimed at regulators, cite the Official Journal text on EUR-Lex as the primary source, and keep any third-party page as a convenience copy at most.
2. **ICRC (2021), position on autonomous weapon systems.**
   - Found: the cited URL appears in the results under the title *icrc position autonomous weapon systems*. The results also included a related ICRC page titled *Autonomous weapons: The ICRC recommends adopting new rules*, and a PDF titled *ICRC position on autonomous weapon systems* hosted by an IIHL online library.
   - Not confirmed: the 2021 date, and the paper's paraphrase in Section 3.2 (prohibiting unpredictable systems and systems that target persons; limits on target types, duration, geographic scope and scale). Neither was visible in the results.
3. **Sparrow (2007), open copy.**
   - Found: the cited URL robsparrow.com/wp-content/uploads/Killer-robots.pdf appears in the results, titled *Killer robots*.
   - Not confirmed: the volume, issue and page numbers, which were not displayed.
4. **Topol (2019), PubMed link.**
   - Found: PubMed record 30617339 appears in the results, titled *High-performance medicine: the convergence of human and artificial intelligence*. The identifier therefore matches the cited title.
   - Not confirmed: the journal, volume and pages, which were not displayed.

Not checked in this pass: Bainbridge (1983), Doshi-Velez and Kim (2017), Eubanks (2018), Matthias (2004), Obermeyer et al. (2019), Parasuraman and Manzey (2010), the Royal Commission report (2023), Santoni de Sio and van den Hoven (2018) and Scharre (2018). Nothing found in the four checks contradicts any reference.

Sources:
- [springlex.eu, AI Act Article 14 (English)](https://www.springlex.eu/en/packages/ai-act/ai-act-regulation/article-14/)
- [AI Act service desk, Article 14](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14)
- [ICRC position on autonomous weapon systems](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems)
- [ICRC, Autonomous weapons: The ICRC recommends adopting new rules](https://www.icrc.org/en/document/autonomous-weapons-icrc-recommends-new-rules)
- [ICRC position on autonomous weapon systems, PDF copy, IIHL online library](https://www.onlinelibrary.iihl.org/wp-content/uploads/2022/08/ICRC-position-on-autonomous-weapon-systems.pdf)
- [Sparrow, Killer robots, open copy](https://robsparrow.com/wp-content/uploads/Killer-robots.pdf)
- [PubMed 30617339](https://pubmed.ncbi.nlm.nih.gov/30617339/)
