import Accordion from 'accordion-js';
import spoilersConfig from './spoilers-config';

function paymentInfoFaqSpoilers() {
	new Accordion('.faq__items', spoilersConfig);
}

export default paymentInfoFaqSpoilers;