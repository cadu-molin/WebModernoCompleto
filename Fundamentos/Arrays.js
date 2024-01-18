// function teste(texto) {
//     console.log("Função declarada: ", texto)
// }

// const testeArrow = texto => console.log(`Arrow Function: `, texto)

// teste(`Teste`)

// testeArrow(`TesteArrow`)

// console.log([])
// console.log(![]) // false
// console.log(!![]) // true
// console.log([] == []) // false
// console.log([] == ![]) // true

// let arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3
// arr3 = [...arr1, ...arr2]
// console.log(arr3)

// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum.apply(null, numbers));

const valores = [7.7, 8.9, 6.3, 9.2]

for (i in valores) {
    console.log(i, valores[i])
}

console.log("")
console.log(valores.length)
console.log("")

console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores)
console.log(valores.length, "\n")

valores[4] = 10

console.log(valores)
console.log(valores.length, "\n")

valores[10] = 8

console.log(valores)
console.log(valores.length, "\n")

valores.push({id: 1}, false, null, "teste")

console.log(valores, "\n")

console.log(valores.pop())

console.log(valores, "\n")

delete valores[0]

console.log(valores, "\n")

console.log(typeof valores)