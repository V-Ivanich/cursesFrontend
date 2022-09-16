const getSumOfNumbers = (number, type = 'odd') => {
  let result = NaN
  if (!isNaN(parseFloat(number))) {
    switch (type) {
      case 'odd':
        result = 0
        for (let i = 1; i <= number; i += 2) {
          result += i
        }
        //! альтернативный цикл
        // for(let i = 0; i <= number; i++){
        //   if(i % 2)
        //   result += i
        // }
        break
      case 'even':
        result = 0
        for (let i = 0; i <= number; i += 2) {
          result += i
        }
        //! альтернативный цикл
        // for(let i = 0; i <= number; i++){
        //   if(i % 2){
        //     continue
        //   } else {
        //     result += i
        //   }
        // }
        break
      case '':
        result = 0
        for (let i = 0; i <= number; i++) {
          result += i
        }
        break
    }
  }
  return result
}

console.log(getSumOfNumbers(10))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))
console.log(getSumOfNumbers())
console.log(getSumOfNumbers('tr'))

//? -----answer
const getSumOfNumbers = (number, type = 'odd') => {
  if (typeof number !== 'number') {
    return NaN
  }

  let sum = 0
  for (let i = 0; i <= number; i++) {
    const isEven = i % 2 === 0
    const isOdd = !isEven
    if (type === '') {
      sum += i
    } else if (isEven && type === 'even') {
      sum += i
    } else if (isOdd && type === 'odd') {
      sum += i
    }
  }

  return sum
}

const result = getSumOfNumbers(10, 'even')
console.log('result', result)
