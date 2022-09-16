
const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'


let subString = ''
let centralSymbol = 0
let subCentralSymbol = 0
let temp = ''

centralSymbol = Math.floor(javaScriptDescription.length / 2)
subString =javaScriptDescription.slice(0, centralSymbol)
subString = subString.replaceAll('a', 'A')
subString = subString.replaceAll('а', 'А')
subString = subString.replaceAll(' ', '')

temp = subString
for(let i =1; i < 3; i++){
  subString += temp
}
subCentralSymbol = Math.floor(subString.length / 2)
console.log(subString[subCentralSymbol])
console.log(subString)
