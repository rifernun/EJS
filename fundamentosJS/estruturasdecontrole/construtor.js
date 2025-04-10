function carro(veloMax = 200, delta = 5){
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeatual + 5 <= veloMax){
            velocidadeatual += delta
        } else {
            velocidadeatual = veloMax
        }
    }
    this.getVeloAtual = function (){
        return velocidadeatual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVeloAtual())