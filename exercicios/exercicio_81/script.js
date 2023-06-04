const table = document.getElementById('tabela');
const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

let contadorIdade = 0;

function calcular() {
    div.innerHTML = ''; 
    
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    if (idade >= 0 && peso > 0 && altura > 0) {
        let cadastro = {
            nome: nome,
            idade: idade,
            peso: peso,
            altura: altura
        };
        
        if (cadastro.idade > 18) {
            contadorIdade++;
        }
    
        div.innerHTML = `<p>Cadastros com mais de 18 anos: ${contadorIdade}</p>`;
    
        table.innerHTML += `
        <tr>
            <td class="description">${cadastro.nome}</td>
            <td class="description">${cadastro.idade}</td>
            <td class="description">${cadastro.peso}</td>
            <td class="description">${cadastro.altura}</td>
        </tr>`
    } else {
        div.innerHTML = '<p style="color: red;">ERRO - Valores inválidos.</p>';
    }
    
}

btn.addEventListener('click', calcular);
