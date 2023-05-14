let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let salario = document.getElementById('salario').value;
    let novoSalario = salario * 0.25;
    novoSalario += parseFloat(salario); 

    if(salario > 0) {
        div.innerHTML = `<p>Salário do Funcionário: R$${salario}</p>`;
        div.innerHTML += `<p>Salário com aumento de 25%: R$${novoSalario}</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }

}

btn.addEventListener('click', calcular);
