// Factory function

function criarPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() { /// Getter
        return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
        console.log(valor)
    },

    fala: function(assunto) { // fala é um método
      return `${this.nome} esta ${assunto}`
    },

    altura: altura,
    peso: peso,
    get imc() { // Getter - apenas obter o valor
        const indice = this.peso / (this.altura ** 2)
        return indice.toFixed(2)
    }
  };
}

const p1 = criarPessoa('Ana', 'Silva', 1.50, 50);
p1.nomeCompleto = 'Gabriel Braga de Oliveira'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('falando sobre js'))


