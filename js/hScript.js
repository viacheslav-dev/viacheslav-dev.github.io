window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_wrapper'),
    menuItem = document.querySelectorAll('.header_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_wrapper_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_wrapper_active');
        });
    });
});