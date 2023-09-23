class Usuario {
  nome: string;
  anoNascimento: number;
  cpf: string;
  genero: string;

  constructor(nome: string, anoNascimento: number, cpf: string, genero: string) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.cpf = cpf;
    this.genero = genero;
  }

  equals(outroUsuario: Usuario): boolean {
    return this.cpf === outroUsuario.cpf;
  }

  speak_name(): string {
    return `Meu nome é ${this.nome}`;
  }
}

// Exemplo de uso da classe Usuario
const usuario1 = new Usuario("Alice", 1990, "123.456.789-00", "Feminino");
const usuario2 = new Usuario("Bob", 1985, "987.654.321-00", "Masculino");

console.log(usuario1.equals(usuario2)); // Deve retornar false, pois os CPFs são diferentes
console.log(usuario1.speak_name()); // Deve imprimir "Meu nome é Alice"
console.log(usuario2.speak_name()); // Deve imprimir "Meu nome é Bob"
