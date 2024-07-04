let nomeUsuario = document.getElementById('nome')
// nomeUsuario.value
let pesoUsuario = document.getElementById('peso')
// pesoUsuario.value
let alturaUsuario = document.getElementById('altura')
// alturaUsuario.value

let resultadoIMC = document.querySelector('div')


function calcularIMC(){
    let nomeUser = nomeUsuario.value
    let pesoUser = Number(pesoUsuario.value)
    let alturaUser = Number(alturaUsuario.value)

    let IMC = pesoUser /(alturaUser * alturaUser)


    resultadoIMC.innerHTML += `<p>O IMC de ${nomeUser} é ${IMC.toFixed(2)}</p>`
}

