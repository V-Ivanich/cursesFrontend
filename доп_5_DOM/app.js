// const buttonSelect = document.querySelector('.select-dropdown__button')
// const ulSelect = document.querySelector('.select-dropdown__list')
// buttonSelect.addEventListener('click', () => {
//   ulSelect.classList.add('active')
// })
const container = document.querySelector('#container')

class CustomSelect {
  constructor(id, options) {
    this.id = id
    this.options = options
  }

  createContainer() {
    const divContainer = document.createElement('div')
    divContainer.classList.add('select-dropdown', `select-dropdown--${this.id}`)
    container.append(divContainer)

    const buttonSelected = document.createElement('button')
    buttonSelected.classList.add(
      'select-dropdown__button',
      `select-dropdown__button--${this.id}`,
    )
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

const custom2 = new CustomSelect(123, options)
custom2.createContainer()
console.log(custom2)

// const customSelect = new CustomSelect('123', options)
// const mainContainer = document.querySelector('#container')
// customSelect.render(mainContainer)
