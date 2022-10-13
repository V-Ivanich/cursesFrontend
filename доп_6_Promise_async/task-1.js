const postURL = 'https://jsonplaceholder.typicode.com/posts'
const commentsURL = 'https://jsonplaceholder.typicode.com/comments/?postId='

const arrayAtributes = [
  ['divBody', 'post', 'post', 'div', '', '.cont'],
  ['blockH1', '', 'post__title', 'h1', 'Название Поста', '.post'],
  ['paragraf', '', 'post__text', 'p', 'Текст Поста', '.post'],
  ['bold', '', 'post__comments-text', 'b', 'Комментарии', '.post'],
  ['divComment', '', 'post__comments', 'div', '', '.post'],
  ['divComment', '', 'post-comments', 'div', '', '.post__comments'],
  ['spanAuthor', '', 'post-comment__author', 'span', '', '.post-comments'],
  ['spanText', '', 'post-comment__text', 'span', '', '.post-comments'],
]

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

const divsBody = new CreateElem(arrayAtributes[0])
divsBody.setNewElement()

const blockH1 = new CreateElem(arrayAtributes[1])
blockH1.setNewElement()

const paragraf = new CreateElem(arrayAtributes[2])
paragraf.setNewElement()

const textBold = new CreateElem(arrayAtributes[3])
textBold.setNewElement()

const divComment = new CreateElem(arrayAtributes[4])
divComment.setNewElement()

const divText = new CreateElem(arrayAtributes[5])
divText.setNewElement()

const spanAuthor = new CreateElem(arrayAtributes[6])
spanAuthor.setNewElement()

const spanText = new CreateElem(arrayAtributes[7])
spanText.setNewElement()

const renderPost = async postId => {
  try {
    const dataPost = await fetch(`${postURL}/${postId}`)
    const dataComments = await fetch(`${commentsURL}${postId}`)
    const dataResult = await Promise.all([dataPost, dataComments])
    const parsingData = dataResult.map(responses => responses.json())
    console.log(parsingData)
    const allTasks = await Promise.all(parsingData)
    console.log(allTasks)
  } catch (error) {
    console.log(error)
  }
}
renderPost(1)
