let numero = document.getElementById('numero');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let quadradoNumero = Math.pow(numero.value, 2);

    div.innerHTML = `<p style="color: blue;">O quadrado do número ${numero.value} é ${quadradoNumero}.</p>`;

    if(quadradoNumero > 10) {
        div.innerHTML += `<p style="color: blue;">${quadradoNumero} é maior que 10!</p>`;
        div.innerHTML += `<p style="color: blue;">A raiz cúbica de ${quadradoNumero} é ${Math.cbrt(quadradoNumero).toFixed(2)}.</p>`;
    }  else if (quadradoNumero < 10) {
        div.innerHTML += `<p style="color: blue;">${quadradoNumero} é menor que 10!</p>`;
    } else {
        div.innerHTML += `<p style="color: blue;">${quadradoNumero} é igual a 10!</p>`;
    }
}

btn.addEventListener('click', calcular);