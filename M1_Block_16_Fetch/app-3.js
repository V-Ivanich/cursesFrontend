const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
const container = document.querySelector('#data-container')

const getFastestLoadedPhoto = ids => {
  const requests = ids.map(id => fetch(`${photosUrl}/${id}`))
  Promise.race(requests)
    .then(result => {
      return result.json()
    })
    .then(datas => {
      const itemPhoto = outputDatas(datas.title, datas.url)
      container.append(itemPhoto)
    })
    .catch(error => {
      console.log('error->', error)
    })
    .finally(() => {
      const loader = document.getElementById('loader')
      loader.style.display = 'none'
    })
}

const outputDatas = (text, dataUrl) => {
  const photoItem = document.createElement('li')
  photoItem.classList.add('photo-item')

  const photoImage = document.createElement('img')
  photoImage.classList.add('photo-item__image')
  photoImage.src = dataUrl
  photoItem.append(photoImage)

  const textTitle = document.createElement('h3')
  textTitle.classList.add('photo-item__title')
  textTitle.textContent = text
  photoItem.append(textTitle)

  return photoItem
}
getFastestLoadedPhoto([60, 12, 55])
