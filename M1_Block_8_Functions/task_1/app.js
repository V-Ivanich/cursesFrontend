//---task-1
// function getName1(name){
//   return `Имя равно ${name}`
// }

// const getName2 = function(name){
//   return `Имя равно ${name}`
// }

// const getName3 = name => `Имя равно ${name}`

// console.log(getName1('User'))
// console.log(getName2('UserName'))
// console.log(getName3('NameUser'))

//---task-2
// const getSumOfNumbers = (number, type = 'odd') => {
//   let result = NaN
//   if(!isNaN(parseFloat(number))){
//     switch(type){
//       case 'odd':
//         result = 0
//         for(let i = 1; i <=number; i +=2){
//           result += i
//         }
//         //! альтернативный цикл
//         // for(let i = 0; i <= number; i++){
//         //   if(i % 2)
//         //   result += i
//         // }
//         break
//       case 'even':
//         result = 0
//         for(let i = 0; i <=number; i +=2){
//           result += i
//         }
//         //! альтернативный цикл
//         // for(let i = 0; i <= number; i++){
//         //   if(i % 2){
//         //     continue
//         //   } else {
//         //     result += i
//         //   }
//         // }
//         break
//       case '':
//         result = 0
//         for(let i = 0; i <= number; i++){
//           result += i
//         }
//         break
//     }
//   }
//   return result
// }

// console.log(getSumOfNumbers(10))
// console.log(getSumOfNumbers(10, 'even'))
// console.log(getSumOfNumbers(10, ''))
// console.log(getSumOfNumbers())
// console.log(getSumOfNumbers('tr'))

//---task-3
function getDivisorsCount(number){
  if(typeof number === 'undefined' || isNaN(number) || typeof number === 'string'){
    return NaN
  }
  else if(number === 0 || !Number.isInteger(number)){
    alert(`${number} должен быть целым числом и больше нуля!`)
    return NaN
  }
}
console.log(getDivisorsCount(0))