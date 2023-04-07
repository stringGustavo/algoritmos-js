let nota1 = document.getElementById('primeiraNota');
let nota2 = document.getElementById('segundaNota');
let nome = document.getElementById('nome');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let primeiraNota = nota1.value;
    let segundaNota = nota2.value;
    
    let media = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;

    if(primeiraNota >= 0 && segundaNota >= 0 && primeiraNota <= 10 && segundaNota <= 10) {
        if(media > 7) {
            div.innerHTML = `<p style="color: blue;">${nome.value} está Aprovado!<br><br>Média: ${media}.</p>`;
        } else if(media < 5) {
            div.innerHTML = `<p style="color: red;">${nome.value} está Retido!<br><br>Média: ${media}.</p>`;
        } else {
            div.innerHTML = `<p style="color: orange;">${nome.value} está de Recuperação!<br><br>Média: ${media}.</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 001) Valores Inválidos. Digite um valor de 0 a 10!</p>`;
    }
}

btn.addEventListener('click', calcular);
