
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let quantidade = document.getElementById('quantidade').value;
    let codigo = document.getElementById('codigo').value;

    let resultado = 0;

    let code100 = 4.50;
    let code101 = 4.50;
    let code102 = 5.50;
    let code103 = 6.50;
    let code104 = 3.50;

    if(quantidade >= 1) {
        switch (codigo) {
            case "100":
                resultado = code100 * quantidade;
                div.innerHTML = `<p>Voçê escolheu ${quantidade} - Cachorro Quente - R$${code100}.</p>`;
                div.innerHTML +=`<p>O valor a ser pago é de: R$${resultado}</p>`;
            break;
                
            case "101":
                resultado = code101 * quantidade;
                div.innerHTML = `<p>Voçê escolheu ${quantidade} - Bauru Simples - R$${code101}.</p>`;
                div.innerHTML +=`<p>O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "102":
                resultado = code102 * quantidade;
                div.innerHTML = `<p>Voçê escolheu ${quantidade} - Bauru c/ovo - R$${code102}.</p>`;
                div.innerHTML +=`<p>O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "103":
                resultado = code103 * quantidade;
                div.innerHTML = `<p>Voçê escolheu ${quantidade} - Hambúrguer - R$${code103}.</p>`;
                div.innerHTML +=`<p>O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "104":
                resultado = code104 * quantidade;
                div.innerHTML = `<p>Voçê escolheu ${quantidade} - Refrigerante - R$${code104}.</p>`;
                div.innerHTML +=`<p>O valor a ser pago é de: R$${resultado}</p>`;
            break;

            default:
                div.innerHTML = `<p style="color: red;>Código inválido.</p>`;
            break;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
