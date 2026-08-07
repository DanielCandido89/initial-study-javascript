const pessoa = {
  nome: "Daniel",
  sobrenome: "Ribeiro",
  idade: 20,
  endereco: {
    rua: "Av Brasil",
    numero: 20,
  },
};

// Atribuição via desustruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);
