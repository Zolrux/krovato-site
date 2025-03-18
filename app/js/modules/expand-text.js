function expandText() {
    const expandContent = document.querySelector('[data-expand-content]');
    const expandTextWrapper = document.querySelector('[data-expand-text]');
    const expandShowMoreBtn = document.querySelector('[data-expand-btn]');
    const expandTextWrapperHeight = expandTextWrapper.clientHeight;
    const expandTextWrapperFullHeight = expandTextWrapper.scrollHeight;

    let isShow = false;

    const removeBgGradient = () => {
        expandContent.style.setProperty("--opacity", 0);
        expandContent.style.setProperty("--visibilty", "hidden");
    }

    if (expandTextWrapperFullHeight === expandTextWrapperHeight) {
        expandShowMoreBtn.style.setProperty("--display", "none");
        removeBgGradient();
        return;
    }

    expandShowMoreBtn.addEventListener("click", function () {
        const fullHeight = expandTextWrapper.scrollHeight;
        
        isShow = !isShow;
        
        if (isShow) {
            expandTextWrapper.style.maxHeight = fullHeight + "px";
            expandShowMoreBtn.style.setProperty("--rotate", "-180deg");
            removeBgGradient();
        } else {
            expandTextWrapper.removeAttribute("style");
            expandContent.removeAttribute("style");
            expandShowMoreBtn.removeAttribute("style");
        }

    });
}

export default expandText;