import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira letra: ", (letra1) => {
  rl.question("Digite a segunda letra: ", (letra2) => {
    // Certificamo-nos de que as entradas sejam letras minúsculas
    letra1 = letra1.toLowerCase();
    letra2 = letra2.toLowerCase();

    if (letra1.length === 1 && letra2.length === 1 && letra1 >= 'a' && letra1 <= 'z' && letra2 >= 'a' && letra2 <= 'z') {
      if (letra1 === letra2) {
        console.log("As letras são iguais.");
      } else if (letra1 < letra2) {
        console.log(`A letra '${letra1}' vem antes de '${letra2}' no alfabeto.`);
      } else {
        console.log(`A letra '${letra2}' vem antes de '${letra1}' no alfabeto.`);
      }
    } else {
      console.log("Por favor, digite letras minúsculas válidas.");
    }

    rl.close();
  });
});
