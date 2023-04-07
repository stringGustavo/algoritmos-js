let numero = document.getElementById('valor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = "";
    let limite = 20;

    if(numero.value < 10) {
        while(numero.value <= limite) {
            document.getElementById('resultado').style.color = "blue";
            div.innerHTML += `${limite} `;
            limite--;
        }
    } else {
        document.getElementById('resultado').style.color = "red";
        div.innerHTML = `(ERRO 001) Valor Inválido. Digite um número menor que 10!`;
    }
}

btn.addEventListener('click', calcular);