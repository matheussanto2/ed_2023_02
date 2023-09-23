class MyArray {
  private elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  private recursivePrint(arr: number[], currentIndex: number): void {
    if (currentIndex >= 0) {
      console.log(arr[currentIndex]);
      this.recursivePrint(arr, currentIndex - 1);
    }
  }

  private recursiveReverse(arr: number[], currentIndex: number, reversedArray: number[] = []): number[] {
    if (currentIndex >= 0) {
      reversedArray.push(arr[currentIndex]);
      return this.recursiveReverse(arr, currentIndex - 1, reversedArray);
    }
    return reversedArray;
  }

  printElements(): void {
    console.log("Elementos do array:");
    this.recursivePrint(this.elements, this.elements.length - 1);
  }

  getReversedArray(): number[] {
    return this.recursiveReverse(this.elements, this.elements.length - 1);
  }
}

// Exemplo de uso
const array = new MyArray([1, 2, 3, 4, 5]);

console.log("Impressão dos elementos do array:");
array.printElements();

const reversedArray = array.getReversedArray();
console.log("Array em ordem reversa:", reversedArray);
