// Contador
const weddingDate = new Date("2025-09-21T15:30:00");
const interval = setInterval(() => {
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
}, 1000);

// Modo Oscuro
const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
modoOscuroBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
