import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira palavra: ", (palavra1) => {
  rl.question("Digite a segunda palavra: ", (palavra2) => {
    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();

    let i = 0;
    while (i < palavra1.length && i < palavra2.length) {
      const char1 = palavra1[i];
      const char2 = palavra2[i];

      if (char1 < char2) {
        console.log(`A palavra '${palavra1}' aparece antes de '${palavra2}' no dicionário.`);
        rl.close();
        return;
      } else if (char2 < char1) {
        console.log(`A palavra '${palavra2}' aparece antes de '${palavra1}' no dicionário.`);
        rl.close();
        return;
      }

      i++;
    }

    if (palavra1.length === palavra2.length) {
      console.log("Ambas as palavras são idênticas até o comprimento da palavra mais curta.");
    } else if (i === palavra1.length && i < palavra2.length) {
      console.log(`A palavra '${palavra1}' aparece antes de '${palavra2}' no dicionário.`);
    } else if (i === palavra2.length && i < palavra1.length) {
      console.log(`A palavra '${palavra2}' aparece antes de '${palavra1}' no dicionário.`);
    }

    rl.close();
  });
});
