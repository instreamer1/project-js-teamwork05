// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
// import Accordion from 'https://cdn.skypack.dev/accordion-js';
import Accordion from 'https://cdn.skypack.dev/accordion-js';
// import 'https://cdn.skypack.dev/accordion-js/dist/accordion.min.css';



const accordions = Array.from(document.querySelectorAll('.accordion-container'));
new Accordion(accordions, {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
    console.log(currentElement);
  }
});




/////////////////////////////
