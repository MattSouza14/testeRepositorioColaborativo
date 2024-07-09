//Resposta, erro api ou erro sistema
//then - Toda vez será preciso receber o retorno dos metodos anteriores
//fetch - codigo n fica parado esperando a api responder
let cepUsuario = document.getElementById('cepUser')
let botao = document.getElementById('btnCEP')

function buscarCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`).
    then((resposta)=>resposta.json()).
    then((objeto)=> console.log(objeto)).
    catch((e)=>console.log('Ocorreu um erro e eu tratei'))

}
botao.addEventListener('click', ()=>buscarCEP(cepUsuario.value))

