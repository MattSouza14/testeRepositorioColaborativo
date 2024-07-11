const chave = "&appid=cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="
const linguagem = "&lang=pt_br"
const unidade = "&units=metric"
const urlImagem = 'https://openweathermap.org/img/wn/'

let inputCidade = document.getElementById('input-search')
let btnPesquisa = document.getElementById('button-search')
let tituloCidade = document.getElementById('cidade')
let temperatura = document.getElementById('temperatura')
let imgNuvem = document.getElementById('icone')
let umidade = document.getElementById('umidade')
let tipoDeTempo = document.getElementById('descricao')



async function buscarCidade(nomeCidade){

    url = apiWeather + nomeCidade + chave + linguagem + unidade

    const resposta = await fetch(url)

    const objeto = await resposta.json()

    return objeto
}


async function exibirInformacoes(cidade){
    let informacoes = await buscarCidade(cidade)

    tituloCidade.innerHTML = informacoes.name
    temperatura.innerHTML = informacoes.main.temp + '°C'
    umidade.innerHTML = informacoes.main.humidity + '%'
    tipoDeTempo.innerHTML = informacoes.weather[0].description
    imgNuvem.src = urlImagem + informacoes.weather[0].icon +'@2x.png'
    
    
}

async function pesquisar(){

let cidade = inputCidade.value
exibirInformacoes(cidade)
}

btnPesquisa.addEventListener('click', pesquisar)

let btnViena = document.getElementById('viena')
let btnZurique = document.getElementById('zurique')
let btnRecife = document.getElementById('recife')
let btnNatal = document.getElementById('natal')
let btnCopenhague = document.getElementById('copenhague')
let btnVancouver = document.getElementById('vancouver')
let btnJoaoPessoa = document.getElementById('joaoPessoa')
let btnMaceio = document.getElementById('maceio')


btnCopenhague.addEventListener('click',()=> pesquisar('Copenhague'))
btnNatal.addEventListener('click',()=> pesquisar)
btnVancouver.addEventListener('click',()=> pesquisar)
btnJoaoPessoa.addEventListener('click',()=> pesquisar)
btnMaceio.addEventListener('click',()=> pesquisar)
btnViena.addEventListener('click',()=> pesquisar)
btnRecife.addEventListener('click',()=> pesquisar)
btnZurique.addEventListener('click',()=> pesquisar)


