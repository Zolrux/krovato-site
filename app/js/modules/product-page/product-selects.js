function productSelects() {
    const productSelectSizeEl = document.querySelector('#size');
    const productSelectLamelEl = document.querySelector('#lamel');

    NiceSelect.bind(productSelectSizeEl, {
        placeholder: "Виберіть"
    });
    NiceSelect.bind(productSelectLamelEl, {
        placeholder: "Виберіть"
    });
}

export default productSelects;