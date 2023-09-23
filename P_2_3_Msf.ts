class Factorial {
  private cache: Map<number, number> = new Map();

  calcularFatorial(n: number): number {
    if (n < 0) {
      throw new Error("O fatorial não está definido para números negativos.");
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    // Verifica se o resultado já está em cache
    if (this.cache.has(n)) {
      return this.cache.get(n)!;
    }

    // Caso contrário, calcula o fatorial e armazena no cache
    const resultado = n * this.calcularFatorial(n - 1);
    this.cache.set(n, resultado);
    return resultado;
  }
}

const fatorialCalculator = new Factorial();
const numero = 20; // O número para o qual queremos calcular o fatorial

console.time("Com Cache");
for (let i = 0; i < 10000; i++) {
  fatorialCalculator.calcularFatorial(numero);
}
console.timeEnd("Com Cache");

console.time("Sem Cache");
for (let i = 0; i < 10000; i++) {
  const calcularFatorialSemCache = (n: number): number => {
    if (n < 0) {
      throw new Error("O fatorial não está definido para números negativos.");
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    return n * calcularFatorialSemCache(n - 1);
  };

  calcularFatorialSemCache(numero);
}
console.timeEnd("Sem Cache");
