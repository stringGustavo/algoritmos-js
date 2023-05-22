let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';
    const entrada = document.getElementById('numero').value;
    const numero = parseInt(entrada);

    let divisor = 1;
    let resto = inversor = digito = 0;
    let novoNumero = 1;

    if (numero > 999) {
        for (let i = 0; i < entrada.length; i++) {

            if (i > 0) {
                divisor *= 10;
            }

            digito = parseInt(numero / divisor % 10);
            
            if(digito != 0) {
                novoNumero *= digito;
            }
        }

        resultado.innerHTML = `<p>Número digitado: ${numero}</p>`;
        resultado.innerHTML += `<p>Novo número: ${novoNumero}</p>`;

        while(novoNumero > 0) {
            resto = novoNumero % 10;
            inversor = (inversor * 10) + resto;

            novoNumero = parseInt(novoNumero / 10);
        }

        resultado.innerHTML += `<p>Novo número invertido: ${inversor}</p>`;
    } else {
        resultado.innerHTML += `<p style="color: red;">ERRO - Valor inválido.</p>`;
    }
}

    btn.addEventListener('click', calcular);