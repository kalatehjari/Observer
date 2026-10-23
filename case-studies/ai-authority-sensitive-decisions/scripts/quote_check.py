import re, sys, json

def norm(s):
    s = s.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    s = s.replace('*', '')
    return re.sub(r'\s+', ' ', s).strip()

analysis = open(sys.argv[1], encoding='utf-8').read().split('\n')
source = norm(open(sys.argv[2], encoding='utf-8').read())
src_l = source.lower()
part_b_start = int(sys.argv[3]) if len(sys.argv) > 3 else 10**9
in_fence = False
rows, odd = [], []
for i, raw in enumerate(analysis, 1):
    if raw.strip().startswith('~~~'):
        in_fence = not in_fence
        continue
    if in_fence:
        continue
    line = norm(raw)
    if line.count('"') % 2:
        odd.append(i)
    for q in re.findall(r'"([^"]+)"', line):
        qn = q.strip().strip('.,;:').strip()
        parts = [p.strip().strip('.,;:') for p in re.split(r'\s*(?:\.\.\.|…|\[\.\.\.\])\s*', qn) if p.strip()]
        rows.append({'line': i, 'part': 'B' if i >= part_b_start else 'A',
                     'exact': all(p in source for p in parts),
                     'ci': all(p.lower() in src_l for p in parts), 'q': qn})
out = {}
for part in ('A', 'B'):
    r = [x for x in rows if x['part'] == part]
    if not r:
        continue
    out[part] = {'quotes': len(r), 'found_exact': sum(x['exact'] for x in r),
                 'found_case_insensitive': sum(x['ci'] for x in r),
                 'not_found': [(x['line'], x['q']) for x in r if not x['ci']]}
out['lines_with_odd_quote_count'] = odd
print(json.dumps(out, indent=1, ensure_ascii=False))
