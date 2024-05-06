class Carousel {
    constructor() {
        this.img = [];
        this.img[0] = document.getElementById("carousel-image-0");
        this.img[1] = document.getElementById("carousel-image-1");
        this.img[2] = document.getElementById("carousel-image-2");
        this.img[3] = document.getElementById("carousel-image-3");
        this.img[4] = document.getElementById("carousel-image-4");
        this.img[5] = document.getElementById("carousel-image-5");

        this.animForward  = ['mv0to5', 'mv1to0', 'mv2to1', 'mv3to2', 'mv4to3', 'mv5to4'];
        this.animBackward = ['mv0to1', 'mv1to2', 'mv2to3', 'mv3to4', 'mv4to5', 'mv5to0'];

        this.reset();
    }

    reset() {
        this.img.forEach((image) => {
            this.animForward.forEach((animation) => {
                image.classList.remove(animation);            
            });
            this.animBackward.forEach((animation) => {
                image.classList.remove(animation);            
            });
        });
        this.currentImage = 2;
    }

    next(nextImage) {
        if (nextImage !== undefined) this.setImage(5 , nextImage);

        this.img.forEach((image, i) => {    
            this.animForward.forEach((animation) => { image.classList.remove(animation); });
            this.animBackward.forEach((animation) => { image.classList.remove(animation); });
            image.classList.add(this.animForward[(-this.currentImage + i + 8) % 6]);
        });

        this.currentImage = (this.currentImage + 1) % 6;
    }

    previous(previousImage) {
        // Ajoutez le code pour l'animation précédente ici
    }

    setImage(pos, src) {
        this.img[(pos + this.currentImage + 4) % 6].src = src;
    }

    hideImage(pos) {
        this.img[(pos + this.currentImage + 4) % 6].style.visibility = 'hidden';
    }

    showImage(pos) {
        this.img[(pos + this.currentImage + 4) % 6].style.visibility = 'visible';
    }
}

// Créez une instance de la classe Carousel
const carousel = new Carousel();

// Sélectionnez les boutons de navigation
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Ajoutez des écouteurs d'événements pour les clics sur les boutons de navigation
prevButton.addEventListener('click', () => {
    carousel.previous();
});

nextButton.addEventListener('click', () => {
    carousel.next();
});