"use strict"
let myTestimonialsSlider = new Swiper('.testimonials-slider', {
    // autoHeight: true,
    // slidesPerView: 4,
    initialSlide: 0,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    direction: 'horizontal',

    breakpoints: {
        0: {
            // autoHeight: true,

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
        // 1300: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,

        // },
    },
});

