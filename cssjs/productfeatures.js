let img = document.querySelector('img.productimage')
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');

button1.addEventListener('click', () => {
  img.src = 'images/discussions.png'
})

button2.addEventListener('click', () => {
  img.src = 'images/explore.png'
})

button3.addEventListener('click', () => {
  img.src = 'images/messages.png'
})

button4.addEventListener('click', () => {
  img.src = 'images/surveys.png'
})

button5.addEventListener('click', () => {
  img.src = 'images/insights.png'
})
