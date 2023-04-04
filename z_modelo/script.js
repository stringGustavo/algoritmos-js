let catetoA = document.getElementById('catetoA');
let catetoB = document.getElementById('catetoB');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    if(catetoA.value < 0 || catetoB.value < 0) {
        console.log("Valor Inválido, digite apenas valores positivos!");
    } else {
        let hipotenusa = Math.pow(catetoA.value, 2) + Math.pow(catetoB.value, 2);
        let resultado = Math.sqrt(hipotenusa);
        let area = catetoA.value * catetoB.value / 2;
        
        div.innerHTML = `<p style="color: blue;">O valor da Hipotenusa é: ${resultado.toFixed(2)}.<br>O valor da Área é: ${area.toFixed(2)}.</p>`;
    }
}

btn.addEventListener('click', calcular);
