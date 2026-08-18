function* geradora1() {
    // código qualquer
    yield 'valor 1';
    // código qualquer
    yield 'valor 2';
    // código qualquer
    yield 'valor 3';
}

function* gerador2() { // cria um loop infinito
    let i = 0;
    while(true) {
        yield i;
        i++
    }
}

function* gerador3() {
    yield 0
    yield 1
    yield 2
}

function* gerador4() {
    yield* gerador3()
    yield 3
    yield 4
    yield 5
}

// const g4 = gerador4()
// for (let valor of g4) {
//     console.log(valor)
// }

function* gerador5() {
    yield function() {
        console.log('Vim do y1')
    }
    // ...

    yield function () {
        console.log('Vim do y2')
    }
}

const g5 = gerador5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()



// console.log(g1.next().value) // valor 1
// console.log(g1.next().value) // valor 2
// console.log(g1.next().value) // valor 3
// console.log(g1.next()) // done: false



