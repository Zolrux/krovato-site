"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";
import reviewsSlider from "./modules/sliders/reviews-slider";

window.addEventListener("load", () => {
  header.headerAction();
  homeBannerSlider();
  homeStockSlider();
  reviewsSlider();

  window.addEventListener("scroll", header.headerScroll);
});