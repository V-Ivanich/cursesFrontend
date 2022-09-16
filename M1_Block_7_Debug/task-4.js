//---task-4
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

//Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  let num
  num = numbers[i] ** 3
  sum += num
  console.log(sum)
}
console.log(sum) // 1158411

// Через цикл for of
sum = 0
console.log('массив numbers ? ', numbers)
for (let num of numbers) {
  num = num ** 3
  sum += num
  console.log(sum)
}
console.log(sum) // 1003904306910622800

//?---ответ
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i] ** 3
}
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers) {
  sum += num ** 3
}
console.log(sum) // 1158411
