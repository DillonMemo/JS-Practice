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
      // console.log(e);
      console.log(number[i]);
      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (resultDisplayed === false) {
        // = input.innerHTML = input.innerHTML + e.target.innerHTML;
        input.innerHTML += e.target.innerHTML;
      }
      // else if (
      //   (resultDisplayed === true && lastChar === '+') ||
      //   lastChar === '-' ||
      //   lastChar === '×' ||
      //   lastChar === '÷'
      // ) {

      // } else {
      // }
    });
  }

  // 연산자 버튼 클릭 핸들러 생성
  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', e => {
      console.log(e.target.innerHTML);

      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
        let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;
      } else if (currentString.length === 0) {
        alert('숫자가 없습니다.');
      } else {
        input.innerHTML += e.target.innerHTML;
      }
    });
  }

  // 'equal' 버튼 클릭 이벤트 핸들러 생성
  result.addEventListener('click', e => {
    let inputString = input.innerHTML;

    let numbers = inputString.split(/\+|\-|\×|\÷/g);

    let operators = inputString.replace(/[0-9]|\./g, '').split('');

    let divide = operators.indexOf('÷');
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf('÷');
    }

    let multiply = operators.indexOf('×');
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf('×');
    }

    let subtract = operators.indexOf('-');
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf('-');
    }

    let add = operators.indexOf('+');
    while (add != -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf('+');
    }

    input.innerHTML = numbers[0];

    resultDisplayed = true;
  });
};

init();
