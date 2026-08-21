// const pessoa = {
//     nome: 'Gabriel',
//     sobrenome: 'Braga'
// }

// const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa['sobrenome'])

// const pessoa1 = new Object() // construtor

// pessoa1.nome = 'Gabriel'
// pessoa1.sobrenome = 'Braga'
// pessoa1.idade = 27

// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome`) // this repesenta a pessoa1
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade // this repesenta a pessoa1
// }

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }

// factory functions / constructor functions

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Gabriel', 'Braga')
console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome

    // Object.freeze(this); // trava qualquer objeto que venha dessa função | nada altera o valor do objeto
}

// a palavra new cria um objeto vazio {} <- this
const pessoa1 = new Pessoa('Gabriel', 'Braga')
// Object.freeze(pessoa1) // trava o valor do objeto | não pode ser alterado
pessoa1.nome = 'Outro nome' // alterando o valor do valor de pessoa1, mas não a variável
const pessoa2 = new Pessoa('Maria', 'Silva')
pessoa2.nome = 'Qualquer coisa'
console.log(pessoa1)
console.log(pessoa2)




