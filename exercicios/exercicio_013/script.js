let primeiraNota = prompt('Digite a primeira nota: ');
let segundaNota = prompt('Digite a segunda nota: ');
let terceiraNota = prompt('Digite a terceira nota: ');
let quartaNota = prompt('Digite a quarta nota: ');
let div = document.getElementById('resultado');

mediaPonderada = (parseFloat(primeiraNota) + (parseFloat(segundaNota) * 2) + (parseFloat(terceiraNota) * 3) + (parseFloat(quartaNota) * 4)) / 10;

if(primeiraNota >= 0 && segundaNota >= 0 && terceiraNota >= 0 && quartaNota >= 0 && primeiraNota <= 10 && segundaNota <= 10 && terceiraNota <= 10 && quartaNota <= 10) {
    div.innerHTML = `<p>A média ponderada é : ${mediaPonderada}.</p>`;
} else {
    div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
}

console.log(`A média ponderada é : ${mediaPonderada}.`);