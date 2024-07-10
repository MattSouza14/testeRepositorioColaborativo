let valorMoeda = document.getElementById('valor')
let btnMoedas = document.getElementsByName('botao')


async function converterMoeda(moeda){

    try{
        let resposta = await fetch(`https://economia.awesomeapi.com.br/last/${moeda}-BRL`)

        let cotacao = await resposta.json()

        montarTela( await cotacao)

    }catch{
        console.log("Error")
    }
}





 function montarTela(){
    let
 }
// selecionarMoeda(btnMoedas[0])