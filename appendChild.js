let nomeH1 = document.createElement('h1')
let listaUl = document.createElement('ul')
let listaLi = document.createElement('li')
let listaLi2 = document.createElement('li')

let elementoPai = document.querySelector('div')

nomeH1.innerHTML = 'Mateus Souza'
listaLi.innerHTML ='24'
listaLi2.innerHTML ='avenida alguma coisa'

elementoPai.appendChild(nomeH1)
elementoPai.appendChild(listaUl)
listaUl.appendChild(listaLi)
listaUl.appendChild(listaLi2)


let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function montarTitlo(item, pai){

    let titulo = document.createElement('li')
    titulo.innerHTML = item
    pai.appendChild(titulo)
}

numeros.forEach((num)=>montarTitlo(num,elementoPai))


// numeros.forEach(element => {
//     element = document.createElement('h1')
//     element.innerHTML = numeros
//     listaUl.appendChild(element)
// });