const pessoa = {
    nome: "rebeca",
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) //chave
console.log(Object.values(pessoa)) //valores
console.log(Object.entries(pessoa)) //array com valores podendo percorrer com forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'

//Object.assign
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:20}
const obj = Object.assign(dest, o1, o2)
console.log(dest)