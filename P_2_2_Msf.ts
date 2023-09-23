function encontrarMaiorValorAbsoluto(arr: number[], currentIndex: number = 0, maiorAbsoluto: number = -Infinity): number {
  // Verifica se chegamos ao final do array
  if (currentIndex === arr.length) {
    return maiorAbsoluto;
  }

  // Calcula o valor absoluto do elemento atual
  const valorAbsoluto = Math.abs(arr[currentIndex]);

  // Compara o valor absoluto atual com o maior valor absoluto encontrado até agora
  if (valorAbsoluto > maiorAbsoluto) {
    maiorAbsoluto = valorAbsoluto;
  }

  // Chama a função recursivamente para o próximo elemento do array
  return encontrarMaiorValorAbsoluto(arr, currentIndex + 1, maiorAbsoluto);
}

// Exemplo de uso
const arrayNaoOrdenado: number[] = [5, -8, 2, -10, 1, 7];
const maiorValorAbsoluto = encontrarMaiorValorAbsoluto(arrayNaoOrdenado);
console.log("O maior valor absoluto no array é:", maiorValorAbsoluto);
