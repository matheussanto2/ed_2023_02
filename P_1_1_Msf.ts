// a) Uma variável que tenha anotação explícita de tipo numérico.
let variavelNumerica: number = 42;

// b) Uma variável que tenha anotação explícita de tipo string.
let variavelString: string = "Olá, TypeScript!";

// c) Uma variável que não tenha anotação explícita de tipo mas que receba um valor lógico.
let variavelLogica = true;

// d) Uma variável que seja um JSON contendo propriedades de tipo numérico e de tipo string.
let objetoJson: { nome: string, idade: number } = { nome: "Alice", idade: 30 };

// e) Um array numérico com anotação explícita de tipo.
let arrayNumerico: number[] = [1, 2, 3, 4, 5];

// Exibindo os valores e os tipos utilizando a função typeof()
console.log(`a) Tipo e valor da variável 'variavelNumerica': ${typeof variavelNumerica} ${variavelNumerica}`);
console.log(`b) Tipo e valor da variável 'variavelString': ${typeof variavelString} ${variavelString}`);
console.log(`c) Tipo e valor da variável 'variavelLogica': ${typeof variavelLogica} ${variavelLogica}`);
console.log(`d) Tipo e valor da variável 'objetoJson': ${typeof objetoJson} ${JSON.stringify(objetoJson)}`);
console.log(`e) Tipo e valor da variável 'arrayNumerico': ${typeof arrayNumerico} ${arrayNumerico}`);
