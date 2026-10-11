// Execute the course tools' original export functions without changing their templates.
const fs = require('fs');
const vm = require('vm');
const base = '/Users/bobsteeger/Documents/-projects/Product_School/source/libraries/current-platform/PS Content Library/site/certifications/ai-evals/Modules/';
const url = 'https://github.com/cugarguy/PS-AI-Evals/blob/main/';
const answer = 'I recommend we HOLD Ascend IQ because the recorded P0 grounding gate is blocked and the evaluator is not calibrated well enough to support an enterprise launch.';
const pillars = [
  ['P0 grounding remains below the release bar.', 'PR #218 records faithfulness at 87 against a floor of 95, down 9 points from main against a maximum regression of 5. The M3 pricing case still quotes $49 where the verified reference says $59 and adds an unverified 10-seat minimum. Detecting this failure does not demonstrate that it has been fixed.'],
  ['The quality evidence does not yet support a reliable go/no-go decision.', 'Judge calibration records Cohen’s κ of -0.29 against the required 0.60, with 6 disagreements across 12 labels. The trajectory tool records only 1/6 dimensions passed and a HOLD verdict after the agent omitted ingestion verification. These are completed lab results, with failed readiness checks.'],
  ['Portfolio spending does not close the critical coverage gap.', 'M5 allocates $180,000 to three Level 3 selections under the $200,000 cap. The external report-summary coverage row still has no dedicated Bias/Fairness evaluator and only partial hallucination coverage. Dedicated drift monitoring is an accepted temporary gap; the date remains unspecified. Weekly bias audit is a fallback plan, not proof of measured fairness.']
];
const evidence = '- Faithfulness: 87 (Floor: 95) FAIL; regression: -9 points (Max: 5) FAIL · Source: 04-eval-gates/lab-ci-gate-policy.md\n- Judge calibration: κ = -0.29 (Gate: κ ≥ 0.60) FAIL · Source: 03-eval-suites/lab-judge-calibration.md\n- Trajectory: 1/6 dimensions passed; tool verdict HOLD · Source: 03-eval-suites/lab-1b-trajectory.md\n- Pricing case: $49 quoted vs $59 verified; Layer 3 score 0 = caught failure · Source: 03-eval-suites/lab-1-eval-suite.md; no post-fix aggregate rate recorded against the 0% pricing-hallucination gate\n- Level 3 spend: $180,000 (Cap: $200,000; slots: 3/3) WITHIN BUDGET · Source: 05-scale/lab-2-budget-crisis.md\n- Bias coverage: ❌; hallucination: ⚠️; latency/toxicity: ✅; drift: ❌ accepted temporarily · Source: 05-scale/lab-1-coverage-matrix.md; no numeric fairness or production-latency result recorded';
const risk = 'SHIP path: the M2 business-impact statement identifies $50K+ renewals exposed to fabricated-pricing disputes and legal liability. M1 identifies users making $1M+ strategic decisions. These are scenario stakes, not measured expected losses; account count and probability of loss are not recorded.\nHOLD path: launch and revenue timing may slip. The repo provides no measured delay cost, churn probability, or competitive-window estimate, so no dollar loss is asserted. The M5 Level 3 plan leaves $20,000 below the cap, but uses all three slots; this is budget headroom, not an approved remediation allocation.';
const next = 'Proposed decision deadline: 2026-10-16. Approve HOLD and assign the Group PM (Engineer backup from the M3 Eval Spec) to coordinate pricing validation, grounding repair, and a calibration rerun. Before reconsidering release, require pricing assertions to meet 100% accuracy, faithfulness ≥95 with no more than 5 points of regression in the PR replay, and κ ≥0.60. Rerun the trajectory with the missing ingestion check and comparison. Confirm the fairness mitigation and date the accepted drift gap. The deadline is a planning proposal; no external approval or owner acceptance is recorded.';
const reflection = 'Defining “good enough” made the distinction between a completed evaluation and a passing release visible. A judge can catch the pricing P0 in one example and still fail calibration across 12 labels. A portfolio can stay within budget while retaining a critical fairness gap. The existing strategy prioritizes verified claims over speed; the final decision must apply that priority even when it delays release.';
const memo = {'f-to':'CPO · cc Engineering Lead · Trust & Safety','f-from':'Bob Steeger · AI Evals Cohort · 2026-10-11','f-answer':answer,'f-evidence':evidence,'f-risk':risk,'f-next':next,'f-reflection':reflection};
pillars.forEach((p,i)=>{memo[`f-arg${i+1}-title`]=p[0];memo[`f-arg${i+1}-body`]=p[1];});
const pitch = {
 title:'Ascend IQ — Enterprise Launch Decision', pitch:'Verified, citation-backed market intelligence for VP-level strategists and product leaders.', who:'Bob Steeger · AI Evals Cohort · 2026-10-11',repo:'https://github.com/cugarguy/PS-AI-Evals',
 'm1-user':'VP-level strategists and product leaders at Fortune 500 companies; extract verified competitor-pricing and review insights for roadmap decisions.',
 'm1-good':'Verified, citation-backed answers in about five seconds, with up to ten seconds for additional validation. These are the M1 proposed experience targets, not measured latency results.',
 'm1-metrics':'Hallucination Rate · Robustness · Latency (P95/P99)',
 'm1-tradeoffs':'1. Hallucination Rate over Robustness: avoid unsupported claims even when not every phrasing can be handled.\n2. Hallucination Rate over Latency: verification takes priority for high-stakes enterprise decisions.\nAdditional recorded trade-off: Robustness over Latency.\nStrategy Canvas: '+url+'01-evaluation-strategy/strategy-canvas.md',
 'm1-link':url+'01-evaluation-strategy/strategy-canvas.md',
 'm2-f1':'Fabricated Pricing · P0 · 8 HIGH tag-frequency count across the 20-row audit; this is a trust-tag count, not a measured pricing failure rate.',
 'm2-f2':'Unprofessional tone drift · P2 · 1 LOW tag-frequency count; undermines credibility with senior VPs.',
 'm2-f3':'Outdated reference information · P2 · 8 HIGH tag-frequency count; stale answers erode market-intelligence trust.',
 'm2-impact':'Fabricated pricing creates immediate enterprise contract disputes, blocks $50K+ renewals, and creates legal exposure. Taxonomy: '+url+'02-failure-discovery/failure-taxonomy.md',
 'm2-link':url+'02-failure-discovery/failure-taxonomy.md','m3-shots':'',
 'm3-summary':'Local Jupyter P0 run: Layer 1 = 0, catching a missing disclaimer; Layer 2 = 1, legal policy not triggered; Layer 3 = 0, catching $49 vs $59 and an unverified seat minimum. Convention: 0 = caught failure, 1 = not caught. Trajectory: 1/6 passed, HOLD. Calibration: κ -0.29 against ≥0.60, 6/12 disagreements. These results do not establish production readiness. No screenshot was supplied; the saved result tables are the evidence.\n'+url+'03-eval-suites/lab-1-eval-suite.md\n'+url+'03-eval-suites/lab-1b-trajectory.md\n'+url+'03-eval-suites/lab-judge-calibration.md',
 'm4-thresh':'Pricing hallucination =0% (100% pricing accuracy); latency P95 <2.0s soft-review example; tone ≥4.0/5 advisory example. PR #218 replay: faithfulness floor 95, max regression 5; actual 87 and -9, BLOCKED. The replay policy and launch-strategy policy are separate recorded exercises.\n'+url+'04-eval-gates/lab-ci-gate-policy.md',
 'm4-action':'Block P0 release/merge and show the verified-source pricing fallback. Launch strategy: any P0 regression or 2-point hard-metric drop blocks; tone/P2 drop warns; latency warns. PR replay: faithfulness violates both floor and regression limit.\n'+url+'04-eval-gates/lab-2-launch-strategy.md',
 'm4-why':'The user promise requires verified market intelligence. A fabricated price can cause contract liability and enterprise churn. Beta labeling is the selected soft-latency mitigation; it does not waive the P0 hard gate.',
 'm5-matrix':'External report summaries: hallucination ⚠️, bias ❌, latency ✅, toxicity ✅, drift ❌. Accept drift temporarily with a date still to be set; prioritize a stratified, SME-reviewed fairness evaluator and weekly launch audit. These coverage markers are tool selections, not numeric pass rates.\n'+url+'05-scale/lab-1-coverage-matrix.md',
 'm5-budget':'Cap $200,000; Level 3 spend $180,000; 3/3 slots. L3: Data Fabrication $85,000; Context Specificity $70,000; Cost Overruns $25,000. L2: Source Attribution $6,500; Data Bias $5,500, with weekly human audits and escalation triggers. If adding the two listed L2 costs to L3, the grid totals $192,000; the tool labels $180,000 specifically as Level 3 spend.\n'+url+'05-scale/lab-2-budget-crisis.md',
 'm6-call':'HOLD · recorded gates do not support enterprise release','m6-answer':answer,'m6-args':pillars.map((p,i)=>`${i+1}. ${p[0]} ${p[1]}`).join('\n\n'), 'm6-close':risk+'\n\n'+next+'\n\nMemo: '+url+'06-culture/lab-1-ship-hold-memo.md','ref-real':reflection,'ref-next':'Repair pricing/grounding, rerun calibration and the trajectory, and verify the critical fairness mitigation before reconsidering release.','ref-loom':''
};
function run(file,values,ending,expression){
 const html=fs.readFileSync(base+file,'utf8');
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
 const script=scripts.find(s=>s.includes('function buildMd()'));
 if(!script) throw Error('Export script missing');
 const nodes=Object.fromEntries(Object.entries(values).map(([k,value])=>[k,{value}]));
 const ctx=vm.createContext({document:{getElementById:id=>nodes[id]||{value:''}}});
 vm.runInContext(script.slice(0,script.lastIndexOf(ending)),ctx);
 return vm.runInContext(expression,ctx);
}
const memoOut=run('M6 - Ship Hold Memo Builder.html',memo,'\nload();',"decision='hold'; buildMd()");
const pitchOut=run('M6 - Final Pitch Prompt Generator.html',pitch,'\nif (!load())','buildPitch()');
console.log(JSON.stringify({memo:memoOut,pitch:pitchOut,inputs:{memo,pitch}}));
