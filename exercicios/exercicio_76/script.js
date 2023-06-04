const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let numero = parseInt(document.getElementById('numero').value);
    
    if (numero > 0 && numero < 10) {
        for (let i = 100; i >= numero; i--) {
            div.innerHTML += `${i} `;
        }
    } else {
        div.innerHTML = '<p style="color: red;">ERRO - Valor inválido.</p>';
    }
}

btn.addEventListener('click', calcular);
