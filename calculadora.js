// function calculadora (n1, n2, operacao){
//     let resultado = operacao(n1, n2)
//     return resultado
    
// }
// function somar(n1, n2 ){
//     total = n1 + n2
//     return alert(`O resultado da soma é ${total}`)
    
// }
// function subtrair(n1, n2 ){
//     total = n1 - n2
//     return alert(`O resultado da subtração é ${total}`)
     
// }
// function multiplicar(n1, n2 ){
//     total = n1 * n2
    
// }
// function dividir(n1, n2){
//     if (num2 != 0){
//         total = n1 / n2
        
//     }
//     else{
//         alert(`Não é possível dividir por 0`)
//     }
// }
// function operacoes(){
//     let op = prompt("Escolha uma operação [| + | - | / | * |]")
//     return op
// }

// let num1 = Number(prompt("Escolha um número"))
// let op = operacoes()
// let num2 = Number(prompt("Escolha o segundo número"))

// calculadora(num1, op, num2)

// let total
// switch(op){
    
//     case "+":
//         somar(num1, num2)
//         break;
        
//         case "-":
//             subtrair(num1, num2)
            
//             break;
            
//             case "/":
                
//                 dividir(num1, num2)
                
//                 break;
                
//                 case "*":
//                     multiplicar(num1, num2)
                    
//                     break;
                    
                    
//                     default:
//                         console.log("Operação invalida")
//                         break;
                        
                        
//                     }

function somaInvervalo(numInicio, numFinal){
    let soma = 0
    for(numInicio; numInicio<=numFinal; numInicio++){
        soma += numInicio

    }
   return soma

}

let resultado = somaInvervalo(1, 100)
console.log(resultado)
