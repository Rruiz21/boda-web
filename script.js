const weddingDate = new Date("2025-09-21T15:30:00");

function updateCountdown() {
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    } else {
        document.getElementById("contador").innerHTML = "<h3>¡Es nuestro día especial!</h3>";
    }
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);

// Actualización inicial
updateCountdown();
