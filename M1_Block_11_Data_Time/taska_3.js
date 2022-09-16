function addDays(date, days) {
  const newDay = days * 86400000
  const newDate = new Date(date).getTime() + newDay
  console.log(getDateFormat(newDate))
}

function getDateFormat(date) {
  const dateTemps = new Date(date)
  const arrDate = []
  arrDate.push(dateTemps.getFullYear())
  arrDate.push(addZero(dateTemps.getMonth() + 1))
  arrDate.push(addZero(dateTemps.getDate()))
  return arrDate.join('/ ')
}
function addZero(datas) {
  return datas < 10 ? '0' + datas : datas
}

addDays('2022 10 12', 5)

//* ---answer
const convertDaysToMs = (days) => days * 24 * 3600 * 1000

const addDays = (date, days) => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'
  }
  if (!days || typeof days !== 'number') return date

  return new Date(date.getTime() + convertDaysToMs(days))
}

const date = new Date()
console.log('before', date)
const newDate = addDays(date, 5)
console.log('after', newDate)
