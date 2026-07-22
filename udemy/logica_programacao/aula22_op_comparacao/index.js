/*
Operadores de comparação
>
>=
<
<=
== igualdade (valor) - não é recomendado usar esse
    const num1 = 10
    const num2 = '10'
    const resp = num1 == num2
    console.log(resp) - compara um número com uma string e mesmo assim retorna true mesmo sendo false

=== igualdade estrita (valor e tipo) - utilizamos esse
    const num1 = 10
    const num2 = '10'
    const resp = num1 === num2
    console.log(resp) - aqui retorna false oq é o correto

!=  diferente (valor) - não é recomendado usar esse
    const num1 = 10
    const num2 = '10'
    const resp = num1 != num2
    console.log(resp) - retorna false

!== diferente estrita (valor e tipo) - utilizamos esse
    const num1 = 10
    const num2 = '10'
    const resp = num1 !== num2
    console.log(resp) - retorna true
*/ 

const num1 = 10
const num2 = '10'
const resp = num1 != num2
console.log(resp)