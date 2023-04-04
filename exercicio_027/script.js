let valor  = document.getElementById('numero');

let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    if(valor.value > 0) {

        let valorElevado = Math.pow(valor.value, 4);

        if(valorElevado % 2 == 0 && valorElevado % 5 == 0) {
            div.innerHTML = `<p style="color: blue;">O número digitado foi ${valor.value}.<br>Seu valor elevado ao quadrado é ${Math.pow(valor.value, 2)}.<br>Seu valor elevado ao cubo é ${Math.pow(valor.value, 3)}.<br>Seu valor elevado a sétima é ${Math.pow(valor.value, 7)}.</p>`;
        } else if (valorElevado % 2 != 0) {
            div.innerHTML = `<p style="color: blue;">O número digitado foi ${valor.value}<br>Sua raiz quadrada é ${Math.sqrt(valor.value).toFixed(2)}.<br>Sua raiz cúbica é ${Math.cbrt(valor.value).toFixed(2)}.<br>Sua raiz a sétima é ${Math.pow(valor.value, 1/7).toFixed(2)}.</p>`;
        } else {
            div.innerHTML = `<p style="color: blue;">O número ${valor.value} é apenas Par!</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 0001) Digite um número positivo.</p>`;
    }
}

btn.addEventListener('click', calcular);
