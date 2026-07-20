// function saudacao(nome) {
//     return `Boa tarde, ${nome}!`   
// } //dessa maneira não precisa de ';'

// const variavel = saudacao('Gabriel')
// console.log(variavel)

function soma(x, y) {
    const resp = x + y
    return resp
}

console.log(soma(2,2))
console.log(soma(5,10))
console.log(soma(15,15))

function impar_par(a) {
    if (a % 2 == 0){
        return 'Par'
    }else {
        return 'Impar'
    }
}

console.log(impar_par(2))
console.log(impar_par(11))
console.log(impar_par(25))
console.log(impar_par(30))

