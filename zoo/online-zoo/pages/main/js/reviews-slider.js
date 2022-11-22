let myReviewsSlider = new Swiper('.reviews-slider', {
    autoHeight: false,
    // slidesPerView: 4,
    spaceBetween: 30,
    initialSlide: 0,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        1300: {
            slidesPerView: 4,
        },
    },
})