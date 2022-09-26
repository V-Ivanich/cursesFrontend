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
