class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    if (this.get(word)) return
    const dynamicKey = word
    this.words[dynamicKey] = {}
    const objWords = this.words[dynamicKey]
    objWords.word = word
    objWords.description = description
  }
  remove(keyForDelete) {
    if (this.get(keyForDelete)) {
      delete this.words[keyForDelete]
    }
  }
  get(wordKey) {
    const str = Object.keys(this.words)
    for (let elem of str) {
      if (elem === wordKey) {
        return this.words[elem]
      }
    }
  }
  showAllWords() {
    const arrayValues = []
    for (let keys in this.words) {
      for (let elem in this.words[keys]) {
        arrayValues.push(this.words[keys][elem])
      }
      console.log(arrayValues.join(' - '))
      arrayValues.forEach((elem, index, arrayValues) => {
        arrayValues.pop(elem)
      })
    }
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)
dictionary.add('JavaScript', 'это проверочная строка, -не должна добавиться')
dictionary.remove('JavaScript')
dictionary.showAllWords()
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
console.log(dictionary)
