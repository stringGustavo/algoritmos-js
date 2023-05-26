let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let numero = prompt('Digite um número: ');
    
    numero = parseFloat(numero);
    
    div.innerHTML = `<p>O número digitado foi: ${numero}\nSua raiz cúbica é ${Math.cbrt(numero).toFixed(2)}\nSua raiz quadrada é ${Math.sqrt(numero).toFixed(2)}.</p>`;
    
    console.log(`O número digitado foi: ${numero}\nSua raiz cúbica é ${Math.cbrt(numero)}\nSua raiz quadrada é ${Math.sqrt(numero)}.`)
}

btn.addEventListener('click', prmpt);
