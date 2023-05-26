let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let primeiroNumero = prompt('Digite um número: ');
    let segundoNumero = prompt('Digite outro número: ');
    
    primeiroNumero = parseInt(primeiroNumero);
    segundoNumero = parseInt(segundoNumero);
    
    let soma = primeiroNumero + segundoNumero;
    let sub = primeiroNumero - segundoNumero;
    let mult = primeiroNumero * segundoNumero;
    let divisao = primeiroNumero / segundoNumero;
    let media = soma / 2;
    
    div.innerHTML = `<p>Os números digitados foram ${primeiroNumero} e ${segundoNumero}.<br>
    A soma dos números ${primeiroNumero} e ${segundoNumero} é ${soma}.<br>
    A subtração dos números ${primeiroNumero} e ${segundoNumero} é ${sub}.<br>
    A multiplicação dos números ${primeiroNumero} e ${segundoNumero} é ${mult}.<br>
    A divisão dos números ${primeiroNumero} e ${segundoNumero} é ${divisao.toFixed(2)}.<br>
    A média dos números ${primeiroNumero} e ${segundoNumero} é ${media.toFixed(1)}.
    </p>`;
    
    console.log(`Os números digitados foram ${primeiroNumero} e ${segundoNumero}.`);
    console.log(`A soma dos números ${primeiroNumero} e ${segundoNumero} é ${soma}.`);
    console.log(`A subtração dos números ${primeiroNumero} e ${segundoNumero} é ${sub}.`);
    console.log(`A multiplicação dos números ${primeiroNumero} e ${segundoNumero} é ${mult}.`);
    console.log(`A divisão dos números ${primeiroNumero} e ${segundoNumero} é ${divisao}.`);
    console.log(`A média dos números ${primeiroNumero} e ${segundoNumero} é ${media}.`);
}

btn.addEventListener('click', prmpt);