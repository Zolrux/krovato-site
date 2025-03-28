function footer() {
	const maxWidth = +document.querySelector(".menu-footer").dataset.spollersInit || 600;
	const menuFooter = document.querySelector('.menu-footer');
	const footer = document.querySelector(".footer");

	function footerActions(e) {
		const targetElement = e.target;

		if (targetElement.closest(".menu-footer__title")) {
			if (window.innerWidth <= maxWidth) {
				if (!menuFooter.querySelectorAll('._slide').length) {
					const footerActiveSpoller = document.querySelector(".menu-footer__item[open]");
					const footerSpollerTitle = targetElement.closest(".menu-footer__title");
					if (footerActiveSpoller && footerActiveSpoller !== targetElement.closest(".menu-footer__item")) {
						spollersAnim(footerActiveSpoller.querySelector(".menu-footer__title"), false);
					}
					spollersAnim(footerSpollerTitle);
				}
			}
			e.preventDefault();
		}
	}

	footer.addEventListener("click", footerActions);

	let spollersInit = (footerSpollers, isOpen) => {
		footerSpollers.forEach((footerSpoller) => {
			const footerSpollerTitle = footerSpoller.querySelector(".menu-footer__title");

			footerSpoller.classList.toggle("_init", !isOpen);
			isOpen ? footerSpollerTitle.setAttribute("tabindex", "-1") : footerSpollerTitle.removeAttribute("tabindex");
			footerSpoller.open = isOpen;
		});
	};

	let spollersAnim = (footerSpollerTitle, action) => {
		const footerSpoller = footerSpollerTitle.closest(".menu-footer__item");
		const footerSpollerBody = footerSpollerTitle.nextElementSibling;

		let spollersAnimClose = () => {
			if (!menuFooter.classList.contains('_slide')) {
				footerSpollerTitle.classList.add('_slide');
				const footerSpollerBodyHeight = footerSpollerBody.scrollHeight;

				footerSpollerBody.style.height = `${footerSpollerBodyHeight}px`;
				footerSpollerBody.style.overflow = 'hidden';
				footerSpollerBody.offsetHeight;

				footerSpollerBody.style.transition = 'height 0.8s ease, padding 0.8s ease';
				footerSpollerBody.style.height = `0px`;
				footerSpollerBody.style.paddingTop = '0';
				footerSpollerBody.style.paddingBottom = '0';

				setTimeout(() => {
					footerSpoller.open = false;
					footerSpollerBody.style.removeProperty('height');
					footerSpollerBody.style.removeProperty('overflow');
					footerSpollerBody.style.removeProperty('transition');
					footerSpollerBody.style.removeProperty('padding-top');
					footerSpollerBody.style.removeProperty('padding-bottom');
					footerSpollerTitle.classList.remove('_slide');
				}, 800);
			}
		};

		let spollersAnimOpen = () => {
			if (!menuFooter.classList.contains('_slide')) {
				footerSpollerTitle.classList.add('_slide');
				footerSpoller.open = true;
				const footerSpollerBodyHeight = footerSpollerBody.scrollHeight;

				footerSpollerBody.style.height = '0px';
				footerSpollerBody.style.overflow = 'hidden';
				footerSpollerBody.style.transition = 'height 0.8s ease';
				footerSpollerBody.offsetHeight;

				footerSpollerBody.style.height = `${footerSpollerBodyHeight}px`;

				setTimeout(() => {
					footerSpollerBody.style.removeProperty('height');
					footerSpollerBody.style.removeProperty('overflow');
					footerSpollerBody.style.removeProperty('transition');
					footerSpollerTitle.classList.remove('_slide');
				}, 800);
			}
		};

		if (action !== undefined) {
			action ? spollersAnimOpen() : spollersAnimClose();
		}

		footerSpoller.open ? spollersAnimClose() : spollersAnimOpen();
	}


	// Footer Spollers
	const footerSpollers = document.querySelectorAll(".menu-footer__item");

	if (footerSpollers.length) {
		const matchMedia = window.matchMedia(`(max-width: ${maxWidth / 16}em)`);

		spollersInit(footerSpollers, !matchMedia.matches);

		matchMedia.addEventListener("change", () => {
			spollersInit(footerSpollers, !matchMedia.matches);
		});
	}

	// Move Footer Logo
	const footerLogo = document.querySelector('.social-footer__logo');
	const footerContainer = document.querySelector('.footer__container');
	const footerSocial = document.querySelector('.social-footer');
	if (footerLogo) {
		const matchMedia = window.matchMedia(`(max-width: ${767.98 / 16}em)`);
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