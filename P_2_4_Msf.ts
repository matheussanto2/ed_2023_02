function fibonacci(n: number, depth: number = 0): number {
    let tabs = "";
    for (let i = 0; i < depth; i++) {
        tabs += "  "; // 
    }
    console.log(`${tabs}Calculando Fibonacci(${n})`);

    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const result = fibonacci(n - 1, depth + 1) + fibonacci(n - 2, depth + 1);
        return result;
    }
}

const n = 5;  // O número de Fibonacci que você deseja calcular
const fibonacci_n = fibonacci(n);
console.log(`O ${n}-ésimo termo da sequência de Fibonacci é: ${fibonacci_n}`);
