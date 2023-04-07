let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    let a = valorA.value;
    let b = valorB.value;
    let soma = 0;

    if( a > b) {
        let aux = a;
        a = b;
        b = aux;
    }

    while(a <= b) {
        document.getElementById('resultado').style.color = "blue";
        div.innerHTML += `${a} `;
        soma += parseInt(a);
        a++;
    }

    div.innerHTML += `<br><br>Soma dos números: ${soma}.`;
}

btn.addEventListener('click', calcular);
