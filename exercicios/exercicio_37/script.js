let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let numero = document.getElementById('numero').value;

    let quadradoNumero = Math.pow(numero, 2);

    div.innerHTML = `<p>O quadrado do número ${numero} é ${quadradoNumero}.</p>`;

    if(quadradoNumero > 10) {
        div.innerHTML += `<p>${quadradoNumero} é maior que 10!</p>`;
        div.innerHTML += `<p>A raiz cúbica de ${quadradoNumero} é ${Math.cbrt(quadradoNumero).toFixed(2)}.</p>`;
    }  else if (quadradoNumero < 10) {
        div.innerHTML += `<p>${quadradoNumero} é menor que 10!</p>`;
    } else {
        div.innerHTML += `<p>${quadradoNumero} é igual a 10!</p>`;
    }
}

btn.addEventListener('click', calcular);