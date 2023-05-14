let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let catetoA = document.getElementById('catetoA').value;
    let catetoB = document.getElementById('catetoB').value;

    if(catetoA > 0 && catetoB > 0) {
        let hipotenusa = Math.pow(catetoA, 2) + Math.pow(catetoB, 2);
        let resultado = Math.sqrt(hipotenusa);
        let area = catetoA * catetoB / 2;
        
        div.innerHTML = `<p>O valor da Hipotenusa é: ${resultado.toFixed(2)}.<br>O valor da Área é: ${area.toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);