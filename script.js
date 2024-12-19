// Configuración del Contador
const weddingDate = new Date("2025-09-21T15:30:00");

setInterval(() => {
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("dias").textContent = days;
        document.getElementById("horas").textContent = hours;
        document.getElementById("minutos").textContent = minutes;
        document.getElementById("segundos").textContent = seconds;
    } else {
        document.getElementById("contador").innerHTML = "<h3>¡Hoy es nuestro gran día!</h3>";
    }
}, 1000);
