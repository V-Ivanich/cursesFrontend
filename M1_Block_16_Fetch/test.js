// console.log('Start data...')

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'vasa',
//       port: 5555,
//       status: 'Pizdato',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// prom
//   .then(data => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true
//         resolve(data)
//       }, 2000)
//     })
//   })
//   .then(clientData => {
//     console.log('Data received', clientData)
//   })
//   .catch(error => console.error('Error-->', error))
const userUrl = 'https://jsonplaceholder.typicode.com/user'
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
    .catch(error => {
      console.error(error)
    })
    .finally(() => {
      console.log('finally')
      const loader = document.getElementById('loader')
      loader.style.display = 'none'
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
