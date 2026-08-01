// for clássico - Geralmente com iteráveis (arrays ou strngs)
// for in - Retorna o índice ou chave (strings, arrays ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Gabriel Braga'
const texto = ['luiz', 'joão', 'lucas']

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i])
}

console.log('--------')

for (let i in texto) {
    console.log(texto[i])
}

console.log('--------')


for (let valor of texto) {
    console.log(valor)
}

console.log('--------')

texto.forEach(function(valor, indice) {
    console.log(valor, indice)
})