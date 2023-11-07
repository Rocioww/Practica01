const backgroundImages = [
    'url(https://images.unsplash.com/photo-1627414364311-195972ffc168?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    'url(https://images.unsplash.com/photo-1548967199-79324abbe7dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    'url(https://images.unsplash.com/photo-1594384448519-1e9529be29f5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    // Cambia la imagen de fondo
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.querySelector('header').style.backgroundImage = backgroundImages[currentImageIndex];
}

// Cambia la imagen de fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 10000);

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 200;

    if (scrollPosition > scrollThreshold) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});
