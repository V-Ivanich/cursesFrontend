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

//*---Answer

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
// const usersContainer = document.querySelector('#data-container')

// const createUserElement = text => {
//   const userElement = document.createElement('li')
//   const userAnchorElement = document.createElement('a')
//   userAnchorElement.href = '#'
//   userAnchorElement.innerText = text
//   userElement.append(userAnchorElement)

//   return userElement
// }

// const toggleLoader = () => {
//   const loaderHTML = document.querySelector('#loader')
//   const isHidden = loaderHTML.getAttribute('hidden') !== null
//   if (isHidden) {
//     loaderHTML.removeAttribute('hidden')
//   } else {
//     loaderHTML.setAttribute('hidden', '')
//   }
// }

// const getUsersByIds = userIds => {
//   toggleLoader()
//   Promise.all(userIds.map(id => fetch(`${USERS_URL}/${id}`)))
//     .then(responses => {
//       return Promise.all(
//         responses
//           .filter(response => response.ok)
//           .map(response => response.json()),
//       )
//     })
//     .then(users => {
//       console.log('users', users)
//       const usersArray = Array.isArray(users) ? users : Object.values(users)
//       usersArray.forEach(user => {
//         const todoHTMLElement = createUserElement(user.name)
//         usersContainer.append(todoHTMLElement)
//       })
//     })
//     .catch(error => {
//       console.error('error', error)
//     })
//     .finally(() => {
//       toggleLoader()
//     })
// }

// getUsersByIds([5, 6, 2, 1])
