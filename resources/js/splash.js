// Zitat aus dem DOM holen
const quoteSection = document.getElementById('quote-section');
const body = document.body;

// Event Listener: reagiert auf Klick auf das Zitat
quoteSection.addEventListener('click', function () {
    if (!body.classList.contains('intro')) return;

    sessionStorage.setItem('introSeen', 'true'); // merken
    // Zitat sanft ausblenden (noch im Vollbild-Zustand)
    body.classList.add('fading');

    setTimeout(function () {
        body.classList.remove('intro', 'fading');
        quoteSection.style.display = 'none'; // Zitat komplett entfernen
    }, 800); // muss exakt zur transitions-Dauer im CSS passen (0.8s)
});