// try, catch, throw

// try {
//     console,log(naoExisto)
// } catch (e) {
//     console.log('naoExisto não existe')
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        
        throw new Error('x e y precisam ser números')
    }

    return x + y
}
try {
    console.log(soma(5,2))
    console.log(soma('5',2))

} catch(e) {
    // console.log(e)
    console.log('Error')
}