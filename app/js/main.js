"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";
import reviewsSlider from "./modules/sliders/reviews-slider";
import articlesNewsSlider from "./modules/sliders/articles-news-slider";
import expandText from "./modules/expand-text";
import footer from "./modules/footer";

import expandCategories from "./modules/catalog-page/expand-categories";

window.addEventListener("load", () => {
  header.headerAction();
  footer();
  
  if (document.querySelector(".page")) {
    homeBannerSlider();
    homeStockSlider();
    reviewsSlider();
    articlesNewsSlider();
    expandText();
  }

  if (document.querySelector(".catalog-page")) {
    expandCategories();
  }

  window.addEventListener("scroll", header.headerScroll);
});