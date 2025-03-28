import Swiper from "swiper";
import { Scrollbar, Pagination, Autoplay } from "swiper/modules";

function reviewsSlider() {
    new Swiper(".reviews__slider", {
        modules: [Scrollbar, Pagination, Autoplay],
        spaceBetween: 30,
        scrollbar: {
            el: ".reviews__slider-scrollbar",
            draggable: true,
            dragClass: "reviews__slider-scrollbar-drag",
            dragSize: 60,
        },
        pagination: {
            el: ".reviews__slider-pagination",
            bulletClass: "reviews__slider-pagination slider-pagination__bullet",
            bulletActiveClass: "reviews__slider-pagination--active slider-pagination__bullet--active",
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        on: {
            resize: swiper => {
                if (window.innerWidth < 560) {
                    swiper.autoplay.start();
                } else {
                    swiper.autoplay.stop();
                }
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            560: {
                slidesPerView: 'auto',
            }
        }
    })
}

export default reviewsSlider;