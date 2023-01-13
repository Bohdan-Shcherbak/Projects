// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'navigation/navigation';
// import 'swiper/modules/grid/grid';
// import Swiper from 'swiper-bundle.min.js';


const myImageSlider2 = new Swiper('.image-slider2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    scrollbar: {
        el: '.swiper-scrollbar',
        //     //Возможность перетаскивать скролл
        draggable: true,
    },
})