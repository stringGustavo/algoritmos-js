let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function exibir () {
    let primeiroNumero = parseFloat(document.getElementById('primeiroNumero').value);
    let segundoNumero = parseFloat(document.getElementById('segundoNumero').value);
    let terceiroNumero = parseFloat(document.getElementById('terceiroNumero').value);

    let maiorNumero = 0;
    let menorNumero = Number.MAX_VALUE;

    if(primeiroNumero >= segundoNumero) {
        if(primeiroNumero >= terceiroNumero) {
            maiorNumero = primeiroNumero;
        }
    }

    if(segundoNumero >= primeiroNumero) {
        if(segundoNumero >= terceiroNumero) {
            maiorNumero = segundoNumero;
        }
    }

    if(terceiroNumero >= primeiroNumero) {
        if(terceiroNumero >= segundoNumero) {
            maiorNumero = terceiroNumero;
        }
    }

    if(primeiroNumero <= segundoNumero) {
        if(primeiroNumero <= terceiroNumero) {
            menorNumero = primeiroNumero;
        }
    }

    if(segundoNumero <= primeiroNumero) {
        if(segundoNumero <= terceiroNumero) {
            menorNumero = segundoNumero;
        }
    }

    if(terceiroNumero <= primeiroNumero) {
        if(terceiroNumero <= segundoNumero) {
            menorNumero = terceiroNumero;
        }
    }

    if(primeiroNumero > 0 && segundoNumero > 0 && terceiroNumero > 0) {
        div.innerHTML =  `<p style="color: blue">Os números digitados foram: ${primeiroNumero}, ${segundoNumero} e ${terceiroNumero}</p>`;
        div.innerHTML += `<p style="color: blue">O maior número é: ${maiorNumero}</p>`;
        div.innerHTML += `<p style="color: blue">O menor número é: ${menorNumero}</p>`;
    } else {
        alert('ERRO - Digite números positivos.');
        div.innerHTML = '<p style="color: red">ERRO - Digite números positivos.</p>';
    }
}

btn.addEventListener('click', exibir);