import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/requests';

const submitForm = document.querySelector('.user-form');
const validationEmail = document.querySelector('.validation-text');
const footerFormFrame = document.querySelector('.footer-form-frame');

submitForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value.trim();
  const userComments = event.currentTarget.elements.comments.value.trim();

  if(userEmail){
	validationEmail.style.visibility = 'visible';
	validationEmail.style.color = 'rgba(60, 188, 129, 1)';
	footerFormFrame.style.borderBottomColor = 'rgba(60, 188, 129, 1)'
  }if(!userEmail){
	validationEmail.textContent = 'Invalid email, try again';
	validationEmail.style.visibility = 'visible';
	validationEmail.style.color = 'rgba(231, 74, 59, 1)';
	footerFormFrame.style.borderBottomColor = 'rgba(231, 74, 59, 1)'
  }

  const userData = {
    email: userEmail,
    comment: userComments,
  };

 await sendData(userData);
}

async function sendData(userData){
	try{ 
		const response = await axios.post(`${BASE_URL}${END_POINT}`, userData);
		validationEmail.style.visibility = 'hidden';
		footerFormFrame.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)'
		submitForm.reset();
		const modalSuccess = basicLightbox.create(`
		<div class="modal">
		<h3>Thank you for your interest in cooperation!</h3>
		<p>The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`)
		
		modalSuccess.show()
	} catch(error) {
		const instance = basicLightbox.create(`
		<div class="modal">
		<h2>Please, check your information and try one more time</h2>
		<p>${error.message}</p>
		</div>
		`);

      instance.show();

	}
}