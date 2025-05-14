function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  // Hero form handling
  const formButton = document.querySelector('header div > div > button');
  formButton.addEventListener('click', () => {
    const emailInput = document.querySelector('header input[type="email"]');
    if (emailInput.value) {
      alert('Thank you for joining! We’ll keep you updated.');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });

  // Hero shine randomization
  const heroShines = document.querySelectorAll('header .shine');
  heroShines.forEach(shine => {
    const offsetX = Math.random() * 10 - 5;
    const offsetY = Math.random() * 10 - 5;
    shine.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
  });

  // About slider handling
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
    // Features tab handling
    const tabButtons = document.querySelectorAll('.tab-button');
    const featureCards = document.querySelectorAll('.feature-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show relevant content
            featureCards.forEach((card, index) => {
                if (card.getAttribute('data-tab') === tab || (tab === 'industry' && index < 3)) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // On-scroll animation with Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const delay = parseFloat(entry.target.style.animationDelay || '0s');
                entry.target.style.transitionDelay = delay + 's';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.2) + 's';
        observer.observe(card);
    });

    // Initialize with Industry tab active
    tabButtons[0].click();
});
document.addEventListener('DOMContentLoaded', () => {
    // Blog card flip and shimmer handling
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const shimmer = document.createElement('div');
            shimmer.className = 'shimmer';
            shimmer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(45, 58, 102, 0.3) 0%, transparent 70%);
                animation: shimmer 1.5s infinite;
                pointer-events: none;
            `;
            card.appendChild(shimmer);
            setTimeout(() => shimmer.remove(), 1500);
        });
    });

    // Image fade-in on scroll
    const images = document.querySelectorAll('.parallax-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => observer.observe(image));
});
document.addEventListener('DOMContentLoaded', () => {
    // On-scroll animation for pricing section
    const pricingHeroes = document.querySelectorAll('.pricing-hero');
    const pricingCards = document.querySelectorAll('.pricing-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    pricingHeroes.forEach(hero => observer.observe(hero));
    pricingCards.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.2) + 's';
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // On-scroll animation for contact section
    const contactHeroes = document.querySelectorAll('.contact-hero');
    const formCard = document.querySelector('.form-card');
    const infoCard = document.querySelector('.info-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contactHeroes.forEach(hero => observer.observe(hero));
    if (formCard) {
        formCard.style.transitionDelay = '0s';
        observer.observe(formCard);
    }
    if (infoCard) {
        infoCard.style.transitionDelay = '0.2s';
        observer.observe(infoCard);
    }
});