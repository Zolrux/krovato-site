function cartItemQuantityActions(targetElement, e) {
    if (targetElement.closest(".quantity__button.quantity__button--minus")) {
        const currentInput = targetElement.closest(".quantity__button.quantity__button--minus").nextElementSibling;
        currentInput.value = currentInput.value - 1 > 0 ? currentInput.value - 1 : 1;
        e.preventDefault();
    } else if (targetElement.closest(".quantity__button.quantity__button--plus")) {
        const currentInput = targetElement.closest(".quantity__button.quantity__button--plus").previousElementSibling;
        currentInput.value = currentInput.value > 0 && ++currentInput.value || 1;
        e.preventDefault();
    }
}

function cartOrderItemQuantity() {
    const cartOrderItems = document.querySelector('.cart-order__items');

    cartOrderItems.addEventListener("click", function (e) {
        const targetElement = e.target;
        cartItemQuantityActions(targetElement, e);
    });
}

export { cartItemQuantityActions, cartOrderItemQuantity }