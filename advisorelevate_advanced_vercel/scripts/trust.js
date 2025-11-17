document.addEventListener('DOMContentLoaded',async()=>{
  const ti=document.getElementById('trust-index');
  const logEl=document.getElementById('ethics-log');
  const mr=document.getElementById('model-readiness');
  if(ti) ti.textContent='Loading trust metrics…';
  try{
    const res=await fetch('/api/trust');
    const data=await res.json();
    if(ti) ti.textContent='Trust Index: '+(data.trustIndex*100).toFixed(1)+'%';
    if(logEl) logEl.textContent=JSON.stringify(data.ethicsLog,null,2);
    if(mr) mr.textContent=JSON.stringify(data.modelReadiness,null,2);
  }catch(e){
    if(ti) ti.textContent='Demo trust environment (static).';
    if(logEl) logEl.textContent='[demo] Ethics log unavailable.';
    if(mr) mr.textContent='[demo] Model readiness snapshot unavailable.';
  }
});
