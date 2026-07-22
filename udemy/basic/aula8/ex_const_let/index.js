const nome = 'Gabriel Braga'
const idade = 27
const peso = 75
const alturaEmM = 1.80
let imc
let anoNascimento
let anoAtual

imc = peso / (alturaEmM * 2)
anoAtual = 2026
anoNascimento = anoAtual - idade

console.log(`${nome} tem ${idade} anos pesa ${peso}Kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
