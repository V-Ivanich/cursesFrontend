class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }
  constructor(name, workingHours = {}) {
    this.name = name
    this.workingHours = {
      from: '' || CarService.DefaultWorkingHours.from,
      till: '' || CarService.DefaultWorkingHours.till,
    }
  }

  repairCar() {}
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
})
carService.repairCar('BMW')
