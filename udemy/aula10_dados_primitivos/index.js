// Tipos de dados primitivos:
    // Number
    // undefined
    // number
    // null
    // boolean
    // symbol
    
// String
const nome = 'Gabriel';
const nome1 = "Gabriel";
const nome2 = `Gabriel`;

// number
const num1 = 10;
const num2 = 10.52;

let nomeAluno; // undefined = não aponta pra nenhum local na memória
const sobrenomeAluno = null; // nulo = não aponta pra lugar nenhum na memória

const aprovado = true; // true, false

console.log(typeof sobrenomeAluno, sobrenomeAluno);

const a = [1, 2];
const b = a;

console.log(a, b)

b.push(3);
console.log(a, b)
