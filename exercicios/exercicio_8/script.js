let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let lado = prompt('Digite o valor do Lado do Quadrado: ');
    
    let area = lado * lado;
    let perimetro = lado * 4;
    
    div.innerHTML = `<p>Área do Quadrado: ${area}.<br>Perímetro do Quadrado: ${perimetro}.</p>`;
    
    console.log(`Área do Quadrado: ${area}`);
    console.log(`Perímetro do Quadrado: ${perimetro}`);
}

btn.addEventListener('click', prmpt);
