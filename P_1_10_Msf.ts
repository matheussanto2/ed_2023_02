let numero = 99; // Iniciamos com o maior múltiplo de 3 menor ou igual a 100 (99).

do {
  console.log(numero);
  numero -= 3; // Subtrai 3 para obter o próximo múltiplo de 3 em ordem decrescente.
} while (numero >= 0);
