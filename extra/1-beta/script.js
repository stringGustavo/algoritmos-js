let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';
    
    let verificador = true;
    let soma = maior = auxiliar = quantidade = mediana = metadeArray = repeticoes = maiorRepeticao = 0;
    let entrada = document.getElementById('numeros').value;

    let numeros = [];
    let moda = [];

    numeros = entrada.split(" ");
    numeros = numeros.map(Number);
    metadeArray = parseInt(numeros.length / 2);


    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] < 0 || isNaN(numeros[i])) {
                verificador = false;
                break;
            }

            if (numeros[i] > numeros[j]) {
                auxiliar = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = auxiliar;
            }
        }
    }

    if (verificador) {
        resultado.innerHTML = `Números digitados: `;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }

            soma += numeros[i];
            quantidade++;

            resultado.innerHTML += `${numeros[i]} `;
        }

        //! mediana
        if (numeros.length % 2 == 0) {
            mediana = (numeros[metadeArray] + numeros[metadeArray - 1]) / 2;
        } else {
            mediana = numeros[metadeArray];
        }
        //!

        //! moda
        for (let i = 0; i <= maior; i++) {
            repeticoes = 0;

            for (let j = 0; j < numeros.length; j++) {
                if (numeros[j] == i) {
                    repeticoes++;
                }

                if (repeticoes > maiorRepeticao) {
                    maiorRepeticao = repeticoes;
                }
            }
        }

        repeticoes = 0;

        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j <= maior; j++) {
                if (numeros[i] == j) {
                    repeticoes++;
                }

                if (repeticoes == maiorRepeticao) {
                    moda.push(numeros[i]);
                    repeticoes = 0;
                }
            }

            if (i < numeros.length - 1) {
                if (numeros[i] != numeros[i + 1]) {
                    repeticoes = 0;
                }
            }
        }
        //!

        resultado.innerHTML += `<p>Quantidade de números digitado: ${quantidade}</p>`;
        resultado.innerHTML += `<p>O maior número digitado: ${maior}</p>`;
        resultado.innerHTML += `<p>A média dos números digitados: ${(soma / numeros.length).toFixed(2)}</p>`;
        resultado.innerHTML += `<p>A mediana dos números digitados: ${mediana}</p>`;

        if (moda.length == numeros.length) {
            resultado.innerHTML += `<p>A moda dos números digitados: (Amodal) <span style="color: red;">"Não possui moda"</span></p>`;
        } else if (moda.length > 1) {

            resultado.innerHTML += 'A moda dos números digitados: ';
            for (let i = 0; i < moda.length; i++) {
                resultado.innerHTML += `${moda[i]} `;
            }

            resultado.innerHTML += '(Multimodal) <span style="color: orange;">"Possui mais de uma moda"</span>';
        } else {
            resultado.innerHTML += `<p>A moda dos números digitados: ${moda}</p>`;
        }
    } else {
        resultado.innerHTML += `<p style ="color: red;">ERRO - Valores inválidos.</p>`;
    }
}

btn.addEventListener('click', calcular);