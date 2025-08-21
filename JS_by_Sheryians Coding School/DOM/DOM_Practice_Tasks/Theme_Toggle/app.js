// Restore saved theme on load
(function(){
  const saved = localStorage.getItem('theme') || 'light';
  if(saved === 'dark') document.body.classList.add('dark');
})();

// Toggle + persist
document.getElementById('toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});
