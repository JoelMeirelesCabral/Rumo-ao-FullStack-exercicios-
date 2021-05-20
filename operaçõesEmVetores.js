var array = ['joão', 'oliver','maria']

console.log(array.length) //imprime quantos valores no vetor 

for (var i = 0; i < array.length; i++)  {
    console.log(array[i])
}



var newValue = array.indexOf('joão') // a posição do valor do vetor 
console.log(newValue)



array.pop() //deleta e retorna valor

console.log(array) // deleta o ultimo valor 



array.pop() //deleta e retorna valor

console.log(array.pop()) // deleta o ultimo valor 

array.push('joel') //incrementa valor na array

console.log(array)



array.splice(0,1) //deletar um valor de posição especifica  (posição, quantas vezes vai deletar essa posição )

console.log(array)


