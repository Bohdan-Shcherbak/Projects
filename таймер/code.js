"use strict";

// const sdaf = document.getElementsByName(pole1)
// const label = document.querySelector(".form");
// const container = document.querySelector(".container");
// let one_number = document.querySelector(".one_number");
// const two_number = document.querySelector(".two_number");
// const startLet = document.querySelector('.start');

// const input1 = document.getElementById(GETname);
// const label = document.getElementById(GET-name)
// console.log(label);
// let one = one_number.value = one_number.innerHTML = 15;
// console.log(one_number.value);
// let nuumber = 15;

// one_number.innerHTML = nuumber;
// function startF() {
//     for (let i = 15; i > 0; i--) {
//         // const element = array[i];
//         console.log(i);
//         console.log('no');
//         // setTimeout((i) => { console.log(i); }, 3000);
//         setTimeout(() => { nuumber = i }, 100);
//         // setTimeout(0, 3000)
//         console.log(i + 'aga');
//     }
// }
// let(rr(() => {
//     console.log('bybyby');
// }))
// startLet.addEventListener("click", startF);
// startLet.addEventListener("click", () => {
//     console.log('yes');
//     console.log('no');
// });

// let oneN = one;
// console.log(oneN);
// two_number.value = two_number.innerHTML = 60;
// one_number.innerHTML = 15;
// two_number.innerHTML = 60;
// console.log(one - 10);
// function main2() {
//     one !== 0 ? one - 1 : console.log('yes');
//     console.log(one);
// }
// main2(one)
// function main_function(oneNumber, twoNumber) {
// for (oneN >= 0; oneN - 1;) {
// const element = array[i];
// setTimeout(() => { one_number.innerHTML = oneNumber }, 10);
// setTimeout(() => { one - 1 }, 10);
// one_number.innerHTML = oneN;
// console.log(one);

// }
// }
// main_function(one)
// function rrrr(label) {

// console.log('uuu');

// for (let i = 0; i <= 3; i++) {
//     const element = array[i];
// console.log('uu');
// console.log(element.type);

//     }
// }
// function text_container() {
//     container.innerHTML = 1234;
// }
// text_container(container)
// rrrr()
// console.log('hhhhhh');
// console.log(label);
// console.log(input1.type);
// for (let i = 0; i < sdaf.length; i++) {
//     const element = sdaf[i];
//     console.log(element);

// }
// console.log(pole1.value);



// 1 таймер

// document.addEventListener('DOMContentLoaded', function () {
//     // конечная дата, например 1 июля 2021
//     const deadline = new Date(2023, 10, 24);

//     // id таймера
//     let timerId = null;
//     // склонение числительных
//     function declensionNum(num, words) {
//         return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//     }
//     // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//     function countdownTimer() {
//         const diff = deadline - new Date();
//         // console.log(deadline);
//         // console.log(diff);
//         if (diff <= 0) {
//             clearInterval(timerId);
//             // alert('Конец времени')
//         }
//         const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//         $days.textContent = days < 10 ? '0' + days : days;
//         $hours.textContent = hours < 10 ? '0' + hours : hours;
//         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//         $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//         $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//         $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//         $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//     }
//     // получаем элементы, содержащие компоненты даты
//     const $days = document.querySelector('.timer__days');
//     const $hours = document.querySelector('.timer__hours');
//     const $minutes = document.querySelector('.timer__minutes');
//     const $seconds = document.querySelector('.timer__seconds');
//     // вызываем функцию countdownTimer
//     countdownTimer();
//     // вызываем функцию countdownTimer каждую секунду
//     timerId = setInterval(countdownTimer, 1000);
// });



const windowNum = document.querySelector('.windowNum');


const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

let startLet = document.querySelector('.timer__item2');
let butt__start = document.querySelector('.butt__start');
let butt__stop = document.querySelector('.butt__stop');

let items = document.querySelector('.timer__items');

let initHours = document.querySelector('.initial__hours');
let initMinutes = document.querySelector('.initial__minutes');
let initSeconds = document.querySelector('.initial__seconds');
let hours_none = document.querySelector('.timer__hours_none');
let reset = document.querySelector('.reset');


let nuumbHours;
let nuumbMinutes;
let nuumbSeconds;
// console.log(initial.value);
let timerId;

let NewnuumbHours = 0;
let NewnuumbMinutes = 0;
let NewnuumbSeconds = 0;




// nuumbHours = initHours.value;
// nuumbMinutes = initMinutes.value;
// nuumbSeconds = initSeconds.value;

// console.log(nuumbSeconds);
butt__start.addEventListener('click', () => {
    windowNum.classList.add('windowNone');
    items.classList.add('flex');

    if (NewnuumbSeconds == 0 && NewnuumbMinutes == 0 && NewnuumbHours == 0) {
        nuumbHours = initHours.value;
        nuumbMinutes = initMinutes.value;
        nuumbSeconds = initSeconds.value;
    } else {
        nuumbHours = NewnuumbHours;
        nuumbMinutes = NewnuumbMinutes;
        nuumbSeconds = NewnuumbSeconds;
    }
    if (nuumbHours <= 0) {
        console.log('меньше');
        hours_none.classList.add('windowNone')

    }
    butt__stop.classList.add('stop-active');

    timerId = setInterval(recurs, 1000);
})

butt__stop.addEventListener('click', () => {
    NewnuumbHours = nuumbHours;
    NewnuumbMinutes = nuumbMinutes;
    NewnuumbSeconds = nuumbSeconds;
    console.log(NewnuumbHours);
    console.log(NewnuumbMinutes);
    console.log(NewnuumbSeconds);
    clearInterval(timerId);
    butt__stop.classList.remove('stop-active')
}
);


function recurs() {

    //     // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }


    if (nuumbSeconds > 0) {
        nuumbSeconds = nuumbSeconds - 1;
        // console.log('yes');
    } else {
        console.log('else');
        if (nuumbMinutes > 0) {
            nuumbMinutes = nuumbMinutes - 1;
            nuumbSeconds = 59;
        } else {
            if (nuumbHours > 0) {
                nuumbHours = nuumbHours - 1;
                nuumbMinutes = 59;
                nuumbSeconds = 59;

            } else {
                // prompt('Конец времени');
                clearInterval(timerID);

            }
        }
    }
    $hours.textContent = nuumbHours;
    $minutes.textContent = nuumbMinutes < 10 ? '0' + nuumbMinutes : nuumbMinutes;
    $seconds.textContent = nuumbSeconds < 10 ? '0' + nuumbSeconds : nuumbSeconds;
    $hours.dataset.title = declensionNum(nuumbHours, ['година', 'години', 'годин']);
    $minutes.dataset.title = declensionNum(nuumbMinutes, ['хвилина', 'хвилини', 'хвилин']);
    $seconds.dataset.title = declensionNum(nuumbSeconds, ['секунда', 'секунди', 'секунд']);


}


reset.addEventListener('click', () => {
    clearInterval(timerId);
    butt__stop.classList.remove('stop-active')
    windowNum.classList.remove('windowNone');
    items.classList.remove('flex');
    nuumbHours = 0;
    nuumbMinutes = 0;
    nuumbSeconds = 0;
    NewnuumbHours = 0;
    NewnuumbMinutes = 0;
    NewnuumbSeconds = 0;
});

// function reset() {

// }


// function mainFunction() {

//     nuumbHours = initHours.value;
//     nuumbMinutes = initMinutes.value;
//     nuumbSeconds = initSeconds.value;
//     console.log(nuumbHours);

//     windowNum.classList.add('windowNone');

//     if (nuumbHours <= 0) {
//         console.log('меньше');
//         hours_none.classList.add('windowNone')

//     }
//     butt__stop.classList.add('stop-active');
//     hours_none.classList.add('windowNone')

//     items.classList.add('flex');

//     timerId = setInterval(recurs, 1000);


//     function recurs() {

//         // let timerId = null;

//         //     // склонение числительных
//         function declensionNum(num, words) {
//             return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//         }

//         $hours.textContent = nuumbHours;
//         $minutes.textContent = nuumbMinutes < 10 ? '0' + nuumbMinutes : nuumbMinutes;
//         $seconds.textContent = nuumbSeconds < 10 ? '0' + nuumbSeconds : nuumbSeconds;
//         $hours.dataset.title = declensionNum(nuumbHours, ['година', 'години', 'годин']);
//         $minutes.dataset.title = declensionNum(nuumbMinutes, ['хвилина', 'хвилини', 'хвилин']);
//         $seconds.dataset.title = declensionNum(nuumbSeconds, ['секунда', 'секунди', 'секунд']);

//         if (nuumbSeconds > 0) {
//             nuumbSeconds = nuumbSeconds - 1;
//         } else {
//             console.log('else');
//             if (nuumbMinutes > 0) {
//                 nuumbMinutes = nuumbMinutes - 1;
//                 nuumbSeconds = 59;
//             } else {
//                 if (nuumbHours > 0) {
//                     nuumbHours = nuumbHours - 1;
//                     nuumbMinutes = 59;
//                     nuumbSeconds = 59;

//                 } else {
//                     // prompt('Конец времени');
//                     clearInterval(timerID);

//                 }
//             }
//         }

//         // $hours.textContent = nuumbHours < 10 ? '0' + nuumbHours : nuumbHours;
//         // $minutes.textContent = nuumbMinutes < 10 ? '0' + nuumbMinutes : nuumbMinutes;
//         // $seconds.textContent = nuumbSeconds < 10 ? '0' + nuumbSeconds : nuumbSeconds;



//     }

//     // let timerID = setInterval(recurs, 1000);




// }

// function main() {
//     if (!butt__start.classList.contains('active')) {
//         console.log('yees');
//         butt__start.classList.add('active');
//         mainFunction()
//     } else {
//         butt__start.classList.remove('active');
//         // clearInterval(timerID);
//         let rr = 0;
//         mainFunction(rr)

//     }
// }
// console.log(nuumbers);





// butt__start.addEventListener('click', main)

// butt__start.addEventListener('click', mainFunction());
// butt__stop.addEventListener('click', () => {
//     clearInterval(timerId);
//     butt__stop.classList.remove('stop-active')
// }
// );