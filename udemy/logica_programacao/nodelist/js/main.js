const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body); // armazena os estilos css do body
const backgroundBody = estilosBody.backgroundColor // pegando a cor de fundo do body


for (let p of ps) {
    p.style.backgroundColor = backgroundBody
    p.style.color = '#FFFFFF'
}