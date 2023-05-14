let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular () {
    let primeiroNumero = document.getElementById('primeiroNumero').value;
    let segundoNumero = document.getElementById('segundoNumero').value;

    if(primeiroNumero > 0 && segundoNumero > 0) {
        div.innerHTML = `<p>Os números digitados foram: ${primeiroNumero} e ${segundoNumero}</p>`;
        div.innerHTML += `<p>A raiz quadrada dos números são: ${Math.sqrt(primeiroNumero).toFixed(2)} e ${Math.sqrt(segundoNumero).toFixed(2)}</p>`;
        div.innerHTML += `<p>A raiz cúbica dos números são: ${Math.cbrt(primeiroNumero).toFixed(2)} e ${Math.cbrt(segundoNumero).toFixed(2)}</p>`;
        div.innerHTML += `<p>A raiz sétima dos números são: ${Math.pow(primeiroNumero, 1/7).toFixed(2)} e ${Math.pow(segundoNumero, 1/7).toFixed(2)}</p>`;
    } else {
        alert('ERRO - Digite números positivos.');
        div.innerHTML = '<p style="color: red;">ERRO - Digite números positivos.</p>';
    }
}

btn.addEventListener('click', calcular);