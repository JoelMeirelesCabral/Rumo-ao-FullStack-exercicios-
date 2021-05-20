'use strict'
//{
    // escopo
//}

function showCar() {
    //escopo local
     car  = 'BMW'
    console.log(car)
}
var car = 'fusca'

showCar()
console.log(car)

//escopo global é fora das chaves 


// no topo da pag do código colocar 'use strict' para evitar usar duas vezes o nome da variavel 

function sum(number1, number2) {
    var result = number1 + number2
    return result 
}

console.log(sum(3,3))

var result='qualquer coisa'

console.log(result)