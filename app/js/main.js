"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";
import reviewsSlider from "./modules/sliders/reviews-slider";
import articlesNewsSlider from "./modules/sliders/articles-news-slider";
import expandText from "./modules/expand-text";
import footer from "./modules/footer";

import showHide from "./modules/show-hide";
import filterCatalog from "./modules/catalog-page/filter-catalog";
import dropdownSort from "./modules/catalog-page/dropdown-sort";
import catalogFaqSpoilers from "./modules/spoilers/catalog-faq-spoilers";

window.addEventListener("load", () => {
  
  if (document.querySelector(".page")) {
    homeBannerSlider();
    homeStockSlider();
    reviewsSlider();
    articlesNewsSlider();
    expandText();
  }
  else if (document.querySelector(".catalog-page")) {
    showHide();
    filterCatalog();
    dropdownSort();
    expandText();
    reviewsSlider();
    catalogFaqSpoilers();
  }
  else if (document.querySelector(".about-page")) {
    reviewsSlider();
  }

  // for all pages
  
  header.headerAction();
  footer();
  window.addEventListener("scroll", header.headerScroll);
});