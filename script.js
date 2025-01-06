// Función para activar animaciones de imágenes (fade-in)
document.addEventListener("scroll", function() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    if (image.getBoundingClientRect().top < window.innerHeight) {
      image.classList.add("visible");
    }
  });
});

// Carrusel de fotos (prev, next y autoplay)
let currentSlide = 0;
const images = document.querySelectorAll(".carousel-images img");

function showSlide(index) {
  if (index >= images.length) currentSlide = 0;
  if (index < 0) currentSlide = images.length - 1;
  const offset = -100 * currentSlide;
  document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide++;
  showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide--;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 5000); // Cambiar cada 5 segundos

// Función para inicializar el mapa de Google
function initMap() {
  const location = { lat: 13.852, lng: -89.655 }; // Latitud y longitud de El Morrito

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "¡El Morrito!",
  });
}
