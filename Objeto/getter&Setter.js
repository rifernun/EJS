const sequencia = {
    _valor: 1, //convencao
    get valor() { return this._valor++ },
    set valor(valor) { this._valor = valor}
}
console.log(sequencia.valor, sequencia.valor)