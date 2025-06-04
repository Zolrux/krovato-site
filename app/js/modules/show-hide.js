import { throttle } from "../utils";

function showHide() {
    const showHideWrapper = document.querySelector('[data-show-hide-wrapper]');
    const showHideContent = document.querySelector('[data-show-hide-content]');
    const showHideBtn = document.querySelector('[data-show-hide-btn]');
    const showHideWrapperClass = showHideWrapper.classList.item(0);
    const showHideContentClass = showHideContent.classList.item(0);

    const btnTextElements = {};
    const THROTTLE_TIME = 100;
    let isShow = false;
    let showHideContentDefaultHeight = null;
    
    const setContentHeight = () => {
        const showHideContentFullHeight = showHideContent.scrollHeight + 1;

        requestAnimationFrame(() => {
            showHideContent.style.maxHeight = isShow ? `${showHideContentFullHeight}px` : `${showHideContentDefaultHeight}px`; 
        });

        showHideWrapper.style.setProperty("--opacity", isShow ? 0 : 1);
        showHideWrapper.style.setProperty("--visibilty", isShow ? "hidden" : "visible");
    }

    const onResizeOptimized = throttle(setContentHeight, THROTTLE_TIME);
    
    const handleShowHideBtn = () => {
        const btnTextShow = showHideBtn.querySelector('[class*="--show"]');
        const btnTextHide = btnTextShow.nextElementSibling || btnTextShow.previousElementSibling;
        const btnTextClass = btnTextShow.classList.item(0);

        if (!Object.keys(btnTextElements).length)  {
            btnTextElements["btnTextShowEl"] = btnTextShow;
            btnTextElements["btnTextHideEl"] = btnTextHide;
            btnTextElements["commonClass"] = btnTextClass;
        }

        isShow = !isShow;

        showHideWrapper.classList.toggle(`${showHideWrapperClass}--showed`);
        showHideContent.classList.toggle(`${showHideContentClass}--margin-bottom`);
        btnTextShow.classList.toggle(`${btnTextClass}--active`);
        btnTextHide.classList.toggle(`${btnTextClass}--active`);

        setContentHeight();
    }

    const initShowHide = () => {
        isShow = false;
        window.addEventListener("resize", onResizeOptimized);
        showHideBtn.addEventListener("click", handleShowHideBtn);
    }

    if (showHideWrapper.getAttribute("data-sh-init")) {
        const initMediaWidth = +showHideWrapper.getAttribute("data-sh-init");
        const showHideInitMedia = window.matchMedia(`(max-width: ${initMediaWidth / 16}rem)`);
        let isShowHideInit = false;

        const initShowHideAtMaxWidth = () => {
            if (showHideInitMedia.matches && !isShowHideInit) {
                showHideContentDefaultHeight = parseInt(window.getComputedStyle(showHideContent).maxHeight);
                isShowHideInit = true;
                isShow = false;
                initShowHide();
            }
            else {
                if (!isShowHideInit) return;

                showHideBtn.removeEventListener("click", handleShowHideBtn);
                window.removeEventListener("resize", onResizeOptimized);

                setTimeout(() => {
                    showHideWrapper.removeAttribute("style");
                    showHideContent.removeAttribute("style");

                    showHideWrapper.classList.remove(`${showHideWrapperClass}--showed`);
                    showHideContent.classList.remove(`${showHideContentClass}--margin-bottom`);
                    btnTextElements["btnTextShowEl"].classList.add(`${btnTextElements["commonClass"]}--active`);
                    btnTextElements["btnTextHideEl"].classList.remove(`${btnTextElements["commonClass"]}--active`);
                    
                    isShowHideInit = false;
                    isShow = false;
                }, THROTTLE_TIME + 50)
            }
        }
        initShowHideAtMaxWidth();
        showHideInitMedia.addEventListener("change", initShowHideAtMaxWidth);
    }
    else {
        showHideContentDefaultHeight = parseInt(window.getComputedStyle(showHideContent).maxHeight);
        initShowHide();
    }
}

export default showHide;