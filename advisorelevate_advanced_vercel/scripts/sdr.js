async function runSdrDemo(){
  const out=document.getElementById('sdr-output');
  if(!out)return;
  out.textContent='Simulating AI SDR pipeline…';
  setTimeout(()=>{
    out.textContent='[Demo] 3 leads contacted, 2 replies detected, 1 meeting booked.';
  },900);
}
