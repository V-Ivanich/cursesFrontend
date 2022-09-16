//!---taska-1
// const goals = [8, 1, 1, 3, 2, -1, 5]
// //?--1
// const maxGoals = goals.reduce((accum, elem, index) => {
//   if(accum < elem){
//     accum = elem
//   }
//   return accum
// },0)

// alert(`Самый результативный матч был под номером ${goals.indexOf(maxGoals) + 1}. В нем было забито ${maxGoals} гол(ов).`)

// //?--2
// const minGoals = goals.reduce((accum,elem, index) => {
//   if(accum > elem && elem > 0 ){
//     accum = elem
//   }
//   return accum
// })

// let numberMatch =''
// goals.forEach((item, index) => {
//   if(item === minGoals){
//     numberMatch += ' ' + (String(index + 1))
//   }
// })
// alert(`Самые не результативные матчи были под номерами ${numberMatch}. В каждом из них было забито по ${minGoals} мячу(а).`)

// //?--3
// const allGoals = goals.reduce((accum, elem) => {
//   if(elem > 0){
//     accum += elem
//   }
//   return accum
// },0)

// alert(`Общее количество голов за сезон равно ${allGoals}`)

// //?--4
// const defeat = goals.includes(-1) ? 'да' : 'нет'
// alert(`Были автоматические поражения: ${defeat}`)

// //?--5
// alert(`Среднее количество голов за матч равно ${Math.floor(allGoals/goals.length)}`)

// //?--6
// const sortArray = goals.sort((a, b) => {
//   return a - b
// })
// alert(sortArray.join(',  '))

//!---taska-2

const operations = [
  ">", "<", "=", "+", "-", "*", "/"
]
const arrayProcessing = []

function parseArray(expression){
  arrayProcessing.length = 0
  let result = false
  let tempFlagItems = 1

  expression.forEach((item, index) => {
    if((tempFlagItems === 1 && index === 0) || tempFlagItems === 3){
      if(!!Number(item)){
        arrayProcessing.push(item)
        tempFlagItems++
      }
    }
    if(tempFlagItems === 2){
      if(operations.includes(item)){
        arrayProcessing.push(item)
        tempFlagItems++
      }
    }
    if(tempFlagItems > 3){
      result = true
    }
  })
  return result
}

function getMathResult(expression){
  let result = 'Ошибка'
  if(expression.length >= 3){
    if(parseArray(expression)){
      result = calculations()
    }
    else result = 'Ошибка'
  } 
  console.log(result)
  return true
}

function calculations(){
  const firstArgument = Number(arrayProcessing[0])
  const secondArgument = Number(arrayProcessing[2])
  const operationItems = arrayProcessing[1]
  let result = 0
  switch(operationItems){
    case '-':
      result = firstArgument - secondArgument
      break
    case '+':
      result = firstArgument + secondArgument
      break
    case '*':
      result = firstArgument * secondArgument
      break
    case '/':
      result = firstArgument / secondArgument
      break
    case '>':
      result = firstArgument > secondArgument
      break
    case '<':
      result = firstArgument < secondArgument
      break
    case '=':
      result = firstArgument = secondArgument
      break
  }
  return result
}

getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'