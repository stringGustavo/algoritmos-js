let init = 0;
let textSpeed = 50;
let text = 'Exercícios de Algoritmos - FATEC 2023';


function type() {
  if (init < text.length) {
    document.getElementById("text").innerHTML += text.charAt(init);

    init++;

    setTimeout(type, textSpeed);
  }
}