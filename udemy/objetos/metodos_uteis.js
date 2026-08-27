// const outraCoisa = {
//     ...produto,
//     material: 'porcelana'
// }
const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'}

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}


