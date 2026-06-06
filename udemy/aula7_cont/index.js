// não podemos criar constantes com palavras reservads da linguagem
// constantes precisam ter nomes significativos
// não podemos começar uma constante com número e não pode conter espaços or traços
// utilizamos camelCase
// Case-sensitive:
    /*
    Letras maiúsculas e minúsculas faz diferença
    */ 
// Não podemos modificar o valor da constante
// NÃO UTILIZE VAR, SEMPRE const.

// const nome = 'Gabriel'

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

console.log(resultadoDuplicado)
console.log(typeof resultadoTriplicado) // typeof para saber o tipo