let tamanhoDegrau = document.getElementById('degrau');
let altura = document.getElementById('altura');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let degrauCm = tamanhoDegrau.value / 100;
    let quantidadeDegraus = altura.value / degrauCm;

    div.innerHTML = `<p style="color: blue;">Quatidade total de degraus: ${quantidadeDegraus.toFixed(2)}.</p>`;
}

btn.addEventListener('click', calcular);
