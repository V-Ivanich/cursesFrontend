const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false

const createNewPost = async () => {
  try {
    isLoading = true
    const responseData = await fetch(POSTS_URL, { method: 'POST' })
    if (!responseData.ok) {
      throw new Error('Ошибка данных...')
    }
    const jsonData = await responseData.json()
    console.log('result', jsonData)
  } catch (error) {
    console.log('error', error)
  } finally {
    isLoading = false
  }
}
createNewPost()
