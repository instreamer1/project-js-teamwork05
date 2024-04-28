import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const accordions = Array.from(document.querySelectorAll('.accordion-container'));
new Accordion(accordions, {duration: 800,
    showMultiple: true
  });