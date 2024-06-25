//  Questão 1

let salarioFuncionario = prompt("Informe o seu salario: ")
console.log (`O novo salário é ${Number(salarioFuncionario) * 1.2 }R$`)

// Questão 2


let nota1 = Number(prompt("Infomre a primeira nota: "))

let nota2 = Number(prompt("Informe a segunda nota: "))

let nota3 = Number(prompt("Informe a terceira nota: "))


let media = (nota1 + nota2 + nota3) / 3

console.log(`A média foi de: ${media}`)
console.log("A média foi de: " + media)



//Questão 3 

let ladoQuadrado = Number(prompt("Informe o valor do lado do quadrado: "))

let area = ladoQuadrado * ladoQuadrado

console.log (`O valor da área do quadrado é ${area}`)

//Questão 4

let base = Number(prompt("Informe o valor da base:"))
let h = Number(prompt("Informe o valor da altura:"))

let areaTriangulo = (base * h) / 2

console.log(`A área do triangulo é ${areaTriangulo}`)

// Questão 5
const PI = 3.14
let raio = Number(prompt("Informe o valor do Raio: "))

let areaCirculo = PI * (raio * raio)

console.log (`A área do cirulo é ${areaCirculo}`)

// let pi =  Math.PI
// console.log(pi.toFixed(2))

//Questão 6

let num = Number(prompt("Digite um número: "))

if (num % 2 == 0){
  console.log("PAR")
  console.log(`Somando + 5... novo valor para ${num} é ${num + 5}`)
}
else {
  console.log("IMPAR")
  console.log(`Somando + 8... novo valor para ${num} é ${num + 8}`)
}

//Questão 7

let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))

let IMC = peso / (altura * altura)
  if(isNaN(IMC)){
  console.log(`Valor recebido não é um número`)
}
  else if(IMC < 18.5){
    console.log(`Você está abaixo do peso com o imc de ${IMC.toFixed(2)}`)
}
  else if(IMC >= 18.5 && IMC < 25){
    console.log(`Você está com peso normal com o imc de ${IMC.toFixed(2)}`)
}
  else if(IMC >= 25 && IMC < 30){
    console.log(`Você está acima do peso com o imc de ${IMC.toFixed(2)}`)
}
  else{
    console.log(`Você está obeso com o imc de ${IMC.toFixed(2)}`)
}








