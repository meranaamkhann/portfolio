// ambient blob follows mouse softly
const blob = document.getElementById('blob');
const dot = document.getElementById('dot');
let bx=window.innerWidth/2, by=window.innerHeight/2;
document.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
  blob.style.left = e.clientX + 'px';
  blob.style.top = e.clientY + 'px';
});

// interactive dot scale on hover
document.querySelectorAll('a,button,.stag,.scard,.pcard,.acard,.cert,.clink').forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.style.transform = 'translate(-50%,-50%) scale(3)';
    dot.style.opacity = '0.5';
  });
  el.addEventListener('mouseleave', () => {
    dot.style.transform = 'translate(-50%,-50%) scale(1)';
    dot.style.opacity = '1';
  });
});

// scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('up'); });
}, {threshold: 0.08});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// nav active state
const sections = document.querySelectorAll('section,[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if(window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--text)' : '';
  });
});
