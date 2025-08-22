const tabs = document.querySelectorAll('[role=tab]');
const panels = document.querySelectorAll('[role=tabpanel]');

function show(id){
  panels.forEach(p => p.hidden = p.id !== id);
  tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === id)));
  location.hash = id;
}

tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.tab)));

window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#','') || 'home';
  show(id);
});

// initial
show((location.hash && location.hash.slice(1)) || 'home');
