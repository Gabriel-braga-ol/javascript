const addTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefas')

function criaLi() { // apenas cria um li
    const li = document.createElement('li')
    return li
}

addTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!addTarefa.value) return;
        criaTarefa(addTarefa.value)
    }
})

function limparInput() {
    addTarefa.value = '';
    addTarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar tarefas')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefa.appendChild(li)
    limparInput()
    criarBotaoApagar(li)
    salvarTarefas()
}

// pega o texto que está dentro da tarefa e joga para a função criaTarefa()
btnTarefa.addEventListener('click', function () {
    if (!addTarefa.value) return;
    criaTarefa(addTarefa.value)
})
    
document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) { // se o elemento clicado contém a classe apagar
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li')
    const listaTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem( 'tarefas', tarefasJSON )
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem( 'tarefas' )
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(listaDeTarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

addTarefasSalvas()

