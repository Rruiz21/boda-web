// Detectar cuando las secciones se vuelven visibles al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.innerHeight + window.scrollY;

    sections.forEach(function(section) {
        if (scrollPosition >= section.offsetTop) {
            section.classList.add('visible');
        }
    });
});
