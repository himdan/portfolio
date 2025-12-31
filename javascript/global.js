
(function(){
     // Mobile menu toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });

    // Update copyright year
    document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} Mohamed Chehimi. All rights reserved.`;
})();