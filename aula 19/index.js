/* function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Daniel", "Ribeiro", "20");
const pessoa2 = criaPessoa("Maria", "Luiza", "18");
const pessoa3 = criaPessoa("João", "Moreira", "37");
const pessoa4 = criaPessoa("Junior", "Silva", "50");
const pessoa5 = criaPessoa("Jean", "Carlos", "77");

console.log(pessoa1.nome, pessoa2.nome);  */

const pessoa1 = {
  nome: "Daniel",
  sobrenome: "Ribeiro",
  idade: 20,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
