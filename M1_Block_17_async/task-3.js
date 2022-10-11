const albumsContainer = document.querySelector('.data-container')

const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'

const renderAlbums = async () => {
  try {
    const responseData = await fetch(albumsUrl)
    const jsonData = await responseData.json()
    rederElemetsLi(jsonData)
  } catch (error) {
    albumsContainer.textContent =
      'Произошла ошибка в получении данных об альбомах.. :('
  } finally {
    document.querySelector('#loading').style.display = 'none'
  }
}

const rederElemetsLi = data => {
  data.forEach(elem => {
    const createItemLi = document.createElement('li')
    createItemLi.textContent = elem.title
    albumsContainer.append(createItemLi)
  })
}

renderAlbums()
