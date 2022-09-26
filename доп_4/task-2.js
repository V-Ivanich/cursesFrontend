class Dictionary {
  #name
  #words
  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  add(word, description) {
    if (!this.#words[word]) {
      _addNewWord(word, description)
    }
  }

  remove(word) {
    delete this.#words[word]
  }

  get(word) {
    return this.#words[word]
  }

  showAllWords() {
    Object.values(this.#words).forEach(wordItem => {
      console.log(`${wordItem.word} - ${wordItem.description}`)
    })
  }

  _addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = {
      wordKey,
      wordObj,
    }
  }

  get mainName() {
    return this.#name
  }

  get allWords() {
    return this.#words
  }

  set mainName(name) {
    this.#name = name
  }
}

//! new class
class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.allWords[word]) {
      this.allWords[word] = {
        word,
        description,
        isDifficult: true,
      }
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.',
)

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.',
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.',
)

hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()

console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь'
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // выводит объект в котором есть слова
// дилетант и квант

//* ----answer
class Dictionary {
  #name
  #words

  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  get mainName() {
    return this.#name
  }

  set mainName(newName) {
    this.#name = newName
  }

  get allWords() {
    return this.#words
  }

  _addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj
  }

  add(word, description) {
    if (!this.#words[word]) {
      const newWord = { word, description }
      this._addNewWord(word, newWord)
    }
  }

  remove(word) {
    delete this.#words[word]
  }

  get(word) {
    return this.#words[word]
  }

  showAllWords() {
    Object.values(this.#words).forEach(wordItem => {
      console.log(`${wordItem.word} - ${wordItem.description}`)
    })
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.allWords[word]) {
      this._addNewWord(word, {
        word,
        description,
        isDifficult: true,
      })
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.',
)
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.',
)
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.',
)

hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()

console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь'
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // выводит объект в котором есть слова дилетант и квант
