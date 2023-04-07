let salario = document.getElementById('salario');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let novoSalario = salario.value * 0.25;
    novoSalario += parseFloat(salario.value); 

    div.innerHTML = `<p style="color: blue;">Salário do Funcionário: R$${salario.value}</p>`;
    div.innerHTML += `<p style="color: blue;">Salário com aumento de 25%: R$${novoSalario}</p>`;
}

btn.addEventListener('click', calcular);
