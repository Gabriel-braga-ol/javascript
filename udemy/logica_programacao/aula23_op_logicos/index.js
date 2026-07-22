/*
Operadores lógicos 
&& -> and -> e - > todas as expressões devem ser verdadeiras
|| -> or -> ou - > pelo menos uma expressão tem que ser verdadeira
! -> not -> não - > inverte uma expressão
*/

const usuario = 'Gabriel'
const senha = '123456'

// const vaiLogar = usuario === 'Gabriel' || senha === '12345'
const vaiLogar = usuario === 'Gabriel' && senha === '123456'
console.log(vaiLogar)

console.log(!false)

// Short-Circuit
console.log('luiz' && 'Maria')
console.log('luiz' && undefined && 'Maria')
console.log('luiz' && NaN && 'Maria')

function falaOi() {
    return 'oi';
}

const vaiExecutar = 'joão'
console.log(vaiExecutar && falaOi())
console.log(undefined && falaOi())
console.log(null && falaOi())

// const corUsuario = null - retorna preto
const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)