import Accordion from 'accordion-js';
import spoilersConfig from './spoilers-config';

function catalogFaqSpoilers() {
	new Accordion('.faq__items', spoilersConfig);
}

export default catalogFaqSpoilers;
