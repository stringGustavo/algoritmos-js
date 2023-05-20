let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';
    let copia = numero = parseInt(document.getElementById('numero').value);
    let maior = maiorPosicao = contador = 0;

    if(numero > 1) {
        while (numero > 1) {
            contador++;

            if (numero % 2 == 0) {
                numero /= 2;
            } else {
                numero = (numero * 3) + 1;
            }

            if (numero > maior) {
                maiorPosicao = contador;
                maior = numero;
            }

            resultado.innerHTML += `<p>${contador}º &rarr; ${numero}</p>`;
        }

        resultado.innerHTML += `<p>Número digitado: ${copia}</p>`;
        resultado.innerHTML += `<p>Maior número alcançado: ${maior}, ${maiorPosicao}ª Posição</p>`;
    } else {
        resultado.innerHTML = '<p style="color: red;">ERRO - Digite valores inteiros maiores que 1.</p>'
    }
}

btn.addEventListener('click', calcular);