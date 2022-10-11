const userUrl = 'https://jsonplaceholder.typicode.com/users'
const container = document.querySelector('#data-container')

fetch(userUrl)
  .then(response => {
    console.log(response)
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

//*---Answer

// const USERS_URL = "https://jsonplaceholder.typicode.com/users";
// const usersContainer = document.querySelector("#data-container");

// const createUserElement = (text) => {
//   const userElement = document.createElement("li");
//   const userAnchorElement = document.createElement("a");
//   userAnchorElement.href = "#";
//   userAnchorElement.innerText = text;
//   userElement.append(userAnchorElement);

//   return userElement;
// };

// const toggleLoader = () => {
//   const loaderHTML = document.querySelector("#loader");
//   const isHidden = loaderHTML.getAttribute("hidden") !== null;
//   if (isHidden) {
//     loaderHTML.removeAttribute("hidden");
//   } else {
//     loaderHTML.setAttribute("hidden", "");
//   }
// };

// const getAllUsers = () => {
//   toggleLoader();
//   fetch(USERS_URL)
//     .then((response) => response.json())
//     .then((users) => {
//       const usersArray = Array.isArray(users) ? users : Object.values(users);
//       usersArray.forEach((user) => {
//         const todoHTMLElement = createUserElement(user.name);
//         usersContainer.append(todoHTMLElement);
//       });
//     })
//     .catch((error) => {
//       console.error("error", error);
//     })
//     .finally(() => {
//       toggleLoader();
//     });
// };

// getAllUsers();
