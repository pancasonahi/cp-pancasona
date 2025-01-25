// JavaScriptuntuk animasi

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        alert('More Info button clicked!');
    });
});


// mengatur navbar 
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// client coursel

document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    carousel.scrollBy({
        left: evt.deltaY < 0 ? -100 : 100,
        behavior: 'smooth'
    });
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
    });
    carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
    });
    carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; 
    carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('touchend', () => {
    isDown = false;
    });
    carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; 
    carousel.scrollLeft = scrollLeft - walk;
    });

   
    setInterval(() => {
    carousel.scrollBy({
        left: 100,
        behavior: 'smooth'
    });
    }, 2000);
});

