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

document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    document.body.appendChild(heartContainer);

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Position aléatoire sur l'axe X
        heart.style.left = Math.random() * 100 + 'vw';

        // Taille aléatoire pour les cœurs
        const size = Math.random() * 10 + 10 + 'px';
        heart.style.width = size;
        heart.style.height = size;

        // Durée de l'animation aléatoire
        const duration = Math.random() * 5 + 2 + 's';
        heart.style.animationDuration = duration;

        heartContainer.appendChild(heart);

        // Supprimer le cœur après l'animation
        setTimeout(() => {
            heart.remove();
        }, parseInt(duration) * 1000);
    }

    setInterval(createHeart, 150);
});