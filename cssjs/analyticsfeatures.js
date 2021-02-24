let img2 = document.querySelector('img.analyticsimage')
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');

button6.addEventListener('click', () => {
  img2.src = 'images/classwide.png'
})

button7.addEventListener('click', () => {
  img2.src = 'images/individual.png'
})

button8.addEventListener('click', () => {
  img2.src = 'images/feedbacks.png'
})
