let aprovados = ['Ana', 'Carlos', 'Bia']

console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2')

console.log(aprovados)

aprovados.splice(3, 0, 'Elemento3', 'Elemento4')

console.log(aprovados)

console.log(aprovados.push('Elemento1'))
console.log(aprovados)

console.log("")
console.log("")//Métodos importantes
console.log("")

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log(pilotos)

pilotos.pop()//Remove o último elemento

pilotos.push('Verstappen')//Adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift()//Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona um elemento na primeiro posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)

console.log(algunsPilotos2)