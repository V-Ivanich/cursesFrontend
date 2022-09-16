//-----taska3
// let question1 = confirm('JavaScript появился в 1995 году?')
// if(question1)
//   alert('Верно')
// else
//   alert('в 1995 году')

// let question2 = confirm('Спецификация JavaScript называется ECMAScript?')
// if(question2 )
//   alert('Верно')
// else
//   alert('ECMAScript')

// let question3 = confirm('JavaScript был создан за 1 месяц?')
// if(question3)
//   alert('за 10 дней')
// else
//   alert('Верно')

//----taska4

// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!')
//   if (newStudent) {
//     newStudent = newStudent.trim()
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

//! while
let counter = 3
while(counter > 0){
let newStudent = prompt('Введите имя нового студента!')
newStudent = newStudent.trim()
alert(`Добро пожаловать, ${newStudent}!`)
--counter
}

//! do while
let counter2 = 0
do {
let newStudent = prompt('Введите имя нового студента!')
newStudent = newStudent.trim()
alert(`Добро пожаловать, ${newStudent}!`)
++counter2
}
while(counter2 < 3)

//-------task5--sum
let sum = 0
for(let i = 0; i<=100; i++){
  sum += i
}
alert(`сумма = ${sum}`)