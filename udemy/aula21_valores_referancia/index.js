// Tipos de dados primitivos:
    // Number
    // undefined
    // number
    // null
    // boolean
    // symbol
    // bigint

    // São imutáveis

// Valores por referência (mutáveis)
    // Array
    // Object
    // Function


let a = [1,2,3]
let b = [...a] //spread - o valor de a dentro de b - o b continua com o mesmo valor, mesmo alterando o a
let c = b

console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Luiz')
console.log(c)