let inicio = 0;
let velocidade = 50;
let texto = 'Avaliações de Algoritmos - FATEC 2023';

function escrever() {
  if (inicio < texto.length) {
    document.getElementById("text").innerHTML += texto.charAt(inicio);

    inicio++;

    setTimeout(escrever, velocidade);
  }
}


function carregarLinks() {
  let adsP1 = document.getElementById('ads-p1-links');
  let adsP2 = document.getElementById('ads-p2-links');

  let gtiP1 = document.getElementById('gti-p1-links');
  let gtiP2 = document.getElementById('gti-p2-links');

  for (let i = 1; i <= 3; i++) {
    adsP1.innerHTML += `<a class="link link-ex" href="../provas/prova01_ads_2023_1/pages/exercicio0${i}.html">Exercício 0${i}</a>`;
    gtiP1.innerHTML += `<a class="link link-ex" href="../provas/prova01_gti_2023_1/pages/exercicio0${i}.html">Exercício 0${i}</a>`;

    adsP2.innerHTML += `<a class="link link-off link-ex" href="#">Exercício ??</a>`;
    gtiP2.innerHTML += `<a class="link link-off link-ex" href="#">Exercício ??</a>`;
  }
}

carregarLinks();