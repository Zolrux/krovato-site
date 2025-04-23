import Swiper from "swiper";
import { Navigation, Autoplay, Thumbs, Mousewheel  } from "swiper/modules";

function productSliders() {
	const thumbsSlider = new Swiper('.previews-slider-product', {
		modules: [Thumbs, Mousewheel],
		slidesPerView: 5,
		spaceBetween: 20,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 4.5,
				spaceBetween: 10
			},
			580: {
				slidesPerView: 5,
				spaceBetween: 20
			}
		},
		mousewheel: {
			sensitivity: 1,
			eventsTarget: '.previews-slider-product'
		}
	});

	new Swiper('.main-slider-product', {
		modules: [Navigation, Autoplay, Thumbs, Mousewheel],
		navigation: {
			nextEl: '.main-slider-product__arrow--next',
			prevEl: '.main-slider-product__arrow--prev',
		},
		spaceBetween: 20,
		autoplay: {
			delay: 5000
		},
		thumbs: {
			swiper: thumbsSlider,
		},
		rewind: true
	});
}

export default productSliders;