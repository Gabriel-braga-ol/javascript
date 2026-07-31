const data = document.getElementById('titulo')

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function getDayWeekText (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto   
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto   
    case 2:
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto   
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto   
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto   
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto   
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto   
        default:
            diaSemanaTexto = ''
    }
}

function getMonthText(mes) {
    let mesTexto;

    switch (mes) {
        case 7:
            mesTexto = 'Julho'
            return mesTexto
    }
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = getMonthText(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    const diaSemana = getDayWeekText(data.getDay());

    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`
};


data.innerHTML = '';
data.innerHTML += formataData(new Date())

// segunda maneira

// const h1 = document.getElementById('titulo');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'Full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)

