let a = 221; // const(constant) 상수로 변경하여 선언 할 경우 에러 발생
const b = a - 5;
a = 4;

console.log('a', a, 'b', b);

let type = 'string 입니다';
console.log(typeof type);

// Var example
var greeting1 = 'hey hi';
var times1 = 4;

if (times1 > 3) {
  var greeting1 = 'say Hello var example';
  console.log(greeting1);
}

console.log(greeting1); //"say Hello instead"

// 고전적이면서도 유명한 예
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}
// 열번 모두 10

// Let example
let greeting2 = 'say Hi';
let times2 = 4;

if (times2 > 3) {
  let hello2 = 'say Hello let example';
  console.log(hello2); //"say Hello instead"
}
//console.log(hello2) // hello is not defined

// Versus

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}
// 0 ~ 9

// Const example
// const greeting3  // 초기화 하지 않아 error 발생
const greeting3 = 'hello const';
const times3 = 4;
//greeting3 = "hello change"  // 초기화가 불가능함.

// <-- 주석에 대해 설명.
/* 또 다른 주석 */

// String (문자열)
const text = 'dillon';
console.log(text);

// Boolean
const bool = false;
console.log(bool);

// Number
const num = 123;
console.log(num);

// Array (ex. 요일)
const week = ['일', '월', '화', '수', '목', '금', '토'];
console.log(week);

// Object
const myInfo = {
  name: 'Dillon',
  age: 27,
  gender: 'Male',
  job: 'Developer',
  favFood: ['삽겹살', '치킨'],
};
console.log(myInfo);
console.log(myInfo.gender);

myInfo.age = 28;
console.log(myInfo);

// Function
function square(num1, num2) {
  console.log(num1 * num2);
}
square(10, 5);

const con = {
  log: function(name /*<- argument(인자)*/) {
    return console.log(name);
  },
};
con.log('test');
// 백틱(`) 설명
function description(name, age) {
  console.log(`제 이름은 ${name}이고 나이는 ${age} 입니다.`);
}
const dillon = description('dillon', 27);
console.log(dillon); // <-- undefined를 출력

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
};
console.log(calculator.plus(5, 5));

// if, else, and, or > if else function practice

// String, Number, boolean, array, object, function
// 사칙연산자(+, -, *, /), 비교연산자(===, !==, &&, ||)
