const notas = [1,2,3,4,5,6,7,8,9,10]

//sem callback

const notasbaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)

//com callback
const notasbaixas2 = notas.filter(function (nota) {return nota < 7})
console.log(notasbaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)