let inputNum = document.querySelector('.input-conclusion__input-numb');
let oldResult = document.querySelector('.input-conclusion__old-result');

let cleaner = document.querySelector('.cleaner');
let clearLast = document.querySelector('.clear-last');
let percent = document.querySelector('.percent');

let equal = document.querySelector('.butt__equal-to');
let actBut = document.querySelectorAll('.active-button');


let counter = 0;

cleaner.addEventListener('click', () => {
    inputNum.value = '';
});

percent.addEventListener('click', () => {
    let newinp = inputNum.value.split('*');
    newinp[newinp.length - 1] = newinp[newinp.length - 1] / 100 + '';
    newinp = newinp.join(',').replace([','], ['*']);
    inputNum.value = newinp;
})

actBut.forEach(function (element) {
    element.addEventListener('click', () => {
        if (counter == 0) {
            inputNum.value = '';
        }
        inputNum.value = inputNum.value + element.name;
        counter++;
    })
});


function funcEqual() {
    inputNum.value = eval(inputNum.value);
    oldResult.innerHTML = inputNum.value;
    counter = 0;
}

equal.addEventListener('click', funcEqual)

clearLast.addEventListener('click', () => {
    let newInput = inputNum.value.split('');
    newInput.pop();
    inputNum.value = newInput.join('');
})

// ******************************************************
const result = document.querySelector('#result'),
    expression = document.querySelector('#expression'),
    num = document.querySelectorAll('.number:not(.equals)'),
    operation = document.querySelectorAll('.operation'),
    equals = document.querySelector('.equals'),
    clear = document.querySelector('#clear'),
    ce = document.querySelector('#ce');
let ex = ''; // the expression string to be eval'd
result.innerHTML = '0';



function clickN() { // when we click on a number
    if (!ex || typeof (ex) === 'number' || ex === '0') {
        expression.innerHTML = this.id;
        ex = this.id;
        // console.log('empty');
    } else {
        expression.innerHTML += this.id;
        ex += this.id;
        // console.log('number');

    }
    // console.log(ex);
    result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
    // console.log(result);
    // console.log(ex);
    checkLength(result.innerHTML);
};

function clickO() { // when we click on an operation
    console.log(ex + 'opera');
    if (!ex) {
        return;
    }
    ex = ex.toString().replace(/=/, '');
    if (ex.match(/\/|\*|\+|-|=/)) {
        ex = eval(ex).toString();
    }
    expression.innerHTML = expression.innerHTML.replace(/=/, '') + this.id;
    ex += this.id;
    result.innerHTML = this.id;
};



Array.from(num).forEach(function (element) { // assign appropriate function to all numbers and operations
    element.addEventListener('click', clickN);
});

Array.from(operation).forEach(function (element) {
    element.addEventListener('click', clickO);
});

// clear all on click
clear.addEventListener('click', () => {
    result.innerHTML = '';
    expression.innerHTML = '';
    ex = '';
})

// clear last entry on click
ce.addEventListener('click', () => {
    if (!expression.innerHTML.match(/=$/)) {

        expression.innerHTML = doCE(expression.innerHTML);
        ex = doCE(ex);
        result.innerHTML = 0;

        function doCE(arg) {
            arg = arg.split(/([\/\*\+\-\=])/g);
            arg.splice(-1, 1);
            return arg.join('');
        }
    }
})

equals.addEventListener('click', () => {
    if (!ex) {
        result.innerHTML = '0';
    } else {
        // console.log(ex);

        ex = eval(ex);
        expression.innerHTML += '=';
        result.innerHTML = trim12(ex);
    }
})

function checkLength(arg) { // if we enter a number that's too long
    if (arg.toString().length > 14) {
        expression.innerHTML = 'number too long'.toUpperCase();
        result.innerHTML = '0';
        ex = '0';
    }
}

function trim12(arg) { // if we calculate a number that's too long
    if (arg.toString().length > 14) {
        ex = parseFloat(arg.toPrecision(12));
        if (ex.toString().length > 14) {
            ex = ex.toExponential(9);
        };
        return ex;
    } else {
        return arg;
    }
}