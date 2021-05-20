var person = {
    name: 'joel',
    height: 90.5,
}

Object.freeze(person) // travar valor para não ser alterado 

person.name ='joel meireles cabral' // mudar/editar valor 

person.height= 80 //mudar/editar valor 

//onsole.log(person)

var any = {
    age:15
}

var newObject =Object.assign(person,any)

console.log(newObject)