class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }
  add(word, description) {
    const objWords = {}
    const dynamicKey = word
    this.words[dynamicKey] = word
    const dynamicDescription = description
    objWords[dynamicDescription] = description
    console.log(this)
  }
  remove() {}
  get() {}
  showAllWords() {
    console.log(`${this.word} - ${this.description}`)
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// dictionary.remove('JavaScript');
// dictionary.showAllWords()
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
console.log(dictionary)
