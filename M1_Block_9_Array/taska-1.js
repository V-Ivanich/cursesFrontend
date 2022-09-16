const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

function giveParcel() {
  alert(
    `${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${
      peopleWaiting.length
    } человек.`
  )
}

function leaveQueueWithoutParcel() {
  alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди`)
}

giveParcel()
giveParcel()
giveParcel()

for (let i = peopleWaiting.length; i != 0; i--) {
  leaveQueueWithoutParcel()
}
//?---answer
const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

const giveParcel = () => {
  const clientName = peopleWaiting.shift()
  alert(
    `${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
  )
}

const leaveQueueWithoutParcel = () => {
  const clientName = peopleWaiting.pop()
  alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`)
}

giveParcel()
giveParcel()
giveParcel()

for (let i = peopleWaiting.length; i > 0; i -= 1) {
  leaveQueueWithoutParcel()
}
