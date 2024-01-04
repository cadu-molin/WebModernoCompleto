let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("")

console.log("Os verdadeiros:")
console.log(!!1)
console.log(!!-3)
console.log(!!' ')
console.log(!!"Teste")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log("")

console.log("Os falsos:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log("")

console.log("Pra finalizar:")
console.log('' || null || 0 || 'epa' && 123 || "teste")

let nome = ""

console.log(nome || "Desconhecido")

nome = "Carlos"

console.log(nome || "Desconhecido")