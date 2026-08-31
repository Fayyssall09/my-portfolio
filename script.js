// Init Animasi Scroll
AOS.init({
    duration: 1000, // Durasi AOS diperpanjang agar lebih halus
    easing: 'ease-in-out',
    once: true
});

// Efek Mengetik Nama - MENYESUAIKAN FONT MEWAH
var typed = new Typed('.typing', {
    strings: ["Faisal Izma.", "Developer.", "Gamer."],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true
});

// Smooth Scroll Navbar Active State - LENGKAP & BERFUNGSI
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Penyesuaian agar section active lebih pas saat discroll
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
