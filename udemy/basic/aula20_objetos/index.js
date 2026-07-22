// const pessoa1 = {
//     nome: 'Gabriel',
//     sobrenome: 'Braga',
//     idade: 27
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 60
// };

// console.log(pessoa2.nome)
// console.log(pessoa2.sobrenome)
// console.log(pessoa2.idade)

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa = criaPessoa('Gabriel', 'Braga', 27)
console.log(pessoa.nome)

const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Braga',
    idade: 27,

    fala(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    },

    incrementa() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();