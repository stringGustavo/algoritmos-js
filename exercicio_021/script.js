let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function calcular () {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let nota4 = document.getElementById('nota4').value;

    let media = (((parseFloat(nota1) * 3) + (parseFloat(nota2) * 5) + (parseFloat(nota3) * 6) + (parseFloat(nota4) * 6)) / 20);
    
    if(nota1 >= 0 && nota2 >= 0 && nota3 >= 0 && nota4 >= 0 && nota1 <= 10 && nota2 <= 10 && nota3 <= 10 && nota4 <= 10) {
        if(media >= 6.00) {
            div.innerHTML = `<p>Média do Aluno: ${media.toFixed(1)}<br>Aprovado!</p>`;
        } else {
            div.innerHTML = `<p>Média do Aluno: ${media.toFixed(1)}<br>Reprovado!</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }

} 

btn.addEventListener('click', calcular);