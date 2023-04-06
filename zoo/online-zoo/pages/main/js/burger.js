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

const headerIcon = document.querySelector('.burger__icon');
// const iconmenu = document.getElementById('#burger__icon')
const nav = document.querySelector('.header__menu');
const navigation = document.querySelector('.menu__list');

// const link = document.querySelector('.header__designed');
// const logo = document.querySelector('.logo');
const bodyLock = document.querySelector('body');

const activation = function () {
    if (headerIcon.classList.contains('_active') == true) {
        navigation.classList.remove('_active');
        bodyLock.classList.remove('_.lock');
        // link.classList.remove('_active');
        setTimeout(() => nav.classList.toggle('_active'), 1000);
        // setTimeout(() => logo.classList.toggle('_active'), 1000);
        setTimeout(() => headerIcon.classList.toggle('_active'), 1500);

    } else {
        bodyLock.classList.add('_.lock');
        setTimeout(() => navigation.classList.toggle('_active'), 1000);
        setTimeout(() => link.classList.toggle('_active'), 1000);
        // logo.classList.add('_active');
        nav.classList.add('_active');
        headerIcon.classList.add('_active');
    }
}
headerIcon.addEventListener("click", activation);


