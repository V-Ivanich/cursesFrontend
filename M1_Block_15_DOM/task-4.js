const mainForm = document.querySelector('.create-task-block')
const tasksListContainer = document.querySelector('.tasks-list')
const tasks = []
const textErrorsEmpty = 'Название задачи не должно быть пустым.'
const textErrorsDublicate = 'Задача с таким названием уже существует.'
let switchTheme = 7
let idDeleteItems

const bodys = document.querySelector('body')
const modalOverlay = document.createElement('div')
modalOverlay.classList.add('modal-overlay', 'modal-overlay_hidden')
bodys.append(modalOverlay)

const deleteModal = document.createElement('div')
deleteModal.classList.add('delete-modal')
modalOverlay.append(deleteModal)

const modalQuestion = document.createElement('h3')
modalQuestion.classList.add('delete-modal__question')
modalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?'
deleteModal.prepend(modalQuestion)

const deleteModalButton = document.createElement('div')
deleteModalButton.classList.add('delete-modal__buttons')
deleteModal.append(deleteModalButton)

const cancelButton = document.createElement('button')
cancelButton.classList.add(
  'delete-modal__button',
  'delete-modal__cancel-button',
)
cancelButton.textContent = 'Отмена'
deleteModalButton.appendChild(cancelButton)

const confirmButton = document.createElement('button')
confirmButton.classList.add(
  'delete-modal__button',
  'delete-modal__confirm-button',
)
confirmButton.textContent = 'Удалить'
deleteModalButton.appendChild(confirmButton)

const modalWindowInJS = document.querySelector('.modal-overlay')

const buttonsCancelConfirm = document.querySelector('.delete-modal__buttons')
buttonsCancelConfirm.addEventListener('click', e => {
  if (e.target.closest('.delete-modal__confirm-button')) {
    const tempDeleteItems = tasksListContainer.querySelectorAll('.task-item')
    tempDeleteItems.forEach(elem => {
      if (elem.dataset.taskId === idDeleteItems) {
        elem.remove()
      }
    })
    tasks.forEach((item, index) => {
      if (item.id === Number(idDeleteItems)) {
        delete tasks[index]
        tasks.sort().pop()
      }
    })
  }
  modalWindowInJS.classList.add('modal-overlay_hidden')
})

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
    modalWindowInJS.classList.remove('modal-overlay_hidden')
    const divTaskItem = target.closest('.task-item')
    idDeleteItems = divTaskItem.dataset.taskId
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

document.addEventListener('keydown', e => {
  const key = e.key
  if (key === 'Tab') {
    e.preventDefault()
    switchTheme ^= 5
    switch (switchTheme) {
      case 2:
        changingTheme(`1px solid #ffffff`, `#24292E`, `#ffffff`)
        break
      case 7:
        changingTheme(`none`, `initial`, `initial`)
        break
    }
  }
})
function changingTheme(border, bodysAll, items) {
  const allButton = document.querySelectorAll('button')
  const allElementsDiv = document.querySelectorAll('.task-item')

  allButton.forEach(item => {
    item.style.border = border
  })
  bodys.style.background = bodysAll
  allElementsDiv.forEach(item => {
    item.style.color = items
  })
}
