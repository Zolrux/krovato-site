import TransferElements from 'transfer-elements';

function moveElements() {
	new TransferElements(
		{
			sourceElement: document.querySelector('.body-product__title'),
			breakpoints: {
				1239.98: {
					targetElement: document.querySelector('.main-product__container'),
					targetPosition: 0
				}
			},
			sourceElement: document.querySelector('.actions-product__favorite'),
			breakpoints: {
				579.98: {
					targetElement: document.querySelector('.body-product__actions'),
					targetPosition: 3
				}
			}
		}
	);
}

export default moveElements;