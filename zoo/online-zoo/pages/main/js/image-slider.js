"use strict"

const myImageSlider = new Swiper('.image-slider__container', {

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    autoHeight: false,
    loop: false,

    breakpoints: {
        0: {
            slidesPerView: 4,
            autoHeight: false,
            spaceBetween: 20,
            simulateTouch: true,
            touchRatio: 1,
            touchAngle: 45,
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
            simulateTouch: false,
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