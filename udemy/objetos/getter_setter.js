// defineProperty - Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        configurable: true, // podo ou não reconfigurar a chave
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }
            estoque = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 'dasdasdasd'
console.log(p1.estoque)