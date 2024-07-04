// Documento Object Model
// document.getElementsByTagName
// document.getElementById
// document.getElementsByClassName

let paragrafos = document.getElementsByTagName('p')
 console.log(paragrafos)
let p = document.querySelector('p')//Seleciona o primeiro elemento com o seletor indicado
let todosParagrafos = document.querySelectorAll('p') //Seleciona todos os elementos com o seletor indicado.retorna um array de paragrafos
 

let paragrafoClasse = document.getElementsByClassName('paragrafoClasse')
console.log(paragrafoClasse)
let pClasse = document.querySelector('.paragrafoClasse')
let pClasseArray = document.querySelectorAll('.paragrafoClasse')


let listaId = document.getElementById('especial')
console.log(listaId)
// let li = document.querySelector('especial')

let itemOculto = document.querySelector('.oculto') // trás apenas o primeiro elemento 

listaId.style.color = 'blue' //Muda a cor
// listaId.innerHTML = 'Mudei com js'//Muda o conteudo dentro do html

//Utiliza os seletores CSS
// document.querySelector
// document.querySelectorAll

let textoDivH2 = document.querySelector('div')
textoDivH2.innerHTML += "<h3> Meu titulo 3 </h3>"
//innerTeXT Mostra apenas o texto visivel no navegador
//TextContent Mostra todo o conteudo independente da manipualção do css 
//innerHTML Mostra toda a estrutura do html

//Value resgata o valor


function dizerOi(){
    alert('Oi')
}
