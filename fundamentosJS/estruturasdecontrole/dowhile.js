function getInteiroAleatorioEntre(min = 0, max = 1000){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao foi ${opcao}`)
} while(opcao != -1)
