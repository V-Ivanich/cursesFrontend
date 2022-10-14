const mainForm = document.querySelector('.create-task-block')
const tasksListContainer = document.querySelector('.tasks-list')
const tasks = []
const textErrorsEmpty = 'Название задачи не должно быть пустым.'
const textErrorsDublicate = 'Задача с таким названием уже существует.'
let idDeleteItems

//*-- crate modalWindow
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
  const mainInput = target.taskName.value.trim()
  target.taskName.value = mainInput
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
  if (document.querySelector('.error-message-block') !== null)
    document.querySelector('.error-message-block').remove()
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

//* ---Answer
// const tasks = [
//   {
//       id: '1138465078061',
//       completed: false,
//       text: 'Посмотреть новый урок по JavaScript',
//   },
//   {
//       id: '1138465078062',
//       completed: false,
//       text: 'Выполнить тест после урока',
//   },
//   {
//       id: '1138465078063',
//       completed: false,
//       text: 'Выполнить ДЗ после урока',
//   },
// ]

// const createTaskItem = (taskId, taskText) => {
//   const taskItem = document.createElement('div');
//   taskItem.className = 'task-item';
//   taskItem.dataset.taskId = taskId;

//   const taskItemMainContainer = document.createElement('div');
//   taskItemMainContainer.className = 'task-item__main-container';

//   const taskItemMainContent = document.createElement('div');
//   taskItemMainContent.className = 'task-item__main-content';

//   taskItem.append(taskItemMainContainer);
//   taskItemMainContainer.append(taskItemMainContent);

//   const checkboxForm = document.createElement('form');
//   checkboxForm.className = 'checkbox-form';

//   const inputCheckbox = document.createElement('input');
//   inputCheckbox.type = 'checkbox';
//   inputCheckbox.className = 'checkbox-form__checkbox';
//   const inputId = `task-${taskId}`;
//   inputCheckbox.id = inputId;

//   const labelCheckbox = document.createElement('label');
//   labelCheckbox.htmlFor = inputId;

//   const taskItemText = document.createElement('span');
//   taskItemText.className = 'task-item__text';
//   taskItemText.innerText = taskText;

//   const deleteButton = document.createElement('button');
//   deleteButton.className = 'task-item__delete-button default-button delete-button';
//   deleteButton.innerText = 'Удалить';

//   taskItemMainContent.append(checkboxForm, taskItemText);
//   checkboxForm.append(inputCheckbox, labelCheckbox);
//   taskItemMainContainer.append(deleteButton);

//   return taskItem;
// }

// const createErrorBlock = (errorMessage) => {
//   const errorBlock = document.createElement('span');
//   errorBlock.innerText = errorMessage;
//   errorBlock.className = 'error-message-block';
//   return errorBlock;
// }

// const createTaskForm = document.querySelector('.create-task-block');
// createTaskForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const newTaskText = (event.target.taskName.value || '').trim();
//   const isTaskExists = tasks.some((task) => task.text === newTaskText);
//   const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block');

//   if (!newTaskText) {
//       const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
//       createTaskForm.append(errorBlock);
//   } else if (isTaskExists) {
//       const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
//       createTaskForm.append(errorBlock);
//   } else if (newTaskText && !isTaskExists) {
//       const newTask = {
//           id: Date.now().toString(),
//           text: newTaskText,
//       };
//       tasks.push(newTask);
//       const taskItem = createTaskItem(newTask.id, newTask.text);
//       tasksListContainer.append(taskItem);
//   }
//   if (errorMessageBlockFromDOM) {
//       errorMessageBlockFromDOM.remove();
//   }
// });

// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//   const taskItem = createTaskItem(task.id, task.text);
//   tasksListContainer.append(taskItem);
// });

// const createDeleteModal = (text) => {
//   const modalOverlay = document.createElement('div');
//   modalOverlay.className = 'modal-overlay modal-overlay_hidden';

//   const deleteModal = document.createElement('div');
//   deleteModal.className = 'delete-modal';

//   modalOverlay.append(deleteModal);

//   const modalTitle = document.createElement('h3');
//   modalTitle.className = 'delete-modal__question';
//   modalTitle.innerText = text;
//   const modalButtons = document.createElement('div');
//   modalButtons.className = 'delete-modal__buttons';

//   const cancelButton = document.createElement('button');
//   cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
//   cancelButton.innerText = 'Отмена'
//   const confirmButton = document.createElement('button');
//   confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
//   confirmButton.innerText = 'Удалить';

//   deleteModal.append(modalTitle, modalButtons);
//   modalButtons.append(cancelButton, confirmButton);

//   return {
//       deleteModal,
//       cancelButton,
//       confirmButton,
//       modalOverlay,
//   };
// }

// let targetTaskIdToDelete = null;
// const {
//   deleteModal, cancelButton, confirmButton, modalOverlay,
// } = createDeleteModal('Вы действительно хотите удалить эту задачу?');
// document.body.prepend(modalOverlay);
// cancelButton.addEventListener('click', () => {
//   modalOverlay.classList.add('modal-overlay_hidden');
// });
// confirmButton.addEventListener('click', () => {
//   const deleteIndex = tasks.findIndex((task) => task.id === targetTaskIdToDelete);
//   if (deleteIndex >= 0) {
//       tasks.splice(deleteIndex, 1);
//       const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
//       taskItemHTML.remove();
//       modalOverlay.classList.add('modal-overlay_hidden');
//   }
// });

// const tasksList = document.querySelector('.tasks-list');
// tasksList.addEventListener('click', (event) => {
//   const { target } = event;
//   const closestTarget = target.closest('.task-item__delete-button');
//   if (closestTarget) {
//       const closestTask = closestTarget.closest('.task-item');
//       if (closestTask) {
//           const taskId = closestTask.dataset.taskId;
//           targetTaskIdToDelete = taskId;
//           modalOverlay.classList.remove('modal-overlay_hidden');
//       }
//   }
// });
