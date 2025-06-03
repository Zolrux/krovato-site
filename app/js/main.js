"use strict";

import header from "./modules/header";
import homeBannerSlider from "./modules/sliders/home-banner-slider";
import homeStockSlider from "./modules/sliders/home-stock-slider";
import reviewsSlider from "./modules/sliders/reviews-slider";
import articlesNewsSlider from "./modules/sliders/articles-news-slider";
import expandText from "./modules/expand-text";
import footer from "./modules/footer";
import faqSpoilers from "./modules/faq-spoilers";

import showHide from "./modules/show-hide";
import filterCatalog from "./modules/catalog-page/filter-catalog";
import dropdownSort from "./modules/catalog-page/dropdown-sort";

import productSliders from "./modules/sliders/product-sliders";
import productSelects from "./modules/product-page/product-selects";
import phoneMask from "./modules/product-page/phone-mask";
import moveElements from "./modules/product-page/move-elements";

import deliveryToggle from "./modules/checkout-page/delivery-toggle";
import { cartOrderItemQuantity } from "./modules/cart-item-quantity";

import tabReviews from "./modules/reviews-page/tab-reviews";

import initMap from "./modules/map";

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
    faqSpoilers();
  }
  else if (document.querySelector(".product-page")) {
    productSliders();
    productSelects();
    showHide();
    phoneMask();
    moveElements();
  }
  else if (document.querySelector(".checkout-page")) {
    deliveryToggle();
    cartOrderItemQuantity();
    showHide();
  }
  else if (document.querySelector(".about-page")) {
    reviewsSlider();
  }
  else if (document.querySelector(".payment-page")) {
	  faqSpoilers();
  }
  else if (document.querySelector(".delivery-page")) {
    faqSpoilers();
  }
  else if (document.querySelector(".reviews-page")) {
    tabReviews();
  }
  else if (document.querySelector(".contacts-page")) {
    initMap();
  }

  // for all pages
  
  header.headerAction();
  header.headerScroll();
  header.itemsCatalogHeaderList();
  header.catalogActions();
  footer();
});