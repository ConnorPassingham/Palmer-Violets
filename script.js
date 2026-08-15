document.addEventListener('DOMContentLoaded', () => {

    /* ====================
       1. NAVBAR SCROLL EFFECT
    ==================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    /* ====================
       2. MOBILE MENU TOGGLE
    ==================== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navbar.classList.toggle('menu-open');
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
        });
    });


    /* ====================
       3. ACTIVE NAVIGATION HIGHLIGHT
    ==================== */
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });


    /* ====================
       4. NEXT MATCH COUNTDOWN
       Change the date below to your next match date/time
    ==================== */
    // FORMAT: 'YYYY-MM-DDTHH:MM:SS'
    const nextMatchDate = new Date('2024-08-23T18:30:00').getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextMatchDate - now;

        // Calculations for days, hours, minutes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Display results
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEl = document.getElementById('mins');

        if(daysEl && hoursEl && minsEl) {
            daysEl.innerText = days < 10 ? '0' + days : days;
            hoursEl.innerText = hours < 10 ? '0' + hours : hours;
            minsEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        }

        // If countdown finishes
        if (distance < 0) {
            clearInterval(timer);
            if(daysEl) daysEl.innerText = "00";
            if(hoursEl) hoursEl.innerText = "00";
            if(minsEl) minsEl.innerText = "00";
        }
    }, 1000);


    /* ====================
       5. PLAYER FILTERING
    ==================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            playerCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-position') === filterValue) {
                    card.style.display = 'block';
                    // Small timeout to allow display:block to apply before animating in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); // Matches CSS transition time
                }
            });
        });
    });


    /* ====================
       6. SCROLL REVEAL ANIMATIONS
    ==================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1, // 10% of element must be visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });


    /* ====================
       7. CONTACT FORM SUBMISSION
    ==================== */
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            // Here you would normally send the data to a backend.
            // For now, we simulate a successful submission:
            
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            
            // Optional: reset form if you want to allow multiple submissions
            // contactForm.reset();
        });
    }

});
