let buttonCall = document.querySelector('#button__call');
let buttonClose = document.querySelector('#button__close');
let modal = document.querySelector('#modal');

buttonCall.addEventListener('click', function() {
  modal.classList.add('modal_active')
  setTimeout(autoClose, 5000);
})

buttonClose.addEventListener('click', function() {
  modal.classList.remove('modal_active')
})

function autoClose() {
  modal.classList.remove('modal_active')
}


