const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // event의 preventDefault
  // ex) form에서 submit 이벤트가 발생하면 상단의 document까지
  // 영향이 가는데 preventDefault를 사용 하여 그걸 막을 수 있음.
  event.preventDefault();

  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    // 유저가 없는 경우
    askForName();
  } else {
    // 유저가 있는 경우
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
