

let clientName
let clientSpentToday
let clientSpentForAllTime
let discount = 0

clientName = prompt('Введите имя клиента').trim()
clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim())

if(Number.isFinite(clientSpentToday)){
  clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?').trim())
  if(!Number.isFinite(clientSpentForAllTime)){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
  }
}
else {
  clientSpentForAllTime = false
  alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
}

if(clientSpentToday && clientSpentForAllTime){
  if(clientSpentForAllTime >= 100 && clientSpentForAllTime < 300){
    discount = 10
  }else if(clientSpentForAllTime >= 300 && clientSpentForAllTime < 500){
    discount = 20
  }else if(clientSpentForAllTime >= 500){
    discount = 30
  }

  alert(`Вам предоставляется скидка в ${discount}%!`)
  clientSpentToday -= clientSpentToday * discount / 100
  clientSpentForAllTime += clientSpentToday

  alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}