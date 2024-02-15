"use strict"

const myImageSlider = new Swiper('.image-slider__container', {

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    autoHeight: false,
    loop: false,
    slidesPerGroup: 6,

    breakpoints: {
        0: {
            slidesPerView: 4,
            autoHeight: false,
            spaceBetween: 20,
            simulateTouch: false,
            grabCursor: true,
            direction: 'vertical',
        },

        441: {
            grid: {
                rows: 2,
                column: 2,
            },
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },

        641: {
            grid: {
                rows: 2,
                column: 3,
            },
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    }
})

const animals = document.querySelectorAll('.animals');
const cardIcon = document.querySelectorAll('.card__icon');

const herbivore = '<img src="./images/slides/banana-bamboo_icon.png" alt="herbivore">';
const predator = '<img src="./images/slides/meet-fish_icon.png" alt="predator">';

for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    if (element.alt == 'herbivore') {
        console.log('yes');
        cardIcon[i].innerHTML = herbivore;
    } else {
        cardIcon[i].innerHTML = predator;
    }
}