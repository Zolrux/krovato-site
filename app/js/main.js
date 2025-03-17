"use strict";

import header from "./modules/header";

window.addEventListener("load", () => {
  header.headerAction();

  window.addEventListener("scroll", header.headerScroll);
});