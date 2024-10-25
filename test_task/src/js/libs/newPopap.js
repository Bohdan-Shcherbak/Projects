const butt = document.querySelector('.icon-menu');
const menuBurger = document.querySelector('.menu-burger');
const burgerMenu = document.querySelector('.burger-menu');
console.log(butt);
console.log(burgerMenu);
butt.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    setTimeout(menuBurger.classList.toggle('active'), 3000);
    butt.classList.toggle('menu-open');
})