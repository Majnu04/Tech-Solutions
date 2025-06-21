document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) loadingScreen.classList.add('hidden');
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (menuToggle && navMenu && menuOverlay) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
            menuOverlay.style.display = navMenu.classList.contains('open') ? 'block' : 'none';
        });
        menuOverlay.addEventListener('click', function() {
            navMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
            menuOverlay.style.display = 'none';
        });
        document.addEventListener('click', function(e) {
            if (
                navMenu.classList.contains('open') &&
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
                menuOverlay.style.display = 'none';
            }
        });
    }

    // Responsive menu hide on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu && menuOverlay) {
            navMenu.style.display = '';
            navMenu.classList.remove('open');
            menuOverlay.style.display = 'none';
        }
    });

    // Scroll Animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        for (const el of reveals) {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        }
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Particle Background
    const particles = document.getElementById('particles');
    if (particles) {
        for (let i = 0; i < 60; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.top = Math.random() * 100 + '%';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            particles.appendChild(p);
        }
    }

    // Enable context menu
    document.addEventListener('contextmenu', function(e) {
        // e.preventDefault(); // Uncomment to disable right-click
    }, false);
});
