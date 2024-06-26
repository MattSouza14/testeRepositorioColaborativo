console.log("Cleitinho DEVS")

let tempoEmpresa = Number(prompt("Informe o tempo que está na empresa"))
let dependentes = parseInt(prompt("Informe quantos dependentes possui(MENOR QUE 7 ANOS)"))
let salarioBase = 9000
let valeAlimentacao = 1000
let valeTransporte = 200
let auxilioCreche = 500


document.write(`Salario base - R$${salarioBase}<br>`)
document.write(`Vale Alimentação - R$${valeAlimentacao}<br>`)
document.write(`Vale Transporte - R$${valeTransporte}<br>`)
document.write(`Auxilio Creche - R$${auxilioCreche} (Por dependente menor que 7 anos)<br>`)

let bonus

if (tempoEmpresa < 1){
    bonus = 0
    console.log(`Salario com 0% de acrescimo: R$${bonus}`)

}
else if (tempoEmpresa >= 1 && tempoEmpresa <= 2){
    console.log("Parabéns, você ganhou uma bonificação de 5% :)")
    bonus = salarioBase * 0.05
    console.log(`Sua bonificação: R$${bonus}`)
}

else if (tempoEmpresa > 2 && tempoEmpresa <= 5){
    console.log("Parabéns, você ganhou uma bonificação de 10% :)")
    bonus =salarioBase * 1.1 
    console.log(`Sua bonificação: R$${bonus}`)
}

else if(tempoEmpresa > 5 && tempoEmpresa <= 10){
    console.log("Parabéns, você ganhou uma bonificação de 15% :)")
    bonus = salarioBase * 1.15
    console.log(`Sua bonificação:R$${bonus}`)
}

else if(tempoEmpresa > 10){
    console.log("Parabéns, você ganhou uma bonificação de 20% :)")
    bonus = salarioBase * 1.2
    console.log(`Sua bonificação: R$${bonus}`)
}
else {
    bonus = 0
    console.log(`Informação fornecida errada ${bonus}`)   
}

let salarioLiquido =  salarioBase + (salarioBase * bonus) + valeAlimentacao + valeTransporte + (auxilioCreche * dependentes)
console.log(`O total a ser recebido sem os descontos é de R$${salarioLiquido.toFixed(2)}`)

let fgts = salarioBase * 0.08
let inss = salarioBase * 0.09
let descontos = fgts + inss

salarioLiquido -= descontos
console.log(`O total a ser recebido com os descontos é de R$${salarioLiquido.toFixed(2)}`)





