// Produto -> aumento, desconto
// camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor
}
Produto.prototype.desconto = function(valor) {
    this.preco += valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) // Herdando de produto
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

function Monitor(nome, preco, tamanho) {
    Produto.call(this, nome, preco)
    Object.defineProperty(this, 'tamanho', {
        enumerable: true,
        configurable: false,
        get: function() {
            return tamanho
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            tamanho = valor
        }

    })
}
Monitor.prototype = Object.create(Produto.prototype)
Monitor.prototype.constructor = Monitor

const monitor = new Monitor('AOC', 800, 24)
const produto = new Produto('Calça', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca do vasco', 20, 'Porcelana', 5)
caneca.estoque = 100
monitor.tamanho = 24

console.log(camiseta)
console.log(monitor)
console.log(monitor.tamanho)
console.log(produto)
console.log(caneca)
console.log(caneca.estoque)
