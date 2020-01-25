const input = document.querySelector('#input'),
  number = document.querySelectorAll('.numbers div'),
  operator = document.querySelectorAll('.operators div'),
  result = document.querySelector('#result'),
  clear = document.querySelector('#clear');

let buttons,
  displayed,
  resultDisplayed = false;

const init = () => {
  console.log(number);

  // 숫자 버튼 클릭 핸들러 생성
  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', e => {
      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (resultDisplayed === false) {
        input.innerHTML += e.target.innerHTML;
      } else if (
        (resultDisplayed === true && lastChar === '+') ||
        lastChar === '-' ||
        lastChar === '×' ||
        lastChar === '÷'
      ) {
        resultDisplayed = false;
        input.innerHTML += e.target.innerHTML;
      } else {
        resultDisplayed = false;
        input.innerHTML = '';
        input.innerHTML = e.target.innerHTML;
      }
    });
  }

  // 연산자 버튼 클릭 핸들러 생성
  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', e => {
      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (
        // 이미 연산자가 적용 된 상태에 또 연산자버튼을 클릭 되었다면 마지막 연산자로 교체 ex) 10 +*
        lastChar === '+' ||
        lastChar === '-' ||
        lastChar === '×' ||
        lastChar === '÷'
      ) {
        let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;
      } else if (currentString.length === 0) {
        // 숫자 번호 입력이 없이 처음부터 연산자 버튼을 클릭 하면 번호 등록 안내 ex) input = "+" | "-" ...
        console.log('첫번째 번호 등록');
      } else {
        // 숫자 + 연산자 + 숫자 순서로 클릭 되었다면 정상 작동. ex) 5 + 10
        input.innerHTML += e.target.innerHTML;
      }
    });
  }

  // 'equal' 버튼 핸들러 생성
  result.addEventListener('click', e => {
    let inputString = input.innerHTML;

    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
    let numbers = inputString.split(/\+|\-|\×|\÷/g);

    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
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

    input.innerHTML = numbers[0]; // displaying the output

    resultDisplayed = true; // turning flag if result is displayed
  });

  clear.addEventListener('click', e => {
    input.innerHTML = '';
  });
};

init();
