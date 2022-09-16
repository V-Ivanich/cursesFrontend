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

const getReverseDate = (data) => new Date(data.split('.').reverse())

const allowVisa = (people) =>
  people.filter((item) => {
    if (
      item.criminalRecord === false &&
      getReverseDate(item.passportExpiration) > Date.now()
    )
      return true
  })

const result = allowVisa(peopleWithVisa)
console.log('result', result)
