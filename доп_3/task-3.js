function getKiller(suspectInfo, deadPeople) {
  let result = false
  let counterPeople = 0
  for (key in suspectInfo) {
    if (key.length === 0) continue
    if (loopIteration(suspectInfo[key], deadPeople[counterPeople])) {
      if (deadPeople.length === counterPeople + 1) {
        result = key
        continue
      }
      if (loopIteration(suspectInfo[key], deadPeople[++counterPeople])) {
        result = key
      }
    }
  }
  return result
}
function loopIteration(massInfo, people) {
  return massInfo.includes(people)
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas', 'Garic'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill', 'Garic']
  )
) // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
) // Убийца Megan

//*---answer
function getKiller(suspectInfo, deadPeople) {
  let killerName = ''
  Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
    const isKiller = deadPeople.every((deadName) =>
      peopleWereSeen.includes(deadName)
    )
    if (isKiller) {
      killerName = suspectPerson
    }
  })

  return killerName
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
) // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
) // Убийца Megan
