// defineproperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque, // mostra o valor da chave
        writable: false, // se o valor do estoque pode ou ser alterado
        configurable: false // podo ou não reconfigurar a chave
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  // mostra a chave
            value: nome, // mostra o valor da chave
            writable: true, // se o valor do estoque pode ou ser alterado
            configurable: true // podo ou não reconfigurar a chave
        },
        preco: {
            enumerable: true,  // mostra a chave
            value: preco, // mostra o valor da chave
            writable: true, // se o valor do estoque pode ou ser alterado
            configurable: true // podo ou não reconfigurar a chave
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)

for (let chave in p1) {
    console.log(chave)
}
