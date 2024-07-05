let bgLousa = document.getElementById('retangulo')
let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul = document.getElementsByTagName('button')[2]




function mudarCorBg(cor){
    
       bgLousa.style.background = cor
    
    

}

let elementoFilho = document.createElement('p')
elementoFilho.innerHTML ='Texto inserido pelo innerHTML de um paragrafo criado com o createElement do object document'

let elementoPai = document.querySelector('body')

elementoPai.appendChild(elementoFilho)


let outroElemento = document.createElement('h1')
outroElemento.innerHTML = 'Titulo criado com JS'

elementoPai.appendChild(outroElemento)