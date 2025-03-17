"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";

window.addEventListener("load", () => {
  header.headerAction();
  homeBannerSlider();

  window.addEventListener("scroll", header.headerScroll);
});