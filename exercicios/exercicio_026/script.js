let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valor = document.getElementById('valor').value;

    if(valor > 0) {

        if(valor % 2 == 0) {
            div.innerHTML = `<p>O número digitado é PAR!</p>`;
        } else {
            div.innerHTML = `<p>O número digitado é ÍMPAR!</p>`;
        }
        
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
