// Init AOS Scroll Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Typing Text Effect Smooth (Dioptimalkan tanpa lag)
var typed = new Typed('.typing', {
    strings: [
        "I'm Faizal isma", 
        "I'm a bachelor of informatics engineering", 
        "I want to become a full-stack web developer"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 300,
    loop: true,
    smartBackspace: true
});

// 1. SPOTLIGHT KURSOR TERANG PADA FOTO UTAMA (TANPA EFEK 3D TILT)
const spotlightCard = document.getElementById('spotlightCard');
const spotlightOverlay = document.getElementById('spotlightOverlay');

if (spotlightCard && spotlightOverlay) {
    spotlightCard.addEventListener('mousemove', (e) => {
        const rect = spotlightCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        spotlightCard.style.setProperty('--mouse-x', `${x}px`);
        spotlightCard.style.setProperty('--mouse-y', `${y}px`);
    });
}

// 2. ROBOT 3D FUTURISTIK & MATA TRACKING KURSOR
const robot3D = document.getElementById('robot3D');
const robotInner = document.querySelector('.robot-inner');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
    // 3D Tilt Robot
    if (robot3D && robotInner) {
        const rRect = robot3D.getBoundingClientRect();
        const rCenterX = rRect.left + rRect.width / 2;
        const rCenterY = rRect.top + rRect.height / 2;

        const rRotateX = (e.clientY - rCenterY) / 20;
        const rRotateY = (rCenterX - e.clientX) / 20;

        robotInner.style.transform = `rotateX(${-rRotateX}deg) rotateY(${-rRotateY}deg)`;
    }

    // Mata Robot Follow Cursor
    pupils.forEach(pupil => {
        const rect = pupil.getBoundingClientRect();
        const pupilX = rect.left + rect.width / 2;
        const pupilY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);
        const distance = Math.min(6, Math.hypot(e.clientX - pupilX, e.clientY - pupilY) / 30);
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
});

// 3. EFEK FISIKA TALI & KARTU LENTUR (MEMBAL DAN BERAYUN SEPERTI JEPRETAN TALI KARET)
const lanyardAssembly = document.getElementById('lanyardAssembly');

if (lanyardAssembly) {
    let isDragging = false;
    let startX = 0;
    let currentAngle = 0;
    let velocity = 0;
    let animationFrameId = null;

    const startDrag = (e) => {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        lanyardAssembly.style.cursor = 'grabbing';
    };

    const moveDrag = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diffX = currentX - startX;
        
        // Menghitung sudut swing & efek lengkungan lentur
        currentAngle = Math.max(-45, Math.min(45, diffX * 0.25));
        const flexSkew = currentAngle * 0.15; // Efek lentur pada tali
        
        lanyardAssembly.style.transform = `rotate(${currentAngle}deg) skewX(${flexSkew}deg)`;
    };

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        lanyardAssembly.style.cursor = 'grab';

        // Simulasi Fisika Pegas/Lentur (Pendulum Oscillator)
        let angle = currentAngle;
        let speed = 0;
        const k = 0.08;   // Kekuatan lentur tarik balik
        const damping = 0.88; // Redaman ayunan tali

        const animateSpring = () => {
            const accel = -k * angle;
            speed += accel;
            speed *= damping;
            angle += speed;

            const currentSkew = angle * 0.15;
            lanyardAssembly.style.transform = `rotate(${angle}deg) skewX(${currentSkew}deg)`;

            if (Math.abs(angle) > 0.1 || Math.abs(speed) > 0.1) {
                animationFrameId = requestAnimationFrame(animateSpring);
            } else {
                lanyardAssembly.style.transform = 'rotate(0deg) skewX(0deg)';
            }
        };

        animateSpring();
    };

    // Event Listeners (Mouse & Touch)
    lanyardAssembly.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', stopDrag);

    lanyardAssembly.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', moveDrag);
    window.addEventListener('touchend', stopDrag);
}
