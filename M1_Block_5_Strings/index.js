//-----task-3/4

let userName = prompt('Как вас зовут?')
userName = userName.toLocaleLowerCase().trim()

let userAge = prompt('Сколько вам лет?')
userAge = Number(userAge.trim())

alert(`Вас зовут ${userName} и вам ${userAge} лет`)
