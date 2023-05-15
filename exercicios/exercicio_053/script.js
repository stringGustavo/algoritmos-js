let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

let brk = true;

function calcular() {
    let notas = [];
    notas.push(document.getElementById('primeiraNota').value);
    notas.push(document.getElementById('segundaNota').value);
    notas.push(document.getElementById('terceiraNota').value);
    let opcao = document.getElementById('media').value;
    
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] < 0 || notas[i] > 10) {
            brk = false;
        }
    }

    if(brk) {
        switch(opcao) {
            case '1':
                let mediaAritmetica = (parseFloat(notas[0]) + parseFloat(notas[1]) + parseFloat(notas[2])) / 3;
                div.innerHTML = `<p>Média Aritmética: ${mediaAritmetica.toFixed(2)}</p>`;
            break;
    
            case '2':
                let mediaPonderada = ((notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4)) / 10;
                div.innerHTML = `<p>Média Ponderada: ${mediaPonderada.toFixed(2)}</p>`;
            break;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Digite Valores Válidos.</p>`;
    }
}   

btn.addEventListener('click', calcular);
