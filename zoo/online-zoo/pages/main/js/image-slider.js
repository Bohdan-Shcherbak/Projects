
let myImageSlider = new Swiper('.image-slider', {

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    autoHeight: false,
    slidesPerView: 3,
    spaceBetween: 25,
    // innerWidth: 1158,
    initialSlide: 0,

    grid: {
        rows: 2,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
                column: 1,
            },
            slidesPerGroup: 1,
            loop: true,
            freeMode: false,
        },

        800: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        spaceBetween: 10,

        1200: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        }
    }
})