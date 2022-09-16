function getDateFormat(date, separator) {
  const dateTime = new Date(date)
  const arrDate = []
  arrDate.push(dateTime.getFullYear())
  arrDate.push(addZero(dateTime.getMonth() + 1))
  arrDate.push(addZero(dateTime.getDate()))
  console.log(arrDate.join(separator))
}

getDateFormat('2022 Jan 12', '-')
getDateFormat('2021 7 10', ':')
getDateFormat('2000, 5, 6', '_')
getDateFormat(1630916008000, ',')
getDateFormat('13 Jun 2022', '*')

function addZero(datas) {
  return datas < 10 ? '0' + datas : datas
}

//* ---answer
const addZero = (num) => (String(num).length === 1 ? `0${num}` : String(num))

const getDateFormat = (date, separator = '.') => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'
  }
  const dateItem = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return [dateItem, monthIndex + 1, year].map(addZero).join(separator)
}

console.log(getDateFormat(new Date()))
