//This e Bind
function soma() {
    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2))
console.log(soma(1, 2, 3))
console.log(soma(1, 2, 3, 4))
console.log(soma(1, 2, 3, 4, 5))

//Bind 1

console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2, 3, 4, 5, 6, 7))
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8))

console.log("")

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// Bind 2

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        // this.idade++
        // console.log(this.idade)
        
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// Pessoa()
new Pessoa // É semelhante ao código acima, só que aqui usa uma função construtora, já a decima apenas executa a função