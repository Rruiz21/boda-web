// script.js

// Countdown
const targetDate = new Date("2025-09-21T15:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Carousel
let slideIndex = 0;

function showSlides(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => showSlides(slideIndex - 1));
document.querySelector(".next").addEventListener("click", () => showSlides(slideIndex + 1));
