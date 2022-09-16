
const strTest = 'Мам6а2МылаРам88упоФтоме34йнаДое5лоу9фип22ОшлА'
const lowSymbol = [
  'а','б','в','г','д','е','ё','ж','з','и','й','к','л',
  'м','н','о','п','р','с','т','у','ф','х','ц','ч','ш',
  'щ','ъ','ы','ь','э','ю','я'
]
let strEnd = ''
let accum = ''
let flag = false

for(let i = 0; i < strTest.length; i++){
  let symbol = strTest[i]
  const isSymbol = !isNaN(parseInt(symbol))
  if(symbol === symbol.toLocaleUpperCase() && !isSymbol){ //big symbol
    symbol = symbol.toLocaleLowerCase()
    let massSymbol = lowSymbol.indexOf(symbol)
    if(massSymbol < 32){
      ++massSymbol
      strEnd += lowSymbol[lowSymbol.length - massSymbol]
    }
  } else {
    strEnd += strTest[i]
  }
  if(isSymbol){ //number
    accum += strTest[i]
    flag = true
  }
}
console.log(strTest)
console.log(strEnd)
console.log(accum)

function addNewSymbol(pos, flag){
  flag = false
  accum = Number(accum)
  if(accum < 10){

  }
}
