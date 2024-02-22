"use strict"
const headerIcon = document.querySelector('.burger__icon');
const nav = document.querySelector('.header__menu');
const navigation = document.querySelector('.menu__list');

const link = document.querySelector('.header__designed');
const bodyLock = document.querySelector('body');

const activation = () => {
    nav.classList.toggle('_active');
    setTimeout(() => navigation.classList.toggle('_active'), 300);
    setTimeout(() => headerIcon.classList.toggle('_active'), 500);
    setTimeout(() => bodyLock.classList.toggle('_lock'), 500);
}
headerIcon.addEventListener("click", activation);


