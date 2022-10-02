class CustomSelect {
  constructor(id, options) {
    this.id = id
    this.options = options
  }
  render() {}
}
const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
]

const custom2 = new CustomSelect(123, options)

console.log(custom2)

// const customSelect = new CustomSelect('123', options)
// const mainContainer = document.querySelector('#container')
// customSelect.render(mainContainer)
