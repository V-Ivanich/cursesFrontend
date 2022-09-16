//!-----Lesson-1
// JavaScript-код с созданием переменных
/*
Автор:
Солдатов Василий
*/

//!-----Lesson-2
const myName = 'Vasily'
const mySurname = 'Soldatov'
let myFavoriteDrink = 'milk'
const myFavoriteAnimal = 'cat'
let myFavoriteProgrammingLanguage = 'JavaScript'

console.log(myName)
console.log(mySurname)
console.log(myFavoriteDrink)
console.log(myFavoriteAnimal)
console.log(myFavoriteProgrammingLanguage)

//!-----Lesson-3
// const carName ='Zapor'
// let maxCarSpeed = '199.9'
// let carOwner = 'Jhon'

// alert(carName)
// alert(maxCarSpeed)
// alert(carOwner)

//!-----Lesson-4
const carName ='Zapor'
let maxCarSpeed = '199.9'
let carOwner = 'Jhon'

console.log('У машины изменилась скорость', maxCarSpeed)
carOwner = 'Ivan'
console.log('У машины изменился владелец', carOwner)
maxCarSpeed = '210'
console.log('У машины изменилась скорость', maxCarSpeed)
carOwner = 'Zorik'
console.log('У машины изменился владелец', carOwner)
maxCarSpeed = '300'
console.log('У машины изменилась скорость', maxCarSpeed)
carOwner = 'Evgen'
console.log('У машины изменился владелец', carOwner)

//!-----Lesson-5
const question1 = 'Какая самая маленькая страна мира по населению?'
const question2 = 'Какая самая большая страна мира по населению?'
const question3 = 'Какой самый большой материк на планете?'

const answer1 = 'Китай'
const answer2 = 'Евразия'
const answer3 = 'Ватикан'

console.log(question1, 'Ответ:', answer3)
console.log(question2, 'Ответ:', answer1)
console.log(question3, 'Ответ:', answer2)

//-дальше не знаю с какого урока


let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

//! обработка =>

ageOfPerson2 = ageOfPerson1
console.log( ageOfPerson2, typeof ageOfPerson2)

nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

console.log('Переменную с const переопределить нельзя.',
  bestProgrammingLanguage1, typeof bestProgrammingLanguage1,
  bestProgrammingLanguage2, typeof bestProgrammingLanguage2)

initialValue2 = initialValue1
console.log(initialValue2, typeof initialValue2)

console.log('var является устаревшим')
let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

helloText2 = helloText1
console.log(helloText2, typeof helloText2)