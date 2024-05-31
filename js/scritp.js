let currentIndex = 0;
const slides = document.querySelectorAll("#slideWrap li");
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.getElementById('slideWrap').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Automatycznie zmienia slajd co 3 sekundy
