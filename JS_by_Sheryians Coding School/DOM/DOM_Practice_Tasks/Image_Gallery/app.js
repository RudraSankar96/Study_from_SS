const imgs = Array.from(document.querySelectorAll('#grid img'));
const box = document.getElementById('lightbox');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const closeBtn = document.getElementById('close');
const lbImg = document.getElementById('lb-img');
let idx = 0;

function open(i){ idx=i; lbImg.src = imgs[idx].src; box.hidden=false; }
function close(){ box.hidden=true; }
function nav(d){ idx = (idx + d + imgs.length) % imgs.length; lbImg.src = imgs[idx].src; }

imgs.forEach((img,i)=> img.addEventListener('click', ()=> open(i)));
prev.addEventListener('click', ()=> nav(-1));
next.addEventListener('click', ()=> nav(1));
closeBtn.addEventListener('click', close);
window.addEventListener('keydown', (e)=>{
  if(box.hidden) return;
  if(e.key==='Escape') close();
  if(e.key==='ArrowLeft') nav(-1);
  if(e.key==='ArrowRight') nav(1);
});
