const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1), Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 8.981

const total = avaliacao1 * peso1  + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("")

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(Number)
console.log(Object)

console.log("")

// Cuidados:

console.log(7 / 0)
console.log("10" / 2)
console.log("10.2" / 2)
console.log("10,2" / 2)

console.log("")

console.log("Show! " * 2)
console.log("Show! " + 2)
console.log("10.2" + 2)
console.log("10,2" - 2)
console.log(0.1 + 0.7)

console.log("")

//console.log(10.toString()) -- Não é possível utilizar função nesse liuter numérioco.
console.log(typeof (10).toString())
console.log((10.2846).toFixed(2))