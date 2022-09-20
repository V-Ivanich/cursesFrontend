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
    const arrayKeys = Object.keys(this.words)
    for (let elem of arrayKeys) {
      if (elem === wordKey) {
        return this.words[elem]
      }
    }
  }
  showAllWords() {
    for (let keys in this.words) {
      const arrayValues = Object.values(this.words[keys])
      console.log(`${arrayValues[0]} - ${arrayValues[1]}`)
      arrayValues.length = 0
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
dictionary.add('Веб-разработчик', 'Hello world!!!!!')
dictionary.showAllWords()
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
console.log(dictionary)
