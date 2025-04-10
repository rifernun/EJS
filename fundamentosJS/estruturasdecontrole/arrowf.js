const pinto = (tamanho) => tamanho < 7 ? console.log('pequeno') : console.log('grande')
pinto(5)

let dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //faz a mesma coisa que o let dobro, com return implicito.

console.log(dobro(10))