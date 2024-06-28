function operacoes(){
   let op = prompt("Escolha uma operação [| + | - | / | * |]")
return op
}

let num1 = Number(prompt("Escolha um número"))
op = operacoes()
let num2 = Number(prompt("Escolha o segundo número"))
let total
switch(op){

    case "+":
        total = num1 + num2
        console.log(`O valor da soma é = ${total}`) 
        break;

    case "-":
        total = num1 - num2
        console.log(`O valor da subtração é = ${total}`) 
        break;

    case "/":
        if (num2 != 0){
            total = num1 / num2
            console.log(`O valor da divisão é = ${total}`) 
            break;
        }
        else{
            console.log(`Não é possível dividir por 0`)
            break;
        }
    case "*":
        total = num1 * num2
        console.log(`O valor da multiplicação é = ${total}`)
        break;
        

    default:
        console.log("Operação invalida")
        break;
        

}
