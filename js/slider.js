const slides = document.querySelectorAll('.sliderhero1__slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 2500);