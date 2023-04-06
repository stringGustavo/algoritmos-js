let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let soma = parseFloat(valorA.value) + parseFloat(valorB.value);

    if(soma > 10) {
        div.innerHTML = `<p style="color: blue;">Os números digitados foram: ${valorA.value} e ${valorB.value}.</p>`;
        div.innerHTML += `<p style="color: blue;">A soma de ${valorA.value} e ${valorB.value} é: ${soma}.</p>`;
        div.innerHTML += `<p style="color: blue;">A raiz cúbica da soma é: ${Math.cbrt(soma).toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">Os números digitados foram: ${valorA.value} e ${valorB.value}.</p>`;
        div.innerHTML += `<p style="color: blue;">A soma de ${valorA.value} e ${valorB.value} é: ${soma}.</p>`;
    }
}

btn.addEventListener('click', calcular);