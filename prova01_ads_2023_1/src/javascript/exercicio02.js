let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function calcular () {
    let valor = parseFloat(document.getElementById('valor').value);
    let minutos = parseInt(document.getElementById('tempo').value);
    let contador = 1;
    let valorFinal = 0;

    if(valor <= 0 || minutos <= 0) {
        alert("ERRO - Insira um valor positivo.");
        div.innerHTML = `<p style="color: red;">ERRO - Insira um valor positivo.</p>`;
    } else {
        for(let i = 1; i <= minutos; i++) {
            if(i % 15 == 0) {
                contador++;
            }
        }
    
        if(minutos % 15 == 0) {
            contador--;
        }
    
        valorFinal = valor * contador;
    
        div.innerHTML = `<p style="color: blue;">Valor pago por 15 min: ${valor.toFixed(2)}<br>Tempo em minutos: ${minutos}<br>Valor a pagar: R$${valorFinal.toFixed(2)}</p>`;
    }
}

btn.addEventListener('click', calcular);