import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function homeStockSlider() {
    new Swiper(".stock__slider", {
        modules: [Navigation, Autoplay, Pagination],
        navigation: {
            nextEl: ".stock__btn-next",
            prevEl: ".stock__btn-prev"
        },
        pagination: {
            el: ".stock__slider-pagination",
            bulletActiveClass: 'stock__slider-pagination-bullet--active slider-pagination__bullet--active',
            bulletClass: 'stock__slider-pagination-bullet slider-pagination__bullet',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            560: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3
            }
        }
    })
}

export default homeStockSlider;