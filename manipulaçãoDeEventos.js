var button = document.querySelector('#app button')
var input= document.querySelector('#app input#idade') //criou uma variavel com o valor digitado no doc html 


button.addEventListener('click', function(){ // quando clicado no button é criado alerta 
    alert('sua idade é: '+ input.value)
}) // click, mouseover