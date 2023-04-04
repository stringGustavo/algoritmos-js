let valor = document.getElementById('valor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    if(valor.value >= 0) {

        if(valor.value % 2 == 0) {
            div.innerHTML = `<p style="color: blue;">O número digitado é PAR!</p>`;
        } else {
            div.innerHTML = `<p style="color: blue;">O número digitado é ÍMPAR!</p>`;
        }
        
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 0001) Digite um número positivo.</p>`;
    }
}

btn.addEventListener('click', calcular);
