import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

function homeStockSlider() {
    new Swiper(".stock__slider", {
        modules: [Navigation, Autoplay],
        navigation: {
            nextEl: ".stock__btn-next",
            prevEl: ".stock__btn-prev"
        },
        autoplay: {
            delay: 5000
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3
    })
}

export default homeStockSlider;