// --- Filter-Logik ---
const filterButtons = document.querySelectorAll('.filter-btn');
const timelineGroups = document.querySelectorAll('.timeline-group');

filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const filter = button.dataset.filter;

        // aktiven Button-Style umschalten
        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // passende Timeline-Gruppen anzeigen/verstecken
        timelineGroups.forEach(function (group) {
            if (filter === 'all' || group.dataset.category === filter) {
                group.classList.remove('hidden');
            } else {
                group.classList.add('hidden');
            }
        });
    });
});

// --- Scroll-Fade-In mit IntersectionObserver ---
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Element gilt als "sichtbar", sobald 20% im Viewport sind
});

timelineItems.forEach(function (item) {
    observer.observe(item);
});