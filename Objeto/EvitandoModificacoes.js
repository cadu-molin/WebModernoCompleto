const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Seladpo: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

console.log("")

class teste {
    constructor(parm1) {
        console.log(parm1)
    }
}

const classe = new teste("Hellow World!")