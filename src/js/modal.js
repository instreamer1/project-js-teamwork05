const backdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', function(event) {
  if(event.target === event.currentTarget){
    closeModal();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.contains(event.target)) {
    closeModal();
  }
});

export function openModal() {
  backdrop.classList.remove('is-hidden');
}

export function closeModal(event) {
  backdrop.classList.add('is-hidden');
}