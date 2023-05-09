let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular () {
    let primeiroNumero = document.getElementById('primeiroNumero').value;
    let segundoNumero = document.getElementById('segundoNumero').value;

    let raizQuadradaPrimeiroNumero = Math.sqrt(primeiroNumero);
    let raizQuadradaSegundoNumero = Math.sqrt(segundoNumero);

    let raizCubicaPrimeiroNumero = Math.cbrt(primeiroNumero)
    let raizCubicaSegundoNumero = Math.cbrt(segundoNumero)

    let raizSetimaPrimeiroNumero = Math.pow(primeiroNumero, 1/7);
    let raizSetimaSegundoNumero = Math.pow(segundoNumero, 1/7);

    if(primeiroNumero > 0 && segundoNumero > 0) {
        div.innerHTML = `<p style="color: blue;">Os números digitados foram: ${primeiroNumero} e ${segundoNumero}</p>`;
        div.innerHTML += `<p style="color: blue;">A raiz quadrada dos números são: ${raizQuadradaPrimeiroNumero.toFixed(2)} e ${raizQuadradaSegundoNumero.toFixed(2)}</p>`;
        div.innerHTML += `<p style="color: blue;">A raiz cúbica dos números são: ${raizCubicaPrimeiroNumero.toFixed(2)} e ${raizCubicaSegundoNumero.toFixed(2)}</p>`;
        div.innerHTML += `<p style="color: blue;">A raiz sétima dos números são: ${raizSetimaPrimeiroNumero.toFixed(2)} e ${raizSetimaSegundoNumero.toFixed(2)}</p>`;
    } else {
        alert('ERRO - Digite números positivos.');
        div.innerHTML = '<p style="color: red;">ERRO - Digite números positivos.</p>';
    }
}

btn.addEventListener('click', calcular);