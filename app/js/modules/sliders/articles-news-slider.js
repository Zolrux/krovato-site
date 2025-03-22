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
        },
        on: {
            resize: swiper => {
                if (window.innerWidth < 768) {
                    swiper.destroy();
                }
            }
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    })
}

export default articlesNewsSlider;