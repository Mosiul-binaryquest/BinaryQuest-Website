document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.primary-nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    const valid = form.checkValidity();
    if (!valid) { form.reportValidity(); return; }
    form.reset();
    if (note) {
      note.hidden = false;
      setTimeout(() => { note.hidden = true; }, 4000);
    }
  });
}
