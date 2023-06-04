let inicio = 0;
let velocidade = 50;
let texto = 'Exercícios de Algoritmos - FATEC 2023';

let section = document.getElementById('links');
let btnPesquisar = document.getElementById('search');
let btnLimpar = document.getElementById('clear');
let backTop = document.getElementById('back-top');

function escrever() {
  if (inicio < texto.length) {
    document.getElementById("text").innerHTML += texto.charAt(inicio);

    inicio++;

    setTimeout(escrever, velocidade);
  }
}

function carregarLinks() {
  section.innerHTML = '';

  for (let i = 1; i <= 110; i++) {
    if (i < 10) {
      section.innerHTML += `
      <div>
        <a class="link link-ex" href="../exercicios/exercicio_${i}/index.html">Exercício 0${i}</a>
      </div>`;
    } else {
      section.innerHTML += `
      <div>
        <a class="link link-ex" href="../exercicios/exercicio_${i}/index.html">Exercício ${i}</a>
      </div>`;
    }
  }
}

carregarLinks();

function pesquisarExercicio() {
  let valorPesquisa = document.getElementById('exercices').value;
  
  if (valorPesquisa > 0 && valorPesquisa <= 110) {
    backTop.style.visibility = "hidden";
    section.style.display = "flex";

    if (valorPesquisa < 10) {
      section.innerHTML = `
      <div>
      <a class="link" href="../exercicios/exercicio_${valorPesquisa}/index.html">Exercício 0${valorPesquisa}</a>
      </div>`;
    } else if (valorPesquisa >= 10) {
      section.innerHTML = `
      <div>
      <a class="link" href="../exercicios/exercicio_${valorPesquisa}/index.html">Exercício ${valorPesquisa}</a>
      </div>`;
    }
  } else {
    limpar();
  }
}

function limpar () {
  backTop.style.visibility = "visible";
  section.style.display = "grid";
  carregarLinks();
}

btnLimpar.addEventListener('click', limpar);
btnPesquisar.addEventListener('click', pesquisarExercicio);