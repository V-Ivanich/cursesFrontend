const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]

const mainList = document.querySelector('.tasks-list')

function createCard(mainList, objItem) {
  const taskItem = document.createElement('div')
  taskItem.classList.add('task-item')
  taskItem.setAttribute('data-task-id', objItem.id)

  const itemContainer = document.createElement('div')
  itemContainer.classList.add('task-item__main-container')

  const mainContainer = document.createElement('div')
  mainContainer.classList.add('task-item__main-container')

  const mainForm = document.createElement('form')
  mainForm.classList.add('checkbox-form')

  const mainInput = document.createElement('input')
  mainInput.classList.add('checkbox-form__checkbox')
  mainInput.type = 'checkbox'
  mainInput.setAttribute('id', objItem.id)

  const mainLabel = document.createElement('label')
  mainLabel.htmlFor = objItem.id

  const mainSpan = document.createElement('span')
  mainSpan.classList.add('task-item__text')
  mainSpan.textContent = objItem.text

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('task-item__delete-button', 'delete-button')
  deleteButton.classList.add('default-button')
  deleteButton.setAttribute('delete-task-id', objItem.id)
  deleteButton.textContent = ' Удалить'

  mainList.appendChild(taskItem)
  taskItem.appendChild(itemContainer)
  itemContainer.prepend(mainContainer)
  itemContainer.append(deleteButton)
  mainContainer.prepend(mainForm)
  mainContainer.append(mainSpan)
  mainForm.appendChild(mainInput)
  mainInput.after(mainLabel)
}
createCard(mainList, tasks[0])
createCard(mainList, tasks[1])
createCard(mainList, tasks[2])
