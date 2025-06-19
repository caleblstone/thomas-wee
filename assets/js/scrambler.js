document.addEventListener("DOMContentLoaded", () => {
    function scramble(text) {
        return text
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    }

    // Recursively scramble all text nodes in a node
    function scrambleTextNodes(node) {
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                child.textContent = scramble(child.textContent);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                scrambleTextNodes(child);
            }
        });
    }

    document.querySelectorAll('a').forEach(link => {
        const originalHTML = link.innerHTML;

        link.addEventListener('mouseenter', () => {
            scrambleTextNodes(link);
        });

        link.addEventListener('mouseleave', () => {
            link.innerHTML = originalHTML;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function scramble(text) {
        return text
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    }

    // Recursively scramble all text nodes in a node
    function scrambleTextNodes(node) {
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                child.textContent = scramble(child.textContent);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                scrambleTextNodes(child);
            }
        });
    }

    document.querySelectorAll('a').forEach(link => {
        const originalHTML = link.innerHTML;

        link.addEventListener('mouseenter', () => {
            scrambleTextNodes(link);
        });

        link.addEventListener('mouseleave', () => {
            link.innerHTML = originalHTML;
        });
    });
});

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