const list = document.getElementById('list');
let draggingEl = null;
let placeholder = document.createElement('li');
placeholder.className = 'placeholder';

list.addEventListener('dragstart', e => {
  if(e.target.tagName !== 'LI') return;
  draggingEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.target.classList.add('dragging');
});

list.addEventListener('dragend', e => {
  if(!draggingEl) return;
  draggingEl.classList.remove('dragging');
  draggingEl = null;
  placeholder.remove();
});

list.addEventListener('dragover', e => {
  e.preventDefault();
  const after = Array.from(list.children).find(li => {
    const rect = li.getBoundingClientRect();
    return e.clientY <= rect.top + rect.height/2;
  });
  if(after) list.insertBefore(placeholder, after);
  else list.appendChild(placeholder);
});

list.addEventListener('drop', e => {
  e.preventDefault();
  if(draggingEl) list.insertBefore(draggingEl, placeholder);
});
