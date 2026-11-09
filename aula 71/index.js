// revisando objetos

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa("Daniel", "Ribeiro");
const p2 = new Pessoa("Maria", "Ribeiro");

console.log(p1);
console.log(p2);
