function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function openPortal(){document.getElementById('portal-gate').classList.remove('hidden');}
function closePortal(){document.getElementById('portal-gate').classList.add('hidden');}
function login(){
  const email=document.getElementById('login-email').value;
  const pass=document.getElementById('login-pass').value;
  if(email==='demo@ae.com' && pass==='demo'){
    window.location.href='/ops.html';
  }else{
    alert('Demo login only for now: demo@ae.com / demo');
  }
}
async function subscribe(plan){
  try{
    const res=await fetch('/api/billing',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({plan})});
    const data=await res.json();
    if(data && data.message){alert(data.message+' (plan: '+plan+')');}
  }catch(e){
    alert('Billing API stub only. No real charges.');
  }
}
function contactSales(){window.location.href='mailto:sales@advisorelevate.com?subject=AdvisorElevate%20Enterprise';}
