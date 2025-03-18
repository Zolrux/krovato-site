"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";

window.addEventListener("load", () => {
  header.headerAction();
  homeBannerSlider();
  homeStockSlider();

  window.addEventListener("scroll", header.headerScroll);
});