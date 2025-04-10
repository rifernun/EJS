console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//resumindo, toda funcao tem um prototype, ou seja, __proto__

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Richard'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5,6,7,8,9].first())
