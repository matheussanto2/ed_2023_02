class WaterTank {
  private capacity: number;
  private currentLevel: number;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("A capacidade da caixa d'água deve ser maior que zero.");
    }
    this.capacity = capacity;
    this.currentLevel = capacity;
  }

  private recursiveEmptyTank(level: number): number {
    if (level <= 0) {
      return 0;
    }
    console.log(`Extraindo 1 litro. Restam ${level - 1} litros.`);
    return 1 + this.recursiveEmptyTank(level - 1);
  }

  emptyTank(): void {
    if (this.currentLevel > 0) {
      console.log(`Esvaziando a caixa d'água de ${this.currentLevel} litros:`);
      const totalLitersExtracted = this.recursiveEmptyTank(this.currentLevel);
      console.log(`Total de ${totalLitersExtracted} litros extraídos.`);
      this.currentLevel = 0;
    } else {
      console.log("A caixa d'água já está vazia.");
    }
  }
}

// Exemplo de uso
const waterTank = new WaterTank(10); // Capacidade inicial da caixa d'água: 10 litros

waterTank.emptyTank(); // Esvaziar a caixa d'água
