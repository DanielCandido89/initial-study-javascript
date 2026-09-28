// funções fábrica (factory functions)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    altura: a,
    peso: p,

    // getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Daniel", "Ribeiro", 1.84, 88);
const p2 = criaPessoa("João", "Ribeiro", 1.56, 56);
const p3 = criaPessoa("Marcos", "Ribeiro", 1.84, 120);

console.log(p1.nomeCompleto);
console.log(p1.imc);

console.log(p2.nomeCompleto);
console.log(p2.imc);

console.log(p3.nomeCompleto);
console.log(p3.imc);
