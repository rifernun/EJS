const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa sai da lista, pop ele remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento no primeiro indice, contrario de shift
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa sai dnv :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //gera um novo array a partir do indice passado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // start, end
console.log(algunsPilotos2)

