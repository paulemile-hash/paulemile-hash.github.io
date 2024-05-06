class Carousel {
    constructor() {
        this.img = [
            document.getElementById("carousel-image-0"),
            document.getElementById("carousel-image-1"),
            document.getElementById("carousel-image-2"),
            document.getElementById("carousel-image-3"),
            document.getElementById("carousel-image-4"),
            document.getElementById("carousel-image-5")
        ];

        this.animForward = ['mv0to5', 'mv1to0', 'mv2to1', 'mv3to2', 'mv4to3', 'mv5to4'];
        this.animBackward = ['mv0to1', 'mv1to2', 'mv2to3', 'mv3to4', 'mv4to5', 'mv5to0'];

        this.currentImage = 2;

        // Ajout des écouteurs d'événements pour les clics sur les images
        this.img.forEach((image, index) => {
            image.addEventListener('click', () => {
                const diff = index - this.currentImage;
                if (diff !== 0) {
                    if (diff > 0) {
                        this.next();
                    } else {
                        this.previous();
                    }
                }
            });
        });
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

    next() {
        this.img.forEach((image, i) => {
            this.animForward.forEach((animation) => { image.classList.remove(animation); });
            this.animBackward.forEach((animation) => { image.classList.remove(animation); });
            image.classList.add(this.animForward[(-this.currentImage + i + 8) % 6]);
        });

        this.currentImage = (this.currentImage + 1) % 6;
    }

    previous() {
        // Code pour animation précédente
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
