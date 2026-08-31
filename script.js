// Init Animasi Scroll (AOS)
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Efek Mengetik (Dipisah per koma seperti yang diminta)
const typed = new Typed('.typing', {
    strings: [
        "I'm Faizal isma.", 
        "I'm a bachelor of informatics engineering.", 
        "I want to become a full-stack web developer."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Logika Navbar Garis 3 (Mobile)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenu.querySelector('i');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
});

// Smooth Scroll & Efek Blur Background Navbar
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
