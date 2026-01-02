
(function(){
     // Mobile menu toggle
     // Toggle mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const header = document.getElementById('header');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenuBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Reset hamburger animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(item => {
                    item.classList.remove('active');
                });
                link.classList.add('active');
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // CTA button click handler
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Get Started button clicked! This could lead to a signup form or another page.');
            });
        });

        // Close mobile menu if clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnMobileMenuBtn = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnMobileMenuBtn && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Reset mobile menu animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
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