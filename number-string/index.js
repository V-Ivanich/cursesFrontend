
//!--task-1 приведение типов
let str = 'string'
console.log('this string- ',Number(str), Boolean(str), String(str))
let num = 835
console.log('this number- ',Number(num), Boolean(num), String(num))
let bool = false
console.log('this boolean- ',Number(bool), Boolean(bool), String(bool))
let big = 134n
console.log('this BigInt- ',Number(big), Boolean(big), String(big))

let id = Symbol('sy')
console.log('this Symbol- ',Boolean(id), String(id))
// Символ не можем преобразовать в тип Number, - выдаст ошибку

let und = undefined
console.log('this Undefined- ',Number(und), Boolean(und), String(und))
let nul = null
console.log('this null- ',Number(nul), Boolean(nul), String(nul))

let odj = {}
// console.log('this Object- ', Number(obj), Boolean(obj), String(obj))
/*
Объект неявляется примитивным типом данных, и в данном случае не может 
преобразоваться в примитивный тип насильно,- будет ошибка!
*/
