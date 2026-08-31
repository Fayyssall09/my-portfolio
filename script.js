// Init Animasi Scroll
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Smooth Scroll Navbar Active State & Efek Interaktif
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let current = '';

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.8)";
        navbar.style.background = "rgba(5, 5, 5, 0.98)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(5,5,5,0.92)";
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
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
