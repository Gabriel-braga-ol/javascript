// IIFE -> Immediatly invoked function expression

(function(idade, peso, altura) {
    // const nome = 'Luiz'; // não toca no escopo global
    const sobrenome = 'Braga'; // não toca no escopo global

    function falaOi(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(falaOi('Gabriel'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(30, 80, 1.80); // argumentos

const nome = 'Gabriel'

