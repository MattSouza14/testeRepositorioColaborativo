// let frutas = ['maça', 'uva', 'banana']
// let numero = [ 1, 2, 3, 4]


// frutas.forEach((FRUTA)=>console.log(FRUTA.toLocaleUpperCase()))
// let numeroDobro = numero.map((NUM)=> {
    
//     console.log(NUM)
//     return NUM * 2
// })
// console.log(numeroDobro)

// let par = numero.filter((x)=>{
//     if (x%2==0){
//         return x
//     }
// })


// let alunos=[
//     {
//         nome: 'Aluno0',
//         nota: 7.5
// },
//     {
//         nome: 'Aluno1',
//         nota: 6.2
// },
//     {
//         nome: 'Aluno2',
//         nota: 9.7
// },
//     {
//         nome: 'Aluno3',
//         nota: 5.3
// }
// ]

// console.log(alunos[1])

// let aprovados = alunos.filter((y)=>{
//     if(y.nota >= 7){
//         return y
//     }
// })
// console.log(aprovados)

// let nomeAprovados = aprovados.map((elemnto)=> elemnto.nome)
// console.log(nomeAprovados)


// let somaNumeros = numero.reduce((soma,num)=>{
//     return soma += num
// })
// console.log(somaNumeros)

// let notas = aprovados.map((elemento)=> elemento.nota)

// let notalTotal = notas.reduce((soma,nota)=>{
//     soma += nota
//     return soma
// })
// console.log(notalTotal)

// let pessoas= [
//     {
//         nome: 'Mateus',
//         cargo: 'Estagiario',
//         salario: 700,
//         gratificacao: 0,
//         // totalSalario: function(){
//         //     return pessoas.salario + pessoas.gratificacao
//         // },
//         idade: 24
    
//     },
//     {
//         nome: 'Kathia',
//         cargo: 'Dev Fullstack',
//         salario: 15000,
//         gratificacao: 4000,
        

//         idade: 26
    
//     },
//     {
//         nome: 'Guanabara',
//         cargo: 'Professor',
//         salario: 3500,
//         gratificacao: 1000,
       
//         idade: 15
    
//     },
//     {
//         nome: 'Dumbledore',
//         cargo: 'Diretor',
//         salario: 6500,
//         gratificacao: 200,
       
//         idade: 200
    
//     },
//     {
//         nome: 'Vojvoda',
//         cargo: 'Treinador',
//         salario: 700000,
//         gratificacao: 10000,
       

//         idade: 18
    
//     },
    

// ]
// pessoas.forEach((pessoa)=> console.log(`${pessoa.nome} - ${pessoa.salario + pessoa.gratificacao}`))


// let graticacoes = pessoas.map((x)=> x.gratificacao)
// console.log(graticacoes)


// let graticacoesDobro = graticacoes.map((dobro)=> dobro * 2)
// console.log(graticacoesDobro)

// let salario4Mil = pessoas.filter((salario)=>
//     {
//         if(salario.salario >=4000){
//             return salario
//         }
//     })
// console.log(salario4Mil)

// let idadeMaisDeVinte = pessoas.filter((idade)=>{
//     if(idade.idade >=20){
//         return idade
//     }
// })
// console.log(idadeMaisDeVinte)

// let totalGratificacoes = graticacoes.reduce((soma, num)=>{
//     soma+= num
//     return soma
// })
// console.log(totalGratificacoes)
