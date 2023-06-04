const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    const primeiroNumero = parseFloat(document.getElementById('numero_1').value);
    const segundoNumero = parseFloat(document.getElementById('numero_2').value);

    if (primeiroNumero > 0 && primeiroNumero <= 100 && segundoNumero > 0 && segundoNumero <= 100) {
        let maiorNumero = 0;

        (primeiroNumero > segundoNumero) ? maiorNumero = primeiroNumero : maiorNumero = segundoNumero;

        div.innerHTML = `<p>Maior número: ${maiorNumero}</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor Inválido.</p>`;
    }
}

btn.addEventListener('click', calcular);
