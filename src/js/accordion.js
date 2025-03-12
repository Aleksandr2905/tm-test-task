document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.faq__accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
