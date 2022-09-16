const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

function giveJobToStudent(student, jobName) {
  const tempObject = { ...student };
  tempObject.job = jobName;
  alert(
    `Поздравляем! У студента ${tempObject.fullName} появилась новая работа! Теперь он ${tempObject.job}”`
  );
  return tempObject;
}
console.log(updatedStudent);
