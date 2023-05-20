let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');


function gerar() {
    let quantidade = parseInt(document.getElementById('numero').value);
    let potencia = quantidade;
    let contador = conta = soma = 0;

    let vetorNumeros = [];
    let vetorBinario = [];

    if (quantidade > 0) {
        for (let i = 0; i < quantidade; i++) {
            contador = 0;

            vetorNumeros.push(Math.floor(Math.random() * 11 + 1));

            for (let j = 1; j <= vetorNumeros[i]; j++) {
                if (vetorNumeros[i] % j == 0) {
                    contador++;
                }
            }
            if (contador == 2) {
                vetorBinario.push(1);
            } else {
                vetorBinario.push(0);
            }
        }

        for (let i = 0; i < vetorBinario.length; i++) {
            potencia--;

            conta = vetorBinario[i] * Math.pow(2, potencia);
            soma += conta;
        }

        resultado.innerHTML = `<p>Número digitado: ${quantidade}</p>`;

        resultado.innerHTML += `Vetor gerado: `;
        for (let i = 0; i < vetorNumeros.length; i++) {
            resultado.innerHTML += `${vetorNumeros[i]} `;
        }

        resultado.innerHTML += `<br><br>Vetor binário: `;
        for (let i = 0; i < vetorBinario.length; i++) {
            resultado.innerHTML += `${vetorBinario[i]} `;
        }

        resultado.innerHTML += `<p>Valor binário em decimal: ${soma}</p>`;
    } else {
        resultado.innerHTML = `<p style="color: red;">ERRO - Valor inválido.</p>`;
    }
}

btn.addEventListener('click', gerar);
