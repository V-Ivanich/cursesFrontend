//!---taska-1
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// function giveParcel(){
//   alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
// }

// function leaveQueueWithoutParcel(){
//   alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди`)
// }

// giveParcel()
// giveParcel()
// giveParcel()

// for(let i = peopleWaiting.length; i != 0; i--){
//   leaveQueueWithoutParcel()
// }

//!---taska-2
// const creationArray = []

// function getSumOfSequence(number){
//   for(let i = 0; i < number; i++){
//     creationArray[i] = i + 1
//   }
//   return creationArray[0] + creationArray[creationArray.length -1]
// }
// console.log(getSumOfSequence(5))
// console.log(creationArray)

//!---taska-3
// const coffees = ['Latte', 'Cappuccino', 'Americano']

// const duplicateCoffees = coffees.map( elem => {
//   return elem.toLocaleLowerCase()
// })

// let coffeeName = prompt('Поиск кофе по названию:').trim().toLocaleLowerCase()

// if(typeof coffeeName === 'string'){
//   let indexCoffees = duplicateCoffees.findIndex(name => {
//     return name === coffeeName
//   })
//   if(indexCoffees !== -1){
//     coffeeName = coffees[indexCoffees]
//     alert(`Держите ваш любимый кофе ${coffeeName}. Он ${indexCoffees + 1}-й по популярности в нашей кофейне.`)
//   } else  alert('К сожалению, такого вида кофе нет в наличии')
// }

//!---taska-4
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatedPrices= prices.map(elem => {
//   return elem + 0.5
// })

// coffees.forEach((elem, index) => {
//   alert(`Кофе ${elem} сейчас стоит ${updatedPrices[index]} евро`)
// })

//!---task-5
// const clientsEstimations = []

// function askClientToGiveEstimation(){
//   const customerRating = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?', '1 - 10').trim())
//   if(typeof customerRating !== 'undefined' || !isNaN(customerRating) || customerRating !== 0){
//     clientsEstimations.push(customerRating)
//   }
// }

// for(let i = 0; i < 5; i++){
//   askClientToGiveEstimation()
// }
// const maxGrade = clientsEstimations.filter(item => {
//   return item > 5
// })
// const minGrade = clientsEstimations.filter(item => {
//   return item <= 5
// })

// alert(`Всего положительных оценок: ${maxGrade.length}; Всего отрицательных оценок: ${minGrade.length}`)

//!---taska-6  (1158411)
// const numbers = [10, 4, 100, -5, 54, 2];

// const methodReduce = numbers.reduce((accum, item) => {
//   return accum += Math.pow(item, 3)
// },0)
// console.log('method Reduce :',methodReduce)

// let couterForEach = 0
// const methodForEach = numbers.forEach(elem => {
//   return couterForEach += Math.pow(elem, 3)
// })
// console.log('method forEach:',couterForEach)

// let couterForOf = 0
// for(let item of numbers){
//   couterForOf += Math.pow(item, 3)
// }
// console.log('method for of :',couterForOf)

// let couterFor = 0
// for(let i = 0; i < numbers.length; i++){
//   couterFor += Math.pow(numbers[i], 3)
// }
// console.log('method for :', couterFor)