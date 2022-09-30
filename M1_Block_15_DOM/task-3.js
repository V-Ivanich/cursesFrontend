const mainForm = document.querySelector('.create-task-block')
const tasksListContainer = document.querySelector('.tasks-list')
const tasks = []
const textErrorsEmpty = 'Название задачи не должно быть пустым.'
const textErrorsDublicate = 'Задача с таким названием уже существует.'

mainForm.addEventListener('submit', e => {
  e.preventDefault()
  const { target } = e
  const mainInput = target.taskName.value
  const getDublicate = tasks.filter(elem => {
    return elem.text === mainInput
  })

  if (mainInput) {
    if (getDublicate.length) {
      outErrors(textErrorsDublicate)
    } else {
      const errorsSpan = document.querySelector('.error-message-block')
      if (errorsSpan) errorsSpan.remove()
      const setId = Date.now()
      tasks.push({ id: setId, text: mainInput })
      const taskItem = createTaskItem(setId, mainInput)
      tasksListContainer.append(taskItem)
    }
  } else outErrors(textErrorsEmpty)
})

tasksListContainer.addEventListener('click', e => {
  const { target } = e
  const deleteButton = target.closest('button')
  if (deleteButton) {
    console.log(deleteButton)
  }
})

function outErrors(textErrors) {
  const errorsSpan = document.createElement('span')
  errorsSpan.classList.add('error-message-block')
  errorsSpan.textContent = textErrors
  mainForm.append(errorsSpan)
}

const createTaskItem = (taskId, taskText) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = taskId

  const taskItemMainContainer = document.createElement('div')
  taskItemMainContainer.className = 'task-item__main-container'

  const taskItemMainContent = document.createElement('div')
  taskItemMainContent.className = 'task-item__main-content'

  taskItem.append(taskItemMainContainer)
  taskItemMainContainer.append(taskItemMainContent)

  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'

  const inputCheckbox = document.createElement('input')
  inputCheckbox.type = 'checkbox'
  inputCheckbox.className = 'checkbox-form__checkbox'
  const inputId = `task-${taskId}`
  inputCheckbox.id = inputId

  const labelCheckbox = document.createElement('label')
  labelCheckbox.htmlFor = inputId

  const taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
  taskItemText.innerText = taskText

  const deleteButton = document.createElement('button')
  deleteButton.className =
    'task-item__delete-button default-button delete-button'
  deleteButton.innerText = 'Удалить'

  taskItemMainContent.append(checkboxForm, taskItemText)
  checkboxForm.append(inputCheckbox, labelCheckbox)
  taskItemMainContainer.append(deleteButton)

  return taskItem
}
