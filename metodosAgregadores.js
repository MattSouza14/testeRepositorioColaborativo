let frutas = ['maça', 'uva', 'banana']
let numero = [ 1, 2, 3, 4]


frutas.forEach((FRUTA)=>console.log(FRUTA.toLocaleUpperCase()))
let numeroDobro = numero.map((NUM)=> {
    
    console.log(NUM)
    return NUM * 2
})
console.log(numeroDobro)