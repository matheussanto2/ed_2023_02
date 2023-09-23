a recursão direta empilha chamadas recursivas na pilha de execução, resultando em uma complexidade espacial linear,   enquanto a recursão de cauda otimiza a complexidade espacial, mantendo uma pilha de execução constante. 
  Isso ilustra como escolher o tipo certo de recursão pode afetar a complexidade espacial de um algoritmo.

  class RecursiveFactorial {
  // Recursão Direta
  factorialRecursive(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * this.factorialRecursive(n - 1);
    }
  }

  // Recursão de Cauda
  factorialTailRecursive(n: number, result: number = 1): number {
    if (n === 0) {
      return result;
    } else {
      return this.factorialTailRecursive(n - 1, n * result);
    }
  }
}

const recursiveFactorial = new RecursiveFactorial();

// Exemplo de uso para calcular fatorial de 5
const n = 5;

console.log(`Fatorial de ${n} usando Recursão Direta: ${recursiveFactorial.factorialRecursive(n)}`);
console.log(`Fatorial de ${n} usando Recursão de Cauda: ${recursiveFactorial.factorialTailRecursive(n)}`);
