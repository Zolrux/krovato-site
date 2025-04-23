import Inputmask from "inputmask";

function phoneMask() {
	// Input masks
	const inputPhone = document.querySelector('.buy-click-product__value-input')
	if (inputPhone) {
		Inputmask({
			"mask": "+38099-999-99-99",
			"clearIncomplete": false
		}).mask(inputPhone);
	}
}

export default phoneMask;