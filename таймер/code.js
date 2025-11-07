// "use strict"
const windowNum = document.querySelector('.timer__input');
let timer = document.querySelector('.timer__work');

const $hours = document.querySelector('.work__hours');
const $minutes = document.querySelector('.work__minutes');
const $seconds = document.querySelector('.work__seconds');

let butt__start = document.querySelector('.butt__start');
let butt__stop = document.querySelector('.butt__stop');
let reset = document.querySelector('.reset');
let left = document.querySelectorAll('.left');
let right = document.querySelectorAll('.right');

let counterMs = 0;

let initHours = document.querySelector('.initial__hours');
let initMinutes = document.querySelector('.initial__minutes');
let initSeconds = document.querySelector('.initial__seconds');

let textMinutes = document.querySelector('.title-minutes');
let textSeconds = document.querySelector('.title-seconds');

let numbHours;
let numbMinutes;
let numbSeconds;

let NewnumbHours = 0;
let NewnumbMinutes = 0;
let NewnumbSeconds = 0;

let hoursAnimation = document.querySelector('.hours-animation');
let minutesAnimation = document.querySelector('.minutes-animation');
let secondsAnimation = document.querySelector('.seconds-animation');

let presentDegSeconds;
let presentDegMinutes;
let presentDegHours;

let oldPresentDegMinutes;

let diffDegSeconds;
let diffDegMinutes;
let diffDegHours;


const workerCode = `
    let timerId = null;

    self.onmessage = function (event) {
        if (event.data.action === "start") {
            if (!timerId) {
                timerId = setInterval(() => {
                    postMessage("run"); // Відправляємо сигнал у головний потік
                }, event.data.interval);
            }
        } else if (event.data.action === "stop") {
            clearInterval(timerId);
            timerId = null;
        }
    };
`;

const workerBlob = new Blob([workerCode], { type: "application/javascript" });
const worker = new Worker(URL.createObjectURL(workerBlob));

function recurs() {    
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    if (counterMs == 4) {

        if (numbSeconds > 0) {
            numbSeconds = numbSeconds - 1;

            presentDegSeconds -= diffDegSeconds;

            secondsAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegSeconds}deg, transparent 0);`
            
            presentDegMinutes -= diffDegMinutes;
            
            minutesAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegMinutes}deg, transparent 0);`
            
            presentDegHours -= diffDegHours;
            hoursAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegHours}deg, transparent 0);`

            counterMs = 0;
        } else if (numbMinutes > 0) {
            numbMinutes = numbMinutes - 1;
            numbSeconds = 59;
            presentDegSeconds = 360;            

            secondsAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegSeconds}deg, transparent 0);`
            
            presentDegMinutes -= diffDegMinutes;
            minutesAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegMinutes}deg, transparent 0);`

            presentDegHours -= diffDegHours;
            hoursAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegHours}deg, transparent 0);`
            
            counterMs = 0;
        } else if (numbHours > 0) {
            numbHours = numbHours - 1;
            numbMinutes = 59;
            numbSeconds = 59;

            presentDegSeconds = presentDegMinutes = 360;

            secondsAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegSeconds}deg, transparent 0);`

            minutesAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegMinutes}deg, transparent 0);`

            presentDegHours -= diffDegHours;
            hoursAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegHours}deg, transparent 0);`

            counterMs = 0;
        } else {
            prompt('Конец времени');
            worker.postMessage({
                action:'start',
                interval:200,
                message: "Виклик func1!",
            })
        }
        } else {
            presentDegSeconds -= diffDegSeconds;
            secondsAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegSeconds}deg, transparent 0);`

            presentDegMinutes -= diffDegMinutes;

            minutesAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegMinutes}deg, transparent 0);`

            presentDegHours -= diffDegHours;
            hoursAnimation.style.cssText = `
            background-image:conic-gradient(#fff ${presentDegHours}deg, transparent 0);`

            counterMs++
        }

    $hours.textContent = numbHours;
    $minutes.textContent = numbMinutes < 10 ? '0' + numbMinutes : numbMinutes;
    $seconds.textContent = numbSeconds < 10 ? '0' + numbSeconds : numbSeconds;
    $hours.dataset.title = declensionNum(numbHours, ['година', 'години', 'годин']);
    $minutes.dataset.title = declensionNum(numbMinutes, ['хвилина', 'хвилини', 'хвилин']);
    $seconds.dataset.title = declensionNum(numbSeconds, ['секунда', 'секунди', 'секунд']);
}

worker.onmessage = function(){
        recurs()
}

function start(){
    if (initSeconds.value > 60) {
        initSeconds.classList.add('invalid');
        textSeconds.classList.add('invalid')
        initSeconds.addEventListener("input", () => initSeconds.classList.remove('invalid'))
        initSeconds.addEventListener("input", () => textSeconds.classList.remove('invalid'))

    } else if (initMinutes.value > 60) {
        initMinutes.classList.add('invalid')
        textMinutes.classList.add('invalid')
        initMinutes.addEventListener("input", () => initMinutes.classList.remove('invalid'))
        initMinutes.addEventListener("input", () => textMinutes.classList.remove('invalid'))

    } else {
        windowNum.classList.add('windowNone');
        timer.classList.remove('windowNone');

        // для кнопки стопу, щоб продовжити таймер - числа
        if (NewnumbSeconds + NewnumbMinutes + NewnumbHours !== 0) {
            numbHours = NewnumbHours;
            numbMinutes = NewnumbMinutes;
            numbSeconds = NewnumbSeconds;    
            presentDegMinutes = oldPresentDegMinutes;            
        } else{
            numbHours = initHours.value;
            numbMinutes = initMinutes.value;
            numbSeconds = initSeconds.value;

            presentDegMinutes = (numbMinutes / 60) * 360;
            if(numbHours == 0) 
                {presentDegHours = 0}
            else{presentDegHours = 360}
        }
        presentDegSeconds = (numbSeconds / 60) * 360;
        
        diffDegSeconds = 1.2;
        diffDegMinutes = 0.02;

        secondsAnimation.style.cssText = 
        `background-image:conic-gradient(#fff ${presentDegSeconds}deg, transparent 0);`
        
        minutesAnimation.style.cssText = 
        `background-image:conic-gradient(#fff ${presentDegMinutes}deg, transparent 0);`

        diffDegHours = 360 / (numbHours * 60 * 60) / 5;

        hoursAnimation.style.cssText = 
        `background-image:conic-gradient(#fff ${presentDegHours}deg, transparent 0);`

        
        butt__stop.classList.add('stop-active');

        worker.postMessage({
            action:'start',
            interval:200,
            message: "Виклик func1!",
        })
    }
}

function stop(){
    NewnumbHours = numbHours;
    NewnumbMinutes = numbMinutes;
    NewnumbSeconds = numbSeconds;
    oldPresentDegMinutes = presentDegMinutes;

    worker.postMessage({
        action:'stop'
    })
    butt__stop.classList.remove('stop-active')
}

butt__start.addEventListener('click', start);
butt__stop.addEventListener('click', stop);

left.forEach(e => {
    e.addEventListener('click', () => {
        let clickParent = e.closest('.input__item');
        let clickParentClass = clickParent.classList[1];
        let classToId = '#' + clickParentClass;
        let leftInput = clickParent.querySelector(`${classToId}`);

        if (leftInput.value > 0) {
            return leftInput.value -= 1;
        }
    })
});

right.forEach(e => {
    e.addEventListener('click', () => {
        let clickParentR = e.closest('.input__item');
        let clickParentClassR = clickParentR.classList[1];
        let classToIdR = '#' + clickParentClassR;
        let rightInput = clickParentR.querySelector(`${classToIdR}`);
        if (String(rightInput.value).length == 0) {
            rightInput.value = 0;
        }
        if (rightInput.value < rightInput.max) {
            return rightInput.value = parseInt(rightInput.value) + 1;
        }
    })
});

reset.addEventListener('click', () => {
    worker.postMessage({
        action:'stop'
    })
    butt__stop.classList.remove('stop-active')
    windowNum.classList.remove('windowNone');
    timer.classList.add('windowNone');
    numbHours = 0;
    numbMinutes = 0;
    numbSeconds = 0;
    NewnumbHours = 0;
    NewnumbMinutes = 0;
    NewnumbSeconds = 0;
    presentDegHours = 360;
});