let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function converter() {
    resultado.innerHTML = '';

    let copiaNumero = numero = parseInt(document.getElementById('numero').value);
    let fatorialCopia = 0, fatorial = 1;
    let vetorOctal = [];
    let octal = '';

    if(numero >= 0 && numero <= 21) {
        while(copiaNumero > 0) {
            fatorial *= copiaNumero;
            copiaNumero--;
        }

        fatorialCopia = fatorial;
        
        resultado.innerHTML += `<p>${numero}! = ${fatorial}.</p>`;
    
        while(fatorialCopia > 0) {
            vetorOctal.unshift(fatorialCopia % 8);
            fatorialCopia = parseInt(fatorialCopia / 8);
        }
    
        for (let i = 0; i < vetorOctal.length; i++) {
            octal += vetorOctal[i];
        }
    
        resultado.innerHTML += `<p>${fatorial} em Octal: ${octal}<span class="base">8</span></p>`;
    } else {
        resultado.innerHTML = `<p style="color: red;">ERRO - Valor Inválido.</p>`;
    }
    
}

btn.addEventListener('click', converter);