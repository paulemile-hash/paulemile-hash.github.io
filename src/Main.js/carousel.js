// Récupérer les éléments nécessaires
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

// Écouteur d'événement pour le bouton précédent
document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
});

// Écouteur d'événement pour le bouton suivant
document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
});
