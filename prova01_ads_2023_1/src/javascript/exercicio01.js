let filme = document.getElementById('filme');
let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function converter () {
    let tempo = parseInt(document.getElementById('tempo').value);
    let min = tempo % 60;
    let horas = (tempo - min) / 60;

    if(tempo <= 0) {
        alert("ERRO - O campo Duração(min) deve ser um valor positivo.");
        div.innerHTML = `<p style="color: red;">ERRO - O campo Duração(min) deve ser um valor positivo.</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">Título do Filme: ${filme.value}</p>`;
        div.innerHTML += `<p style="color: blue;">Duração do Filme: ${horas} Horas e ${min} Minutos</p>`;
    }
}

btn.addEventListener('click', converter);