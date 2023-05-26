let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let primeiraNota = document.getElementById('primeiraNota').value;
    let segundaNota = document.getElementById('segundaNota').value;
    let nome = document.getElementById('nome').value;
    
    let media = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;

    if(primeiraNota >= 0 && segundaNota >= 0 && primeiraNota <= 10 && segundaNota <= 10) {
        if(media > 7) {
            div.innerHTML = `<p>${nome} está Aprovado!<br><br>Média: ${media}.</p>`;
        } else if(media < 5) {
            div.innerHTML = `<p>${nome} está Retido!<br><br>Média: ${media}.</p>`;
        } else {
            div.innerHTML = `<p>${nome} está de Recuperação!<br><br>Média: ${media}.</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
