const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo algo`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo algo`)
    },
}

const pessoaPrototype = Object.assign({}, falar, comer, beber)
        


function criaPessoa(nome, sobrenome) {
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Gabriel', 'Braga')
const p2 = criaPessoa('Maria', 'Silva')
p1.comer()
p2.falar()
// console.log(p1.beber())