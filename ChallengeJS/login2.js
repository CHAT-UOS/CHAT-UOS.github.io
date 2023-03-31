const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  painterGreeting(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function stopEvent(event) {
  event.preventDefault();
}

function painterGreeting(username) {
  greeting.innerText = `Have a good time ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painterGreeting(saveUserName);
}
