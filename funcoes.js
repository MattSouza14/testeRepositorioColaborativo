function olaMundo(){
    return "Olá Mundo"
}
function dizerOi(){
    console.log('oi')
}

// console.log(olaMundo())


// dizerOi()

function calcMedia(nota1, nota2, nota3, ){
   let media = (nota1 + nota2 + nota3)/ 3
   if(nota1 == undefined || nota2 == undefined || nota3 ==undefined){
    console.log(`Alguma nota não foi digitada`)
   }else{
    console.log(`Sua média final foi: ${media}`)
    return media
   }

}

let mediaFinal=calcMedia(5,5,7)



function pessoa(nome,idade){
    console.log(`Eu sou ${nome} e tenho ${idade} anos`)
    return nome
}


let nomePessoa = pessoa('Mateus', 24)
console.log(nomePessoa)