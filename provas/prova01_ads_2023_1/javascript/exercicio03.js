let btn = document.getElementById('btn');
let div = document.getElementById('resultado');

function calcular () {
    div.innerHTML = "";

    let inicial = parseInt(document.getElementById('inicial').value);
    let final = parseInt(document.getElementById('final').value);
    let soma = 0;

    if(inicial <= 0 || inicial > 100 || final <= 0 || final > 100) {
        alert("ERRO - Digite números entre 1 e 100.");
        div.innerHTML = `<p style="color: red;">ERRO - Digite números entre 1 e 100.</p>`;
    } else {
        if(inicial > final) {
            let aux = inicial;
            inicial = final;
            final = aux;
        }
    
        while(inicial <= final) {
            inicial++;
            
            if(inicial % 2 == 0 && inicial < final) {
                soma += inicial;
                div.innerHTML += `${inicial} `;
            }
        }

        div.innerHTML += `<p>Soma dos Pares: ${soma}</p>`;
    }
}

btn.addEventListener('click', calcular);