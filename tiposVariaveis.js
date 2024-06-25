let variavelTipoLet = 'coisa'

var variavelTipoVar = 'coisa2'

const variavelTipoConst = 'Káhia'


// -----------

let nome = prompt("nome: ")
let idade = prompt("Idade: ")
idade = Number(idade)
let endereco = prompt("Endereço: ")


console.log(nome + " tem " + idade + " anos e mora em " + endereco)
console.log(`${nome} tem ${idade} anos e mora em ${endereco}`)


console.log(`Daqui a 10 anos ${nome} terá ${idade + 10} anos`)



variavelTipoLet = 1
console.log(variavelTipoLet)

var variavelTipoVar = 25
console.log(variavelTipoVar)

//Questão-1
// let nomeUser = prompt("Digite seu nome: ")
// let idadeUser = prompt("Digite sua idade: ")
// let enderecoUser = prompt("Digite seu endereço: ")


// console.log (nomeUser, " Tem ", idadeUser, " anos e mora em", enderecoUser)
// console.log (`Daqui a 10 anos ${nomeUser} tera ${Number(idadeUser) + 10} anos`)

//Questão-2

// let saldo = 2500.50

// let nome = prompt("Informe seu nome: ")
// let valorDeposito = Number(prompt("Informe o valor do deposito: "))

// console.log(`O saldo atual de ${nome} é ${saldo}R$`)

// saldo += valorDeposito

// console.log (`O novo saldo de ${nome} é ${saldo}R$`)