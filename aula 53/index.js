// escopo léxico

const nome = "Daniel";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Ribeiro";
  falaNome();
}

usaFalaNome();
