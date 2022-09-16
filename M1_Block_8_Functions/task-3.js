//---task-3
function getDivisorsCount(number) {
  if (
    typeof number === 'undefined' ||
    isNaN(number) ||
    typeof number === 'string'
  ) {
    return NaN
  } else if (number === 0 || !Number.isInteger(number)) {
    alert(`${number} должен быть целым числом и больше нуля!`)
    return NaN
  }
}
console.log(getDivisorsCount(0))
//? ---answer
function getDivisors(number) {
  if (typeof number !== 'number') {
    return NaN
  }

  if (!Number.isInteger(number) || number < 0) {
    alert('number должен быть целым числом и больше нуля!')
    return
  }

  let counter = 0
  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      counter++
    }
  }

  return counter
}

const result = getDivisors(10)
console.log('result', result)
