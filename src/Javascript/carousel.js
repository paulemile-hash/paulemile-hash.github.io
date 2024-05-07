let currentSlide = 0;

function prev() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

function next() {
  if (currentSlide < document.querySelectorAll('.carousel-item').length - 1) {
    currentSlide++;
    updateCarousel();
  }
}

function updateCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%`;
}

updateCarousel();
