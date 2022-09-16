function getDaysBeforeBirthday(nextBirthdayDate) {
  const nextDate = new Date(nextBirthdayDate).getTime()
  const nowDate = Date.now()
  console.log(convertMsToDays(nowDate, nextDate))
}

function convertMsToDays(nowDate, nextDate) {
  return Math.round((nextDate - nowDate) / 86400000) //* 1day = 24 hours = 1440 min = 86400 sec = 86400000 msec
}

getDaysBeforeBirthday('2023 7 29')

//*---answer
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24)

const getDaysBeforeBirthday = (birthdayDate) => {
  if (!(birthdayDate instanceof Date)) {
    return 'Параметр функции должен быть экземпляром класса Date!'
  }
  const currentDateMs = Date.now()
  const birthdayDateMs = birthdayDate.getTime()
  return convertMsToDays(birthdayDateMs - currentDateMs)
}

console.log(getDaysBeforeBirthday(new Date(2025, 11, 10)))
