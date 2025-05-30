import Accordion from "accordion-js";

function footer() {
	const maxWidth = +document.querySelector(".menu-footer").dataset.spollersInit || 600;
	const menuFooter = document.querySelector('.menu-footer');
	const menuFooterDetailItems = document.querySelectorAll('.menu-footer__item');
	const menuFooterSummaryItems = document.querySelectorAll('.menu-footer__title');
	const spollersInitMedia = window.matchMedia(`(max-width: ${maxWidth / 16}rem)`);
	let footerMenuSpollersInstance = null;

	menuFooterSummaryItems.forEach(menuFooterSummaryItem => {
		menuFooterSummaryItem.addEventListener("click", function (e) {
			e.preventDefault();
		});
	})

	const spollersInit = () => {
		if (spollersInitMedia.matches && !footerMenuSpollersInstance) {
			
			footerMenuSpollersInstance = new Accordion(".menu-footer", {
				elementClass: "menu-footer__item",
				triggerClass: "menu-footer__title",
				panelClass: "menu-footer__nav",
				beforeOpen: currentElement => {
					currentElement.setAttribute("open", "");
				},
				onClose: currentElement => {
					currentElement.removeAttribute("open");
				}
			})
			menuFooter.classList.add("_init");
			menuFooterDetailItems.forEach(menuFooterDetailItem => menuFooterDetailItem.removeAttribute("open"));
		}
		else {
			if (!footerMenuSpollersInstance) return;

			footerMenuSpollersInstance.destroy();
			footerMenuSpollersInstance = null;
			menuFooter.classList.remove("_init");
			menuFooterDetailItems.forEach(menuFooterDetailItem => menuFooterDetailItem.setAttribute("open", ""));
		}
	}

	spollersInit();
	spollersInitMedia.addEventListener("change", spollersInit);

	// Move Footer Logo
	const footerLogo = document.querySelector('.social-footer__logo');
	const footerContainer = document.querySelector('.footer__container');
	const footerSocial = document.querySelector('.social-footer');
	if (footerLogo) {
		const matchMedia = window.matchMedia(`(max-width: ${767.98 / 16}rem)`);
		moveFooterElements()
		matchMedia.addEventListener("change", () => {
			moveFooterElements()
		});

		function moveFooterElements() {
			// change of tab indexation
			matchMedia.matches ? footerContainer.insertAdjacentElement("beforeend", footerSocial) : footerContainer.insertAdjacentElement("afterbegin", footerSocial);
			// change logo position
			matchMedia.matches ? footerContainer.insertAdjacentElement("afterbegin", footerLogo) : footerSocial.insertAdjacentElement("afterbegin", footerLogo);
		}
	}
}

export default footer;