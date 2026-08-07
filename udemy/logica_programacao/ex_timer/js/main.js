function relogio() {
    function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
    }

    const relogio = document.querySelector('.timer')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')

    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criarHoraDosSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const elemento = e.target;

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
        
        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer)
            iniciarRelogio()
        }
        
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer)

        }
    });
}
relogio()
