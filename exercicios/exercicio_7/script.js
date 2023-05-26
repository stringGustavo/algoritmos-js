let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let numero = prompt('Digite um número: ');
    
    numero = parseInt(numero);
    
    div.innerHTML = `<p>O número digitado foi ${numero}, seu antecessor é ${numero - 1} e seu sucessor é ${numero + 1}.</p>`
    console.log(`O número digitado foi ${numero}, seu antecessor é ${numero - 1} e seu sucessor é ${numero + 1}`);
}

btn.addEventListener('click', prmpt);
