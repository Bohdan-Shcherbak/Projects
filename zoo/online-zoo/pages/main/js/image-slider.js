"use strict"
// import Swiper, { Navigation, Pagination } from 'myImageSlider';
// Swiper.use([Navigation, Pagination]);
// import '../../../../../node_modules/swiper/modules/grid/';
const myImageSlider = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        // //     //буллеты
        clickable: true,
        // //    //жинамические буллеты
        // //     dynamicBullets:true,
        // //     //кастомные буллеты
        // //     renderBullet: function (index, className){
        // //         return '<span class="' + className +'">' + (index + 1) + '</span>';
        // //     },
    },
    // modules: [Grid],
    // grid: {
    //     rows: 2,
    // },
    // direction: 'horizontal',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.button-prev',
    },
    autoHeight: false,
    spaceBetween: 30,
    // innerWidth: 1158,
    initialSlide: 0,
    // slidesPerView: 2,
    // slidesPerColumn: 2,
    // slidesPerGroup: 2,
    loop: false,



    // breakpoints: {
    //     0: {
    //         slidesPerView: 4,
    //         autoHeight: false,

    //         // slidesPerGroup: 1,
    //         // loop: true,
    //         // freeMode: false,
    //         spaceBetween: 20,
    //         simulateTouch: true,
    //         touchRatio: 1,
    //         touchAngle: 45,
    //         grabCursor: true,
    //         direction: 'vertical',

    //     },

    //     401: {
    //         slidesPerView: 2,
    //         grid: {
    //             rows: 2,
    //         },
    //         spaceBetween: 29.5,
    //         simulateTouch: false,
    //         // direction: 'horisontal',



    //     },

    //     641: {
    //         slidesPerView: 3,
    //         grid: {
    //             rows: 2,
    //         },

    //         spaceBetween: 29,
    //     },

    //     1001: {
    //         slidesPerView: 3,
    //         grid: {
    //             rows: 2,
    //         },
    //         spaceBetween: 30,
    //     }
    // }
})