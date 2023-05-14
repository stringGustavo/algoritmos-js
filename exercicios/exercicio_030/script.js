let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let temperturaCelsius = document.getElementById('celsius').value;
    
    let temperaturaFahrenheit = temperturaCelsius * (9 / 5) + 32;
    
    div.innerHTML = `<p>${temperturaCelsius}&#8451; em Fahrenheit: ${temperaturaFahrenheit.toFixed(1)}&#8457;</p>`;
}

btn.addEventListener('click', calcular);