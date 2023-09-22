import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", (numero1) => {
  rl.question("Digite o segundo número: ", (numero2) => {
    // Convertemos os números digitados para valores numéricos
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, digite números válidos.");
    } else {
      if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
      } else if (num2 > num1) {
        console.log(`O maior número é: ${num2}`);
      } else {
        console.log("Os números são iguais.");
      }
    }

    rl.close();
  });
});
