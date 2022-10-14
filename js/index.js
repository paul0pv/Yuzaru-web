const navIconMenu = document.getElementById('navIconMenu');
const nav = document.querySelector('.nav');

navIconMenu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
});