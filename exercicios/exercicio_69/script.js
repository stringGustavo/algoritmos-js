const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    const altura = parseFloat(document.getElementById('altura').value);
    const genero = document.getElementById('genero').value;
    
    let calculo = 0;

    if (altura > 0) {
        if (genero == 'F') {
            calculo = (62.1 * altura) - 44.7;
            div.innerHTML = `Peso Ideal Feminino: ${calculo.toFixed(2)}`;
        } else {
            calculo = (72.7 * altura) - 58;
            div.innerHTML = `Peso Ideal Masculino: ${calculo.toFixed(2)}`;
        }
    } else {
        div.innerHTML = '<p style="color: red;">ERRO - Altura inválida.</p>';
    }
}

btn.addEventListener('click', calcular);
