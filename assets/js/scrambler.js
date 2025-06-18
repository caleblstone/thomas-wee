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