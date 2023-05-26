let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let base = prompt('Digite o valor da base do retângulo: ');
    let altura = prompt('Digite o valor da altura do retângulo: ');
    
    base = parseInt(base);
    altura = parseInt(altura);
    
    let area = base * altura;
    let perimetro = base + base + altura + altura;
    
    div.innerHTML = `<p>Área: ${area}.<br>Perímetro: ${perimetro}.`;
    
    console.log(`Área: ${area}.`);
    console.log(`Perímetro: ${perimetro}.`);
}

btn.addEventListener('click', prmpt);
