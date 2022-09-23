class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }
  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }

  repairCar(carName) {
    if (!carName) {
      console.error(
        'Вам необходимо указать название машины, чтобы ее отремонтировать',
      )
    } else {
      const arrWorkTime = this.getFormatHours(Object.values(this.workingHours))
      const timeNow = this.getNowTime()
      if (
        timeNow >= Number(arrWorkTime[0]) &&
        timeNow < Number(arrWorkTime[1])
      ) {
        alert(
          `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`,
        )
      } else {
        alert('К сожалению, мы сейчас закрыты. Приходите завтра')
      }
    }
  }

  getNowTime() {
    let time = new Date().getHours()
    return time
  }

  getFormatHours(valuesWorkTime) {
    let worksTime = []
    valuesWorkTime.forEach(elem => {
      worksTime.push(elem.split(':').filter(item => item !== '00'))
      worksTime = worksTime.flat()
    })
    return worksTime
  }
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
})
carService.repairCar('BMW')
