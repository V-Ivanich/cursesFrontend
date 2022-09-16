//------task-1

const myName = 'Василий'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Максим Филанович'
const reasonText = 'очень интересно все новое, и когда это делаешь своими руками'
const numberOfMonth = 11

let temp = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`
console.log(temp)

//-----task-2

let myInfoText = temp
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toLocaleLowerCase())
console.log(myInfoText)
let course = 'курс'
myInfoText = myInfoText.replaceAll(course, course.toLocaleUpperCase())
console.log(myInfoText)
console.log('длина -',myInfoText.length)
console.log('первый символ- ',myInfoText[0],'последний символ- ', myInfoText[myInfoText.length - 1])

//-----task-3/4

let userName = prompt('Как вас зовут?')
userName = userName.toLocaleLowerCase().trim()

let userAge = prompt('Сколько вам лет?')
userAge = Number(userAge.trim())

alert(`Вас зовут ${userName} и вам ${userAge} лет`)