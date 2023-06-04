let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let nivel = parseInt(document.getElementById('level').value);

    if (nivel >= 0 && nivel <= 3.9) {
        div.innerHTML = `<p>Nível de Alerta: ${nivel}.<br><br>Gravidade: <span style="color: green">BAIXO</span></p>`;
    } else if (nivel >= 4 && nivel <= 6.9) {
        div.innerHTML = `<p>Nível de Alerta: ${nivel}.<br><br>Gravidade: <span style="color: yellow">MÉDIO</span></p>`;
    } else if (nivel >= 7 && nivel <= 8.9) {
        div.innerHTML = `<p>Nível de Alerta: ${nivel}.<br><br>Gravidade: <span style="color: orange">ALTO</span></p>`;
    } else  if (nivel >= 9 && nivel <= 10){
        div.innerHTML = `<p>Nível de Alerta: ${nivel}.<br><br>Gravidade: <span style="color: red">GRAVE</span></p>`;
    } else {
        div.innerHTML = `<p style="color: red">ERRO - Valor Inválido.</p>`;
    }
}

btn.addEventListener('click', calcular);
