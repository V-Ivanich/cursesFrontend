const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

function giveJobToStudent(student, jobName) {
  const tempObject = { ...student }
  tempObject.job = jobName
  alert(
    `Поздравляем! У студента ${tempObject.fullName} появилась новая работа! Теперь он ${tempObject.job}”`
  )
  return tempObject
}
console.log(updatedStudent)

//* ---answer
const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  )
  return {
    ...student,
    job: jobName,
  }
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
console.log('updatedStudent', updatedStudent)
