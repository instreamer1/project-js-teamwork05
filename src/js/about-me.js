

 import Accordion from 'https://cdn.skypack.dev/accordion-js';

  const accordions = Array.from(document.querySelectorAll('.accordion-container'));
   new Accordion(accordions, {
      duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
      console.log(currentElement);
   }
  });

///////////////////////////
// 
import axios from 'axios'
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard, Mousewheel]);

export function initSwiper(containerSelector, options) {
  return new Swiper(containerSelector, options);
}

const swiperAbout = new Swiper('.aboutme-skills-swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    updateOnWindowResize: true,
    slidesPerView: 1,
    enabled: true,
    swipeHandler: '.aboutme-skill',
    speed: 300,
    spaceBetween: 20,
    height: 302,
  
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
        spaceBetween: 16,
      },
    },
  
    navigation: {
      nextEl: '.aboutme-skill-next',
      preventClicks: false,
    },
  });

const BASE_URL = "https://portfolio-js.b.goit.study/api";
const END_POINT = "/reviews";

const url = `${BASE_URL}${END_POINT}`;

let currentId = 1;


const selectors = {
    container: document.querySelector(".aboutme-skills"),
    btnNext: document.querySelector(".aboutme-skill-next")

}


getAbout(currentId)
.then ((data) => {
    selectors.container.innerHTML = '';
    selectors.container.insertAdjacentHTML("beforeend", createMarkup(data))
                })
.catch ((error) => {console.log(error);
iziToast.error({
    title: 'Error',
    message: 'Not found',
});
})


async function getAbout (id) {
    const { data } = await axios.get (url, {params: { id }})
    return data;
}

function createMarkup(arr) {
    return arr.map(({ _id, button }) => `
        <li class="aboutme-skill" data="${_id}">
            <button class="aboutme-skill-next-button" data="${button}">
                <svg class="aboutme-skill-nex">
                    <use href="./img/svg_sprite-opt.svg#icon-arrows-right"></use>
                </svg>
            </button>
        </li>
    `).join("");
}
