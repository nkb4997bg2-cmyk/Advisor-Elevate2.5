async function runRecessionDemo(){
  const out=document.getElementById('recession-output');
  if(!out)return;
  out.textContent='Fetching macro risk snapshot…';
  try{
    const res=await fetch('/api/recession');
    const data=await res.json();
    out.textContent=JSON.stringify(data,null,2);
  }catch(e){
    out.textContent='Recession API not reachable. Using demo-only environment.';
  }
}
