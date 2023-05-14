let filme = document.getElementById('filme');
let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function converter () {
    let tempo = parseInt(document.getElementById('tempo').value);
    let min = tempo % 60;
    let horas = (tempo - min) / 60;

    if(tempo > 0) {
        div.innerHTML = `<p>Título do Filme: ${filme.value}</p>`;
        div.innerHTML += `<p>Duração do Filme: ${horas} Horas e ${min} Minutos</p>`;
    } else {
        alert("ERRO - O campo 'Duração' deve ser um valor positivo.");
        div.innerHTML = `<p style="color: red;">ERRO - O campo 'Duração' deve ser um valor positivo.</p>`;
    }
}

btn.addEventListener('click', converter);