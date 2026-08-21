// Soma todos os números (reduce)
// retorna um array com pares (filter)
// retorna um array com o dobro dos valores (map)

const numeros = [1, 2, 3, 50, 80, 100, 5, 6, 22, 25, 54, 26, 45, 15, 17]

// Soma todos os números (reduce)
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor
//     return acumulador
// }, 0)

// console.log(total)

// retorna um array com pares (filter)
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if (valor % 2 === 0) acumulador.push(valor)
//     return acumulador
// }, [])

// console.log(total)

// retorna um array com o dobro dos valores (map)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2)
    return acumulador
}, [])
// console.log(total)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Gabriel', idade: 55},
    {nome: 'Maria', idade: 25},
    {nome: 'Lays', idade: 19},
    {nome: 'Luiz', idade: 57},
    {nome: 'Rosana', idade: 32},
    {nome: 'Fátima', idade: 66},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha)