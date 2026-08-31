//705.484.450-52 070.987.720-03

function ValidarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '') // pega tudo que não for número e substotuí por nada
    const array = cpfLimpo.split('').map(Number)

    if (array.length !== 11) {
        return false
    }

    const resultado = array.slice(0, -2).reduce(function(acumulador, valor, indice) {
        const multiplicador = 10 - indice
        acumulador.push(valor * multiplicador)
        return acumulador
    }, [])

    const segundoResultado = array.slice(0, -1).reduce(function(acumulador, valor, indice) {
        const multiplicador = 11 - indice
        acumulador.push(valor * multiplicador)
        return acumulador
    }, [])

    const somaTotal = resultado.reduce(function(acumulador, valor) {
        soma = acumulador + valor
        return soma
    }, 0)

    const segundaSomaTotal = segundoResultado.reduce(function(acumulador, valor) {
        soma = acumulador + valor
        return soma
    }, 0)

    const primeiroDigito = 11 - (somaTotal % 11)
    if (primeiroDigito < 9) {
        return true
    }

    const segundoDigito = 11 - (segundaSomaTotal % 11)
    if (segundoDigito < 9) {
        return true
    }
    
}

console.log(ValidarCPF('705.484.450-52'))
console.log(ValidarCPF("070.987.720-03"));