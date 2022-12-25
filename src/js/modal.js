(() => {
  const buttons = document.querySelectorAll('[data-modal-id]');
  buttons.forEach(button => {
    button.addEventListener('click', toggleModal);
  });
  function toggleModal() {
    const modal = document.querySelector(`#${this.dataset.modalId}`);
    modal.classList.toggle('is-hidden');
  }
})();
