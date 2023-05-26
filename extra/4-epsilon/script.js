let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';

    let arrNumeros = [];
    
    for (let i = 0; i < 20; i++) {
        arrNumeros.push(Math.floor(Math.random() * 3 + 1));
        resultado.innerHTML += `${arrNumeros[i]} `;
    }
    
    maiorSequencia(arrNumeros, 1);
    maiorSequencia(arrNumeros, 2);
    maiorSequencia(arrNumeros, 3);
    sequencias(arrNumeros, 1, 2 ,3);
    sequencias(arrNumeros, 3, 2 ,1);
}

function sequencias (arr, n1, n2, n3) {
    let contador = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == n1 && arr[i+1] == n2 && arr[i+2] == n3) {
            contador++;
        }
    }

    if(contador <= 1) {
        resultado.innerHTML += `<p>Sequência de [${n1} ${n2} ${n3}]: ${contador}</p>`;
    } else {
        resultado.innerHTML += `<p>Sequências de [${n1} ${n2} ${n3}]: ${contador}</p>`;
    }
}

function maiorSequencia (arr, num) {
    let contador = maior = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            contador++;
            if(contador > maior) {
                maior = contador;
            }
        } else {
            contador = 0;
        }
    }

    resultado.innerHTML += `<p>Maior sequência consecutiva de [${num}]: ${maior}</p>`;
}

btn.addEventListener('click', calcular);