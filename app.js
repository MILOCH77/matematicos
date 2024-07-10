console.log('Olá Mundo');

let nome;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let num10;


function clickNome() {
  nome = prompt(`Digite seu Nome`);
  console.log(`Olá ${nome}!`);
}

function clickNumero() {
  num1 = prompt(`Digite um número inteiro`)
  alert(`o dobro do número que você digitou é ${parseInt(num1) * 2} `);
}

function clickMedia() {
  num3 = prompt(`Digite o primeiro de 3 números inteiro`)
  num4 = prompt(`Digite o segundo de 3 números inteiro`)
  num5 = prompt(`Digite o terceiro de 3 números inteiro`)
  alert(`A média dos três números é ${(parseInt(num3) + parseInt(num4) + parseInt(num5)) / 3}`);
}

function clickMaior() {
  num6 = prompt(`Digite um número inteiro`)
  num7 = prompt(`Digite mais um número inteiro`)
  if (num6 > num7) {
    alert(`O maior dos dois números é ${num6} !`);
   } else if (num6 < num7) {
    alert(`O maior dos dois números é ${num7} !`);
   } else {
    alert(`Os números que você digitou são iguais! (${num6})`);
   }
  
}

function clickAoQuadrado() {
  num8 = prompt(`Digite um número inteiro`)
  alert(`O número que você digitou elevado ao quadrado é ${parseInt(num8) * parseInt(num8)} `);
}

function clickPotencia() {
  num9 = prompt(`Digite um número inteiro`)
  num10 = prompt(`Digite a Potência`)
  alert(`O resultado do calculo é ${parseInt(Math.pow(num9, num10))} `);
}