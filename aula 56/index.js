// funções imediatas IIFE

(function (idade, peso, altura) {
  const sobrenome = "Ribeiro";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Daniel"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(20, 88, 1.84);
