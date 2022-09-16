const groceries = {
  '73Wakv': {
    name: 'Orange Juice',
    price: 1.5,
    discount: 10,
  },
  '3b133hd': {
    name: 'Chocolate',
    price: 2,
    discount: 2,
  },
  '5L3db9': {
    name: 'Coffe',
    price: 2.8,
    discount: 5,
  },
  '21fig4': {
    name: 'Potatos',
    price: 0.5,
    discount: 0,
  },
  '14g36eWp': {
    name: 'Whiskey',
    price: 5.3,
    discount: 20,
  },
}

const shoppingBag = [
  { productId: '73Wakv', count: 5 },
  { productId: '3b133hd', count: 10 },
  { productId: '5L3db9', count: 3 },
  { productId: '21fig4', count: 10 },
  { productId: '14g36eWp', count: 2 },
]

function getTotalPriceOfShoppingBag(shoppBagArray) {
  const costBagAll = shoppBagArray.map((elem) => {
    let priceItem = groceries[elem.productId].price
    let discountItem = groceries[elem.productId].discount
    let countItem = elem.count
    return costRecalculation(priceItem, discountItem, countItem)
  })
  return sumTotal(costBagAll)
}

function costRecalculation(price, discount, countItem) {
  let minusPercent = 0
  if (discount) {
    minusPercent = +(price - (price * discount) / 100).toFixed(2)
    minusPercent *= countItem
  } else {
    minusPercent = price * countItem
  }
  return minusPercent
}

function sumTotal(arr) {
  let totalPrice = arr.reduce((acc, item) => {
    acc += item
    return acc
  })
  return totalPrice
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice = ', totalPrice)

//*---answer
const groceries = {
  '73Wakv': {
    name: 'Orange Juice',
    price: 1.5,
    discount: 10,
  },
  '5L3db9': {
    name: 'Chocolate',
    price: 2,
    discount: 0,
  },
  // more items...
}

function getTotalPriceOfShoppingBag(shoppingBagArray) {
  if (shoppingBagArray.length === 0) {
    return 0
  }

  const totalPrice = shoppingBagArray.reduce((acc, { productId, count }) => {
    if (!groceries[productId]) return acc
    const { price, discount } = groceries[productId]
    const priceWithDiscount = price - (price / 100) * discount
    return acc + priceWithDiscount * count
  }, 0)

  return Number(totalPrice.toFixed(2))
}

const shoppingBag = [
  { productId: '73Wakv', count: 3 },
  { productId: '5L3db9', count: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice) // Возвращает 50.05
