'use strict';

const openBtns = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// console.log(openBtns, closeBtn, overlay, modal);

// const modalOpen = () => {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

const modalClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const toggleModal = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
openBtns.forEach((element) => {
  element.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);
});

//    To close the modal on pressing the escape key we need to use and event called keydown

document.addEventListener('keydown', (e) => {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
