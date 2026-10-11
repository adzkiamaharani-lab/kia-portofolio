
const exploreButton = document.querySelector('#home a');

if (exploreButton) {
    exploreButton.addEventListener('click', function() {
        alert("Welcome to Adzkia's World! 🌷✨ Let's start our adventure!");
    });
}

const backToTop = document.querySelector('#backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* Animasi saat bagian halaman muncul ketika di-scroll */
const revealSections = document.querySelectorAll(
    '#about, #education, #skills, #experience, #contact'
);

revealSections.forEach(function(section) {
    section.classList.add('scroll-reveal');
});

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealSections.forEach(function(section) {
    revealObserver.observe(section);
});


/* Animasi kartu Skills muncul bergantian */
const skillCards = document.querySelectorAll('.skill-card');

if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                skillCards.forEach(function(card, index) {
                    setTimeout(function() {
                        card.classList.add('show-card');
                    }, index * 350);
                });

                skillObserver.disconnect();
            }
        });
    }, {
        threshold: 0.1
    });

    const skillsSection = document.querySelector('#skills');

    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
} else {
    skillCards.forEach(function(card) {
        card.classList.add('show-card');
    });
}