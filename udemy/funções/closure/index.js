// closure - habilidade que a função tem em acessar o seu escopo lexico

function retornaFuncao(nome) {
    return function () { // essa função tem acesso a três escopos
        return nome
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('Gabriel')
console.log(funcao())
console.log(funcao2())