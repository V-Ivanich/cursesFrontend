const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100
  console.log(totalJuniorDevelopersSalary)
  totalJuniorDevelopersSalary += salaryWithTax
  console.log(totalJuniorDevelopersSalary)
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)
//? ---answer
const salaryOfJuniorDeveloper = 500

const numberOfJuniorDevelopers = 3
debugger
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0
debugger

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  debugger
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100
  totalJuniorDevelopersSalary += salaryWithTax
}

debugger
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)
