const fabricantes = ["mercedes","bmw","lambo","audi"]

function imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //callback da funcao