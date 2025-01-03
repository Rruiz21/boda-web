const fechaBoda = new Date('2025-09-21T15:30:00');

function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaBoda - ahora;

    if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById('dias').textContent = dias;
        document.getElementById('horas').textContent = horas;
        document.getElementById('minutos').textContent = minutos;
        document.getElementById('segundos').textContent = segundos;
    } else {
        document.getElementById('contador').innerHTML = "<h3>¡Es nuestro día especial!</h3>";
    }
}

setInterval(actualizarContador, 1000);

// Confirmación de asistencia
document.getElementById('rsvp-btn').addEventListener('click', function () {
    document.getElementById('rsvp-mensaje').textContent = "¡Gracias por confirmar tu asistencia!";
});
