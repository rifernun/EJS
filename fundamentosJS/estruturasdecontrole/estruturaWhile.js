function getInteiroAleatorioEntre(min = 0, max = 1000){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao foi ${opcao}`)
}
