// Init Animasi Scroll
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Efek Mengetik Nama
var typed = new Typed('.typing', {
    strings: ["Faisal Izma.", "Developer.", "Gamer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Smooth Scroll Navbar Active State
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            // Optional: add active class logic css if needed
        }
    });
});
