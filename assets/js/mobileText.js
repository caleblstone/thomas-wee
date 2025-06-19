document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 700) return; // Only run on mobile

    document.querySelectorAll('.titleBox').forEach((titleBox) => {
        let workText = titleBox.nextElementSibling;
        if (workText && workText.classList.contains('workText')) {
            // Store original parent and next sibling for collapse
            workText._originalParent = workText.parentNode;
            workText._originalNext = workText.nextSibling;
        }

        titleBox.addEventListener('click', () => {
            let workText = titleBox.querySelector('.workText') || titleBox.nextElementSibling;
            if (workText && workText.classList.contains('workText')) {
                if (workText.classList.contains('visible')) {
                    // Collapse: move out and hide
                    workText.classList.remove('visible');
                    if (workText._originalParent) {
                        workText._originalParent.insertBefore(workText, workText._originalNext);
                    }
                } else {
                    // Expand: move inside and show
                    titleBox.appendChild(workText);
                    workText.classList.add('visible');
                }
            }
        });
    });
});