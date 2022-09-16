//---task-1

// let health = prompt('Введите число параметра "здоровье" для персонажа')
//   console.debug(health)
// if (health < 0 || !health) {
//   debugger
//   alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//   debugger
//   alert(`Параметр "здоровье" равен ${health}`);
// }

//---task-2
// let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
// console.debug(typeof temperatureInCelsius, temperatureInCelsius)
// temperatureInCelsius = parseInt(temperatureInCelsius, 10)
// console.debug(typeof temperatureInCelsius)
// debugger
// if (temperatureInCelsius === 0) {
//   debugger
//   alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius >= 0) {
//   debugger
//   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// console.debug('по фарингейту: ',temperatureInFahrenheit)
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`);

//---task-3
// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;
                
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//   console.log(totalJuniorDevelopersSalary)
//   totalJuniorDevelopersSalary += salaryWithTax;
//   console.log(totalJuniorDevelopersSalary)
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

//---task-4
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

//Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    let num
    num = numbers[i] ** 3;
    sum += num;
    console.log(sum)
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
console.log('массив numbers ? ', numbers)
for (let num of numbers){
    num = num ** 3;
    sum += num;
    console.log(sum)
} 
console.log(sum); // 1003904306910622800

//---ответ
let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i] ** 3;
}
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers) {
  sum += num ** 3;
}
console.log(sum); // 1158411

