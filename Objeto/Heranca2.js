Object.prototype.attr0 = '0' 

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual += this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.molelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

//Herança 4

console.log("")

for(let key in ferrari) {
    ferrari.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

console.log("")

for(let key in volvo) {
    volvo.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

console.log("")

//Herança 5

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Teste Herança'.reverse())

console.log("")

//Herança 6

function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem Vindo", 123)

function novo(f, ...parms) {
    const obj = {}
    
    obj.__proto__ = f.prototype
    f.apply(obj, parms)
    
    return obj
}

const aula2 = novo(Aula, 'Bem Vindo', 123)
console.log(aula1, aula2)