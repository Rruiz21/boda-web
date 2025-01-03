const fechaBoda = new Date('2025-09-21T15:30:00').getTime();

const actualizarContador = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('dias').innerText = dias;
        document.getElementById('horas').innerText = horas;
        document.getElementById('minutos').innerText = minutos;
        document.getElementById('segundos').innerText = segundos;
    } else {
        document.getElementById('contador').innerHTML = '<h3>¡Es nuestro día especial!</h3>';
    }
};

setInterval(actualizarContador, 1000);
