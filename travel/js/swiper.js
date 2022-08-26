//инициализируем слайдер
new Swiper('.image-slider',{
    //стрелки
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    pagination:{
        el:'.swiper-pagination',
        // буллеты
        clickable: true,
    },
    // скролл
         scrollbar:{
         el: '.swiper-scrollbar',
        //  Возможность перетаскивать скролл
         draggable: true,
     },
    

    //  автовісота
    // autoHeight:true,
    // autoWidth:true,


    // колличество слайдов для показа
    slidesPerView:1.5,

    breakpoints:{
        320:{    
            slidesPerView:1,
        },
        768:{    
            slidesPerView:1.5,
        },
    },
    // Отступ между слайдами
    spaceBetween:60,

    // колличество пролистываемых слайдов
    slidesPerGroup:1,

    // активный слайд по центру
    centeredSlides:true,

    // cтартовый слайд
    initialSlide:1,


    //бессконечный слайдер
    loop:true,
    
});

