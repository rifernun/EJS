const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito - funcional e OO(orientada objeto)

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()