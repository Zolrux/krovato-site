import { throttle } from "../utils";
import { cartItemQuantityActions } from "./cart-item-quantity";

const header = {
	headerEl: document.querySelector(".header"),
	headerAction: function () {
		let keypressActions = (e) => {
			if (e.key === 'Escape') {
				document.documentElement.classList.remove("catalog-open");
				document.documentElement.classList.remove("cart-open");
				document.querySelector(".contacts-header").classList.remove("--active");
			}
		}
		this.headerEl.addEventListener("keydown", keypressActions);

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

			cartItemQuantityActions(targetElement, e);

		};
		this.headerEl.addEventListener("click", headerActions);
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

		if (this.headerEl && bottomHeader && topHeader) {
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
		let paddingTopForMainEl = 0;

		const handleHeaderEl = () => {
			const mainEl = document.querySelector("main");
			const bottomHeaderEl = document.querySelector('.bottom-header');
			const bottomHeaderFullHeight = bottomHeaderEl.offsetHeight;
			const getPaddingTopFromMainEl = parseFloat(window.getComputedStyle(mainEl).paddingTop);

			paddingTopForMainEl = bottomHeaderFullHeight;

			if (paddingTopForMainEl !== getPaddingTopFromMainEl) {
				mainEl.style.paddingTop = `${paddingTopForMainEl}px`;
			}

			if (window.scrollY > 30) {
				this.headerEl.classList.add("scroll");
			} else {
				this.headerEl.classList.remove("scroll");
			}
		}

		handleHeaderEl();
		window.addEventListener("scroll", handleHeaderEl);
		window.addEventListener("resize", throttle(handleHeaderEl, 200));
	},
	itemsCatalogHeaderList: function() {
		const itemsCatalogHeaderListEl = document.querySelector('.items-catalog-header__list');
		const hasHoverEffectMedia = window.matchMedia(`(min-width: ${991.98 / 16}rem)`);
		let isShow = false;

		const onMouseMove = e => {
			const targetEl = e.target;

			if (itemsCatalogHeaderListEl.classList.contains("--showed")) {
				return;
			}

			if (!isShow && targetEl.closest(".items-catalog-header__item") && !targetEl.closest(".items-catalog-header__sub-menu")) {
				isShow = true;
				setTimeout(() => itemsCatalogHeaderListEl.classList.add("--showed"), 0.3 * 1000);
			}
		};

		const onMouseLeave = e => {
			itemsCatalogHeaderListEl.classList.remove("--showed");
			itemsCatalogHeaderListEl.classList.add("--hid");
			isShow = false;
			setTimeout(() => itemsCatalogHeaderListEl.classList.remove("--hid"), 0.3 * 1000);
		}

		const toggleHoverEffect = () => {
			if (hasHoverEffectMedia.matches) {
				itemsCatalogHeaderListEl.addEventListener("mousemove", onMouseMove);
				itemsCatalogHeaderListEl.addEventListener("mouseleave", onMouseLeave);
			}
			else {
				itemsCatalogHeaderListEl.removeEventListener("mousemove", onMouseMove);
				itemsCatalogHeaderListEl.removeEventListener("mouseleave", onMouseLeave);
			}
		}
		
		toggleHoverEffect();
		hasHoverEffectMedia.addEventListener("change", toggleHoverEffect);
	}
};

export default header;
