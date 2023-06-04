let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let polegada = 2.54;

    div.innerHTML = `
    <tr>
        <td>Polegada</td>
        <td>Centímetro</td>
    </tr>`;
    
    for (let i = 1; i <= 20; i++) {
        polegada = i * 2.54;

        div.innerHTML += `
        <tr>
            <td>${i}'</td>
            <td>${polegada}</td>
        <tr>`
    }
}

btn.addEventListener('click', calcular);
