async function runPredictiveDemo(){
  const out=document.getElementById('predictive-output');
  if(!out)return;
  out.textContent='Running forecast…';
  try{
    const res=await fetch('/api/predictive');
    const data=await res.json();
    out.textContent=JSON.stringify(data,null,2);
  }catch(e){
    out.textContent='Predictive API not reachable. Using demo-only environment.';
  }
}
