const numeros = [1, 2, 3, 50, 80, 100, 5, 6, 22, 25, 54, 26, 45, 15, 17]

const numerosEmDobro = numeros.map(valor => valor * 2)
// console.log(numerosEmDobro)

const pessoas = [
    {nome: 'Gabriel', idade: 55},
    {nome: 'Maria', idade: 25},
    {nome: 'Lays', idade: 19},
    {nome: 'Luiz', idade: 57},
    {nome: 'Rosana', idade: 32},
    {nome: 'Fátima', idade: 66},
]

const nomePessoa = pessoas.map(obj => obj.nome)
// console.log(nomePessoa)
const apenasIdade = pessoas.map(obj => ({ idade: obj.idade }) )
// console.log(apenasIdade)
const chaveId = pessoas.map(function(obj, indice) {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})

console.log(chaveId)
