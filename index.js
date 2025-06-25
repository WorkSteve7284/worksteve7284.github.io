const menu = document.querySelector('#mini-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);