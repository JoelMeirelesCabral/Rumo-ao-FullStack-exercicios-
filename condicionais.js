var isActive = false
var message =''

//condição 

if (isActive){   // verdadeiro
    message = 'Esta ativo '
} else {        // falso
    message = ' Não está ativo '
}

console.log(message)
//---------------------------------------
var traficLight = ''
var message =''

if(traficLight == 'verde'){ //se
    message=' pode passar ' 
}else if (traficLight == 'vermelho'){ //se não ,se 
  message= 'Pare'
} else if (traficLight == 'amarelo') {// se não, se
    message='Atenção '
} else {
    message = 'valor inválido'
}

console.log(message)
//---------------------------------------
var traficLight = ''
var message =''

switch (traficLight){
    case 'verde':
        message='pode passar'
        break
    case  'vermelho' :  
        message='pare'
        break 
    case  'amarelo':
        message='Atenção'
        break
    default:
        message= ' valor invalido'    
        break
}

console.log(message)