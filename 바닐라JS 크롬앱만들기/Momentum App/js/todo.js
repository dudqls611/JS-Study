const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

// 3. 입력한 value의 세부 내용 -> li, span을 만들고 각자 위치html에 넣는다
function paintToDo(newTodo) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  li.appendChild(span) // span을 li 안으로 보낸다
  span.innerText = newTodo
  toDoList.appendChild(li) // li를 toDoList 안으로 보낸다
}

// 2. 입력한 value를 받는다
function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  paintToDo(newTodo)
}

// 1. form으로부터 submit을 받는다
toDoForm.addEventListener("submit", handleToDoSubmit)