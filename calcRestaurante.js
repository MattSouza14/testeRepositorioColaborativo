let entrada = document.getElementById('entrada')
let pratoPrincipal = document.getElementById('principal')
let bebida = document.getElementById('bebidas')
let sobremesa = document.getElementById('sobremesa')

let subTotalConta = document.getElementById('subtotal')
let servicoConta = document.getElementById('servico')
let totalConta = document.getElementById('total')

function calcularConta(){

    let subTotal = Number(entrada.value) + Number(pratoPrincipal.value) + Number(bebida.value) + Number(sobremesa.value)
    subTotalConta.value = subTotal.toFixed(2)
    
    let valorServico = subTotal * 0.1
    servicoConta.value = valorServico.toFixed(2)

    let total = subTotal + valorServico
    totalConta.value = total.toFixed(2)

    

    // return [subTotal,valorServico,total]

}

// function mostrarConta(){

//     let valores = calcularConta()


//     subTotalConta.value = valores[0].toFixed(2)
//     servicoConta.value = valores[1].toFixed(2)
//     totalConta.value = valores[2].toFixed(2)

// }