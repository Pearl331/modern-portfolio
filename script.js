// Dynamic Navbar background blend on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#0b0f19';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(11, 15, 25, 0.8)';
        header.style.boxShadow = 'none';
    }
});