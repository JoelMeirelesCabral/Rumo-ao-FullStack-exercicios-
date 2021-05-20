var input = document.querySelector('body div#app input[name="idade"]' ) // MAIS RECOMENDADO --- pode navegar dentro do código html (body que contém a div com id app )  [] usado para identificar a posição 




//var input = document.getElementsByTagName('input')[0] // obtem o elemento que tem tal pela tagname


//var input = document.getElementsByClassName('idade')[0] // traz um vetor uma array



//var input = document.getElementById('idade') // obtem o elemento que tem tal ID 



console.log(input.parentElement.parentElement) // mostra o pai

console.log(input.previousSibling)//acessa o elemento anterior e proximo seria nextElementSibling e filhos seria children

