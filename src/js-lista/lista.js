let inicio = 0;
let velocidade = 50;
let texto = 'Exercícios de Algoritmos - FATEC 2023';

function escrever() {
  if (inicio < texto.length) {
    document.getElementById("text").innerHTML += texto.charAt(inicio);

    inicio++;

    setTimeout(escrever, velocidade);
  }
}

let section = document.getElementById('links');

function carregarLinks() {
  for (let i = 1; i <= 110; i++) {
    if(i < 10) {
      section.innerHTML += `<a class="link link-ex" href="../exercicios/exercicio_${i}/index.html">Exercício 0${i}</a>`;
    } else {
      section.innerHTML += `<a class="link link-ex" href="../exercicios/exercicio_${i}/index.html">Exercício ${i}</a>`;
    }
  }
}

carregarLinks();