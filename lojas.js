let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let corEtiqueta = document.getElementsByName('corEtiqueta')

let resutaldoDesconto = document.querySelector('div')

function desconto(){
    valor.value
    quantidade.value
    corEtiqueta.value
    let descontoCor = 0
    let descontoQuantidade = 0
    let cor = 'indefinida'

    if(corEtiqueta[0].checked){
        descontoCor =  0.5
        cor = corEtiqueta[0].value
        
    }
    else if (corEtiqueta[1].checked){
        descontoCor =  0.3
        cor =corEtiqueta[1].value
       

    }
    else if(corEtiqueta[2].checked){
        descontoCor = 0.15
        cor =corEtiqueta[2].value

       

    }
    else {
        alert("Produto sem desconto")
        resutaldoDesconto.innerHTML += `O preço da peça é ${valor}`

    }
    
    if(qtdPeca > 2){
       descontoQuantidade = 0.10
    }
    
    
    let valorFinal = (valor.value * quantidade.value) * (1 + (descontoCor + descontoQuantidade))   
    
    
    resutaldoDesconto.innerHTML += `<ul>
    <li>Preço Original da peça : R$${valor.value}</li>
    <li>Cor da Etiqueta : ${cor}</li>
    <li>Quantidade de peças: ${quantidade.value}</li>
    <li>Desconto por cor: ${descontoCor * 100}%</li>
    <li>Desconto por quantidade: ${descontoQuantidade*100}%</li>
    <li>Total da compra com desconto: R$${valorFinal}</li>

    </ul>`
    
}





















