//A variável "let" tem escopo: "global", "local" e por "bloco"

let numero = 1

{
    let numero2 = 2
    console.log("Dentro: ", numero)// Se não encontrar a variável no escopo local, ele vai procurar em um escopo mais abrangente
    console.log("Dentro: ", numero2)
}

console.log("Fora: ", numero)