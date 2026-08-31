class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    
    // metodo de instância
    aumentarVolume() {
        this.volume += 2
    }
    // metodo de instância
    diminuirVolume() {
        this.volume -= 2
    }

    // metodo de estático - não tem acesso aos dados da instância
    static soma(x, y) {
        return x + y
    }
}

const constrole1 = new ControleRemoto('LG')
constrole1.aumentarVolume()
constrole1.aumentarVolume()
constrole1.aumentarVolume()
constrole1.aumentarVolume()
console.log(constrole1)
console.log(ControleRemoto.soma(2, 4))
