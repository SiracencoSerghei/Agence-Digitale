(() => {
  const buttons = document.querySelectorAll('[data-modal-id]');
  buttons.forEach(button => {
    button.addEventListener('click', toggleModal);
  });
  function toggleModal() {
    const modal = document.querySelector(`#${this.dataset.modalId}`);
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
})();
