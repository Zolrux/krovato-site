import { throttle } from "../utils";

function showHide() {
    const showHideWrapper = document.querySelector('[data-show-hide-wrapper]');
    const showHideContent = document.querySelector('[data-show-hide-content]');
    const showHideBtn = document.querySelector('[data-show-hide-btn]');
    const showHideWrapperClass = showHideWrapper.classList.item(0);
    const showHideContentClass = showHideContent.classList.item(0);
    const showHideContentDefaultHeight = showHideContent.offsetHeight;
    
    let isShow = false;

    const setContentHeight = () => {
        const showHideContentFullHeight = showHideContent.scrollHeight;
        
        if (isShow) {
            requestAnimationFrame(() => showHideContent.style.maxHeight = `${showHideContentFullHeight}px`);
            showHideWrapper.style.setProperty("--opacity", 0);
            showHideWrapper.style.setProperty("--visibilty", "hidden");
        } else {
            requestAnimationFrame(() => showHideContent.style.maxHeight = `${showHideContentDefaultHeight}px`);
            showHideWrapper.style.setProperty("--opacity", 1);
            showHideWrapper.style.setProperty("--visibilty", "visible");
        }
    }
    
    showHideBtn.addEventListener("click", function (e) {
        const btnTextShow = showHideBtn.querySelector('[class*="--show"]');
        const btnTextHide = btnTextShow.nextElementSibling || btnTextShow.previousElementSibling;
        const btnTextClass = btnTextShow.classList.item(0);

        showHideWrapper.classList.toggle(`${showHideWrapperClass}--showed`);
        showHideContent.classList.toggle(`${showHideContentClass}--margin-bottom`);
        btnTextShow.classList.toggle(`${btnTextClass}--active`);
        btnTextHide.classList.toggle(`${btnTextClass}--active`);

        isShow = !isShow;

        setContentHeight();
    });

    window.addEventListener("resize", throttle(setContentHeight, 100));
}

export default showHide;