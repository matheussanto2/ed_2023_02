import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Dúvidas");
  console.log("2. Reclamações");
  console.log("3. Sair");
  rl.question("Digite o número correspondente à opção do menu: ", (opcao) => {
    processarOpcao(opcao);
  });
}

function processarOpcao(opcao: string) {
  switch (opcao) {
    case '1':
      console.log("Suas dúvidas devem ser encaminhadas para o email duvidas@email.com");
      exibirMenu();
      break;
    case '2':
      console.log("Para reclamações, entre em contato com o suporte.");
      exibirMenu();
      break;
    case '3':
      console.log("Saindo do programa.");
      rl.close();
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      exibirMenu();
  }
}

exibirMenu();
