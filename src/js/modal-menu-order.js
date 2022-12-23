(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-order-open]'),
    closeModalBtn: document.querySelector('[data-menu-order-close]'),
    modal: document.querySelector('[data-menu-order]'),
    newopenModalBtn: document.querySelector('.new-btn-menu-order'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.newopenModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-menu-order');
  }
})();