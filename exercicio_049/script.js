
let quantidade = document.getElementById('quantidade');
let codigo = document.getElementById('codigo');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let resultado = 0;

    let code100 = 4.50;
    let code101 = 4.50;
    let code102 = 5.50;
    let code103 = 6.50;
    let code104 = 3.50;

    if(quantidade.value >= 1) {
        switch (codigo.value) {
            case "100":
                resultado = code100 * quantidade.value;
                div.innerHTML = `<p style="color: blue;">Voçê escolheu ${quantidade.value} - Cachorro Quente - R$${code100}.</p>`;
                div.innerHTML +=`<p style="color: blue;">O valor a ser pago é de: R$${resultado}</p>`;
            break;
                
            case "101":
                resultado = code101 * quantidade.value;
                div.innerHTML = `<p style="color: blue;">Voçê escolheu ${quantidade.value} - Bauru Simples - R$${code101}.</p>`;
                div.innerHTML +=`<p style="color: blue;">O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "102":
                resultado = code102 * quantidade.value;
                div.innerHTML = `<p style="color: blue;">Voçê escolheu ${quantidade.value} - Bauru c/ovo - R$${code102}.</p>`;
                div.innerHTML +=`<p style="color: blue;">O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "103":
                resultado = code103 * quantidade.value;
                div.innerHTML = `<p style="color: blue;">Voçê escolheu ${quantidade.value} - Hambúrguer - R$${code103}.</p>`;
                div.innerHTML +=`<p style="color: blue;">O valor a ser pago é de: R$${resultado}</p>`;
            break;

            case "104":
                resultado = code104 * quantidade.value;
                div.innerHTML = `<p style="color: blue;">Voçê escolheu ${quantidade.value} - Refrigerante - R$${code104}.</p>`;
                div.innerHTML +=`<p style="color: blue;">O valor a ser pago é de: R$${resultado}</p>`;
            break;

            default:
                div.innerHTML = `<p style="color: red;>Código inválido.</p>`;
            break;
        }
    } else {
        div.innerHTML = `<p style="color: red;">Quantidade Inválida.</p>`;
    }
}

btn.addEventListener('click', calcular);
