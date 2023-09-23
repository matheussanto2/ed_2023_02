function encontrarMenorElemento(arr: number[], currentIndex: number = 0, menor: number = Infinity): number {
  // Verifica se chegamos ao final do array
  if (currentIndex === arr.length) {
    return menor;
  }

  // Compara o elemento atual com o menor elemento encontrado até agora
  if (arr[currentIndex] < menor) {
    menor = arr[currentIndex];
  }

  // Chama a função recursivamente para o próximo elemento do array
  return encontrarMenorElemento(arr, currentIndex + 1, menor);
}

// Exemplo de uso
const arrayNaoOrdenado: number[] = [5, 8, 2, 10, 1, 7];
const menorElemento = encontrarMenorElemento(arrayNaoOrdenado);
console.log("O menor elemento no array é:", menorElemento);
