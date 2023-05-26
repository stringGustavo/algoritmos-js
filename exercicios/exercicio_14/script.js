let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let raio = prompt("Digite o valor do Raio do círculo: ");
    
    raio = parseFloat(raio);
    
    let area = (3.14 * (raio * raio));
    let perimetro = (2 * 3.14 * raio);
    
    if(raio > 0) {
        div.innerHTML = `<p>Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}.</p>`;
        console.log(`Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}.`);
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor Inválido Digitado</p>`;
    }
}

btn.addEventListener('click', prmpt);
