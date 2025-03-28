const headerEl = document.querySelector(".header");

const header = {
	headerAction: function () {
		let keypressActions = (e) => {
			if (e.key === 'Escape') {
				document.documentElement.classList.remove("catalog-open");
				document.documentElement.classList.remove("cart-open");
				document.querySelector(".contacts-header").classList.remove("--active");
			}
		}
		headerEl.addEventListener("keydown", keypressActions);

		const headerActions = (e) => {
			const targetElement = e.target;
			const targetTag = targetElement.tagName;
			const initSpoilersWidthForCatalogHeader = window.matchMedia(`(max-width: ${991.98 / 16}rem)`);

			if (isTouchScreen) {
				if (targetElement.closest('.lang-header')) {
					const langHeader = targetElement.closest('.lang-header')
					langHeader.classList.toggle('--active')
				} else {
					document.querySelector('.lang-header').classList.remove('--active')
				}
			}

			if (initSpoilersWidthForCatalogHeader) {
				if (targetElement.closest('.items-catalog-header__more')) {
					const targetItem = targetElement.closest('.items-catalog-header__item');
					const targetActiveItem = document.querySelector('.items-catalog-header__item.--active');
					targetItem.classList.toggle('--active')

					if (targetActiveItem && targetItem !== targetActiveItem) {
						targetActiveItem.classList.remove('--active')
					}
				}
			}

			if (targetElement.closest(".icon-menu")) {
				document.documentElement.classList.toggle("menu-open");
			}

			if (targetElement.closest(".contacts-header")) {
				if (targetTag !== "A") {
					const contactsHeader = targetElement.closest(".contacts-header");
					contactsHeader.classList.toggle("--active");
				}
			} else {
				document.querySelector(".contacts-header").classList.remove("--active");
			}

			if (targetElement.closest(".catalog-header__button")) {
				const itemCatalogMenu = document.querySelector(".items-catalog-header");
				document.documentElement.style.setProperty(
					"--menu-catalog-top",
					`${itemCatalogMenu.getBoundingClientRect().top + 20}px`
				);
				document.documentElement.classList.toggle("catalog-open");
			} else if (!targetElement.closest('.items-catalog-header__wrapper')) {
				document.documentElement.classList.remove("catalog-open");
			}

			if (targetElement.closest(".search-header__open")) {
				document.documentElement.classList.toggle("search-open");
			} else if (!targetElement.closest('.search-header')) {
				document.documentElement.classList.remove("search-open");
			}

			if (targetElement.closest(".actions-body-header__item.actions-body-header__item--cart")) {
				document.documentElement.classList.toggle("cart-open");
			} else if (!targetElement.closest('.cart-header') || targetElement.closest(".cart-header__close")) {
				document.documentElement.classList.remove("cart-open");
			}

			if (targetElement.closest(".quantity__button.quantity__button--minus")) {
				const currentInput = targetElement.closest(".quantity__button.quantity__button--minus").nextElementSibling;
				currentInput.value = currentInput.value - 1 > 0 ? currentInput.value - 1 : 1;
				e.preventDefault();
			} else if (targetElement.closest(".quantity__button.quantity__button--plus")) {
				const currentInput = targetElement.closest(".quantity__button.quantity__button--plus").previousElementSibling;
				currentInput.value = ++currentInput.value;
				e.preventDefault();
			}

		};
		headerEl.addEventListener("click", headerActions);
		const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

		// Move header elements
		const topHeader = document.querySelector('.top-header');
		const bottomHeader = document.querySelector('.bottom-header');
		const catalogHeader = document.querySelector('.catalog-header');
		const searchHeader = document.querySelector('.search-header');
		const contactsHeader = document.querySelector('.contacts-header');
		const actionsHeader = document.querySelector('.actions-body-header');
		const actionsTopHeader = document.querySelector('.actions-top-header');
		const topHeaderContainer = document.querySelector('.top-header__container');
		const bodyHeaderContainer = document.querySelector('.body-header__container');
		const bottomHeaderContainer = document.querySelector('.bottom-header__container');
		const bottomHeaderMenus = document.querySelector('.bottom-header__menus');

		if (headerEl && bottomHeader && topHeader) {
			const matchMedia = window.matchMedia(`(max-width: ${991.98 / 16}rem)`);
			moveHeaderElements();
			matchMedia.addEventListener("change", () => {
				moveHeaderElements()
			});
			function moveHeaderElements() {
				if (matchMedia.matches) {
					topHeaderContainer.insertAdjacentElement("beforeend", bottomHeaderMenus);
					topHeaderContainer.insertAdjacentElement("beforeend", actionsTopHeader);

					bottomHeaderContainer.insertAdjacentElement("beforeend", catalogHeader);
					bottomHeaderContainer.insertAdjacentElement("beforeend", searchHeader);
					bottomHeaderContainer.insertAdjacentElement("beforeend", actionsHeader);
				} else {
					bottomHeaderContainer.insertAdjacentElement("beforeend", bottomHeaderMenus);

					bodyHeaderContainer.insertAdjacentElement("beforeend", catalogHeader);
					bodyHeaderContainer.insertAdjacentElement("beforeend", searchHeader);
					bodyHeaderContainer.insertAdjacentElement("beforeend", contactsHeader);
					bodyHeaderContainer.insertAdjacentElement("beforeend", actionsHeader);
				}
			}
		}
	},
	headerScroll: function () {
		if (window.scrollY > 30) {
			headerEl.classList.add("scroll");
		} else {
			headerEl.classList.remove("scroll");
		}
	},
};

export default header;
