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
      } else if (currentString.length === 0) {
      } else {
        input.innerHTML += e.target.innerHTML;
      }
    });
  }
};

init();
