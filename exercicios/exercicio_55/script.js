let div = document.getElementById('resultado');
let btn = document.getElementById('btn');


function calcular() {
    div.innerHTML = '';
    
    let soma = 0;
    let somaPares = 0;
    let contadorPar = 0;
    let strNumeros = document.getElementById('numeros').value;
    let numeros = strNumeros.split(" ");
    
    numeros = numeros.map(Number);
    
    for(let i = 0; i < numeros.length; i++) {
        if(!isNaN(numeros[i])) {
            div.innerHTML += `${numeros[i]} `;

            soma += numeros[i];

            if(numeros[i] % 2 == 0) {
                somaPares += numeros[i];
                contadorPar++;
            }
        }
    }

    div.innerHTML += `<p>Soma dos números digitados: ${soma}</p>`;
    div.innerHTML += `<p>Quantidade de números digitados: ${numeros.length}</p>`;
    div.innerHTML += `<p>Média dos números digitados: ${(soma / numeros.length).toFixed(2)}</p>`;
    div.innerHTML += `<p>Média dos números pares: ${(somaPares / contadorPar).toFixed(2)}</p>`;
}

btn.addEventListener('click', calcular);
