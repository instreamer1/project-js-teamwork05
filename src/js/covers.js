import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// swiper.js

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiperReviews = new Swiper('.reviews-wrapper', {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  updateOnWindowResize: true,
  slidesPerView: 1,
  enabled: true,
  swipeHandler: '.reviews-item',
  speed: 300,
  spaceBetween: 20,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },

    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    preventClicks: false,
  },
});

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';

const url = `${BASE_URL}${END_POINT}`;

let currentId = 1;

const selectors = {
  container: document.querySelector('.reviews-list'),
  btnPrev: document.querySelector('.swiper-button-prev'),
  btnNext: document.querySelector('.swiper-button-next'),
};

getReviews(currentId)
  .then(data => {
    console.log(data);

    selectors.container.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(error => {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: 'Not found',
    });
  });

async function getReviews(id) {
  const { data } = await axios.get(url, { params: { id } });
  return data;
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, author, avatar_url, review }) => `
    
    <li class="reviews-item swiper-slide" data="${_id}">
    <img class="reviews-img" src="${avatar_url}" alt="${author}"/>
    
    <p class="reviews-text">${review}</p>
    <h2 class="reviews-subtitle">${author}</h2>

    </li>
    
    `
    )
    .join('');
}

const coversSection = document.querySelector('.covers');

// Function to check the visibility of a section in a viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start animation
function animateCovers() {
  const marqueeLines = document.querySelectorAll('.marquee__line');
  marqueeLines.forEach(line => {
    line.style.animationName = 'marqueeLine';
  });
}

// Page scroll event handler
window.addEventListener('scroll', () => {
  if (coversSection && isInViewport(coversSection)) {
    animateCovers();
  }
});
