const botao = document.querySelector('#buscaCotacao');
const resultado = document.querySelector('#resultado');

function buscaCotacao(){
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(function (resposta){
        return resposta.json()
    })
    .then(function(dados){
        let valorDolar = Number (dados.USDBRL.bid)
        let valorFormato = valorDolar.toLocaleString('pt-br',{
            style:"currency",
            currency:"BRL"
        })
        resultado.textContent = valorFormato
    })
}

botao.addEventListener("click", () => buscaCotacao())