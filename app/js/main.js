"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";
import reviewsSlider from "./modules/sliders/reviews-slider";
import articlesNewsSlider from "./modules/sliders/articles-news-slider";
import expandText from "./modules/expand-text";
import footer from "./modules/footer";

window.addEventListener("load", () => {
  header.headerAction();
  homeBannerSlider();
  homeStockSlider();
  reviewsSlider();
  articlesNewsSlider();
  expandText();
  footer();

  window.addEventListener("scroll", header.headerScroll);
});