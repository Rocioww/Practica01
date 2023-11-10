const backgroundImages = [
    { url: 'img/header_1.png', size: 'cover' },
    { url: 'img/header_2.png', size: 'cover' },
    { url: 'img/header_4.png', size: 'cover' },
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    // Cambia la imagen de fondo
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    const backgroundImage = backgroundImages[currentImageIndex];
    const header = document.getElementById('indexheader'); // Cambiado para apuntar al elemento #indexheader

    // Establece la nueva imagen de fondo y su tamaño
    header.style.backgroundImage = `url(${backgroundImage.url})`;
    header.style.backgroundSize = backgroundImage.size;
}

// Cambia la imagen de fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 5000);


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 400;

    if (scrollPosition > scrollThreshold) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});


function changeImage(element) {
    var originalImage = element.querySelector('img');
    var altImage = element.getAttribute('data-alt-image');
    element.setAttribute('data-original-image', originalImage.src);
    originalImage.src = altImage;
  }

  function resetImage(element) {
    var originalImage = element.querySelector('img');
    var originalImageUrl = element.getAttribute('data-original-image');
    originalImage.src = originalImageUrl;
  }