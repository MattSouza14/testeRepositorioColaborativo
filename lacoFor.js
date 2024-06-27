

// for (let index = 0; index <= 100; index++) {

//     if (index % 2 == 0){
//         console.log(index)
//     }
    
// }

//Questão 1



let notas = 0
let media = 0
for (let i = 1; i < 5; i++){
    if(i % 2 == 0){
    
        notas += (Number(prompt(`Informe sua ${i}º nota: `)) * 2)

    }
    else{

        notas += Number(prompt(`Informe sua ${i}º nota: `))

    }
}
media = notas / (1+2+1+2)

if(media >= 7){
    console.log("Parabéns você foi aprovado")
    console.log (`Sua media final é ${media}`)
}
else{
    console.log("Você foi reprovado")
    console.log (`Sua media final é ${media}`)
}
