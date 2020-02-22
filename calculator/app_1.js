const input = document.querySelector('#input'),
  number = document.querySelectorAll('.numbers div'),
  operator = document.querySelectorAll('.operators div'),
  result = document.querySelector('#result'),
  clear = document.querySelector('#clear');

// result 이벤트 일 어 날때
let resultDisplayed = false;

// == function init() {}
const init = () => {
  console.log(number);
  // numbers event handle
  for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    number[i].addEventListener('click', e => {
      console.log(number[i]);
      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (resultDisplayed === false) {
      } else if (
        (resultDisplayed === true && lastChar === '+') ||
        lastChar === '-' ||
        lastChar === '×' ||
        lastChar === '÷'
      ) {
      } else {
      }
    });
  }
};

init();
