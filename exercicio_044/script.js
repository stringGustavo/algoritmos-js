let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    let a = valorA.value;
    let b = valorB.value;
    let somaPares = 0;

    if( a > b) {
        let aux = a;
        a = b;
        b = aux;
    }

    while(a <= b) {
        document.getElementById('resultado').style.color = "blue";
        
        if(a % 2 == 0) {
            div.innerHTML += `'${a}' `;
            somaPares += parseInt(a);
        } else {
            div.innerHTML += `${a} `;
        }

        a++;
    }

    div.innerHTML += `<br><br>Soma dos números pares: ${somaPares}.`;
}

btn.addEventListener('click', calcular);

