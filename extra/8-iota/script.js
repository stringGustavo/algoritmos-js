let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';

    let qntSenhas = parseInt(document.getElementById('quantidade').value);

    const caracteres = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%&?'
    const tamanhoSenha = 10;

    if(qntSenhas == 1) {
        resultado.innerHTML = `<p>Senha Gerada:</p>`;
    } else if(qntSenhas > 1) {
        resultado.innerHTML = `<p>Senhas Geradas:</p>`;
    }

    if(qntSenhas > 0) {
        do {
            let qntDigitos = 0;
            let senha = '';
            let contadores = [0, 0, 0];
            
            qntSenhas--;
            while (qntDigitos < tamanhoSenha) {
                let rnd = Math.floor(Math.random() * 3);
                let cRnd = Math.floor(Math.random() * caracteres.length);
                let nRnd = Math.floor(Math.random() * numeros.length);
                let sRnd = Math.floor(Math.random() * simbolos.length);
    
                if (rnd == 0 && contadores[0] < 5) {
                    senha += caracteres[cRnd];
                    qntDigitos++;
                    contadores[0]++;
                } else if (rnd == 1 && contadores[1] < 3) {
                    senha += numeros[nRnd];
                    qntDigitos++;
                    contadores[1]++;
                } else if (rnd == 2 && contadores[2] < 2) {
                    senha += simbolos[sRnd];
                    qntDigitos++;
                    contadores[2]++;
                }
            }
    
            resultado.innerHTML += `${senha}<br><br>`;
        } while (qntSenhas > 0);
    } else {
        resultado.innerHTML = `<p style="color: red;">ERRO - Valor inválido.</p>`;
    }
    
}

btn.addEventListener('click', calcular);