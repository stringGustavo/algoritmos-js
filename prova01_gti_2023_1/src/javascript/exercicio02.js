let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function exibir () {
    let primeiroNumero = document.getElementById('primeiroNumero').value;
    let segundoNumero = document.getElementById('segundoNumero').value;
    let terceiroNumero = document.getElementById('terceiroNumero').value;

    let maiorNumeroDigitado = Math.max(primeiroNumero, segundoNumero, terceiroNumero);
    let menorNumeroDigitado = Math.min(primeiroNumero, segundoNumero, terceiroNumero);

    if(primeiroNumero > 0 && segundoNumero > 0 && terceiroNumero > 0) {
        div.innerHTML =  `<p style="color: blue">Os números digitados foram: ${primeiroNumero}, ${segundoNumero} e ${terceiroNumero}</p>`;
        div.innerHTML += `<p style="color: blue">O maior número é: ${maiorNumeroDigitado}</p>`;
        div.innerHTML += `<p style="color: blue">O menor número é: ${menorNumeroDigitado}</p>`;
    } else {
        alert('ERRO - Digite números positivos.');
        div.innerHTML = '<p style="color: red">ERRO - Digite números positivos.</p>';
    }
}

btn.addEventListener('click', exibir);