let turno = 'm'

if (turno == 'm' || turno == 'M')
{
    console.log("Turno manha")
}
else if(turno == 't' || turno == 'T')
{
    console.log("Turno tarde")
}
else
{
    console.log("Turno noite")
}
//Questão 1

let n1 = prompt("Digite um número: ")
let n2 = prompt("Digite outro número: ")

if(n1 > n2)
{
    console.log(`O número ${n1} é maior`)
}
else if(n2 > n1)
{
    console.log(`O número ${n2} é maior`)
}
else {
    console.log(`${n1} e ${n2} são iguais`)
}

//Questão 2

let a = Number(prompt("Digite um valor"))
let b = Number(prompt("Digite um valor"))
let c = Number(prompt("Digite um valor"))


if (a + b > c){
    console.log("A soma de A + B é maior que C ")
    console.log(`${a + b} | ${c}`)
}
else if (a + b == c){
    console.log ("A soma de A + B é igual a C")
    console.log(`${a + b} | ${c}`)

}
else{
    console.log("A soma de A + B é menor que C")
    console.log(`${a + b} | ${c}`)

}

//Questão 3

let parImpar = Number(prompt("Informe o numero: "))

if (parImpar % 2 == 0){
    console.log(`O número ${parImpar} é par`)
}
else {
    console.log(`O número ${parImpar} é impar`)
}

// Questão 4 

let A = parseInt(prompt("Inform um número INTEIRO"))
let B = parseInt(prompt("Inform um número INTEIRO"))

if (A == B){
    console.log(`Somando A(${A}) + B(${B}) = ${A + B}`)
}
else{
    console.log(`Multiplicando A(${A}) x B(${B}) = ${A * B}`)

}
