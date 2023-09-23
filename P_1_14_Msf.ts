Variáveis globais podem levar a resultados incorretos quando funções locais com nomes iguais são usadas, pois as variáveis locais têm prioridade sobre as globais devido à hierarquia de escopo em JavaScript/TypeScript. 
  Isso viola um bom projeto de função, pois torna o código menos previsível. 
  Para evitar esse problema, evite o uso de variáveis globais sempre que possível e passe valores como argumentos para funções locais.

  let valor = 10; // Variável global

function calcular(valorLocal: number) {
  return valorLocal * 2;
}

console.log(calcular(5)); // Imprime 10
console.log(valor); // Imprime 10
