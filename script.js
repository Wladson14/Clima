const key = '7bf13b6a1f058c9720e8f00b3a874803'

function tela(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
     document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°c"
     document.querySelector('.texto-previsao').innerHTML= dados.weather[0].description
     document.querySelector('.umidade').innerHTML = dados.main.humidity + "%"
    document.querySelector('.previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function Buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    tela(dados)
}


function Buscar () {
    const cidade = document.querySelector('.entrada').value
    
    Buscarcidade(cidade)
}