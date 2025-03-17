const headerEl = document.querySelector(".header");

const header = {
  headerAction: function () {
    const headerActions = (e) => {
      const targetElement = e.target;
      const targetTag = targetElement.tagName;

      if (targetElement.closest(".contacts-header")) {
        if (targetTag !== "A") {
          const contactsHeader = targetElement.closest(".contacts-header");
          contactsHeader.classList.toggle("--active");
        }
      } else {
        document.querySelector(".contacts-header").classList.remove("--active");
      }

      if (targetElement.closest(".button-catalog-header")) {
        const itemCatalogMenu = document.querySelector(".items-catalog-header");
        document.documentElement.style.setProperty(
          "--menu-catalog-top",
          `${itemCatalogMenu.getBoundingClientRect().top + 20}px`
        );
        document.documentElement.classList.toggle("catalog-open");
      } else {
        document.documentElement.classList.remove("catalog-open");
      }
    };
    headerEl.addEventListener("click", headerActions);
  },
  headerScroll: function () {
    if (window.scrollY > 1) {
      headerEl.classList.add("scroll");
    } else {
      headerEl.classList.remove("scroll");
    }
  },
};

export default header;
