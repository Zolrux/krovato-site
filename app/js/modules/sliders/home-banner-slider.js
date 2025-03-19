import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function homeBannerSlider() {
    new Swiper('.home-banner__slider', {
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
            nextEl: '.home-banner__btn-next',
            prevEl: '.home-banner__btn-prev',
        },
        spaceBetween: 20,
        pagination: {
            el: '.home-banner__pagination',
            bulletActiveClass: 'home-banner__pagination-bullet--active',
            bulletClass: 'home-banner__pagination-bullet',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        loop: true
    })
}

export default homeBannerSlider;