let quantidade = document.getElementById('quantidade');
let tipo = document.getElementById('tipo');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    if(quantidade.value > 0) {
        switch(tipo.value) {
            case "1":
                let tipo1 = 1.50;
                let totalTipo1 = quantidade.value * tipo1;
                div.innerHTML = `<p style="color: blue;">Quantidade Vendida: ${quantidade.value}<br>Tipo: 1<br>Preço da Unidade: R$${tipo1}.<br>Total: R$${totalTipo1}.</p>`;
            break;
                
            case "2":
                let tipo2 = 2.60;
                let totalTipo2 = quantidade.value * tipo2;
                div.innerHTML = `<p style="color: blue;">Quantidade Vendida: ${quantidade.value}<br>Tipo: 2<br>Preço da Unidade: R$${tipo2}.<br>Total: R$${totalTipo2}.</p>`;
            break;

            case "3":
                let tipo3 = 3.75;
                let totalTipo3 = quantidade.value * tipo3;
                div.innerHTML = `<p style="color: blue;">Quantidade Vendida: ${quantidade.value}<br>Tipo: 3<br>Preço da Unidade: R$${tipo3}.<br>Total: R$${totalTipo3}.</p>`;
            break;

            default:
                div.innerHTML = `<p style="color: red;">Tipo inválido.</p>`;
            break;
        }
    } else {
        div.innerHTML = `<p style ="color: red;">Quantidade Inválida.</p>`;
    }
}


btn.addEventListener('click', calcular);
