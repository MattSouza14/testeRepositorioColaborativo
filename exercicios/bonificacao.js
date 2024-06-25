console.log("Cleitinho DEVS")

let tempoEmpresa = Number(prompt("Informe o tempo que está na empresa"))
let dependentes = parseInt(prompt("Informe quantos dependentes possui(MENOR QUE 7 ANOS)"))
let salarioBase= 1640
let valeAlimentacao = 1000
let valeTransporte = 200
let auxilioCreche = 500

//inss 9
//fgts 8
document.write(`Salario base: ${salarioBase},  beneficios: VA-${valeAlimentacao} VT-${valeTransporte} Auxilio Creche- R$${auxilioCreche} Por dependente`)



//switch talvez
if (tempoEmpresa < 1){
    console.log(`Salario com 0% de acrescimo: ${salarioBase}`)

}

else if (tempoEmpresa >= 2 && tempoEmpresa < 5){
    console.log("Parabéns, você ganhou uma bonificação de 10% :)")
    console.log(`Sua bonificação: ${salarioBase *= 1.1 }`)
}

else if(tempoEmpresa >= 5 && tempoEmpresa < 10){
    console.log("Parabéns, você ganhou uma bonificação de 15% :)")
    console.log(`Sua bonificação: ${salarioBase *= 1.15 }`)
}

else if(tempoEmpresa > 10){
    console.log("Parabéns, você ganhou uma bonificação de 20% :)")
    console.log(`Sua bonificação: ${salarioBase *= 1.2 }`)
}

 let beneficios = valeAlimentacao + valeTransporte + (auxilioCreche * dependentes)
 let totalReceber = salarioBase + beneficios

 console.log(`O total a ser recebido é de ${totalReceber.toFixed(2)} reais`)



