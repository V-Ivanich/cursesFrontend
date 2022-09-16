const creationArray = []

function getSumOfSequence(number) {
  for (let i = 0; i < number; i++) {
    creationArray[i] = i + 1
  }
  return creationArray[0] + creationArray[creationArray.length - 1]
}
console.log(getSumOfSequence(5))
console.log(creationArray)

//?----answer
const getSumOfSequence = (number) => {
  const finalArray = []
  for (let i = 1; i <= number; i += 1) {
    finalArray.push(i)
  }

  return finalArray[0] + finalArray[finalArray.length - 1]
}

const result = getSumOfSequence(10)
console.log('result', result)
