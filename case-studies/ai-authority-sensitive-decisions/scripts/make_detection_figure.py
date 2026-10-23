import json, sys
from xml.sax.saxutils import escape
out_svg, out_json = sys.argv[1], sys.argv[2]
rows = [
 ("F1", "Credit refusals at grade 2 break the adverse-step rule", "D", "FX", "FX"),
 ("F2", "Statute exception versus the welfare ceiling", "P", "D", "D"),
 ("F3", "Grade 4 definition versus the protective stop", "M", "D", "D"),
 ("F4", "Asymmetry premise unsourced", "D", "FX", "FX"),
 ("F5", "Unsourced claim about the triage benefit", "D", "FX", "FX"),
 ("F6", "A flag \"costs little\" versus investigations", "NA", "D", "D"),
 ("F7", "Section 6.1 reply sidesteps the conditional", "NA", "P", "P"),
 ("F8", "High volume: grade 1 is no better", "P", "D", "D"),
 ("F9", "Override certified by the deployer itself", "NA", "D", "D"),
 ("F10", "Grade 1 has no tests", "NA", "D", "D"),
 ("F11", "No method for setting thresholds", "NA", "D", "D"),
 ("F12", "Five conditions versus \"needs fewer of them\"", "NA", "D", "D"),
 ("F13", "\"Two dynamics\", then a third", "NA", "M", "D"),
 ("F14", "Table 2 printed before Table 1", "NA", "D", "D"),
 ("F15", "Market harms said to be detected late", "NA", "M", "M"),
 ("F16", "Queue position versus \"access to a service\"", "NA", "P", "D"),
 ("F17", "Robodebt was not AI", "M", "D", "D"),
 ("F18", "Military case thin; compliance argument missing", "P", "D", "D"),
 ("F19", "A uniform error is also uniformly correctable", "M", "P", "D"),
 ("F20", "Eubanks claim overgeneralised", "M", "M", "M"),
 ("F21", "\"No one can answer\" versus the answerability test", "M", "P", "D"),
 ("F22", "Citation details incomplete or unverified", "D", "D", "D"),
]
types = {"consistency": ["F2","F3","F6","F12","F13","F14","F16","F21"],
         "unsupported_claims": ["F15","F17","F19","F20"],
         "gaps": ["F7","F8","F9","F10","F11","F18"],
         "citations": ["F22"]}
shared = ["F2","F3","F8","F17","F18","F19","F20","F21","F22"]
draft8 = ["F1","F2","F3","F4","F5","F19","F20","F21"]
sc = {r[0]: {"pass1": r[2], "pass2_a": r[3], "pass2_ab": r[4]} for r in rows}
def count(col, ids=None):
    ids = ids or list(sc)
    c = {}
    for i in ids:
        c[sc[i][col]] = c.get(sc[i][col], 0) + 1
    return c
summary = {col: count(col) for col in ("pass1", "pass2_a", "pass2_ab")}
summary["shared_nine"] = {col: count(col, shared) for col in ("pass1", "pass2_a", "pass2_ab")}
summary["reviewer_draft_eight_pass1"] = count("pass1", draft8)
summary["by_type"] = {t: {col: count(col, ids) for col in ("pass2_a", "pass2_ab")} for t, ids in types.items()}
data = {
 "codes": {"D": "detected", "P": "partly", "M": "missed", "NA": "not in the draft", "FX": "fixed in 03"},
 "rubric_written": "2026-10-21T07:21:07+13:00", "pass2_output_written": "2026-10-21T07:54:10+13:00",
 "pass1": {"model": "claude-haiku-5-5 (session configuration)", "input": "01-agent-draft.md", "words": 2969,
           "revisions": 6, "convergence_zones": 4, "divergences": 3, "quotes": 2, "quotes_exact": 2,
           "confidence": 62, "confidence_after_revision_estimate": 68},
 "pass2": {"model": "claude-opus-5-5 (reported by the agent)", "effort": "max", "input": "03-enhanced-paper.md",
           "input_bytes": 29515, "input_crc32": "c1122050",
           "skill_sha256": "3dff7bd6a9c8577483a052113eddf6a74db379084024117e34895985c461f2b6",
           "output_file": "06-observer-second-pass.md", "output_bytes": 93334, "output_crc32": "3d2698b9",
           "words": 14562, "words_part_a": 7847, "words_part_b": 6715, "revisions": 13,
           "convergence_zones": 8, "divergences": 7, "k_items": 35,
           "k_by_severity": {"high": 7, "medium": 15, "low": 13}, "u_items": 7,
           "quotes_part_a": 35, "quotes_part_a_exact": 33, "quotes_part_b": 175, "quotes_part_b_exact": 175,
           "confidence": 62, "confidence_core": 72, "confidence_machinery": 50,
           "confidence_after_revision_estimate": 74, "subagent_tokens": 312187, "tool_uses": 16,
           "duration_seconds": 2016, "web_searches": 4},
 "scores": sc, "types": types, "shared_nine": shared, "summary": summary,
 "inherited_from_draft": {"k_items": ["K4","K16","K24","K26","K33"], "u_items": ["U1","U2","U3","U4","U5","U6"],
                          "pass1_detected": 0},
 "k_items_quoting_revised_text": 30,
 "outside_reviewer_list": {"total": 30, "valid": 27, "partly_valid": 3, "not_valid": 0,
                           "partly_valid_ids": ["K26","K33","K34"]},
}
json.dump(data, open(out_json, "w"), indent=1)

fill = {"D": ("#1F6FB2", "#ffffff", "Detected"), "P": ("#A8CBEA", "#1d2933", "Partly"),
        "M": ("#ffffff", "#1d2933", "Missed"), "NA": ("#EEF1F4", "#5b6770", "Not in draft"),
        "FX": ("#EEF1F4", "#5b6770", "Fixed in 03")}
cols = [(498, "Pass 1", "Haiku 5.5, draft"), (632, "Pass 2, Part A", "Opus 5.5, skill only"),
        (766, "Pass 2, A + B", "Opus 5.5, with audit")]
CW, top, RH = 120, 140, 24
H = top + len(rows) * RH + 92
o = []
o.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="900" height="{H}" viewBox="0 0 900 {H}" role="img" font-family="Helvetica, Arial, sans-serif">')
o.append('<title>Reviewer findings caught by each Observer pass</title>')
o.append('<desc>A matrix of the blind reviewer\'s 22 findings against three columns: pass 1 on the agent draft, pass 2 Part A, and pass 2 with the consistency audit. Each cell says detected, partly, missed, not in the draft, or fixed in the enhanced paper.</desc>')
o.append('<rect width="100%" height="100%" fill="#ffffff"/>')
o.append('<text x="20" y="30" font-size="18" font-weight="bold" fill="#1d2933">Which of the blind reviewer\'s 22 findings each Observer pass caught</text>')
o.append('<text x="20" y="52" font-size="12.5" fill="#1d2933">Pass 1 read the agent draft. Pass 2 read the enhanced paper blind; Part B is the added consistency audit.</text>')
lx = 20
for key in ("D", "P", "M", "NA"):
    f, t, lab = fill[key]
    if key == "NA":
        lab = "Not present (not in draft, or fixed in 03)"
    o.append(f'<rect x="{lx}" y="64" width="14" height="14" fill="{f}" stroke="#9AA5B1" stroke-width="1"/>')
    o.append(f'<text x="{lx + 20}" y="76" font-size="12" fill="#1d2933">{escape(lab)}</text>')
    lx += 20 + int(len(lab) * 6.6) + 22
for x, h1, h2 in cols:
    cx = x + CW / 2
    o.append(f'<text x="{cx}" y="{top - 22}" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#1d2933">{escape(h1)}</text>')
    o.append(f'<text x="{cx}" y="{top - 7}" font-size="10.5" text-anchor="middle" fill="#5b6770">{escape(h2)}</text>')
o.append(f'<text x="20" y="{top - 7}" font-size="10.5" fill="#5b6770">Finding</text>')
for i, (fid, label, *vals) in enumerate(rows):
    y = top + i * RH
    o.append(f'<line x1="20" y1="{y}" x2="886" y2="{y}" stroke="#E3E7EB" stroke-width="1"/>')
    o.append(f'<text x="20" y="{y + 16}" font-size="12.5" font-weight="bold" fill="#1d2933">{fid}</text>')
    o.append(f'<text x="62" y="{y + 16}" font-size="12.5" fill="#1d2933">{escape(label)}</text>')
    for (x, _, _), v in zip(cols, vals):
        f, t, lab = fill[v]
        stroke = ' stroke="#9AA5B1" stroke-width="1"' if v == "M" else ''
        o.append(f'<rect x="{x}" y="{y + 3}" width="{CW}" height="18" rx="2" fill="{f}"{stroke}/>')
        o.append(f'<text x="{x + CW / 2}" y="{y + 16}" font-size="11.5" text-anchor="middle" fill="{t}">{lab}</text>')
yb = top + len(rows) * RH
o.append(f'<line x1="20" y1="{yb}" x2="886" y2="{yb}" stroke="#9AA5B1" stroke-width="1"/>')
o.append(f'<text x="20" y="{yb + 20}" font-size="12.5" font-weight="bold" fill="#1d2933">Detected + partly, of findings present</text>')
for (x, _, _), col in zip(cols, ("pass1", "pass2_a", "pass2_ab")):
    c = summary[col]
    present = sum(n for k, n in c.items() if k in ("D", "P", "M"))
    o.append(f'<text x="{x + CW / 2}" y="{yb + 20}" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#1d2933">{c.get("D", 0)} + {c.get("P", 0)} of {present}</text>')
o.append(f'<text x="20" y="{yb + 50}" font-size="11" fill="#5b6770">Findings F1 to F22 come from the audit in 05-blind-review.md. Scores follow a rubric fixed before pass 2 was read (appendix to 07-pass-comparison.md).</text>')
o.append(f'<text x="20" y="{yb + 66}" font-size="11" fill="#5b6770">One run per pass, scored by one judge who knew which pass was which. The blind reviewer was also an Opus model.</text>')
o.append('</svg>')
open(out_svg, "w").write("\n".join(o) + "\n")
print(json.dumps(summary))
print("markdown rows:")
names = {"D": "Detected", "P": "Partly", "M": "Missed", "NA": "Not in draft", "FX": "Fixed in 03"}
for fid, label, a, b, c in rows:
    print(f"| {fid} | {label} | {names[a]} | {names[b]} | {names[c]} |")
