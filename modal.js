const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.btn-open');
const modalBtnClose = document.querySelector('.btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);