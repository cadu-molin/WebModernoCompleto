// Ser uma variável "var" for declarada em uma função, ela tera o escopo local
//caso contrário, tera um escopo global

{ 
    { 
        { 
            { 
                var sera = 'Será?' 
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 1234
    console.log(local)
}

teste()
// console.log(local)