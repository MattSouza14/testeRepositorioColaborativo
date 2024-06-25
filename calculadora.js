let num1 = Number(prompt("Escolha um número"))
let op = prompt("Escolha uma operação [| + | - | / | * |]")
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
        total = num1 / num2
        console.log(`O valor da divisão é = ${total}`) 
        break;

    default:
        total = num1 * num2
        console.log(`O valor da multiplicação é = ${total}`)
        break;

}
