const toDoForm = document.querySelector(".js-todoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LIST = "toDos";
let toDoArr = [];

function deleteTodo(event) {
  const target = event.target;
  const parentTarget = target.parentNode;
  toDoList.removeChild(parentTarget);

  const cleanToDos = toDoArr.filter(function(toDo) {
    // console.log(toDo.id, parentTarget.id);
    return toDo.id !== Number(parentTarget.id);
  });

  toDoArr = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // JSON : Javascript Object Notation
  // localStorage는 객체를 저장 할 수 없으며 오직 string 타입만 저장이 가능하다.
  localStorage.setItem(TODOS_LIST, JSON.stringify(toDoArr));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDoArr.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text,
    id: newId
  };
  toDoArr.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LIST);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
