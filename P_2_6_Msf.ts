class MyArray {
  private elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  private recursiveSum(arr: number[], currentIndex: number): number {
    if (currentIndex < 0) {
      return 0;
    }
    return arr[currentIndex] + this.recursiveSum(arr, currentIndex - 1);
  }

  getSum(): number {
    return this.recursiveSum(this.elements, this.elements.length - 1);
  }
}

// Exemplo de uso
const array = new MyArray([1, 2, 3, 4, 5]);
const sum = array.getSum();
console.log("A soma dos elementos no array é:", sum);
