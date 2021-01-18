/* Mobile menu */
const burgerIcon = document.getElementById('navBtn');
const navbarMenu = document.getElementById('nav-menu');

burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-hidden');
})