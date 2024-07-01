// let endereco = [60410234, "Rua Muito Longe", 587, "Aquele", "Fortaleza"]
// console.log(endereco[0])
// console.log(endereco[1])
// console.log(endereco[2])
// console.log(endereco[3])
// console.log(endereco[4])
// console.log(endereco.length)

// endereco[2] = "nº587"
// console.log(endereco[2])
// endereco[endereco.length] = "Ceara"
// console.log(endereco[5])
// endereco[endereco.length] = "CE"
// console.log(endereco[6])

// let provas = [0, 0, 0 , 0] 

// function notas(n1 , n2 , n3, media ){
    
//     media = (n1 + n2 + n3) / 3 
//     return media 
// } 
// for(let i = 0; i <3; i++){
//     provas[i] = Number(prompt(`Informe sua ${i+1}º nota`))
    
// }
 
// provas[3] = notas(provas[0], provas[1], provas[2])
// console.log(provas[3])

// function mediaNotas(){
//     let notasUser = []
//     for(let i = 1; i <=3; i++){
//         notasUser[i-1]= Number(prompt(`Informe a ${i}º notas`))

//     }
//     notasUser[3] = (notasUser[0] + notasUser[1] + notasUser[2])/ 3
//     return notasUser[3]
// }

// let resultado = mediaNotas()
// console.log(resultado)

// let arrayNotas = mediaNotas()

// let arrayNotas = [1, 2, 3]
// let excluido = arrayNotas.pop()
// arrayNotas.push('M')
// console.log(excluido)

// arrayNotas.unshift('inicio')
// arrayNotas.shift()

let pessoasAtender = 3

let filaPessoas = ["Mateus", "J", "Paulo", "Camila", "K", "Marcos", "Fernanda", "Julio", "Jacqueline", "Julia"]

let ultimoAtendido = []
let atendidasAmanha = []

for(let i = 0; i <pessoasAtender; i++){
    ultimoAtendido.unshift(filaPessoas.shift())
    

}
console.log(ultimoAtendido)

for (let i = 0 ; i < 7; i++){
    // atendidasAmanha[i] = filaPessoas[i]
    atendidasAmanha.push(filaPessoas.shift())

}
console.log(atendidasAmanha)


let numeros = [ 1, 2, 3]
 function multiplicar(n1){
    return n1 **2
 }
 
let numerosAoQuadrado = numeros.map((item)=>multiplicar(item))
console.log(numeros)
console.log(numerosAoQuadrado)