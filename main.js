document.addEventListener('DOMContentLoaded', function() {
    // Performance optimizations
    let ticking = false;
    
    // Header scroll effect
    const header = document.querySelector('.header');
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollY = window.scrollY;
                if (scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Loading Screen with better performance
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            // Clean up loading screen after animation
            setTimeout(() => loadingScreen.remove(), 500);
        }
    });

    // Enhanced Mobile Menu Toggle with accessibility
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu(open) {
        if (open) {
            navMenu.classList.add('open');
            document.body.classList.add('menu-open');
            menuOverlay.style.display = 'block';
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.classList.add('active');
            menuOverlay.setAttribute('aria-hidden', 'false');
            // Focus first menu item for keyboard navigation
            const firstMenuItem = navMenu.querySelector('a');
            if (firstMenuItem) firstMenuItem.focus();
        } else {
            navMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
            menuOverlay.style.display = 'none';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            menuOverlay.setAttribute('aria-hidden', 'true');
            menuToggle.focus();
        }
    }

    if (menuToggle && navMenu && menuOverlay) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.contains('open');
            toggleMenu(!isOpen);
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                toggleMenu(false);
            }
        });

        menuOverlay.addEventListener('click', () => toggleMenu(false));
        
        document.addEventListener('click', function(e) {
            if (
                navMenu.classList.contains('open') &&
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                toggleMenu(false);
            }
        });

        // Close menu when clicking nav links
        navMenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                toggleMenu(false);
            }
        });
    }

    // Responsive menu hide on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768 && navMenu && menuOverlay) {
                navMenu.style.display = '';
                toggleMenu(false);
            }
        }, 100);
    });

    // Optimized Scroll Animations with Intersection Observer
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        function revealOnScroll() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    const reveals = document.querySelectorAll('.fade-in:not(.visible), .slide-in-left:not(.visible), .slide-in-right:not(.visible)');
                    for (const el of reveals) {
                        const windowHeight = window.innerHeight;
                        const elementTop = el.getBoundingClientRect().top;
                        if (elementTop < windowHeight - 100) {
                            el.classList.add('visible');
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener('scroll', revealOnScroll, { passive: true });
        window.addEventListener('load', revealOnScroll);
    }

    // Particle Background (only on desktop and if user prefers motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth > 768;
    
    if (!prefersReducedMotion && isDesktop) {
        const particles = document.getElementById('particles');
        if (particles) {
            // Reduce particles for better performance
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                p.style.top = Math.random() * 100 + '%';
                p.style.left = Math.random() * 100 + '%';
                p.style.animationDuration = (4 + Math.random() * 4) + 's';
                particles.appendChild(p);
            }
        }
    }

    // Enhanced Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const serviceSelect = document.getElementById('service');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const submitStatus = document.getElementById('submit-status');

        // Validation functions
        function validateName(value) {
            if (!value.trim()) return 'Name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (value.trim().length > 50) return 'Name must be less than 50 characters';
            return null;
        }

        function validateEmail(value) {
            if (!value.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return null;
        }

        function validateService(value) {
            if (!value) return 'Please select a service';
            return null;
        }

        function validateMessage(value) {
            if (!value.trim()) return 'Project details are required';
            if (value.trim().length < 20) return 'Please provide more details (at least 20 characters)';
            if (value.trim().length > 1000) return 'Message is too long (maximum 1000 characters)';
            return null;
        }

        function showError(input, message) {
            const errorElement = document.getElementById(input.id + '-error');
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        function clearError(input) {
            const errorElement = document.getElementById(input.id + '-error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }

        // Real-time validation
        if (nameInput) {
            nameInput.addEventListener('blur', function() {
                const error = validateName(this.value);
                if (error) showError(this, error);
                else clearError(this);
            });
        }

        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const error = validateEmail(this.value);
                if (error) showError(this, error);
                else clearError(this);
            });
        }

        if (serviceSelect) {
            serviceSelect.addEventListener('change', function() {
                const error = validateService(this.value);
                if (error) showError(this, error);
                else clearError(this);
            });
        }

        if (messageInput) {
            messageInput.addEventListener('blur', function() {
                const error = validateMessage(this.value);
                if (error) showError(this, error);
                else clearError(this);
            });
        }

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let hasErrors = false;
            const nameError = validateName(nameInput.value);
            const emailError = validateEmail(emailInput.value);
            const serviceError = validateService(serviceSelect.value);
            const messageError = validateMessage(messageInput.value);

            if (nameError) {
                showError(nameInput, nameError);
                hasErrors = true;
            }
            if (emailError) {
                showError(emailInput, emailError);
                hasErrors = true;
            }
            if (serviceError) {
                showError(serviceSelect, serviceError);
                hasErrors = true;
            }
            if (messageError) {
                showError(messageInput, messageError);
                hasErrors = true;
            }

            if (hasErrors) {
                // Focus first error field
                const firstError = contactForm.querySelector('.error-message:not(:empty)');
                if (firstError) {
                    const fieldId = firstError.id.replace('-error', '');
                    const field = document.getElementById(fieldId);
                    if (field) field.focus();
                }
                return;
            }

            // Submit form
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            
            const formData = new FormData(this);
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    submitStatus.className = 'submit-status success';
                    submitStatus.textContent = 'Message sent successfully! We\'ll get back to you soon.';
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                submitStatus.className = 'submit-status error';
                submitStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
            })
            .finally(() => {
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy loading for images (fallback for browsers without native support)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
