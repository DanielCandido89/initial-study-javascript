// função construtora - objetos
// função fabrica -objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {};
  // atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Daniel", "Ribeiro");
const p2 = new Pessoa("Maria", "Luiza");
p2.metodo();
