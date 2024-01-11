function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(1, 2)
imprimirSoma(2)
imprimirSoma(2, 4, 6, 8, 10)
imprimirSoma()

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))