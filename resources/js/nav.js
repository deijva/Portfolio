const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
    const isOpen = navbar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Menü schliessen' : 'Menü öffnen');
});

// Mit Escape schliessen 
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
    }
});