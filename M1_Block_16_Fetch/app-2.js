const userUrl = 'https://jsonplaceholder.typicode.com/users'
const container = document.querySelector('#data-container')

const getUsersByIds = arrayIds => {
  const requests = arrayIds.map(id => fetch(`${userUrl}/${id}`))
  Promise.all(requests)
    .then(responses => {
      const dataResults = responses.map(response => {
        if (!response.ok) {
          throw new Error('Ошибка!!!!')
        }
        return response.json()
      })
      return Promise.all(dataResults)
    })
    .then(datas => {
      datas.forEach(elem => {
        const outHtml = outputDataUsers(elem.name)
        container.append(outHtml)
      })
    })
    .finally(() => {
      const loader = document.getElementById('loader')
      loader.style.display = 'none'
    })
    .catch(error => {
      console.log('error->', error)
    })
}

const outputDataUsers = data => {
  const userItemLi = document.createElement('li')
  const userItemA = document.createElement('a')
  userItemA.setAttribute('href', '#')
  userItemA.textContent = data
  userItemLi.append(userItemA)
  return userItemLi
}
getUsersByIds([5, 6, 2, 1])
