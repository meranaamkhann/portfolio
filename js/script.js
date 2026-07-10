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

// Floating description 
new Typed("#typing", {
    strings: [
        "Backend Developer",
        // "Java Developer",
        // "Spring Boot Developer",
        // "Problem Solver",
        "Freelancer"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1800,
    loop: true,
    showCursor: true,
    cursorChar: "|"
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

// contact info form
emailjs.init("ejycJ_SHqqNxyHzaV");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_x45q6cr",
"template_5e5bomu",
this
)
 .then(() => {
    alert("✅ Thanks! Your message has been sent. I'll get back to you soon.!");
    form.reset();
  })
  .catch((error) => {
    alert("❌ Failed to send message.");
    console.error(error);
  });
});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});