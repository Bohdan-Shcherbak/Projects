//инициализируем слайдер
// import Swiper from 'swiper';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Swiper from '../../node_modules/swiper/swiper';
// import Swiper from '../../node_modules/swiper-bundle'
import Swiper from 'swiper/bundle'
const swiper = new Swiper('.image-slider', {
    // modules: [Navigation, Pagination],
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
    },
    // скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        //  Возможность перетаскивать скролл
        draggable: true,
    },


    //  автовісота
    // autoHeight:true,
    // autoWidth:true,


    // колличество слайдов для показа
    slidesPerView: 1.5,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
    },
    // Отступ между слайдами
    spaceBetween: 60,

    // колличество пролистываемых слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,

    // cтартовый слайд
    initialSlide: 1,


    //бессконечный слайдер
    loop: true,

});

