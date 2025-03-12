import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";

function reviewsSlider() {
    new Swiper(".reviews__slider", {
        modules: [Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        scrollbar: {
            el: ".reviews__slider-scrollbar",
            draggable: true,
            dragClass: "reviews__slider-scrollbar-drag",
            dragSize: 60,
        }
    })
}

export default reviewsSlider;