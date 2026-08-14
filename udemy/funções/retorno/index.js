// return
// retorna um valor
// termina a função

function soma(x, y) {
    return x + y
}

function somaDois(a, b) {
    console.log(a + b) // console.log apenas exibe algo no console
}

function pessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = pessoa('João', 'Miranda') //object
const p2 = {
    nome: 'Pedro',
    sobrenome: 'Oliveira'
} // object

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + '' + resto
//     }

//     return falaResto
// }

// const inicio = falaFrase('Olá') // agora inicio é uma função
// console.log(inicio(' mundo'))

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(3))
console.log(triplica(5))
console.log(quadriplica(10))

