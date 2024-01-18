const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4000.50
prod1['Desconto Legal'] = 0.40

console.log(prod1)
console.table(prod1)

const prod2 = {
    teste1: 1,
    teste2: "teste",
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

console.log(typeof prod2)
console.log(prod2)
console.table(prod2)
console.log(JSON.stringify(prod2))

console.log("")

for (i in prod1) {
    console.log(`${i} = ${prod1[i]}`)
}