function footer() {
  const maxWidth = +document.querySelector(".menu-footer").dataset.spollersInit || 600;
  const footer = document.querySelector(".footer");

  function footerActions(e) {
    const targetElement = e.target;

    if (targetElement.closest(".menu-footer__title")) {
      if (window.innerWidth > maxWidth) {
        e.preventDefault();
      }
    }
  }

  footer.addEventListener("click", footerActions);

  let spollersInit = (footerSpollers, isOpen) => {
    footerSpollers.forEach((footerSpoller) => {
      footerSpoller.classList.toggle("_init", !isOpen);
      footerSpoller.open = isOpen;
    });
  };

  // Footer Spollers
  const footerSpollers = document.querySelectorAll(".menu-footer__item");

  if (footerSpollers.length) {
    const matchMedia = window.matchMedia(`(max-width: ${maxWidth}px)`);

    spollersInit(footerSpollers, !matchMedia.matches);

    matchMedia.addEventListener("change", () => {
      spollersInit(footerSpollers, !matchMedia.matches);
    });
  }
}

export default footer;