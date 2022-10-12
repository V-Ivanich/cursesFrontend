const TODOS_URL = 'https://jsonplaceholder.typicode.com/todo'

const getTodosByIds = async ids => {
  try {
    const requests = ids.map(id => fetch(`${TODOS_URL}/${id}`))
    const allPromise = await Promise.all(requests)
    const dataResults = allPromise.map(responses => responses.json())
    const allTasks = await Promise.all(dataResults)
    console.log(allTasks)
  } catch (error) {
    console.log(error)
  }
}
getTodosByIds([43, 21, 55, 100, 10])
