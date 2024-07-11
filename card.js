let funcionarios = [
    {
        nome:'ana',
        cargo:'atendente',
        salario: 2000.00,
        gratificacao: 500.00,
        idade:22
    },
    {
        nome:'Paula',
        cargo:'contadora',
        salario: 4500.00,
        gratificacao: 500.00,
        idade:52
    },
    {
        nome:'Ricardo',
        cargo:'operacional',
        salario: 2500.00,
        gratificacao: 500.00,
        idade:31
    },
    {
        nome:'João',
        cargo:'gerente',
        salario: 9500.00,
        gratificacao: 500.00,
        idade:38
    },
    {
        nome:'Regina',
        cargo:'estagiária',
        salario: 1000.00,
        gratificacao: 100.00,
        idade:17
    }

]



funcionarios.forEach((item)=> console.log(`${item.nome} recebe R$ ${(item.gratificacao + item.salario)} de salário e bonificação`))


let gratificacoes = funcionarios.map((item)=>item.gratificacao)


let gratificacaoDobro = gratificacoes.map((item)=> item * 2)


let salariosSup4k =  funcionarios.filter((item)=>{
    if(item.salario>4000){
        return item
    }
})



let maiores20anos = funcionarios.filter((pessoa)=>{
    if(pessoa.idade>20){
        return pessoa
    }
})



let totalGratificacoes = funcionarios.reduce((total, funcionario)=> {
    total += funcionario.gratificacao
    return total
},0)



