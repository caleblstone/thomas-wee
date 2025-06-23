document.addEventListener("DOMContentLoaded", () => {
    const workListLinks = document.querySelectorAll('#workList a');
    const workTitles = Array.from(document.querySelectorAll('#textBox .workTitle'));
    const textBox = document.querySelector('#textBox');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const parentRect = textBox ? textBox.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
        // Check if at least half of the element is visible within #textBox
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const elemHeight = rect.height;
        const visibleTop = Math.max(elemTop, parentRect.top);
        const visibleBottom = Math.min(elemBottom, parentRect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        return (
            visibleHeight > elemHeight / 2
        );
    }

    function updateActiveWork() {
        let activeIndex = 0;
        workTitles.forEach((title, idx) => {
            if (isInViewport(title)) {
                activeIndex = idx;
            }
        });
        workListLinks.forEach((link, idx) => {
            if (idx === activeIndex) {
                link.classList.add('active-work');
            } else {
                link.classList.remove('active-work');
            }
        });
    }

    if (textBox) {
        textBox.addEventListener('scroll', updateActiveWork, { passive: true });
    } else {
        window.addEventListener('scroll', updateActiveWork, { passive: true });
    }
    window.addEventListener('resize', updateActiveWork);
    updateActiveWork();
});