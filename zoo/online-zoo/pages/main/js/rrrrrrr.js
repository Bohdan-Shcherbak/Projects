const button = document.querySelector('.form-button');
const input = document.querySelector('.input');
var element = document.querySelector('input[type=email]');

let r = 0;
function rr() {
    if (input.getAttribute('invalid') !== null) {
        button.addEventListener('mouseover', () => {
            button.classList.toggle('active');

        });
        // button.addEventListener('mouseout', () => {
        //     button.classList.toggle('active');

        // });
    }

};

// rr();
function kljv() {


    if (element.invalid) {
        // doSomething();
        console.log('yes');
    }
}

kljv();