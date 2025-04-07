import Accordion from "accordion-js";
import noUiSlider from 'nouislider';

function filterCatalog() {

    let isInitGlobalFilterCatalogAccordion = false;
    let filterCatalogAccordionInstance = null;
    let resizeTimeoutId;

    const initGlobalFilterCatalogAccordion = () => {
        clearTimeout(resizeTimeoutId);

        resizeTimeoutId = setTimeout(() => {
            if (window.innerWidth <= 1024 && !isInitGlobalFilterCatalogAccordion) {
                filterCatalogAccordionInstance = new Accordion(".filter-catalog", {
                    elementClass: "filter-catalog__content",
                    triggerClass: "filter-catalog__trigger",
                    panelClass: "filter-catalog__body",
                    openOnInit: [0],
                });

                isInitGlobalFilterCatalogAccordion = true;
            } else if (window.innerWidth > 1024) {

                if (!isInitGlobalFilterCatalogAccordion) return;

                if (filterCatalogAccordionInstance) {
                    filterCatalogAccordionInstance.destroy();
                    filterCatalogAccordionInstance = null;
                    isInitGlobalFilterCatalogAccordion = false;
                }
    
            }
        }, 200);
    };

    initGlobalFilterCatalogAccordion();

    window.addEventListener("resize", initGlobalFilterCatalogAccordion);

    // filter accodion for all devices

    new Accordion(".body-filter-catalog", {
        triggerClass: "body-filter-catalog__accordion-trigger",
        showMultiple: true,
        openOnInit: [0, 1, 2, 3, 4]
    })

    // range slider

    const filterRangeSlider = document.querySelector(".body-filter-catalog__range-slider");
    const inputMinPrice = document.querySelector(".body-filter-catalog__input--min");
    const inputMaxPrice = document.querySelector(".body-filter-catalog__input--max");

    noUiSlider.create(filterRangeSlider, {
        start: [1195, 9566],
        connect: true,
        range: {
            'min': 0,
            'max': 16500
        },
        format: {
            to: value => {
                return value.toFixed(0);
            },
            from: value => {
                return parseInt(value);
            }
        }
    });

    filterRangeSlider.noUiSlider.on("update", (values, _) => {
        const [minPrice, maxPrice] = values.map(Number);

        inputMinPrice.value = minPrice;
        inputMaxPrice.value = maxPrice;
    });

    inputMinPrice.addEventListener('input', function () {
        filterRangeSlider.noUiSlider.set([this.value, null]);
    });

    inputMaxPrice.addEventListener('input', function () {
        filterRangeSlider.noUiSlider.set([null, this.value]);
    });
}

export default filterCatalog;