// const frutas = ['Maçã', 'Laranja', 'Uva']
// frutas[2] = 'Melância'
// delete frutas[2] // remove uva sem apagar o índice = gera um <1 empty item>
// console.log(frutas) 

// const nomes = ['Eduardo', 'Gabriel', 'Lucas']
// const novo = [...nomes] // pega o elementos do array nome e espalha no array novo | copia nomes para dentro de novo

// novo.pop()
// console.log(nomes)
// console.log(novo)

// const nomes = ['Eduardo', 'Gabriel', 'Lucas']
// const removido = nomes.pop() // remove o último item e guarda o item removido
// const removidoPrimeiro = nomes.shift() // remove o primeiro item e guarda o item removido | desloca os indices do array
// console.log(nomes, removido, removidoPrimeiro)

// const nomes = ['Eduardo', 'Gabriel', 'Lucas']
// // nomes.push('Diego')
// nomes.unshift('Wallace') // desloca os indices do array
// nomes.unshift('Maria')  // desloca os indices do array
// console.log(nomes)

const nomes = ['Eduardo', 'Gabriel', 'Lucas', 'Maria', 'Joana']
const novo = nomes.slice(0, -1)
console.log(novo)

// const nome = 'Gabriel Braga de Oliveira'
// const nomes = nome.split(' ')
// console.log(nomes)

// const nome = ['Gabriel', 'Braga', 'de', 'Oliveira']
// const nomes = nome.join(' ')
// console.log(nomes)