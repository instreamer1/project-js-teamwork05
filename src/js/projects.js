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

const firstSlide = document.getElementById('slide1');
const secondSlide = document.getElementById('slide2');
const thirdSlide = document.getElementById('slide3');

firstSlide.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    swiper.slideNext();
  }
});

secondSlide.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' && event.shiftKey) {
    event.preventDefault();
    swiper.slidePrev();
  } else if (event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    swiper.slideNext();
  }
});

thirdSlide.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' && event.shiftKey) {
    event.preventDefault();
    swiper.slidePrev();
  }
});




