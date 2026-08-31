// 1. Init Animasi Scroll (AOS)
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true,
    offset: 100 // Menambahkan offset agar animasi muncul lebih pas saat discroll
});

// 2. Efek Mengetik Nama (Lebih padat dan profesional)
var typed = new Typed('.typing', {
    strings: [
        "Faisal Izma.", 
        "seorang Full-Stack Web Developer.", 
        "Mahasiswa Teknik Informatika UPS Tegal.",
        "Spesialis Laravel & PHP."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000, // Memberikan jeda 2 detik sebelum menghapus agar teks terbaca
    loop: true
});

// 3. Smooth Scroll Navbar Active State & Efek Navbar Saat Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let current = '';
    
    // Memberikan efek shadow/background gelap pada navbar saat discroll ke bawah
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
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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

// 4. VanillaTilt.js mengaktifkan efek 3D secara otomatis melalui atribut data-tilt di HTML.
