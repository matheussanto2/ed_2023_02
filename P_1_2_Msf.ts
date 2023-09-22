Quando você passa o cursor sobre uma variável durante a sua declaração:

Se você já especificou explicitamente o tipo da variável, o tipo exibido será aquele que você declarou. Por exemplo, se você escreveu let numero: number = 42;, ao passar o cursor sobre numero, verá "number".

Se você não especificou o tipo, o ambiente de desenvolvimento tentará adivinhar o tipo com base no valor que você atribuiu à variável. Por exemplo, se você escreveu let logico = true;, ao passar o cursor sobre logico, verá "boolean" (porque o valor é verdadeiro).

Quando você define uma variável que é um objeto JSON com tipos específicos, o ambiente de desenvolvimento mostrará esses tipos quando você passar o cursor sobre a variável. Por exemplo, let pessoa: { nome: string, idade: number } = { nome: "Alice", idade: 30 }; exibirá os tipos "string" e "number" para as propriedades "nome" e "idade" ao passar o cursor sobre pessoa.

Se você especificou o tipo de um array, como em let arrayNumerico: number[] = [1, 2, 3, 4, 5];, ao passar o cursor sobre arrayNumerico, verá "number[]" para indicar que é um array de números.
