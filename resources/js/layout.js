// Gemeinsame Navbar und Footer für alle Seiten

const navbarHTML = `
  <nav class="navbar">
    <button class="nav-toggle" id="nav-toggle"
            aria-expanded="false" aria-controls="nav-links" aria-label="Menü öffnen">
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="about.html">Über mich</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

const footerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-name">David Fan Bächi</span>
      <ul class="footer-links">
        <li><a href="https://www.instagram.com/deijva" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="https://github.com/deijva" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="mailto:d.baechi@hotmail.com">E-Mail</a></li>
      </ul>
      <span class="footer-copy">© ${new Date().getFullYear()} · Bern</span>
    </div>
  </footer>
`;

// Navbar ganz oben in den Body einsetzen
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// Footer ganz unten anhängen
document.body.insertAdjacentHTML('beforeend', footerHTML);

// Aktiven Link markieren
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function (link) {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});