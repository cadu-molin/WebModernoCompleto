//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(1, 2)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))

const imprimri = a => console.log(a)
imprimri(8)