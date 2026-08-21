// filter sempre retorna um NOVO array com mesma quantidade de elementos que o original ou menos
// não modifica o array original

const numeros = [1, 2, 3, 50, 80, 100, 5, 6, 22, 25, 54, 26, 45, 15, 17]

const numerosFiltrados = numeros.filter(valor => valor >= 50);

// console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Gabriel', idade: 55},
    {nome: 'Maria', idade: 25},
    {nome: 'Lays', idade: 19},
    {nome: 'Luiz', idade: 57},
    {nome: 'Rosana', idade: 32},
    {nome: 'Fátima', idade: 66},
]
// retorna nomes com mais de 5 letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande)

// retorna pessoas com mais de 50 anos
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade >= 50)
// console.log(pessoasComMaisDeCinquentaAnos)
// const pessoasComNomesTerminamComA = pessoas.filter((obj => obj.nome.toLocaleLowerCase().slice(-1) === 'a'))
const pessoasComNomesTerminamComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasComNomesTerminamComA)



// retorna os valores maiores que 10 sem o filter
// const novo = function () {
//     const novoArray = []
//     for (const item of numeros) {
//         if (item > 10) {
//             novoArray.push(item)
//         }
//     }
//     return novoArray
// }

// console.log(novo())