let valor //Quando a variável não é inicializada ela fica como Undefined
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(produto)

delete produto.preco
console.log(produto)