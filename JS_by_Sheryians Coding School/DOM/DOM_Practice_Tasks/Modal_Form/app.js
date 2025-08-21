const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const form = document.getElementById('form');
const nameI = document.getElementById('name');
const emailI = document.getElementById('email');

function openModal(){ 
  modal.hidden = false; 
  overlay.hidden = false; 
  nameI.focus(); 
}
function closeModal(){ 
  modal.hidden = true; 
  overlay.hidden = true; 
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', (e)=>{ 
  if(e.key==='Escape' && !modal.hidden) closeModal(); 
});

function setError(el, msg){
  const s = document.querySelector(`.error[data-for="${el.id}"]`);
  s.textContent = msg || '';
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let ok = true;

  if(nameI.value.trim().length < 2){ 
    setError(nameI,'Name too short'); 
    ok=false; 
  } else setError(nameI,'');

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailI.value.trim())){ 
    setError(emailI,'Invalid email'); 
    ok=false; 
  } else setError(emailI,'');

  if(ok){ 
    alert('Form submitted!'); 
    closeModal(); 
    form.reset(); 
  }
});
