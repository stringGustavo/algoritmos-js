const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    for (let i = 1; i <= 100; i++) {
        if (i % 4 == 0) {
            div.innerHTML += '<span style="color: orange;">PI</span> ';
        } else {
            (i < 10) ? div.innerHTML += `0${i} `: div.innerHTML += `${i} `; 
        }
        
        if (i % 10 == 0) {
            div.innerHTML += `<br>`;
        }
    }
}

btn.addEventListener('click', calcular);
