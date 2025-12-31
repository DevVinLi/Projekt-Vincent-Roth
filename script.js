// Add your JavaScript here 

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Burger Menu Toggle
const burgerIcon = document.querySelector('.burger-icon');
const header = document.querySelector('header');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', () => {
    header.classList.toggle('nav-open');
    burgerIcon.classList.toggle('active');
    body.classList.toggle('nav-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        burgerIcon.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!header.contains(event.target) && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        burgerIcon.classList.remove('active');
        body.classList.remove('nav-open');
    }
});

// Language Toggle for Mobile
const languageToggle = document.querySelector('.language-toggle');
const languageOptions = document.querySelector('.language-toggle .language-options');

languageToggle.addEventListener('click', (event) => {
    // Prevent default link behavior only if it's the toggle button
    if (event.target.classList.contains('toggle-button')) {
        event.preventDefault();
    }
    // Toggle the display of language options
    languageOptions.classList.toggle('show-options');
});

// Close language options when clicking outside
document.addEventListener('click', (event) => {
    if (!languageToggle.contains(event.target) && languageOptions.classList.contains('show-options')) {
        languageOptions.classList.remove('show-options');
    }
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove 'show' class when element is out of view
            // entry.target.classList.remove('show');
        }
    });
});

// Select elements to observe for scroll reveal
const elementsToObserve = document.querySelectorAll('.hero, .features, .about-section, .services-list, .contact-info, .contact-form, .media-content, .media-item');
elementsToObserve.forEach(element => {
    element.classList.add('hidden'); // Initially hide elements
    observer.observe(element);
}); 