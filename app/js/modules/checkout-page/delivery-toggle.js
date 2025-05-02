function deliveryToggle() {
    const orderTypeRadios = document.querySelectorAll('.order-type__radio');

    orderTypeRadios.forEach(orderTypeRadio => {
        orderTypeRadio.addEventListener("change", function (e) {
            
            if (orderTypeRadio.checked) {
                const radioOrderName = orderTypeRadio.dataset.radioOrderName;
                const infoFormOrders = document.querySelectorAll(`.info-form-order`);
                const infoFormOrder = document.querySelector(`[data-radio-order-info="${radioOrderName}"]`);

                infoFormOrders.forEach(_infoFormOrder => {
                    _infoFormOrder.classList.remove("info-form-order--showed");
                });

                infoFormOrder.classList.add("info-form-order--showed");
            }
        });
    })
}

export default deliveryToggle;