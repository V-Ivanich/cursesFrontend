
let password

password = prompt('Введите пароль').trim()

if(password.length >= 3 && password.length <= 30){
  let lowCase = password.toLocaleLowerCase()
  console.log(lowCase)
  if(password === lowCase){
    console.log(true)
  }else console.log(false)
}