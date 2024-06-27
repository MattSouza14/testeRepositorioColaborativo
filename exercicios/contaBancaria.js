const nomeTitular = 'Mateus'
const senhaTitular = 123654
let saldo = 600
let saque
let deposito
let cont = 1
let acertouSenha = false

let senha = Number(prompt("Informe a senha da conta(APENAS NUMEROS)"))

if (senhaTitular != senha ){
    acertouSenha = false

    while(cont < 3 && acertouSenha === false){ 
        senha = Number(prompt(`SENHA ERRADA: Informe a senha da conta(APENAS NUMEROS)`))
        cont++
    }
    
}
else {
    acertouSenha = true
    let operacao = prompt("Informe a operação bancaria que dejesa realizar: \n[|E-Extrato|S-Saque|D-Deposito|]")

    switch (operacao){
    
        case "E":
            console.log(`Motrando o saldo da conta de ${nomeTitular}:`)
            console.log(`Saldo total da conta: ${saldo}R$`)
            break;
        case "S":
            saque = Number(prompt("Informe o valor que deseja realizar o saque"))
            if(saque > saldo){
                console.log(`Não é possivel realizar o saque:`)
                console.log(`Saldo atual: ${saldo}R$`)
                break;
            }
            else{
                saldo -= saque
                console.log(`Saque realizado com sucesso :)`)
                console.log(`Saldo atual: ${saldo}R$`)
                break;
            }
        case "D":
            deposito = Number(prompt("Informe o valor a ser depositado:"))
            saldo += deposito
            console.log(`Você depositou: ${deposito}R$`)
            console.log(`Saldo atual: ${saldo}R$`)
            break;
        default:
            console.log("Falha ao realizar a operação - Informe uma operação valida")
            break;
    
    }
    
}
