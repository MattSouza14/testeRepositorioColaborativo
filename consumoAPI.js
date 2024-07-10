//Resposta, erro api ou erro sistema
//then - Toda vez será preciso receber o retorno dos metodos anteriores
//fetch - codigo n fica parado esperando a api responder
let cepUsuario = document.getElementById('cepUser')
let botao = document.getElementById('btnCEP')

// function buscarCEP(cep){
//     fetch(`https://viacep.com.br/ws/${cep}/json/`).
//     then((resposta)=>resposta.json()).
//     then((objeto)=> console.log(objeto)).
//     catch((e)=>console.log('Ocorreu um erro e eu tratei'))

// }

async function buscarCEP(cep){

    try{
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    let cepUsuario = await resposta.json()

    return cepUsuario

    }catch(e){
        console.log('Ocorreu um erro e eu tratei')
    }
   
    

    
}
botao.addEventListener('click', ()=>mostrarTela(cepUsuario.value))

async function mostrarTela(cep){


    let objCEP = await buscarCEP(cep)

    let divCEP = document.createElement('div')


    let elementoPai = document.createElementr('body')
    let lista = document.createElement('ul')
    let cepLocal = document.createElement('li')
    let logadouro = document.createElement('li')
    let bairro = document.createElement('li')
    let localidade = document.createElement('li')
    let ddd = document.createElement('li')

    cepLocal.innerHTML = `CEP: ${objCEP.cep}`
    logadouro.innerHTML = `Logadouro: ${objCEP.logadouro}`
    bairro.innerHTML = `Bairro: ${objCEP.bairro}`
    localidade.innerHTML = `Localiade: ${objCEP.localidade}`
    ddd.innerHTML = `DDD: ${objCEP.ddd}`

    elementoPai.appendChild(divCEP)
    




}