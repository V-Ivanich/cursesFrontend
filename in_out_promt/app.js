
let userString = prompt('Введите текст для обрезки').trim()
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки').trim()
startSliceIndex = Number(startSliceIndex)
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки').trim()
endSliceIndex = Number(endSliceIndex)

let string = userString.slice(startSliceIndex, endSliceIndex)

alert(`Результат: ${string}`)

//----task-6
// let userText = prompt('Введите текст').trim()
// let wordFromText = prompt('Введите слово из текста').trim()
// let indexOfWord = userText.indexOf(wordFromText)

// let string = userText.slice(0, indexOfWord)

// alert(`Результат: ${string}`)