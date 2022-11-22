"use strict"
// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Window: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (
//             isMobile.Android() ||
//             isMobile.BlackBerry() ||
//             isMobile.iOS() ||
//             isMobile.Opera() ||
//             isMobile.Window());
//     }
// };
// // Определяет на каком устройстве открыто   ------------------------------------------

// if (isMobile.any()) {
//     document.body.classList.remove('_pc');
//     document.body.classList.add('_touch');

//     let menuArrows = document.querySelectorAll('.menu__arrow');
//     if (menuArrows.length > 0) {
//         for (let index = 0; index < menuArrows.length; index++) {
//             const menuArrow = menuArrows[index];
//             menuArrow.addEventListener("click", function (e) {
//                 menuArrow.parentElement.classList.toggle('_active')
//             });
//         }
//     }
// } else {
//     document.body.classList.remove('_touch');
//     document.body.classList.add('_pc');
// }

// бургер
// if (iconMenu) {
//     const menuBody = document.querySelector('menu__body');
//     iconMenu.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock')
//         iconMenu.classList.toggle('_active');
//         menuBody.classList.toggle('_active');

//     });

// }

const iconMenu = document.querySelector('.menu__icon');
// const iconmenu = document.getElementById('menu__icon')
const nav = document.querySelector('.nav');
const navigation = document.querySelector('.header__navigation');
const link = document.querySelector('.link');
const background = document.querySelector('.background');
const logo = document.querySelector('.logo');


const activation = function () {
    if (iconMenu.classList.contains('_active') == true) {
        navigation.classList.remove('_active');
        link.classList.remove('_active');
        setTimeout(() => background.classList.toggle('_active'), 1000);
        setTimeout(() => nav.classList.toggle('_active'), 1000);
        setTimeout(() => logo.classList.toggle('_active'), 1000);
        setTimeout(() => iconMenu.classList.toggle('_active'), 1500);

    } else {
        setTimeout(() => navigation.classList.toggle('_active'), 1000);
        setTimeout(() => link.classList.toggle('_active'), 1000);
        background.classList.add('_active');
        logo.classList.add('_active');
        nav.classList.add('_active');
        iconMenu.classList.add('_active');
    }
}
iconMenu.addEventListener("click", activation);


