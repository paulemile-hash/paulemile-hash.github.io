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

        this.currentImage = 2;

        this.img.forEach((image, index) => {
            image.addEventListener('click', () => {
                this.setCurrentImage(index);
                this.rotateCarousel();
            });
        });

        this.setCurrentImage(this.currentImage);
    }

    setCurrentImage(index) {
        this.img.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    rotateCarousel() {
        const nextIndex = (this.currentImage + 1) % this.img.length;
        this.currentImage = nextIndex;
        this.setCurrentImage(nextIndex);
    }
}

// Créez une instance de la classe Carousel
const carousel = new Carousel();
