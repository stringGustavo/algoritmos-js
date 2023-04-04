let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')

let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular () {

    let media = (((parseFloat(nota1.value) * 3) + (parseFloat(nota2.value) * 5) + (parseFloat(nota3.value) * 6) + (parseFloat(nota4.value) * 6)) / 20);
    
    if(media >= 6.00) {
        div.innerHTML = `<p style="color: blue;">Média do Aluno: ${media.toFixed(1)}<br>Aprovado!</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">Média do Aluno: ${media.toFixed(1)}<br>Reprovado!</p>`;
    }
} 

btn.addEventListener('click', calcular)