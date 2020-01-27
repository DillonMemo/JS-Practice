let num = 0;

let counter = document.querySelector('#counter');
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');

increase.addEventListener('click', function(e) {
  num += 1;
  init();
});

decrease.addEventListener('click', function(e) {
  num -= 1;
  init();
});

function init() {
  counter.innerHTML = `${num}`;
}

init();
