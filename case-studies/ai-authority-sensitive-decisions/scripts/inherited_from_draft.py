import re, sys, json
def norm(s):
    s = s.replace('“','"').replace('”','"').replace('‘',"'").replace('’',"'").replace('*','')
    return re.sub(r'\s+',' ',s).strip()
lines = open(sys.argv[1], encoding='utf-8').read().split('\n')
draft = norm(open(sys.argv[2], encoding='utf-8').read()).lower()
enh = norm(open(sys.argv[3], encoding='utf-8').read()).lower()
items, cur = {}, None
for i, raw in enumerate(lines[551:793], 552):
    m = re.match(r'^\*\*(K\d+|U\d+)\.', raw)
    if m:
        cur = m.group(1); items[cur] = {'line': i, 'quotes': [], 'sev': None}
    if cur is None:
        continue
    sv = re.search(r'Severity: (high|medium|low)', raw)
    if sv: items[cur]['sev'] = sv.group(1)
    line = norm(raw)
    for q in re.findall(r'"([^"]+)"', line):
        q = q.strip().strip('.,;:').strip()
        if len(q.split()) >= 3:           # skip one- and two-word quotes such as "4" or "reversed"
            items[cur]['quotes'].append(q.lower())
out = {}
for k, v in items.items():
    qs = v['quotes']
    in_draft = sum(q in draft for q in qs)
    in_enh = sum(q in enh for q in qs)
    status = 'no long quotes' if not qs else ('all passages also in draft' if in_draft == len(qs) else 'involves revised text')
    out[k] = {'sev': v['sev'], 'quotes': len(qs), 'in_draft': in_draft, 'in_enhanced': in_enh, 'status': status}
print(json.dumps(out))
summ = {}
for k, v in out.items():
    key = (k[0], v['status'])
    summ[key] = summ.get(key, 0) + 1
print({f'{a}:{b}': n for (a, b), n in sorted(summ.items())})
print('inherited K:', [k for k, v in out.items() if k[0]=='K' and v['status']=='all passages also in draft'])
print('inherited U:', [k for k, v in out.items() if k[0]=='U' and v['status']=='all passages also in draft'])
