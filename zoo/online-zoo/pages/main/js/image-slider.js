// import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper/swiper-bundle';
// import 'swiper/css/bundle';
// import 'swiper/modules/navigation/navigation';
// import 'swiper/modules/grid/grid';
// import 'swiper/modules/'

const myImageSlider = new Swiper('.image-slider', {

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    autoHeight: false,
    // slidesPerView: 3,
    // spaceBetween: 25,
    // innerWidth: 1158,
    initialSlide: 0,

    // grid: {
    //     rows: 2,
    // },

    breakpoints: {
        0: {
            slidesPerView: 4,
            autoHeight: false,

            // slidesPerGroup: 1,
            // loop: true,
            // freeMode: false,
            spaceBetween: 20,
            simulateTouch: true,
            touchRatio: 1,
            touchAngle: 45,
            grabCursor: true,
            direction: 'vertical',

        },

        401: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
            spaceBetween: 29.5,
            simulateTouch: false,
            // direction: 'horisontal',



        },

        641: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },

            spaceBetween: 29,
        },

        1001: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
        }
    }
})