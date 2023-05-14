let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;

    let soma = parseFloat(valorA) + parseFloat(valorB);

    if(soma > 10) {
        div.innerHTML = `<p>Os números digitados foram: ${valorA} e ${valorB}</p>`;
        div.innerHTML += `<p>A soma dos números é: ${soma}.<br>E sua raiz cúbica é: ${Math.cbrt(soma).toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p>Os números digitados foram: ${valorA} e ${valorB}<br>A soma dos números é: ${soma}</p>`;
    }
}

btn.addEventListener('click', calcular);
