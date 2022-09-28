// const calculator = {
//   plus: function(a , b) {
//     console.log(a + b)
//   },
//   minus: function(a, b) {
//     console.log(a - b)
//   },
//   div: function(a , b) {
//     console.log(a / b)
//   },
//   multi: function(a, b) {
//     console.log(a * b)
//   },
//   power: function(a, b) {
//     console.log(a ** b)
//   }

// }

// calculator.plus(10, 2)
// calculator.minus(10, 2)
// calculator.div(10, 2)
// calculator.multi(10, 2)
// calculator.power(10, 2)

// const age = 30
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2
//   return "hello"
// }
// const KrAge = calculateKrAge(age)

// console.log(KrAge)

const calculator = {
  plus: function(a , b) {
    return a + b
  },
  minus: function(a, b) {
    return a - b
  },
  div: function(a , b) {
    return a / b
  },
  multi: function(a, b) {
    return a * b
  },
  power: function(a, b) {
    return a ** b
  }

}
const plusResult = calculator.plus(2, 3)
const minusResult = calculator.minus(plusResult, 10)
const multiResult = calculator.multi(10, minusResult)
const divResult = calculator.div(multiResult, plusResult)
const powerResult = calculator.power(divResult, minusResult)

