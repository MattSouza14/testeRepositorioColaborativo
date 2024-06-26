let c = 0
let soma =0

// while(c < 3){
//     console.log("São Longinho")
//     console.log("Ganhou 100")
//     acumulador += 100
//     c++
// }

while(c <= 100){
    if (c % 2 == 0 || c % 5 == 0){
        console.log(c)
        soma += c
    }
    c++
}
console.log(`Total ${soma}`)