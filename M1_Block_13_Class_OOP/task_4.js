class Dictionary {
  constructor(name) {
    this.name = name
    this.words = []
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
    if (Array.isArray(this.words)) {
      const indexItem = this.words.findIndex(
        (elem) => elem === this.get(keyForDelete)
      )
      delete this.words[indexItem]
    } else {
      delete this.words[keyForDelete]
    }
  }
  get(wordKey) {
    if (Array.isArray(this.words)) {
      const arrayKeys = Object.values(this.words)
      for (let elem of arrayKeys) {
        if (elem.word === wordKey) {
          return elem
        }
      }
    } else {
      const arrayKeys = Object.keys(this.words)
      for (let elem of arrayKeys) {
        if (elem === wordKey) {
          return this.words[elem]
        }
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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
    this.words = []
  }
  add(word, description) {
    const arrayAdd = {}
    arrayAdd.word = word
    arrayAdd.description = description
    arrayAdd.isDifficult = true
    this.words.push(arrayAdd)
  }
}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
console.log(hardWordsDictionary)
hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.// квант - Неделимая часть какой-либо величины в физике.

//* ---answer
class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
      }
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    return this.words[word]
  }

  showAllWords() {
    Object.values(this.words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`)
    })
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
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
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.
