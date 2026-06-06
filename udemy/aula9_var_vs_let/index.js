// ECMAScript 2015 (ES6)
// não crie variáveis sem const ou let
// NÃO SE UTILIZA MAIS VAR.

var nome = 'Gabriel'
var nome = 'Braga'  // Com var é possível declarar e redeclarar. Não é um comportamento desejavel. 
console.log(nome)
let sobrenome = 'Braga'
let sobrenome = 'oliveira' // ERRO. Variável ja foi declada
console.log(sobrenome)