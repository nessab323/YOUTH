// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {

    // ===== RANDOM MEMORY VERSE =====
    var verses = [
        {
            text: '"Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."',
            cite: '- 1 Timothy 4:12'
        },
        {
            text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
            cite: '- Jeremiah 29:11'
        },
        {
            text: '"I can do all things through Christ who strengthens me."',
            cite: '- Philippians 4:13'
        },
        {
            text: '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',
            cite: '- Proverbs 3:5-6'
        },
        {
            text: '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
            cite: '- Joshua 1:9'
        }
    ];

    var verseText = document.getElementById('verseText');
    var verseCite = document.getElementById('verseCite');

    if (verseText && verseCite) {
        var randomIndex = Math.floor(Math.random() * verses.length);
        verseText.textContent = verses[randomIndex].text;
        verseCite.textContent = verses[randomIndex].cite;
    }

    // ===== HAMBURGER MENU =====
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a nav link is clicked
        var links = navLinks.querySelectorAll('.nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== NAVBAR SHADOW ON SCROLL =====
    var navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ===== SCROLL REVEAL ANIMATION =====
    // Only on screens wider than 768px
    if (window.matchMedia('(min-width: 769px)').matches) {
        var revealElements = document.querySelectorAll(
            '.section-label, .section-title, .about-text, .about-image, .event-card, .contact-info, .contact-form-wrapper'
        );

        for (var j = 0; j < revealElements.length; j++) {
            revealElements[j].style.opacity = '0';
            revealElements[j].style.transform = 'translateY(30px)';
            revealElements[j].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }

        var observer = new IntersectionObserver(function (entries) {
            for (var k = 0; k < entries.length; k++) {
                if (entries[k].isIntersecting) {
                    entries[k].target.style.opacity = '1';
                    entries[k].target.style.transform = 'translateY(0)';
                    observer.unobserve(entries[k].target);
                }
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });

        for (var m = 0; m < revealElements.length; m++) {
            observer.observe(revealElements[m]);
        }
    }

    
  // ===== CONTACT FORM HANDLING =====
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var btn = contactForm.querySelector('.form-btn');
        var originalText = btn.textContent;

        btn.textContent = "Sending...";
        btn.disabled = true;

        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                btn.textContent = "Message Sent! ✓";
                btn.style.background = "#2d2d2d";
                contactForm.reset();
            } else {
                btn.textContent = "Error - Try Again";
                btn.style.background = "#a00000";
            }

            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.background = "#000";
                btn.disabled = false;
            }, 4000);
        })
        .catch(function() {
            btn.textContent = "Network Error";
            btn.style.background = "#a00000";

            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.background = "#000";
                btn.disabled = false;
            }, 4000);
        });
    });
    }
});

