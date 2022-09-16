const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2040',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2041',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2039',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2010',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    criminalRecord: false,
    passportExpiration: '16.10.2023',
  },
]

const allowVisa = (people) => {
  const resulСhoice = people.reduce((accum, elem) => {
    if (!elem.criminalRecord) {
      if (getPassportDetails(elem.passportExpiration)) {
        accum.push(elem)
      }
    }
    return accum
  }, [])
  return resulСhoice
}

function getPassportDetails(passportDate) {
  let resultValidation = false
  let tempArrr = passportDate.split('.')
  tempArrr.reverse()

  const nowDate = new Date()
  const givenDate = new Date(tempArrr)
  const arrNowDate = getReformattingDate(nowDate)
  const arrGivenDate = getReformattingDate(givenDate)

  for (let i = 0; i < arrGivenDate.length; i++) {
    const nowDate = arrNowDate[i]
    const givenDate = arrGivenDate[i]
    if (nowDate < givenDate) {
      resultValidation = true
      break
    } else if (nowDate === givenDate) {
      resultValidation = true
      continue
    } else {
      resultValidation = false
      break
    }
  }
  return resultValidation
}

function getReformattingDate(getDate) {
  const arrDate = []
  arrDate.push(getDate.getFullYear())
  arrDate.push(getDate.getMonth())
  arrDate.push(getDate.getDate())
  return arrDate
}

const result = allowVisa(peopleWithVisa)
console.log('result', result)
