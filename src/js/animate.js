document.addEventListener('DOMContentLoaded', () => {
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

      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        const delay = element.getAttribute('data-delay') || 0;
        setTimeout(() => {
          element.classList.add('animated');
        }, delay);
      }
    });
  }

  checkIfInView();

  window.addEventListener('scroll', checkIfInView);
});
