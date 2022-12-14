const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

//const result = handleObject(student, "programmingLanguage", "get"); //! значение ключа key в объекте obj.
//const result = handleObject(student, "testId", "add"); //! добавить новый ключ key в объект obj
//const result = handleObject(student, "programmingLanguage", "ioo"); //! должна возвратить объект obj
const result = handleObject(student, 'programmingLanguage', 'delete') //! удалить свойство key из объекта obj
console.log('result', result) // { name: 'Maxim' }

function handleObject(obj, key, action) {
  let result = obj
  switch (action) {
    case 'get':
      result = obj[key]
      break
    case 'add':
      obj[key] = ''
      break
    case 'delete':
      delete obj[key]
      break
    default:
      break
  }
  return result
}
//* ---answer
const handleObject = (obj, key, action = 'get') => {
  switch (action) {
    case 'get':
      return obj[key]
    case 'delete':
      delete obj[key]
      return obj
    case 'add':
      obj[key] = ''
      return obj
    default:
      return obj
  }
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

const result = handleObject(student, 'programmingLanguage')
console.log('result', result)
