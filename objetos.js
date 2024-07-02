// let enderecoObjt = {
//     rua: "rua",
//     bairro: "bairro",
//     cidade: "cidade",
//     estado: "estado",
//     1:"coisa"

// }
// console.log(enderecoObjt.rua)
// console.log(enderecoObjt)
//json representação textual de um objeto

// let pessoa ={
//     nome: "Mateus",
//     idade: 24,
//     altura: 1.67,
//     peso: 75,
//     calcularIMC: function(){
//         let imc = pessoa.peso / (pessoa.altura * pessoa.altura)
//         return imc
//     }
// }

// for (let chave in pessoa){
//     console.log(pessoa)
// }
    

// console.log(`Oi eu sou o ${pessoa.nome}`)
// console.log(`Tenho ${pessoa.idade} anos`)
// console.log(`Tenho ${pessoa.altura} metros`)
// console.log(`E peso ${pessoa.peso}Kg`)

// pessoa.corFav = "Azul"
// console.log(pessoa.corFav)
// pessoa.nome = "Souza"
// console.log(pessoa.nome)
// delete pessoa.idade

// console.log(Object.keys(pessoa))
// console.log(Object.keys(pessoan).length)

// let imcPessoa = pessoa.calcularIMC()
// console.log(imcPessoa)


// let loja =[]
// let qtdProdutos = 5


// for(let i = 1; i <= qtdProdutos; i++){

    
//     let produtos = {
//         nome: prompt("Informe o nome do produto"),
//         preco: Number(prompt("Infomre o valor do produto: ")),
//         cor: prompt("Informe a cor do produto: "),
//         tamanho: prompt("Informe o tamanho do produto[P,M ou G]: "),
//         disponibilidade: confirm("O produto está disponivel para venda? "),
//         descontoProduto: function(desconto = 0){
//             let produtoComDesconto = produtos.preco * (1-desconto/100)
//             return produtoComDesconto
//         },
//         disponibilidadeProduto: function(){
//             if(produtos.disponibilidade == true){
//                 produtos.disponibilidade = false
//             }
//             else{
//                 produtos.disponibilidade = true
//             }
//         }


//   }

//   loja.push(produtos)
// }
//javascript object notation
// }
// console.log(loja)
// let valorFinal= console.log(produtos.descontoProduto(5))
// console.log(valorFinal)
// produtos.disponibilidadeProduto()

let contaBanco = {
    Titular: 'Mateus',
    Senha: 'hcb56!po',
    Agencia: 626872,
    numConta: 1234567890,
    Tipo: 'Pj',
    Saldo: 600,
    DisponivelEmprestimo: 1000,
    Sacar: function (valorSaque){
        if(valorSaque > contaBanco.Saldo){
            
            console.log(`Não é possível realizar o saque. Saldo: ${contaBanco.Saldo}`)
        }
        else{
            let saldoAtual = contaBanco.Saldo - valorSaque
             console.log(`Saldo atual:${saldoAtual}`) 
        }
    },
    Depositar: function(valorDeposito){
        let saldoAtual = valorDeposito + contaBanco.Saldo
        console.log(`Você depositou R$${valorDeposito}. Saldo atual: R$${saldoAtual}`) 

    },
    ConsultarSaldo: function(){
        console.log(`Seu saldo atual: ${contaBanco.Saldo}`)
    },
    Emprestimo: function(ValorEmprestimo){
        
        if(contaBanco.Saldo < 0){
            console.log(`Não é possível fazer emprestimo com a conta negativada. Saldo ${contaBanco.Saldo}`)
        }else if(contaBanco.DisponivelEmprestimo < ValorEmprestimo){
            console.log(`Valor do emprestimo solicitado é maior que o disponivel: R$${contaBanco.DisponivelEmprestimo} disponivel`)
        }
        else{
            let saldoAtual = contaBanco.Saldo +=  ValorEmprestimo
            console.log(`Emprestimo de ${ValorEmprestimo} realizado com sucesso, seu novo saldo: ${saldoAtual}`)
        }
    }
}

let senhaCaixa = prompt("Informe a senha da sua conta: ")
if(senhaCaixa == contaBanco.Senha){
    console.log(`Entrando  na conta de ${contaBanco.Titular}`)
    console.log(contaBanco)
    let operacao = Number(prompt(`Escolha a operação que deseja realiza: 1- Consultar Saldo, 2- Realizar Emprestimo, 3- Sacar , 4- Depositar`))
    switch (operacao) {
        case 1:
            contaBanco.ConsultarSaldo()
            break;
        case 2:
            let emprestimo = Number(prompt("Informe o valor do emprestimo: "))
            contaBanco.Emprestimo(emprestimo)
            
            break;
        case 3:
            let saque = Number(prompt("Informe o valor do saque: "))
            contaBanco.Sacar(saque)
            
           
            break;
        case 4:
            let deposito = Number(prompt("Informe o valor do deposito: "))
            contaBanco.Depositar(deposito)
            
            break;
        default:
            console.log("Operação informada não existe ó cabeção")
            break;
    }
}
else{
    console.log("Senha errada")
}
//Pegar o valor do emprestimo, e a cada 30 dias diminuir contaBanco.Saldo de acordo com o calculo de juros e a quantidade parcelas
        //fazer um array que armazena outros arrays dentro ouu um array que armazena objetos com atributos valor do emprestimo, quantidade de parcelas = 24 e juros por mes
        //A cada quitação de emprestimo, o valor disponivel para emprestimo vai aumentar 1500 
        //fazerEmprestimo: function(valor, senha){
        //if (senhaCaixa == senha){
        //let qtdParcelas = 24
        //let juros = 0.02 
        //let parcela = (valor/qtdParceças)*1+juros
        //let informacoesEmprestimo =[valor, qtdParcelas, parcela, juros]   
        //conta.emprestimo.push(informacoesEmprestimo)
        //contaBanco.Saldo +=valor
        //console.log('Emprestimo de ${valor} concedido. Saldo atual da conta ${contaBanco.Saldo}')
        //
        //}
      