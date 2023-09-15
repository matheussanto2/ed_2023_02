class CallNode {
    constructor(public n: number, public depth: number) {}
}

class FibonacciTree {
    root: CallNode;
    children: FibonacciTree[] = [];

    constructor(n: number, depth: number) {
        this.root = new CallNode(n, depth);
    }

    addChild(child: FibonacciTree) {
        this.children.push(child);
    }

    printTree() {
        const tabs = '  '.repeat(this.root.depth);
        console.log(`${tabs}Calculando Fibonacci(${this.root.n})`);

        for (const child of this.children) {
            child.printTree();
        }
    }

    calculate(): number {
        if (this.root.n <= 0) {
            return 0;
        } else if (this.root.n === 1) {
            return 1;
        } else {
            const left = new FibonacciTree(this.root.n - 1, this.root.depth + 1);
            const right = new FibonacciTree(this.root.n - 2, this.root.depth + 1);
            this.addChild(left);
            this.addChild(right);
            return left.calculate() + right.calculate();
        }
    }
}

const n = 5; // O número de Fibonacci que você deseja calcular
const fibonacciTree = new FibonacciTree(n, 0);
console.log(`Árvore de Chamadas para Fibonacci(${n}):\n`);
fibonacciTree.calculate();
console.log(`\nO ${n}-ésimo termo da sequência de Fibonacci é: ${fibonacciTree.calculate()}`);

