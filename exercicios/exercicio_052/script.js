let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function calcularImc () {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if(peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);

        if(imc < 17) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Muito abaixo do peso`;
        } else if(imc >= 17 && imc <= 18.49) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Abaixo do peso`;
        } else if(imc >= 18.5 && imc <= 24.99) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Peso normal`;
        } else if(imc >= 25 && imc <= 29.99) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Acima do peso`;
        } else if(imc >= 30 && imc <= 34.99) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Obesidade I`;
        } else if(imc >= 35 && imc <= 39.99) {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Obesidade II`;
        } else {
            div.innerHTML = `IMC = ${imc.toFixed(2)} - Obesidade III`;
        }
    } else {
        alert('ERRO - Valores inválidos.');
        div.innerHTML = '<p style ="color: red;">ERRO - Valores inválidos.</p>';
    }
}

btn.addEventListener('click', calcularImc);
