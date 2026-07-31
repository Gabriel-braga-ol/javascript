// let a = 'A'; // B
// let b = 'B'; // C 
// let c = 'C'; // A

// const letras = [b, c, a];

// [a, b, c] = letras;

// console.log(a,b,c);
// ...rest, ...spread

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primerioNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primerioNumero, segundoNumero, terceiroNumero);
// console.log(resto);
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4 ,5, 6], [7, 8, 9]]
// console.log(numeros[2][2]) = 9
const [,,[,,nove]] = numeros
console.log(nove)
