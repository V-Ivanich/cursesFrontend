let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия')
console.debug(typeof temperatureInCelsius, temperatureInCelsius)
temperatureInCelsius = parseInt(temperatureInCelsius, 10)
console.debug(typeof temperatureInCelsius)
debugger
if (temperatureInCelsius === 0) {
  debugger
  alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius >= 0) {
  debugger
  alert(
    'Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже'
  )
}

const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
console.debug('по фарингейту: ', temperatureInFahrenheit)
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
Фаренгейту.`)
//? -----answer
debugger
let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия')
debugger
temperatureInCelsius = Number(temperatureInCelsius)

debugger
if (temperatureInCelsius === 0) {
  alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
  alert(
    'Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже'
  )
}

debugger
const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
alert(
  `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
)
