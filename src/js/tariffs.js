document.addEventListener('DOMContentLoaded', function () {
  let cardsSwapped = false;

  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabIndex = parseInt(this.getAttribute('data-tab'));

      switchTab(tabIndex);
    });
  });

  function switchTab(index) {
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    if (index === 1) {
      if (!cardsSwapped) {
        swapCards();
      }
    } else {
      if (cardsSwapped) {
        swapCards();
      }
    }
  }

  function swapCards() {
    const cardsContainer = document.getElementById('pricing-cards');
    const standardCard = document.getElementById('standard-card');
    const vipCard = document.getElementById('vip-card');

    standardCard.style.opacity = 0;
    vipCard.style.opacity = 0;

    setTimeout(() => {
      if (!cardsSwapped) {
        cardsContainer.insertBefore(vipCard, standardCard);
      } else {
        cardsContainer.insertBefore(standardCard, vipCard);
      }

      cardsSwapped = !cardsSwapped;

      standardCard.style.opacity = 1;
      vipCard.style.opacity = 1;
    }, 300);
  }
});
