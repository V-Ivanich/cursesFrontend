// const buttonSelect = document.querySelector('.select-dropdown__button')
// const ulSelect = document.querySelector('.select-dropdown__list')
// buttonSelect.addEventListener('click', () => {
//   ulSelect.classList.add('active')
// })
const mainContainer = document.querySelector('#container')

class CustomSelect {
  constructor(id, options) {
    this.id = id
    this.options = options
    this.currentSelectedOption
  }

  createContainer() {
    const divContainer = document.createElement('div')
    divContainer.classList.add('select-dropdown', `select-dropdown--${this.id}`)
    mainContainer.append(divContainer)

    const buttonSelected = document.createElement('button')
    buttonSelected.classList.add(
      'select-dropdown__button',
      `select-dropdown__button--${this.id}`,
    )
    divContainer.prepend(buttonSelected)

    const spanSelected = document.createElement('span')
    spanSelected.classList.add('select-dropdown', `select-dropdown--${this.id}`)
    spanSelected.textContent = 'Выберите элемент'
    buttonSelected.append(spanSelected)

    const ulList = document.createElement('ul')
    ulList.classList.add(
      'select-dropdown__list',
      `select-dropdown__list${this.id}`,
    )
    divContainer.append(ulList)

    this.options.forEach(element => {
      let liSelected = document.createElement('li')
      liSelected.classList.add('select-dropdown__list-item')
      liSelected.setAttribute('data-value', element.value)
      liSelected.textContent = element.text
      ulList.append(liSelected)
    })

    const buttonSelect = document.querySelector('.select-dropdown__button')
    const ulSelect = document.querySelector('.select-dropdown__list')
    buttonSelect.addEventListener('click', () => {
      ulSelect.classList.add('active')
    })
    this.liListener()
  }

  liListener() {
    document.querySelector('body').addEventListener('click', e => {
      const liTarget = e.target.closest('li')

      if (e.target.tagName === 'BODY') {
        document
          .querySelector('.select-dropdown__list')
          .classList.remove('active')
      }
      if (liTarget && !liTarget.classList.contains('selected')) {
        const allLi = document.querySelectorAll('.select-dropdown__list-item')
        allLi.forEach(elem => {
          elem.classList.remove('selected')
        })
        liTarget.classList.add('selected')
        this.options.forEach(item => {
          if (item.value === +liTarget.dataset.value) {
            this.currentSelectedOption = item
          }
        })
        document
          .querySelector('.select-dropdown__list')
          .classList.remove('active')
        console.log(this.currentSelectedOption)
      }
    })
  }

  render(container) {}
}
const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
]

const customSelect = new CustomSelect('123', options)
customSelect.createContainer()
console.log(customSelect)

// customSelect.render(mainContainer)
