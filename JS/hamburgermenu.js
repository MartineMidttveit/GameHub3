const hamburgerIcon = document.querySelector('.hamburger-icon');
const navHeader = document.querySelector('.nav-header');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('closed');
    navHeader.classList.toggle('show');
});