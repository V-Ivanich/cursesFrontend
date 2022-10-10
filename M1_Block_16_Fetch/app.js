const userUrl = 'https://jsonplaceholder.typicode.com/users'
const container = document.querySelector('#data-container')

fetch(userUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка запроса')
    }
    return response.json()
  })
  .then(data => {
    outputDataUsers(data)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    const loader = document.getElementById('loader')
    loader.style.display = 'none'
  })

function outputDataUsers(data) {
  data.forEach(item => {
    const userItemLi = document.createElement('li')
    const userItemA = document.createElement('a')
    userItemA.setAttribute('href', '#')
    userItemA.textContent = item.name
    userItemLi.append(userItemA)
    container.append(userItemLi)
  })
}
