document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const imgElement = document.querySelector('.image-box img');

    // Les images à afficher
    const images = [
        'img/1.png', 
        'img/2.png', 
        'img/3.png', 
        'img/4.png', 
        'img/5.png', 
        'img/6.png',
        'img/7.png',
        'img/8.png',
        'img/9.png',
        'img/10.png'
    ];

    let currentImageIndex = 0;

    function updateImage() {
        // Ajouter une classe pour amorcer la transition de fondu
        imgElement.classList.add('hide');
        
        // Attendre la fin de l'animation de disparition
        setTimeout(() => {
            imgElement.src = images[currentImageIndex];
            imgElement.classList.remove('hide');
            imgElement.classList.add('show');
        }, 200); // Temps de transition en millisecondes
    }

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });

    // Initialiser avec la première image
    updateImage();
});
