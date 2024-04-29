import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Mousewheel, Navigation} from 'swiper/modules';

const swiper = new Swiper('.swiper-container', {

  modules: [Keyboard, Mousewheel, Navigation],
  speed: 500,
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 16,  

  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      spaceBetween: 32,
    },
  },

});
