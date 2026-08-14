// escopo lexico = a função enxerga as variáveis do lugar onde ela foi definida.
// Uma função consegue acessar variáveis de acordo com o lugar onde ela foi escrita no código, e não de acordo com o lugar onde ela foi chamada.

const nome = 'Gabriel'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'braga'
    falaNome()
}

usaFalaNome()
