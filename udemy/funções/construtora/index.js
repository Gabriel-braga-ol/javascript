// função construtora retorna objetos, assim como a factory
// Construtora -> o nome inicia com letra maiúscula -> Pessoa -> é necessário usar a palavra new -> são um molde para gerar novos objetos

function Pessoa(nome, sobrenome) {
    // // atributos ou metodos privados
    const id = 1;
    const metodoInterno = function() {

    };

    // atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Gabriel', 'Braga')
const p2 = new Pessoa('Maria', 'Oliveira')

p2.metodo()

