const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
const container = document.querySelector('#data-container')

const getFastestLoadedPhoto = ids => {
  const requests = ids.map(id => fetch(`${photosUrl}/${id}`))
  Promise.race(requests)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка!!!!')
      }
      return response.json()
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

//*---Answer
// const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
// const dataContainer = document.querySelector("#data-container");

// const createPhotoItem = (url, title) => {
//   const photoItem = document.createElement("li");
//   photoItem.className = "photo-item";

//   const photoImage = document.createElement("img");
//   photoImage.src = url;
//   photoImage.className = "photo-item__image";

//   const photoTitle = document.createElement("h3");
//   photoTitle.className = "photo-item__title";
//   photoTitle.innerText = title;

//   photoItem.append(photoImage, photoTitle);

//   return photoItem;
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

// const getFastestLoadedPhoto = (ids) => {
//   toggleLoader();
//   Promise.race(ids.map((id) => fetch(`${PHOTOS_URL}/${id}`)))
//     .then((response) => response.json())
//     .then((photo) => {
//       const photoHTML = createPhotoItem(photo.url, photo.title);
//       dataContainer.append(photoHTML);
//     })
//     .catch((error) => {
//       console.error(error);
//     })
//     .finally(() => {
//       toggleLoader();
//     });
// };

// getFastestLoadedPhoto([60, 12, 55]);
