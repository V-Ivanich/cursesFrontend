const mainForm = document.querySelector('.create-task-block')
const listTasks = document.querySelector('.tasks-list')
const tasks = []

mainForm.addEventListener('submit', e => {
  e.preventDefault()
  const { target } = e
  const mainInput = target.taskName.value

  tasks[getNewDate()] = mainInput
  listTasks.innerHTML += `id = ${getNewDate()} --> task = ${mainInput} <br>`
})

function getNewDate() {
  return Date.now()
}
