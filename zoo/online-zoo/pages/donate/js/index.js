"use strict"

const circle = document.querySelectorAll('.circle');
const rangeValueLabel = document.getElementById('form__value');
const costNumb = document.querySelectorAll('.cost__number')
const button = document.querySelector('.button');

circle.forEach(e => {
  e.addEventListener('click', () => {
    rangeValueLabel.value = e.title;
  })

  e.addEventListener('mouseover', () => {
    let idd = e.id;
    e.classList.add('hoverCircle');
    costNumb[idd].classList.add('hoverCost')
  })

  e.addEventListener('mouseout', () => {
    let idd = e.id;
    e.classList.remove('hoverCircle');
    costNumb[idd].classList.remove('hoverCost')
  })
});