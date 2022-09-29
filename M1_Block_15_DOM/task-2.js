const mainForm = document.querySelector('.create-task-block')
const listTasks = document.querySelector('.tasks-list')
const tasks = []
const textErrorsEmpty = 'Название задачи не должно быть пустым.'
const textErrorsDublicate = 'Задача с таким названием уже существует.'

mainForm.addEventListener('submit', e => {
  e.preventDefault()
  const { target } = e
  const mainInput = target.taskName.value

  tasks.push({ id: getNewDate(), task: mainInput })
  listTasks.innerHTML += `id = ${getNewDate()} --> task = ${mainInput} <br>`
})

function getNewDate() {
  return Date.now()
}

function outErrors() {
  const errorsSpan = document.createElement('span')
  errorsSpan.classList.add('error-message-block')
  return listTasks.before(errorsSpan)
}
