// construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => "ORIGINAL" + this.nome + " " + this.sobrenome;
}

// Pessoa Prototype === pessoa1.__proto__

Pessoa.Prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Daniel", "R."); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa("Maria", "L."); // <- Pessoa = Função Construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);
