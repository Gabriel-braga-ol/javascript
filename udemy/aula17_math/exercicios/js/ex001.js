const numero = Number(prompt('Digite um número: ')); // prompt sempre retorna uma string

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

// const inteiro = document.getElementById('inteiro');

// const temp = document.getElementById('not-a-number');

// const num1 = document.getElementById('round-floor');

// const num2 = document.getElementById('round-ceil');

// const num3 = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</P>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</P>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
