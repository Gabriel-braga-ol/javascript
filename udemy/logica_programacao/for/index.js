for (let i=0; i <= 5; i++) {
    console.log(i)
}

console.log('------------------')

for (let i=500; i >= 400; i -= 10) {
    console.log(i)
}

console.log('------------------')

for (let i=0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(i, par)
}

console.log('------------------')

const frutas = ['Maçã', 'Pera', 'Uva', 'Laranja', 'Melância']

for (let i=0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}