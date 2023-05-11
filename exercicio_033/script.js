let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let tamanhoDegrau = document.getElementById('degrau').value;
    let altura = document.getElementById('altura').value;

    let degrauCm = tamanhoDegrau / 100;
    let quantidadeDegraus = altura / degrauCm;

    if(tamanhoDegrau > 0 && altura > 0) {
        div.innerHTML = `<p>Quantidade total de degraus: ${quantidadeDegraus.toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }

}

btn.addEventListener('click', calcular);
