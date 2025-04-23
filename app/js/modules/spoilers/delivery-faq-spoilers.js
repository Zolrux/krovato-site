import Accordion from 'accordion-js';
import spoilersConfig from './spoilers-config';

function deliveryFaqSpoilers() {
    new Accordion('.delivery-faq__items', spoilersConfig);
}

export default deliveryFaqSpoilers;
