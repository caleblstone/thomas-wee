document.addEventListener("DOMContentLoaded", () => {
    const bio = document.getElementById('shortBio');
    const longBio = document.getElementById('longBio');
    if (bio && longBio) {
        bio.addEventListener('mouseenter', () => {
            longBio.style.display = 'block';
        });
        bio.addEventListener('mouseleave', () => {
            longBio.style.display = 'none';
        });
    }
});