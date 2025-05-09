import Accordion from 'accordion-js';

function faqSpoilers() {
    new Accordion('.faq__items', {
        elementClass: 'item-faq',
        triggerClass: 'item-faq__title',
        panelClass: 'item-faq__text',
        activeClass: 'is-active',
        openOnInit: [1]
    });
}

export default faqSpoilers;