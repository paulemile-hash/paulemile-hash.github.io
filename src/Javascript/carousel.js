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

  // Activer et désactiver les boutons en fonction de la diapositive actuelle
  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === document.querySelectorAll('.carousel-item').length - 1;

  // Mettre à jour la classe "active" pour l'indicateur de diapositive
  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach(item => item.classList.remove('active'));
  document.querySelector('.carousel-item:nth-child(' + (currentSlide + 1) + ')').classList.add('active');
}

updateCarousel();
