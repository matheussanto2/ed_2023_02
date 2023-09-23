class StackTracePrinter {
  printFatorialStackTrace(n: number, depth: number = 0): void {
    const spaces = ' '.repeat(depth * 2);
    console.log(spaces + `fatorial(${n})`);
    if (n <= 1) {
      console.log(spaces + 'Retorno 1');
      return;
    }
    console.log(spaces + `Chamada recursiva para fatorial(${n - 1})`);
    this.printFatorialStackTrace(n - 1, depth + 1);
    console.log(spaces + `Retorno ${n}`);
  }

  private fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  printFibonacciStackTrace(n: number, depth: number = 0): void {
    const spaces = ' '.repeat(depth * 2);
    console.log(spaces + `fibonacci(${n})`);
    if (n <= 1) {
      console.log(spaces + `Retorno ${n}`);
      return;
    }
    console.log(spaces + `Chamada recursiva para fibonacci(${n - 1})`);
    this.printFibonacciStackTrace(n - 1, depth + 1);
    console.log(spaces + `Chamada recursiva para fibonacci(${n - 2})`);
    this.printFibonacciStackTrace(n - 2, depth + 1);
    console.log(spaces + `Retorno ${this.fibonacci(n)}`);
  }
}

const tracer = new StackTracePrinter();

console.log('Pilha de execução para fatorial:');
tracer.printFatorialStackTrace(5);

console.log('\nPilha de execução para Fibonacci:');
tracer.printFibonacciStackTrace(5);
