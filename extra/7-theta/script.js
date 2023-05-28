let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';

    let binario_1 = document.getElementById('binario_1').value;
    let binario_2 = document.getElementById('binario_2').value;

    let decimal_1 = paraDecimal(binario_1);
    let decimal_2 = paraDecimal(binario_2);

    let hexDecimal_1 = paraHexadecimal(decimal_1);
    let hexDecimal_2 = paraHexadecimal(decimal_2);

    let somaDecimais = decimal_1 + decimal_2;
    let somaBinarios = paraBinario(somaDecimais);
    let somaHexDecimal = paraHexadecimal(somaDecimais);

    if(!isNaN(somaDecimais)) {
        (isPrimo(somaDecimais)) ? 
        resultado.innerHTML = `<p>${somaDecimais} É primo.<br><br>${hexDecimal_1}<span class="base">16<span> + ${hexDecimal_2}<span class="base">16<span> = ${somaHexDecimal}<span class="base">16<span></p>`  
        : resultado.innerHTML = `<p>${somaDecimais} Não é primo.<br><br>${binario_1}<span class="base">2<span> + ${binario_2}<span class="base">2<span> = ${somaBinarios}<span class="base">2<span></p>`;
    } else {
        resultado.innerHTML = `<p style="color: red;">ERRO - Binário inválido.</p>`;
    }
}

btn.addEventListener('click', calcular);

function isPrimo(numero) {
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }

    return (contador == 2);
}

function paraDecimal(binario) {
    let vetorBin = [];
    let potencia = decimal = conta = 0;

    vetorBin = binario.split('');
    vetorBin = vetorBin.map(Number);
    potencia = vetorBin.length;

    for (let i = 0; i < vetorBin.length; i++) {
        if (vetorBin[i] != 0 && vetorBin[i] != 1) {
            return NaN;
        }

        potencia--;

        conta = vetorBin[i] * Math.pow(2, potencia);
        decimal += conta;
    }

    return decimal;
}

function paraBinario (decimal) {
    let vetorBinario = [];
    let binario = '';

    while(decimal > 0) {
        vetorBinario.unshift(decimal % 2);
        decimal = parseInt(decimal / 2);
    }

    for (let i = 0; i < vetorBinario.length; i++) {
        binario += vetorBinario[i];
    }

    binario = parseInt(binario);

    return binario;
}

function paraHexadecimal(decimal) {
    let arrHex = [];
    let hexDecimal = '';

    while (decimal > 0) {

        if (decimal % 16 == 10) {
            arrHex.unshift('A');
        } else if (decimal % 16 == 11) {
            arrHex.unshift('B');
        } else if (decimal % 16 == 12) {
            arrHex.unshift('C');
        } else if (decimal % 16 == 13) {
            arrHex.unshift('D');
        } else if (decimal % 16 == 14) {
            arrHex.unshift('E');
        } else if (decimal % 16 == 15) {
            arrHex.unshift('F');
        } else {
            arrHex.unshift(decimal % 16);
        }

        decimal = parseInt(decimal / 16);
    }

    for (let i = 0; i < arrHex.length; i++) {
        hexDecimal += arrHex[i];
    }

    return hexDecimal;
}
