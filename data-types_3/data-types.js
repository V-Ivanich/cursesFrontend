//------task-1
const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

if(existingUserLogin === userLogin && existingUserPassword === userPassword){
  alert(`Добро пожаловать, ${userLogin}!`)
} else {
  alert('Логин и (или) Пароль введены неверно')
}

//-----task-2
let question1 = prompt('Сколько будет 2 + 2 ?').trim()
let question2 = prompt('Сколько будет 2 * 2 ?').trim()
let question3 = prompt('Сколько будет 2 + 2 ?').trim()
let question4 = prompt('Сколько будет 2 + 2 ?').trim()
let question5 = prompt('Сколько будет 2 + 2 ?').trim()