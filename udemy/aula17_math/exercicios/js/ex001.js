const numero = Number(prompt('Digite um número: ')); // prompt sempre retorna uma string

const numeroTitulo = document.getElementById('numero-titulo');

const raizQuadrada = document.getElementById('raiz-quadrada');

const inteiro = document.getElementById('inteiro');

const temp = document.getElementById('not-a-number');

const num1 = document.getElementById('round-floor');

const num2 = document.getElementById('round-ceil');

const num3 = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;

raizQuadrada.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;

inteiro.innerHTML = `<p>${numero} é inteiro? ${Number.isInteger(numero)}</P>`;

temp.innerHTML = `<p>É NaN? ${Number.isNaN(numero)}</P>`;

num1.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;

num2.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;

num3.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
