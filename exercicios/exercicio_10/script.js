let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let numero = prompt('Digite um número: ');
    
    numero = parseFloat(numero);
    
    div.innerHTML = `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}.</p>`;
    console.log(`A raiz quadrada de ${numero} é ${Math.sqrt(numero)}.`)
}

btn.addEventListener('click', prmpt);
