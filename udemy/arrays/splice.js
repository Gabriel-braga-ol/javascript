
//               -5          -4         -3       -2       -1
// const nomes = ['Eduardo', 'Gabriel', 'Lucas', 'Maria', 'Joana']
// const removido = nomes.splice(3, 0, 'Luiz', 'Braga') // assim como o pop, retorna o elemento removido, porém, na forma de array | add luiz e braga ao indice 3
// console.log(nomes, removido)

const nomes = ['Eduardo', 'Gabriel', 'Lucas', 'Maria', 'Joana']
// const removido = nomes.splice(0, 1) // simulando o shift
nomes.splice(nomes.length, 0, 'Luiz') // simulando o push
console.log(nomes)
