// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && window.innerWidth <= 900) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.hamburger') && 
        navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Show success messages based on URL parameters
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    
    if (success === 'consultancy') {
        const successDiv = document.getElementById('consultancy-success');
        if (successDiv) {
            successDiv.style.display = 'block';
            // Scroll to the form
            document.getElementById('consultancy-success').scrollIntoView({ behavior: 'smooth' });
        }
    } else if (success === 'contact') {
        const successDiv = document.getElementById('contact-success');
        if (successDiv) {
            successDiv.style.display = 'block';
            // Scroll to the form
            document.getElementById('contact-success').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Enhanced Dropdown functionality for Services menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    function isMobile() {
        return window.innerWidth <= 900;
    }

    function setDropdownState() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (isMobile()) {
                menu.classList.remove('show');
                menu.classList.add('hide');
                menu.style.display = 'none';
            } else {
                menu.classList.remove('show');
                menu.classList.remove('hide');
                menu.style.display = '';
                // Let CSS handle desktop hover
            }
        });
    }

    setDropdownState();
    window.addEventListener('resize', () => {
        setDropdownState();
        
        // Close mobile menu when window is resized to desktop
        if (window.innerWidth > 900) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownLink = dropdown.querySelector('.nav-link');
        dropdownLink.onclick = null;
        dropdownLink.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                const isVisible = dropdownMenu.classList.contains('show');
                
                // Close all other dropdowns first
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('show');
                        menu.classList.add('hide');
                        menu.style.display = 'none';
                    }
                });
                
                if (isVisible) {
                    dropdownMenu.classList.remove('show');
                    dropdownMenu.classList.add('hide');
                    dropdownMenu.style.display = 'none';
                } else {
                    dropdownMenu.classList.remove('hide');
                    dropdownMenu.classList.add('show');
                    dropdownMenu.style.display = 'block';
                }
            }
        });
    });

    // Close dropdown on mobile when clicking outside or pressing Escape
    document.addEventListener('click', function(e) {
        if (isMobile() && !e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
                menu.classList.add('hide');
            });
        }
    });
    document.addEventListener('keydown', function(e) {
        if (isMobile() && e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
                menu.classList.add('hide');
            });
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Let the form submit normally if PHP handler is available
        // JavaScript validation will still work
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Re-enable button after a delay (in case of errors)
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 5000);
    });
}

// Handle form response messages from PHP
function handleFormResponse() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const error = urlParams.get('error');
    const formMessage = document.getElementById('form-message');
    
    if (success === '1') {
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Clear URL parameters
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    } else if (error) {
        formMessage.textContent = decodeURIComponent(error);
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
        
        // Clear URL parameters
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }
}

// Call form response handler on page load
document.addEventListener('DOMContentLoaded', handleFormResponse);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .about-text, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    // Populate consultancy hidden message from visible fields if present
    const consultForm = document.querySelector('.consultancy-form');
    if (consultForm) {
        consultForm.addEventListener('submit', () => {
            const name = document.getElementById('consult-name')?.value || '';
            const email = document.getElementById('consult-email')?.value || '';
            const company = document.getElementById('consult-company')?.value || '';
            const hiddenMsg = document.getElementById('consult-message');
            if (hiddenMsg) {
                hiddenMsg.value = `Free consultancy request from ${name} (${email})\nCompany: ${company}`;
            }
        });
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (number > 0) {
                statNumber.textContent = '0' + (text.includes('+') ? '+' : '');
                animateCounter(statNumber, number);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats for animation
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active class to current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavItem);

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #bf0a30 !important;
        font-weight: 600;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Initialize tooltips for contact icons
document.querySelectorAll('.contact-item i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add click-to-copy functionality for contact info
document.querySelectorAll('.contact-item p').forEach(p => {
    p.addEventListener('click', function() {
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Show temporary feedback
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            this.style.color = '#bf0a30';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '#666';
            }, 2000);
        });
    });
    
    // Add cursor pointer
    p.style.cursor = 'pointer';
});

console.log('Texas2Success website loaded successfully! 🚀');

// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slides.length === 0) {
        console.error('No slides found!');
        return;
    }
    
    if (dots.length === 0) {
        console.error('No slider dots found!');
        return;
    }
    
    console.log(`Found ${slides.length} slides and ${dots.length} dots`);
    
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);
    
    function showSlide(index) {
        console.log(`Showing slide ${index}`);
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        console.log(`Auto-advancing to slide ${next}`);
        showSlide(next);
    }
    
    // Initialize first slide
    showSlide(0);
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            console.log(`Manual navigation to slide ${i}`);
            showSlide(i);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    console.log('Hero slider initialized successfully!');
}); 