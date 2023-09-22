import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número (n1): ", (n1Input) => {
  rl.question("Digite o segundo número (n2): ", (n2Input) => {
    const n1 = parseFloat(n1Input);
    const n2 = parseFloat(n2Input);

    if (isNaN(n1) || isNaN(n2)) {
      console.log("Por favor, digite números válidos.");
      rl.close();
    } else {
      switch (true) {
        case n1 < n2:
          console.log(`${n1} é menor do que ${n2}`);
          break;
        case n1 > n2:
          console.log(`${n1} é maior do que ${n2}`);
          break;
        default:
          console.log(`${n1} é igual a ${n2}`);
      }
      rl.close();
    }
  });
});
