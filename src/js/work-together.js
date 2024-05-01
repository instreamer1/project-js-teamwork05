import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { openModal } from './modal'

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/requests';

const submitForm = document.querySelector('.user-form');
const emailInput = document.querySelector('.footer-submit-input');
const validationEmail = document.querySelector('.validation-text');
const footerFormFrame = document.querySelector('#icon-vector');

submitForm.addEventListener('submit', handleSubmit);

emailInput.addEventListener('input', () => {
  limitText(emailInput, 40); 
});

emailInput.addEventListener('input', function(event) {
  if (emailInput.value === "" || !emailInput.checkValidity()) {
    document.documentElement.style.setProperty('--color1', 'rgba(231, 74, 59, 1)');
    validationEmail.textContent = 'Invalid email, try again';
    validationEmail.style.visibility = 'visible';
    validationEmail.style.color = 'rgba(231, 74, 59, 1)';
  } if(emailInput.checkValidity()) {
    document.documentElement.style.setProperty('--color1', 'rgba(60, 188, 129, 1)');
    validationEmail.textContent = 'Success!';
    validationEmail.style.visibility = 'visible';
    validationEmail.style.color = 'rgba(60, 188, 129, 1)';
  }
});

function limitText(input, maxLength) {
  if (input.value.length > maxLength) {
    const originalText = input.value.substring(0, maxLength); 
    const encryptedText = input.value.substring(maxLength).replace(/./g, '.'); 
    input.value = originalText + encryptedText;
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value.trim();
  const userComments = event.currentTarget.elements.comments.value.trim();

  const userData = {
    email: userEmail,
    comment: userComments,
  };
  await sendData(userData);
}

async function sendData(userData) {
  try {
    const response = await axios.post(`${BASE_URL}${END_POINT}`, userData);
    validationEmail.style.visibility = 'hidden';
    document.documentElement.style.setProperty('--color1', '#fafafa');
    submitForm.reset();
    openModal();
    
  } catch (error) {
    const instance = basicLightbox.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${error.message}</p>
		</div>
		`);

    instance.show();
  }
}
