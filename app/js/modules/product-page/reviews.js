function reviewsActions() {
    const reviewsProductItemsEl = document.querySelector('.reviews-product__items');

    const toggleSection = (parentArticleEl, dataType, toggleElClass, show) => {
        const showBtn = parentArticleEl.querySelector(`[${dataType}="show"]`);
        const hideBtn = parentArticleEl.querySelector(`[${dataType}="hide"]`);
        const toggleEl = parentArticleEl.querySelector(toggleElClass);

        showBtn?.classList.toggle('_show', !show);
        hideBtn?.classList.toggle('_show', show);
        toggleEl?.classList.toggle('_show', show);
    };

    const action = (target, currentDataType, toggleElClass) => {
        const btnShow = target.closest(`[${currentDataType}='show']`);
        const btnHide = target.closest(`[${currentDataType}='hide']`);

        if (!btnShow && !btnHide) return;

        const parentEl = (btnShow || btnHide).parentElement;
        const parentArticleEl = parentEl.closest(".item-review");

        const allDataTypes = ['data-review-replies', 'data-review-answers'];

        allDataTypes.forEach(dataType => {
            if (dataType !== currentDataType) {
                toggleSection(parentArticleEl, dataType, 
                    dataType === 'data-review-replies' ? '.answer-form-review' : '.answers-review', 
                    false
                );
            }
        });

        toggleSection(parentArticleEl, currentDataType, toggleElClass, !!btnShow);
    };

    reviewsProductItemsEl.addEventListener("click", function (e) {
        action(e.target, 'data-review-replies', '.answer-form-review');
        action(e.target, 'data-review-answers', '.answers-review');
    });
}

export default reviewsActions;