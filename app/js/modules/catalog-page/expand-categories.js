function expandCategories() {
    const listCategoryBody = document.querySelector('.list-category__body');
    const listCategoryItems = document.querySelector('.list-category__items');
    const listCategoryButton = document.querySelector('.list-category__button');
    const listCategoryItemsDefaultHeight = listCategoryItems.offsetHeight;
    const listCategoryItemsFullHeight = listCategoryItems.scrollHeight;

    let isShow = false;

    listCategoryButton.addEventListener("click", function (e) {
        const buttonTextShow = listCategoryButton.querySelector('.list-category__button-text--show');
        const buttonTextHide = buttonTextShow.nextElementSibling;

        listCategoryBody.classList.toggle("list-category__body--showed");
        listCategoryItems.classList.toggle("list-category__items--margin-bottom");
        buttonTextShow.classList.toggle("list-category__button-text--active");
        buttonTextHide.classList.toggle("list-category__button-text--active");

        if (!isShow) {
            listCategoryItems.style.maxHeight = `${listCategoryItemsFullHeight}px`;
            listCategoryBody.style.setProperty("--opacity", 0);
            listCategoryBody.style.setProperty("--visibilty", "hidden");
            
        } else {
            listCategoryItems.style.maxHeight = `${listCategoryItemsDefaultHeight}px`;
            listCategoryBody.style.setProperty("--opacity", 1);
            listCategoryBody.style.setProperty("--visibilty", "visible");
        }

        isShow = !isShow;
    });
}

export default expandCategories;