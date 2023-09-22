// a) Variável com anotação explícita de tipo numérico.
const numero: number = 42;

// b) Variável com anotação explícita de tipo string.
const texto: string = "Olá, mundo!";

// c) Variável sem anotação explícita de tipo, mas com valor lógico.
const logico = true;

// d) Variável JSON com propriedades de tipo numérico e string.
const pessoa = { nome: "Alice", idade: 30 };

// e) Array numérico com anotação explícita de tipo.
const numeros: number[] = [1, 2, 3, 4, 5];

// Exibindo os valores e tipos usando a função typeof()
console.log(`a) Tipo e valor da variável 'numero': ${typeof numero} ${numero}`);
console.log(`b) Tipo e valor da variável 'texto': ${typeof texto} ${texto}`);
console.log(`c) Tipo e valor da variável 'logico': ${typeof logico} ${logico}`);
console.log(`d) Tipo e valor da variável 'pessoa': ${typeof pessoa} ${JSON.stringify(pessoa)}`);
console.log(`e) Tipo e valor da variável 'numeros': ${typeof numeros} ${numeros}`);
