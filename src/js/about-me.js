// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
import 'accordion-js/dist/accordion.min.css';
function initializeAccordion() {
    const accordions = document.querySelectorAll('.accordion-container');
    accordions.forEach(acc => {
        new Accordion(acc, {
            duration: 400,
            showMultiple: true,
            onOpen: function(currentElement) {
                console.log(currentElement);
            }
        });
    });
}
