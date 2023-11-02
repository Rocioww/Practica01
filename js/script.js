// Lista de URLs de imágenes de fondo
const backgroundImages = [
    'url(https://i.pinimg.com/564x/79/5b/9e/795b9e41bbbe80382c95d46d2eb7fcb8.jpg)',
    'url(https://i.pinimg.com/564x/73/47/cb/7347cb69f5c01f449eeb07ef0bced69f.jpg)',
    'url(https://i.pinimg.com/564x/27/6b/db/276bdbe493855dc040fd25be09c1a18f.jpg)',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    // Cambia la imagen de fondo
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.querySelector('header').style.backgroundImage = backgroundImages[currentImageIndex];
}

// Cambia la imagen de fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 10000);