function tabReviews() {
	const tabsBtn = document.querySelectorAll('.actions-tab-reviews__button');
	const tabsItems = document.querySelectorAll('.reviews-info__items');

	tabsBtn.forEach(function (item) {
		item.addEventListener('click', function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if (!currentBtn.classList.contains('active')) {
				tabsBtn.forEach(function (item) {
					item.classList.remove('active');
				});

				tabsItems.forEach(function (item) {
					item.classList.remove('active');
				});

				currentBtn.classList.add('active');
				currentTab.classList.add('active');
			}
		});
	});
	document.querySelector('.actions-tab-reviews__button').click();
}

export default tabReviews;