import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

function articlesNewsSlider() {
    new Swiper(".articles-news__slider", {
        modules: [Navigation, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        rewind: true,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: ".articles-news__btn-next",
            prevEl: ".articles-news__btn-prev"
        }
    })
}

export default articlesNewsSlider;