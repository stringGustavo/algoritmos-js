let ex = ['alpha', 'beta','gamma','delta','epsilon','zeta','eta','theta','iota','kappa'];

function carregarLinks () {
    let section = document.getElementById('omega');

    for (let i = 0; i < ex.length; i++) {
        section.innerHTML += `
        <div>
            <a class="link link-ex" href="../extra/${i}-${ex[i]}/index.html">Exercício - &${ex[i]};</a>
        </div>`;
    }
}

carregarLinks();