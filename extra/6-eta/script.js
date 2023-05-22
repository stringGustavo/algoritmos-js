let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';
    
    let numero = parseInt(document.getElementById('par').value);
    let numeroInicial = 0;
    let soma = 0;

    let vetorPrimos = [];
    let numeroRepetido = [];

    if(numero % 2 == 0 && numero > 2) {
    
        while(numeroInicial <= numero) {
            if(identificarPrimo(numeroInicial)) {
                vetorPrimos.push(numeroInicial);
            }
    
            numeroInicial++;
        }
    
        for(let i = 0; i < vetorPrimos.length; i++) {
            for(let j = 0; j < vetorPrimos.length; j++) {
                soma = vetorPrimos[i] + vetorPrimos[j];
    
                if(soma == numero) {
                    numeroRepetido.push(vetorPrimos[j]);

                    for(let l = 0; l < numeroRepetido.length; l++) {
                        if(vetorPrimos[i] != vetorPrimos[j] && vetorPrimos[i] == numeroRepetido[l]) {
                            return;
                        }
                    }
                    
                    resultado.innerHTML += `<p>${vetorPrimos[i]} + ${vetorPrimos[j]} = ${numero}</p>`;
                }
            }
        }
    } else {
        resultado.innerHTML = `<p style ="color: red;">ERRO - Valor inválido.</p>`;
    }
}

function identificarPrimo(numero) {
    let contador = 0;
    
    for(let i = 1; i <= numero; i++) {
        if(numero % i == 0) {
            contador++;
        }
    }

    return (contador == 2);
}

btn.addEventListener('click', calcular);