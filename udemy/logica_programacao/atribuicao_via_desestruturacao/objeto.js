const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Braga',
    // idade: 27,
    endereco: {
        rua: 'Av. Brasil',
        numero: 720
    }
}

// Atribuição via desestruturação
const { nome='', sobrenome, idade='A idade não foi informada' } = pessoa;
console.log(nome, sobrenome, idade);



// const nome = pessoa.nome
// console.log(nome) - atribuição normal

