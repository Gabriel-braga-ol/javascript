// retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [1, 2, 3, 50, 80, 100, 5, 6, 22, 25, 54, 26, 45, 15, 17]

const filtraPares = numeros.filter(valor => valor % 2 === 0)
// console.log(filtraPares)

const dobroValores = numeros.map(valor => valor * 2)
// console.log(dobroValores)

const somaValores = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
}, 0)

// console.log(somaValores)

const somaDobroPares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) {
        valor * 2;
        acumulador += valor
    }
    return acumulador
}, 0)

console.log(somaDobroPares)

