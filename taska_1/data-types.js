//------task-1
// const existingUserLogin = 'the_best_user'
// const existingUserPassword = '12345678'

// let userLogin = prompt('Введите логин').trim()
// let userPassword = prompt('Введите пароль').trim()

// if(existingUserLogin === userLogin && existingUserPassword === userPassword){
//   alert(`Добро пожаловать, ${userLogin}!`)
// } else {
//   alert('Логин и (или) Пароль введены неверно')
// }

//-----task-2
let correctAnswers = 0
let incorrectAnswers = 0

let answer1 = 4
let answer2 = 4
let answer3 = 1
let answer4 = 12
let answer5 = 6

let question1 = Number(prompt('Сколько будет 2 + 2 ?').trim())
examination(answer1, question1)
let question2 = Number(prompt('Сколько будет 2 * 2 ?').trim())
examination(answer2, question2)
let question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim())
examination(answer3, question3)
let question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim())
examination(answer4, question4)
let question5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim())
examination(answer5, question5)

alert(`Конец теста! Правильные ответы - ${correctAnswers} Неправильные ответы - ${incorrectAnswers}`)

function examination(right, inPut){
  if(right === inPut){
    ++correctAnswers
    return alert('Ответ Верный!')
  } else {
    ++incorrectAnswers
    return alert('Ответ Неверный')
  }
}