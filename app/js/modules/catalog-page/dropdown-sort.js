function dropdownSort() {
    const dropdownBtnTrigger = document.querySelector('.sort-dropdown-catalog__btn');
    const dropdownList = document.querySelector('.sort-dropdown-catalog__list');

    dropdownBtnTrigger.addEventListener("click", function (e) {
        dropdownBtnTrigger.classList.toggle("sort-dropdown-catalog__btn--active");
        dropdownList.classList.toggle("sort-dropdown-catalog__list--showed");
    });

    dropdownList.addEventListener("click", function (e) {
        const target = e.target;

        if (target.closest(".sort-dropdown-catalog__item-btn")) {
            const targetItemBtn = target.closest(".sort-dropdown-catalog__item-btn");
            const targetItemBtnDataValue = targetItemBtn.dataset.sortValue;
            const itemsBtn = dropdownList.querySelectorAll(".sort-dropdown-catalog__item-btn");

            itemsBtn.forEach(itemBtn => itemBtn.classList.remove("sort-dropdown-catalog__item-btn--selected"));
            targetItemBtn.classList.add("sort-dropdown-catalog__item-btn--selected");
            dropdownBtnTrigger.classList.remove("sort-dropdown-catalog__btn--active");
            dropdownList.classList.remove("sort-dropdown-catalog__list--showed");

            dropdownBtnTrigger.innerHTML = targetItemBtnDataValue;
            dropdownBtnTrigger.dataset.sortSelected = targetItemBtnDataValue;
        }
    });
}

export default dropdownSort;