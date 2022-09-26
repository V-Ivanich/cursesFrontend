//! --Variant -1
// const mainBody = document.querySelector('body')
// mainBody.innerHTML = `
// <form class='create-user-form'>
//   <label> Имя
//     <input type='text' name='userName' placeholder='Введите ваше имя'>
//   </label>
//   <label> Пароль
//     <input type='password' name='password' placeholder='Придумайте Пароль'>
//   </label>
//   <button type='submit'> Подтвердить
//   </button>
// </form>`

//! --Variant - 2
const bodyMain = document.querySelector('body')
const formMain = document.createElement('form')
formMain.classList.add('create-user-form')
bodyMain.prepend(formMain)

const labelMainFirst = document.createElement('label')
labelMainFirst.textContent = 'Имя'
formMain.append(labelMainFirst)

const inputMainFirst = document.createElement('input')
inputMainFirst.type = 'text'
inputMainFirst.name = 'userName'
inputMainFirst.placeholder = 'Введите ваше имя'
labelMainFirst.insertAdjacentElement('beforebegin', inputMainFirst)

const buttonMain = document.createElement('button')
buttonMain.type = 'submit'
buttonMain.textContent = 'Подтвердить'
formMain.append(buttonMain)

const labelMainTwo = document.createElement('label')
labelMainTwo.textContent = 'Пароль'
buttonMain.before(labelMainTwo)

const inputMainTwo = document.createElement('input')
inputMainTwo.type = 'password'
inputMainTwo.name = 'password'
inputMainTwo.placeholder = 'Придумайте Пароль'
labelMainTwo.insertAdjacentElement('beforebegin', inputMainTwo)

//* ---answer
// 1-й способ
document.body.innerHTML = `
       <form class="create-user-form">
       <label>
           Имя
           <input type="text" name="userName" placeholder="Введите ваше имя" />
       </label>
       <label>
           Пароль
           <input type="password" name="password" placeholder="Придумайте Пароль" />
       </label>
       <button type="submit">
           Подтвердить
       </button>
   </form>
`

// 2-й способ
const createInputWithLabel = (label, inputType, inputName, placeholder) => {
  const labelContainer = document.createElement('label')
  labelContainer.innerText = label

  const inputElement = document.createElement('input')
  inputElement.type = inputType
  inputElement.name = inputName
  inputElement.placeholder = placeholder

  labelContainer.append(inputElement)

  return labelContainer
}

const formContainer = document.createElement('form')
formContainer.className = 'create-user-form'
const userNameLabel = createInputWithLabel(
  'Имя',
  'text',
  'userName',
  'Введите ваше имя',
)
const passwordLabel = createInputWithLabel(
  'Пароль',
  'password',
  'password',
  'Придумайте Пароль',
)
const confirmButton = document.createElement('button')
confirmButton.type = 'submit'
confirmButton.innerText = 'Подтвердить'

formContainer.append(userNameLabel, passwordLabel, confirmButton)
document.body.prepend(formContainer)
