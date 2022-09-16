//-----task-3

/*
1. console.log
2. { name: 'Maxim' }
3. Symbol('key')
4. Number
5. ''
6. 0
7. -10
8. '-105'
*/

console.log(Number(console.log), Boolean(console.log), String(console.log))
console.log(Number({ name: 'Maxim'}), Boolean({ name: 'Maxim'}), String({ name: 'Maxim'}))
console.log(Boolean(Symbol('key')), String(Symbol('key')))
console.log(Number(Number), Boolean(Number), String(Number))
console.log(Number(''), Boolean(''), String(''))
console.log(Number(0), Boolean(0), String(0))
console.log(Number(-10), Boolean(-10), String(-10))
console.log(Number(-105), Boolean(-105), String(-105))