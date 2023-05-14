let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let quantidade = document.getElementById('quantidade').value;
    let tipo = document.getElementById('tipo').value;

    if(quantidade > 0) {
        switch(tipo) {
            case "1":
                let tipo1 = 1.50;
                let totalTipo1 = quantidade * tipo1;
                div.innerHTML = `<p>Quantidade Vendida: ${quantidade}<br>Tipo: 1<br>Preço da Unidade: R$${tipo1}.<br>Total: R$${totalTipo1}.</p>`;
            break;
                
            case "2":
                let tipo2 = 2.60;
                let totalTipo2 = quantidade * tipo2;
                div.innerHTML = `<p>Quantidade Vendida: ${quantidade}<br>Tipo: 2<br>Preço da Unidade: R$${tipo2}.<br>Total: R$${totalTipo2}.</p>`;
            break;

            case "3":
                let tipo3 = 3.75;
                let totalTipo3 = quantidade * tipo3;
                div.innerHTML = `<p>Quantidade Vendida: ${quantidade}<br>Tipo: 3<br>Preço da Unidade: R$${tipo3}.<br>Total: R$${totalTipo3}.</p>`;
            break;

            default:
                div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
            break;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
