// function falaOi() {
//     let total = 0
//     for (let argumento of arguments) {
//         total += argumento
//     }

//     console.log(total)
// }

// falaOi(1,2,3,4,5,6)

// function falaOi(a, b, c, d, e, f) {
//     console.log(a, b, c, f, e, f)
// }

// falaOi(1,2,3,4,5,6)

// function funcao(a, b) {
//     console.log(a + b)
// }

// funcao(2)

// const conta = function(operador, acumulador, ...numeros) { // ...rest operator - tem que ser o último parâmetro
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero
//         if (operador === '-') acumulador -= numero
//         if (operador === '*') acumulador *= numero
//         if (operador === '/') acumulador /= numero
//     }

//     console.log(acumulador)
// };

// conta('+', 1, 20, 30, 40, 50, 60)

const conta = (operador, acumulador, ...numeros) => { 
    console.log(operador, acumulador, numeros)
};

conta('+', 1, 20, 30, 40, 50, 60)