document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('#pageButtons a');
    const currentPath = window.location.pathname.replace(/\/$/, '');

    links.forEach(link => {
        const linkPath = link.getAttribute('href').replace(/\/$/, '');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});