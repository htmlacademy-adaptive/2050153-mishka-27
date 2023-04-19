  const modalButtons = document.querySelectorAll('.modal-button');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__button');
  const modalFormInput = document.querySelector('.modal__form-group-input');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add('is-open');
    modalFormInput.focus();
  };

  const onModalCloseButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.remove('is-open');
  };

  const onModalClick = (evt) => {
    if (evt.target === modal) {
      modal.classList.remove("is-open");
    }
  };

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('is-open');
    }
  };

  modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeydown);
