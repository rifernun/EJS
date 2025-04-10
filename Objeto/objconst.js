const pessoa = {nome: 'joao'}

//pessoa = {nome: 'ana'} nao pode pois é constante
pessoa.nome = 'paulo' //pode
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'maria'
console.log(pessoa)