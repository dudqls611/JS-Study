const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 3. form이 submit되면 input으로부터 유저정보를 받음
function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  
  // 4. input에서 받은 user를 가진 paintGreetings를 호출함
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}


// 1. local storage에 유저정보가 있으면 받아와서 인자로 넣어줌
const savedUsername = localStorage.getItem(USERNAME_KEY)
// 2. local storage에 유저정보가 없으면 form의 submit을 기다림
if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  // show the greetings
  paintGreetings(savedUsername)
}