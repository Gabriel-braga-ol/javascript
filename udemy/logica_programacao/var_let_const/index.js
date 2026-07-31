const verdadeira = true

// let nome = 'Gabriel'
// var nome2 = 'Braga'

// if (verdadeira) {
//     let nome = 'Luiz'
//     var nome2 = 'Bia'
//     console.log(nome) // luiz
//     console.log(nome2) // bia

//     if (verdadeira) {
//         let nome = 'Lays'
//         var nome2 = 'Gustavo'
//         console.log(nome) // Lays
//         console.log(nome2) // Gustavo
//     }
// }

// console.log(nome) // Gabriel
// console.log(nome2) // Gustavo 



function falaOi() {
    var sobrenome = 'Braga'
    // console.log(sobrenome) // Braga - a função reconhece o seu entorno, mas não compartilha o que está dentro com o que está fora

    if (verdadeira) {
        let nome = 'Gabriel'
        console.log(sobrenome)
    }

    console.log(nome) // Error: nome is not defined - neste caso, nome só funciona dentro do if
}

// console.log(sobrenome) // Error: is not defined
falaOi()