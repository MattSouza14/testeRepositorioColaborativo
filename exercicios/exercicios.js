// //  Questão 1

// let salarioFuncionario = prompt("Informe o seu salario: ")
// console.log (`O novo salário é ${Number(salarioFuncionario) * 1.2 }R$`)

// // Questão 2


// let nota1 = Number(prompt("Infomre a primeira nota: "))

// let nota2 = Number(prompt("Informe a segunda nota: "))

// let nota3 = Number(prompt("Informe a terceira nota: "))


// let media = (nota1 + nota2 + nota3) / 3

// console.log(`A média foi de: ${media}`)
// console.log("A média foi de: " + media)



// //Questão 3 

// let ladoQuadrado = Number(prompt("Informe o valor do lado do quadrado: "))

// let area = ladoQuadrado * ladoQuadrado

// console.log (`O valor da área do quadrado é ${area}`)

// //Questão 4

// let base = Number(prompt("Informe o valor da base:"))
// let h = Number(prompt("Informe o valor da altura:"))

// let areaTriangulo = (base * h) / 2

// console.log(`A área do triangulo é ${areaTriangulo}`)

// // Questão 5
// const PI = 3.14
// let raio = Number(prompt("Informe o valor do Raio: "))

// let areaCirculo = PI * (raio * raio)

// console.log (`A área do cirulo é ${areaCirculo}`)

// // let pi =  Math.PI
// // console.log(pi.toFixed(2))

// //Questão 6

// let num = Number(prompt("Digite um número: "))

// if (num % 2 == 0){
//   console.log("PAR")
//   console.log(`Somando + 5... novo valor para ${num} é ${num + 5}`)
// }
// else {
//   console.log("IMPAR")
//   console.log(`Somando + 8... novo valor para ${num} é ${num + 8}`)
// }

// //Questão 7

// let peso = Number(prompt("Digite seu peso: "))
// let altura = Number(prompt("Digite sua altura: "))

// let IMC = peso / (altura * altura)
//   if(isNaN(IMC)){
//   console.log(`Valor recebido não é um número`)
// }
//   else if(IMC < 18.5){
//     console.log(`Você está abaixo do peso com o imc de ${IMC.toFixed(2)}`)
// }
//   else if(IMC >= 18.5 && IMC < 25){
//     console.log(`Você está com peso normal com o imc de ${IMC.toFixed(2)}`)
// }
//   else if(IMC >= 25 && IMC < 30){
//     console.log(`Você está acima do peso com o imc de ${IMC.toFixed(2)}`)
// }
//   else{
//     console.log(`Você está obeso com o imc de ${IMC.toFixed(2)}`)
// }

// // Questão 8

// let notas = 0
// let mediaNotas = 0
// for (let i = 1; i < 5; i++){
//     notas += Number(prompt(`Informe sua ${i}º nota: `))
//     mediaNotas = notas / 4

// }

// if(mediaNotas >= 7){
//     console.log("Parabéns você foi aprovado")
//     console.log (`Sua media final é ${mediaNotas}`)
// }
// else{
//     console.log("Você foi reprovado")
//     console.log (`Sua media final é ${mediaNotas}`)
// }

// Questão 9
// let numeros = 0
// let contNum = 0
// let somaNumeros = 0
// let numeroIntervalo = 0
// for (let i=0; i <10; i++){

//   numeros = Number(prompt(`Informe o ${i+1}º número: `))
//   if (numeros >= 30 && numeros <= 90)
//   contNum++

// }
// console.log(contNum)

// for (let i = 30; i<=90; i++){
  
//   somaNumeros += i

// }
// console.log(`A soma dos números: ${somaNumeros}`)


// for (let i = 30; i <= 90; i++){
//  numeroIntervalo++
// }
// console.log (`Quantida de número entre 30 e 90 = ${numeroIntervalo}`)

// Questão 10
// let tabuada = Number(prompt("Qual número você quer ver a tabuada: "))
// for (let i = 0; i < 10; i++){
//   console.log(`${i} x ${tabuada} = ${i * tabuada}`)
// }

// Questão 11 

// let numClientes = Number(prompt("Quantos clientes quer fazer o cadastro: "))
// let faturamentoClientes = 0
// let faturamentoB = 54000
// for (let i = 0; i < numClientes; i++){

//   faturamentoClientes += Number(prompt(`Qual o faturamento do ${i+1}º cliente`))


// }

// if (faturamentoClientes > faturamentoB){
//   console.log(`O faturamento foi superado por R$${faturamentoClientes - faturamentoB}`)

// }
// else {
//   console.log(`O faturamento  não foi superado por R$${faturamentoB - faturamentoClientes}`)


// }


// Questão 12

// let valorDesconto = 0.00
// let valorCompra = 400

// for (let i = 0; i <25; i++){
//   valorCompra+=100
//   valorDesconto+=0.01

//   console.log(`R$${valorCompra}|${ 100 * valorDesconto.toFixed(2)}%|R$${valorCompra-(valorDesconto * valorCompra)}`)

// }

// // Questão 13


// cont = 10
// while (cont >= 0){
//   console.log(cont)
//   cont--
// }
// console.log("FIM")


// Questão 14

// let inteiro = 0
// let qtdIncremento =0

// while(inteiro <100000){
//   inteiro += 1000
//   qtdIncremento++
//   console.log(`${inteiro}`)
// }
// console.log(`O número foi incrementado ${qtdIncremento} vezes`)

// let numUser = 0
// for(let i= 0; i <10; i++){
//   numUser+=Number(prompt(`Digite o ${i+1}º número: `))
// }
// console.log(`A soma total = ${numUser}`)

// // Questão 15
let numero =Number(prompt(`Digite o 1º número: `))
let maior = numero
let menor = numero

 

for(let i= 2; i <=10; i++){

  if(numero > maior){
    maior = numero
  }
  else if ( numero < menor){
    menor = numero
  }
  else {
   
  }
  numero = Number(prompt(`Digite o ${i}º número: `))
}
console.log(`O maior número digitado foi ${maior} e o menor número digitado foi ${menor}`)

// // Questão 16


// let somaPares = 0
// let qtdPares = 0


//  for(let i =0; i <=100; i++){
//   if(i %2==0 && qtdPares <=50){
//     somaPares+= i
//     qtdPares++
//   }
  
// }


// console.log(qtdPares)
// console.log(`Total da soma dos números pares = ${somaPares}`)


// //  Questão 17

//  let n
//  n = Number(prompt("Digite um número: "))
//  for(let i = 0; i <= n; i++){
//   console.log(i)


//  }

// // Questão 19

// let numInteiroImparPositivo
// numInteiroImparPositivo = parseInt(prompt("Digite um número inteiro positivo impar: "))
// for(let i = 1; i <= numInteiroImparPositivo; i++){
//   if (i %2== 1){
//     console.log(i)

//   }
// }

// // Questão 20 

// let numInteiro
// numInteiro = Number(prompt("Digite um número inteiro positivo: "))

// for(let i = 0; i <= numInteiro; i++){

//   if (i%2==1){
//     console.log(i)
//   }

// }