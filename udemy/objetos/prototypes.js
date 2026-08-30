
//Construtora
// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => 'original: ' + this.nome + ' ' + this.sobrenome;
// }

// Pessoa.prototype.nomeCompleto = function () {
//     return this.nome + ' ' + this.sobrenome;
// }

// // instãncia
// const p1 = new Pessoa('Gabriel', 'braga')
// const p2 = new Pessoa('Ana', 'Silva')

// console.dir(p1)
// console.dir(p2)


// // new Object -> Object.prototype
// const pessoa = {
//     nomeA: 'Gabriel'
//     //__proto__: Object.prototype
// }

// // new Object -> Object.prototype
// const outraPessoa = {
//     nomeB: 'Maria'
//     //__proto__: pessoa
// }

// const maisUmaPessoa = new Object()
// maisUmaPessoa.nomeC = 'Lays'

// Object.setPrototypeOf(outraPessoa, pessoa)
// Object.setPrototypeOf(maisUmaPessoa, outraPessoa)
// console.log(maisUmaPessoa.nomeB)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumenta = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50)

const p2 = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumenta(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

p3.aumenta(10)
console.log(p3)


