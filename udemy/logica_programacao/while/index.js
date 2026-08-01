// let cont = 0

// while (cont <= 10) {
//     console.log(cont)
//     cont++
// }

function random(min, max){
    const r = Math.random() * (max - min) + min; // Math.random() gera um número decimal aleatário
    return Math.floor(r)
}
const min = 1
const max = 50

let rand = random(min, max)

while (rand !== 10) { // Checa a condição e depois executa o laço
    rand = random(min, max)
    console.log(rand)
}

console.log('--------')

do { // primeiro executa o código e depois checa a condição
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);