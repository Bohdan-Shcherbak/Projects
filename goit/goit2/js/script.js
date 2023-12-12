// alert("Hello, world!");
const myName = "Andrii";
const title = document.querySelector('.cats-title');
// зміна тексту
// title.textContent = 'hello';
// title.style.fontSize = '40px';
// Скорочений напис декількох класів title.style.cssText = "font-size: 40px; color:red";
const logotype = document.querySelector('.site-logo img');
// const body = document.querySelector(body);






// const catPhoto = document.querySelector(".cat-photo");
// змінює картинку на рандомну
// function onPhotoClick() {
//     catPhoto.src = "https://picsum.photos/200/300";
//     catPhoto.width = "296";
//     catPhoto.height = "370";
// }
// catPhoto.addEventListener("click", onPhotoClick);

const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
    selector: slider,
    loop: true,
    duration: 1000,
    // кількість виводимих слайдів
    // perPage: 2,
    easing: "cubic-bezier(.17,.67,.32,1.34)"

});

function onNextClick() {
    mySiema.next();
}

function onPrevClick() {
    mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);


const lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    closeText: '&#128514'
});


AOS.init();
