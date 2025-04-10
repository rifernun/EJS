//array organiza por indices
//cresce e diminui dinamicamente, diferente do golang que ja é definido o tamanho e nao variado
// trabalhar sempre com dados unicos, um de string, outro de int
let aprovados = new Array('bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ["Pedro", "Richard", "Ferreira"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //aparece undefined ao inves de dar erro
console.log(aprovados.length)
aprovados[3] = 'Paulo'
aprovados.push('Abia') //melhor para adicionar indices
console.log(aprovados)

aprovados[9] = 'Rafael' //deixa 4 valores empty
console.log(aprovados)

aprovados.sort() //organiza por alfabeto em ordem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ["Pedro", "Richard", "Ferreira"]
aprovados.splice(1, 1) //apaga elementos ou adiciona
console.log(aprovados)