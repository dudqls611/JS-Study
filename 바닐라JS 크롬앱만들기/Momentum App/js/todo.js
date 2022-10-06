const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
const toDos = [] // newTodo가 만들어질때마다 array로 push

// 5. array내용을 localstorage에 넣는다 
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // JSON.stringify : 스트링이 아닌 배열처럼 생긴 스트링으로 저장
}


// 4. 
function deleteToDo(event) { //button을 클릭하면 event를 얻는다
  const li = event.target.parentElement // 그 event는 button이라는 target을 준다, button의 부모는 li다
  li.remove() //그 li를 지운다
}

// 3. 입력한 value의 세부 내용 -> li, span을 만들고 각자 위치html에 넣는다
function paintToDo(newTodo) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.innerText = newTodo
  const button = document.createElement("button") // 삭제할 버튼만듦
  button.innerText = "❌"
  button.addEventListener("click", deleteToDo)

  li.appendChild(span) // span을 li 안으로 보낸다
  li.appendChild(button)
  toDoList.appendChild(li) // li를 toDoList 안으로 보낸다
}

// 2. 입력한 value를 받는다
function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  toDos.push(newTodo) // newTodo가 만들어질때마다 array로 push
  paintToDo(newTodo)
  saveToDos()
}

// 1. form으로부터 submit을 받는다
toDoForm.addEventListener("submit", handleToDoSubmit)




// 6.
const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)//살아있는 배열오브젝트로 만듦 //localstorage가 null아니고 뭔가 있을경우
  parsedToDos.forEach((item) => console.log("this is the turn of ", item)) // forEach는 array의 각 item에 대해 function을 실행하게 해줌
}

// function sayHello(item) {
//   console.log("this is the turn of", item)
// }
// ===
// forEach((item) => console.log("this is the turn of ", item))와 같음