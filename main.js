const menu = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

