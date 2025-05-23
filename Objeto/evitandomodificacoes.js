// Object.preventExtensions nao consegue adicionar novos atributos neste objeto
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.29, tag: 'promocao'
})
console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 50}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes