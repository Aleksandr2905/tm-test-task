document.addEventListener('DOMContentLoaded', () => {
  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-element');

  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;

    animateElements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition =
        element.getBoundingClientRect().top + windowTopPosition;
      const elementBottomPosition = elementTopPosition + elementHeight;

      // Check if element is in viewport
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        // Add delay if specified
        const delay = element.getAttribute('data-delay') || 0;
        setTimeout(() => {
          element.classList.add('animated');
        }, delay);
      }
    });
  }

  // Run on load
  checkIfInView();

  // Run on scroll
  window.addEventListener('scroll', checkIfInView);

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');

      // Animate the answer
      const answer = item.querySelector('.faq-answer');
      if (item.classList.contains('active')) {
        answer.style.display = 'block';
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
        setTimeout(() => {
          answer.style.display = 'none';
        }, 300);
      }
    });
  });

  // Pricing Tabs
  const pricingTabs = document.querySelectorAll('.pricing-tab');

  pricingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      pricingTabs.forEach(otherTab => {
        otherTab.classList.remove('active');
      });

      // Add active class to clicked tab
      tab.classList.add('active');

      // Here you would normally switch the pricing plans
      // For this demo, we'll just animate them
      const plans = document.querySelectorAll('.pricing-plan');
      plans.forEach(plan => {
        plan.style.opacity = '0';
        plan.style.transform = 'translateY(20px)';

        setTimeout(() => {
          plan.style.opacity = '1';
          plan.style.transform = 'translateY(0)';
          plan.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 300);
      });
    });
  });

  // Animated Counter for Stats
  const statsValues = document.querySelectorAll('.stats-value');

  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps

    function updateCounter() {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        return;
      }

      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    }

    updateCounter();
  }

  // Start animation when stats section is in view
  //   const statsSection = document.querySelector('.stats');

  //   function checkStatsInView() {
  //     const rect = statsSection.getBoundingClientRect();
  //     const isInView =
  //       rect.top >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight);

  //     if (isInView) {
  //       statsValues.forEach(value => {
  //         const target = Number.parseInt(value.textContent);
  //         animateCounter(value, target, 2000);
  //       });

  //       // Remove event listener after animation starts
  //       window.removeEventListener('scroll', checkStatsInView);
  //     }
  //   }

  //   window.addEventListener('scroll', checkStatsInView);

  // Check on load as well
  //   checkStatsInView();

  // Animated Typing Effect for Hero Title
  //   const heroTitle = document.querySelector('.hero-title');
  //   const originalText = heroTitle.textContent;

  //   function typeWriter(element, text, i = 0) {
  //     if (i === 0) {
  //       element.textContent = '';
  //     }

  //     if (i < text.length) {
  //       element.textContent += text.charAt(i);
  //       i++;
  //       setTimeout(() => typeWriter(element, text, i), 50);
  //     }
  //   }

  // Start typing animation after a short delay
  //   setTimeout(() => {
  //     typeWriter(heroTitle, originalText);
  //   }, 500);

  // Animated Trade Cards in Hero Section
  //   const tradeCards = document.querySelectorAll('.hero-cards .trade-card');

  //   tradeCards.forEach((card, index) => {
  //     setTimeout(() => {
  //       card.style.opacity = '0';
  //       card.style.transform = 'translateX(50px)';

  //       setTimeout(() => {
  //         card.style.opacity = '1';
  //         card.style.transform = 'translateX(0)';
  //         card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  //       }, 100);
  //     }, index * 300);
  //   });

  // Parallax Effect for Hero Section
  //   const hero = document.querySelector('.hero');

  //   window.addEventListener('scroll', () => {
  //     const scrollPosition = window.scrollY;
  //     hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  //   });

  // Animated Hover Effect for Feature Cards
  const featureCards = document.querySelectorAll('.feature-card');

  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });

  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    });
  });
});
