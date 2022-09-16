const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((elem) => {
  return elem + 0.5
})

coffees.forEach((elem, index) => {
  alert(`Кофе ${elem} сейчас стоит ${updatedPrices[index]} евро`)
})
//? ---answer
const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)

coffees.forEach((coffeeName, index) => {
  alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`)
})
