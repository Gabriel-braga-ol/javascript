try {
    console.log('Abri o arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    } finally {
        console.log('Também serei executado')
    }
}catch (e) {
    console.log('Tratando erro')
} finally {
    console.log('Finally: Sempre serei executado')
}