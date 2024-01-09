const funcs = []

for (var i = 0;i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[10]()

const teste = []

teste[0] = function() {
    console.log("Teste")
}
teste[1] = function() {
    console.log("Olá Muindo!")
}

teste[0]()
teste[1]()