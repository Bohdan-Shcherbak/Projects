"use strict"
let myTestimonialsSlider = new Swiper('.testimonials-slider', {
    initialSlide: 0,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 3,
            direction: 'vertical',
            spaceBetween: 15,
            scrollbar: {
                hide: true,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1001: {
            direction: 'horizontal',

            slidesPerView: 4,
            spaceBetween: 30,


        },
    },
});

