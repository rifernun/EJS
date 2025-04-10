const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // pra cada vez que passar o callback, vai puxar o proprio elemento em valor de array e o indice
    console.log(`${indice +1}) ${nome}`) //parecido com for
})

aprovados.forEach(nome => console.log(nome)) //com arrow function, interesse apenas no nome, com indice sendo ignorado

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) //com funcao fora