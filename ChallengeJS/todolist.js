const toDoForm = document.getElementById("todo-Form");
const toDoInput = toDoForm.querySelector("label input");
const toDoList = document.getElementById("todo-list");

const TODOS_key = "todos-array";

let toDos = [];
//value를 수정가능한 variable 설정

function handleToDoSubmit(event) {
  /*
  2: event발생: submit, eventhandler실행
  */
  event.preventDefault();
  const newTodo = toDoInput.value;
  if (newTodo === "") {
    return;
  }
  toDoInput.value = "";
  //toDoInput의 value를 ""으로 변경
  const textIdGeneratorObj = {
    checked: false,
    text: newTodo,
    id: Date.now(), //(!===new Date())
  };
  /*
  textIdGeneratorObj라는 object생성
  Date.now(): 현재 시간을 밀리초(millisecond) 단위의 숫자 값으로 반환
  */
  toDos.push(textIdGeneratorObj);
  //toDos array에 textIdGeneratorObj(object)저장
  paintToDo(textIdGeneratorObj);
  //paintToDo라는 function 호출, arguement: textIdGeneratorObj(object)
  saveToDos();
}

function paintToDo(newToDo) {
  //textIdGeneratorObj(arguement)->newToDo(parameter)

  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";

  //이제까지 li, span, button을 새로 생성, but 아직 html에 추가하지 않음

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox-" + newToDo.id);
  checkbox.checked = newToDo.checked;
  checkbox.addEventListener("change", (event) => {
    newToDo.checked = event.target.checked;
    if (newToDo.checked === true) {
      span.classList.add("line-through");
    } else {
      span.classList.remove("line-through");
    }
    saveToDos();
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  //JS에서 생성한 li에 span, button 추가
  toDoList.appendChild(li);
  //li_deleted를 html에서 id="todo-list"를 가지는 ul에 저장
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  /*
  4: event발생: click, eventhandler실행
  ->기본동작(click요소 활성화)실행
  */
  const li_deleted = event.target.parentElement;
  //event가 일어난 button의 부모요소(li, n번째 할일)를 찾아 li에 저장

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li_deleted.id));
  /*
  JS array객체의 내장 method중 하나
  주어진 함수로부터 반환된 결과 값 => true인 요소만을 모아 새로운 배열 생성 
  원본 배열 변경X, 새로운 배열을 반환함
  
  li.id는 string type.
    Date.now()는 number type을 반환하나 
    html의 id는 항상 string이여야 하므로 자동으로 string으로 변경
  parseInt: 문자를 숫자로 전환함. 
  
  toDo라는 arguement,parameter생성
  li의 id와 비교해보고 같으면 제외한 뒤 새로운 array생성 
  */
  saveToDos();
  li_deleted.remove();
  //DOM에서 삭제된 li element를 제거하는 역할
}

function saveToDos() {
  //5
  localStorage.setItem(TODOS_key, JSON.stringify(toDos));
  /*
  key,value를 localStorage에 저장하는 역할
  key, value 둘 다 반드시 문자열로 저장해야함
  
  JSON.stringfy():JS 객체나 배열 등의 값을 
  문자열(string) 형태로 변환한 뒤, 이 값을 로컬 스토리지에 저장
  */
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_key);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //JSON.stringify를 활용해 문자열로 변경했던 data를 다시 array로 되돌림.
  parsedToDos.forEach(paintToDo);
  /*
  array에 배열된 element마다 주어진 함수를 실행할 수 있음.
  for loop보다 가독성 높음, 코드 길이를 줄일 수 있음.

  새로 array를 만들었으므로 다시 paintToDo 함수를 각 element마다 가동
  */
  toDos = parsedToDos;
}
const ToDoText = document.querySelector("#ToDo .ToDoText");
const newScreen = document.getElementById("newScreen");
const span = document.querySelector(".ToDoText span");

function ToDoTextClick(event) {
  if (newScreen.classList.contains("hidden")) {
    event.preventDefault();
    newScreen.classList.remove("hidden");
    span.classList.add("real-color");
    newScreen.style.animation = "listAppear 0.6s linear";
  } else {
    event.preventDefault();
    newScreen.style.animation = "listDisappear 0.6s linear";

    setTimeout(function () {
      newScreen.classList.add("hidden");
    }, 595);
    span.classList.remove("real-color");
  }
}

ToDoText.addEventListener("click", ToDoTextClick);
