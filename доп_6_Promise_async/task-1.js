const postURL = 'https://jsonplaceholder.typicode.com/posts'
const commentsURL = 'https://jsonplaceholder.typicode.com/comments/?postId='

class CreateElem {
  constructor(components = []) {
    this.name = components[0]
    this.id = components[1]
    this.className = components[2]
    this.elements = components[3]
    this.text = components[4]
    this.selector = components[5]
    this.$sel = document.querySelector(this.selector)
  }

  setNewElement() {
    this.name = document.createElement(this.elements)
    this.name.id = this.id
    this.name.className = this.className
    this.name.textContent = this.text
    this.$sel.append(this.name)
  }
}

const getInDataBase = async postId => {
  try {
    const dataPost = await fetch(`${postURL}/${postId}`)
    const dataComments = await fetch(`${commentsURL}${postId}`)
    if (!dataPost.ok || !dataComments.ok) {
      throw new Error('Ошибка подключения...')
    }
    const dataResult = await Promise.all([dataPost, dataComments])
    const parsingData = dataResult.map(responses => responses.json())
    const allTasks = await Promise.all(parsingData)
    return allTasks
  } catch (error) {
    console.log(error)
  } finally {
    document.querySelector('#loading').style.display = 'none'
  }
}

const renderPost = async postId => {
  const allTasks = await getInDataBase(postId)
  console.log('Проверка---', allTasks)
  if (allTasks === undefined) {
    console.log('Error!!!')
    return
  }
  const titlePost = allTasks[0].title
  const textPost = allTasks[0].body

  const divsBody = new CreateElem([
    'divBody',
    'post',
    'post',
    'div',
    '',
    '.cont',
  ])
  divsBody.setNewElement()

  const blockH1 = new CreateElem([
    'blockH1',
    '',
    'post__title',
    'h1',
    titlePost,
    '.post',
  ])
  blockH1.setNewElement()

  const paragraf = new CreateElem([
    'paragraf',
    '',
    'post__text',
    'p',
    textPost,
    '.post',
  ])
  paragraf.setNewElement()

  const textBold = new CreateElem([
    'bold',
    '',
    'post__comments-text',
    'b',
    'Комментарии',
    '.post',
  ])
  textBold.setNewElement()

  const divComment = new CreateElem([
    'divComment',
    '',
    'post__comments',
    'div',
    '',
    '.post',
  ])
  divComment.setNewElement()

  await allTasks[1].forEach((elem, index) => {
    const divText = new CreateElem([
      'divComment',
      `post-comments${index}`,
      'post-comments',
      'div',
      '',
      '.post__comments',
    ])
    divText.setNewElement()

    const spanAuthor = new CreateElem([
      'spanAuthor',
      '',
      'post-comment__author',
      'span',
      elem.email,
      `#post-comments${index}`,
    ])
    spanAuthor.setNewElement()

    const spanText = new CreateElem([
      'spanText',
      '',
      'post-comment__text',
      'span',
      elem.body,
      `#post-comments${index}`,
    ])
    spanText.setNewElement()
  })
}
renderPost(1)
