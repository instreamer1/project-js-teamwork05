import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionPanels = document.querySelector('.accordion-panel');
const firstContainer = document.querySelector('.about-us');
const firstIcon = document.querySelector('.mobile-open-us');

accordionPanels.style.maxHeight = '100%';
firstContainer.classList.add('active');
firstIcon.style.transform = 'rotate(180deg)';

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = header.closest('.about-us');
    const panel = accordionItem.querySelector('.accordion-panel');
    const icon = header.querySelector('.mobile-open-us');

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    } else {
      panel.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

// Swiper
const swiperAbout = new Swiper('.about-swiper-container', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',

  navigation: {
    nextEl: '.about-swiper-button',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

document.querySelector('.about-swiper-button').addEventListener('click', () => {
  swiperAbout.slideNext();
});
