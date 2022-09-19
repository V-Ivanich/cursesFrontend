class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }
  add(word, description) {
    const dynamicKey = word
    const sss = {`${this.word}: word, ${this.description}: description`}
    Object.assign(this.words, {[dynamicKey]: sss})
    // this.words[dynamicKey] = {}
    // const objWords = this.words[dynamicKey]
    // objWords.word = word
    // objWords.description = description

  }
  remove() {}
  get() {}
  showAllWords() {
    const a = this.words
    console.log(`${a[word]} - ${this.words}`)
    console.log(this.words[Object.keys])
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)

// dictionary.remove('JavaScript');
dictionary.showAllWords()
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
console.log(dictionary)
