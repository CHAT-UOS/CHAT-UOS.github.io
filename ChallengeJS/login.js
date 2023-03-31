const greets = [
  "Just do it!",
  "Have a good time,",
  "May you always shine beautifully,",
  "Study hard!",
];
const greet = greets[Math.floor(Math.random() * greets.length)];

const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saveUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  //1-3
  event.preventDefault();
  const username = loginInput.value;
  //input에 입력된 값을 username variable에 할당
  localStorage.setItem(USERNAME_KEY, username);
  /*
  setItem: local storage에 data를 저장하는 method
  key,value저장
  */
  painterGreeting(username);
  //painterGreeting function에 username value를 전달
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 기존에 hidden class를 제거했던 loginForm에 hidden class다시 할당
}

function stopEvent(event) {
  /*
  event handler
    HTML 요소에서 발생하는 이벤트를 처리하기 위해 사용되는 함수
    eventhandler호출->browser는 자동으로 이벤트 객체를 생성해 함수에 제공
    해당 이벤트에 대한 세부정보를 알아내거나 동작을 변경
    (여기서는 click이 event에 해당)
  */

  event.preventDefault();
  /*
  예를 들어, 폼 제출 이벤트의 경우 기본 동작은 페이지 새로고침
  event에 따라 기본동작이 달라짐
    submit->페이지 새로고침
  */
}
function painterGreeting(username) {
  //1-4
  //2-3

  // 시간에 따라 문구가 달라지도록 함

  greeting.innerText = `${greet} ${username}`;
  //greeting variable 호출, html h1에 `Hello ${username}` text 삽입
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //기존에 h1에 있던 class="hidden"제거
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

//1-1: saveUserName variable에 localStorage에서 USERNAME_KEY라는 키로 저장된 값 가져옴
//2-1
if (saveUserName === null) {
  //1-2
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //숨겨져 있던 form이 드러남
  console.log(saveUserName);
  loginForm.addEventListener("submit", onLoginSubmit);
  //loginForm이 submit이라는 event가 발생하면 onLoginSubmit function호출
  loginForm.addEventListener("submit", stopEvent);
} else {
  //2-2
  painterGreeting(saveUserName);
}

//form에 다가가면 튀어나오는 아이콘
const changeUsername = document.querySelector("#greeting");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
let icon = document.createElement("i");
const Quest = document.createElement("span");
const yes = document.createElement("i");
const no = document.createElement("i");

function yesf(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  box2.remove();
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.addEventListener("submit", stopEvent);
}
function nof(event) {
  event.preventDefault();
  box2.remove();
}

function questToUser(event) {
  event.preventDefault();
  box1.innerHTML = "";
  box2.innerHTML = "";
  greeting.appendChild(box2);
  box2.classList.add("box");
  box2.classList.add("box2");
  Quest.classList.add("questRename");
  Quest.innerText = "Want a rename?";
  yes.classList.add("fas", "fa-check", "confirm");
  no.classList.add("fas", "fa-times", "confirm");
  box1.classList.add(HIDDEN_CLASSNAME);
  box2.appendChild(Quest);
  box2.appendChild(yes);
  box2.appendChild(no);
  yes.addEventListener("click", yesf);
  no.addEventListener("click", nof);
}

function createIcon() {
  greeting.appendChild(box1);
  box1.classList.add("box");
  icon.classList.add("fas", "fa-redo-alt", "rename");
  box1.appendChild(icon);
  icon.addEventListener("click", questToUser);
}
function removeIcon() {
  box1.removeChild(icon);
  icon.removeEventListener("click", questToUser);
  box2.remove();
  box1.classList.remove(HIDDEN_CLASSNAME);
}
changeUsername.addEventListener("mouseenter", createIcon);
changeUsername.addEventListener("mouseleave", removeIcon);
