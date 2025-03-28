import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

function articlesNewsSlider() {

    let articlesNewsSliderInstance;

    const initSwiper = () => {
        articlesNewsSliderInstance = new Swiper(".articles-news__slider", {
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

    const checkScreenSize = () => {
        if (window.innerWidth < 768 && articlesNewsSliderInstance) {
            articlesNewsSliderInstance.destroy(true, true);
            articlesNewsSliderInstance = null;
        } else if (window.innerWidth > 767 && !articlesNewsSliderInstance) {
            initSwiper();
        }
    }

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
}

export default articlesNewsSlider;