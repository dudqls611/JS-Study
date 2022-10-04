const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
getClock()
// 1000ms마다 getClock 반복
setInterval(getClock, 1000)