(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    modalItems: document.querySelectorAll('.mobile-menu__nav-item'),
    btnItems: document.querySelectorAll('.mobile-menu__buttons > *'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalItems.forEach(item => {
    item.addEventListener('click', toggleModal);
  });
  refs.btnItems.forEach(item => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('mobile-menu__is-hidden');
  }
})();
