const mainForm = document.querySelector('.create-task-block')
const tasksListContainer = document.querySelector('.tasks-list')
const tasks = []
const textErrorsEmpty = 'Название задачи не должно быть пустым.'
const textErrorsDublicate = 'Задача с таким названием уже существует.'

mainForm.addEventListener('submit', e => {
  e.preventDefault()
  const { target } = e
  const mainInput = target.taskName.value
  const getDublicate = Object.values(tasks).includes(mainInput)
  if (mainInput) {
    if (getDublicate) {
      outErrors(textErrorsDublicate)
    } else {
      const errorsSpan = document.querySelector('.error-message-block')
      if (errorsSpan) errorsSpan.remove()
      const setId = Date.now()
      tasks[setId] = mainInput
      listTasks.innerHTML += `id = ${setId} --> task = ${mainInput} <br>`
      console.log(tasks)
    }
  } else outErrors(textErrorsEmpty)
})

function outErrors(textErrors) {
  const errorsSpan = document.createElement('span')
  errorsSpan.classList.add('error-message-block')
  errorsSpan.textContent = textErrors
  mainForm.append(errorsSpan)
}
