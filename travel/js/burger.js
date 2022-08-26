const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Window: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Window());
    }
};
// Определяет на каком устройстве открыто   ------------------------------------------

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows =document.querySelectorAll('.menu__arrow');
    if(menuArrows.length>0){
        for (let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e) {
                menuArrow.parentElement.classList.toggle('_active')
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}
//определяет активный класс
// бургер
const burgerMenu = document.querySelector('.header__burger-menu');
const headerMenu = document.querySelector('.header__menu');
const linkMenu = document.querySelector('.header__navigation');


if (burgerMenu){
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');

    });

}
if (burgerMenu){
    linkMenu.addEventListener("click", function(e) {
    document.body.classList.remove('_lock');
    burgerMenu.classList.remove('_active');
    headerMenu.classList.remove('_active');
});

}