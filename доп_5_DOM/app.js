// const mainContainer = document.querySelector('#container')

// class CustomSelect {
//   #id
//   #options
//   #currentSelectedOption
//   constructor(id, options) {
//     this.#id = id
//     this.#options = options
//     this.#currentSelectedOption
//   }

//   #createContainer(container) {
//     const divContainer = document.createElement('div')
//     divContainer.classList.add(
//       'select-dropdown',
//       `select-dropdown--${this.#id}`,
//     )
//     container.append(divContainer)

//     const divPrompt = document.createElement('div')
//     divPrompt.classList.add('select-prompt')
//     divPrompt.textContent = 'Test string'
//     divContainer.append(divPrompt)

//     const buttonSelected = document.createElement('button')
//     buttonSelected.classList.add(
//       'select-dropdown__button',
//       `select-dropdown__button--${this.#id}`,
//     )
//     divContainer.prepend(buttonSelected)

//     const spanSelected = document.createElement('span')
//     spanSelected.classList.add(
//       'select-dropdown',
//       `select-dropdown--${this.#id}`,
//     )
//     spanSelected.textContent = 'Выберите элемент'
//     buttonSelected.append(spanSelected)

//     const ulList = document.createElement('ul')
//     ulList.classList.add(
//       'select-dropdown__list',
//       `select-dropdown__list${this.#id}`,
//     )
//     divContainer.append(ulList)

//     this.#options.forEach(element => {
//       let liSelected = document.createElement('li')
//       liSelected.classList.add('select-dropdown__list-item')
//       liSelected.setAttribute('data-value', element.value)
//       liSelected.textContent = element.text
//       ulList.append(liSelected)
//     })

//     const buttonSelect = document.querySelector('.select-dropdown__button')
//     const ulSelect = document.querySelector('.select-dropdown__list')
//     buttonSelect.addEventListener('click', () => {
//       ulSelect.classList.add('active')
//     })
//     this.#liListener()
//     this.#moveCursor()
//   }

//   #moveCursor() {
//     document
//       .querySelector('.select-dropdown__button')
//       .addEventListener('mouseover', () => {
//         if (this.#currentSelectedOption) {
//           document
//             .querySelector('.select-prompt')
//             .classList.add('active-prompt')
//         }
//       })

//     document
//       .querySelector('.select-dropdown__button')
//       .addEventListener('mouseout', () => {
//         document
//           .querySelector('.select-prompt')
//           .classList.remove('active-prompt')
//       })
//   }

//   #liListener() {
//     document.querySelector('body').addEventListener('click', e => {
//       const liTarget = e.target.closest('li')

//       if (e.target.tagName === 'BODY') {
//         document
//           .querySelector('.select-dropdown__list')
//           .classList.remove('active')
//       }
//       if (liTarget && !liTarget.classList.contains('selected')) {
//         const allLi = document.querySelectorAll('.select-dropdown__list-item')
//         allLi.forEach(elem => {
//           elem.classList.remove('selected')
//         })
//         liTarget.classList.add('selected')
//         this.#options.forEach(item => {
//           if (item.value === +liTarget.dataset.value) {
//             this.#currentSelectedOption = item
//             document.querySelector('.select-prompt').textContent = item.text
//           }
//         })
//         document
//           .querySelector('.select-dropdown__list')
//           .classList.remove('active')
//       }
//     })
//   }

//   get selectedValue() {
//     return this.#currentSelectedOption
//   }

//   render(container) {
//     this.#createContainer(container)
//   }
// }
// const options = [
//   { value: 1, text: 'JavaScript' },
//   { value: 2, text: 'NodeJS' },
//   { value: 3, text: 'ReactJS' },
//   { value: 4, text: 'HTML' },
//   { value: 5, text: 'CSS' },
// ]

// const customSelect = new CustomSelect('123', options)
// customSelect.render(mainContainer)
// console.log(customSelect.selectedValue)

//*----answer
class CustomSelect {
  #options
  #id
  #selectButton
  #select
  #ulContainer
  #currentSelectedOption

  static #defaultText = {
    selectItems: 'Выберите Элемент',
  }

  constructor(id, options = []) {
    this.#selectButton = document.createElement('button')
    this.#select = document.createElement('select')
    this.#ulContainer = document.createElement('ul')
    this.#select.id = id
    this.#select.style.display = 'none'

    this.#options = options
    this.#id = id
    this.#currentSelectedOption = null
  }

  get selectedValue() {
    return this.#currentSelectedOption
  }

  #renderVisibleSelect(container) {
    const containerId = `select-dropdown__list--${this.#id}`
    this.#ulContainer.className = `select-dropdown__list ${containerId}`

    this.#options.forEach(option => {
      const liItem = document.createElement('li')
      liItem.className = 'select-dropdown__list-item'
      liItem.dataset.value = option.value
      liItem.textContent = option.text
      liItem.addEventListener(
        'click',
        this.#handleDropdownItemSelect.bind(this),
      )
      this.#ulContainer.append(liItem)
    })

    if (container) {
      container.append(this.#ulContainer)
    }
  }

  #renderSelectButton(container) {
    this.#selectButton.className = `select-dropdown__button select-dropdown__button--${
      this.#id
    }`
    const buttonTextItem = document.createElement('span')
    buttonTextItem.className = `select-dropdown__text select-dropdown__text--${
      this.#id
    }`
    buttonTextItem.textContent = CustomSelect.#defaultText.selectItems
    this.#selectButton.append(buttonTextItem)
    container.append(this.#selectButton)

    this.#selectButton.addEventListener(
      'click',
      this.#handleDropdownToggle.bind(this),
    )
  }

  #handleDropdownToggle() {
    this.#ulContainer.classList.toggle('active')
  }

  #handleDropdownItemSelect(event) {
    const { target } = event
    const dataValue = target.getAttribute('data-value')
    const targetOption = this.#options.find(
      option => option.value === Number(dataValue),
    )

    const selectButtonText = this.#selectButton.querySelector(
      '.select-dropdown__text',
    )
    if (selectButtonText && dataValue && targetOption) {
      this.#currentSelectedOption = targetOption
      const allLiOptions = this.#ulContainer.querySelectorAll(
        '.select-dropdown__list-item',
      )
      allLiOptions.forEach(liOption => {
        liOption.classList.remove('selected')
      })
      target.classList.add('selected')

      selectButtonText.textContent = targetOption.text
      this.#ulContainer.classList.remove('active')
    }
  }

  render(container) {
    const selectDropdownContainer = document.createElement('div')
    selectDropdownContainer.className = `select-dropdown select-dropdown--${
      this.#id
    }`
    if (container) {
      this.#renderSelectButton(selectDropdownContainer)
      this.#renderVisibleSelect(selectDropdownContainer)
      container.append(selectDropdownContainer)
    }
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
]
const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)

//? ---Вопросы
// по поводу bind и addEventListener у элементов li
