// Contador de cuenta regresiva
const weddingDate = new Date("2025-09-21T15:30:00");

setInterval(() => {
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
    } else {
        document.getElementById("countdown").innerHTML = "<h3>¡Es nuestro día especial!</h3>";
    }
}, 1000);
