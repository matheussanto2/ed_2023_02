import * as modelo from './modelo';

function modificarValores(
  nome: string,
  idade: number,
  arrayCadeia: string[],
  arrayNumeros: number[],
  pessoa: { nome: string, idade: number }
) {
  // Modificar os valores dos parâmetros
  nome = "Carol";
  idade = 40;
  arrayCadeia.push("Pera");
  arrayNumeros.push(6);
  pessoa.nome = "David";
  pessoa.idade = 35;
}

// Visualizar os valores antes de chamar a função
console.log("Antes da modificação:");
console.log("nome:", modelo.nome);
console.log("idade:", modelo.idade);
console.log("arrayCadeia:", modelo.arrayCadeia);
console.log("arrayNumeros:", modelo.arrayNumeros);
console.log("pessoa:", modelo.pessoa);

// Chamar a função para modificar os valores
modificarValores(modelo.nome, modelo.idade, modelo.arrayCadeia, modelo.arrayNumeros, modelo.pessoa);

// Visualizar os valores após a chamada da função
console.log("\nApós a modificação:");
console.log("nome:", modelo.nome);
console.log("idade:", modelo.idade);
console.log("arrayCadeia:", modelo.arrayCadeia);
console.log("arrayNumeros:", modelo.arrayNumeros);
console.log("pessoa:", modelo.pessoa);
