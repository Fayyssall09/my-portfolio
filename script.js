// Init Animasi Scroll
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true
});

// Efek Mengetik Nama
var typed = new Typed('.typing', {
    strings: ["Faisal Izma.", "Developer.", "Gamer."],
    typeSpeed: 90,
    backSpeed: 50,
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
        if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// VanillaTilt.js mengaktifkan efek 3D secara otomatis melalui atribut data-tilt di HTML.
