let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valor  = document.getElementById('numero').value;

    if(valor > 0) {

        let valorElevado = Math.pow(valor, 4);

        if(valorElevado % 2 == 0 && valorElevado % 5 == 0) {
            div.innerHTML = `<p>O número digitado foi ${valor}.<br>Seu valor elevado ao quadrado é ${Math.pow(valor, 2)}.<br>Seu valor elevado ao cubo é ${Math.pow(valor, 3)}.<br>Seu valor elevado a sétima é ${Math.pow(valor, 7)}.</p>`;
        } else if (valorElevado % 2 != 0) {
            div.innerHTML = `<p>O número digitado foi ${valor}<br>Sua raiz quadrada é ${Math.sqrt(valor).toFixed(2)}.<br>Sua raiz cúbica é ${Math.cbrt(valor).toFixed(2)}.<br>Sua raiz a sétima é ${Math.pow(valor, 1/7).toFixed(2)}.</p>`;
        } else {
            div.innerHTML = `<p>O número ${valor} é apenas Par!</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
